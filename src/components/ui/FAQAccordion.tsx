"use client";

import React, { useState } from "react";
import { FAQItem } from "@/data/faqs";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
  badge?: string;
}

export default function FAQAccordion({
  items,
  title = "Frequently Asked Questions",
  subtitle = "Clear answers regarding our product sourcing, engineering capabilities, and technical maintenance services.",
  badge = "Common Inquiries"
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-20 sm:py-24 bg-[#F4F6F9] border-t border-[#AFC0D2]/40" id="faqs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-3 scroll-reveal">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#002858]/10 text-[#002858] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#D8A848]" />
            <span>{badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#002858] tracking-tight">
            {title}
          </h2>
          <div className="w-16 h-1 bg-[#D8A848] mx-auto rounded-full" />
          <p className="text-[#172B45] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto pt-1">
            {subtitle}
          </p>
        </div>

        {/* Accordion List with Staggered Entrance */}
        <div className="space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.id}
                className={`rounded-2xl transition-all duration-300 denali-card overflow-hidden scroll-reveal ${
                  isOpen
                    ? "bg-white border-2 border-[#D8A848] shadow-md"
                    : "bg-white border border-[#AFC0D2]/40 hover:border-[#D8A848]/60 shadow-xs"
                }`}
                data-delay={String((index % 4) + 1)}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 focus:outline-none transition-colors group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 transition-colors ${
                        isOpen
                          ? "bg-[#D8A848] text-[#002858]"
                          : "bg-[#002858]/5 text-[#002858] group-hover:bg-[#D8A848]/20"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`text-base sm:text-lg font-bold transition-colors leading-snug ${
                        isOpen ? "text-[#002858]" : "text-[#002858] group-hover:text-[#D8A848]"
                      }`}
                    >
                      {item.question}
                    </span>
                  </div>

                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 bg-[#002858] text-[#D8A848] shadow-xs"
                        : "bg-[#F4F6F9] text-[#002858] group-hover:bg-[#002858]/10"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Animated Answer Body */}
                <div
                  className={`transition-all duration-400 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 sm:px-6 pb-5 pt-2 text-sm sm:text-base text-[#172B45]/90 leading-relaxed border-t border-slate-100 bg-[#F4F6F9]/40">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
