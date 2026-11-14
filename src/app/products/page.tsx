"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { productsData, productCategories, Product } from "@/data/products";
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
      p.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesBrand && matchesSearch;
  });

  return (
    <div className="w-full bg-[#F4F6F9]">
      {/* Page Hero */}
      <section className="relative py-20 bg-gradient-to-br from-[#0B1B32] via-[#002858] to-[#172B45] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D8A848_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-[#D8A848]/40 text-[#D8A848] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#D8A848]" />
              <span>Commercial Product Portfolio</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight !text-white">
              Engineering Products &amp; Equipment
            </h1>
            <div className="w-16 h-1 bg-[#D8A848] rounded-full" />
            <p className="text-base sm:text-lg !text-[#AFC0D2] leading-relaxed font-normal pt-1">
              Structured catalogue spanning commercial HVAC, ventilation, hydronics, fire suppression, and precision MEP instrumentation across Qatar.
            </p>
          </div>
        </div>
      </section>

      {/* Catalogue & Filters Section */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Controls Bar: Search & Selectors */}
        <div className="bg-white p-6 rounded-2xl border border-[#AFC0D2]/40 mb-10 space-y-5 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Search Bar */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-[#172B45]/60 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products by model, equipment type, or specs..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[#AFC0D2]/50 bg-[#F4F6F9] text-sm text-[#002858] placeholder-[#172B45]/50 focus:outline-none focus:ring-2 focus:ring-[#D8A848] focus:border-[#002858]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#002858] font-bold hover:underline"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Brand Filter */}
            <div className="md:col-span-3">
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                aria-label="Filter by Brand"
                className="w-full py-2.5 px-3 rounded-lg border border-[#AFC0D2]/50 bg-[#F4F6F9] text-xs font-semibold text-[#002858] focus:outline-none focus:ring-2 focus:ring-[#D8A848]"
              >
                {uniqueBrands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>

            {/* Product Count Display */}
            <div className="md:col-span-3 text-right">
              <span className="text-xs font-bold text-[#002858] bg-[#F4F6F9] px-3.5 py-2 rounded-lg border border-[#AFC0D2]/40 inline-flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5 text-[#D8A848]" />
                {filteredProducts.length} Items Available
              </span>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-[#AFC0D2]/20">
            {productCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? "bg-[#002858] text-[#D8A848] shadow-sm border border-[#D8A848]/30"
                    : "bg-[#F4F6F9] text-[#172B45] hover:bg-[#AFC0D2]/20 border border-[#AFC0D2]/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid: High-Impact Competitor Style (Large Photos, No Short Desc) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="bg-white rounded-2xl border border-slate-200 hover:border-[#D8A848] transition-all duration-300 hover:shadow-xl flex flex-col justify-between p-6 sm:p-7 group cursor-pointer"
            >
              <div>
                {/* 1. Header: Brand Logo (Left) + Brand Name (Right) */}
                <div className="h-10 w-full flex items-center justify-between pb-2 border-b border-slate-100">
                  <div className="relative h-7 w-24">
                    <Image
                      src={product.brandLogo}
                      alt={product.brandName}
                      fill
                      sizes="96px"
                      className="object-contain object-left"
                    />
                  </div>
                  <span className="text-xs font-bold text-[#002858] text-right line-clamp-1 max-w-[55%]">
                    {product.brandName}
                  </span>
                </div>

                {/* 2. Product Name (Bold, Clear Title) */}
                <h3 className="text-base sm:text-lg font-bold text-[#002858] group-hover:text-[#D8A848] transition-colors leading-snug line-clamp-2 min-h-[3rem] mt-3">
                  {product.name}
                </h3>

                {/* 3. Central Large Product Image (High Visibility, Occupies Card Space) */}
                <div className="relative h-60 sm:h-64 w-full my-3 flex items-center justify-center overflow-hidden bg-white">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* 4. Bottom Category Label & Action Bar */}
              <div className="pt-3 border-t border-slate-100 space-y-3">
                <span className="text-[11px] font-extrabold text-[#D8A848] uppercase tracking-wider block text-center">
                  {product.category}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProduct(product);
                    }}
                    className="flex-1 py-2 px-3 rounded-md text-xs font-bold bg-[#F4F6F9] hover:bg-[#AFC0D2]/30 text-[#002858] border border-slate-200 transition-colors text-center"
                  >
                    View Details
                  </button>
                  <Link
                    href={`/contact?product=${encodeURIComponent(product.name)}`}
                    onClick={(e) => e.stopPropagation()}
                    className="py-2 px-3 rounded-md text-xs font-bold btn-gold text-center"
                  >
                    Enquire Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-[#AFC0D2]/60 space-y-3">
            <p className="text-[#172B45] text-base font-medium">
              No engineering products match your current filter criteria.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All Categories");
                setSelectedBrand("All Brands");
              }}
              className="px-5 py-2.5 rounded text-xs font-bold btn-gold"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </section>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-fadeIn"
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              aria-label="Close modal"
              className="absolute top-5 right-5 p-2 rounded-full bg-[#F4F6F9] hover:bg-[#AFC0D2]/30 text-[#002858] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="relative h-8 w-28">
                  <Image
                    src={selectedProduct.brandLogo}
                    alt={selectedProduct.brandName}
                    fill
                    sizes="112px"
                    className="object-contain object-left"
                  />
                </div>
                <span className="text-xs font-bold text-[#D8A848] bg-[#002858] px-2.5 py-1 rounded">
                  {selectedProduct.brandName}
                </span>
              </div>

              <div className="relative h-72 w-full bg-white rounded-xl flex items-center justify-center p-4 border border-slate-100">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  sizes="400px"
                  className="object-contain p-2"
                />
              </div>

              <div>
                <span className="text-xs font-bold text-[#D8A848] uppercase tracking-wider">
                  {selectedProduct.category}
                </span>
                <h2 className="text-2xl font-bold text-[#002858] mt-1">
                  {selectedProduct.name}
                </h2>
                <p className="text-sm text-[#172B45] leading-relaxed mt-3">
                  {selectedProduct.shortDescription}
                </p>
              </div>

              {/* Specifications Table */}
              {selectedProduct.specifications && Object.keys(selectedProduct.specifications).length > 0 && (
                <div className="bg-[#F4F6F9] rounded-xl p-4 border border-[#AFC0D2]/30 space-y-2.5">
                  <h3 className="text-xs font-bold text-[#002858] uppercase tracking-wider">
                    Technical Specifications
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {Object.entries(selectedProduct.specifications).map(([key, value], i) => (
                      <div
                        key={i}
                        className="bg-white p-2.5 rounded border border-[#AFC0D2]/20 flex justify-between gap-2"
                      >
                        <span className="text-[#172B45]/70 font-medium">{key}:</span>
                        <span className="font-bold text-[#002858] text-right">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Applications */}
              {selectedProduct.applications && selectedProduct.applications.length > 0 && (
                <div className="space-y-1.5">
                  <h4 className="text-xs font-bold text-[#002858] uppercase tracking-wider">
                    Typical Applications
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProduct.applications.map((app, i) => (
                      <span
                        key={i}
                        className="text-xs px-2.5 py-1 rounded bg-[#F4F6F9] border border-[#AFC0D2]/30 text-[#002858] font-medium"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Modal CTA Buttons */}
              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  href={`/contact?product=${encodeURIComponent(selectedProduct.name)}`}
                  className="flex-1 py-3 px-4 rounded-md btn-gold text-xs font-bold text-center"
                >
                  Request Commercial Quotation
                </Link>
                <button
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  className="py-3 px-6 rounded-md bg-[#F4F6F9] hover:bg-[#AFC0D2]/30 text-[#002858] border border-[#AFC0D2]/40 text-xs font-bold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FAQs Section */}
      <FAQAccordion
        items={productsFaqs}
        title="Product &amp; Procurement FAQs"
        subtitle="Important information on commercial quotation timelines, environmental compliance, and lead times."
        badge="Catalog Inquiries"
      />
    </div>
  );
}
