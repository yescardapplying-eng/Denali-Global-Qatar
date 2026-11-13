"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CtaBanner from "@/components/home/CtaBanner";
import { productsData, productCategories, Product } from "@/data/products";
import { brandsData } from "@/data/brands";
import { productsFaqs } from "@/data/faqs";
import { Search, ShieldCheck, ArrowRight, X, Filter } from "lucide-react";

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedBrand, setSelectedBrand] = useState("All Brands");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Extract unique brands present in the product catalogue
  const uniqueBrands = ["All Brands", ...Array.from(new Set(productsData.map((p) => p.brandName)))];

  const filteredProducts = productsData.filter((p) => {
    const matchesCategory =
      selectedCategory === "All Categories" || p.category === selectedCategory;
    const matchesBrand =
      selectedBrand === "All Brands" || p.brandName === selectedBrand;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.brandName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesBrand && matchesSearch;
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
              <span>Commercial Product Portfolio</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Engineering Products &amp; Equipment
            </h1>
            <p className="text-lg sm:text-xl text-[#A9B7C3] leading-relaxed font-normal">
              Structured catalogue spanning commercial HVAC, ventilation, hydronics, fire suppression, and precision MEP instrumentation.
            </p>
          </div>
        </div>
      </section>

      {/* Catalogue & Filters Section */}
      <section className="py-16 bg-white border-b border-[#DCE5EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Controls Bar: Search & Selectors */}
          <div className="bg-[#F5F8FA] p-6 rounded-2xl border border-[#DCE5EB] mb-10 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              {/* Search Bar */}
              <div className="md:col-span-6 relative">
                <Search className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products by model, equipment type, or specs..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[#DCE5EB] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#087E8B]/30 focus:border-[#087E8B]"
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

              {/* Brand Dropdown Filter */}
              <div className="md:col-span-3">
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#DCE5EB] bg-white text-sm text-[#0B2035] focus:outline-none focus:ring-2 focus:ring-[#087E8B]/30"
                >
                  {uniqueBrands.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>

              {/* Product Count Stats */}
              <div className="md:col-span-3 text-right">
                <span className="text-xs font-semibold text-[#64748B]">
                  Showing <strong className="text-[#0B2035] font-bold">{filteredProducts.length}</strong> Products
                </span>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="pt-2 border-t border-[#DCE5EB]/60 flex items-center flex-wrap gap-2">
              <span className="text-xs font-bold text-[#102D46] mr-1 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5 text-[#087E8B]" /> Category:
              </span>
              {productCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? "bg-[#0B2035] text-white shadow-xs"
                      : "bg-white text-[#102D46] hover:bg-[#E9EFF3] border border-[#DCE5EB]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl border border-[#DCE5EB] p-5 flex flex-col justify-between denali-card group shadow-xs"
              >
                <div>
                  {/* Manufacturer Logo at Top */}
                  <div className="h-12 w-full flex items-center justify-between pb-3 border-b border-[#DCE5EB]/60">
                    <div className="relative h-8 w-28">
                      <Image
                        src={product.brandLogo}
                        alt={product.brandName}
                        fill
                        sizes="110px"
                        className="object-contain object-left"
                      />
                    </div>
                    <span className="text-[11px] font-semibold text-[#087E8B] bg-[#087E8B]/10 px-2 py-0.5 rounded">
                      {product.brandName}
                    </span>
                  </div>

                  {/* Central Product Image Area */}
                  <div className="relative h-48 w-full my-4 rounded-lg bg-[#F8FAFC] flex items-center justify-center p-3 overflow-hidden border border-[#DCE5EB]/40">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Product Meta */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider block">
                      {product.category}
                    </span>
                    <h3 className="text-base font-bold text-[#0B2035] group-hover:text-[#087E8B] transition-colors leading-snug line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-xs text-[#64748B] leading-relaxed line-clamp-3">
                      {product.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Action Buttons: 2 Words Max */}
                <div className="pt-4 mt-4 border-t border-[#DCE5EB]/60 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(product)}
                    className="flex-1 py-2 px-3 rounded text-xs font-semibold bg-[#F5F8FA] hover:bg-[#E9EFF3] text-[#102D46] border border-[#DCE5EB] transition-colors"
                  >
                    View Details
                  </button>
                  <Link
                    href={`/contact?product=${encodeURIComponent(product.name)}`}
                    className="py-2 px-3 rounded text-xs font-semibold btn-amber"
                  >
                    Enquire Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20 bg-[#F5F8FA] rounded-2xl border border-dashed border-[#DCE5EB] space-y-3">
              <p className="text-[#64748B] text-base font-medium">
                No engineering products match your current filter criteria.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All Categories");
                  setSelectedBrand("All Brands");
                }}
                className="px-5 py-2.5 rounded text-xs font-semibold btn-amber"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B2035]/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-[#64748B] hover:text-[#0B2035] hover:bg-[#F5F8FA] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-[#DCE5EB]">
              <div className="relative h-10 w-32">
                <Image
                  src={selectedProduct.brandLogo}
                  alt={selectedProduct.brandName}
                  fill
                  className="object-contain object-left"
                />
              </div>
              <div>
                <span className="text-xs font-bold text-[#087E8B] uppercase tracking-wider block">
                  {selectedProduct.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0B2035]">
                  {selectedProduct.name}
                </h3>
              </div>
            </div>

            {/* Image & Description */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div className="relative h-56 w-full rounded-xl bg-[#F8FAFC] border border-[#DCE5EB] flex items-center justify-center p-4">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="space-y-4">
                <p className="text-sm text-[#64748B] leading-relaxed">
                  {selectedProduct.shortDescription}
                </p>
                <div>
                  <h4 className="text-xs font-bold text-[#102D46] uppercase tracking-wider mb-2">
                    Key Applications:
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProduct.applications.map((app, i) => (
                      <span
                        key={i}
                        className="text-xs px-2.5 py-1 rounded-full bg-[#087E8B]/10 text-[#087E8B] font-medium"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Specifications Table */}
            <div className="mb-6">
              <h4 className="text-sm font-bold text-[#102D46] uppercase tracking-wider mb-3">
                Technical Specifications
              </h4>
              <div className="rounded-lg border border-[#DCE5EB] divide-y divide-[#DCE5EB] overflow-hidden">
                {Object.entries(selectedProduct.specifications).map(([key, val]) => (
                  <div key={key} className="flex justify-between py-2.5 px-4 text-xs">
                    <span className="font-semibold text-[#102D46]">{key}</span>
                    <span className="text-[#64748B] text-right font-medium">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#DCE5EB]">
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="px-5 py-2.5 rounded text-sm font-semibold text-[#64748B] hover:bg-[#F5F8FA]"
              >
                Close
              </button>
              <Link
                href={`/contact?product=${encodeURIComponent(selectedProduct.name)}`}
                className="px-6 py-2.5 rounded btn-amber text-sm font-semibold flex items-center gap-2"
              >
                <span>Request Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Exactly 3 Inner Page FAQs */}
      <FAQAccordion
        items={productsFaqs}
        title="Product &amp; Procurement FAQs"
        subtitle="Important information on commercial quotation timelines, environmental compliance, and lead times."
        badge="Catalog Inquiries"
      />

      {/* Final CTA */}
      <CtaBanner />
    </div>
  );
}
