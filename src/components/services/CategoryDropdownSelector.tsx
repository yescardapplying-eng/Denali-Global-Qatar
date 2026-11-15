"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { servicesCategories } from "@/data/servicesData";
import {
  ChevronDown,
  Layers,
  Wrench,
  Cpu,
  Gauge,
  RefreshCw,
  ShieldCheck,
  ArrowRight,
  Activity
} from "lucide-react";

interface CategoryDropdownSelectorProps {
  activeSlug?: string;
}

const iconMap: { [key: string]: React.ElementType } = {
  "installation-fitout": Wrench,
  "hvac-mep-contracting": Cpu,
  "design-services": Gauge,
  "retrofit-fabrication": RefreshCw,
  "service-maintenance": ShieldCheck,
};

export default function CategoryDropdownSelector({
  activeSlug,
}: CategoryDropdownSelectorProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activeCategory = servicesCategories.find((c) => c.slug === activeSlug);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (slug: string) => {
    setIsOpen(false);
    router.push(`/services/${slug}`);
  };

  return (
    <div className="w-full flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 py-4 px-4 sm:px-6 bg-white rounded-2xl border border-[#AFC0D2]/40 shadow-xs">
      {/* Category Pills (Desktop) */}
      <div className="hidden lg:flex items-center gap-2 overflow-x-auto pb-1 max-w-4xl">
        <button
          type="button"
          onClick={() => router.push("/services")}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
            !activeSlug
              ? "bg-[#002858] text-[#D8A848]"
              : "bg-[#F4F6F9] text-[#002858] hover:bg-[#AFC0D2]/20"
          }`}
        >
          All Categories
        </button>

        {servicesCategories.map((cat) => {
          const isCurrent = cat.slug === activeSlug;
          const Icon = iconMap[cat.slug] || Layers;

          return (
            <button
              key={cat.slug}
              type="button"
              onClick={() => handleSelect(cat.slug)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                isCurrent
                  ? "bg-[#002858] text-[#D8A848] shadow-xs"
                  : "bg-[#F4F6F9] text-[#002858] hover:bg-[#AFC0D2]/20"
              }`}
            >
              <Icon className="w-3.5 h-3.5 text-[#D8A848]" />
              <span>{cat.name}</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/30 text-current font-normal">
                {cat.subServicesCount}
              </span>
            </button>
          );
        })}

        <button
          type="button"
          onClick={() => router.push("/technical-services")}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap bg-[#F4F6F9] text-[#002858] hover:bg-[#AFC0D2]/20"
        >
          <Activity className="w-3.5 h-3.5 text-[#D8A848]" />
          <span>Denali Technical Services</span>
          <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/30 text-current font-normal">
            TAB &amp; AMC
          </span>
        </button>
      </div>

      {/* Dropdown Selector (Mobile / Tablet & Quick Switcher) */}
      <div className="relative w-full lg:w-72" ref={dropdownRef}>
        <label className="text-[10px] font-bold uppercase tracking-wider text-[#002858] block mb-1">
          Jump to Service Division
        </label>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-[#002858] text-white hover:bg-[#0B1B32] transition-colors text-xs font-bold shadow-xs"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <div className="flex items-center gap-2 truncate">
            <Layers className="w-4 h-4 text-[#D8A848] flex-shrink-0" />
            <span className="truncate">
              {activeCategory ? activeCategory.name : "Select Service Category"}
            </span>
          </div>
          <ChevronDown
            className={`w-4 h-4 text-[#D8A848] transition-transform duration-200 flex-shrink-0 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isOpen && (
          <div className="absolute top-full right-0 mt-1.5 w-full sm:w-80 bg-white rounded-xl shadow-2xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="px-3 py-1.5 border-b border-slate-100 flex items-center justify-between text-[11px] font-bold text-[#002858]">
              <span>5 Service Categories</span>
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  router.push("/services");
                }}
                className="text-[#D8A848] hover:underline"
              >
                View Overview
              </button>
            </div>

            <div className="p-1 space-y-1 max-h-72 overflow-y-auto">
              {servicesCategories.map((cat) => {
                const Icon = iconMap[cat.slug] || Layers;
                const isCurrent = cat.slug === activeSlug;

                return (
                  <button
                    key={cat.slug}
                    type="button"
                    onClick={() => handleSelect(cat.slug)}
                    className={`w-full flex items-start gap-2.5 p-2 rounded-lg text-left transition-colors ${
                      isCurrent
                        ? "bg-[#002858] text-white"
                        : "hover:bg-[#F4F6F9] text-[#002858]"
                    }`}
                  >
                    <div
                      className={`w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        isCurrent
                          ? "bg-white/15 text-[#D8A848]"
                          : "bg-[#002858]/5 text-[#D8A848]"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-xs font-bold truncate ${
                            isCurrent ? "text-white" : "text-[#002858]"
                          }`}
                        >
                          {cat.name}
                        </span>
                        <span
                          className={`text-[10px] px-1.5 py-0.2 rounded font-semibold ml-1 flex-shrink-0 ${
                            isCurrent
                              ? "bg-white/20 text-[#D8A848]"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {cat.subServicesCount}
                        </span>
                      </div>
                      <p
                        className={`text-[10px] line-clamp-1 mt-0.5 ${
                          isCurrent ? "text-slate-200" : "text-slate-500"
                        }`}
                      >
                        {cat.tagline}
                      </p>
                    </div>
                  </button>
                );
              })}

              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  router.push("/technical-services");
                }}
                className="w-full flex items-start gap-2.5 p-2 rounded-lg text-left transition-colors hover:bg-[#F4F6F9] text-[#002858] border-t border-slate-100"
              >
                <div className="w-7 h-7 rounded-md bg-[#D8A848]/20 text-[#002858] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Activity className="w-4 h-4 text-[#D8A848]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold truncate text-[#002858]">
                      Denali Technical Services
                    </span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded font-semibold ml-1 flex-shrink-0 bg-[#D8A848]/20 text-[#002858]">
                      Specialized
                    </span>
                  </div>
                  <p className="text-[10px] line-clamp-1 mt-0.5 text-slate-500">
                    Certified TAB Commissioning, AMC Maintenance &amp; Retrofits
                  </p>
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
