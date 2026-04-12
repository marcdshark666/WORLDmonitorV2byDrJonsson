"use client";

import { useState } from "react";
import { useDashboardStore } from "@/stores/dashboard-store";
import { ALL_COUNTRIES, searchCountries } from "@/data/countries";
import type { NewsTopic } from "@/types";
import {
  Settings, User, Globe, Bell, Palette, Shield, Search,
  X, Plus, Check, Moon, Sun, Languages
} from "lucide-react";
import { cn } from "@/lib/utils";

const ALL_TOPICS: { id: NewsTopic; label: string; emoji: string }[] = [
  { id: "conflict", label: "Conflicts", emoji: "⚔️" },
  { id: "military", label: "Military", emoji: "🎖️" },
  { id: "politics", label: "Politics", emoji: "🏛️" },
  { id: "economy", label: "Economy", emoji: "📊" },
  { id: "trade", label: "Trade", emoji: "🚢" },
  { id: "diplomacy", label: "Diplomacy", emoji: "🤝" },
  { id: "terrorism", label: "Terrorism", emoji: "💣" },
  { id: "cyber", label: "Cyber", emoji: "🖥️" },
  { id: "health", label: "Health", emoji: "🏥" },
  { id: "pandemic", label: "Pandemic", emoji: "🦠" },
  { id: "climate", label: "Climate", emoji: "🌍" },
  { id: "disaster", label: "Disasters", emoji: "🌋" },
  { id: "energy", label: "Energy", emoji: "⚡" },
  { id: "technology", label: "Technology", emoji: "🔬" },
  { id: "human-rights", label: "Human Rights", emoji: "✊" },
  { id: "protest", label: "Protests", emoji: "📢" },
  { id: "election", label: "Elections", emoji: "🗳️" },
  { id: "sanctions", label: "Sanctions", emoji: "🚫" },
  { id: "migration", label: "Migration", emoji: "🏃" },
  { id: "nuclear", label: "Nuclear", emoji: "☢️" },
  { id: "maritime", label: "Maritime", emoji: "⚓" },
  { id: "aviation", label: "Aviation", emoji: "✈️" },
];

const LANGUAGES = [
  { code: "sv", label: "Svenska", flag: "🇸🇪" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "pl", label: "Polski", flag: "🇵🇱" },
  { code: "pt", label: "Português", flag: "🇧🇷" },
  { code: "zh", label: "中文", flag: "🇨🇳" },
];

