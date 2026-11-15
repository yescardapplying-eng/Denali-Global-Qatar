import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { servicesFaqs } from "@/data/faqs";
import { servicesCategories } from "@/data/servicesData";
import CategoryDropdownSelector from "@/components/services/CategoryDropdownSelector";
import {
  Wrench,
  Cpu,
  Gauge,
  RefreshCw,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers,
  LucideIcon
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Engineering Services & Contracting Capabilities | Denali Global Qatar",
  description: "Explore Denali Global's 5 core engineering divisions: Installation & Fitout, HVAC & MEP Contracting, Design Services, Retrofit Fabrication, and 24/7 Service & Maintenance in Doha, Qatar.",
  alternates: {
    canonical: "https://denaliglobalqatar.com/services",
  },
};

const iconMap: { [key: string]: LucideIcon } = {
  Wrench,
  Cpu,
  Gauge,
  RefreshCw,
  ShieldCheck,
};

export default function ServicesPage() {
  return (
    <div className="w-full bg-[#F4F6F9]">
      {/* Page Hero */}
      <section className="relative py-20 bg-gradient-to-br from-[#0B1B32] via-[#002858] to-[#172B45] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D8A848_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-[#D8A848]/40 text-[#D8A848] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>5 Specialized Engineering Divisions</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight !text-white leading-tight">
              Engineering Services &amp; Contracting
            </h1>
            <div className="w-16 h-1 bg-[#D8A848] rounded-full" />
            <p className="text-base sm:text-lg !text-[#AFC0D2] leading-relaxed font-normal pt-1">
              Delivering turnkey MEP contracting, precision equipment installation, advanced engineering calculations, retrofit fabrication, and 24/7 preventive maintenance across Qatar.
            </p>
          </div>
        </div>
      </section>

      {/* Main Categories Catalog Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Quick Category Selector */}
          <CategoryDropdownSelector />

          {/* Section Introduction */}
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-[#D8A848] uppercase tracking-wider">
              Complete Capabilities Overview
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#002858]">
              Specialized Service Divisions
            </h2>
            <p className="text-xs sm:text-sm text-[#172B45]/80">
              Select any division below to view its full catalog of sub-services, engineering scopes, standards, and technical specifications.
            </p>
          </div>

          {/* 5 Main Category Cards */}
          <div className="space-y-12">
            {servicesCategories.map((category, index) => {
              const Icon = iconMap[category.iconName] || Cpu;
              const isReversed = index % 2 === 1;

              return (
                <div
                  key={category.id}
                  id={category.slug}
                  className={`bg-white rounded-2xl border border-[#AFC0D2]/40 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 denali-card grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Visual Image Column */}
                  <div
                    className={`lg:col-span-5 relative min-h-[280px] sm:min-h-[340px] lg:min-h-full ${
                      isReversed ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B32]/80 via-transparent to-transparent lg:hidden" />

                    {/* Floating Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-[#002858]/85 backdrop-blur-md border border-[#D8A848]/40 text-white text-xs font-bold flex items-center gap-2 shadow-md">
                      <Icon className="w-4 h-4 text-[#D8A848]" />
                      <span>{category.subServicesCount} {category.subServicesCount === 1 ? "Capability" : "Capabilities"}</span>
                    </div>
                  </div>

                  {/* Text Content Column */}
                  <div
                    className={`lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6 ${
                      isReversed ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-bold text-[#D8A848] uppercase tracking-wider bg-[#D8A848]/15 px-2.5 py-0.5 rounded-full">
                          Category 0{index + 1}
                        </span>
                        <span className="text-xs font-semibold text-slate-400">
                          {category.tagline}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-[#002858] leading-tight">
                        {category.name}
                      </h3>

                      <p className="text-sm sm:text-base text-[#172B45] leading-relaxed">
                        {category.shortDesc}
                      </p>

                      {/* Sub-Services Preview Chips */}
                      <div className="space-y-2 pt-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#002858] block">
                          Included Services &amp; Works:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {category.subServices.slice(0, 6).map((sub) => (
                            <span
                              key={sub.id}
                              className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#F4F6F9] border border-[#AFC0D2]/40 text-[#002858]"
                            >
                              {sub.title}
                            </span>
                          ))}
                          {category.subServices.length > 6 && (
                            <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-[#D8A848]/15 text-[#002858]">
                              +{category.subServices.length - 6} More
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Key Highlights Checklist */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                        {category.keyBenefits.slice(0, 2).map((benefit, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-[#002858]">
                            <CheckCircle2 className="w-4 h-4 text-[#D8A848] flex-shrink-0 mt-0.5" />
                            <span className="leading-snug">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions: Max 2 Words for CTAs */}
                    <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-3">
                      <Link
                        href={`/services/${category.slug}`}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-md btn-gold text-xs font-bold tracking-wide uppercase shadow-xs"
                      >
                        <span>Explore More</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <Link
                        href={`/contact?service=${encodeURIComponent(category.name)}`}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[#002858]/5 hover:bg-[#002858] text-[#002858] hover:text-white text-xs font-bold tracking-wide uppercase transition-colors"
                      >
                        <span>Request Quote</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engineering Compliance Standards Section */}
      <section className="py-14 bg-white border-y border-[#AFC0D2]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 rounded-xl bg-[#F4F6F9] border border-[#AFC0D2]/30 space-y-2">
              <ShieldCheck className="w-8 h-8 text-[#002858] mx-auto" />
              <h4 className="text-sm font-bold text-[#002858]">CR No. 255619</h4>
              <p className="text-xs text-[#172B45]/70">Fully registered commercial entity in Doha, Qatar.</p>
            </div>
            <div className="p-6 rounded-xl bg-[#F4F6F9] border border-[#AFC0D2]/30 space-y-2">
              <Cpu className="w-8 h-8 text-[#002858] mx-auto" />
              <h4 className="text-sm font-bold text-[#002858]">Kahramaa &amp; QCDD</h4>
              <p className="text-xs text-[#172B45]/70">Full compliance with Qatar authority specifications.</p>
            </div>
            <div className="p-6 rounded-xl bg-[#F4F6F9] border border-[#AFC0D2]/30 space-y-2">
              <Gauge className="w-8 h-8 text-[#002858] mx-auto" />
              <h4 className="text-sm font-bold text-[#002858]">ASHRAE &amp; SMACNA</h4>
              <p className="text-xs text-[#172B45]/70">International technical rigor and duct standards.</p>
            </div>
            <div className="p-6 rounded-xl bg-[#F4F6F9] border border-[#AFC0D2]/30 space-y-2">
              <Wrench className="w-8 h-8 text-[#002858] mx-auto" />
              <h4 className="text-sm font-bold text-[#002858]">Denali Technical Services</h4>
              <p className="text-xs text-[#172B45]/70">Dedicated in-house maintenance and execution teams.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services FAQ Section */}
      <FAQAccordion
        items={servicesFaqs}
        title="Services &amp; Contracting FAQs"
        subtitle="Common technical clarifications regarding authority approvals, execution scope, and commercial submittals in Qatar."
        badge="Technical Scope"
      />
    </div>
  );
}
