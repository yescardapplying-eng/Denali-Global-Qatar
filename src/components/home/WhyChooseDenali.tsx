import React from "react";
import Link from "next/link";
import {
  Layers,
  Cpu,
  Wrench,
  ArrowRight,
  ShieldCheck
} from "lucide-react";

export default function WhyChooseDenali() {
  // Exactly 3 commercial advantages featured on homepage
  const advantages = [
    {
      icon: Layers,
      title: "Integrated Product Portfolio",
      desc: "Single-source procurement across HVAC equipment, mechanical ventilation, hydronics, plumbing systems, and fire protection, eliminating multi-vendor coordination overhead."
    },
    {
      icon: Cpu,
      title: "Engineering-Focused Solutions",
      desc: "Our in-house technical team conducts submittal preparation, airflow analysis, equipment sizing, and acoustic calculations to ensure complete compliance with consultant specifications."
    },
    {
      icon: Wrench,
      title: "Full-Lifecycle Technical Services",
      desc: "Beyond procurement, Denali Technical Services offers turnkey AMC maintenance contracts, equipment overhauls, energy retrofits, and certified TAB commissioning across Qatar."
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-white border-b border-[#AFC0D2]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#002858]/10 text-[#002858] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#D8A848]" />
            <span>Commercial Advantages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#002858] tracking-tight">
            Why Partner with Denali Global
          </h2>
          <div className="w-16 h-1 bg-[#D8A848] mx-auto rounded-full" />
          <p className="text-[#172B45] text-base sm:text-lg leading-relaxed pt-1">
            Delivering technical rigor, verified global engineering equipment, and committed local execution for Qatar&apos;s demanding commercial projects.
          </p>
        </div>

        {/* 3 Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {advantages.map((adv, index) => {
            const Icon = adv.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-xl bg-[#F4F6F9] border border-[#AFC0D2]/40 hover:border-[#D8A848] transition-all duration-300 denali-card flex flex-col justify-between group shadow-xs"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-white border border-[#AFC0D2]/40 flex items-center justify-center text-[#002858] group-hover:bg-[#002858] group-hover:text-[#D8A848] transition-all duration-300 shadow-xs">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-[#002858] group-hover:text-[#D8A848] transition-colors">
                    {adv.title}
                  </h3>
                  <p className="text-sm text-[#172B45] leading-relaxed">
                    {adv.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button to learn more about company */}
        <div className="text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md btn-navy text-sm font-bold tracking-wide shadow-md"
          >
            <span>Learn More About Denali</span>
            <ArrowRight className="w-4 h-4 text-[#D8A848]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
