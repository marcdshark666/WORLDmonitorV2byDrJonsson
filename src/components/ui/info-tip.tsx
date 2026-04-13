"use client";

import { useState, useRef, useEffect } from "react";
import { Info } from "lucide-react";
import { cn } from "@/lib/utils";

// Glossary of all abbreviations and terms used in the dashboard
const GLOSSARY: Record<string, string> = {
  // Indices & Metrics
  "CII": "Country Instability Index — a composite score (0–100) measuring political instability, conflict, and societal risk. Higher = more unstable.",
  "HDI": "Human Development Index — UN measure of life expectancy, education, and income. Range 0–1, higher is better.",
  "GDP": "Gross Domestic Product — total monetary value of all goods and services produced in a country.",
  "GDP/Capita": "Gross Domestic Product per person — a country's total economic output divided by population.",
  "M4.5+": "Earthquake magnitude 4.5 or higher on the Richter scale. These are felt by people and can cause minor damage.",
  "CO2/Capita": "Carbon dioxide emissions per person per year, measured in metric tons.",
  "UTC": "Coordinated Universal Time — the global time standard used by military, aviation, and science worldwide.",

  // Military & Conflict Organizations
  "NATO": "North Atlantic Treaty Organization — a 32-member military alliance of Western nations.",
  "IDF": "Israel Defense Forces — the military forces of the State of Israel.",
  "Hamas": "Islamic Resistance Movement — Palestinian militant organization governing Gaza since 2007.",
  "SAF": "Sudanese Armed Forces — the official military of Sudan.",
  "RSF": "Rapid Support Forces — a Sudanese paramilitary group, formerly the Janjaweed militia.",
  "NUG": "National Unity Government — Myanmar's democratic opposition government in exile, formed after the 2021 coup.",
  "PDF": "People's Defence Force — armed resistance forces aligned with Myanmar's NUG against the military junta.",
  "JNIM": "Jama'at Nusrat al-Islam wal-Muslimin — al-Qaeda's affiliate in the Sahel region of West Africa.",
  "ISGS": "Islamic State in the Greater Sahara — ISIS's branch operating across the Sahel.",
  "M23": "March 23 Movement — a Rwanda-backed rebel group in eastern DRC, named after a 2009 peace deal.",
  "ADF": "Allied Democratic Forces — an ISIS-affiliated militant group active in eastern DRC and Uganda.",
  "MONUSCO": "UN Organization Stabilization Mission in the DRC — the UN's largest peacekeeping mission.",
  "FARDC": "Armed Forces of the Democratic Republic of the Congo — DRC's national military.",
  "FDLR": "Democratic Forces for the Liberation of Rwanda — a Rwandan Hutu rebel group in the DRC.",
  "ATMIS": "African Union Transition Mission in Somalia — AU peacekeeping force fighting al-Shabaab.",
  "MSS": "Multinational Security Support — Kenya-led international mission to stabilize Haiti.",
  "ELN": "National Liberation Army (Ejército de Liberación Nacional) — Colombia's last active guerrilla group.",
  "FARC": "Revolutionary Armed Forces of Colombia — formerly Latin America's largest guerrilla group. Dissident factions remain active.",
  "EMC": "Estado Mayor Central — the main FARC dissident faction that rejected the 2016 peace deal.",
  "SDF": "Syrian Democratic Forces — a Kurdish-led coalition controlling northeast Syria.",
  "YPG": "People's Protection Units (Yekîneyên Parastina Gel) — Kurdish militia forming the SDF's core.",
  "HTS": "Hay'at Tahrir al-Sham — dominant armed group in northwest Syria, now leading transitional government.",
  "Houthis": "Ansar Allah — a Yemeni Shia armed movement controlling northern Yemen, backed by Iran.",
  "Wagner Group": "A Russian private military company (now rebranded Africa Corps) active in Africa and formerly Ukraine.",
  "Al-Shabaab": "Al-Qaeda's affiliate in East Africa, controlling parts of south-central Somalia.",

  // International Organizations
  "UAE": "United Arab Emirates — a federation of 7 emirates on the Arabian Peninsula.",
  "UN": "United Nations — international organization with 193 member states promoting peace and cooperation.",

  // News & Data Terms
  "RSS": "Really Simple Syndication — a web feed format that allows sites to publish frequently updated content.",
  "24/7": "24 hours a day, 7 days a week — continuous, non-stop operation.",
  "CPI": "Corruption Perceptions Index — Transparency International's annual ranking of perceived public sector corruption.",
  "Press Freedom": "Press Freedom Index — Reporters Without Borders' ranking of media freedom in each country (0–100).",
  "Democracy Index": "The Economist Intelligence Unit's yearly assessment of democracy in 167 countries, scored 0–10.",

  // Conflict Types
  "Interstate War": "Armed conflict between two or more sovereign nations.",
  "Asymmetric War": "Conflict where opposing forces differ significantly in military power or tactics.",
  "Civil War": "Armed conflict within a single country between government forces and organized opposition groups.",
  "Insurgency": "An organized armed rebellion against an established government, often using guerrilla tactics.",
  "Proxy War": "A conflict where opposing powers support combatants rather than fighting each other directly.",
};

interface InfoTipProps {
  term: string;
  className?: string;
  iconSize?: number;
}

export function InfoTip({ term, className, iconSize = 11 }: InfoTipProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const definition = GLOSSARY[term];
  if (!definition) return null;

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <span className={cn("relative inline-flex items-center", className)} ref={ref}>
      <button
        onClick={(e) => { e.stopPropagation(); setOpen(!open); }}
        className="inline-flex items-center justify-center w-4 h-4 rounded-full text-zinc-600 hover:text-blue-400 hover:bg-blue-500/10 transition-colors ml-0.5"
        title={`What is ${term}?`}
        aria-label={`Info about ${term}`}
      >
        <Info size={iconSize} />
      </button>
      {open && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 z-[100] animate-in fade-in slide-in-from-bottom-2 duration-150">
          <div className="bg-zinc-800 border border-zinc-700 rounded-lg shadow-xl p-3">
            <div className="flex items-center gap-1.5 mb-1.5">
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">{term}</span>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">{definition}</p>
          </div>
          <div className="flex justify-center">
            <div className="w-2 h-2 bg-zinc-800 border-r border-b border-zinc-700 rotate-45 -mt-1" />
          </div>
        </div>
      )}
    </span>
  );
}

// Inline version that wraps the term text itself
export function InfoTerm({ term, label, className }: { term: string; label?: string; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-0", className)}>
      <span>{label || term}</span>
      <InfoTip term={term} />
    </span>
  );
}
