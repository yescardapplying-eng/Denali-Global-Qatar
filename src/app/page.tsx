import React from "react";
import HeroCarousel from "@/components/home/HeroCarousel";
import IntroSection from "@/components/home/IntroSection";
import BusinessSolutions from "@/components/home/BusinessSolutions";
import TechnicalServicesPreview from "@/components/home/TechnicalServicesPreview";
import WhyChooseDenali from "@/components/home/WhyChooseDenali";
import IndustryApplications from "@/components/home/IndustryApplications";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CtaBanner from "@/components/home/CtaBanner";
import { homepageFaqs } from "@/data/faqs";

export default function HomePage() {
  return (
    <div className="w-full overflow-hidden">
      {/* 1. HERO CAROUSEL */}
      <HeroCarousel />

      {/* 2. CORPORATE OVERVIEW */}
      <IntroSection />

      {/* 3. SPECIALIZED BUSINESS SOLUTIONS (TOP 3 CORE DIVISIONS) */}
      <BusinessSolutions />

      {/* 4. TECHNICAL SERVICES PREVIEW (TOP 2 ENGINEERING SERVICES) */}
      <TechnicalServicesPreview />

      {/* 5. WHY CHOOSE DENALI (3 CORE COMMERCIAL ADVANTAGES) */}
      <WhyChooseDenali />

      {/* 6. TARGET APPLICATION SECTORS (TOP 3 SECTORS) */}
      <IndustryApplications />

      {/* 7. HOMEPAGE FAQS */}
      <FAQAccordion
        items={homepageFaqs}
        title="Frequently Asked Questions"
        subtitle="Key insights into Denali Global's product portfolio, brand associations, and technical services."
        badge="Direct Inquiries"
      />

      {/* 8. FINAL CTA BANNER */}
      <CtaBanner />
    </div>
  );
}
