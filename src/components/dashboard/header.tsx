"use client";

import { useDashboardStore } from "@/stores/dashboard-store";
import { ALL_COUNTRIES } from "@/data/countries";
import {
  Bell, Sun, Moon, Globe, Wifi, WifiOff, Settings,
  ChevronDown, User, LogOut, Search
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { InfoTip, InfoTerm } from "@/components/ui/info-tip";

function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
      <div className="hidden sm:flex items-center gap-1.5">
        <span className="text-zinc-600"><InfoTerm term="UTC" label="UTC" /></span>
        <span className="text-zinc-300">
          {time.toLocaleTimeString("en-GB", { timeZone: "UTC", hour: "2-digit", minute: "2-digit", second: "2-digit" })}
        </span>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="text-zinc-600">LOCAL</span>
        <span className="text-zinc-300">
          {time.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
        </span>
      </div>
      <div className="hidden md:flex items-center gap-1.5">
        <span className="text-zinc-300">
          {time.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short", year: "numeric" })}
        </span>
      </div>
    </div>
  );
}

export function Header() {
  const { theme, toggleTheme, profile, alerts, sidebarOpen } = useDashboardStore();
  const [online, setOnline] = useState(true);
  const unreadCount = alerts.filter((a) => !a.read).length;

  useEffect(() => {
    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    setOnline(navigator.onLine);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const homeCountry = ALL_COUNTRIES.find((c) => c.code === profile.homeCountry);

  return (
    <header
      className={cn(
        "h-12 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between px-4 transition-all",
        sidebarOpen ? "lg:ml-64" : "lg:ml-16"
      )}
    >
      {/* Left section */}
      <div className="flex items-center gap-4">
        {/* Connection status */}
        <div className="flex items-center gap-1.5">
          {online ? (
            <Wifi size={12} className="text-green-500" />
          ) : (
            <WifiOff size={12} className="text-red-500" />
          )}
          <span className={cn("text-[10px] font-mono", online ? "text-green-500" : "text-red-500")}>
            {online ? "LIVE" : "OFFLINE"}
          </span>
        </div>

        {/* Separator */}
        <div className="h-4 w-px bg-zinc-800" />

        {/* Live clock */}
        <LiveClock />
      </div>

      {/* Right section */}
      <div className="flex items-center gap-2">
        {/* Active country count */}
        <div className="hidden md:flex items-center gap-1.5 px-2 py-1 bg-zinc-900 rounded-lg border border-zinc-800">
          <Globe size={12} className="text-blue-400" />
          <span className="text-[10px] font-mono text-zinc-400">
            {ALL_COUNTRIES.length} countries
          </span>
        </div>

        {/* Alerts */}
        <button className="relative p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors">
          <Bell size={16} />
          {unreadCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 flex items-center justify-center w-4 h-4 rounded-full bg-red-500 text-white text-[9px] font-bold">
              {unreadCount > 9 ? "9+" : unreadCount}
            </span>
          )}
        </button>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
        >
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </button>

        {/* Profile */}
        <div className="flex items-center gap-2 px-2 py-1 rounded-lg bg-zinc-900 border border-zinc-800">
          {homeCountry && <span className="text-sm">{homeCountry.flagEmoji}</span>}
          <span className="text-xs text-zinc-400 hidden sm:block">{profile.displayName}</span>
        </div>
      </div>
    </header>
  );
}
