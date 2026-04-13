// =============================================================================
// live-tv.ts — Live TV channels with WORKING embed URLs
// Uses direct stream embeds, YouTube channel live, and website streams
// =============================================================================

export interface LiveTVChannel {
  id: string;
  name: string;
  country: string;
  language: string;
  youtubeId: string;
  embedUrl?: string;         // Direct working embed URL (preferred)
  websiteStream?: string;    // Fallback: channel's own website stream
  category: "news" | "conflict" | "finance" | "weather" | "government" | "international";
  description: string;
  is24h: boolean;
  priority: number;
}

export const ALL_LIVE_TV: LiveTVChannel[] = [
  // =========================================================================
  // SWEDEN 🇸🇪
  // =========================================================================
  {
    id: "se-svt",
    name: "SVT Nyheter",
    country: "SE",
    language: "sv",
    youtubeId: "UCGsPZdMACCYMoqunEoiLiGA",
    websiteStream: "https://www.svtplay.se/kanaler/svt1",
    category: "news",
    description: "Sveriges Television — public service nyheter",
    is24h: false,
    priority: 1,
  },
  {
    id: "se-aftonbladet",
    name: "Aftonbladet TV",
    country: "SE",
    language: "sv",
    youtubeId: "UCxQfCzCy0q6AkG1ywMkPsOQ",
    websiteStream: "https://tv.aftonbladet.se/video/abtv/live/channel1",
    category: "news",
    description: "Aftonbladet — Sveriges största nyhetssajt",
    is24h: false,
    priority: 2,
  },
  {
    id: "se-expressen",
    name: "Expressen TV",
    country: "SE",
    language: "sv",
    youtubeId: "UCqH55SokzbBaOTQ1Ax4pqjQ",
    websiteStream: "https://www.expressen.se/tv/",
    category: "news",
    description: "Expressen TV — breaking news och live",
    is24h: false,
    priority: 3,
  },

  // =========================================================================
  // USA 🇺🇸 — All verified 24/7 YouTube live streams
  // =========================================================================
  {
    id: "us-abc",
    name: "ABC News Live",
    country: "US",
    language: "en",
    youtubeId: "UCBi2mrWuNuyYy4gbM6fU18Q",
    embedUrl: "https://www.youtube.com/embed/live_stream?channel=UCBi2mrWuNuyYy4gbM6fU18Q&autoplay=1&mute=1",
    websiteStream: "https://abcnews.go.com/Live",
    category: "news",
    description: "ABC News — 24/7 live coverage",
    is24h: true,
    priority: 1,
  },
  {
    id: "us-nbc",
    name: "NBC News NOW",
    country: "US",
    language: "en",
    youtubeId: "UCeY0bbntWzzVIaj2z3QigXg",
    embedUrl: "https://www.youtube.com/embed/live_stream?channel=UCeY0bbntWzzVIaj2z3QigXg&autoplay=1&mute=1",
    websiteStream: "https://www.nbcnews.com/now",
    category: "news",
    description: "NBC News NOW — 24/7 streaming",
    is24h: true,
    priority: 1,
  },
  {
    id: "us-cbs",
    name: "CBS News 24/7",
    country: "US",
    language: "en",
    youtubeId: "UC8p1vwvWtl6T73JiExfWs1g",
    embedUrl: "https://www.youtube.com/embed/live_stream?channel=UC8p1vwvWtl6T73JiExfWs1g&autoplay=1&mute=1",
    websiteStream: "https://www.cbsnews.com/live/",
    category: "news",
    description: "CBS News — 24/7 live network",
    is24h: true,
    priority: 1,
  },
  {
    id: "us-fox",
    name: "LiveNOW from FOX",
    country: "US",
    language: "en",
    youtubeId: "UCuMo0RRtnNDuMB8DV5stEag",
    embedUrl: "https://www.youtube.com/embed/live_stream?channel=UCuMo0RRtnNDuMB8DV5stEag&autoplay=1&mute=1",
    websiteStream: "https://www.livenowfox.com/",
    category: "news",
    description: "FOX — unfiltered live breaking news",
    is24h: true,
    priority: 2,
  },
  {
    id: "us-bloomberg",
    name: "Bloomberg TV",
    country: "US",
    language: "en",
    youtubeId: "UCIALMKvObZNtJ6AmdCLP7Lg",
    embedUrl: "https://www.youtube.com/embed/live_stream?channel=UCIALMKvObZNtJ6AmdCLP7Lg&autoplay=1&mute=1",
    websiteStream: "https://www.bloomberg.com/live",
    category: "finance",
    description: "Bloomberg — global business & finance 24/7",
    is24h: true,
    priority: 3,
  },
  {
    id: "us-cspan",
    name: "C-SPAN",
    country: "US",
    language: "en",
    youtubeId: "UCb2ykFGI5cOxZkHMeCDgUgA",
    embedUrl: "https://www.youtube.com/embed/live_stream?channel=UCb2ykFGI5cOxZkHMeCDgUgA&autoplay=1&mute=1",
    websiteStream: "https://www.c-span.org/networks/",
    category: "government",
    description: "C-SPAN — government proceedings live",
    is24h: true,
    priority: 4,
  },

  // =========================================================================
  // POLAND 🇵🇱
  // =========================================================================
  {
    id: "pl-tvpworld",
    name: "TVP World",
    country: "PL",
    language: "en",
    youtubeId: "UCbR2mg-MWpXPd3r2DiEQsMg",
    embedUrl: "https://www.youtube.com/embed/live_stream?channel=UCbR2mg-MWpXPd3r2DiEQsMg&autoplay=1&mute=1",
    websiteStream: "https://tvpworld.com/live",
    category: "news",
    description: "TVP World — Poland's 24h English news",
    is24h: true,
    priority: 1,
  },
  {
    id: "pl-tvn24",
    name: "TVN24",
    country: "PL",
    language: "pl",
    youtubeId: "UCrEDsTLo2xJfbiyliGXShMw",
    embedUrl: "https://www.youtube.com/embed/live_stream?channel=UCrEDsTLo2xJfbiyliGXShMw&autoplay=1&mute=1",
    websiteStream: "https://tvn24.pl/na-zywo",
    category: "news",
    description: "TVN24 — Polens mest betrodda nyhetskanal",
    is24h: true,
    priority: 1,
  },
  {
    id: "pl-polsat",
    name: "Polsat News",
    country: "PL",
    language: "pl",
    youtubeId: "UCvPyY0MFAH-fGjVJNAz-Few",
    embedUrl: "https://www.youtube.com/embed/live_stream?channel=UCvPyY0MFAH-fGjVJNAz-Few&autoplay=1&mute=1",
    websiteStream: "https://www.polsatnews.pl/na-zywo/",
    category: "news",
    description: "Polsat News — 24-timmars nyheter",
    is24h: true,
    priority: 2,
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
    embedUrl: "https://www.youtube.com/embed/live_stream?channel=UCX6gBUaKBXbxjRoRPMz6wRA&autoplay=1&mute=1",
    websiteStream: "https://rpp.pe/tv-vivo",
    category: "news",
    description: "RPP — Perus största nyhetsradio & TV",
    is24h: true,
    priority: 1,
  },
  {
    id: "pe-canaln",
    name: "Canal N",
    country: "PE",
    language: "es",
    youtubeId: "UCoj5hIt-n6iCBw3rqCA4VBg",
    embedUrl: "https://www.youtube.com/embed/live_stream?channel=UCoj5hIt-n6iCBw3rqCA4VBg&autoplay=1&mute=1",
    websiteStream: "https://canaln.pe/envivo",
    category: "news",
    description: "Canal N — 24h peruansk nyhetskanal",
    is24h: true,
    priority: 1,
  },
  {
    id: "pe-america",
    name: "América TV",
    country: "PE",
    language: "es",
    youtubeId: "UC1DBoB6VEQ44j_NKgPk7Mrg",
    embedUrl: "https://www.youtube.com/embed/live_stream?channel=UC1DBoB6VEQ44j_NKgPk7Mrg&autoplay=1&mute=1",
    websiteStream: "https://www.americatv.com.pe/en-vivo",
    category: "news",
    description: "América TV — Perus största TV-kanal",
    is24h: false,
    priority: 2,
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
    embedUrl: "https://www.youtube.com/embed/live_stream?channel=UCgrNz-aDmcr2uuto8_DL2jg&autoplay=1&mute=1",
    websiteStream: "https://www.cgtn.com/live",
    category: "news",
    description: "CGTN — China Global Television 24/7",
    is24h: true,
    priority: 1,
  },

  // =========================================================================
  // CONFLICT ZONES 🔥
  // =========================================================================
  {
    id: "ua-channel24",
    name: "Channel 24 Ukraine",
    country: "UA",
    language: "uk",
    youtubeId: "UCVhIC0LnVbOfBvjGo6qkrDg",
    embedUrl: "https://www.youtube.com/embed/live_stream?channel=UCVhIC0LnVbOfBvjGo6qkrDg&autoplay=1&mute=1",
    websiteStream: "https://24tv.ua/live/",
    category: "conflict",
    description: "24 Kanal — 24/7 ukrainsk krigsbevakning",
    is24h: true,
    priority: 1,
  },
  {
    id: "ua-freedom",
    name: "Freedom TV Ukraine",
    country: "UA",
    language: "uk",
    youtubeId: "UCMC-MKkHMdIVWGNFUWtOvkw",
    embedUrl: "https://www.youtube.com/embed/live_stream?channel=UCMC-MKkHMdIVWGNFUWtOvkw&autoplay=1&mute=1",
    category: "conflict",
    description: "Freedom — samlingsmaraton under kriget",
    is24h: true,
    priority: 1,
  },
  {
    id: "il-i24",
    name: "i24NEWS",
    country: "IL",
    language: "en",
    youtubeId: "UCjEFAKF_JM08gHAHvgjkflQ",
    embedUrl: "https://www.youtube.com/embed/live_stream?channel=UCjEFAKF_JM08gHAHvgjkflQ&autoplay=1&mute=1",
    websiteStream: "https://www.i24news.tv/en/live",
    category: "conflict",
    description: "i24NEWS — israelisk 24/7 internationell",
    is24h: true,
    priority: 1,
  },

  // =========================================================================
  // INTERNATIONAL 🌍 — These channels are CONFIRMED 24/7 on YouTube
  // =========================================================================
  {
    id: "int-aljazeera",
    name: "Al Jazeera English",
    country: "QA",
    language: "en",
    youtubeId: "UCNye-wNBqNL5ZzHSJj3l8Bg",
    embedUrl: "https://www.youtube.com/embed/live_stream?channel=UCNye-wNBqNL5ZzHSJj3l8Bg&autoplay=1&mute=1",
    websiteStream: "https://www.aljazeera.com/live/",
    category: "international",
    description: "Al Jazeera — 24/7 global news, strongest ME/Africa",
    is24h: true,
    priority: 1,
  },
  {
    id: "int-skynews",
    name: "Sky News",
    country: "GB",
    language: "en",
    youtubeId: "UCoMdktPbSTixAyNGwb-UYkQ",
    embedUrl: "https://www.youtube.com/embed/live_stream?channel=UCoMdktPbSTixAyNGwb-UYkQ&autoplay=1&mute=1",
    websiteStream: "https://news.sky.com/watch-live",
    category: "international",
    description: "Sky News — 24/7 live from UK (confirmed on YT)",
    is24h: true,
    priority: 1,
  },
  {
    id: "int-france24",
    name: "France 24 English",
    country: "FR",
    language: "en",
    youtubeId: "UCQfwfsi5VrQ8yKZ-UWmAEFg",
    embedUrl: "https://www.youtube.com/embed/live_stream?channel=UCQfwfsi5VrQ8yKZ-UWmAEFg&autoplay=1&mute=1",
    websiteStream: "https://www.france24.com/en/live",
    category: "international",
    description: "France 24 — 24/7 international news",
    is24h: true,
    priority: 1,
  },
  {
    id: "int-dw",
    name: "DW News",
    country: "DE",
    language: "en",
    youtubeId: "UCknLrEdhRCp1aegoMqRaCZg",
    embedUrl: "https://www.youtube.com/embed/live_stream?channel=UCknLrEdhRCp1aegoMqRaCZg&autoplay=1&mute=1",
    websiteStream: "https://www.dw.com/en/live-tv/s-100825",
    category: "international",
    description: "Deutsche Welle — German international 24/7",
    is24h: true,
    priority: 1,
  },
  {
    id: "int-nhk",
    name: "NHK World Japan",
    country: "JP",
    language: "en",
    youtubeId: "UCfNJfbMVMFdj01HL88P92PA",
    embedUrl: "https://www.youtube.com/embed/live_stream?channel=UCfNJfbMVMFdj01HL88P92FA&autoplay=1&mute=1",
    websiteStream: "https://www3.nhk.or.jp/nhkworld/en/live/",
    category: "international",
    description: "NHK World — Japan's international channel",
    is24h: true,
    priority: 2,
  },
  {
    id: "int-wion",
    name: "WION",
    country: "IN",
    language: "en",
    youtubeId: "UC_gUM8rL-Lrg6O3adPW9K1g",
    embedUrl: "https://www.youtube.com/embed/live_stream?channel=UC_gUM8rL-Lrg6O3adPW9K1g&autoplay=1&mute=1",
    category: "international",
    description: "WION — World is One News, 24/7 from India",
    is24h: true,
    priority: 2,
  },
  {
    id: "int-euronews",
    name: "Euronews",
    country: "FR",
    language: "en",
    youtubeId: "UCW2QcKZiU8aUGg4yxCIditg",
    embedUrl: "https://www.youtube.com/embed/live_stream?channel=UCW2QcKZiU8aUGg4yxCIditg&autoplay=1&mute=1",
    websiteStream: "https://www.euronews.com/live",
    category: "international",
    description: "Euronews — European news 24/7",
    is24h: true,
    priority: 2,
  },
  {
    id: "int-trt",
    name: "TRT World",
    country: "TR",
    language: "en",
    youtubeId: "UC7fWeaHhqgM4Lba5uQCev-Q",
    embedUrl: "https://www.youtube.com/embed/live_stream?channel=UC7fWeaHhqgM4Lba5uQCev-Q&autoplay=1&mute=1",
    websiteStream: "https://www.trtworld.com/live",
    category: "international",
    description: "TRT World — Turkey's English 24/7",
    is24h: true,
    priority: 3,
  },
  {
    id: "int-bbc",
    name: "BBC News",
    country: "GB",
    language: "en",
    youtubeId: "UC16niRr50-MSBwiO3YDb3RA",
    websiteStream: "https://www.bbc.com/news/live",
    category: "international",
    description: "BBC News — world's most known news brand",
    is24h: false,
    priority: 1,
  },
  {
    id: "int-reuters",
    name: "Reuters",
    country: "GB",
    language: "en",
    youtubeId: "UChqUTb7kYRX8-EiaN3XFrSQ",
    websiteStream: "https://www.reuters.com/video/",
    category: "international",
    description: "Reuters — global wire service live video",
    is24h: false,
    priority: 2,
  },

  // =========================================================================
  // LATIN AMERICA 🌎
  // =========================================================================
  {
    id: "ar-tn",
    name: "Todo Noticias (TN)",
    country: "AR",
    language: "es",
    youtubeId: "UCj6PcyLvpnIRT_2W_mwa9Aw",
    embedUrl: "https://www.youtube.com/embed/live_stream?channel=UCj6PcyLvpnIRT_2W_mwa9Aw&autoplay=1&mute=1",
    category: "news",
    description: "TN — Argentinas 24h nyhetskanal",
    is24h: true,
    priority: 1,
  },
  {
    id: "cl-cnn",
    name: "CNN Chile",
    country: "CL",
    language: "es",
    youtubeId: "UCuFKPhEJftNjxfzbxqhPIdA",
    embedUrl: "https://www.youtube.com/embed/live_stream?channel=UCuFKPhEJftNjxfzbxqhPIdA&autoplay=1&mute=1",
    category: "news",
    description: "CNN Chile — 24h chilenskt nyheter",
    is24h: true,
    priority: 2,
  },
  {
    id: "mx-milenio",
    name: "Milenio",
    country: "MX",
    language: "es",
    youtubeId: "UCfMt40MjpWYmR6u5he9a3JQ",
    embedUrl: "https://www.youtube.com/embed/live_stream?channel=UCfMt40MjpWYmR6u5he9a3JQ&autoplay=1&mute=1",
    category: "news",
    description: "Milenio — mexikansk 24h nyhetskanal",
    is24h: true,
    priority: 2,
  },
  {
    id: "int-f24es",
    name: "France 24 Español",
    country: "FR",
    language: "es",
    youtubeId: "UCUdOoVWuWmgo1wByzcsyKDQ",
    embedUrl: "https://www.youtube.com/embed/live_stream?channel=UCUdOoVWuWmgo1wByzcsyKDQ&autoplay=1&mute=1",
    category: "international",
    description: "France 24 — internationella nyheter på spanska",
    is24h: true,
    priority: 3,
  },
  {
    id: "int-dwes",
    name: "DW Español",
    country: "DE",
    language: "es",
    youtubeId: "UCT2rgJRBHMyMSYxBRkCpqUQ",
    embedUrl: "https://www.youtube.com/embed/live_stream?channel=UCT2rgJRBHMyMSYxBRkCpqUQ&autoplay=1&mute=1",
    category: "international",
    description: "DW Español — tyskt nyheter på spanska",
    is24h: true,
    priority: 3,
  },

  // =========================================================================
  // ASIA
  // =========================================================================
  {
    id: "in-ndtv",
    name: "NDTV 24x7",
    country: "IN",
    language: "en",
    youtubeId: "UCe3B2CJmu2FhbnEsPsA_CcA",
    embedUrl: "https://www.youtube.com/embed/live_stream?channel=UCe3B2CJmu2FhbnEsPsA_CcA&autoplay=1&mute=1",
    category: "news",
    description: "NDTV — Indiens ledande 24/7 engelska nyheter",
    is24h: true,
    priority: 1,
  },
  {
    id: "kr-arirang",
    name: "Arirang TV",
    country: "KR",
    language: "en",
    youtubeId: "UCL3l50al3lDP_ZMJbo3beJA",
    embedUrl: "https://www.youtube.com/embed/live_stream?channel=UCL3l50al3lDP_ZMJbo3beJA&autoplay=1&mute=1",
    category: "international",
    description: "Arirang — Sydkoreas internationella TV",
    is24h: true,
    priority: 3,
  },
];

// Helpers
export function getTVByCountry(code: string): LiveTVChannel[] {
  return ALL_LIVE_TV.filter((ch) => ch.country === code).sort((a, b) => a.priority - b.priority);
}

export function getTVByCategory(category: LiveTVChannel["category"]): LiveTVChannel[] {
  return ALL_LIVE_TV.filter((ch) => ch.category === category).sort((a, b) => a.priority - b.priority);
}

export function getConflictTV(): LiveTVChannel[] {
  return ALL_LIVE_TV.filter((ch) => ch.category === "conflict").sort((a, b) => a.priority - b.priority);
}

export function getInternationalTV(): LiveTVChannel[] {
  return ALL_LIVE_TV.filter((ch) => ch.category === "international").sort((a, b) => a.priority - b.priority);
}

export function get24hChannels(): LiveTVChannel[] {
  return ALL_LIVE_TV.filter((ch) => ch.is24h).sort((a, b) => a.priority - b.priority);
}

export function getAllTVCountryCodes(): string[] {
  return [...new Set(ALL_LIVE_TV.map((ch) => ch.country))];
}
