"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { mainNavItems } from "@/data/navigation";
import { companyData } from "@/data/company";
import { Menu, X, Mail, MapPin, Phone, ArrowRight, ShieldCheck } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Corporate Utility Bar */}
      <div className="bg-[#0B2035] text-white border-b border-[#1F4965]/40 text-xs hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-[#A9B7C3] gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#F2A541]" />
              CR No. <strong className="text-white ml-0.5">{companyData.crNumber}</strong>
            </span>
            <span className="flex items-center text-[#A9B7C3] gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#36B8B0]" />
              Doha, Qatar
            </span>
            <a
              href={`mailto:${companyData.email}`}
              className="flex items-center text-[#A9B7C3] hover:text-white transition-colors gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-[#F2A541]" />
              {companyData.email}
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-[#36B8B0] font-medium tracking-wide">
              {companyData.serviceDivision}
            </span>
            <span className="text-[#64748B]">|</span>
            <Link
              href="/contact"
              className="text-[#F2A541] hover:text-[#FFD18A] font-semibold transition-colors flex items-center gap-1"
            >
              Get Quote <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3"
            : "bg-white border-b border-[#DCE5EB] py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Main Horizontal Logo */}
          <Link href="/" className="flex items-center group relative z-10">
            <div className="relative h-11 w-52 sm:h-12 sm:w-64 md:h-13 md:w-72">
              <Image
                src="/logo/denali-logo-horizontal.png"
                alt="Denali Global Trading and Contracting"
                fill
                priority
                sizes="(max-width: 640px) 210px, (max-width: 768px) 260px, 300px"
                className="object-contain object-left transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {mainNavItems.map((item) => {
              const isActive = pathname === item.href;

              if (item.isCta) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="ml-3 px-5 py-2.5 rounded-md btn-amber text-sm font-semibold tracking-wide flex items-center gap-1.5"
                  >
                    <span>Contact Us</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? "text-[#087E8B] font-semibold"
                      : "text-[#102D46] hover:text-[#087E8B] hover:bg-[#F5F8FA]"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#087E8B] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <Link
              href="/contact"
              className="px-3.5 py-1.5 text-xs font-semibold rounded btn-amber"
            >
              Get Quote
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#102D46] hover:bg-[#F5F8FA] focus:outline-none focus:ring-2 focus:ring-[#087E8B]"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#0B2035]" /> : <Menu className="w-6 h-6 text-[#0B2035]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-Out Drawer Navigation */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-[#0B2035]/60 backdrop-blur-sm transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Drawer Content */}
        <div
          className={`fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div>
            {/* Drawer Header */}
            <div className="p-4 border-b border-[#DCE5EB] flex items-center justify-between bg-[#F5F8FA]">
              <div className="relative h-10 w-44">
                <Image
                  src="/logo/denali-logo-horizontal.png"
                  alt="Denali Global"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg text-[#102D46] hover:bg-[#E9EFF3]"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="py-4 px-4 space-y-1 overflow-y-auto max-h-[calc(100vh-220px)]">
              {mainNavItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? "bg-[#087E8B]/10 text-[#087E8B] font-semibold border-l-4 border-[#087E8B]"
                        : "text-[#102D46] hover:bg-[#F5F8FA]"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Drawer Footer */}
          <div className="p-5 border-t border-[#DCE5EB] bg-[#F5F8FA] space-y-3">
            <div className="text-xs text-[#64748B] space-y-1.5">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#F2A541]" />
                <span>CR No. {companyData.crNumber} — Doha, Qatar</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#087E8B]" />
                <a href={`mailto:${companyData.email}`} className="text-[#102D46] font-medium">
                  {companyData.email}
                </a>
              </div>
            </div>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full block text-center py-3 rounded-lg btn-amber text-sm font-semibold tracking-wide"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

