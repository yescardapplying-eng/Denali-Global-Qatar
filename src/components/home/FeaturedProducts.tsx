"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { productsData, Product } from "@/data/products";
import { ArrowRight, CheckCircle2, X } from "lucide-react";

export default function FeaturedProducts() {
  const featuredProducts = productsData.filter((p) => p.featured).slice(0, 8);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section className="py-24 bg-white border-b border-[#DCE5EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#087E8B]/10 text-[#087E8B] text-xs font-semibold uppercase tracking-wider">
              <span>Verified Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B2035] tracking-tight">
              Featured Engineering Products
            </h2>
            <p className="text-[#64748B] text-base leading-relaxed">
              Precision equipment sourced directly from premier global manufacturers, meeting rigorous regional performance and civil specifications.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md btn-amber text-sm font-semibold tracking-wide self-start md:self-auto flex-shrink-0"
          >
            <span>View Products</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl border border-[#DCE5EB] p-5 flex flex-col justify-between denali-card group"
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
                  <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider block">
                    {product.category}
                  </span>
                  <h3 className="text-base font-bold text-[#0B2035] group-hover:text-[#087E8B] transition-colors leading-snug line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed line-clamp-2">
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

        {/* Product Details Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B2035]/70 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-[#64748B] hover:text-[#0B2035] hover:bg-[#F5F8FA] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header with Brand */}
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
                      Applications:
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

              {/* Modal Action CTA */}
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
      </div>
    </section>
  );
}

