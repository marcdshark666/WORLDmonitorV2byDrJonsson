// =============================================================================
// live-tv.ts — Live TV channels database for World Monitor V2
// YouTube live streams, free 24/7 news channels
// =============================================================================

export interface LiveTVChannel {
  id: string;
  name: string;
  country: string;          // ISO code
  language: string;
  youtubeId: string;        // YouTube channel or video ID
  type: "youtube-live" | "youtube-channel" | "embed-url";
  embedUrl?: string;        // Direct embed URL if not YouTube
  category: "news" | "conflict" | "finance" | "weather" | "government" | "international";
  description: string;
  logo?: string;
  is24h: boolean;
  priority: number;         // 1=highest for sorting
}

export const ALL_LIVE_TV: LiveTVChannel[] = [
  // =========================================================================
  // SWEDEN 🇸🇪
  // =========================================================================
  {
    id: "se-svt-nyheter",
    name: "SVT Nyheter",
    country: "SE",
    language: "sv",
    youtubeId: "UCGsPZdMACCYMoqunEoiLiGA",
    type: "youtube-channel",
    category: "news",
    description: "Sveriges Television — public service nyheter",
    is24h: false,
    priority: 1,
  },
  {
    id: "se-aftonbladet-tv",
    name: "Aftonbladet TV",
    country: "SE",
    language: "sv",
    youtubeId: "UCxQfCzCy0q6AkG1ywMkPsOQ",
    type: "youtube-channel",
    category: "news",
    description: "Aftonbladet — Sveriges största nyhetssajt, live-sändningar",
    is24h: false,
    priority: 2,
  },
  {
    id: "se-expressen-tv",
    name: "Expressen TV",
    country: "SE",
    language: "sv",
    youtubeId: "UCqH55SokzbBaOTQ1Ax4pqjQ",
    type: "youtube-channel",
    category: "news",
    description: "Expressen TV — breaking news och live-bevakning",
    is24h: false,
    priority: 3,
  },
  {
    id: "se-omni",
    name: "Omni",
    country: "SE",
    language: "sv",
    youtubeId: "UC_bYoVHsYPE0ClEWmaRVJZg",
    type: "youtube-channel",
    category: "news",
    description: "Omni — snabb nyhetsöversikt, alla perspektiv",
    is24h: false,
    priority: 4,
  },

  // =========================================================================
  // USA 🇺🇸
  // =========================================================================
  {
    id: "us-abc-news",
    name: "ABC News Live",
    country: "US",
    language: "en",
    youtubeId: "UCBi2mrWuNuyYy4gbM6fU18Q",
    type: "youtube-channel",
    category: "news",
    description: "ABC News — 24/7 live coverage",
    is24h: true,
    priority: 1,
  },
  {
    id: "us-nbc-news",
    name: "NBC News NOW",
    country: "US",
    language: "en",
    youtubeId: "UCeY0bbntWzzVIaj2z3QigXg",
    type: "youtube-channel",
    category: "news",
    description: "NBC News NOW — 24/7 streaming",
    is24h: true,
    priority: 1,
  },
  {
    id: "us-cbs-news",
    name: "CBS News 24/7",
    country: "US",
    language: "en",
    youtubeId: "UC8p1vwvWtl6T73JiExfWs1g",
    type: "youtube-channel",
    category: "news",
    description: "CBS News — 24/7 live streaming network",
    is24h: true,
    priority: 1,
  },
  {
    id: "us-fox-live",
    name: "LiveNOW from FOX",
    country: "US",
    language: "en",
    youtubeId: "UCuMo0RRtnNDuMB8DV5stEag",
    type: "youtube-channel",
    category: "news",
    description: "FOX — Unfiltered live breaking news",
    is24h: true,
    priority: 2,
  },
  {
    id: "us-cnn",
    name: "CNN",
    country: "US",
    language: "en",
    youtubeId: "UCupvZG-5ko_eiXAupbDfxWw",
    type: "youtube-channel",
    category: "news",
    description: "CNN — breaking news and live events",
    is24h: false,
    priority: 2,
  },
  {
    id: "us-bloomberg",
    name: "Bloomberg TV",
    country: "US",
    language: "en",
    youtubeId: "UCIALMKvObZNtJ6AmdCLP7Lg",
    type: "youtube-channel",
    category: "finance",
    description: "Bloomberg Television — global business & finance news 24/7",
    is24h: true,
    priority: 3,
  },
  {
    id: "us-cspan",
    name: "C-SPAN",
    country: "US",
    language: "en",
    youtubeId: "UCb2ykFGI5cOxZkHMeCDgUgA",
    type: "youtube-channel",
    category: "government",
    description: "C-SPAN — Congressional and government proceedings live",
    is24h: true,
    priority: 4,
  },

  // =========================================================================
  // POLAND 🇵🇱
  // =========================================================================
  {
    id: "pl-tvp-world",
    name: "TVP World",
    country: "PL",
    language: "en",
    youtubeId: "UCbR2mg-MWpXPd3r2DiEQsMg",
    type: "youtube-channel",
    category: "news",
    description: "TVP World — Poland's English-language 24h news",
    is24h: true,
    priority: 1,
  },
  {
    id: "pl-tvn24",
    name: "TVN24",
    country: "PL",
    language: "pl",
    youtubeId: "UCrEDsTLo2xJfbiyliGXShMw",
    type: "youtube-channel",
    category: "news",
    description: "TVN24 — Polens mest betrodda 24h nyhetskanal",
    is24h: true,
    priority: 1,
  },
  {
    id: "pl-polsat-news",
    name: "Polsat News",
    country: "PL",
    language: "pl",
    youtubeId: "UCvPyY0MFAH-fGjVJNAz-Few",
    type: "youtube-channel",
    category: "news",
    description: "Polsat News — 24-timmars nyhetsdygnet runt",
    is24h: true,
    priority: 2,
  },
  {
    id: "pl-tvp-info",
    name: "TVP Info",
    country: "PL",
    language: "pl",
    youtubeId: "UCjGnGMBQPBV786oSMKgBkYg",
    type: "youtube-channel",
    category: "news",
    description: "TVP Info — Public service 24h nyheter",
    is24h: true,
    priority: 3,
  },

  // =========================================================================
  // PERU 🇵🇪
  // =========================================================================
  {
    id: "pe-rpp",
    name: "RPP Noticias",
    country: "PE",
    language: "es",
    youtubeId: "UCX6gBUaKBXbxjRoRPMz6wRA",
    type: "youtube-channel",
    category: "news",
    description: "RPP Noticias — Perus största nyhetsradio, TV live",
    is24h: true,
    priority: 1,
  },
  {
    id: "pe-canal-n",
    name: "Canal N",
    country: "PE",
    language: "es",
    youtubeId: "UCoj5hIt-n6iCBw3rqCA4VBg",
    type: "youtube-channel",
    category: "news",
    description: "Canal N — 24h peruansk nyhetskanal",
    is24h: true,
    priority: 1,
  },
  {
    id: "pe-america-tv",
    name: "América TV",
    country: "PE",
    language: "es",
    youtubeId: "UC1DBoB6VEQ44j_NKgPk7Mrg",
    type: "youtube-channel",
    category: "news",
    description: "América Televisión — Perus största TV-kanal",
    is24h: false,
    priority: 2,
  },
  {
    id: "pe-atv",
    name: "ATV Noticias",
    country: "PE",
    language: "es",
    youtubeId: "UCuxhLEEB9y5xOILsBBiivbQ",
    type: "youtube-channel",
    category: "news",
    description: "ATV — peruanskt TV-nätverk med live nyheter",
    is24h: false,
    priority: 3,
  },

  // =========================================================================
  // CONFLICT ZONES — Most action right now
  // =========================================================================
  {
    id: "ua-channel24",
    name: "Channel 24 Ukraine",
    country: "UA",
    language: "uk",
    youtubeId: "UCVhIC0LnVbOfBvjGo6qkrDg",
    type: "youtube-channel",
    category: "conflict",
    description: "Kanal 24 — 24/7 ukrainsk nyhetstelevision, frontlinjebevakning",
    is24h: true,
    priority: 1,
  },
  {
    id: "ua-freedom",
    name: "Freedom TV Ukraine",
    country: "UA",
    language: "uk",
    youtubeId: "UCMC-MKkHMdIVWGNFUWtOvkw",
    type: "youtube-channel",
    category: "conflict",
    description: "Freedom — ukrainskt samlingsmaraton nyheter under kriget",
    is24h: true,
    priority: 1,
  },
  {
    id: "ua-united24",
    name: "UNITED24 Media",
    country: "UA",
    language: "en",
    youtubeId: "UCWAPBzZ_MP9XHiZP3ZZAFYQ",
    type: "youtube-channel",
    category: "conflict",
    description: "UNITED24 — Ukrainas officiella engelskspråkiga media",
    is24h: false,
    priority: 2,
  },
  {
    id: "ps-aljazeera-arabic",
    name: "Al Jazeera Arabic",
    country: "PS",
    language: "ar",
    youtubeId: "UCBvxne3r6hbHSwcFBjhgJKw",
    type: "youtube-channel",
    category: "conflict",
    description: "Al Jazeera Arabic — live Gaza/Palestina-bevakning",
    is24h: true,
    priority: 1,
  },
  {
    id: "il-i24news",
    name: "i24NEWS English",
    country: "IL",
    language: "en",
    youtubeId: "UCjEFAKF_JM08gHAHvgjkflQ",
    type: "youtube-channel",
    category: "conflict",
    description: "i24NEWS — israelisk 24/7 internationell nyhetskanal",
    is24h: true,
    priority: 1,
  },
  {
    id: "sd-aljazeeraen",
    name: "Al Jazeera English",
    country: "QA",
    language: "en",
    youtubeId: "UCNye-wNBqNL5ZzHSJj3l8Bg",
    type: "youtube-channel",
    category: "international",
    description: "Al Jazeera English — 24/7 global news, stark Mellanöstern/Afrika-bevakning",
    is24h: true,
    priority: 1,
  },

  // =========================================================================
  // CHINA 🇨🇳
  // =========================================================================
  {
    id: "cn-cgtn",
    name: "CGTN",
    country: "CN",
    language: "en",
    youtubeId: "UCgrNz-aDmcr2uuto8_DL2jg",
    type: "youtube-channel",
    category: "news",
    description: "CGTN — China Global Television Network, engelskspråkigt 24/7",
    is24h: true,
    priority: 1,
  },
  {
    id: "cn-scmp",
    name: "South China Morning Post",
    country: "CN",
    language: "en",
    youtubeId: "UC4SUWizzKc1tptprBkWjX2Q",
    type: "youtube-channel",
    category: "news",
    description: "SCMP — Hong Kong-baserad nyhetskanal, Kina-fokus",
    is24h: false,
    priority: 2,
  },

  // =========================================================================
  // INTERNATIONAL — Key global channels
  // =========================================================================
  {
    id: "int-bbc-news",
    name: "BBC News",
    country: "GB",
    language: "en",
    youtubeId: "UC16niRr50-MSBwiO3YDb3RA",
    type: "youtube-channel",
    category: "international",
    description: "BBC News — Världens mest kända nyhetskanal",
    is24h: false,
    priority: 1,
  },
  {
    id: "int-sky-news",
    name: "Sky News",
    country: "GB",
    language: "en",
    youtubeId: "UCoMdktPbSTixAyNGwb-UYkQ",
    type: "youtube-channel",
    category: "international",
    description: "Sky News — 24/7 live breaking news from UK",
    is24h: true,
    priority: 1,
  },
  {
    id: "int-france24-en",
    name: "France 24 English",
    country: "FR",
    language: "en",
    youtubeId: "UCQfwfsi5VrQ8yKZ-UWmAEFg",
    type: "youtube-channel",
    category: "international",
    description: "France 24 — 24/7 internationella nyheter, engelska",
    is24h: true,
    priority: 1,
  },
  {
    id: "int-dw-news",
    name: "DW News",
    country: "DE",
    language: "en",
    youtubeId: "UCknLrEdhRCp1aegoMqRaCZg",
    type: "youtube-channel",
    category: "international",
    description: "Deutsche Welle — Tysk internationell 24/7 nyhetskanal",
    is24h: true,
    priority: 1,
  },
  {
    id: "int-nhk-world",
    name: "NHK World Japan",
    country: "JP",
    language: "en",
    youtubeId: "UCfNJfbMVMFdj01HL88P92PA",
    type: "youtube-channel",
    category: "international",
    description: "NHK World — Japans internationella nyhetskanal",
    is24h: true,
    priority: 2,
  },
  {
    id: "int-wion",
    name: "WION",
    country: "IN",
    language: "en",
    youtubeId: "UC_gUM8rL-Lrg6O3adPW9K1g",
    type: "youtube-channel",
    category: "international",
    description: "WION — World is One News, indisk global 24/7",
    is24h: true,
    priority: 2,
  },
  {
    id: "int-euronews",
    name: "Euronews",
    country: "FR",
    language: "en",
    youtubeId: "UCW2QcKZiU8aUGg4yxCIditg",
    type: "youtube-channel",
    category: "international",
    description: "Euronews — Europeisk nyhetskanal, live 24/7",
    is24h: true,
    priority: 2,
  },
  {
    id: "int-reuters",
    name: "Reuters",
    country: "GB",
    language: "en",
    youtubeId: "UChqUTb7kYRX8-EiaN3XFrSQ",
    type: "youtube-channel",
    category: "international",
    description: "Reuters — Global wire service med live video",
    is24h: false,
    priority: 2,
  },
  {
    id: "int-trt-world",
    name: "TRT World",
    country: "TR",
    language: "en",
    youtubeId: "UC7fWeaHhqgM4Lba5uQCev-Q",
    type: "youtube-channel",
    category: "international",
    description: "TRT World — Turkiets engelskspråkiga 24/7 nyheter",
    is24h: true,
    priority: 3,
  },

  // =========================================================================
  // LATIN AMERICA
  // =========================================================================
  {
    id: "ar-tn",
    name: "Todo Noticias (TN)",
    country: "AR",
    language: "es",
    youtubeId: "UCj6PcyLvpnIRT_2W_mwa9Aw",
    type: "youtube-channel",
    category: "news",
    description: "TN — Argentinas ledande 24h nyhetskanal",
    is24h: true,
    priority: 1,
  },
  {
    id: "br-globonews",
    name: "GloboNews",
    country: "BR",
    language: "pt",
    youtubeId: "UCFi5EjaBMKOEhSqiMFbzNhg",
    type: "youtube-channel",
    category: "news",
    description: "GloboNews — Brasiliens främsta 24h nyhetskanal",
    is24h: true,
    priority: 1,
  },
  {
    id: "co-caracol",
    name: "Caracol Noticias",
    country: "CO",
    language: "es",
    youtubeId: "UCoXtvJzdfXSyj10Xyih-KIw",
    type: "youtube-channel",
    category: "news",
    description: "Caracol — Colombias största TV-nätverk",
    is24h: false,
    priority: 2,
  },
  {
    id: "cl-cnn-chile",
    name: "CNN Chile",
    country: "CL",
    language: "es",
    youtubeId: "UCuFKPhEJftNjxfzbxqhPIdA",
    type: "youtube-channel",
    category: "news",
    description: "CNN Chile — 24h nyheter från Chile",
    is24h: true,
    priority: 2,
  },
  {
    id: "mx-milenio",
    name: "Milenio",
    country: "MX",
    language: "es",
    youtubeId: "UCfMt40MjpWYmR6u5he9a3JQ",
    type: "youtube-channel",
    category: "news",
    description: "Milenio — Mexikansk 24h nyhetskanal",
    is24h: true,
    priority: 2,
  },
  {
    id: "int-france24-es",
    name: "France 24 Español",
    country: "FR",
    language: "es",
    youtubeId: "UCUdOoVWuWmgo1wByzcsyKDQ",
    type: "youtube-channel",
    category: "international",
    description: "France 24 — internationella nyheter på spanska",
    is24h: true,
    priority: 3,
  },
  {
    id: "int-dw-espanol",
    name: "DW Español",
    country: "DE",
    language: "es",
    youtubeId: "UCT2rgJRBHMyMSYxBRkCpqUQ",
    type: "youtube-channel",
    category: "international",
    description: "DW Español — tyska nyheter på spanska för Latinamerika",
    is24h: true,
    priority: 3,
  },

  // =========================================================================
  // MIDDLE EAST / AFRICA / ASIA — Conflict & Hot zones
  // =========================================================================
  {
    id: "in-ndtv",
    name: "NDTV 24x7",
    country: "IN",
    language: "en",
    youtubeId: "UCe3B2CJmu2FhbnEsPsA_CcA",
    type: "youtube-channel",
    category: "news",
    description: "NDTV — Indiens ledande 24/7 engelskspråkiga nyhetskanal",
    is24h: true,
    priority: 1,
  },
  {
    id: "kr-arirang",
    name: "Arirang TV",
    country: "KR",
    language: "en",
    youtubeId: "UCL3l50al3lDP_ZMJbo3beJA",
    type: "youtube-channel",
    category: "international",
    description: "Arirang — Sydkoreas internationella TV-kanal",
    is24h: true,
    priority: 3,
  },
];

// Helper functions
export function getTVByCountry(code: string): LiveTVChannel[] {
  return ALL_LIVE_TV
    .filter((ch) => ch.country === code)
    .sort((a, b) => a.priority - b.priority);
}

export function getTVByCategory(category: LiveTVChannel["category"]): LiveTVChannel[] {
  return ALL_LIVE_TV
    .filter((ch) => ch.category === category)
    .sort((a, b) => a.priority - b.priority);
}

export function getConflictTV(): LiveTVChannel[] {
  return ALL_LIVE_TV
    .filter((ch) => ch.category === "conflict")
    .sort((a, b) => a.priority - b.priority);
}

export function getInternationalTV(): LiveTVChannel[] {
  return ALL_LIVE_TV
    .filter((ch) => ch.category === "international")
    .sort((a, b) => a.priority - b.priority);
}

export function get24hChannels(): LiveTVChannel[] {
  return ALL_LIVE_TV
    .filter((ch) => ch.is24h)
    .sort((a, b) => a.priority - b.priority);
}

export function getAllTVCountryCodes(): string[] {
  return [...new Set(ALL_LIVE_TV.map((ch) => ch.country))];
}
