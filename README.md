# WORLD MONITOR V2 by Dr. Jonsson

Real-time global intelligence dashboard monitoring **all 249 countries** with AI-powered news aggregation, conflict tracking, and geopolitical analysis.

> An enhanced, open-source alternative to worldmonitor.app — built to be significantly better with full personalization, deeper analysis, and complete global coverage.

## Features

- **249 Countries** — Every ISO 3166-1 entity. No country left behind.
- **398+ News Sources** — Local media from 89 countries including Sweden, USA, China, Peru, Poland, and all of South America
- **Interactive World Map** — Color-coded by Country Instability Index (CII), zoom, drag, tooltips
- **Country Dossiers** — Deep analysis per country: economy, military, health, climate, democracy, press freedom, cyber
- **Conflict Tracker** — 12+ active wars with detailed breakdown: parties, casualties, developments
- **Personalized Profiles** — Set your home country, focus countries, interest topics, alert level
- **Live RSS News** — Real-time aggregation with severity scoring and source attribution
- **Dark Theme** — Professional intelligence dashboard aesthetic
- **Mobile Responsive** — Works on all screen sizes
- **Zero Cost** — No paid APIs, no subscriptions, no accounts required

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 |
| State | Zustand (persisted) |
| Icons | Lucide React |
| Charts | Recharts |
| News | RSS via rss2json.com + corsproxy.io fallback |
| Build | Turbopack |

## Quick Start

```bash
git clone https://github.com/marcdshark666/WORLDmonitorV2byDrJonsson.git
cd WORLDmonitorV2byDrJonsson
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout with metadata
│   ├── page.tsx                  # Main dashboard page
│   └── globals.css               # Global styles
├── components/
│   ├── dashboard/
│   │   ├── main-layout.tsx       # Dashboard shell
│   │   ├── sidebar.tsx           # Navigation + country browser
│   │   ├── header.tsx            # Live clock, status, alerts
│   │   ├── overview-panel.tsx    # Global overview with stats
│   │   ├── news-panel.tsx        # RSS news aggregation
│   │   ├── country-detail.tsx    # Country dossier view
│   │   ├── conflicts-panel.tsx   # Active conflicts tracker
│   │   ├── settings-panel.tsx    # Profile & preferences
│   │   └── world-map.tsx         # Interactive canvas map
│   └── ui/
│       └── severity-badge.tsx    # CII severity indicator
├── data/
│   ├── countries.ts              # 250 countries database
│   └── news-sources.ts           # 398 news sources registry
├── hooks/
│   └── use-news.ts               # RSS fetching hook
├── stores/
│   └── dashboard-store.ts        # Global state (Zustand)
├── types/
│   └── index.ts                  # TypeScript type system
└── lib/
    └── utils.ts                  # Utility functions
```

## News Coverage

| Region | Countries with Local Sources |
|--------|---------------------------|
| Scandinavia | Sweden (11), Norway, Denmark, Finland, Iceland |
| Europe | Poland (15), UK, France, Germany, Spain, Italy, +20 more |
| Americas | USA (12), Peru (15), Argentina (9), Brazil (10), Colombia (8), Chile (8), all South America |
| Asia | China (8), Japan, India, South Korea, +15 more |
| Middle East | Israel, Palestine, Turkey, Saudi Arabia, Iran, Iraq, +10 more |
| Africa | Nigeria, South Africa, Egypt, Ethiopia, Kenya, +10 more |
| Global | Reuters, AP, AFP, BBC, Al Jazeera, DW, +15 wire services |

## Default Focus Profile

- Home: Sweden
- Focus: USA, China, Peru, Poland
- Topics: Conflicts, Military, Politics, Economy
- Alert Level: Medium

## License

MIT

## Author

Dr. Jonsson — Built with Claude AI
