"use client";

import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { useDashboardStore } from "@/stores/dashboard-store";
import { ALL_COUNTRIES, getCountryByCode } from "@/data/countries";
import { SeverityBadge } from "@/components/ui/severity-badge";
import { cn } from "@/lib/utils";
import {
  ZoomIn, ZoomOut, RotateCcw, Maximize2, Layers,
  Crosshair, Globe
} from "lucide-react";

// Map projection: Equirectangular (simple, no external dependency)
function projectPoint(lat: number, lng: number, width: number, height: number, zoom: number, offsetX: number, offsetY: number) {
  const x = ((lng + 180) / 360) * width * zoom + offsetX;
  const y = ((90 - lat) / 180) * height * zoom + offsetY;
  return { x, y };
}

// Simulated CII scores for map coloring
function getCII(code: string): number {
  const seed = code.charCodeAt(0) * 100 + code.charCodeAt(1);
  return Math.round(((seed * 9301 + 49297) % 233280 / 233280) * 80 + 10);
}

function getCIIColor(cii: number): string {
  if (cii >= 80) return "#ef4444";
  if (cii >= 60) return "#f97316";
  if (cii >= 40) return "#eab308";
  if (cii >= 20) return "#3b82f6";
  return "#22c55e";
}

interface TooltipData {
  country: typeof ALL_COUNTRIES[0];
  cii: number;
  x: number;
  y: number;
}

