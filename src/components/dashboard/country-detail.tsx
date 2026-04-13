"use client";

import { useMemo } from "react";
import { getCountryByCode } from "@/data/countries";
import { getSourcesByCountry } from "@/data/news-sources";
import { useDashboardStore } from "@/stores/dashboard-store";
import { useNews } from "@/hooks/use-news";
import { SeverityBadge } from "@/components/ui/severity-badge";
import { formatNumber, getRelativeTime } from "@/lib/utils";
import {
  X, Star, StarOff, ExternalLink, Users, MapPin, Globe,
  Building2, Coins, Shield, Heart, Wifi, TreePine,
  Newspaper, TrendingUp, ArrowLeft, Clock, Loader2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { InfoTip, InfoTerm } from "@/components/ui/info-tip";

// Simulated metrics — in production these come from APIs
function getSimulatedMetrics(code: string) {
  // Deterministic pseudo-random based on country code
  const seed = code.charCodeAt(0) * 100 + code.charCodeAt(1);
  const r = (offset: number) => ((seed + offset) * 9301 + 49297) % 233280 / 233280;

  return {
    ciiScore: Math.round(r(1) * 80 + 10),
    gdpPerCapita: Math.round(r(2) * 60000 + 1000),
    inflation: +(r(3) * 15 + 0.5).toFixed(1),
    unemployment: +(r(4) * 25 + 1).toFixed(1),
    democracyIndex: +(r(5) * 9 + 1).toFixed(1),
    corruptionIndex: Math.round(r(6) * 80 + 10),
    pressFreedom: Math.round(r(7) * 80 + 10),
    hdi: +(r(8) * 0.5 + 0.4).toFixed(3),
    militarySpendingPct: +(r(9) * 5 + 0.3).toFixed(1),
    healthSpendingPct: +(r(10) * 12 + 2).toFixed(1),
    internetPenetration: Math.round(r(11) * 70 + 20),
    co2PerCapita: +(r(12) * 15 + 0.5).toFixed(1),
  };
}

interface MetricCardProps {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
  subtext?: React.ReactNode;
  color?: string;
}

function MetricCard({ icon, label, value, subtext, color = "text-zinc-200" }: MetricCardProps) {
  return (
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-3">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-zinc-500">{icon}</span>
        <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">{label}</span>
      </div>
      <div className={cn("text-lg font-bold font-mono", color)}>{value}</div>
      {subtext && <div className="text-[10px] text-zinc-600 mt-0.5">{subtext}</div>}
    </div>
  );
}

export function CountryDetail() {
  const { selectedCountry, setSelectedCountry, profile, setProfile } = useDashboardStore();

  const country = useMemo(
    () => (selectedCountry ? getCountryByCode(selectedCountry) : null),
    [selectedCountry]
  );

  const metrics = useMemo(
    () => (selectedCountry ? getSimulatedMetrics(selectedCountry) : null),
    [selectedCountry]
  );

  const sources = useMemo(
    () => (selectedCountry ? getSourcesByCountry(selectedCountry) : []),
    [selectedCountry]
  );

  const feedUrls = useMemo(() => sources.map((s) => s.rssUrl).filter(Boolean).slice(0, 10), [sources]);

  const { news, loading } = useNews({
    feedUrls,
    maxItems: 20,
    country: selectedCountry || undefined,
  });

  const isFocus = profile.focusCountries.includes(selectedCountry || "");

  const toggleFocus = () => {
    if (!selectedCountry) return;
    setProfile({
      focusCountries: isFocus
        ? profile.focusCountries.filter((c) => c !== selectedCountry)
        : [...profile.focusCountries, selectedCountry],
    });
  };

  if (!country || !metrics) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-zinc-500 gap-3">
        <Globe size={48} className="text-zinc-700" />
        <p className="text-sm">Select a country to view its dossier</p>
        <p className="text-xs text-zinc-600">Use the sidebar or click on the map</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-zinc-950/95 backdrop-blur border-b border-zinc-800 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSelectedCountry(null)}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800"
            >
              <ArrowLeft size={16} />
            </button>
            <span className="text-4xl">{country.flagEmoji}</span>
            <div>
              <h1 className="text-lg font-bold text-white">{country.name}</h1>
              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <span>{country.nameSv}</span>
                <span>•</span>
                <span>{country.region}</span>
                <span>•</span>
                <span>{country.code}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <SeverityBadge severity={metrics.ciiScore} size="lg" /><InfoTip term="CII" />
            <button
              onClick={toggleFocus}
              className={cn(
                "p-2 rounded-lg transition-colors",
                isFocus ? "text-yellow-400 bg-yellow-500/10" : "text-zinc-500 hover:text-yellow-400"
              )}
              title={isFocus ? "Remove from focus" : "Add to focus"}
            >
              {isFocus ? <Star size={18} /> : <StarOff size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Quick Facts */}
      <div className="px-4 py-3 border-b border-zinc-800 bg-zinc-900/30">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="flex items-center gap-2 text-zinc-400">
            <MapPin size={12} />
            <span>Capital: <span className="text-zinc-200">{country.capital}</span></span>
          </div>
          <div className="flex items-center gap-2 text-zinc-400">
            <Users size={12} />
            <span>Pop: <span className="text-zinc-200">{formatNumber(country.population)}</span></span>
          </div>
          <div className="flex items-center gap-2 text-zinc-400">
            <Coins size={12} />
            <span>{country.currency} ({country.currencyCode})</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-400">
            <Globe size={12} />
            <span>{country.languages.slice(0, 2).join(", ")}</span>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="px-4 py-4">
        <h3 className="text-xs uppercase tracking-wider text-zinc-500 font-semibold mb-3">
          Key Indicators
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
          <MetricCard
            icon={<TrendingUp size={14} />}
            label="GDP/Capita"
            value={<><span>${formatNumber(metrics.gdpPerCapita)}</span><InfoTip term="GDP/Capita" /></>}
            subtext={`Inflation: ${metrics.inflation}%`}
          />
          <MetricCard
            icon={<Users size={14} />}
            label="Unemployment"
            value={`${metrics.unemployment}%`}
          />
          <MetricCard
            icon={<Building2 size={14} />}
            label="Democracy"
            value={<><span>{metrics.democracyIndex}</span><InfoTip term="Democracy Index" /></>}
            subtext="out of 10"
            color={metrics.democracyIndex > 6 ? "text-green-400" : metrics.democracyIndex > 4 ? "text-yellow-400" : "text-red-400"}
          />
          <MetricCard
            icon={<Shield size={14} />}
            label="Military Spending"
            value={`${metrics.militarySpendingPct}%`}
            subtext="of GDP"
          />
          <MetricCard
            icon={<Heart size={14} />}
            label="Health Spending"
            value={`${metrics.healthSpendingPct}%`}
            subtext="of GDP"
          />
          <MetricCard
            icon={<Wifi size={14} />}
            label="Internet"
            value={`${metrics.internetPenetration}%`}
            subtext="penetration"
          />
          <MetricCard
            icon={<TreePine size={14} />}
            label="CO2/Capita"
            value={<><span>{metrics.co2PerCapita}t</span><InfoTip term="CO2/Capita" /></>}
          />
          <MetricCard
            icon={<Globe size={14} />}
            label="HDI"
            value={<><span>{metrics.hdi}</span><InfoTip term="HDI" /></>}
            color={metrics.hdi > 0.7 ? "text-green-400" : metrics.hdi > 0.55 ? "text-yellow-400" : "text-red-400"}
          />
          <MetricCard
            icon={<Newspaper size={14} />}
            label="Press Freedom"
            value={<><span>{metrics.pressFreedom}</span><InfoTip term="Press Freedom" /></>}
            subtext="out of 100"
          />
        </div>
      </div>

      {/* News Sources */}
      <div className="px-4 py-3 border-t border-zinc-800">
        <h3 className="text-xs uppercase tracking-wider text-zinc-500 font-semibold mb-2">
          News Sources ({sources.length})
        </h3>
        <div className="flex flex-wrap gap-1.5">
          {sources.map((source) => (
            <a
              key={source.id}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[10px] text-zinc-400 hover:text-blue-400 hover:border-blue-500/30 transition-colors"
            >
              {source.name}
              <ExternalLink size={8} />
            </a>
          ))}
          {sources.length === 0 && (
            <span className="text-xs text-zinc-600">No dedicated sources — using international coverage</span>
          )}
        </div>
      </div>

      {/* Latest News */}
      <div className="px-4 py-3 border-t border-zinc-800 flex-1">
        <h3 className="text-xs uppercase tracking-wider text-zinc-500 font-semibold mb-3 flex items-center gap-2">
          <Newspaper size={12} />
          Latest News
          {loading && <Loader2 size={10} className="animate-spin text-blue-400" />}
        </h3>
        <div className="space-y-2">
          {news.length > 0 ? (
            news.slice(0, 15).map((item) => (
              <a
                key={item.id}
                href={item.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-2 rounded-lg hover:bg-zinc-900/50 transition-colors group"
              >
                <div className="flex items-start gap-2">
                  <SeverityBadge severity={item.severity} size="sm" showLabel={false} />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-zinc-300 group-hover:text-blue-400 line-clamp-2 transition-colors">
                      {item.title}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] text-zinc-600 font-mono">{item.source}</span>
                      <span className="text-[10px] text-zinc-700">•</span>
                      <span className="text-[10px] text-zinc-600">
                        {getRelativeTime(new Date(item.publishedAt))}
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))
          ) : loading ? (
            <div className="text-center py-6 text-zinc-600 text-xs">
              <Loader2 size={16} className="animate-spin mx-auto mb-2 text-blue-400" />
              Fetching news...
            </div>
          ) : (
            <div className="text-center py-6 text-zinc-600 text-xs">
              No recent news found for this country
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
