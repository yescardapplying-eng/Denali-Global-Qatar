import React from "react";
import Link from "next/link";
import {
  Layers,
  Cpu,
  Globe2,
  Wrench,
  Headset,
  Briefcase,
  ArrowRight,
  ShieldCheck
} from "lucide-react";

export default function WhyChooseDenali() {
  const advantages = [
    {
      icon: Layers,
      title: "Integrated Product Portfolio",
      desc: "Single-source procurement across HVAC, ventilation, hydronics, plumbing, and fire protection equipment, streamlining contractor schedules."
    },
    {
      icon: Cpu,
      title: "Engineering-Focused Solutions",
      desc: "Our team conducts technical submittal preparation, airflow analysis, and valve sizing to ensure compliance with project consultant specifications."
    },
    {
      icon: Globe2,
      title: "International Manufacturer Network",
      desc: "Direct factory associations with over 35 established brands across Europe, the USA, and Asia, guaranteeing verified authentic products."
    },
    {
      icon: Wrench,
      title: "Technical Service Capabilities",
      desc: "Beyond product supply, Denali Technical Services offers turnkey AMC maintenance, equipment replacement, retrofits, and TAB balancing."
    },
    {
      icon: Headset,
      title: "Customer-Focused Support",
      desc: "Dedicated account managers and responsive commercial estimators delivering transparent, itemized proposals within tight bidding deadlines."
    },
    {
      icon: Briefcase,
      title: "Commercial Project Understanding",
      desc: "In-depth knowledge of Qatar construction milestones, Kahramaa regulations, and Civil Defense inspection standards."
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-[#DCE5EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#087E8B]/10 text-[#087E8B] text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#F2A541]" />
            <span>Commercial Advantages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B2035] tracking-tight">
            Why Partner with Denali Global
          </h2>
          <p className="text-[#64748B] text-base sm:text-lg leading-relaxed">
            Delivering technical rigor, verified global equipment, and committed local execution for Qatar&apos;s demanding commercial projects.
          </p>
        </div>

        {/* 6 Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((adv, index) => {
            const Icon = adv.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-xl bg-[#F5F8FA] border border-[#DCE5EB] hover:border-[#087E8B] transition-all duration-300 denali-card flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-white border border-[#DCE5EB] flex items-center justify-center text-[#087E8B] group-hover:bg-[#087E8B] group-hover:text-white transition-colors duration-300 shadow-xs">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B2035] group-hover:text-[#087E8B] transition-colors">
                    {adv.title}
                  </h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">
                    {adv.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

