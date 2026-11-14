import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { servicesFaqs } from "@/data/faqs";
import { solutionsData } from "@/data/solutions";
import {
  ThermometerSnowflake,
  Cpu,
  Wind,
  Droplets,
  Pipette,
  Flame,
  Gauge,
  Wrench,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  LucideIcon
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Engineering Services & Solutions | Denali Global Qatar",
  description: "Explore Denali Global's integrated engineering capabilities across HVAC systems, MEP products, ventilation, hydronics, plumbing, and QCDD-approved fire protection in Doha, Qatar.",
  alternates: {
    canonical: "https://denaliglobalqatar.com/services",
  },
};

const iconMap: { [key: string]: LucideIcon } = {
  ThermometerSnowflake,
  Cpu,
  Wind,
  Droplets,
  Pipette,
  Flame,
  Gauge,
  Wrench
};

export default function ServicesPage() {
  return (
    <div className="w-full">
      {/* Page Hero */}
      <section className="relative py-20 bg-gradient-to-br from-[#0B1B32] via-[#002858] to-[#172B45] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D8A848_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-[#D8A848]/40 text-[#D8A848] text-xs font-bold uppercase tracking-wider">
              <span>Engineering Solutions</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight !text-white">
              Integrated Product &amp; Solution Capabilities
            </h1>
            <div className="w-16 h-1 bg-[#D8A848] rounded-full" />
            <p className="text-base sm:text-lg !text-[#AFC0D2] leading-relaxed font-normal pt-1">
              From commercial HVAC systems to certified fire protection networks, Denali Global combines precision manufacturer equipment with expert project integration across Qatar.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Detail Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {solutionsData.map((item, index) => {
            const Icon = iconMap[item.iconName] || Cpu;
            const isReversed = index % 2 === 1;

            return (
              <div
                key={item.id}
                id={item.id.replace("-solutions", "").replace("-systems", "")}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Visual Image Column */}
                <div className={`lg:col-span-6 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden border border-[#DCE5EB] shadow-md group">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B2035]/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-lg bg-[#0B2035]/80 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold flex items-center gap-2">
                      <Icon className="w-4 h-4 text-[#F2A541]" />
                      <span>{item.category}</span>
                    </div>
                  </div>
                </div>

                {/* Text Content Column */}
                <div className={`lg:col-span-6 space-y-5 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="w-12 h-12 rounded-xl bg-[#087E8B]/10 text-[#087E8B] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2035]">
                    {item.title}
                  </h2>

                  <p className="text-[#64748B] text-base leading-relaxed">
                    {item.fullDescription}
                  </p>

                  {/* Core Features List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {item.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-sm text-[#102D46]">
                        <CheckCircle2 className="w-4 h-4 text-[#087E8B] flex-shrink-0" />
                        <span className="font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Associated Partner Brands */}
                  <div className="pt-4 border-t border-[#DCE5EB]">
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#64748B] block mb-2">
                      Associated Global Brands:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {item.keyBrands.map((b, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded bg-[#F5F8FA] border border-[#DCE5EB] text-xs font-semibold text-[#0B2035]"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA: Two Words Max */}
                  <div className="pt-2 flex items-center gap-4">
                    <Link
                      href={`/contact?service=${encodeURIComponent(item.title)}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-md btn-amber text-sm font-semibold tracking-wide"
                    >
                      <span>Enquire Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/products"
                      className="text-sm font-semibold text-[#087E8B] hover:text-[#0B2035] transition-colors"
                    >
                      View Products
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Exactly 3 Inner Page FAQs */}
      <FAQAccordion
        items={servicesFaqs}
        title="Services & Solutions FAQs"
        subtitle="Technical clarifications regarding equipment compatibility, QCDD approvals, and customized submittals."
        badge="Technical Scope"
      />
    </div>
  );
}

