import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number): string {
  if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + "B";
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
  if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
  return num.toString();
}

export function getRelativeTime(date: Date): string {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (minutes < 1) return "Just now";
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 7) return `${days}d ago`;
  return date.toLocaleDateString();
}

export function getSeverityColor(severity: number): string {
  if (severity >= 80) return "text-red-500 bg-red-500/10";
  if (severity >= 60) return "text-orange-500 bg-orange-500/10";
  if (severity >= 40) return "text-yellow-500 bg-yellow-500/10";
  if (severity >= 20) return "text-blue-500 bg-blue-500/10";
  return "text-green-500 bg-green-500/10";
}

export function getSeverityLabel(severity: number): string {
  if (severity >= 80) return "Critical";
  if (severity >= 60) return "High";
  if (severity >= 40) return "Moderate";
  if (severity >= 20) return "Low";
  return "Stable";
}
