"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

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
    badge: "Engineered Products & Equipment",
    headline: "Quality Products. Engineering Rigor.",
    description: "Discover reliable engineering products and MEP equipment designed for Qatar's demanding commercial, industrial, and infrastructure projects.",
    ctaText: "View Products",
    ctaLink: "/products",
    secondaryCtaText: "Request Quote",
    secondaryCtaLink: "/contact",
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

const SLIDE_DURATION = 6500; // 6.5 seconds per slide for majestic cinematic pacing

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  // Progress bar animation timer
  useEffect(() => {
    if (isPaused) return;

    const intervalStep = 50; // update every 50ms
    const stepIncrement = (intervalStep / SLIDE_DURATION) * 100;

    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + stepIncrement;
      });
    }, intervalStep);

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [isPaused, nextSlide, currentSlide]);

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
            {/* Background Image with Cinematic Ken Burns Zoom */}
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={slide.image}
                alt={slide.imageAlt}
                fill
                priority={index === 0}
                sizes="100vw"
                className={`object-cover object-center transition-transform duration-[8000ms] ease-out will-change-transform ${
                  isActive ? "scale-110" : "scale-100"
                }`}
              />
              {/* Cinematic Vignette & Text Contrast Gradients */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/25" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
            </div>

            {/* Content Overlay with Dramatic Staggered Animations */}
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl lg:max-w-3xl space-y-4 sm:space-y-6">
                  {/* Category Badge with Gold Shimmer - Stagger Step 1 */}
                  <div
                    className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/45 border border-[#D8A848]/70 text-[#D8A848] text-xs sm:text-sm font-bold tracking-wide backdrop-blur-md shadow-lg transition-all duration-700 ease-out ${
                      isActive
                        ? "translate-y-0 opacity-100 delay-100"
                        : "-translate-y-6 opacity-0"
                    }`}
                  >
                    <ShieldCheck className="w-4 h-4 text-[#D8A848] animate-pulse" />
                    <span>{slide.badge}</span>
                  </div>

                  {/* Responsive Heading in Pure Bright White - Stagger Step 2 */}
                  <h1
                    className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold !text-white leading-[1.14] tracking-tight drop-shadow-xl transition-all duration-900 ease-out ${
                      isActive
                        ? "translate-y-0 opacity-100 delay-300"
                        : "translate-y-10 opacity-0"
                    }`}
                  >
                    {slide.headline}
                  </h1>

                  {/* Description in Bright High-Contrast Text - Stagger Step 3 */}
                  <p
                    className={`text-base sm:text-lg md:text-xl !text-white/95 font-normal leading-relaxed max-w-xl drop-shadow-md transition-all duration-900 ease-out ${
                      isActive
                        ? "translate-y-0 opacity-100 delay-500"
                        : "translate-y-8 opacity-0"
                    }`}
                  >
                    {slide.description}
                  </p>

                  {/* Action Buttons - Stagger Step 4 with Hover Spring */}
                  <div
                    className={`pt-2 sm:pt-4 flex flex-wrap items-center gap-4 transition-all duration-700 ease-out ${
                      isActive
                        ? "translate-y-0 opacity-100 scale-100 delay-700"
                        : "translate-y-8 opacity-0 scale-95"
                    }`}
                  >
                    <Link
                      href={slide.ctaLink}
                      className="px-6 py-3.5 sm:px-8 sm:py-4 rounded-md btn-gold text-sm sm:text-base font-bold tracking-wide flex items-center gap-2 shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 group"
                    >
                      <span>{slide.ctaText}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                      href={slide.secondaryCtaLink}
                      className="px-6 py-3.5 sm:px-8 sm:py-4 rounded-md bg-white/10 hover:bg-white/25 text-white border border-white/30 text-sm sm:text-base font-semibold tracking-wide backdrop-blur-sm shadow-md hover:scale-105 active:scale-95 transition-all duration-300"
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

      {/* Manual Carousel Arrows with Animated Hover Glow */}
      <div className="absolute bottom-8 right-4 sm:right-8 z-30 flex items-center space-x-3">
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="w-11 h-11 rounded-full bg-[#002858]/85 hover:bg-[#D8A848] hover:text-[#002858] border border-white/20 text-white flex items-center justify-center transition-all duration-300 backdrop-blur-md hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#D8A848] shadow-lg"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next Slide"
          className="w-11 h-11 rounded-full bg-[#002858]/85 hover:bg-[#D8A848] hover:text-[#002858] border border-white/20 text-white flex items-center justify-center transition-all duration-300 backdrop-blur-md hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#D8A848] shadow-lg"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Modern Animated Progress Indicators */}
      <div className="absolute bottom-8 left-4 sm:left-8 z-30 flex items-center space-x-3">
        {slides.map((_, i) => {
          const isSelected = i === currentSlide;

          return (
            <button
              key={i}
              type="button"
              onClick={() => goToSlide(i)}
              aria-label={`Go to Slide ${i + 1}`}
              className="group relative h-2.5 rounded-full overflow-hidden transition-all duration-300 focus:outline-none"
              style={{ width: isSelected ? "48px" : "18px" }}
            >
              {/* Track background */}
              <div className="w-full h-full bg-white/30 rounded-full group-hover:bg-white/50 transition-colors" />

              {/* Active Fill Bar with Smooth Progress */}
              {isSelected && (
                <div
                  className="absolute top-0 left-0 h-full bg-[#D8A848] rounded-full transition-all duration-75 ease-linear shadow-xs"
                  style={{ width: `${progress}%` }}
                />
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}
