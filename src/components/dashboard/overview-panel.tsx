"use client";

import { useMemo, useState } from "react";
import { useDashboardStore } from "@/stores/dashboard-store";
import { ALL_COUNTRIES, getCountryByCode } from "@/data/countries";
import { ALL_NEWS_SOURCES } from "@/data/news-sources";
import { SeverityBadge } from "@/components/ui/severity-badge";
import { formatNumber } from "@/lib/utils";
import {
  Globe, TrendingUp, Shield, Flame, Users, Newspaper,
  AlertTriangle, Activity, Heart, Cloud, Zap, MapPin,
  ArrowRight, ChevronRight, Radio, Eye
} from "lucide-react";
import { cn } from "@/lib/utils";
import { InfoTip, InfoTerm } from "@/components/ui/info-tip";

// Simulated global stats
const GLOBAL_STATS = {
  activeConflicts: 34,
  countriesMonitored: 249,
  newsSources: 398,
  rssFeeds: 850,
  languages: 21,
  earthquakesToday: 12,
  protestsThisWeek: 87,
  cyberIncidents: 156,
};

// Simulated active conflicts
const ACTIVE_CONFLICTS = [
  { name: "Russia-Ukraine War", countries: ["UA", "RU"], severity: 95, casualties: "500K+", status: "active" as const },
  { name: "Israel-Palestine", countries: ["IL", "PS"], severity: 92, casualties: "45K+", status: "active" as const },
  { name: "Sudan Civil War", countries: ["SD"], severity: 88, casualties: "150K+", status: "active" as const },
  { name: "Myanmar Civil War", countries: ["MM"], severity: 82, casualties: "50K+", status: "active" as const },
  { name: "Ethiopia (Amhara)", countries: ["ET"], severity: 72, casualties: "Unknown", status: "active" as const },
  { name: "Sahel Insurgency", countries: ["ML", "BF", "NE"], severity: 75, casualties: "20K+", status: "active" as const },
  { name: "Somalia (Al-Shabaab)", countries: ["SO"], severity: 70, casualties: "Unknown", status: "active" as const },
  { name: "DRC (M23/ADF)", countries: ["CD"], severity: 78, casualties: "6M displaced", status: "active" as const },
  { name: "Syria Remnants", countries: ["SY"], severity: 60, casualties: "500K+ total", status: "active" as const },
  { name: "Yemen (Houthis)", countries: ["YE"], severity: 68, casualties: "150K+", status: "ceasefire" as const },
  { name: "Haiti Gang Violence", countries: ["HT"], severity: 65, casualties: "Unknown", status: "active" as const },
  { name: "Colombia (ELN/FARC)", countries: ["CO"], severity: 45, casualties: "Ongoing", status: "active" as const },
];

// Simulated hotspots (high CII countries)
const GLOBAL_HOTSPOTS = [
  { code: "UA", cii: 95, trend: "stable" },
  { code: "PS", cii: 93, trend: "rising" },
  { code: "SD", cii: 88, trend: "rising" },
  { code: "MM", cii: 85, trend: "stable" },
  { code: "SY", cii: 82, trend: "falling" },
  { code: "SO", cii: 80, trend: "stable" },
  { code: "YE", cii: 78, trend: "falling" },
  { code: "AF", cii: 77, trend: "stable" },
  { code: "CD", cii: 76, trend: "rising" },
  { code: "HT", cii: 74, trend: "rising" },
  { code: "LY", cii: 70, trend: "stable" },
  { code: "ML", cii: 68, trend: "rising" },
];

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  color: string;
  subtext?: React.ReactNode;
}

function StatCard({ icon, label, value, color, subtext }: StatCardProps) {
  return (
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 hover:border-zinc-700 transition-colors">
      <div className="flex items-center gap-2 mb-2">
        <div className={cn("p-1.5 rounded-lg", color)}>{icon}</div>
        <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">{label}</span>
      </div>
      <div className="text-2xl font-bold font-mono text-white">{value}</div>
      {subtext && <div className="text-[10px] text-zinc-600 mt-1">{subtext}</div>}
    </div>
  );
}

