import React from "react";
import Link from "next/link";
import {
  Building2,
  Factory,
  Hotel,
  Hospital,
  Home,
  Train,
  ArrowRight
} from "lucide-react";

export default function IndustryApplications() {
  const sectors = [
    {
      title: "Commercial Buildings",
      desc: "High-rise office towers, financial headquarters, and multi-tenant complexes requiring zoned thermal comfort, VAV control, and energy metering.",
      icon: Building2,
      equipment: ["VRF Systems", "VAV Terminals", "PICV Balancing", "BTU Metering"]
    },
    {
      title: "Industrial Facilities",
      desc: "Manufacturing plants, distribution logistics warehouses, and cold storage units demanding durable high-capacity ventilation and dehumidification.",
      icon: Factory,
      equipment: ["Industrial Fans", "Smoke Extract F400", "Dehumidifiers", "Fire Skids"]
    },
    {
      title: "Hospitality & Resorts",
      desc: "Luxury 5-star hotels and resort properties necessitating whisper-quiet fan coils, domestic solar hot water, and 24/7 chiller reliability.",
      icon: Hotel,
      equipment: ["Low-Noise FCUs", "Thermosiphonic Solar", "Plate Exchangers", "Booster Pumps"]
    },
    {
      title: "Healthcare & Cleanrooms",
      desc: "Hospitals, medical labs, and surgical suites requiring hygienic AHUs, HEPA filtration, medical copper piping, and precision close control.",
      icon: Hospital,
      equipment: ["Hygienic AHUs", "Medical Gas Copper", "Close Control (CCU)", "IAQ Testing"]
    },
    {
      title: "Residential Developments",
      desc: "Master-planned residential compounds and luxury villa towers requiring efficient split DX units, domestic plumbing risers, and booster sets.",
      icon: Home,
      equipment: ["DX Air Conditioners", "Copper Tubes", "PRV Stations", "Water Tanks"]
    },
    {
      title: "Infrastructure Projects",
      desc: "Underground metro transit stations, airports, and road tunnels requiring jet fan thrust ventilation and QCDD certified fire hydrants.",
      icon: Train,
      equipment: ["Impulse Jet Fans", "Municipal Hydrants", "Seismic Framing", "Patterson Pumps"]
    }
  ];

  return (
    <section className="py-24 bg-[#F5F8FA] border-b border-[#DCE5EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#087E8B]/10 text-[#087E8B] text-xs font-semibold uppercase tracking-wider">
            <span>Market Relevance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B2035] tracking-tight">
            Target Application Sectors
          </h2>
          <p className="text-[#64748B] text-base sm:text-lg leading-relaxed">
            Engineered systems designed to meet the rigorous acoustic, climatic, and safety standards of Qatar&apos;s leading development sectors.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sec, i) => {
            const Icon = sec.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-xl p-7 border border-[#DCE5EB] hover:border-[#087E8B] transition-all duration-300 denali-card flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-[#F5F8FA] border border-[#DCE5EB] flex items-center justify-center text-[#087E8B] group-hover:bg-[#087E8B] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B2035] group-hover:text-[#087E8B] transition-colors">
                    {sec.title}
                  </h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">
                    {sec.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F5F8FA]">
                  <span className="text-[11px] font-semibold text-[#102D46] uppercase tracking-wider block mb-2">
                    Key Systems:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {sec.equipment.map((item, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2.5 py-1 rounded bg-[#F5F8FA] border border-[#DCE5EB] text-[#1F4965] font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
