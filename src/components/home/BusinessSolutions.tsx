import React from "react";
import Link from "next/link";
import Image from "next/image";
import { servicesCategories } from "@/data/servicesData";
import {
  Wrench,
  Cpu,
  Gauge,
  RefreshCw,
  ShieldCheck,
  ArrowRight,
  LucideIcon
} from "lucide-react";

const iconMap: { [key: string]: LucideIcon } = {
  Wrench,
  Cpu,
  Gauge,
  RefreshCw,
  ShieldCheck,
};

export default function BusinessSolutions() {
  // Display the 3 primary core divisions on the homepage
  const topCategories = servicesCategories.slice(0, 3);

  return (
    <section className="py-20 sm:py-24 bg-[#F4F6F9]" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#002858]/10 text-[#002858] text-xs font-bold uppercase tracking-wider">
            <span>Engineering Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#002858] tracking-tight">
            Specialized Service Divisions
          </h2>
          <div className="w-16 h-1 bg-[#D8A848] mx-auto rounded-full" />
          <p className="text-[#172B45] text-base sm:text-lg leading-relaxed pt-1">
            Delivering comprehensive mechanical, electrical, plumbing, design simulation, and contracting capabilities across Qatar&apos;s leading commercial and industrial developments.
          </p>
        </div>

        {/* 3 Primary Division Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topCategories.map((item) => {
            const Icon = iconMap[item.iconName] || Cpu;

            return (
              <div
                key={item.id}
                className="group relative bg-white rounded-xl overflow-hidden border border-[#AFC0D2]/40 flex flex-col justify-between denali-card shadow-xs"
              >
                <div>
                  {/* Card Image with Hover Zoom */}
                  <div className="relative h-60 w-full overflow-hidden bg-slate-100 product-img-wrapper cursor-pointer">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Floating Icon Badge with Gold Accent */}
                    <div className="absolute bottom-3 left-4 w-12 h-12 rounded-lg bg-white shadow-md flex items-center justify-center text-[#002858] group-hover:bg-[#D8A848] group-hover:text-[#002858] transition-all duration-300 border border-[#AFC0D2]/30">
                      <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    {/* Capability count */}
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-[#002858]/80 backdrop-blur-sm text-white text-[11px] font-bold">
                      {item.subServicesCount} {item.subServicesCount === 1 ? "Work" : "Works"}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-3">
                    <span className="text-xs font-bold text-[#D8A848] uppercase tracking-wider block">
                      {item.tagline}
                    </span>
                    <h3 className="text-xl font-bold text-[#002858] group-hover:text-[#D8A848] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm text-[#172B45] leading-relaxed line-clamp-3">
                      {item.shortDesc}
                    </p>

                    {/* Key Sub-Services Preview Chips */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {item.subServices.slice(0, 2).map((sub, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-semibold px-2 py-0.5 rounded bg-[#F4F6F9] border border-[#AFC0D2]/50 text-[#002858]"
                        >
                          {sub.title}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                  <Link
                    href={`/services/${item.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#002858] group-hover:text-[#D8A848] transition-colors"
                  >
                    <span>Explore More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href={`/contact?service=${encodeURIComponent(item.name)}`}
                    className="px-3 py-1.5 rounded text-xs font-bold bg-[#002858]/10 text-[#002858] hover:bg-[#D8A848] hover:text-[#002858] transition-colors"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Bottom CTA Button: Our Services */}
        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md btn-primary text-sm font-bold tracking-wide"
          >
            <span>Our Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
