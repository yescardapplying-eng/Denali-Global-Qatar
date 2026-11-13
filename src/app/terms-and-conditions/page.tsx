import React from "react";
import type { Metadata } from "next";
import { companyData } from "@/data/company";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | Denali Global Trading and Contracting",
  description: "Terms and conditions for commercial product quotation, equipment supply, and technical services by Denali Global Trading and Contracting, Doha, Qatar.",
  alternates: {
    canonical: "https://denaliglobalqatar.com/terms-and-conditions",
  },
};

export default function TermsConditionsPage() {
  return (
    <div className="w-full py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-3 border-b border-[#DCE5EB] pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#087E8B]/10 text-[#087E8B] text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-[#F2A541]" />
            <span>Commercial Terms</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0B2035]">
            Terms &amp; Conditions
          </h1>
          <p className="text-xs text-[#64748B]">
            Last updated: January 2026 • Denali Global Trading and Contracting (CR No. {companyData.crNumber})
          </p>
        </div>

        <div className="prose prose-slate max-w-none space-y-6 text-sm text-[#64748B] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#0B2035]">1. Scope of Application</h2>
            <p>
              These Terms &amp; Conditions govern the use of the Denali Global website and establish the general framework for commercial inquiries, product quotation schedules, and technical service requests submitted to Denali Global Trading and Contracting (CR No. {companyData.crNumber}), Doha, Qatar.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#0B2035]">2. Quotations &amp; Product Specifications</h2>
            <p>
              Website catalogue descriptions, performance ratings, and specifications serve informational purposes. Formal commercial contracts are finalized exclusively through signed technical submittals, commercial proposals, and official Purchase Orders agreed between the buyer and Denali Global.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#0B2035]">3. Manufacturer Associations &amp; Warranties</h2>
            <p>
              Products featured on this website are manufactured by respective international partners (such as Rheem, Soler &amp; Palau, Weicco, Hattersley, Frese, Alfa Laval, Patterson Fire Pumps, etc.). Manufacturer warranties are transferred to clients in accordance with standard factory conditions and verified submittal approvals.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#0B2035]">4. Technical Services Scope</h2>
            <p>
              Field engineering, Annual Maintenance Contracts (AMC), retrofits, and Testing, Adjusting &amp; Balancing (TAB) services executed under <strong>{companyData.serviceDivision}</strong> are governed by individual project service level agreements (SLAs) and site access parameters.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#0B2035]">5. Governing Law &amp; Jurisdiction</h2>
            <p>
              These terms shall be interpreted, construed, and enforced in accordance with the laws of the State of Qatar. Any disputes arising in connection with commercial transactions shall be subject to the exclusive jurisdiction of the competent courts of Doha, Qatar.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
