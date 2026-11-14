import React from "react";
import Link from "next/link";
import { ArrowRight, Mail, ShieldCheck } from "lucide-react";
import { companyData } from "@/data/company";

export default function CtaBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0B1B32] via-[#002858] to-[#172B45] text-white relative overflow-hidden">
      {/* Decorative Orbits & Glow */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#D8A848]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[#002858]/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-[#D8A848]/40 text-[#D8A848] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D8A848]" />
            <span>Commercial Project Inquiries</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white">
            Let&apos;s Build Better Engineering Solutions.
          </h2>

          <div className="w-16 h-1 bg-[#D8A848] mx-auto rounded-full" />

          <p className="text-base sm:text-lg text-[#AFC0D2] leading-relaxed max-w-2xl mx-auto font-normal">
            Connect with Denali Global to discuss your product requirements, equipment schedules, and engineering enquiries. Our technical team is ready to assist.
          </p>

          {/* Action buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-md btn-gold text-base font-bold tracking-wide flex items-center gap-2 shadow-lg"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/products"
              className="px-8 py-4 rounded-md bg-white/10 hover:bg-white/20 text-white border border-[#AFC0D2]/40 text-base font-bold tracking-wide backdrop-blur-sm transition-all"
            >
              <span>View Products</span>
            </Link>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-[#AFC0D2]">
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#D8A848]" />
              {companyData.email}
            </span>
            <span>•</span>
            <span>Doha, Qatar — {companyData.crNumber}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
