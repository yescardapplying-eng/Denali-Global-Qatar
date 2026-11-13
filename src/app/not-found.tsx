import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 bg-[#F5F8FA]">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 sm:p-10 rounded-2xl border border-[#DCE5EB] shadow-xs">
        <div className="w-16 h-16 rounded-full bg-[#087E8B]/10 text-[#087E8B] flex items-center justify-center mx-auto text-2xl font-bold font-mono">
          404
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-[#0B2035]">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
            The engineering document or page you are requesting could not be located on the Denali Global server.
          </p>
        </div>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-2.5 rounded-md btn-amber text-xs font-semibold flex items-center justify-center gap-1.5"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
          <Link
            href="/products"
            className="w-full sm:w-auto px-6 py-2.5 rounded-md bg-[#102D46] hover:bg-[#0B2035] text-white text-xs font-semibold flex items-center justify-center gap-1.5"
          >
            <Search className="w-4 h-4" />
            <span>View Products</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

