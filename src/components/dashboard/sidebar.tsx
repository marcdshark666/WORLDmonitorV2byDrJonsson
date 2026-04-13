"use client";

import { useState, useMemo } from "react";
import { useDashboardStore } from "@/stores/dashboard-store";
import { ALL_COUNTRIES, searchCountries, REGIONS } from "@/data/countries";
import {
  Globe, Map, Newspaper, Shield, TrendingUp, Activity,
  Heart, Cloud, Zap, AlertTriangle, Search, ChevronDown,
  ChevronRight, Star, Settings, Bell, Menu, X, Flame,
  Anchor, Plane, Skull, Users, Scale, Radio, Tv
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_SECTIONS = [
  {
    id: "overview",
    label: "Overview",
    icon: Globe,
    description: "Global dashboard",
  },
  {
    id: "news",
    label: "News Feed",
    icon: Newspaper,
    description: "Real-time news",
  },
  {
    id: "conflicts",
    label: "Conflicts",
    icon: Flame,
    description: "Active conflicts & wars",
  },
  {
    id: "live-tv",
    label: "Live TV",
    icon: Tv,
    description: "Watch live news channels",
  },
  {
    id: "military",
    label: "Military",
    icon: Shield,
    description: "Military movements",
  },
  {
    id: "economy",
    label: "Economy",
    icon: TrendingUp,
    description: "Markets & finance",
  },
  {
    id: "health",
    label: "Health",
    icon: Heart,
    description: "Pandemic & health",
  },
  {
    id: "climate",
    label: "Climate",
    icon: Cloud,
    description: "Climate & disasters",
  },
  {
    id: "cyber",
    label: "Cyber",
    icon: Zap,
    description: "Cyber threats",
  },
  {
    id: "maritime",
    label: "Maritime",
    icon: Anchor,
    description: "Ship tracking",
  },
  {
    id: "aviation",
    label: "Aviation",
    icon: Plane,
    description: "Flight tracking",
  },
  {
    id: "human-rights",
    label: "Human Rights",
    icon: Users,
    description: "Freedom & rights",
  },
  {
    id: "sanctions",
    label: "Sanctions",
    icon: Scale,
    description: "Global sanctions",
  },
] as const;

export function Sidebar() {
  const {
    activePanel,
    setActivePanel,
    sidebarOpen,
    toggleSidebar,
    profile,
    selectedCountry,
    setSelectedCountry,
    searchQuery,
    setSearchQuery,
  } = useDashboardStore();

  const [countrySearchOpen, setCountrySearchOpen] = useState(false);
  const [expandedRegions, setExpandedRegions] = useState<string[]>([]);

  const filteredCountries = useMemo(() => {
    if (searchQuery.length < 1) return [];
    return searchCountries(searchQuery).slice(0, 20);
  }, [searchQuery]);

  const focusCountries = useMemo(() => {
    return ALL_COUNTRIES.filter((c) =>
      profile.focusCountries.includes(c.code)
    );
  }, [profile.focusCountries]);

  const countriesByRegion = useMemo(() => {
    const map: Record<string, typeof ALL_COUNTRIES> = {};
    REGIONS.forEach((region) => {
      map[region] = ALL_COUNTRIES.filter((c) => c.region === region);
    });
    return map;
  }, []);

  const toggleRegion = (region: string) => {
    setExpandedRegions((prev) =>
      prev.includes(region) ? prev.filter((r) => r !== region) : [...prev, region]
    );
  };

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={toggleSidebar}
        className="fixed top-3 left-3 z-50 lg:hidden p-2 bg-zinc-900 rounded-lg border border-zinc-700 text-zinc-300 hover:text-white"
      >
        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 h-full bg-zinc-950 border-r border-zinc-800 z-40 transition-all duration-300 flex flex-col",
          sidebarOpen ? "w-64" : "w-0 lg:w-16",
          !sidebarOpen && "overflow-hidden lg:overflow-visible"
        )}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 p-4 border-b border-zinc-800">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500">
            <Globe size={18} className="text-white" />
          </div>
          {sidebarOpen && (
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white tracking-tight">
                WORLD MONITOR
              </span>
              <span className="text-[10px] text-zinc-500 font-mono">V2 by Dr. Jonsson</span>
            </div>
          )}
        </div>

        {/* Search */}
        {sidebarOpen && (
          <div className="p-3 border-b border-zinc-800">
            <div className="relative">
              <Search size={14} className="absolute left-2.5 top-2.5 text-zinc-500" />
              <input
                type="text"
                placeholder="Search countries..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCountrySearchOpen(e.target.value.length > 0);
                }}
                onFocus={() => searchQuery.length > 0 && setCountrySearchOpen(true)}
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg pl-8 pr-3 py-2 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20"
              />
            </div>
            {/* Search results dropdown */}
            {countrySearchOpen && filteredCountries.length > 0 && (
              <div className="absolute left-0 right-0 mt-1 mx-3 bg-zinc-900 border border-zinc-700 rounded-lg shadow-xl max-h-60 overflow-y-auto z-50">
                {filteredCountries.map((country) => (
                  <button
                    key={country.code}
                    onClick={() => {
                      setSelectedCountry(country.code);
                      setActivePanel("overview");
                      setCountrySearchOpen(false);
                      setSearchQuery("");
                    }}
                    className="w-full flex items-center gap-2 px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors"
                  >
                    <span className="text-lg">{country.flagEmoji}</span>
                    <span>{country.name}</span>
                    <span className="text-zinc-600 text-xs ml-auto">{country.code}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Focus countries */}
        {sidebarOpen && (
          <div className="p-3 border-b border-zinc-800">
            <div className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold mb-2 flex items-center gap-1">
              <Star size={10} /> Your Focus
            </div>
            <div className="flex flex-wrap gap-1">
              {focusCountries.map((c) => (
                <button
                  key={c.code}
                  onClick={() => {
                    setSelectedCountry(selectedCountry === c.code ? null : c.code);
                    setActivePanel("overview");
                  }}
                  className={cn(
                    "flex items-center gap-1 px-2 py-1 rounded text-xs transition-colors",
                    selectedCountry === c.code
                      ? "bg-blue-600/20 text-blue-400 border border-blue-500/30"
                      : "bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800"
                  )}
                >
                  <span>{c.flagEmoji}</span>
                  <span>{c.code}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-2 scrollbar-thin">
          <div className="px-3 mb-1">
            <span className="text-[10px] uppercase tracking-wider text-zinc-600 font-semibold">
              {sidebarOpen ? "Intelligence" : ""}
            </span>
          </div>
          {NAV_SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => setActivePanel(section.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-all",
                activePanel === section.id
                  ? "text-blue-400 bg-blue-500/10 border-r-2 border-blue-500"
                  : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900"
              )}
            >
              <section.icon size={18} />
              {sidebarOpen && (
                <div className="flex flex-col items-start">
                  <span className="font-medium">{section.label}</span>
                </div>
              )}
            </button>
          ))}

          {/* All countries by region */}
          {sidebarOpen && (
            <div className="mt-4 border-t border-zinc-800 pt-3">
              <div className="px-3 mb-2">
                <span className="text-[10px] uppercase tracking-wider text-zinc-600 font-semibold">
                  All Regions ({ALL_COUNTRIES.length} countries)
                </span>
              </div>
              {REGIONS.map((region) => (
                <div key={region}>
                  <button
                    onClick={() => toggleRegion(region)}
                    className="w-full flex items-center gap-2 px-4 py-2 text-xs text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 transition-colors"
                  >
                    {expandedRegions.includes(region) ? (
                      <ChevronDown size={12} />
                    ) : (
                      <ChevronRight size={12} />
                    )}
                    <span className="font-medium">{region}</span>
                    <span className="text-zinc-600 ml-auto">
                      {countriesByRegion[region]?.length || 0}
                    </span>
                  </button>
                  {expandedRegions.includes(region) && (
                    <div className="ml-4 border-l border-zinc-800">
                      {countriesByRegion[region]?.map((c) => (
                        <button
                          key={c.code}
                          onClick={() => {
                            setSelectedCountry(c.code);
                            setActivePanel("overview");
                          }}
                          className={cn(
                            "w-full flex items-center gap-2 px-3 py-1.5 text-xs transition-colors",
                            selectedCountry === c.code
                              ? "text-blue-400 bg-blue-500/5"
                              : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/50"
                          )}
                        >
                          <span>{c.flagEmoji}</span>
                          <span className="truncate">{c.name}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </nav>

        {/* Footer */}
        <div className="border-t border-zinc-800 p-3">
          <button
            onClick={() => setActivePanel("settings")}
            className="w-full flex items-center gap-3 px-2 py-2 text-sm text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-900 transition-colors"
          >
            <Settings size={18} />
            {sidebarOpen && <span>Settings</span>}
          </button>
        </div>
      </aside>
    </>
  );
}
