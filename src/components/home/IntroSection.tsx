import React from "react";
import Link from "next/link";
import { companyData } from "@/data/company";
import { ArrowRight, ShieldCheck, CheckCircle2, Award, Building2, Wrench } from "lucide-react";

export default function IntroSection() {
  const pillars = [
    {
      icon: Building2,
      title: "Engineered Product Portfolio",
      desc: "Delivering international brand products across HVAC, ventilation, hydronics, plumbing, and fire safety."
    },
    {
      icon: Wrench,
      title: "Technical Services Division",
      desc: "Dedicated engineering support providing AMC maintenance, equipment replacement, retrofits, and TAB commissioning."
    },
    {
      icon: ShieldCheck,
      title: "Commercial & Civil Standards",
      desc: "Fully compliant with Qatar engineering requirements, Kahramaa regulations, and Civil Defense specifications."
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-[#DCE5EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#087E8B]/10 text-[#087E8B] text-xs font-semibold uppercase tracking-wider">
              <span>Corporate Overview</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B2035] leading-tight">
              Engineering Expertise. <br />
              <span className="text-[#087E8B]">Global Perspective.</span>
            </h2>

            <p className="text-[#64748B] text-base sm:text-lg leading-relaxed">
              <strong>Denali Global Trading and Contracting</strong> is a specialized engineering, trading, and contracting organization based in Doha, Qatar. We support MEP contractors, consulting engineers, and commercial property developers with dependable mechanical, electrical, and plumbing solutions.
            </p>

            <p className="text-[#64748B] text-base leading-relaxed">
              Our business operations bridge world-class global equipment manufacturers with regional project delivery. Working across HVAC systems, mechanical ventilation, hydronic balancing, water piping, and fire protection, we provide certified product sourcing coupled with in-depth technical services through <strong>{companyData.serviceDivision}</strong>.
            </p>

            {/* CTA Button: 2 Words */}
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md btn-amber text-sm font-semibold tracking-wide"
              >
                <span>About Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Key Business Pillars */}
          <div className="lg:col-span-5 space-y-4">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-[#F5F8FA] border border-[#DCE5EB] hover:border-[#087E8B] transition-all duration-300 denali-card"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-white border border-[#DCE5EB] shadow-xs flex items-center justify-center flex-shrink-0 text-[#087E8B]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-[#0B2035]">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#64748B] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

