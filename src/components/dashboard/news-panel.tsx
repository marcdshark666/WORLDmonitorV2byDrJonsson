"use client";

import { useMemo } from "react";
import { useNews } from "@/hooks/use-news";
import { getSourcesByCountry, getGlobalSources } from "@/data/news-sources";
import { useDashboardStore } from "@/stores/dashboard-store";
import { SeverityBadge } from "@/components/ui/severity-badge";
import { getRelativeTime } from "@/lib/utils";
import {
  Newspaper, RefreshCw, ExternalLink, Loader2, AlertCircle,
  Clock, Globe, Filter
} from "lucide-react";
import { cn } from "@/lib/utils";

export function NewsPanel() {
  const { selectedCountry, profile, activeTopics } = useDashboardStore();

  // Build feed URLs based on context
  const feedUrls = useMemo(() => {
    const sources = [];

    if (selectedCountry) {
      // Country-specific sources
      sources.push(...getSourcesByCountry(selectedCountry));
    } else {
      // Profile-based: focus countries + global
      profile.focusCountries.forEach((code) => {
        sources.push(...getSourcesByCountry(code));
      });
      sources.push(...getGlobalSources());
    }

    // Filter by topics if any active
    const filtered = activeTopics.length > 0
      ? sources.filter((s) => s.topics.some((t) => activeTopics.includes(t)))
      : sources;

    // Return unique RSS URLs (limit to prevent overload)
    return [...new Set(filtered.map((s) => s.rssUrl).filter(Boolean))].slice(0, 30);
  }, [selectedCountry, profile.focusCountries, activeTopics]);

  const { news, loading, error, lastUpdated, refresh } = useNews({
    feedUrls,
    maxItems: 100,
    refreshInterval: 300000, // 5 min
    country: selectedCountry || undefined,
  });

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <Newspaper size={18} className="text-blue-400" />
          <h2 className="text-sm font-bold text-white">
            {selectedCountry ? `News — ${selectedCountry}` : "Global News Feed"}
          </h2>
          <span className="text-xs text-zinc-500 font-mono">
            {news.length} articles
          </span>
        </div>
        <div className="flex items-center gap-2">
          {lastUpdated && (
            <span className="text-[10px] text-zinc-600 flex items-center gap-1">
              <Clock size={10} />
              {getRelativeTime(lastUpdated)}
            </span>
          )}
          <button
            onClick={refresh}
            disabled={loading}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors disabled:opacity-50"
          >
            <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {loading && news.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-48 text-zinc-500 gap-3">
            <Loader2 size={24} className="animate-spin text-blue-400" />
            <span className="text-sm">Loading news feeds...</span>
            <span className="text-xs text-zinc-600">Fetching from {feedUrls.length} sources</span>
          </div>
        ) : error && news.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-48 text-zinc-500 gap-2">
            <AlertCircle size={24} className="text-red-400" />
            <span className="text-sm">Failed to load news</span>
            <button onClick={refresh} className="text-xs text-blue-400 hover:underline">
              Try again
            </button>
          </div>
        ) : news.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-48 text-zinc-500 gap-2">
            <Globe size={24} />
            <span className="text-sm">No news items found</span>
            <span className="text-xs">Try adjusting your filters</span>
          </div>
        ) : (
          <div className="divide-y divide-zinc-800/50">
            {news.map((item) => (
              <article
                key={item.id}
                className="px-4 py-3 hover:bg-zinc-900/50 transition-colors group cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  {/* Severity indicator */}
                  <div className="mt-1 flex-shrink-0">
                    <SeverityBadge severity={item.severity} size="sm" showLabel={false} />
                  </div>

                  <div className="flex-1 min-w-0">
                    {/* Title */}
                    <a
                      href={item.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-zinc-200 hover:text-blue-400 transition-colors line-clamp-2 group-hover:text-blue-400"
                    >
                      {item.title}
                      <ExternalLink
                        size={10}
                        className="inline ml-1 opacity-0 group-hover:opacity-50 transition-opacity"
                      />
                    </a>

                    {/* Summary */}
                    {item.summary && (
                      <p className="text-xs text-zinc-500 mt-1 line-clamp-2">
                        {item.summary}
                      </p>
                    )}

                    {/* Meta */}
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-[10px] text-zinc-600 font-mono">
                        {item.source}
                      </span>
                      <span className="text-[10px] text-zinc-700">•</span>
                      <span className="text-[10px] text-zinc-600">
                        {getRelativeTime(new Date(item.publishedAt))}
                      </span>
                      {item.countries.length > 0 && (
                        <>
                          <span className="text-[10px] text-zinc-700">•</span>
                          <span className="text-[10px] text-zinc-600">
                            {item.countries.join(", ")}
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Thumbnail */}
                  {item.imageUrl && (
                    <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-zinc-800">
                      <img
                        src={item.imageUrl}
                        alt=""
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
