import React from "react";
import Link from "next/link";
import Image from "next/image";
import { companyData } from "@/data/company";
import { ArrowRight, CheckCircle2, ShieldCheck, Wrench, RefreshCw, SlidersHorizontal, Activity } from "lucide-react";

export default function TechnicalServicesPreview() {
  const technicalServices = [
    {
      id: "amc",
      title: "Annual Maintenance Contract",
      badge: "Comprehensive AMC",
      desc: "Preventive and breakdown maintenance for split ACs, ducted units, package systems, ventilation, and chiller circuits.",
      image: "/services/service-amc.jpg",
      icon: Activity,
      features: [
        "Indoor & outdoor coil cleaning",
        "Refrigerant pressure checks",
        "Compressor & fan motor testing",
        "Control wiring & drainage audits"
      ],
      link: "/technical-services#amc"
    },
    {
      id: "replacement",
      title: "Equipment Replacement",
      badge: "Upgrade & Overhaul",
      desc: "Precision engineering assessments and systematic replacement of aging chillers, AHUs, compressors, and condenser coils.",
      image: "/services/service-replacement.jpg",
      icon: RefreshCw,
      features: [
        "Condition & efficiency assessment",
        "Compressor & coil replacement",
        "Rigging & crane lift execution",
        "Seamless restart & validation"
      ],
      link: "/technical-services#replacement"
    },
    {
      id: "retrofit",
      title: "HVAC Retrofit Solutions",
      badge: "Energy Optimization",
      desc: "Modernizing existing mechanical infrastructure with variable frequency drives, EC plug fans, and energy management.",
      image: "/services/service-retrofit.jpg",
      icon: Wrench,
      features: [
        "Lifecycle energy assessments",
        "R-410A compatibility checks",
        "Compressor protection upgrades",
        "Operating cost reduction"
      ],
      link: "/technical-services#retrofit"
    },
    {
      id: "tab",
      title: "Testing, Adjusting & Balancing",
      badge: "TAB Commissioning",
      desc: "Independent certified air and water balancing, duct leakage testing, IAQ analysis, and acoustic vibration diagnostics.",
      image: "/services/service-tab.jpg",
      icon: SlidersHorizontal,
      features: [
        "Air & hydronic water balancing",
        "Duct leakage testing (SMACNA)",
        "Indoor air quality (IAQ) analysis",
        "Sound & vibration calibration"
      ],
      link: "/technical-services#tab"
    }
  ];

  return (
    <section className="py-24 bg-[#0B2035] text-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#36B8B0_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#087E8B]/30 border border-[#36B8B0]/30 text-[#36B8B0] text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#F2A541]" />
              <span>{companyData.serviceDivision}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Performance Beyond Installation
            </h2>
            <p className="text-[#A9B7C3] text-base leading-relaxed">
              Specialized technical maintenance and independent engineering commissioning supporting building longevity, energy efficiency, and tenant comfort across Qatar.
            </p>
          </div>

          <Link
            href="/technical-services"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md btn-amber text-sm font-semibold tracking-wide self-start md:self-auto flex-shrink-0"
          >
            <span>View Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Technical Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {technicalServices.map((srv) => {
            const Icon = srv.icon;

            return (
              <div
                key={srv.id}
                className="bg-[#102D46] rounded-xl overflow-hidden border border-[#1F4965] hover:border-[#36B8B0] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-[#0B2035]">
                    <Image
                      src={srv.image}
                      alt={srv.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#102D46] via-[#102D46]/40 to-transparent" />

                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#0B2035]/80 backdrop-blur-sm border border-white/10 text-[11px] font-semibold text-[#F2A541]">
                      {srv.badge}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 sm:p-6 space-y-3">
                    <div className="flex items-center gap-2 text-[#36B8B0]">
                      <Icon className="w-5 h-5 text-[#F2A541]" />
                      <h3 className="text-lg font-bold text-white group-hover:text-[#36B8B0] transition-colors">
                        {srv.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-[#A9B7C3] leading-relaxed">
                      {srv.desc}
                    </p>

                    <div className="pt-2 space-y-1.5 border-t border-[#1F4965]/80">
                      {srv.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[#E9EFF3]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#36B8B0] flex-shrink-0" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="p-5 sm:p-6 pt-0 mt-auto">
                  <Link
                    href={srv.link}
                    className="inline-flex items-center text-xs font-semibold text-[#F2A541] hover:text-[#FFD18A] transition-colors gap-1 pt-3 border-t border-[#1F4965] w-full"
                  >
                    <span>Explore Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
