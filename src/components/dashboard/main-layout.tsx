"use client";

import { useDashboardStore } from "@/stores/dashboard-store";
import { Sidebar } from "./sidebar";
import { Header } from "./header";
import { OverviewPanel } from "./overview-panel";
import { NewsPanel } from "./news-panel";
import { CountryDetail } from "./country-detail";
import { ConflictsPanel } from "./conflicts-panel";
import { SettingsPanel } from "./settings-panel";
import { WorldMap } from "./world-map";
import { cn } from "@/lib/utils";

function PanelContent({ panel }: { panel: string }) {
  switch (panel) {
    case "overview":
      return <OverviewPanel />;
    case "news":
      return <NewsPanel />;
    case "conflicts":
      return <ConflictsPanel />;
    case "settings":
      return <SettingsPanel />;
    case "military":
    case "economy":
    case "health":
    case "climate":
    case "cyber":
    case "maritime":
    case "aviation":
    case "human-rights":
    case "sanctions":
      return <ComingSoonPanel name={panel} />;
    default:
      return <OverviewPanel />;
  }
}

function ComingSoonPanel({ name }: { name: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-zinc-500 gap-3">
      <div className="text-4xl">🚧</div>
      <h3 className="text-lg font-bold text-zinc-300 capitalize">{name} Monitor</h3>
      <p className="text-sm text-zinc-500 max-w-xs text-center">
        This intelligence module is under development. It will include real-time data feeds,
        analysis, and interactive visualizations.
      </p>
      <div className="flex items-center gap-2 mt-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full">
        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
        <span className="text-xs text-blue-400">Coming Soon</span>
      </div>
    </div>
  );
}

export function MainLayout() {
  const { sidebarOpen, activePanel, selectedCountry } = useDashboardStore();

  return (
    <div className="h-screen w-screen overflow-hidden bg-zinc-950 text-zinc-200">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className={cn("flex flex-col h-full transition-all", sidebarOpen ? "lg:ml-64" : "lg:ml-16")}>
        {/* Header */}
        <Header />

        {/* Content grid */}
        <div className="flex-1 flex overflow-hidden" style={{ marginTop: 0 }}>
          {/* Map section (left/top) */}
          <div className="hidden lg:flex flex-col flex-1 border-r border-zinc-800 min-w-0">
            <WorldMap />
          </div>

          {/* Panel section (right/bottom) */}
          <div className="w-full lg:w-[480px] xl:w-[560px] flex flex-col border-zinc-800 overflow-hidden bg-zinc-950">
            {selectedCountry ? (
              <CountryDetail />
            ) : (
              <PanelContent panel={activePanel} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
