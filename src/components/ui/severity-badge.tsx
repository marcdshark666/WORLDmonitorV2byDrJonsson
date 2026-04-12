"use client";

import { cn, getSeverityColor, getSeverityLabel } from "@/lib/utils";

interface SeverityBadgeProps {
  severity: number;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

export function SeverityBadge({ severity, size = "md", showLabel = true }: SeverityBadgeProps) {
  const colorClass = getSeverityColor(severity);
  const label = getSeverityLabel(severity);

  const sizeClasses = {
    sm: "text-[10px] px-1.5 py-0.5",
    md: "text-xs px-2 py-0.5",
    lg: "text-sm px-3 py-1",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full font-mono font-semibold",
        colorClass,
        sizeClasses[size]
      )}
    >
      <span className="relative flex h-2 w-2">
        {severity >= 60 && (
          <span
            className={cn(
              "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
              severity >= 80 ? "bg-red-400" : "bg-orange-400"
            )}
          />
        )}
        <span
          className={cn(
            "relative inline-flex rounded-full h-2 w-2",
            severity >= 80 ? "bg-red-500" : severity >= 60 ? "bg-orange-500" : severity >= 40 ? "bg-yellow-500" : severity >= 20 ? "bg-blue-500" : "bg-green-500"
          )}
        />
      </span>
      {showLabel && <span>{label}</span>}
      <span className="opacity-70">{severity}</span>
    </span>
  );
}
