"use client";

import React, { useState } from "react";
import { testimonialsData } from "@/data/testimonials";
import { ChevronLeft, ChevronRight, Star, Quote, Building2 } from "lucide-react";

export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const current = testimonialsData[activeIndex];

  return (
    <section className="py-24 bg-white border-b border-[#AFC0D2]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 scroll-reveal">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#002858]/10 text-[#002858] text-xs font-bold uppercase tracking-wider">
            <span>Client &amp; Consultant Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#002858] tracking-tight">
            Industry Perspectives
          </h2>
          <div className="w-16 h-1 bg-[#D8A848] mx-auto rounded-full" />
          <p className="text-[#172B45] text-base leading-relaxed pt-1">
            Observations and technical endorsements from MEP consultants, project developers, and facility managers across Qatar.
          </p>
        </div>

        {/* Testimonial Active Display Card */}
        <div className="max-w-4xl mx-auto bg-[#F4F6F9] rounded-2xl border border-[#AFC0D2]/40 p-8 sm:p-12 relative shadow-md scroll-reveal" data-delay="2">
          <div className="absolute top-6 right-8 text-[#002858]/10">
            <Quote className="w-16 h-16 sm:w-20 sm:h-20" />
          </div>

          <div className="relative z-10 space-y-6">
            {/* Rating Stars */}
            <div className="flex items-center gap-1">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#D8A848] text-[#D8A848]" />
              ))}
              <span className="ml-2 text-xs font-bold text-[#002858] bg-[#D8A848]/20 px-2.5 py-0.5 rounded">
                {current.projectType}
              </span>
            </div>

            {/* Testimonial Quote */}
            <blockquote className="text-lg sm:text-xl lg:text-2xl text-[#002858] font-medium leading-relaxed italic">
              &ldquo;{current.text}&rdquo;
            </blockquote>

            {/* Author Info */}
            <div className="pt-4 border-t border-[#AFC0D2]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-bold text-[#002858]">
                  {current.name}
                </h4>
                <p className="text-xs sm:text-sm text-[#D8A848] font-bold">
                  {current.role}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-[#172B45]/70 mt-0.5">
                  <Building2 className="w-3.5 h-3.5 text-[#A9B7C3]" />
                  <span>{current.company}</span>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-2 self-end sm:self-center">
                <button
                  type="button"
                  onClick={prevTestimonial}
                  aria-label="Previous Testimonial"
                  className="w-10 h-10 rounded-full bg-white hover:bg-[#087E8B] hover:text-white border border-[#DCE5EB] text-[#0B2035] flex items-center justify-center transition-all shadow-xs"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs font-semibold text-[#64748B] px-2">
                  {activeIndex + 1} / {testimonialsData.length}
                </span>
                <button
                  type="button"
                  onClick={nextTestimonial}
                  aria-label="Next Testimonial"
                  className="w-10 h-10 rounded-full bg-white hover:bg-[#087E8B] hover:text-white border border-[#DCE5EB] text-[#0B2035] flex items-center justify-center transition-all shadow-xs"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {testimonialsData.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveIndex(idx)}
              aria-label={`View testimonial ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === activeIndex ? "w-8 bg-[#087E8B]" : "w-2.5 bg-[#DCE5EB] hover:bg-[#A9B7C3]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

