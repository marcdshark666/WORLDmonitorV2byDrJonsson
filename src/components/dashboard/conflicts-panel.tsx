"use client";

import { useState } from "react";
import { useDashboardStore } from "@/stores/dashboard-store";
import { getCountryByCode } from "@/data/countries";
import { SeverityBadge } from "@/components/ui/severity-badge";
import {
  Flame, Filter, ChevronDown, MapPin, Users, Calendar,
  ExternalLink, Clock, TrendingUp, AlertTriangle, Eye
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ConflictData {
  id: string;
  name: string;
  countries: string[];
  severity: number;
  type: string;
  status: "active" | "ceasefire" | "frozen" | "escalating";
  casualties: string;
  displaced: string;
  startDate: string;
  description: string;
  recentDevelopments: string[];
  parties: string[];
}

const CONFLICTS: ConflictData[] = [
  {
    id: "ua-ru",
    name: "Russia-Ukraine War",
    countries: ["UA", "RU"],
    severity: 95,
    type: "Interstate War",
    status: "active",
    casualties: "500,000+",
    displaced: "14,000,000+",
    startDate: "2022-02-24",
    description: "Full-scale Russian invasion of Ukraine, the largest conventional war in Europe since World War II.",
    recentDevelopments: [
      "Continued front-line fighting in Donetsk and Zaporizhzhia oblasts",
      "Long-range drone and missile exchanges targeting energy infrastructure",
      "Ongoing international diplomatic efforts for ceasefire"
    ],
    parties: ["Russian Federation", "Ukraine", "NATO (support)"],
  },
  {
    id: "il-ps",
    name: "Israel-Palestine Conflict",
    countries: ["IL", "PS"],
    severity: 92,
    type: "Asymmetric War",
    status: "active",
    casualties: "45,000+",
    displaced: "2,300,000+",
    startDate: "2023-10-07",
    description: "Escalated conflict following Hamas attack, resulting in large-scale military operations in Gaza.",
    recentDevelopments: [
      "Humanitarian crisis in Gaza with severe aid restrictions",
      "Regional escalation involving Lebanon and Yemen",
      "International Court of Justice proceedings"
    ],
    parties: ["Israel (IDF)", "Hamas", "Palestinian Islamic Jihad", "Hezbollah"],
  },
  {
    id: "sd-cw",
    name: "Sudan Civil War",
    countries: ["SD"],
    severity: 88,
    type: "Civil War",
    status: "active",
    casualties: "150,000+",
    displaced: "10,000,000+",
    startDate: "2023-04-15",
    description: "Armed conflict between the Sudanese Armed Forces (SAF) and the Rapid Support Forces (RSF).",
    recentDevelopments: [
      "Widespread ethnic violence in Darfur",
      "Famine declared in multiple regions",
      "Foreign interference from Wagner Group and UAE"
    ],
    parties: ["SAF", "RSF", "Allied militia groups"],
  },
  {
    id: "mm-cw",
    name: "Myanmar Civil War",
    countries: ["MM"],
    severity: 82,
    type: "Civil War",
    status: "active",
    casualties: "50,000+",
    displaced: "3,000,000+",
    startDate: "2021-02-01",
    description: "Armed resistance against military junta following the 2021 coup d'état.",
    recentDevelopments: [
      "Resistance forces gaining territory in Shan and Rakhine states",
      "Military junta losing control of border areas",
      "Humanitarian corridors blocked"
    ],
    parties: ["Tatmadaw (Military)", "NUG", "PDF", "Ethnic Armed Organizations"],
  },
  {
    id: "et-am",
    name: "Ethiopia - Amhara Conflict",
    countries: ["ET"],
    severity: 72,
    type: "Internal Conflict",
    status: "active",
    casualties: "Unknown (thousands)",
    displaced: "500,000+",
    startDate: "2023-08-01",
    description: "Armed conflict between Ethiopian federal forces and Fano militia in the Amhara region.",
    recentDevelopments: [
      "Fano militia controlling rural areas",
      "State of emergency declared in Amhara",
      "Reports of extrajudicial killings"
    ],
    parties: ["Ethiopian National Defense Force", "Fano militia"],
  },
  {
    id: "sahel",
    name: "Sahel Insurgency",
    countries: ["ML", "BF", "NE"],
    severity: 75,
    type: "Insurgency / Jihadist",
    status: "active",
    casualties: "20,000+",
    displaced: "4,000,000+",
    startDate: "2012-01-01",
    description: "Multi-national jihadist insurgency across the Sahel region of West Africa.",
    recentDevelopments: [
      "Military juntas expelled French forces",
      "Wagner/Africa Corps deployed",
      "JNIM and ISGS expanding operations"
    ],
    parties: ["JNIM (al-Qaeda)", "ISGS (ISIS)", "National militaries", "Wagner Group"],
  },
  {
    id: "so-as",
    name: "Somalia - Al-Shabaab",
    countries: ["SO"],
    severity: 70,
    type: "Insurgency",
    status: "active",
    casualties: "Unknown (tens of thousands)",
    displaced: "3,800,000+",
    startDate: "2006-01-01",
    description: "Long-running al-Qaeda affiliated insurgency in Somalia.",
    recentDevelopments: [
      "Government offensive against al-Shabaab strongholds",
      "ATMIS peacekeeping mission drawdown",
      "Continued suicide bombings in Mogadishu"
    ],
    parties: ["Somali National Army", "Al-Shabaab", "ATMIS", "US forces"],
  },
  {
    id: "cd-m23",
    name: "DRC - M23 / ADF Conflict",
    countries: ["CD"],
    severity: 78,
    type: "Civil War / Foreign Intervention",
    status: "escalating",
    casualties: "6,000,000+ displaced",
    displaced: "6,900,000+",
    startDate: "2022-03-01",
    description: "Resurgence of M23 rebel group backed by Rwanda, alongside ADF insurgency in eastern DRC.",
    recentDevelopments: [
      "M23 captures major city of Goma",
      "Rwanda openly involved",
      "MONUSCO withdrawal creating power vacuum"
    ],
    parties: ["FARDC", "M23 (Rwanda-backed)", "ADF (ISIS)", "FDLR"],
  },
  {
    id: "ye-hw",
    name: "Yemen - Houthi Conflict",
    countries: ["YE"],
    severity: 68,
    type: "Civil War / Proxy War",
    status: "ceasefire",
    casualties: "150,000+",
    displaced: "4,000,000+",
    startDate: "2014-09-21",
    description: "Multi-sided conflict with Houthis controlling northern Yemen, escalated with Red Sea attacks.",
    recentDevelopments: [
      "Houthi attacks on Red Sea shipping disrupting global trade",
      "US/UK military strikes on Houthi positions",
      "Fragile ceasefire between Houthis and Saudi coalition"
    ],
    parties: ["Houthi (Ansar Allah)", "Saudi Coalition", "Southern Transitional Council", "US/UK forces"],
  },
  {
    id: "ht-gang",
    name: "Haiti Gang Violence",
    countries: ["HT"],
    severity: 65,
    type: "State Collapse / Gang War",
    status: "active",
    casualties: "Unknown (thousands annually)",
    displaced: "700,000+",
    startDate: "2021-07-07",
    description: "Near-complete state collapse with armed gangs controlling most of Port-au-Prince.",
    recentDevelopments: [
      "Gangs controlling 80%+ of the capital",
      "Multinational Security Support mission deployed",
      "Mass displacement and food insecurity"
    ],
    parties: ["G-Pèp coalition", "Viv Ansanm", "Haitian National Police", "MSS mission (Kenya-led)"],
  },
  {
    id: "co-eln",
    name: "Colombia - ELN / FARC remnants",
    countries: ["CO"],
    severity: 45,
    type: "Insurgency / Narco-conflict",
    status: "active",
    casualties: "Ongoing",
    displaced: "300,000+ (recent)",
    startDate: "1964-05-27",
    description: "Ongoing conflict with ELN guerrillas and FARC dissident groups, intertwined with drug trafficking.",
    recentDevelopments: [
      "Peace negotiations with ELN stalled",
      "FARC dissident groups expanding coca production",
      "Venezuelan border tensions"
    ],
    parties: ["Colombian military", "ELN", "FARC dissidents (EMC)", "Drug cartels"],
  },
  {
    id: "sy-rem",
    name: "Syria - Post-Assad Instability",
    countries: ["SY"],
    severity: 55,
    type: "Post-conflict instability",
    status: "active",
    casualties: "500,000+ (total war)",
    displaced: "13,000,000+",
    startDate: "2011-03-15",
    description: "Ongoing instability following the fall of Assad regime, with multiple armed factions.",
    recentDevelopments: [
      "Transitional government formation",
      "ISIS remnant cells still active",
      "Kurdish SDF autonomous region tensions"
    ],
    parties: ["HTS (transitional govt)", "SDF/YPG", "ISIS remnants", "Turkish-backed forces"],
  },
];

export function ConflictsPanel() {
  const { setSelectedCountry, setActivePanel } = useDashboardStore();
  const [filter, setFilter] = useState<"all" | "active" | "ceasefire" | "escalating">("all");
  const [expandedConflict, setExpandedConflict] = useState<string | null>(null);

  const filteredConflicts = filter === "all"
    ? CONFLICTS
    : CONFLICTS.filter((c) => c.status === filter);

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-zinc-950/95 backdrop-blur border-b border-zinc-800 px-4 py-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Flame size={18} className="text-red-400" />
            <h2 className="text-sm font-bold text-white">Active Conflicts & Wars</h2>
            <span className="text-xs text-zinc-500 font-mono">{filteredConflicts.length}</span>
          </div>
        </div>
        <div className="flex gap-1.5">
          {(["all", "active", "escalating", "ceasefire"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "px-3 py-1 rounded-full text-xs font-medium transition-colors",
                filter === f
                  ? f === "escalating" ? "bg-red-500/20 text-red-400"
                  : f === "active" ? "bg-orange-500/20 text-orange-400"
                  : f === "ceasefire" ? "bg-yellow-500/20 text-yellow-400"
                  : "bg-blue-500/20 text-blue-400"
                  : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800"
              )}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Conflicts list */}
      <div className="flex-1 overflow-y-auto divide-y divide-zinc-800/50">
        {filteredConflicts.sort((a, b) => b.severity - a.severity).map((conflict) => {
          const isExpanded = expandedConflict === conflict.id;
          const flags = conflict.countries.map((c) => getCountryByCode(c)?.flagEmoji || "").join(" ");

          return (
            <div key={conflict.id} className="hover:bg-zinc-900/30 transition-colors">
              <button
                onClick={() => setExpandedConflict(isExpanded ? null : conflict.id)}
                className="w-full text-left px-4 py-3"
              >
                <div className="flex items-start gap-3">
                  <SeverityBadge severity={conflict.severity} size="sm" showLabel={false} />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-zinc-200">{conflict.name}</span>
                      <span className={cn(
                        "text-[9px] px-1.5 py-0.5 rounded-full font-mono",
                        conflict.status === "escalating" ? "bg-red-500/20 text-red-400" :
                        conflict.status === "active" ? "bg-orange-500/20 text-orange-400" :
                        "bg-yellow-500/20 text-yellow-400"
                      )}>
                        {conflict.status.toUpperCase()}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mt-1 text-[10px] text-zinc-500">
                      <span>{flags} {conflict.countries.join(", ")}</span>
                      <span>•</span>
                      <span>{conflict.type}</span>
                      <span>•</span>
                      <span>Since {conflict.startDate.slice(0, 4)}</span>
                    </div>
                  </div>
                  <ChevronDown size={14} className={cn("text-zinc-600 transition-transform", isExpanded && "rotate-180")} />
                </div>
              </button>

              {isExpanded && (
                <div className="px-4 pb-4 space-y-3">
                  <p className="text-xs text-zinc-400 leading-relaxed">{conflict.description}</p>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-2">
                      <div className="text-[10px] text-zinc-500 flex items-center gap-1"><Users size={10} /> Casualties</div>
                      <div className="text-sm font-mono text-red-400">{conflict.casualties}</div>
                    </div>
                    <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-2">
                      <div className="text-[10px] text-zinc-500 flex items-center gap-1"><MapPin size={10} /> Displaced</div>
                      <div className="text-sm font-mono text-orange-400">{conflict.displaced}</div>
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1">Recent Developments</div>
                    <ul className="space-y-1">
                      {conflict.recentDevelopments.map((dev, i) => (
                        <li key={i} className="text-xs text-zinc-400 flex items-start gap-1.5">
                          <span className="text-zinc-600 mt-0.5">▸</span>
                          {dev}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1">Parties Involved</div>
                    <div className="flex flex-wrap gap-1">
                      {conflict.parties.map((party) => (
                        <span key={party} className="px-2 py-0.5 bg-zinc-800 rounded text-[10px] text-zinc-400">
                          {party}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    {conflict.countries.map((code) => (
                      <button
                        key={code}
                        onClick={() => {
                          setSelectedCountry(code);
                          setActivePanel("overview");
                        }}
                        className="flex items-center gap-1 px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded text-xs text-blue-400 hover:bg-blue-500/20 transition-colors"
                      >
                        <Eye size={10} /> View {code} dossier
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
