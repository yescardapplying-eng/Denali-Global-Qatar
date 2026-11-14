import React from "react";
import {
  Building2,
  Factory
} from "lucide-react";

export default function IndustryApplications() {
  // Exactly 2 core sectors featured on homepage as requested
  const sectors = [
    {
      title: "Commercial & Office Towers",
      desc: "High-rise business towers, financial headquarters, and multi-tenant complexes requiring zoned thermal comfort, VAV terminal modulation, and precision energy metering.",
      icon: Building2,
      equipment: ["VRF Heat Recovery", "VAV Terminals", "PICV Balancing Valves", "BTU Energy Meters"]
    },
    {
      title: "Industrial & Logistics Facilities",
      desc: "Manufacturing plants, distribution logistics hubs, and cold storage units demanding durable high-capacity ventilation, heavy-duty ductwork, and QCDD-certified fire skids.",
      icon: Factory,
      equipment: ["Industrial Axial Fans", "Smoke Extract F400", "Dehumidification Units", "NFPA Fire Skids"]
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#F4F6F9] border-b border-[#AFC0D2]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#002858]/10 text-[#002858] text-xs font-bold uppercase tracking-wider">
            <span>Market Applications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#002858] tracking-tight">
            Target Application Sectors
          </h2>
          <div className="w-16 h-1 bg-[#D8A848] mx-auto rounded-full" />
          <p className="text-[#172B45] text-base sm:text-lg leading-relaxed pt-1">
            Engineered systems designed to meet the rigorous acoustic, climatic, and safety standards of Qatar&apos;s leading development sectors.
          </p>
        </div>

        {/* 2 Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-8 sm:gap-10">
          {sectors.map((sec, i) => {
            const Icon = sec.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-xl p-8 border border-[#AFC0D2]/40 hover:border-[#D8A848] transition-all duration-300 denali-card flex flex-col justify-between group shadow-sm"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-[#F4F6F9] border border-[#AFC0D2]/30 flex items-center justify-center text-[#002858] group-hover:bg-[#002858] group-hover:text-[#D8A848] transition-all duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-[#002858] group-hover:text-[#D8A848] transition-colors">
                    {sec.title}
                  </h3>
                  <p className="text-sm text-[#172B45] leading-relaxed">
                    {sec.desc}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-[#AFC0D2]/20">
                  <span className="text-[11px] font-bold text-[#002858] uppercase tracking-wider block mb-2.5">
                    Engineered Systems:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {sec.equipment.map((item, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2.5 py-1 rounded bg-[#F4F6F9] border border-[#AFC0D2]/40 text-[#002858] font-medium"
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
