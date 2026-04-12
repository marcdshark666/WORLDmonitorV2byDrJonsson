"use client";

import { useState, useEffect, useCallback } from "react";
import type { NewsItem } from "@/types";

const RSS_PROXY = "https://api.rss2json.com/v1/api.json?rss_url=";
const CORS_PROXY = "https://corsproxy.io/?url=";

interface UseNewsOptions {
  feedUrls: string[];
  maxItems?: number;
  refreshInterval?: number; // ms
  country?: string;
}

interface ParsedFeedItem {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  thumbnail?: string;
  author?: string;
  categories?: string[];
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").replace(/&[^;]+;/g, " ").trim();
}

function generateId(title: string, source: string): string {
  return btoa(encodeURIComponent(`${title}-${source}`)).slice(0, 20);
}

function estimateSeverity(title: string, description: string): number {
  const text = `${title} ${description}`.toLowerCase();
  const criticalWords = ["war", "attack", "killed", "explosion", "crisis", "emergency", "dead", "missile", "bomb", "invasion", "krig", "attack", "dödade", "kris"];
  const highWords = ["conflict", "military", "sanctions", "protest", "arrest", "threat", "escalation", "konflik", "militär", "protest", "hot"];
  const moderateWords = ["election", "economy", "trade", "diplomacy", "agreement", "val", "ekonomi", "handel"];

  let score = 20;
  criticalWords.forEach((w) => { if (text.includes(w)) score += 15; });
  highWords.forEach((w) => { if (text.includes(w)) score += 8; });
  moderateWords.forEach((w) => { if (text.includes(w)) score += 3; });

  return Math.min(score, 100);
}

async function fetchRssFeed(feedUrl: string): Promise<ParsedFeedItem[]> {
  try {
    // Try rss2json first (free tier: 10k calls/day)
    const res = await fetch(`${RSS_PROXY}${encodeURIComponent(feedUrl)}`, {
      signal: AbortSignal.timeout(8000),
    });
    if (res.ok) {
      const data = await res.json();
      if (data.status === "ok" && data.items) {
        return data.items.map((item: Record<string, string>) => ({
          title: item.title || "",
          link: item.link || "",
          description: item.description || "",
          pubDate: item.pubDate || "",
          thumbnail: item.thumbnail || item.enclosure?.link || "",
          author: item.author || "",
          categories: item.categories || [],
        }));
      }
    }
  } catch {
    // Fallback: try CORS proxy with native XML parsing
    try {
      const res = await fetch(`${CORS_PROXY}${encodeURIComponent(feedUrl)}`, {
        signal: AbortSignal.timeout(8000),
      });
      if (res.ok) {
        const text = await res.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, "text/xml");
        const items = xml.querySelectorAll("item, entry");
        return Array.from(items).map((item) => ({
          title: item.querySelector("title")?.textContent || "",
          link: item.querySelector("link")?.textContent || item.querySelector("link")?.getAttribute("href") || "",
          description: item.querySelector("description, summary, content")?.textContent || "",
          pubDate: item.querySelector("pubDate, published, updated")?.textContent || "",
          thumbnail: "",
          author: item.querySelector("author, dc\\:creator")?.textContent || "",
          categories: Array.from(item.querySelectorAll("category")).map((c) => c.textContent || ""),
        }));
      }
    } catch {
      // Silent fail — source unavailable
    }
  }
  return [];
}

export function useNews({ feedUrls, maxItems = 50, refreshInterval = 300000, country }: UseNewsOptions) {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchAllFeeds = useCallback(async () => {
    if (feedUrls.length === 0) {
      setNews([]);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      // Fetch all feeds in parallel with batching (max 5 concurrent)
      const batchSize = 5;
      const allItems: NewsItem[] = [];

      for (let i = 0; i < feedUrls.length; i += batchSize) {
        const batch = feedUrls.slice(i, i + batchSize);
        const results = await Promise.allSettled(
          batch.map((url) => fetchRssFeed(url))
        );

        results.forEach((result, idx) => {
          if (result.status === "fulfilled" && result.value.length > 0) {
            const sourceUrl = batch[idx];
            const sourceDomain = new URL(sourceUrl).hostname.replace("www.", "");

            result.value.forEach((item) => {
              const title = stripHtml(item.title);
              const summary = stripHtml(item.description).slice(0, 500);

              if (title) {
                allItems.push({
                  id: generateId(title, sourceDomain),
                  title,
                  summary,
                  source: sourceDomain,
                  sourceUrl: item.link || sourceUrl,
                  countries: country ? [country] : [],
                  topics: [],
                  publishedAt: new Date(item.pubDate || Date.now()),
                  severity: estimateSeverity(title, summary),
                  language: "auto",
                  imageUrl: item.thumbnail || undefined,
                });
              }
            });
          }
        });
      }

      // Sort by date, deduplicate by title similarity, limit
      const uniqueNews = allItems
        .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
        .filter((item, index, self) =>
          index === self.findIndex((t) => t.title.toLowerCase().slice(0, 50) === item.title.toLowerCase().slice(0, 50))
        )
        .slice(0, maxItems);

      setNews(uniqueNews);
      setLastUpdated(new Date());
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch news");
    } finally {
      setLoading(false);
    }
  }, [feedUrls, maxItems, country]);

  useEffect(() => {
    fetchAllFeeds();
    const interval = setInterval(fetchAllFeeds, refreshInterval);
    return () => clearInterval(interval);
  }, [fetchAllFeeds, refreshInterval]);

  return { news, loading, error, lastUpdated, refresh: fetchAllFeeds };
}
