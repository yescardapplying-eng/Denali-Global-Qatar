"use client";

import React, { useState } from "react";
import { companyData } from "@/data/company";
import { Send, CheckCircle2, AlertCircle, ShieldCheck } from "lucide-react";

interface FormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  enquiryType: string;
  productService: string;
  message: string;
  privacyConsent: boolean;
}

export default function ContactForm({ initialProduct = "" }: { initialProduct?: string }) {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    country: "Qatar",
    enquiryType: "Product Quotation",
    productService: initialProduct,
    message: "",
    privacyConsent: false
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "ready_pending_backend" | "error">("idle");

  const validate = (): boolean => {
    const errs: { [key: string]: string } = {};

    if (!formData.fullName.trim()) errs.fullName = "Full Name is required";
    if (!formData.companyName.trim()) errs.companyName = "Company Name is required";
    if (!formData.email.trim()) {
      errs.email = "Email Address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) errs.phone = "Phone Number is required";
    if (!formData.message.trim()) errs.message = "Message details are required";
    if (!formData.privacyConsent) errs.privacyConsent = "Please agree to the privacy policy";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // In Anti-Gravity frontend environment, client email server credentials (SMTP/API) are pending.
    // We validate all fields and simulate honest connection status per prompt instructions:
    // "If no backend credentials are available: Build the frontend form. Clearly identify the missing integration. Do not pretend that email delivery works. Keep the implementation ready for connection."
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("ready_pending_backend");
    }, 700);
  };

  return (
    <div className="bg-white rounded-2xl border border-[#DCE5EB] p-6 sm:p-8 lg:p-10 shadow-xs">
      <div className="mb-8 space-y-2">
        <h3 className="text-2xl font-bold text-[#0B2035]">
          Commercial Project Enquiry
        </h3>
        <p className="text-sm text-[#64748B]">
          Fill in your equipment schedule or project requirements. Our technical sales engineering team will review and respond promptly.
        </p>
      </div>

      {submitStatus === "ready_pending_backend" && (
        <div className="mb-8 p-5 rounded-xl bg-[#F5F8FA] border-2 border-[#087E8B] text-[#0B2035] space-y-3">
          <div className="flex items-center gap-2.5 text-[#087E8B] font-bold text-base">
            <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
            <span>Form Validated & Ready for Dispatch</span>
          </div>
          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
            Your enquiry data has been verified by the validation engine. In this development build, live SMTP/API credentials for <strong className="text-[#0B2035]">{companyData.email}</strong> are awaiting client activation.
          </p>
          <div className="pt-2 flex flex-wrap gap-2 text-xs">
            <a
              href={`mailto:${companyData.email}?subject=${encodeURIComponent(
                `Enquiry: ${formData.enquiryType} - ${formData.companyName}`
              )}&body=${encodeURIComponent(
                `Full Name: ${formData.fullName}\nCompany: ${formData.companyName}\nPhone: ${formData.phone}\nCountry: ${formData.country}\nEnquiry Type: ${formData.enquiryType}\nProduct/Service: ${formData.productService}\n\nMessage:\n${formData.message}`
              )}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded btn-amber font-semibold text-xs"
            >
              <span>Email Direct</span>
              <Send className="w-3.5 h-3.5" />
            </a>
            <button
              type="button"
              onClick={() => setSubmitStatus("idle")}
              className="px-4 py-2 rounded bg-white border border-[#DCE5EB] text-[#102D46] font-semibold text-xs hover:bg-[#F5F8FA]"
            >
              Edit Form
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Full Name */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#102D46] uppercase tracking-wider block">
              Full Name <span className="text-[#D94B4B]">*</span>
            </label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="e.g. Eng. Khalid Al-Thani"
              className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 transition-all ${
                errors.fullName
                  ? "border-[#D94B4B] focus:ring-[#D94B4B]/30"
                  : "border-[#DCE5EB] focus:ring-[#087E8B]/30 focus:border-[#087E8B]"
              }`}
            />
            {errors.fullName && (
              <p className="text-xs text-[#D94B4B]">{errors.fullName}</p>
            )}
          </div>

          {/* Company Name */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#102D46] uppercase tracking-wider block">
              Company / Contracting Organization <span className="text-[#D94B4B]">*</span>
            </label>
            <input
              type="text"
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              placeholder="e.g. Qatar MEP Contracting W.L.L."
              className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 transition-all ${
                errors.companyName
                  ? "border-[#D94B4B] focus:ring-[#D94B4B]/30"
                  : "border-[#DCE5EB] focus:ring-[#087E8B]/30 focus:border-[#087E8B]"
              }`}
            />
            {errors.companyName && (
              <p className="text-xs text-[#D94B4B]">{errors.companyName}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Email Address */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#102D46] uppercase tracking-wider block">
              Corporate Email Address <span className="text-[#D94B4B]">*</span>
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="khalid@contracting.qa"
              className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 transition-all ${
                errors.email
                  ? "border-[#D94B4B] focus:ring-[#D94B4B]/30"
                  : "border-[#DCE5EB] focus:ring-[#087E8B]/30 focus:border-[#087E8B]"
              }`}
            />
            {errors.email && (
              <p className="text-xs text-[#D94B4B]">{errors.email}</p>
            )}
          </div>

          {/* Phone Number */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#102D46] uppercase tracking-wider block">
              Phone Number <span className="text-[#D94B4B]">*</span>
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+974 4400 0000"
              className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 transition-all ${
                errors.phone
                  ? "border-[#D94B4B] focus:ring-[#D94B4B]/30"
                  : "border-[#DCE5EB] focus:ring-[#087E8B]/30 focus:border-[#087E8B]"
              }`}
            />
            {errors.phone && (
              <p className="text-xs text-[#D94B4B]">{errors.phone}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {/* Country */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#102D46] uppercase tracking-wider block">
              Country
            </label>
            <select
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-[#DCE5EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#087E8B]/30 focus:border-[#087E8B] bg-white text-[#0B2035]"
            >
              <option value="Qatar">Qatar</option>
              <option value="United Arab Emirates">United Arab Emirates</option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Oman">Oman</option>
              <option value="Bahrain">Bahrain</option>
              <option value="International">Other / International</option>
            </select>
          </div>

          {/* Enquiry Type */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#102D46] uppercase tracking-wider block">
              Enquiry Type
            </label>
            <select
              value={formData.enquiryType}
              onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-[#DCE5EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#087E8B]/30 focus:border-[#087E8B] bg-white text-[#0B2035]"
            >
              <option value="Product Quotation">Product Quotation</option>
              <option value="Technical Submittal Request">Technical Submittal Request</option>
              <option value="Annual Maintenance (AMC)">Annual Maintenance (AMC)</option>
              <option value="Chiller / AHU Replacement">Chiller / AHU Replacement</option>
              <option value="HVAC Retrofit">HVAC Retrofit</option>
              <option value="Testing & Balancing (TAB)">Testing & Balancing (TAB)</option>
              <option value="General Commercial Inquiry">General Commercial Inquiry</option>
            </select>
          </div>

          {/* Product / Service of Interest */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#102D46] uppercase tracking-wider block">
              Product / Service
            </label>
            <input
              type="text"
              value={formData.productService}
              onChange={(e) => setFormData({ ...formData, productService: e.target.value })}
              placeholder="e.g. Rheem VRF / Frese PICV"
              className="w-full px-4 py-3 rounded-lg border border-[#DCE5EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#087E8B]/30 focus:border-[#087E8B]"
            />
          </div>
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-[#102D46] uppercase tracking-wider block">
            Project Details / Bill of Quantities Summary <span className="text-[#D94B4B]">*</span>
          </label>
          <textarea
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Please specify project name, equipment specifications, required quantities, and target delivery timeframe..."
            className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 transition-all ${
              errors.message
                ? "border-[#D94B4B] focus:ring-[#D94B4B]/30"
                : "border-[#DCE5EB] focus:ring-[#087E8B]/30 focus:border-[#087E8B]"
            }`}
          />
          {errors.message && (
            <p className="text-xs text-[#D94B4B]">{errors.message}</p>
          )}
        </div>

        {/* Privacy Consent Checkbox */}
        <div className="space-y-1">
          <label className="flex items-start gap-2.5 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.privacyConsent}
              onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
              className="mt-0.5 h-4 w-4 rounded border-[#DCE5EB] text-[#087E8B] focus:ring-[#087E8B]"
            />
            <span className="text-xs text-[#64748B] leading-relaxed">
              I consent to Denali Global storing and processing this corporate project enquiry in accordance with the website Privacy Policy.
            </span>
          </label>
          {errors.privacyConsent && (
            <p className="text-xs text-[#D94B4B] pl-6">{errors.privacyConsent}</p>
          )}
        </div>

        {/* Submit Button: Two Words Max */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-8 py-3.5 rounded-md btn-amber text-sm font-semibold tracking-wide flex items-center justify-center gap-2"
          >
            <span>{isSubmitting ? "Validating..." : "Submit Enquiry"}</span>
            <Send className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
}
