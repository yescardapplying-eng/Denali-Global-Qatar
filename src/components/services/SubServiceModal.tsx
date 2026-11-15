"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { SubService } from "@/data/servicesData";
import {
  X,
  CheckCircle2,
  ShieldCheck,
  FileText,
  ArrowRight,
  Sparkles
} from "lucide-react";

interface SubServiceModalProps {
  subService: SubService | null;
  categoryName: string;
  onClose: () => void;
}

export default function SubServiceModal({
  subService,
  categoryName,
  onClose
}: SubServiceModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (subService) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [subService, onClose]);

  if (!subService) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto overflow-x-hidden border border-slate-200 relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md z-10 px-6 py-5 border-b border-slate-100 flex items-start justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#D8A848]/15 text-[#002858] text-[11px] font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3 h-3 text-[#D8A848]" />
              <span>{categoryName}</span>
            </div>
            <h3
              id="modal-title"
              className="text-xl sm:text-2xl font-bold text-[#002858] leading-tight"
            >
              {subService.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-[#002858] hover:bg-slate-100 transition-colors flex-shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Detailed Overview */}
          <div>
            <h4 className="text-xs font-bold text-[#002858] uppercase tracking-wider mb-2">
              Engineering Overview
            </h4>
            <p className="text-sm sm:text-base text-[#172B45] leading-relaxed">
              {subService.fullDesc}
            </p>
          </div>

          {/* Scope of Work */}
          <div>
            <h4 className="text-xs font-bold text-[#002858] uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#D8A848]" />
              <span>Scope of Execution &amp; Works</span>
            </h4>
            <div className="space-y-2 bg-[#F4F6F9] p-4 rounded-xl border border-[#AFC0D2]/30">
              {subService.scope.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#002858]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D8A848] mt-1.5 flex-shrink-0" />
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Standards & Compliance */}
          {subService.standards && subService.standards.length > 0 && (
            <div>
              <h4 className="text-xs font-bold text-[#002858] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#002858]" />
                <span>Applicable Standards &amp; Codes</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {subService.standards.map((std, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-md bg-[#002858]/5 border border-[#AFC0D2]/40 text-[#002858]"
                  >
                    {std}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Key Deliverables */}
          {subService.deliverables && subService.deliverables.length > 0 && (
            <div>
              <h4 className="text-xs font-bold text-[#002858] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-[#D8A848]" />
                <span>Handover Deliverables</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#172B45]">
                {subService.deliverables.map((deliv, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#002858] flex-shrink-0" />
                    <span className="font-medium truncate">{deliv}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="sticky bottom-0 bg-white/95 backdrop-blur-md px-6 py-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            Close
          </button>

          <Link
            href={`/contact?service=${encodeURIComponent(subService.title)}`}
            onClick={onClose}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md btn-gold text-xs font-bold tracking-wide uppercase shadow-sm"
          >
            <span>Request Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
