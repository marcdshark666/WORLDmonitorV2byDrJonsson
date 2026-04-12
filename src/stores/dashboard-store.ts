import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { NewsTopic, UserProfile, Alert } from "@/types";

interface DashboardState {
  // User profile
  profile: UserProfile;
  setProfile: (profile: Partial<UserProfile>) => void;

  // Selected country
  selectedCountry: string | null;
  setSelectedCountry: (code: string | null) => void;

  // Active panel
  activePanel: string;
  setActivePanel: (panel: string) => void;

  // Filters
  activeTopics: NewsTopic[];
  toggleTopic: (topic: NewsTopic) => void;

  // Search
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  // Sidebar
  sidebarOpen: boolean;
  toggleSidebar: () => void;

  // Map
  mapView: "globe" | "flat";
  setMapView: (view: "globe" | "flat") => void;
  mapLayers: Record<string, boolean>;
  toggleMapLayer: (layer: string) => void;

  // Alerts
  alerts: Alert[];
  addAlert: (alert: Alert) => void;
  markAlertRead: (id: string) => void;
  unreadAlertCount: number;

  // Theme
  theme: "dark" | "light";
  toggleTheme: () => void;
}

export const useDashboardStore = create<DashboardState>()(
  persist(
    (set, get) => ({
      // Default user profile
      profile: {
        id: "local",
        email: "",
        displayName: "User",
        homeCountry: "SE",
        focusCountries: ["SE", "US", "CN", "PE", "PL"],
        interestTopics: ["conflict", "military", "politics", "economy"],
        alertLevel: "medium",
        language: "sv",
        theme: "dark",
        dailyBriefing: true,
        weeklyDigest: true,
      },
      setProfile: (profile) =>
        set((state) => ({
          profile: { ...state.profile, ...profile },
        })),

      selectedCountry: null,
      setSelectedCountry: (code) => set({ selectedCountry: code }),

      activePanel: "overview",
      setActivePanel: (panel) => set({ activePanel: panel }),

      activeTopics: [],
      toggleTopic: (topic) =>
        set((state) => ({
          activeTopics: state.activeTopics.includes(topic)
            ? state.activeTopics.filter((t) => t !== topic)
            : [...state.activeTopics, topic],
        })),

      searchQuery: "",
      setSearchQuery: (query) => set({ searchQuery: query }),

      sidebarOpen: true,
      toggleSidebar: () =>
        set((state) => ({ sidebarOpen: !state.sidebarOpen })),

      mapView: "flat",
      setMapView: (view) => set({ mapView: view }),
      mapLayers: {
        conflicts: true,
        military: true,
        earthquakes: true,
        weather: false,
        cyber: false,
        health: false,
        infrastructure: false,
        maritime: false,
        aviation: false,
      },
      toggleMapLayer: (layer) =>
        set((state) => ({
          mapLayers: {
            ...state.mapLayers,
            [layer]: !state.mapLayers[layer],
          },
        })),

      alerts: [],
      addAlert: (alert) =>
        set((state) => ({ alerts: [alert, ...state.alerts].slice(0, 100) })),
      markAlertRead: (id) =>
        set((state) => ({
          alerts: state.alerts.map((a) =>
            a.id === id ? { ...a, read: true } : a
          ),
        })),
      get unreadAlertCount() {
        return get().alerts.filter((a) => !a.read).length;
      },

      theme: "dark",
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "dark" ? "light" : "dark",
        })),
    }),
    {
      name: "world-monitor-v2-dashboard",
      partialize: (state) => ({
        profile: state.profile,
        theme: state.theme,
        mapView: state.mapView,
        mapLayers: state.mapLayers,
        sidebarOpen: state.sidebarOpen,
        activeTopics: state.activeTopics,
      }),
    }
  )
);
