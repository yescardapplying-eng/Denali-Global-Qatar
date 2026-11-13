import React from "react";
import Link from "next/link";
import Image from "next/image";
import { companyData } from "@/data/company";
import { footerQuickLinks1, footerQuickLinks2, legalLinks } from "@/data/navigation";
import { MapPin, Mail, Phone, ExternalLink, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B2035] text-white border-t border-[#1F4965]/60 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#1F4965]/60">
          {/* Column 1: Company Profile & Logo */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block group">
              <div className="bg-white px-3.5 py-2 rounded-xl shadow-sm border border-white/20 inline-flex items-center group-hover:shadow-md transition-all">
                <div className="relative h-10 w-56 sm:w-60" style={{ maxWidth: '240px', maxHeight: '42px', minHeight: '36px' }}>
                  <Image
                    src="/logo/denali-logo-normal.png"
                    alt="Denali Global Trading and Contracting"
                    fill
                    sizes="240px"
                    className="object-contain object-left group-hover:scale-[1.02] transition-transform"
                  />
                </div>
              </div>
            </Link>
            <p className="text-[#A9B7C3] text-sm leading-relaxed pr-4">
              Denali Global Trading and Contracting is a premier Qatar-based engineering solutions provider specializing in integrated HVAC, MEP systems, hydronics, fire protection, and comprehensive technical maintenance services.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#36B8B0] bg-[#102D46] px-3 py-1.5 rounded w-fit border border-[#1F4965]">
              <ShieldCheck className="w-4 h-4 text-[#F2A541]" />
              <span>Commercial Registration CR No. {companyData.crNumber}</span>
            </div>

            {/* Social Icons Placeholders */}
            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider text-[#64748B] block mb-2 font-semibold">
                Connect With Us
              </span>
              <div className="flex items-center space-x-3">
                <a
                  href="#social-linkedin"
                  aria-label="Denali Global on LinkedIn"
                  className="w-9 h-9 rounded-full bg-[#102D46] border border-[#1F4965] flex items-center justify-center text-[#A9B7C3] hover:text-[#F2A541] hover:border-[#F2A541] transition-all"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </a>
                <a
                  href="#social-twitter"
                  aria-label="Denali Global on Twitter/X"
                  className="w-9 h-9 rounded-full bg-[#102D46] border border-[#1F4965] flex items-center justify-center text-[#A9B7C3] hover:text-[#F2A541] hover:border-[#F2A541] transition-all"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href="#social-facebook"
                  aria-label="Denali Global on Facebook"
                  className="w-9 h-9 rounded-full bg-[#102D46] border border-[#1F4965] flex items-center justify-center text-[#A9B7C3] hover:text-[#F2A541] hover:border-[#F2A541] transition-all"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                  </svg>
                </a>
                <a
                  href="#social-instagram"
                  aria-label="Denali Global on Instagram"
                  className="w-9 h-9 rounded-full bg-[#102D46] border border-[#1F4965] flex items-center justify-center text-[#A9B7C3] hover:text-[#F2A541] hover:border-[#F2A541] transition-all"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links 1 */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white border-l-2 border-[#087E8B] pl-2.5">
              Solutions
            </h3>
            <ul className="space-y-2.5 text-sm text-[#A9B7C3]">
              {footerQuickLinks1.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[#F2A541] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#087E8B] text-xs">›</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Navigation Links 2 */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white border-l-2 border-[#F2A541] pl-2.5">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm text-[#A9B7C3]">
              {footerQuickLinks2.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[#F2A541] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#F2A541] text-xs">›</span>
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/technical-services#tab"
                  className="hover:text-[#F2A541] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#F2A541] text-xs">›</span>
                  TAB Commissioning
                </Link>
              </li>
              <li>
                <Link
                  href="/technical-services#amc"
                  className="hover:text-[#F2A541] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#F2A541] text-xs">›</span>
                  AMC Contracts
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office Information */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white border-l-2 border-[#36B8B0] pl-2.5">
              Doha Headquarters
            </h3>
            <div className="space-y-3 text-sm text-[#A9B7C3]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#36B8B0] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Denali Global Trading and Contracting</p>
                  <p className="text-xs leading-relaxed text-[#A9B7C3] mt-0.5">
                    {companyData.address.full}
                  </p>
                  <a
                    href={companyData.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#F2A541] hover:text-[#FFD18A] mt-1 font-semibold"
                  >
                    Open in Google Maps <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#F2A541] flex-shrink-0" />
                <a
                  href={`mailto:${companyData.email}`}
                  className="hover:text-white transition-colors text-xs"
                >
                  {companyData.email}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#36B8B0] flex-shrink-0" />
                <span className="text-xs text-[#64748B]">
                  {companyData.phone} ({companyData.phoneStatus})
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          {/* Copyright & Norweb Attribution */}
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <span>© {companyData.copyrightYear} {companyData.name}. All Rights Reserved.</span>
            <span className="hidden sm:inline">|</span>
            <span>
              Designed by{" "}
              <a
                href={companyData.designer.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#36B8B0] hover:text-[#F2A541] font-semibold underline underline-offset-2 transition-colors"
              >
                {companyData.designer.name}
              </a>
            </span>
          </div>

          {/* Legal Pages Links */}
          <div className="flex flex-wrap items-center gap-4 text-center">
            {legalLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-[#A9B7C3] transition-colors"
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
