"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import { useDashboardStore } from "@/stores/dashboard-store";
import { getCountryByCode } from "@/data/countries";
import {
  ALL_LIVE_TV, getTVByCountry, getConflictTV, getInternationalTV,
  get24hChannels, type LiveTVChannel
} from "@/data/live-tv";
import {
  Tv, Play, X, Maximize2, Minimize2, ExternalLink, Radio,
  AlertCircle, RefreshCw, MonitorPlay, Globe
} from "lucide-react";
import { cn } from "@/lib/utils";

type FilterMode = "all" | "focus" | "conflict" | "international" | "24h";
type ViewMode = "youtube" | "website" | "external";

function TVEmbed({ channel }: { channel: LiveTVChannel }) {
  const [viewMode, setViewMode] = useState<ViewMode>("youtube");
  const [showFallback, setShowFallback] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Reset state when channel changes
  useEffect(() => {
    setViewMode("youtube");
    setShowFallback(false);
    setHasError(false);
  }, [channel.id]);

  // Show "not loading?" hint after 6 seconds
  useEffect(() => {
    if (viewMode !== "youtube") return;
    const timer = setTimeout(() => setShowFallback(true), 6000);
    return () => clearTimeout(timer);
  }, [viewMode, channel.id]);

  const youtubeEmbedUrl = channel.embedUrl ||
    `https://www.youtube.com/embed/live_stream?channel=${channel.youtubeId}&autoplay=1&mute=1`;

  const youtubeDirectUrl = `https://www.youtube.com/channel/${channel.youtubeId}/live`;

  if (viewMode === "external" || (hasError && !channel.websiteStream)) {
    return (
      <div className="aspect-video bg-zinc-900 rounded-lg flex flex-col items-center justify-center gap-4">
        <MonitorPlay size={40} className="text-zinc-600" />
        <p className="text-sm text-zinc-400 text-center max-w-xs">
          This channel works best when watched directly on their platform
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <a
            href={youtubeDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-red-600/20 text-red-400 rounded-lg text-sm hover:bg-red-600/30 transition-colors border border-red-600/20"
          >
            <Play size={14} /> YouTube Live
          </a>
          {channel.websiteStream && (
            <a
              href={channel.websiteStream}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600/20 text-blue-400 rounded-lg text-sm hover:bg-blue-600/30 transition-colors border border-blue-600/20"
            >
              <Globe size={14} /> {channel.name} Website
            </a>
          )}
        </div>
        <button
          onClick={() => { setViewMode("youtube"); setShowFallback(false); setHasError(false); }}
          className="flex items-center gap-1 text-[10px] text-zinc-600 hover:text-zinc-400 mt-1"
        >
          <RefreshCw size={10} /> Try embed again
        </button>
      </div>
    );
  }

  if (viewMode === "website" && channel.websiteStream) {
    return (
      <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
        <iframe
          src={channel.websiteStream}
          className="absolute inset-0 w-full h-full"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          title={channel.name}
          sandbox="allow-scripts allow-same-origin allow-popups"
          onError={() => setViewMode("external")}
        />
        <div className="absolute bottom-2 right-2 flex gap-1">
          <button
            onClick={() => setViewMode("youtube")}
            className="px-2 py-1 bg-black/70 text-zinc-400 text-[10px] rounded hover:text-white backdrop-blur"
          >
            YouTube
          </button>
          <a
            href={channel.websiteStream}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-1 bg-black/70 text-zinc-400 text-[10px] rounded hover:text-white backdrop-blur"
          >
            <ExternalLink size={10} className="inline mr-1" />Open
          </a>
        </div>
      </div>
    );
  }

  // Default: YouTube embed
  return (
    <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
      <iframe
        key={`${channel.id}-yt`}
        src={youtubeEmbedUrl}
        className="absolute inset-0 w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        title={channel.name}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
      />
      {/* Fallback hint that appears after delay */}
      {showFallback && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3 pt-8">
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-zinc-400">Stream not loading?</span>
            <div className="flex gap-1.5">
              {channel.websiteStream && (
                <button
                  onClick={() => setViewMode("website")}
                  className="px-2.5 py-1 bg-blue-600/30 text-blue-300 text-[11px] rounded hover:bg-blue-600/40 transition-colors"
                >
                  Try website player
                </button>
              )}
              <button
                onClick={() => setViewMode("external")}
                className="px-2.5 py-1 bg-zinc-700/50 text-zinc-300 text-[11px] rounded hover:bg-zinc-700/70 transition-colors"
              >
                Watch externally
              </button>
              <button
                onClick={() => setShowFallback(false)}
                className="px-2 py-1 text-zinc-500 text-[11px] hover:text-zinc-300"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ChannelCard({
  channel,
  isActive,
  onClick,
}: {
  channel: LiveTVChannel;
  isActive: boolean;
  onClick: () => void;
}) {
  const country = getCountryByCode(channel.country);

  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all border",
        isActive
          ? "bg-blue-500/10 border-blue-500/30 text-blue-300"
          : "bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700 hover:bg-zinc-800/50"
      )}
    >
      <span className="text-lg flex-shrink-0">{country?.flagEmoji || "📺"}</span>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium truncate">{channel.name}</span>
          {channel.is24h && (
            <span className="flex-shrink-0 px-1 py-0.5 bg-green-500/10 text-green-400 text-[8px] font-mono rounded">
              24/7
            </span>
          )}
        </div>
        <div className="text-[10px] text-zinc-600 truncate">{channel.description}</div>
      </div>
      <div className="flex items-center gap-1.5">
        {channel.websiteStream && (
          <a
            href={channel.websiteStream}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex-shrink-0 w-6 h-6 rounded flex items-center justify-center text-zinc-600 hover:text-blue-400 hover:bg-blue-500/10 transition-colors"
            title="Open website stream"
          >
            <Globe size={11} />
          </a>
        )}
        <div className={cn(
          "flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors",
          isActive ? "bg-red-500 text-white" : "bg-zinc-800 text-zinc-500"
        )}>
          {isActive ? <Radio size={12} /> : <Play size={12} fill="currentColor" />}
        </div>
      </div>
    </button>
  );
}

export function TVPanel() {
  const { profile, selectedCountry } = useDashboardStore();
  const [activeChannel, setActiveChannel] = useState<LiveTVChannel | null>(null);
  const [filter, setFilter] = useState<FilterMode>("focus");
  const [isFullscreen, setIsFullscreen] = useState(false);

  const filteredChannels = useMemo(() => {
    switch (filter) {
      case "focus":
        return profile.focusCountries.flatMap((code) => getTVByCountry(code));
      case "conflict":
        return getConflictTV();
      case "international":
        return getInternationalTV();
      case "24h":
        return get24hChannels();
      default:
        return ALL_LIVE_TV.sort((a, b) => a.priority - b.priority);
    }
  }, [filter, profile.focusCountries]);

  const groupedChannels = useMemo(() => {
    const groups: Record<string, LiveTVChannel[]> = {};
    filteredChannels.forEach((ch) => {
      if (!groups[ch.country]) groups[ch.country] = [];
      groups[ch.country].push(ch);
    });
    return groups;
  }, [filteredChannels]);

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-zinc-950/95 backdrop-blur border-b border-zinc-800 px-4 py-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Tv size={18} className="text-red-400" />
            <h2 className="text-sm font-bold text-white">Live TV</h2>
            <span className="text-xs text-zinc-500 font-mono">{filteredChannels.length} ch</span>
            {activeChannel && (
              <div className="flex items-center gap-1 px-2 py-0.5 bg-red-500/10 rounded-full">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[10px] text-red-400 font-mono">ON AIR</span>
              </div>
            )}
          </div>
        </div>
        <div className="flex gap-1.5 overflow-x-auto">
          {([
            { id: "focus" as FilterMode, label: "Your Focus", icon: "⭐" },
            { id: "conflict" as FilterMode, label: "Conflict", icon: "🔥" },
            { id: "international" as FilterMode, label: "International", icon: "🌍" },
            { id: "24h" as FilterMode, label: "24/7 Live", icon: "📡" },
            { id: "all" as FilterMode, label: "All", icon: "📺" },
          ]).map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={cn(
                "flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium transition-colors whitespace-nowrap",
                filter === f.id
                  ? "bg-blue-500/20 text-blue-400"
                  : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800"
              )}
            >
              <span>{f.icon}</span> {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Active player */}
      {activeChannel && (
        <div className={cn(
          "border-b border-zinc-800",
          isFullscreen ? "fixed inset-0 z-50 bg-black flex flex-col" : "px-4 py-3"
        )}>
          <div className={cn("flex items-center justify-between mb-2", isFullscreen && "px-4 pt-3")}>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs font-medium text-white">{activeChannel.name}</span>
              <span className="text-[10px] text-zinc-500">
                {getCountryByCode(activeChannel.country)?.flagEmoji} {activeChannel.language.toUpperCase()}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-1.5 rounded text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              >
                {isFullscreen ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
              </button>
              <a
                href={activeChannel.websiteStream || `https://www.youtube.com/channel/${activeChannel.youtubeId}/live`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              >
                <ExternalLink size={14} />
              </a>
              <button
                onClick={() => { setActiveChannel(null); setIsFullscreen(false); }}
                className="p-1.5 rounded text-zinc-400 hover:text-red-400 hover:bg-zinc-800 transition-colors"
              >
                <X size={14} />
              </button>
            </div>
          </div>
          <div className={isFullscreen ? "flex-1 px-4 pb-4" : ""}>
            <TVEmbed channel={activeChannel} />
          </div>
        </div>
      )}

      {/* Channel list */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4">
        {Object.keys(groupedChannels).length === 0 ? (
          <div className="flex flex-col items-center justify-center h-48 text-zinc-500 gap-2">
            <Tv size={32} className="text-zinc-700" />
            <p className="text-sm">No channels for this filter</p>
          </div>
        ) : (
          Object.entries(groupedChannels).map(([countryCode, channels]) => {
            const country = getCountryByCode(countryCode);
            return (
              <div key={countryCode}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm">{country?.flagEmoji}</span>
                  <span className="text-xs font-semibold text-zinc-400">{country?.name || countryCode}</span>
                  <div className="flex-1 h-px bg-zinc-800" />
                  <span className="text-[10px] text-zinc-600">{channels.length} ch</span>
                </div>
                <div className="space-y-1.5">
                  {channels.map((channel) => (
                    <ChannelCard
                      key={channel.id}
                      channel={channel}
                      isActive={activeChannel?.id === channel.id}
                      onClick={() => setActiveChannel(activeChannel?.id === channel.id ? null : channel)}
                    />
                  ))}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
