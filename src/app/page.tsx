import React from "react";
import HeroCarousel from "@/components/home/HeroCarousel";
import IntroSection from "@/components/home/IntroSection";
import BusinessSolutions from "@/components/home/BusinessSolutions";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import TechnicalServicesPreview from "@/components/home/TechnicalServicesPreview";
import BrandsShowcase from "@/components/home/BrandsShowcase";
import WhyChooseDenali from "@/components/home/WhyChooseDenali";
import IndustryApplications from "@/components/home/IndustryApplications";
import TestimonialSlider from "@/components/home/TestimonialSlider";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CtaBanner from "@/components/home/CtaBanner";
import { homepageFaqs } from "@/data/faqs";

export default function HomePage() {
  return (
    <div className="w-full overflow-hidden">
      {/* SECTION 2 – HERO CAROUSEL (EXACTLY 3 SLIDES) */}
      <HeroCarousel />

      {/* SECTION 3 – INTRODUCTION */}
      <IntroSection />

      {/* SECTION 4 – BUSINESS SOLUTIONS (8 INTERACTIVE CARDS) */}
      <BusinessSolutions />

      {/* SECTION 5 – FEATURED PRODUCTS */}
      <FeaturedProducts />

      {/* SECTION 6 – TECHNICAL SERVICES PREVIEW (4 SERVICE CARDS) */}
      <TechnicalServicesPreview />

      {/* SECTION 7 – INTERNATIONAL BRANDS (35 VERIFIED BRANDS) */}
      <BrandsShowcase />

      {/* SECTION 8 – WHY CHOOSE DENALI (6 CREDIBLE ADVANTAGES) */}
      <WhyChooseDenali />

      {/* SECTION 9 – PROJECT / INDUSTRY APPLICATIONS (6 SECTORS) */}
      <IndustryApplications />

      {/* SECTION 10 – TESTIMONIALS (EXACTLY 6 SLOTS) */}
      <TestimonialSlider />

      {/* SECTION 11 – HOMEPAGE FAQ (EXACTLY 6 FAQS) */}
      <FAQAccordion
        items={homepageFaqs}
        title="Frequently Asked Questions"
        subtitle="Key insights into Denali Global's product portfolio, brand associations, and technical services."
        badge="Direct Inquiries"
      />

      {/* SECTION 12 – FINAL CTA */}
      <CtaBanner />
    </div>
  );
}