export function OverviewPanel() {
  const { setSelectedCountry, setActivePanel, profile } = useDashboardStore();
  const [showAllConflicts, setShowAllConflicts] = useState(false);

  const focusCountries = useMemo(
    () => profile.focusCountries.map((c) => getCountryByCode(c)).filter(Boolean),
    [profile.focusCountries]
  );

  const displayedConflicts = showAllConflicts ? ACTIVE_CONFLICTS : ACTIVE_CONFLICTS.slice(0, 6);

  return (
    <div className="flex flex-col gap-6 p-4 overflow-y-auto h-full">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-600/10 via-cyan-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-5">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-xl font-bold text-white mb-1">
              World Monitor V2
            </h1>
            <p className="text-sm text-zinc-400 max-w-lg">
              Real-time global intelligence dashboard monitoring {GLOBAL_STATS.countriesMonitored} countries
              across {GLOBAL_STATS.newsSources}+ news sources. Your personal focus: {" "}
              {focusCountries.map((c) => c!.flagEmoji).join(" ")}
            </p>
          </div>
          <div className="flex items-center gap-1 px-2 py-1 bg-green-500/10 rounded-full">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] text-green-400 font-mono">LIVE</span>
          </div>
        </div>
      </div>

      {/* Global Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <StatCard
          icon={<Flame size={16} className="text-red-400" />}
          label="Active Conflicts"
          value={GLOBAL_STATS.activeConflicts}
          color="bg-red-500/10"
          subtext="worldwide"
        />
        <StatCard
          icon={<Globe size={16} className="text-blue-400" />}
          label="Countries"
          value={GLOBAL_STATS.countriesMonitored}
          color="bg-blue-500/10"
          subtext="full coverage"
        />
        <StatCard
          icon={<Newspaper size={16} className="text-cyan-400" />}
          label="News Sources"
          value={`${GLOBAL_STATS.newsSources}+`}
          color="bg-cyan-500/10"
          subtext={`${GLOBAL_STATS.languages} languages`}
        />
        <StatCard
          icon={<AlertTriangle size={16} className="text-yellow-400" />}
          label="Seismic Events"
          value={GLOBAL_STATS.earthquakesToday}
          color="bg-yellow-500/10"
          subtext={<>last 24h (<InfoTerm term="M4.5+" />)</>}
        />
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Active Conflicts */}
        <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800">
            <div className="flex items-center gap-2">
              <Flame size={16} className="text-red-400" />
              <h3 className="text-sm font-bold text-white">Active Conflicts</h3>
            </div>
            <button
              onClick={() => setActivePanel("conflicts")}
              className="text-[10px] text-blue-400 hover:text-blue-300 flex items-center gap-1"
            >
              View all <ChevronRight size={10} />
            </button>
          </div>
          <div className="divide-y divide-zinc-800/50">
            {displayedConflicts.map((conflict) => {
              const flags = conflict.countries.map((c) => getCountryByCode(c)?.flagEmoji || c).join(" ");
              return (
                <button
                  key={conflict.name}
                  onClick={() => {
                    setSelectedCountry(conflict.countries[0]);
                    setActivePanel("overview");
                  }}
                  className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-zinc-800/50 transition-colors text-left"
                >
                  <SeverityBadge severity={conflict.severity} size="sm" showLabel={false} />
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-zinc-200 font-medium truncate">{conflict.name}</div>
                    <div className="text-[10px] text-zinc-600">{flags} · {conflict.casualties}</div>
                  </div>
                  <span className={cn(
                    "text-[9px] px-1.5 py-0.5 rounded-full font-mono",
                    conflict.status === "active" ? "bg-red-500/10 text-red-400" : "bg-yellow-500/10 text-yellow-400"
                  )}>
                    {conflict.status.toUpperCase()}
                  </span>
                </button>
              );
            })}
          </div>
          {!showAllConflicts && ACTIVE_CONFLICTS.length > 6 && (
            <button
              onClick={() => setShowAllConflicts(true)}
              className="w-full px-4 py-2 text-xs text-zinc-500 hover:text-blue-400 border-t border-zinc-800 transition-colors"
            >
              Show {ACTIVE_CONFLICTS.length - 6} more conflicts...
            </button>
          )}
        </div>

        {/* Global Hotspots (highest CII) */}
        <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800">
            <div className="flex items-center gap-2">
              <Activity size={16} className="text-orange-400" />
              <h3 className="text-sm font-bold text-white">Instability Hotspots</h3>
            </div>
            <span className="text-[10px] text-zinc-600 font-mono"><InfoTerm term="CII" label="CII Score" /></span>
          </div>
          <div className="divide-y divide-zinc-800/50">
            {GLOBAL_HOTSPOTS.map((hotspot) => {
              const country = getCountryByCode(hotspot.code);
              if (!country) return null;
              return (
                <button
                  key={hotspot.code}
                  onClick={() => {
                    setSelectedCountry(hotspot.code);
                    setActivePanel("overview");
                  }}
                  className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-zinc-800/50 transition-colors text-left"
                >
                  <span className="text-lg">{country.flagEmoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-zinc-200 font-medium">{country.name}</div>
                    <div className="text-[10px] text-zinc-600">{country.region}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={cn(
                      "text-[9px]",
                      hotspot.trend === "rising" ? "text-red-400" : hotspot.trend === "falling" ? "text-green-400" : "text-zinc-500"
                    )}>
                      {hotspot.trend === "rising" ? "▲" : hotspot.trend === "falling" ? "▼" : "—"}
                    </span>
                    <SeverityBadge severity={hotspot.cii} size="sm" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Your Focus Countries */}
      <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <Eye size={16} className="text-blue-400" />
            <h3 className="text-sm font-bold text-white">Your Focus Countries</h3>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-4">
          {focusCountries.map((country) => {
            if (!country) return null;
            const seed = country.code.charCodeAt(0) * 100 + country.code.charCodeAt(1);
            const cii = Math.round(((seed * 9301 + 49297) % 233280 / 233280) * 80 + 10);
            return (
              <button
                key={country.code}
                onClick={() => {
                  setSelectedCountry(country.code);
                  setActivePanel("overview");
                }}
                className="flex items-center gap-3 p-3 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-blue-500/30 hover:bg-zinc-800/50 transition-all text-left"
              >
                <span className="text-2xl">{country.flagEmoji}</span>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-zinc-200">{country.name}</div>
                  <div className="text-[10px] text-zinc-500">
                    {country.capital} · Pop: {formatNumber(country.population)}
                  </div>
                </div>
                <SeverityBadge severity={cii} size="sm" showLabel={false} />
              </button>
            );
          })}
        </div>
      </div>

      {/* Data Coverage Stats */}
      <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-4">
        <h3 className="text-xs uppercase tracking-wider text-zinc-500 font-semibold mb-3">
          Platform Coverage
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            { label: "Countries", value: "249", icon: <Globe size={14} /> },
            { label: "News Sources", value: `${ALL_NEWS_SOURCES.length}`, icon: <Newspaper size={14} /> },
            { label: "Conflict Zones", value: "34", icon: <Flame size={14} /> },
            { label: "Languages", value: "21+", icon: <Radio size={14} /> },
            { label: "Data Points", value: "1M+", icon: <Activity size={14} /> },
            { label: "Update Rate", value: "5min", icon: <TrendingUp size={14} /> },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-2">
              <div className="flex justify-center text-zinc-500 mb-1">{stat.icon}</div>
              <div className="text-lg font-bold font-mono text-white">{stat.value}</div>
              <div className="text-[10px] text-zinc-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
