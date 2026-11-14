"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  homepageFaqs,
  servicesFaqs,
  technicalServicesFaqs,
  complianceFaqs,
  productsFaqs,
  aboutFaqs,
  contactFaqs,
  FAQItem
} from "@/data/faqs";
import {
  Search,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Building2,
  Wrench,
  Boxes,
  Globe2,
  Send
} from "lucide-react";

interface FAQCategory {
  name: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
  items: FAQItem[];
}

export default function FaqsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Categories");
  const [openIds, setOpenIds] = useState<{ [key: string]: boolean }>({
    "hp-faq-1": true,
    "ts-faq-1": true,
  });

  const categories: FAQCategory[] = [
    {
      name: "General & Company",
      badge: "Corporate",
      icon: Building2,
      items: [...homepageFaqs, ...aboutFaqs]
    },
    {
      name: "Products & Supply",
      badge: "Procurement",
      icon: Boxes,
      items: productsFaqs
    },
    {
      name: "Quality & Compliance",
      badge: "Standards",
      icon: Globe2,
      items: complianceFaqs
    },
    {
      name: "Engineering Solutions",
      badge: "MEP Systems",
      icon: ShieldCheck,
      items: servicesFaqs
    },
    {
      name: "Technical Services",
      badge: "Maintenance & TAB",
      icon: Wrench,
      items: technicalServicesFaqs
    },
    {
      name: "Enquiries & Quotes",
      badge: "Commercial",
      icon: Send,
      items: contactFaqs
    }
  ];

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Filter items by active category and search query
  const displayedCategories = categories
    .filter((cat) => activeCategory === "All Categories" || cat.name === activeCategory)
    .map((cat) => {
      const filtered = cat.items.filter(
        (item) =>
          item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return { ...cat, items: filtered };
    })
    .filter((cat) => cat.items.length > 0);

  const totalQuestions = categories.reduce((sum, cat) => sum + cat.items.length, 0);

  return (
    <div className="w-full bg-[#F4F6F9] min-h-screen">
      {/* Page Header */}
      <section className="relative py-20 bg-gradient-to-br from-[#0B1B32] via-[#002858] to-[#172B45] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D8A848_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-[#D8A848]/40 text-[#D8A848] text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-[#D8A848]" />
            <span>Knowledge Base &amp; Technical Support</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Frequently Asked Questions
          </h1>

          <div className="w-16 h-1 bg-[#D8A848] mx-auto rounded-full" />

          <p className="text-sm sm:text-base text-[#AFC0D2] max-w-2xl mx-auto leading-relaxed">
            Find immediate technical clarifications regarding our product catalog, manufacturer warranties, AMC coverage, and commercial quotation procedures.
          </p>

          {/* Search Box */}
          <div className="pt-4 max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#AFC0D2]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by keyword, product name, standard, or service..."
                className="w-full pl-12 pr-4 py-3.5 rounded-lg bg-white/95 text-[#002858] placeholder-[#172B45]/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#D8A848] text-sm shadow-md"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#002858] font-bold hover:underline"
                >
                  Clear
                </button>
              )}
            </div>
            <p className="text-xs text-[#AFC0D2] pt-2 text-right">
              Showing questions across {totalQuestions} commercial topics
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Content Section */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory("All Categories")}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              activeCategory === "All Categories"
                ? "bg-[#002858] text-[#D8A848] shadow-md border border-[#D8A848]/30"
                : "bg-white text-[#172B45] hover:bg-[#AFC0D2]/20 border border-[#AFC0D2]/40"
            }`}
          >
            All Questions
          </button>
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeCategory === cat.name
                  ? "bg-[#002858] text-[#D8A848] shadow-md border border-[#D8A848]/30"
                  : "bg-white text-[#172B45] hover:bg-[#AFC0D2]/20 border border-[#AFC0D2]/40"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* FAQs Grouped By Category */}
        {displayedCategories.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl border border-[#AFC0D2]/30 p-8 max-w-xl mx-auto">
            <HelpCircle className="w-12 h-12 text-[#AFC0D2] mx-auto mb-3" />
            <h3 className="text-lg font-bold text-[#002858]">No questions found</h3>
            <p className="text-sm text-[#172B45] mt-1 mb-4">
              We couldn&apos;t find any questions matching &quot;{searchQuery}&quot;. Try searching with a different term or contact our team directly.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md btn-gold text-xs font-bold"
            >
              <span>Contact Engineering Desk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        ) : (
          <div className="space-y-10">
            {displayedCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div key={cat.name} className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 border-b border-[#AFC0D2]/40 pb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#002858] text-[#D8A848] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-[#002858]">{cat.name}</h2>
                      <span className="text-[11px] text-[#D8A848] font-bold uppercase tracking-wider">
                        {cat.badge} • {cat.items.length} Questions
                      </span>
                    </div>
                  </div>

                  {/* Accordion List */}
                  <div className="space-y-3">
                    {cat.items.map((item) => {
                      const isOpen = !!openIds[item.id];
                      return (
                        <div
                          key={item.id}
                          className="bg-white rounded-xl border border-[#AFC0D2]/40 overflow-hidden shadow-2xs transition-all hover:border-[#D8A848]"
                        >
                          <button
                            onClick={() => toggleItem(item.id)}
                            className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#002858] hover:text-[#D8A848] transition-colors"
                          >
                            <span className="flex items-center gap-3">
                              <span className="w-2 h-2 rounded-full bg-[#D8A848] flex-shrink-0" />
                              {item.question}
                            </span>
                            <span className="text-[#002858] flex-shrink-0">
                              {isOpen ? (
                                <ChevronUp className="w-5 h-5 text-[#D8A848]" />
                              ) : (
                                <ChevronDown className="w-5 h-5" />
                              )}
                            </span>
                          </button>

                          {isOpen && (
                            <div className="px-6 pb-5 pt-1 text-sm text-[#172B45] leading-relaxed border-t border-[#F4F6F9] bg-[#F4F6F9]/40">
                              <p>{item.answer}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Direct Inquiries Help Card */}
        <div className="mt-16 bg-white rounded-2xl p-8 border border-[#AFC0D2]/40 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-bold text-[#002858]">Have a Specific Technical Question?</h3>
            <p className="text-sm text-[#172B45] max-w-xl">
              Our MEP engineering consultants and commercial estimators are available to review your project BOQ, submittals, or equipment schedules.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md btn-gold text-xs font-bold"
            >
              <span>Submit Project Query</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md btn-navy text-xs font-bold"
            >
              <span>Browse Products</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
