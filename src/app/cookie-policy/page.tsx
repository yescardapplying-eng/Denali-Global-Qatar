import React from "react";
import type { Metadata } from "next";
import { companyData } from "@/data/company";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Cookie Policy | Denali Global Trading and Contracting",
  description: "Cookie Policy explaining technical cookies used on the Denali Global website.",
  alternates: {
    canonical: "https://denaliglobalqatar.com/cookie-policy",
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="w-full py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-3 border-b border-[#DCE5EB] pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#087E8B]/10 text-[#087E8B] text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-[#F2A541]" />
            <span>Digital Compliance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0B2035]">
            Cookie Policy
          </h1>
          <p className="text-xs text-[#64748B]">
            Last updated: January 2026 • Denali Global Trading and Contracting (CR No. {companyData.crNumber})
          </p>
        </div>

        <div className="prose prose-slate max-w-none space-y-6 text-sm text-[#64748B] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#0B2035]">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files placed on your device by websites that you visit. They are widely used to make websites function properly, optimize page load speeds, and provide essential session management.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#0B2035]">2. How We Use Cookies</h2>
            <p>
              The Denali Global website uses strictly technical and functional cookies essential for site navigation:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Remembering user filter states across the product directory</li>
              <li>Ensuring security and preventing CSRF vulnerabilities during enquiry form submissions</li>
              <li>Enhancing responsive rendering and font display performance</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#0B2035]">3. Managing Your Cookie Preferences</h2>
            <p>
              Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer. Please note that disabling essential cookies may impact the interactivity of certain product filtering modules.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

