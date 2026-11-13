import React from "react";
import type { Metadata } from "next";
import { companyData } from "@/data/company";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Denali Global Trading and Contracting",
  description: "Privacy Policy and data processing terms for Denali Global Trading and Contracting, Doha, Qatar.",
  alternates: {
    canonical: "https://denaliglobalqatar.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-3 border-b border-[#DCE5EB] pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#087E8B]/10 text-[#087E8B] text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-[#F2A541]" />
            <span>Corporate Governance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0B2035]">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#64748B]">
            Last updated: January 2026 • Denali Global Trading and Contracting (CR No. {companyData.crNumber})
          </p>
        </div>

        <div className="prose prose-slate max-w-none space-y-6 text-sm text-[#64748B] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#0B2035]">1. Introduction</h2>
            <p>
              Denali Global Trading and Contracting (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), registered in Doha, Qatar under Commercial Registration No. {companyData.crNumber}, values your privacy. This policy outlines how we collect, store, and process corporate contact and project information submitted through our official website (https://denaliglobalqatar.com).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#0B2035]">2. Information We Collect</h2>
            <p>
              We collect information provided directly by corporate clients, consultants, and contractors when submitting commercial quotation requests or technical enquiries:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Full Name and Professional Title</li>
              <li>Company / Contracting Organization Name</li>
              <li>Corporate Email Address and Telephone Number</li>
              <li>Country of Operation and Project Location</li>
              <li>Equipment Schedules, Bill of Quantities (BOQ), and Engineering Specifications</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#0B2035]">3. How We Use Your Information</h2>
            <p>
              Information collected is used strictly for legitimate B2B business operations:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Preparing itemized commercial quotations and technical submittals</li>
              <li>Coordinating manufacturer lead times, deliveries, and site surveys</li>
              <li>Managing Annual Maintenance Contracts (AMC) and technical commissioning schedules</li>
              <li>Complying with applicable commercial laws in the State of Qatar</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#0B2035]">4. Data Protection &amp; Confidentiality</h2>
            <p>
              We do not sell, rent, or trade your corporate information to third parties. Data is shared only with verified manufacturer engineering teams or authorized logistical partners solely as needed to fulfill your equipment procurement request.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#0B2035]">5. Contact Information</h2>
            <p>
              For any queries concerning this policy or your submitted corporate records, contact our compliance officer at:
            </p>
            <p className="font-semibold text-[#0B2035]">
              Denali Global Trading and Contracting<br />
              {companyData.address.full}<br />
              Email: {companyData.email}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