export function SettingsPanel() {
  const { profile, setProfile, theme, toggleTheme } = useDashboardStore();
  const [countrySearch, setCountrySearch] = useState("");
  const [showCountryPicker, setShowCountryPicker] = useState(false);
  const [saved, setSaved] = useState(false);

  const searchResults = countrySearch.length > 0 ? searchCountries(countrySearch).slice(0, 10) : [];

  const addFocusCountry = (code: string) => {
    if (!profile.focusCountries.includes(code)) {
      setProfile({ focusCountries: [...profile.focusCountries, code] });
    }
    setCountrySearch("");
    setShowCountryPicker(false);
  };

  const removeFocusCountry = (code: string) => {
    setProfile({ focusCountries: profile.focusCountries.filter((c) => c !== code) });
  };

  const toggleInterestTopic = (topic: NewsTopic) => {
    const topics = profile.interestTopics.includes(topic)
      ? profile.interestTopics.filter((t) => t !== topic)
      : [...profile.interestTopics, topic];
    setProfile({ interestTopics: topics });
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="flex flex-col h-full overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-zinc-950/95 backdrop-blur border-b border-zinc-800 px-4 py-3">
        <div className="flex items-center gap-2">
          <Settings size={18} className="text-blue-400" />
          <h2 className="text-sm font-bold text-white">Settings & Profile</h2>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Profile Section */}
        <section>
          <h3 className="text-xs uppercase tracking-wider text-zinc-500 font-semibold mb-3 flex items-center gap-2">
            <User size={12} /> Profile
          </h3>
          <div className="space-y-3">
            <div>
              <label className="text-xs text-zinc-400 mb-1 block">Display Name</label>
              <input
                type="text"
                value={profile.displayName}
                onChange={(e) => setProfile({ displayName: e.target.value })}
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="text-xs text-zinc-400 mb-1 block">Email (for briefings)</label>
              <input
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({ email: e.target.value })}
                placeholder="your@email.com"
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="text-xs text-zinc-400 mb-1 block">Home Country</label>
              <div className="flex flex-wrap gap-2">
                {ALL_COUNTRIES.filter((c) => c.code === profile.homeCountry).map((c) => (
                  <div key={c.code} className="flex items-center gap-2 px-3 py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                    <span className="text-lg">{c.flagEmoji}</span>
                    <span className="text-sm text-blue-300">{c.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Focus Countries */}
        <section>
          <h3 className="text-xs uppercase tracking-wider text-zinc-500 font-semibold mb-3 flex items-center gap-2">
            <Globe size={12} /> Focus Countries
          </h3>
          <div className="flex flex-wrap gap-2 mb-3">
            {profile.focusCountries.map((code) => {
              const country = ALL_COUNTRIES.find((c) => c.code === code);
              if (!country) return null;
              return (
                <div
                  key={code}
                  className="flex items-center gap-1.5 px-2 py-1.5 bg-zinc-900 border border-zinc-700 rounded-lg text-sm"
                >
                  <span>{country.flagEmoji}</span>
                  <span className="text-zinc-300">{country.name}</span>
                  <button
                    onClick={() => removeFocusCountry(code)}
                    className="ml-1 text-zinc-600 hover:text-red-400 transition-colors"
                  >
                    <X size={12} />
                  </button>
                </div>
              );
            })}
            <button
              onClick={() => setShowCountryPicker(!showCountryPicker)}
              className="flex items-center gap-1 px-3 py-1.5 bg-zinc-900 border border-dashed border-zinc-700 rounded-lg text-sm text-zinc-500 hover:text-blue-400 hover:border-blue-500/30 transition-colors"
            >
              <Plus size={12} /> Add country
            </button>
          </div>
          {showCountryPicker && (
            <div className="mb-3 p-3 bg-zinc-900 border border-zinc-700 rounded-lg">
              <div className="relative mb-2">
                <Search size={14} className="absolute left-2.5 top-2.5 text-zinc-500" />
                <input
                  type="text"
                  placeholder="Search country..."
                  value={countrySearch}
                  onChange={(e) => setCountrySearch(e.target.value)}
                  autoFocus
                  className="w-full bg-zinc-800 border border-zinc-700 rounded pl-8 pr-3 py-2 text-sm text-zinc-200 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="max-h-40 overflow-y-auto space-y-0.5">
                {searchResults.map((c) => (
                  <button
                    key={c.code}
                    onClick={() => addFocusCountry(c.code)}
                    disabled={profile.focusCountries.includes(c.code)}
                    className={cn(
                      "w-full flex items-center gap-2 px-2 py-1.5 rounded text-sm transition-colors",
                      profile.focusCountries.includes(c.code)
                        ? "text-zinc-600 cursor-not-allowed"
                        : "text-zinc-300 hover:bg-zinc-800"
                    )}
                  >
                    <span>{c.flagEmoji}</span>
                    <span>{c.name}</span>
                    {profile.focusCountries.includes(c.code) && (
                      <Check size={12} className="ml-auto text-green-500" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Interest Topics */}
        <section>
          <h3 className="text-xs uppercase tracking-wider text-zinc-500 font-semibold mb-3 flex items-center gap-2">
            <Shield size={12} /> Interest Topics
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {ALL_TOPICS.map((topic) => (
              <button
                key={topic.id}
                onClick={() => toggleInterestTopic(topic.id)}
                className={cn(
                  "flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition-all border",
                  profile.interestTopics.includes(topic.id)
                    ? "bg-blue-500/10 border-blue-500/30 text-blue-300"
                    : "bg-zinc-900 border-zinc-800 text-zinc-500 hover:text-zinc-300 hover:border-zinc-700"
                )}
              >
                <span>{topic.emoji}</span>
                <span>{topic.label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Alerts */}
        <section>
          <h3 className="text-xs uppercase tracking-wider text-zinc-500 font-semibold mb-3 flex items-center gap-2">
            <Bell size={12} /> Alert Level
          </h3>
          <div className="flex gap-2">
            {(["low", "medium", "high", "critical"] as const).map((level) => (
              <button
                key={level}
                onClick={() => setProfile({ alertLevel: level })}
                className={cn(
                  "flex-1 px-3 py-2 rounded-lg text-xs font-medium transition-all border",
                  profile.alertLevel === level
                    ? level === "critical" ? "bg-red-500/10 border-red-500/30 text-red-400"
                    : level === "high" ? "bg-orange-500/10 border-orange-500/30 text-orange-400"
                    : level === "medium" ? "bg-yellow-500/10 border-yellow-500/30 text-yellow-400"
                    : "bg-green-500/10 border-green-500/30 text-green-400"
                    : "bg-zinc-900 border-zinc-800 text-zinc-500 hover:text-zinc-300"
                )}
              >
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </button>
            ))}
          </div>
        </section>

        {/* Language */}
        <section>
          <h3 className="text-xs uppercase tracking-wider text-zinc-500 font-semibold mb-3 flex items-center gap-2">
            <Languages size={12} /> Language
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setProfile({ language: lang.code as typeof profile.language })}
                className={cn(
                  "flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition-all border",
                  profile.language === lang.code
                    ? "bg-blue-500/10 border-blue-500/30 text-blue-300"
                    : "bg-zinc-900 border-zinc-800 text-zinc-500 hover:text-zinc-300"
                )}
              >
                <span>{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Theme */}
        <section>
          <h3 className="text-xs uppercase tracking-wider text-zinc-500 font-semibold mb-3 flex items-center gap-2">
            <Palette size={12} /> Appearance
          </h3>
          <button
            onClick={toggleTheme}
            className="flex items-center gap-3 px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-zinc-300 hover:border-zinc-700 transition-colors w-full"
          >
            {theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
            <span>{theme === "dark" ? "Dark Mode" : "Light Mode"}</span>
            <span className="ml-auto text-xs text-zinc-600">Click to toggle</span>
          </button>
        </section>

        {/* Briefing */}
        <section>
          <h3 className="text-xs uppercase tracking-wider text-zinc-500 font-semibold mb-3">
            Email Briefings
          </h3>
          <div className="space-y-2">
            <label className="flex items-center gap-3 px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-lg cursor-pointer hover:border-zinc-700">
              <input
                type="checkbox"
                checked={profile.dailyBriefing}
                onChange={(e) => setProfile({ dailyBriefing: e.target.checked })}
                className="rounded border-zinc-600 bg-zinc-800 text-blue-500"
              />
              <span className="text-sm text-zinc-300">Daily intelligence briefing</span>
            </label>
            <label className="flex items-center gap-3 px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-lg cursor-pointer hover:border-zinc-700">
              <input
                type="checkbox"
                checked={profile.weeklyDigest}
                onChange={(e) => setProfile({ weeklyDigest: e.target.checked })}
                className="rounded border-zinc-600 bg-zinc-800 text-blue-500"
              />
              <span className="text-sm text-zinc-300">Weekly digest</span>
            </label>
          </div>
        </section>

        {/* Save */}
        <button
          onClick={handleSave}
          className={cn(
            "w-full py-3 rounded-lg font-medium text-sm transition-all",
            saved
              ? "bg-green-500/20 text-green-400 border border-green-500/30"
              : "bg-blue-600 text-white hover:bg-blue-500"
          )}
        >
          {saved ? "✓ Settings Saved" : "Save Settings"}
        </button>
      </div>
    </div>
  );
}