export function WorldMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { selectedCountry, setSelectedCountry, setActivePanel, profile, mapLayers } = useDashboardStore();

  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [tooltip, setTooltip] = useState<TooltipData | null>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 450 });

  // Conflict zones for pulsing dots
  const conflictZones = useMemo(() => [
    { lat: 48.3, lng: 35.0, name: "Ukraine", severity: 95 },
    { lat: 31.5, lng: 34.5, name: "Gaza", severity: 92 },
    { lat: 15.5, lng: 32.5, name: "Sudan", severity: 88 },
    { lat: 19.7, lng: 96.2, name: "Myanmar", severity: 82 },
    { lat: 9.0, lng: 38.7, name: "Ethiopia", severity: 72 },
    { lat: 14.0, lng: -2.0, name: "Sahel", severity: 75 },
    { lat: 2.0, lng: 45.3, name: "Somalia", severity: 70 },
    { lat: -2.5, lng: 28.8, name: "DRC", severity: 78 },
    { lat: 35.0, lng: 38.0, name: "Syria", severity: 60 },
    { lat: 15.5, lng: 48.0, name: "Yemen", severity: 68 },
    { lat: 18.9, lng: -72.3, name: "Haiti", severity: 65 },
  ], []);

  // Resize handler
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Draw map
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { width, height } = dimensions;
    canvas.width = width * 2; // Retina
    canvas.height = height * 2;
    ctx.scale(2, 2);

    // Background
    ctx.fillStyle = "#09090b";
    ctx.fillRect(0, 0, width, height);

    // Grid lines
    ctx.strokeStyle = "#18181b";
    ctx.lineWidth = 0.5;

    // Latitude lines
    for (let lat = -60; lat <= 80; lat += 20) {
      ctx.beginPath();
      const start = projectPoint(lat, -180, width, height, zoom, offset.x, offset.y);
      const end = projectPoint(lat, 180, width, height, zoom, offset.x, offset.y);
      ctx.moveTo(start.x, start.y);
      ctx.lineTo(end.x, end.y);
      ctx.stroke();
    }

    // Longitude lines
    for (let lng = -180; lng <= 180; lng += 30) {
      ctx.beginPath();
      const start = projectPoint(90, lng, width, height, zoom, offset.x, offset.y);
      const end = projectPoint(-90, lng, width, height, zoom, offset.x, offset.y);
      ctx.moveTo(start.x, start.y);
      ctx.lineTo(end.x, end.y);
      ctx.stroke();
    }

    // Draw country dots
    ALL_COUNTRIES.forEach((country) => {
      const { x, y } = projectPoint(country.lat, country.lng, width, height, zoom, offset.x, offset.y);

      // Skip if off screen
      if (x < -20 || x > width + 20 || y < -20 || y > height + 20) return;

      const cii = getCII(country.code);
      const isSelected = selectedCountry === country.code;
      const isFocus = profile.focusCountries.includes(country.code);

      // Country dot
      const baseRadius = Math.max(2, Math.min(6, Math.log10(country.population + 1) * 1.2)) * zoom;
      const radius = isSelected ? baseRadius * 1.8 : isFocus ? baseRadius * 1.3 : baseRadius;

      // Glow effect for high CII
      if (cii >= 60) {
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius * 3);
        gradient.addColorStop(0, getCIIColor(cii) + "40");
        gradient.addColorStop(1, getCIIColor(cii) + "00");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, radius * 3, 0, Math.PI * 2);
        ctx.fill();
      }

      // Selection ring
      if (isSelected) {
        ctx.strokeStyle = "#3b82f6";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(x, y, radius + 4, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Focus ring
      if (isFocus && !isSelected) {
        ctx.strokeStyle = "#eab30880";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(x, y, radius + 3, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Main dot
      ctx.fillStyle = isSelected ? "#3b82f6" : getCIIColor(cii);
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();

      // Label for large/selected/focus countries
      if ((zoom > 1.5 || isSelected || isFocus) && (country.population > 30000000 || isSelected || isFocus)) {
        ctx.fillStyle = isSelected ? "#93c5fd" : "#71717a";
        ctx.font = `${isSelected ? "bold " : ""}${Math.max(8, 10 * zoom)}px ui-monospace, monospace`;
        ctx.textAlign = "center";
        ctx.fillText(country.code, x, y - radius - 4);
      }
    });

    // Draw conflict zones (pulsing)
    if (mapLayers.conflicts) {
      const time = Date.now() / 1000;
      conflictZones.forEach((zone) => {
        const { x, y } = projectPoint(zone.lat, zone.lng, width, height, zoom, offset.x, offset.y);
        if (x < -20 || x > width + 20 || y < -20 || y > height + 20) return;

        const pulseRadius = (8 + Math.sin(time * 2) * 4) * zoom;
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, pulseRadius);
        gradient.addColorStop(0, "#ef444480");
        gradient.addColorStop(0.5, "#ef444430");
        gradient.addColorStop(1, "#ef444400");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, pulseRadius, 0, Math.PI * 2);
        ctx.fill();
      });
    }

  }, [dimensions, zoom, offset, selectedCountry, profile.focusCountries, mapLayers, conflictZones]);

  // Animation loop for conflict pulses
  useEffect(() => {
    let animFrame: number;
    const animate = () => {
      // Trigger re-render for pulse animation
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.dispatchEvent(new Event("redraw"));
      }
      animFrame = requestAnimationFrame(animate);
    };
    if (mapLayers.conflicts) {
      animFrame = requestAnimationFrame(animate);
    }
    return () => cancelAnimationFrame(animFrame);
  }, [mapLayers.conflicts]);

  // Mouse handlers
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - offset.x, y: e.clientY - offset.y });
  }, [offset]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const { width, height } = dimensions;

    if (isDragging) {
      setOffset({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
      return;
    }

    // Find closest country for tooltip
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    let closest: TooltipData | null = null;
    let minDist = 20;

    ALL_COUNTRIES.forEach((country) => {
      const { x, y } = projectPoint(country.lat, country.lng, width, height, zoom, offset.x, offset.y);
      const dist = Math.sqrt((mouseX - x) ** 2 + (mouseY - y) ** 2);
      if (dist < minDist) {
        minDist = dist;
        closest = { country, cii: getCII(country.code), x: mouseX, y: mouseY };
      }
    });

    setTooltip(closest);
  }, [isDragging, dragStart, dimensions, zoom, offset]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleClick = useCallback((e: React.MouseEvent) => {
    if (tooltip) {
      setSelectedCountry(tooltip.country.code);
      setActivePanel("overview");
    }
  }, [tooltip, setSelectedCountry, setActivePanel]);

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setZoom((z) => Math.max(0.5, Math.min(5, z + delta)));
  }, []);

  const resetView = () => {
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  };

  return (
    <div className="relative flex flex-col h-full bg-zinc-950" ref={containerRef}>
      {/* Map controls */}
      <div className="absolute top-3 right-3 z-10 flex flex-col gap-1">
        <button
          onClick={() => setZoom((z) => Math.min(5, z + 0.3))}
          className="p-2 bg-zinc-900/90 border border-zinc-700 rounded-lg text-zinc-400 hover:text-white transition-colors"
        >
          <ZoomIn size={14} />
        </button>
        <button
          onClick={() => setZoom((z) => Math.max(0.5, z - 0.3))}
          className="p-2 bg-zinc-900/90 border border-zinc-700 rounded-lg text-zinc-400 hover:text-white transition-colors"
        >
          <ZoomOut size={14} />
        </button>
        <button
          onClick={resetView}
          className="p-2 bg-zinc-900/90 border border-zinc-700 rounded-lg text-zinc-400 hover:text-white transition-colors"
        >
          <RotateCcw size={14} />
        </button>
      </div>

      {/* Zoom indicator */}
      <div className="absolute bottom-3 left-3 z-10 px-2 py-1 bg-zinc-900/90 border border-zinc-800 rounded text-[10px] font-mono text-zinc-500">
        {(zoom * 100).toFixed(0)}% · {ALL_COUNTRIES.length} entities
      </div>

      {/* Legend */}
      <div className="absolute bottom-3 right-3 z-10 flex items-center gap-2 px-3 py-1.5 bg-zinc-900/90 border border-zinc-800 rounded-lg">
        <span className="text-[9px] text-zinc-600 font-mono">CII:</span>
        {[
          { label: "Stable", color: "#22c55e" },
          { label: "Low", color: "#3b82f6" },
          { label: "Mod", color: "#eab308" },
          { label: "High", color: "#f97316" },
          { label: "Crit", color: "#ef4444" },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
            <span className="text-[9px] text-zinc-500">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className={cn("flex-1 cursor-grab", isDragging && "cursor-grabbing")}
        style={{ width: "100%", height: "100%" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onClick={handleClick}
        onWheel={handleWheel}
      />

      {/* Tooltip */}
      {tooltip && !isDragging && (
        <div
          className="absolute z-20 pointer-events-none"
          style={{ left: tooltip.x + 15, top: tooltip.y - 10 }}
        >
          <div className="bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 shadow-xl">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-lg">{tooltip.country.flagEmoji}</span>
              <span className="text-sm font-bold text-white">{tooltip.country.name}</span>
            </div>
            <div className="flex items-center gap-3 text-[10px] text-zinc-400">
              <span>{tooltip.country.capital}</span>
              <SeverityBadge severity={tooltip.cii} size="sm" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
