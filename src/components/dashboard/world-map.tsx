"use client";

import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { useDashboardStore } from "@/stores/dashboard-store";
import { ALL_COUNTRIES, getCountryByCode } from "@/data/countries";
import { SeverityBadge } from "@/components/ui/severity-badge";
import { cn } from "@/lib/utils";
import { formatNumber } from "@/lib/utils";
import { Layers, Globe } from "lucide-react";

// Simulated CII scores
function getCII(code: string): number {
  const highCII: Record<string, number> = {
    UA: 95, PS: 93, SD: 88, MM: 85, SY: 82, SO: 80, YE: 78, AF: 77,
    CD: 76, HT: 74, LY: 70, ML: 68, BF: 66, NE: 65, IQ: 62, CF: 72,
    ET: 70, SS: 75, RU: 55, IL: 50, IR: 52, PK: 48, VE: 45, NG: 42,
  };
  if (highCII[code]) return highCII[code];
  const seed = code.charCodeAt(0) * 100 + code.charCodeAt(1);
  return Math.round(((seed * 9301 + 49297) % 233280 / 233280) * 50 + 5);
}

function getCIIColor(cii: number): string {
  if (cii >= 80) return "#ef4444";
  if (cii >= 60) return "#f97316";
  if (cii >= 40) return "#eab308";
  if (cii >= 20) return "#3b82f6";
  return "#22c55e";
}

// Conflict zones with pulsing
const CONFLICT_ZONES = [
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
];

// Map tile styles
const MAP_STYLES = {
  dark: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
  satellite: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
  terrain: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
  streets: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png",
};

type MapStyle = keyof typeof MAP_STYLES;

