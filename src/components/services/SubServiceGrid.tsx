"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SubService } from "@/data/servicesData";
import SubServiceModal from "./SubServiceModal";
import {
  Snowflake,
  Fan,
  Wind,
  Activity,
  RefreshCw,
  Flame,
  Cpu,
  Server,
  Layers,
  Maximize,
  ShieldAlert,
  GitBranch,
  Shield,
  CheckCircle2,
  Building2,
  Thermometer,
  Calculator,
  Sun,
  Box,
  ShieldCheck,
  Pipette,
  ArrowRight,
  Eye,
  LucideIcon
} from "lucide-react";

const iconMap: { [key: string]: LucideIcon } = {
  Snowflake,
  Fan,
  Wind,
  Activity,
  RefreshCw,
  Flame,
  Cpu,
  Server,
  Layers,
  Maximize,
  ShieldAlert,
  GitBranch,
  Shield,
  CheckCircle2,
  Building2,
  Thermometer,
  Calculator,
  Sun,
  Box,
  ShieldCheck,
  Pipette,
};

interface SubServiceGridProps {
  subServices: SubService[];
  categoryName: string;
}

export default function SubServiceGrid({
  subServices,
  categoryName,
}: SubServiceGridProps) {
  const [selectedService, setSelectedService] = useState<SubService | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = subServices.filter((srv) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      srv.title.toLowerCase().includes(q) ||
      srv.shortDesc.toLowerCase().includes(q) ||
      srv.scope.some((s) => s.toLowerCase().includes(q))
    );
  });

  return (
    <div className="w-full space-y-8">
      {/* Sub-Services Search / Count Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded-xl bg-white border border-[#AFC0D2]/40 shadow-xs">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#002858]">
            Available Capabilities
          </span>
          <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#D8A848]/20 text-[#002858]">
            {filteredServices.length} {filteredServices.length === 1 ? "Service" : "Services"}
          </span>
        </div>

        {subServices.length > 4 && (
          <div className="relative sm:w-64">
            <input
              type="text"
              placeholder="Search in this category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-1.5 text-xs rounded-md border border-[#AFC0D2]/60 focus:border-[#D8A848] focus:ring-1 focus:ring-[#D8A848] focus:outline-none transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
              >
                Clear
              </button>
            )}
          </div>
        )}
      </div>

      {/* Grid of Sub-Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((sub, index) => {
          const IconComponent = iconMap[sub.icon] || Cpu;

          return (
            <div
              key={sub.id}
              className="group bg-white rounded-xl border border-[#AFC0D2]/40 hover:border-[#D8A848] p-6 flex flex-col justify-between transition-all duration-300 denali-card shadow-xs hover:shadow-md relative overflow-hidden"
            >
              <div className="space-y-4">
                {/* Header Icon + Number Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#002858]/5 group-hover:bg-[#D8A848] group-hover:text-[#002858] text-[#002858] flex items-center justify-center transition-all duration-300 border border-[#AFC0D2]/30">
                    <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-400 font-mono">
                    #{String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-lg font-bold text-[#002858] group-hover:text-[#D8A848] transition-colors leading-snug">
                    {sub.title}
                  </h3>
                  <p className="text-xs text-[#172B45] leading-relaxed mt-2 line-clamp-3">
                    {sub.shortDesc}
                  </p>
                </div>

                {/* Scope Highlights Preview */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#002858]/70 block">
                    Key Execution Scope:
                  </span>
                  {sub.scope.slice(0, 2).map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-[11px] text-[#172B45]/90"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D8A848] flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-2 leading-tight">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Standards Pills */}
                {sub.standards && sub.standards.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {sub.standards.slice(0, 2).map((std, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#F4F6F9] border border-[#AFC0D2]/40 text-[#002858]"
                      >
                        {std}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Buttons: 2 Words Max */}
              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedService(sub)}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md bg-[#002858]/5 hover:bg-[#002858] text-[#002858] hover:text-white text-xs font-bold transition-all"
                  aria-label={`View details for ${sub.title}`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Details</span>
                </button>

                <Link
                  href={`/contact?service=${encodeURIComponent(sub.title)}`}
                  className="inline-flex items-center gap-1 px-3 py-2 rounded-md btn-gold text-xs font-bold uppercase tracking-wider shadow-xs"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {filteredServices.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl border border-dashed border-slate-200">
          <p className="text-sm text-slate-500 font-medium">
            No services matching &ldquo;{searchQuery}&rdquo;
          </p>
          <button
            type="button"
            onClick={() => setSearchQuery("")}
            className="mt-3 text-xs font-bold text-[#D8A848] hover:underline"
          >
            Clear Search
          </button>
        </div>
      )}

      {/* Modal Dialog */}
      <SubServiceModal
        subService={selectedService}
        categoryName={categoryName}
        onClose={() => setSelectedService(null)}
      />
    </div>
  );
}
