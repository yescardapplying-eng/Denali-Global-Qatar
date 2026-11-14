"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck } from "lucide-react";

export interface HeroSlide {
  id: number;
  badge: string;
  headline: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  image: string;
  imageAlt: string;
}

const slides: HeroSlide[] = [
  {
    id: 1,
    badge: "HVAC & MEP Engineering",
    headline: "The Strength Behind Every Structure.",
    description: "Delivering integrated HVAC, MEP, and building engineering solutions through trusted global products and technical excellence in Qatar.",
    ctaText: "Explore Solutions",
    ctaLink: "/services",
    secondaryCtaText: "Get Quote",
    secondaryCtaLink: "/contact",
    image: "/hero/hero-slide-1.jpg",
    imageAlt: "Commercial HVAC plant room and air handling engineering facility in Doha Qatar"
  },
  {
    id: 2,
    badge: "Products & Global Brands",
    headline: "Quality Products. Trusted Global Brands.",
    description: "Discover reliable engineering products and equipment sourced from established international manufacturers across Europe, the USA, and Asia.",
    ctaText: "View Products",
    ctaLink: "/products",
    secondaryCtaText: "View Brands",
    secondaryCtaLink: "/brands",
    image: "/hero/hero-slide-2.jpg",
    imageAlt: "Commercial MEP equipment, industrial valves, pumps, and ventilation products"
  },
  {
    id: 3,
    badge: "Denali Technical Services",
    headline: "Performance Beyond Installation.",
    description: "Supporting building longevity and energy performance through turnkey maintenance, equipment replacement, retrofits, and certified TAB commissioning.",
    ctaText: "Our Services",
    ctaLink: "/technical-services",
    secondaryCtaText: "Request Quote",
    secondaryCtaLink: "/contact",
    image: "/hero/hero-slide-3.jpg",
    imageAlt: "Certified MEP commissioning engineers performing testing and balancing in Qatar"
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // 4s Auto transition
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      className="relative w-full h-[580px] sm:h-[640px] md:h-[700px] lg:h-[760px] overflow-hidden bg-[#002858]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Denali Global Featured Hero Slides"
    >
      {/* Slides Container */}
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;

        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Background Image with Cinematic Grading */}
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.imageAlt}
                fill
                priority={index === 0}
                sizes="100vw"
                className={`object-cover object-center transition-transform duration-[6000ms] ease-out ${
                  isActive ? "scale-105" : "scale-100"
                }`}
              />
              {/* Dual Direction Gradients for Deep Navy Contrast */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#002858]/95 via-[#002858]/80 to-transparent md:to-[#0B1B32]/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B32] via-transparent to-transparent opacity-85" />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl lg:max-w-3xl space-y-4 sm:space-y-6 animate-fade-in-up">
                  {/* Category Badge with Metallic Gold */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#D8A848]/40 text-[#D8A848] text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-sm">
                    <ShieldCheck className="w-4 h-4 text-[#D8A848]" />
                    <span>{slide.badge}</span>
                  </div>

                  {/* Responsive Heading */}
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.12] tracking-tight">
                    {slide.headline}
                  </h1>

                  {/* Description */}
                  <p className="text-base sm:text-lg md:text-xl text-[#F4F6F9] font-normal leading-relaxed max-w-xl">
                    {slide.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-4">
                    <Link
                      href={slide.ctaLink}
                      className="px-6 py-3.5 sm:px-8 sm:py-4 rounded-md btn-gold text-sm sm:text-base font-bold tracking-wide flex items-center gap-2"
                    >
                      <span>{slide.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <Link
                      href={slide.secondaryCtaLink}
                      className="px-6 py-3.5 sm:px-8 sm:py-4 rounded-md bg-white/10 hover:bg-white/20 text-white border border-white/20 text-sm sm:text-base font-semibold tracking-wide backdrop-blur-sm transition-all duration-200"
                    >
                      {slide.secondaryCtaText}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Manual Carousel Arrows */}
      <div className="absolute bottom-8 right-4 sm:right-8 z-30 flex items-center space-x-3">
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="w-11 h-11 rounded-full bg-[#002858]/80 hover:bg-[#D8A848] hover:text-[#002858] border border-white/20 text-white flex items-center justify-center transition-all duration-200 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#D8A848]"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next Slide"
          className="w-11 h-11 rounded-full bg-[#002858]/80 hover:bg-[#D8A848] hover:text-[#002858] border border-white/20 text-white flex items-center justify-center transition-all duration-200 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#D8A848]"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Pagination Indicators */}
      <div className="absolute bottom-8 left-4 sm:left-8 z-30 flex items-center space-x-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrentSlide(i)}
            aria-label={`Go to Slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full h-2.5 ${
              i === currentSlide ? "w-8 bg-[#D8A848]" : "w-2.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
