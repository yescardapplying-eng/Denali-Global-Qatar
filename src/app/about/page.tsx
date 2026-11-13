import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CtaBanner from "@/components/home/CtaBanner";
import { aboutFaqs } from "@/data/faqs";
import { companyData } from "@/data/company";
import {
  ShieldCheck,
  Building2,
  CheckCircle2,
  Award,
  ArrowRight,
  Globe2,
  Wrench,
  Layers,
  Compass
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Denali Global Trading and Contracting Qatar",
  description: "Learn about Denali Global Trading and Contracting (CR No. 255619), our engineering philosophy, international manufacturer associations, and technical services division in Doha, Qatar.",
  alternates: {
    canonical: "https://denaliglobalqatar.com/about",
  },
};

export default function AboutPage() {
  const coreValues = [
    {
      title: "Technical Integrity",
      desc: "We prioritize engineering accuracy, proper equipment sizing, and verified factory certifications above commercial expediency."
    },
    {
      title: "Direct Sourcing Discipline",
      desc: "Working with established global manufacturers across Europe, the USA, and Asia ensures authentic equipment with genuine warranties."
    },
    {
      title: "Turnkey Accountability",
      desc: "Through Denali Technical Services, we support building performance beyond handover with comprehensive preventive AMC maintenance."
    },
    {
      title: "Regional Regulatory Compliance",
      desc: "All life safety, electrical, and piping systems adhere to Qatar Civil Defense (QCDD) and Kahramaa engineering standards."
    }
  ];

  return (
    <div className="w-full">
      {/* Page Hero */}
      <section className="relative py-24 bg-[#0B2035] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#36B8B0_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#087E8B]/30 border border-[#36B8B0]/40 text-[#36B8B0] text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#F2A541]" />
              <span>Corporate Profile</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Engineering Expertise. Global Perspective.
            </h1>
            <p className="text-lg sm:text-xl text-[#A9B7C3] leading-relaxed font-normal">
              Denali Global Trading and Contracting delivers high-performance HVAC, MEP, and fire protection equipment to commercial contractors and developers in Qatar.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Overview Section */}
      <section className="py-20 bg-white border-b border-[#DCE5EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Text Profile */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#087E8B]/10 text-[#087E8B] text-xs font-semibold uppercase tracking-wider">
                <span>Who We Are</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B2035]">
                Bridging Global Manufacturers with Regional Engineering
              </h2>

              <p className="text-[#64748B] text-base leading-relaxed">
                Registered under Commercial Registration <strong>CR No. {companyData.crNumber}</strong> in Doha, Qatar, <strong>Denali Global Trading and Contracting</strong> is dedicated to supplying certified mechanical, electrical, plumbing (MEP), and life safety infrastructure.
              </p>

              <p className="text-[#64748B] text-base leading-relaxed">
                Operating within Qatar&apos;s demanding construction environment, we combine international product distribution with local engineering expertise. We serve as a dependable partner for MEP contractors, engineering consultants, project developers, and facility managers, supporting projects from preliminary equipment schedules to final site commissioning.
              </p>

              <div className="p-4 rounded-xl bg-[#F5F8FA] border border-[#DCE5EB] flex items-center gap-4 text-xs text-[#102D46]">
                <Building2 className="w-8 h-8 text-[#087E8B] flex-shrink-0" />
                <div>
                  <strong className="block text-sm text-[#0B2035]">Commercial Registration in Doha, Qatar</strong>
                  <span>CR No. {companyData.crNumber} • Office No. 01/05, Building 20, Umm Ghuwailina Area</span>
                </div>
              </div>
            </div>

            {/* Emblem Card */}
            <div className="lg:col-span-5">
              <div className="p-8 sm:p-10 rounded-2xl bg-[#0B2035] text-white border border-[#1F4965] shadow-xl space-y-6 relative overflow-hidden">
                <div className="relative h-14 sm:h-16 w-64 sm:w-72" style={{ maxWidth: '300px', maxHeight: '68px' }}>
                  <Image
                    src="/logo/denali-logo-horizontal-white.png"
                    alt="Denali Global Trading and Contracting"
                    fill
                    className="object-contain object-left"
                  />
                </div>

                <div className="space-y-3 border-t border-[#1F4965] pt-5 text-sm text-[#A9B7C3]">
                  <p className="leading-relaxed">
                    &ldquo;Our commitment is to engineer sustainable, energy-efficient building infrastructure through dependable global partnerships and technical rigor.&rdquo;
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap gap-2 text-xs">
                  <span className="px-3 py-1 rounded bg-[#102D46] border border-[#1F4965] text-[#36B8B0] font-semibold">
                    HVAC Systems
                  </span>
                  <span className="px-3 py-1 rounded bg-[#102D46] border border-[#1F4965] text-[#36B8B0] font-semibold">
                    Hydronic Balancing
                  </span>
                  <span className="px-3 py-1 rounded bg-[#102D46] border border-[#1F4965] text-[#36B8B0] font-semibold">
                    Fire Protection
                  </span>
                  <span className="px-3 py-1 rounded bg-[#102D46] border border-[#1F4965] text-[#F2A541] font-semibold">
                    TAB Services
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Approach & Values */}
      <section className="py-20 bg-[#F5F8FA] border-b border-[#DCE5EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#087E8B]/10 text-[#087E8B] text-xs font-semibold uppercase tracking-wider">
              <span>Operational Philosophy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B2035] tracking-tight">
              Our Engineering Approach
            </h2>
            <p className="text-[#64748B] text-base leading-relaxed">
              Grounding every commercial transaction in verified engineering standards, prompt logistics, and comprehensive field support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-[#DCE5EB] hover:border-[#087E8B] transition-all duration-300 denali-card space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-[#087E8B]/10 text-[#087E8B] flex items-center justify-center font-bold text-sm">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-[#0B2035]">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exactly 3 Inner Page FAQs */}
      <FAQAccordion
        items={aboutFaqs}
        title="About Denali Global FAQs"
        subtitle="Common questions regarding our business registration, regional operations, and full-service approach."
        badge="Company Insights"
      />

      {/* Final CTA */}
      <CtaBanner />
    </div>
  );
}

