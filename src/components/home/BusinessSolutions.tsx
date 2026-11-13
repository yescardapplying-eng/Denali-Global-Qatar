import React from "react";
import Link from "next/link";
import Image from "next/image";
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
  LucideIcon
} from "lucide-react";

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

export default function BusinessSolutions() {
  return (
    <section className="py-24 bg-[#F5F8FA]" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#087E8B]/10 text-[#087E8B] text-xs font-semibold uppercase tracking-wider">
            <span>Integrated Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B2035] tracking-tight">
            Specialized Business Solutions
          </h2>
          <p className="text-[#64748B] text-base sm:text-lg leading-relaxed">
            Delivering comprehensive mechanical, electrical, plumbing, and life safety engineering capabilities across commercial, industrial, and infrastructure developments.
          </p>
        </div>

        {/* 8 Business Solution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {solutionsData.map((item) => {
            const Icon = iconMap[item.iconName] || Cpu;

            return (
              <div
                key={item.id}
                className="group relative bg-white rounded-xl overflow-hidden border border-[#DCE5EB] flex flex-col justify-between denali-card"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-[#102D46]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B2035]/80 via-transparent to-transparent" />

                    {/* Floating Icon Badge */}
                    <div className="absolute bottom-3 left-4 w-10 h-10 rounded-lg bg-white/95 backdrop-blur-sm shadow-md flex items-center justify-center text-[#087E8B] group-hover:bg-[#087E8B] group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 sm:p-6 space-y-3">
                    <span className="text-xs font-semibold text-[#36B8B0] uppercase tracking-wider block">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold text-[#0B2035] group-hover:text-[#087E8B] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#64748B] leading-relaxed line-clamp-3">
                      {item.shortDescription}
                    </p>

                    {/* Key Brands Tags */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {item.keyBrands.slice(0, 3).map((brand, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-medium px-2 py-0.5 rounded bg-[#F5F8FA] border border-[#DCE5EB] text-[#1F4965]"
                        >
                          {brand}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="p-5 sm:p-6 pt-0 mt-auto">
                  <Link
                    href={item.link}
                    className="inline-flex items-center text-sm font-semibold text-[#087E8B] group-hover:text-[#0B2035] transition-colors gap-1.5 pt-3 border-t border-[#DCE5EB]/60 w-full"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA to Services Page */}
        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md btn-navy text-sm font-semibold tracking-wide"
          >
            <span>Our Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
