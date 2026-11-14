import React from "react";
import Link from "next/link";
import Image from "next/image";
import { companyData } from "@/data/company";
import { footerQuickLinks1, footerQuickLinks2, legalLinks } from "@/data/navigation";
import { MapPin, Mail, Phone, ExternalLink, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B1B32] text-white border-t border-[#002858]/60 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Column 1: Company Profile & Transparent White Logo (No white box) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block group" aria-label="Denali Global Home">
              <div className="relative h-16 w-72 sm:w-80">
                <Image
                  src="/logo/denali-logo-white-transparent.png"
                  alt="Denali Global Trading and Contracting"
                  fill
                  sizes="320px"
                  className="object-contain object-left group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            </Link>
            <p className="text-white/80 text-sm leading-relaxed pr-4 pt-1">
              Denali Global Trading and Contracting is a premier Qatar-based engineering solutions provider specializing in integrated HVAC, MEP systems, hydronics, fire protection, and comprehensive technical maintenance services.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#D8A848] bg-[#002858]/80 px-3 py-1.5 rounded w-fit border border-[#D8A848]/30">
              <ShieldCheck className="w-4 h-4 text-[#D8A848]" />
              <span className="font-semibold">{companyData.crNumber}</span>
            </div>
          </div>

          {/* Column 2: Navigation Links 1 (Solutions) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider !text-white border-l-2 border-[#D8A848] pl-2.5">
              Solutions
            </h3>
            <ul className="space-y-2.5 text-sm text-white/80">
              {footerQuickLinks1.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:!text-[#D8A848] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#D8A848] text-xs">›</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Navigation Links 2 (Company & FAQs) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider !text-white border-l-2 border-[#D8A848] pl-2.5">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm text-white/80">
              {footerQuickLinks2.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:!text-[#D8A848] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#D8A848] text-xs">›</span>
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/faqs"
                  className="hover:!text-[#D8A848] transition-colors flex items-center gap-1.5 font-semibold text-[#D8A848]"
                >
                  <span className="text-[#D8A848] text-xs">›</span>
                  FAQs Center
                </Link>
              </li>
              <li>
                <Link
                  href="/technical-services#tab"
                  className="hover:!text-[#D8A848] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#D8A848] text-xs">›</span>
                  TAB Commissioning
                </Link>
              </li>
              <li>
                <Link
                  href="/technical-services#amc"
                  className="hover:!text-[#D8A848] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#D8A848] text-xs">›</span>
                  AMC Contracts
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office Information */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider !text-white border-l-2 border-[#D8A848] pl-2.5">
              Doha Headquarters
            </h3>
            <div className="space-y-3 text-sm text-white/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D8A848] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">Denali Global Trading and Contracting</p>
                  <p className="text-xs leading-relaxed text-white/70 mt-0.5">
                    {companyData.address.full}
                  </p>
                  <a
                    href={companyData.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#D8A848] hover:text-white mt-1 font-semibold transition-colors"
                  >
                    Open in Google Maps <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#D8A848] flex-shrink-0" />
                <a
                  href={`mailto:${companyData.email}`}
                  className="hover:text-white transition-colors text-xs text-white/90"
                >
                  {companyData.email}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D8A848] flex-shrink-0" />
                <span className="text-xs text-white/80">
                  {companyData.phone} ({companyData.phoneStatus})
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar - Designed by Noorweb completely REMOVED */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/70">
          <div className="text-center sm:text-left">
            <span>© {companyData.copyrightYear} {companyData.name}. All Rights Reserved.</span>
          </div>

          {/* Legal Pages Links */}
          <div className="flex flex-wrap items-center gap-4 text-center">
            {legalLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
