import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  servicesCategories,
  getServiceCategoryBySlug
} from "@/data/servicesData";
import SubServiceGrid from "@/components/services/SubServiceGrid";
import CategoryDropdownSelector from "@/components/services/CategoryDropdownSelector";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Sparkles,
  PhoneCall,
  Clock,
  Award
} from "lucide-react";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  return servicesCategories.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getServiceCategoryBySlug(slug);

  if (!category) {
    return {
      title: "Service Category Not Found",
    };
  }

  return {
    title: `${category.name} | Denali Global Qatar`,
    description: `${category.tagline}. ${category.shortDesc} Serving commercial and industrial projects in Doha, Qatar.`,
    alternates: {
      canonical: `https://denaliglobalqatar.com/services/${category.slug}`,
    },
    openGraph: {
      title: `${category.name} | Denali Global Qatar`,
      description: category.shortDesc,
      url: `https://denaliglobalqatar.com/services/${category.slug}`,
      images: [
        {
          url: category.image,
          width: 1200,
          height: 630,
          alt: category.name,
        },
      ],
    },
  };
}

export default async function ServiceCategoryPage({ params }: CategoryPageProps) {
  const { category: slug } = await params;
  const category = getServiceCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  return (
    <div className="w-full bg-[#F4F6F9]">
      {/* Category Hero Section */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-br from-[#0B1B32] via-[#002858] to-[#172B45] text-white overflow-hidden">
        {/* Background Visual Overlay */}
        <div className="absolute inset-0 opacity-15">
          <Image
            src={category.image}
            alt={category.name}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B32] via-[#002858]/90 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-[#AFC0D2]" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#D8A848]" />
            <Link href="/services" className="hover:text-white transition-colors">
              Our Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#D8A848]" />
            <span className="text-[#D8A848] font-semibold truncate">{category.name}</span>
          </nav>

          {/* Hero Content */}
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-[#D8A848]/40 text-[#D8A848] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{category.subServicesCount} Specialized Capabilities</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight !text-white leading-tight">
              {category.name}
            </h1>

            <p className="text-sm sm:text-base text-[#D8A848] font-semibold tracking-wide">
              {category.tagline}
            </p>

            <div className="w-16 h-1 bg-[#D8A848] rounded-full" />

            <p className="text-sm sm:text-base text-[#AFC0D2] leading-relaxed pt-1">
              {category.fullDesc}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href={`/contact?service=${encodeURIComponent(category.name)}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md btn-gold text-xs font-bold tracking-wide uppercase shadow-md"
              >
                <span>Request Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white/10 hover:bg-white/20 text-white text-xs font-bold tracking-wide border border-white/20 transition-colors"
              >
                <span>All Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Quick Selector Bar */}
          <CategoryDropdownSelector activeSlug={category.slug} />

          {/* Sub Services Grid & Modal */}
          <div className="space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#D8A848] uppercase tracking-wider">
                Full Technical Scope
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#002858]">
                {category.name} Catalog
              </h2>
              <p className="text-xs sm:text-sm text-[#172B45]/80 max-w-2xl">
                Explore each specialized capability below. Click &ldquo;View Details&rdquo; to review complete scopes, compliance standards, and deliverables.
              </p>
            </div>

            <SubServiceGrid
              subServices={category.subServices}
              categoryName={category.name}
            />
          </div>

          {/* Key Advantages / Delivery Standards */}
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#AFC0D2]/40 shadow-xs space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#D8A848] uppercase tracking-wider">
                Engineering Excellence
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#002858]">
                Why Choose Denali Global for {category.name}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.keyBenefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-xl bg-[#F4F6F9] border border-[#AFC0D2]/30"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#D8A848] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-[#002858] leading-snug">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-xl bg-[#002858]/5">
                <ShieldCheck className="w-6 h-6 text-[#002858] mx-auto mb-2" />
                <h4 className="text-xs font-bold text-[#002858]">CR 255619</h4>
                <p className="text-[11px] text-slate-500">Ministry of Commerce Doha, Qatar</p>
              </div>
              <div className="p-4 rounded-xl bg-[#002858]/5">
                <Award className="w-6 h-6 text-[#002858] mx-auto mb-2" />
                <h4 className="text-xs font-bold text-[#002858]">Standards Compliant</h4>
                <p className="text-[11px] text-slate-500">Kahramaa, QCDD, ASHRAE, SMACNA</p>
              </div>
              <div className="p-4 rounded-xl bg-[#002858]/5">
                <Clock className="w-6 h-6 text-[#002858] mx-auto mb-2" />
                <h4 className="text-xs font-bold text-[#002858]">Turnkey Support</h4>
                <p className="text-[11px] text-slate-500">Experienced Engineering Teams</p>
              </div>
            </div>
          </div>

          {/* Bottom Call to Action */}
          <div className="bg-gradient-to-r from-[#002858] to-[#0B1B32] rounded-2xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 text-center md:text-left max-w-xl">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight !text-white">
                Require Engineering Submittals or Quotations?
              </h3>
              <p className="text-xs sm:text-sm text-[#AFC0D2]">
                Our Qatar engineering team is ready to evaluate your tender drawings, equipment schedules, and site requirements.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href={`/contact?service=${encodeURIComponent(category.name)}`}
                className="px-6 py-3 rounded-md btn-gold text-xs font-bold uppercase tracking-wider"
              >
                Request Quote
              </Link>
              <Link
                href="/services"
                className="px-5 py-3 rounded-md bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider border border-white/20 transition-colors"
              >
                Other Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
