// ============================================================
// WORLD MONITOR V2 — Complete Type System
// ============================================================

export interface Country {
  code: string;           // ISO 3166-1 alpha-2
  code3: string;          // ISO 3166-1 alpha-3
  name: string;           // English name
  nameSv: string;         // Swedish name
  nameLocal: string;      // Local language name
  region: string;         // Continent/region
  subregion: string;      // Sub-region
  capital: string;
  population: number;
  area: number;           // km²
  languages: string[];
  currency: string;
  currencyCode: string;
  callingCode: string;
  tld: string;            // Top-level domain
  flagEmoji: string;
  lat: number;
  lng: number;
  independent: boolean;
  unMember: boolean;
}

export interface CountryMetrics {
  countryCode: string;
  ciiScore: number;         // Country Instability Index 0-100
  gdp: number;
  gdpPerCapita: number;
  inflation: number;
  unemployment: number;
  debtToGdp: number;
  democracyIndex: number;   // 0-10
  corruptionIndex: number;  // 0-100
  pressFreedomIndex: number;
  hdi: number;              // Human Development Index 0-1
  militarySpending: number;
  militaryPersonnel: number;
  healthSpending: number;
  co2Emissions: number;
  internetPenetration: number;
  digitalFreedomScore: number;
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  content?: string;
  source: string;
  sourceUrl: string;
  sourceLogo?: string;
  countries: string[];      // ISO codes
  topics: NewsTopic[];
  publishedAt: Date;
  severity: number;         // 0-100
  language: string;
  aiAnalysis?: string;
  imageUrl?: string;
}

export type NewsTopic =
  | "conflict" | "military" | "politics" | "economy" | "trade"
  | "diplomacy" | "terrorism" | "cyber" | "health" | "pandemic"
  | "climate" | "disaster" | "energy" | "technology" | "human-rights"
  | "protest" | "election" | "sanctions" | "migration" | "crime"
  | "infrastructure" | "space" | "nuclear" | "maritime" | "aviation";

export interface NewsSource {
  id: string;
  name: string;
  url: string;
  rssUrl: string;
  country: string;          // ISO code
  language: string;
  type: "newspaper" | "tv" | "radio" | "digital" | "wire" | "magazine" | "government";
  reliability: number;      // 1-5
  topics: NewsTopic[];
}

export interface Conflict {
  id: string;
  name: string;
  countries: string[];
  status: "active" | "ceasefire" | "frozen" | "resolved";
  type: "war" | "civil-war" | "insurgency" | "border" | "territorial" | "ethnic" | "political";
  casualties: number;
  displaced: number;
  startDate: string;
  description: string;
  severity: number;
}

export interface Alert {
  id: string;
  type: "breaking" | "escalation" | "disaster" | "health" | "military" | "economic" | "cyber";
  title: string;
  message: string;
  countries: string[];
  severity: number;
  timestamp: Date;
  read: boolean;
}

export interface UserProfile {
  id: string;
  email: string;
  displayName: string;
  homeCountry: string;
  focusCountries: string[];
  interestTopics: NewsTopic[];
  alertLevel: "low" | "medium" | "high" | "critical";
  language: "sv" | "en" | "es" | "pl" | "pt" | "zh";
  theme: "dark" | "light";
  dailyBriefing: boolean;
  weeklyDigest: boolean;
}

export interface MapLayer {
  id: string;
  name: string;
  category: "military" | "conflict" | "infrastructure" | "climate" | "economic" | "health" | "cyber";
  enabled: boolean;
  opacity: number;
}

export interface CountryDossier {
  country: Country;
  metrics: CountryMetrics;
  recentNews: NewsItem[];
  activeConflicts: Conflict[];
  alerts: Alert[];
  timeline: TimelineEvent[];
  aiSummary: string;
  lastUpdated: Date;
}

export interface TimelineEvent {
  id: string;
  date: Date;
  title: string;
  description: string;
  type: NewsTopic;
  severity: number;
  source: string;
}

export interface DashboardPanel {
  id: string;
  type: "news" | "map" | "metrics" | "conflicts" | "alerts" | "timeline" | "chart" | "weather" | "stocks";
  title: string;
  size: "small" | "medium" | "large" | "full";
  position: number;
  visible: boolean;
  config?: Record<string, unknown>;
}
