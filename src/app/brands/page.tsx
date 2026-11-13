"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CtaBanner from "@/components/home/CtaBanner";
import { brandsData, brandCategories, Brand } from "@/data/brands";
import { brandsFaqs } from "@/data/faqs";
import { Search, ShieldCheck, ArrowRight, X, ExternalLink } from "lucide-react";

export default function BrandsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);

  const filteredBrands = brandsData.filter((b) => {
    const matchesCat =
      selectedCategory === "All Categories" || b.category === selectedCategory;
    const matchesSearch =
      b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.origin.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="w-full">
      {/* Page Hero */}
      <section className="relative py-24 bg-[#0B2035] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#36B8B0_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#087E8B]/30 border border-[#36B8B0]/40 text-[#36B8B0] text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#F2A541]" />
              <span>International Manufacturers</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Global Brand &amp; Manufacturer Directory
            </h1>
            <p className="text-lg sm:text-xl text-[#A9B7C3] leading-relaxed font-normal">
              Explore our portfolio of 35 verified international manufacturers across HVAC systems, ventilation, hydronics, plumbing, and QCDD-approved fire fighting equipment.
            </p>
          </div>
        </div>
      </section>

      {/* Directory & Filter Controls */}
      <section className="py-16 bg-white border-b border-[#DCE5EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search & Filter Header */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-8 border-b border-[#DCE5EB]">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by brand name, origin, or specialty..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[#DCE5EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#087E8B]/30 focus:border-[#087E8B]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#64748B] hover:text-[#0B2035]"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="text-xs text-[#64748B] font-semibold flex items-center gap-1">
              Showing <span className="text-[#0B2035] font-bold">{filteredBrands.length}</span> of {brandsData.length} Manufacturers
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center flex-wrap gap-2 mb-12">
            {brandCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-[#0B2035] text-white shadow-sm"
                    : "bg-[#F5F8FA] text-[#102D46] hover:bg-[#E9EFF3] border border-[#DCE5EB]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Brands Directory Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-5">
            {filteredBrands.map((brand) => (
              <div
                key={brand.id}
                onClick={() => setSelectedBrand(brand)}
                className="bg-white rounded-xl p-4 border border-[#DCE5EB] hover:border-[#087E8B] transition-all duration-300 denali-card flex flex-col items-center justify-between text-center group cursor-pointer h-44 shadow-xs"
              >
                {/* Brand Logo Container with Clean White Background & Correct Proportions */}
                <div className="relative w-full h-20 flex items-center justify-center">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} manufacturer logo`}
                    fill
                    sizes="(max-width: 640px) 140px, 160px"
                    className="object-contain p-1 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Brand Meta */}
                <div className="w-full pt-2 border-t border-[#F5F8FA]">
                  <p className="text-xs font-bold text-[#0B2035] group-hover:text-[#087E8B] transition-colors truncate">
                    {brand.name}
                  </p>
                  <span className="text-[10px] text-[#087E8B] font-semibold block truncate">
                    {brand.category}
                  </span>
                  <span className="text-[10px] text-[#64748B] uppercase tracking-wider block mt-0.5">
                    {brand.origin}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredBrands.length === 0 && (
            <div className="text-center py-16 bg-[#F5F8FA] rounded-xl border border-dashed border-[#DCE5EB]">
              <p className="text-[#64748B] text-sm">No manufacturers match your query &quot;{searchQuery}&quot;.</p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All Categories");
                }}
                className="mt-3 px-4 py-2 rounded text-xs font-semibold btn-amber"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Brand Details Modal */}
      {selectedBrand && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B2035]/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              type="button"
              onClick={() => setSelectedBrand(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-[#64748B] hover:text-[#0B2035] hover:bg-[#F5F8FA] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6 pb-4 border-b border-[#DCE5EB]">
              <div className="relative h-16 w-44 mx-auto mb-3">
                <Image
                  src={selectedBrand.logo}
                  alt={selectedBrand.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#0B2035]">
                {selectedBrand.name}
              </h3>
              <p className="text-xs font-semibold text-[#087E8B] mt-0.5">
                {selectedBrand.category} • Origin: {selectedBrand.origin}
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <p className="text-sm text-[#64748B] leading-relaxed">
                {selectedBrand.description}
              </p>

              <div>
                <h4 className="text-xs font-bold text-[#102D46] uppercase tracking-wider mb-2">
                  Specialized Solutions:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedBrand.specialty.map((item, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-1 rounded bg-[#087E8B]/10 text-[#087E8B] font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#DCE5EB] flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setSelectedBrand(null)}
                className="px-4 py-2 rounded text-xs font-semibold text-[#64748B] hover:bg-[#F5F8FA]"
              >
                Close
              </button>
              <Link
                href={`/contact?brand=${encodeURIComponent(selectedBrand.name)}`}
                className="px-6 py-2.5 rounded btn-amber text-xs font-semibold flex items-center gap-1.5"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Exactly 3 Inner Page FAQs */}
      <FAQAccordion
        items={brandsFaqs}
        title="International Brands FAQs"
        subtitle="Information regarding product warranties, consultant submittals, and factory coordination."
        badge="Brand Inquiries"
      />

      {/* Final CTA */}
      <CtaBanner />
    </div>
  );
}
