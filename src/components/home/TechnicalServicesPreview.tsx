import React from "react";
import Link from "next/link";
import Image from "next/image";
import { companyData } from "@/data/company";
import { ArrowRight, CheckCircle2, ShieldCheck, RefreshCw, Activity } from "lucide-react";

export default function TechnicalServicesPreview() {
  // Only 2 key technical services featured on homepage as requested
  const technicalServices = [
    {
      id: "amc",
      title: "Annual Maintenance Contract (AMC)",
      badge: "Comprehensive Preventive Care",
      desc: "Comprehensive preventive and corrective maintenance for split ACs, ducted units, package systems, ventilation fans, and central chiller circuits across commercial facilities.",
      image: "/services/service-amc.jpg",
      icon: Activity,
      features: [
        "Indoor & outdoor coil pressure cleaning",
        "Refrigerant leak detection & pressure checks",
        "Compressor & fan motor electrical diagnostics",
        "Drainage clearance & microbiological treatment"
      ],
      link: "/technical-services#amc"
    },
    {
      id: "tab",
      title: "Testing, Adjusting & Balancing (TAB)",
      badge: "Independent Certified Commissioning",
      desc: "Independent certified air and hydronic water balancing, SMACNA duct leakage verification, indoor air quality (IAQ) testing, and acoustic vibration calibrations for new and existing projects.",
      image: "/services/service-tab.jpg",
      icon: RefreshCw,
      features: [
        "Hydronic water & air distribution balancing",
        "SMACNA certified duct leakage rate testing",
        "Comprehensive Indoor Air Quality (IAQ) audits",
        "Vibration analysis & acoustic baseline calibration"
      ],
      link: "/technical-services#tab"
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#0B1B32] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#D8A848_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 scroll-reveal">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#002858] border border-[#D8A848]/30 text-[#D8A848] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#D8A848]" />
              <span>{companyData.serviceDivision}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight !text-white">
              Performance Beyond Installation
            </h2>
            <div className="w-16 h-1 bg-[#D8A848] rounded-full" />
            <p className="text-[#AFC0D2] text-base leading-relaxed pt-1">
              Specialized technical maintenance and certified engineering commissioning supporting building longevity, peak energy efficiency, and tenant comfort across Qatar.
            </p>
          </div>

          <Link
            href="/technical-services"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md btn-gold text-sm font-bold tracking-wide self-start md:self-auto flex-shrink-0"
          >
            <span>Our Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 2 Featured Technical Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-8 sm:gap-10">
          {technicalServices.map((srv, index) => {
            const Icon = srv.icon;

            return (
              <div
                key={srv.id}
                className="bg-[#172B45] rounded-xl overflow-hidden border border-[#AFC0D2]/25 hover:border-[#D8A848] transition-all duration-300 flex flex-col justify-between group denali-card shadow-lg scroll-reveal"
                data-delay={String(index + 1)}
              >
                <div>
                  {/* Card Image - Clear visibility without heavy wash */}
                  <div className="relative h-64 w-full overflow-hidden bg-black product-img-wrapper cursor-pointer">
                    <Image
                      src={srv.image}
                      alt={srv.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    <div className="absolute top-3 left-3 px-3 py-1 rounded bg-black/80 backdrop-blur-md border border-[#D8A848]/50 text-xs font-bold text-[#D8A848] shadow-md">
                      {srv.badge}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#002858] flex items-center justify-center text-[#D8A848] flex-shrink-0 border border-[#D8A848]/40 shadow-xs">
                        <Icon className="w-5 h-5 text-[#D8A848]" />
                      </div>
                      <h3 className="text-xl font-bold !text-white group-hover:!text-[#D8A848] transition-colors">
                        {srv.title}
                      </h3>
                    </div>

                    <p className="text-sm text-[#AFC0D2] leading-relaxed">
                      {srv.desc}
                    </p>

                    <div className="pt-3 space-y-2 border-t border-[#AFC0D2]/15">
                      {srv.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-white">
                          <CheckCircle2 className="w-4 h-4 text-[#D8A848] flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="p-6 sm:p-7 pt-0 mt-auto">
                  <Link
                    href={srv.link}
                    className="inline-flex items-center text-xs font-bold text-[#D8A848] hover:text-white transition-colors gap-1.5 pt-4 border-t border-[#AFC0D2]/15 w-full"
                  >
                    <span>Explore Scope & Standards</span>
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