export function WorldMap() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.LayerGroup | null>(null);
  const conflictLayerRef = useRef<L.LayerGroup | null>(null);
  const [mapReady, setMapReady] = useState(false);
  const [mapStyle, setMapStyle] = useState<MapStyle>("satellite");
  const [showLayers, setShowLayers] = useState(false);
  const tileLayerRef = useRef<L.TileLayer | null>(null);

  const { selectedCountry, setSelectedCountry, setActivePanel, profile, mapLayers } = useDashboardStore();

  // Initialize map
  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    let L: typeof import("leaflet");

    const initMap = async () => {
      L = await import("leaflet");

      // Fix default marker icons
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
        iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
        shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
      });

      const map = L.map(mapContainerRef.current!, {
        center: [30, 20],
        zoom: 3,
        minZoom: 2,
        maxZoom: 18,
        zoomControl: false,
        attributionControl: false,
        worldCopyJump: true,
      });

      // Satellite tile layer
      const tileLayer = L.tileLayer(MAP_STYLES.satellite, {
        maxZoom: 18,
        attribution: "",
      }).addTo(map);
      tileLayerRef.current = tileLayer;

      // Add attribution in corner
      L.control.attribution({
        position: "bottomleft",
        prefix: false,
      }).addTo(map);

      // Zoom control
      L.control.zoom({ position: "topright" }).addTo(map);

      // Marker layer
      const markers = L.layerGroup().addTo(map);
      markersRef.current = markers;

      // Conflict layer
      const conflictLayer = L.layerGroup().addTo(map);
      conflictLayerRef.current = conflictLayer;

      mapRef.current = map;
      setMapReady(true);
    };

    initMap();

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
        setMapReady(false);
      }
    };
  }, []);

  // Add country markers
  useEffect(() => {
    if (!mapReady || !markersRef.current) return;

    const addMarkers = async () => {
      const L = await import("leaflet");
      const markers = markersRef.current!;
      markers.clearLayers();

      ALL_COUNTRIES.forEach((country) => {
        if (!country.lat || !country.lng) return;

        const cii = getCII(country.code);
        const color = getCIIColor(cii);
        const isFocus = profile.focusCountries.includes(country.code);
        const isSelected = selectedCountry === country.code;
        const radius = Math.max(4, Math.min(12, Math.log10(country.population + 1) * 2));

        const marker = L.circleMarker([country.lat, country.lng], {
          radius: isSelected ? radius * 2 : isFocus ? radius * 1.5 : radius,
          fillColor: isSelected ? "#3b82f6" : color,
          color: isSelected ? "#93c5fd" : isFocus ? "#eab308" : color,
          weight: isSelected ? 3 : isFocus ? 2 : 1,
          opacity: 1,
          fillOpacity: isSelected ? 0.9 : 0.7,
        });

        // Tooltip
        const tooltipContent = `
          <div style="font-family: ui-monospace, monospace; min-width: 180px;">
            <div style="font-size: 16px; margin-bottom: 4px;">${country.flagEmoji} <strong>${country.name}</strong></div>
            <div style="font-size: 11px; color: #a1a1aa;">${country.nameSv} · ${country.region}</div>
            <hr style="border-color: #333; margin: 6px 0;" />
            <div style="display: flex; justify-content: space-between; font-size: 11px;">
              <span style="color: #a1a1aa;">Capital:</span>
              <span style="color: #e4e4e7;">${country.capital}</span>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 11px;">
              <span style="color: #a1a1aa;">Population:</span>
              <span style="color: #e4e4e7;">${formatNumber(country.population)}</span>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 11px;">
              <span style="color: #a1a1aa;">CII Score:</span>
              <span style="color: ${color}; font-weight: bold;">${cii}</span>
            </div>
            ${isFocus ? '<div style="margin-top: 4px; font-size: 10px; color: #eab308;">⭐ Focus Country</div>' : ""}
          </div>
        `;

        marker.bindTooltip(tooltipContent, {
          className: "custom-tooltip",
          direction: "top",
          offset: [0, -8],
        });

        // Click handler
        marker.on("click", () => {
          setSelectedCountry(country.code);
          setActivePanel("overview");
        });

        markers.addLayer(marker);
      });
    };

    addMarkers();
  }, [mapReady, selectedCountry, profile.focusCountries, setSelectedCountry, setActivePanel]);

  // Add conflict zones
  useEffect(() => {
    if (!mapReady || !conflictLayerRef.current) return;

    const addConflicts = async () => {
      const L = await import("leaflet");
      const layer = conflictLayerRef.current!;
      layer.clearLayers();

      if (!mapLayers.conflicts) return;

      CONFLICT_ZONES.forEach((zone) => {
        // Outer pulse ring
        const pulseOuter = L.circleMarker([zone.lat, zone.lng], {
          radius: 20,
          fillColor: "#ef4444",
          color: "#ef4444",
          weight: 1,
          opacity: 0.3,
          fillOpacity: 0.1,
          className: "conflict-pulse",
        });

        // Inner marker
        const inner = L.circleMarker([zone.lat, zone.lng], {
          radius: 6,
          fillColor: "#ef4444",
          color: "#fca5a5",
          weight: 2,
          opacity: 0.9,
          fillOpacity: 0.8,
        });

        inner.bindTooltip(
          `<div style="font-family: monospace; font-size: 12px;">
            <strong style="color: #ef4444;">⚠ ${zone.name}</strong><br/>
            <span style="color: #a1a1aa;">Severity: </span>
            <span style="color: #ef4444; font-weight: bold;">${zone.severity}</span>
          </div>`,
          { className: "custom-tooltip", direction: "top" }
        );

        layer.addLayer(pulseOuter);
        layer.addLayer(inner);
      });
    };

    addConflicts();
  }, [mapReady, mapLayers.conflicts]);

  // Fly to selected country
  useEffect(() => {
    if (!mapReady || !mapRef.current || !selectedCountry) return;
    const country = getCountryByCode(selectedCountry);
    if (country) {
      mapRef.current.flyTo([country.lat, country.lng], 6, { duration: 1.5 });
    }
  }, [mapReady, selectedCountry]);

  // Change tile layer
  useEffect(() => {
    if (!mapReady || !mapRef.current || !tileLayerRef.current) return;

    const changeTiles = async () => {
      const L = await import("leaflet");
      tileLayerRef.current!.remove();
      const newLayer = L.tileLayer(MAP_STYLES[mapStyle], {
        maxZoom: 18,
        attribution: "",
      }).addTo(mapRef.current!);
      tileLayerRef.current = newLayer;
    };

    changeTiles();
  }, [mapReady, mapStyle]);

  return (
    <div className="relative flex flex-col h-full bg-zinc-950">
      {/* Leaflet CSS */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css"
      />

      {/* Custom tooltip & pulse styles */}
      <style>{`
        .custom-tooltip {
          background: #18181b !important;
          border: 1px solid #3f3f46 !important;
          border-radius: 8px !important;
          padding: 8px 12px !important;
          box-shadow: 0 10px 25px rgba(0,0,0,0.5) !important;
          color: #e4e4e7 !important;
        }
        .custom-tooltip::before {
          border-top-color: #3f3f46 !important;
        }
        .leaflet-control-zoom a {
          background: #18181b !important;
          color: #a1a1aa !important;
          border-color: #3f3f46 !important;
        }
        .leaflet-control-zoom a:hover {
          background: #27272a !important;
          color: #fff !important;
        }
        @keyframes conflict-pulse {
          0% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.8); opacity: 0.1; }
          100% { transform: scale(1); opacity: 0.4; }
        }
        .conflict-pulse {
          animation: conflict-pulse 2s ease-in-out infinite;
          transform-origin: center;
        }
        .leaflet-container {
          background: #09090b !important;
        }
      `}</style>

      {/* Map container */}
      <div ref={mapContainerRef} className="flex-1 w-full" style={{ minHeight: "400px" }} />

      {/* Map style switcher */}
      <div className="absolute top-3 left-3 z-[1000]">
        <button
          onClick={() => setShowLayers(!showLayers)}
          className="p-2 bg-zinc-900/90 border border-zinc-700 rounded-lg text-zinc-400 hover:text-white transition-colors backdrop-blur"
        >
          <Layers size={16} />
        </button>
        {showLayers && (
          <div className="absolute top-10 left-0 bg-zinc-900/95 border border-zinc-700 rounded-lg p-2 backdrop-blur shadow-xl min-w-[140px]">
            {(Object.keys(MAP_STYLES) as MapStyle[]).map((style) => (
              <button
                key={style}
                onClick={() => {
                  setMapStyle(style);
                  setShowLayers(false);
                }}
                className={cn(
                  "w-full text-left px-3 py-1.5 rounded text-xs transition-colors",
                  mapStyle === style
                    ? "bg-blue-500/20 text-blue-400"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                )}
              >
                {style === "satellite" ? "🛰️ Satellite" :
                 style === "dark" ? "🌑 Dark" :
                 style === "terrain" ? "🏔️ Terrain" :
                 "🗺️ Streets"}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="absolute bottom-3 right-3 z-[1000] flex items-center gap-2 px-3 py-1.5 bg-zinc-900/90 border border-zinc-800 rounded-lg backdrop-blur">
        <span className="text-[9px] text-zinc-500 font-mono">CII:</span>
        {[
          { label: "Stable", color: "#22c55e" },
          { label: "Low", color: "#3b82f6" },
          { label: "Mod", color: "#eab308" },
          { label: "High", color: "#f97316" },
          { label: "Crit", color: "#ef4444" },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
            <span className="text-[9px] text-zinc-400">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Country count */}
      <div className="absolute bottom-3 left-3 z-[1000] px-2 py-1 bg-zinc-900/90 border border-zinc-800 rounded text-[10px] font-mono text-zinc-500 backdrop-blur">
        <Globe size={10} className="inline mr-1" />
        {ALL_COUNTRIES.length} countries · Click to explore
      </div>
    </div>
  );
}
