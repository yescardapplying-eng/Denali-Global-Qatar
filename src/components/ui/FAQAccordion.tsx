"use client";

import React, { useState } from "react";
import { FAQItem } from "@/data/faqs";
import { ChevronDown } from "lucide-react";

interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
  badge?: string;
}

export default function FAQAccordion({
  items,
  title = "Frequently Asked Questions",
  subtitle = "Clear answers regarding our product sourcing, engineering services, and international brand partnerships.",
  badge = "Common Inquiries"
}: FAQAccordionProps) {
  // State for exactly one question open at a time (null if none, index if open)
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-20 bg-[#F5F8FA] border-b border-[#DCE5EB]" id="faqs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#087E8B]/10 text-[#087E8B] text-xs font-semibold uppercase tracking-wider">
            <span>{badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B2035] tracking-tight">
            {title}
          </h2>
          <p className="text-[#64748B] text-sm sm:text-base leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3">
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-[#DCE5EB] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#087E8B]/30 hover:bg-[#F8FAFC] transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-[#0B2035]">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "rotate-180 bg-[#087E8B] text-white"
                        : "bg-[#F5F8FA] text-[#102D46]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Animated Answer Body */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-[#64748B] leading-relaxed border-t border-[#F5F8FA]">
                    {item.answer}
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

