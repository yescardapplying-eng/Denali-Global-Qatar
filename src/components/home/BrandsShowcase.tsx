"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { brandsData, brandCategories } from "@/data/brands";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function BrandsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const filteredBrands =
    selectedCategory === "All Categories"
      ? brandsData
      : brandsData.filter((b) => b.category === selectedCategory);

  return (
    <section className="py-24 bg-[#F5F8FA] border-b border-[#DCE5EB]" id="brands-showcase">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#087E8B]/10 text-[#087E8B] text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-[#F2A541]" />
            <span>Global Manufacturing Partners</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B2035] tracking-tight">
            International Brand Directory
          </h2>
          <p className="text-[#64748B] text-base sm:text-lg leading-relaxed">
            Representing trusted world leaders in HVAC engineering, hydronics, fire protection, and precision building controls.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {brandCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-[#0B2035] text-white shadow-sm"
                  : "bg-white text-[#102D46] hover:bg-[#E9EFF3] border border-[#DCE5EB]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Brand Logos Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 sm:gap-5">
          {filteredBrands.map((brand) => (
            <div
              key={brand.id}
              className="bg-white rounded-xl p-4 border border-[#DCE5EB] hover:border-[#087E8B] transition-all duration-300 denali-card flex flex-col items-center justify-between text-center group h-36"
            >
              {/* Brand Logo Container with Clean White Background & Correct Proportions */}
              <div className="relative w-full h-16 flex items-center justify-center">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  fill
                  sizes="(max-width: 640px) 140px, 160px"
                  className="object-contain p-1 transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Brand Name & Origin */}
              <div className="w-full pt-2 border-t border-[#F5F8FA]">
                <p className="text-xs font-bold text-[#0B2035] group-hover:text-[#087E8B] transition-colors truncate">
                  {brand.name}
                </p>
                <span className="text-[10px] text-[#64748B] uppercase tracking-wider">
                  {brand.origin}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/brands"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md btn-amber text-sm font-semibold tracking-wide"
          >
            <span>View Brands</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

