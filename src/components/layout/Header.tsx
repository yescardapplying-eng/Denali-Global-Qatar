"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { mainNavItems, serviceNavCategories } from "@/data/navigation";
import { companyData } from "@/data/company";
import {
  Menu,
  X,
  Mail,
  MapPin,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  ChevronRight,
  Wrench,
  Cpu,
  Gauge,
  RefreshCw,
  Layers,
  Activity
} from "lucide-react";

const categoryIconMap: { [key: string]: React.ElementType } = {
  "/services/installation-fitout": Wrench,
  "/services/hvac-mep-contracting": Cpu,
  "/services/design-services": Gauge,
  "/services/retrofit-fabrication": RefreshCw,
  "/services/service-maintenance": ShieldCheck,
  "/technical-services": Activity,
};

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
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

  // Close mobile menu and dropdown on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimerRef.current) {
      clearTimeout(dropdownTimerRef.current);
    }
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 200);
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Corporate Utility Bar */}
      <div className="bg-[#0B1B32] text-white border-b border-[#002858]/60 text-xs hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-[#AFC0D2] gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D8A848]" />
              {companyData.crNumber}
            </span>
            <span className="flex items-center text-[#AFC0D2] gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#D8A848]" />
              Doha, Qatar
            </span>
            <a
              href={`mailto:${companyData.email}`}
              className="flex items-center text-[#AFC0D2] hover:text-[#D8A848] transition-colors gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-[#D8A848]" />
              {companyData.email}
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-[#D8A848] font-semibold tracking-wide uppercase text-[11px]">
              {companyData.serviceDivision}
            </span>
            <span className="text-white/20">|</span>
            <Link
              href="/contact"
              className="text-[#D8A848] hover:text-white font-semibold transition-colors flex items-center gap-1"
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
            ? "bg-white/98 backdrop-blur-md shadow-md py-2.5"
            : "bg-white border-b border-[#AFC0D2]/40 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-3 w-full">
          {/* Main Horizontal Logo */}
          <Link
            href="/"
            className="flex items-center min-w-0 flex-shrink group relative z-10"
            aria-label="Denali Global Home"
          >
            <div className="relative h-9 w-40 sm:h-12 sm:w-60 md:h-14 md:w-72 lg:h-16 lg:w-80 max-w-[58vw] sm:max-w-none">
              <Image
                src="/logo/denali-logo-horizontal.png"
                alt="Denali Global Trading and Contracting"
                fill
                priority
                sizes="(max-width: 640px) 180px, 320px"
                className="object-contain object-left transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {mainNavItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              if (item.isCta) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="ml-3 px-5 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider btn-primary"
                  >
                    {item.name}
                  </Link>
                );
              }

              // Dropdown for Our Services
              if (item.hasDropdown) {
                return (
                  <div
                    key={item.href}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setServicesDropdownOpen(false)}
                      className={`px-3 py-2 text-xs xl:text-sm font-semibold rounded-md transition-colors inline-flex items-center gap-1 ${
                        isActive
                          ? "text-[#D8A848] font-bold"
                          : "text-[#002858] hover:text-[#D8A848]"
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          servicesDropdownOpen ? "rotate-180 text-[#D8A848]" : ""
                        }`}
                      />
                    </Link>

                    {/* Desktop Dropdown Flyout Panel */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-xl shadow-2xl border border-slate-100 py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="px-4 py-2 border-b border-slate-100 flex items-center justify-between">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[#002858]">
                            Service Divisions
                          </span>
                          <span className="text-[10px] font-semibold text-[#D8A848] bg-[#D8A848]/10 px-2 py-0.5 rounded-full">
                            Specialized Divisions
                          </span>
                        </div>

                        <div className="p-1 space-y-1">
                          {serviceNavCategories.map((sub) => {
                            const IconComponent = categoryIconMap[sub.href] || Layers;
                            const isSubActive = pathname === sub.href;

                            return (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                onClick={() => setServicesDropdownOpen(false)}
                                className={`flex items-start gap-3 p-2.5 rounded-lg transition-all group/item ${
                                  isSubActive
                                    ? "bg-[#002858]/5 text-[#D8A848]"
                                    : "hover:bg-[#F4F6F9] text-[#002858]"
                                }`}
                              >
                                <div className="w-8 h-8 rounded-md bg-[#002858]/5 group-hover/item:bg-[#D8A848]/20 text-[#002858] group-hover/item:text-[#002858] flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors">
                                  <IconComponent className="w-4 h-4 text-[#D8A848]" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between">
                                    <span className="text-xs font-bold text-[#002858] group-hover/item:text-[#D8A848] transition-colors truncate">
                                      {sub.name}
                                    </span>
                                    {sub.count && (
                                      <span className="text-[10px] font-semibold text-[#172B45]/60 bg-slate-100 px-1.5 py-0.2 rounded ml-1 flex-shrink-0">
                                        {sub.count}
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-[11px] text-[#172B45]/70 line-clamp-1 mt-0.5">
                                    {sub.desc}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>

                        <div className="pt-2 px-3 border-t border-slate-100 mt-1">
                          <Link
                            href="/services"
                            onClick={() => setServicesDropdownOpen(false)}
                            className="flex items-center justify-between p-2 rounded-lg bg-[#002858] text-white hover:bg-[#D8A848] hover:text-[#002858] transition-colors text-xs font-bold text-center"
                          >
                            <span>View Services</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-xs xl:text-sm font-semibold rounded-md transition-colors ${
                    isActive
                      ? "text-[#D8A848] font-bold"
                      : "text-[#002858] hover:text-[#D8A848]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu & Quote Buttons */}
          <div className="flex lg:hidden items-center space-x-2 sm:space-x-3 flex-shrink-0">
            <Link
              href="/contact"
              className="px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded text-xs font-bold btn-primary whitespace-nowrap"
            >
              Quote
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 rounded-md text-[#002858] hover:text-[#D8A848] hover:bg-[#F4F6F9] focus:outline-none flex-shrink-0"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[56px] sm:top-[66px] bottom-0 bg-white z-40 border-t border-slate-200 overflow-y-auto overflow-x-hidden px-5 sm:px-6 py-5 sm:py-6 flex flex-col justify-between shadow-2xl w-full max-w-full">
          <div className="space-y-2">
            <p className="text-xs font-bold text-[#D8A848] uppercase tracking-wider mb-2">
              Menu Navigation
            </p>

            {mainNavItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              if (item.hasDropdown) {
                return (
                  <div key={item.href} className="border border-slate-100 rounded-lg overflow-hidden bg-slate-50/50">
                    <div className="flex items-center justify-between p-3 bg-white">
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`text-base font-bold transition-colors ${
                          isActive ? "text-[#D8A848]" : "text-[#002858]"
                        }`}
                      >
                        {item.name}
                      </Link>
                      <button
                        type="button"
                        onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                        className="p-1 text-[#002858] hover:text-[#D8A848]"
                        aria-label="Toggle Services List"
                      >
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-200 ${
                            mobileServicesExpanded ? "rotate-180 text-[#D8A848]" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {mobileServicesExpanded && (
                      <div className="p-2 space-y-1 bg-slate-50 border-t border-slate-100">
                        {serviceNavCategories.map((sub) => {
                          const IconComponent = categoryIconMap[sub.href] || Layers;
                          const isSubActive = pathname === sub.href;

                          return (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`flex items-center justify-between p-2.5 rounded-md text-xs font-semibold transition-colors ${
                                isSubActive
                                  ? "bg-[#002858] text-[#D8A848]"
                                  : "text-[#002858] hover:bg-white"
                              }`}
                            >
                              <div className="flex items-center gap-2 min-w-0">
                                <IconComponent className="w-3.5 h-3.5 text-[#D8A848] flex-shrink-0" />
                                <span className="truncate">{sub.name}</span>
                              </div>
                              {sub.count && (
                                <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/40 text-[#002858] font-bold flex-shrink-0">
                                  {sub.count}
                                </span>
                              )}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-3 px-4 rounded-lg text-base font-semibold transition-colors ${
                    isActive
                      ? "bg-[#002858] text-[#D8A848]"
                      : "text-[#002858] hover:bg-[#F4F6F9]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-6 border-t border-slate-200 space-y-3 text-xs text-[#172B45] mt-6">
            <p className="font-bold text-[#002858]">{companyData.name}</p>
            <p>{companyData.address.full}</p>
            <p className="text-[#D8A848] font-semibold">{companyData.crNumber}</p>
            <div className="pt-2">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full block py-3 rounded-md text-center text-sm font-bold btn-primary"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
