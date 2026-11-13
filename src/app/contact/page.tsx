import React, { Suspense } from "react";
import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { companyData } from "@/data/company";
import { contactFaqs } from "@/data/faqs";
import { MapPin, Mail, Phone, ExternalLink, ShieldCheck, Clock, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Denali Global Trading and Contracting Doha, Qatar",
  description: "Contact Denali Global in Doha, Qatar. Office No. 01/05, First Floor, Building 20, Street 854, Zone 27, Umm Ghuwailina Area. CR No. 255619. Commercial quotations and engineering enquiries.",
  alternates: {
    canonical: "https://denaliglobalqatar.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Page Hero */}
      <section className="relative py-24 bg-[#0B2035] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#36B8B0_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#087E8B]/30 border border-[#36B8B0]/40 text-[#36B8B0] text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#F2A541]" />
              <span>Doha Headquarters</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Connect with Denali Global
            </h1>
            <p className="text-lg sm:text-xl text-[#A9B7C3] leading-relaxed font-normal">
              Reach out to our commercial engineering and technical estimation departments in Doha, Qatar for equipment schedules, technical submittals, and site surveys.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-[#F5F8FA] border-b border-[#DCE5EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Office Details & Map */}
            <div className="lg:col-span-5 space-y-8">
              {/* Corporate Information Card */}
              <div className="bg-white rounded-2xl border border-[#DCE5EB] p-6 sm:p-8 space-y-6 shadow-xs">
                <div className="border-b border-[#DCE5EB] pb-4">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#087E8B]/10 text-[#087E8B] text-xs font-bold mb-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#F2A541]" />
                    <span>CR No. {companyData.crNumber}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-[#0B2035]">
                    {companyData.name}
                  </h2>
                  <p className="text-xs text-[#64748B] mt-0.5">
                    Engineering, Trading &amp; Contracting Division
                  </p>
                </div>

                <div className="space-y-4 text-sm">
                  {/* Address */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-[#087E8B]/10 text-[#087E8B] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-xs uppercase tracking-wider text-[#102D46] font-bold">
                        Corporate Office Address
                      </strong>
                      <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed mt-1">
                        {companyData.address.office}, {companyData.address.floor},<br />
                        {companyData.address.building}, {companyData.address.street},<br />
                        {companyData.address.zone}, {companyData.address.area},<br />
                        {companyData.address.city}, {companyData.address.country}
                      </p>
                      <a
                        href={companyData.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-[#087E8B] hover:text-[#0B2035] font-semibold mt-2"
                      >
                        <span>View Directions</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3.5 pt-2 border-t border-[#F5F8FA]">
                    <div className="w-10 h-10 rounded-lg bg-[#F2A541]/10 text-[#F2A541] flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#0B2035]" />
                    </div>
                    <div>
                      <strong className="block text-xs uppercase tracking-wider text-[#102D46] font-bold">
                        Official Business Email
                      </strong>
                      <a
                        href={`mailto:${companyData.email}`}
                        className="text-xs sm:text-sm font-semibold text-[#087E8B] hover:underline"
                      >
                        {companyData.email}
                      </a>
                      <span className="block text-[11px] text-[#A9B7C3] mt-0.5">
                        (Client requested official business channel)
                      </span>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3.5 pt-2 border-t border-[#F5F8FA]">
                    <div className="w-10 h-10 rounded-lg bg-[#102D46]/10 text-[#102D46] flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-xs uppercase tracking-wider text-[#102D46] font-bold">
                        Direct Telephone
                      </strong>
                      <p className="text-xs text-[#64748B] mt-0.5">
                        {companyData.phone}
                      </p>
                      <span className="text-[11px] text-[#A9B7C3]">
                        Pending client confirmation &amp; telecom activation
                      </span>
                    </div>
                  </div>

                  {/* Office Hours */}
                  <div className="flex items-start gap-3.5 pt-2 border-t border-[#F5F8FA]">
                    <div className="w-10 h-10 rounded-lg bg-[#36B8B0]/10 text-[#36B8B0] flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-[#087E8B]" />
                    </div>
                    <div>
                      <strong className="block text-xs uppercase tracking-wider text-[#102D46] font-bold">
                        Business Hours (Qatar Time, GMT+3)
                      </strong>
                      <p className="text-xs text-[#64748B] mt-0.5">
                        Sunday – Thursday: 7:30 AM – 5:00 PM<br />
                        Friday &amp; Saturday: Closed (Emergency AMC On-Call)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Embedded Address-Based Google Maps */}
              <div className="bg-white rounded-2xl border border-[#DCE5EB] overflow-hidden shadow-xs">
                <div className="p-4 bg-[#F5F8FA] border-b border-[#DCE5EB] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#102D46] uppercase tracking-wider">
                    Interactive Location Map
                  </span>
                  <a
                    href={companyData.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#087E8B] hover:text-[#0B2035] font-semibold flex items-center gap-1"
                  >
                    <span>Full Map</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="relative w-full h-72 sm:h-80 bg-[#E9EFF3]">
                  <iframe
                    title="Denali Global Trading and Contracting Location Map"
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(
                      companyData.mapsEmbedQuery
                    )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Commercial Enquiry Form */}
            <div className="lg:col-span-7">
              <Suspense fallback={<div className="p-8 bg-white rounded-2xl">Loading form...</div>}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* Exactly 3 Inner Page FAQs */}
      <FAQAccordion
        items={contactFaqs}
        title="Contact &amp; Enquiry FAQs"
        subtitle="Frequently asked questions on formal quotes, site inspections, and emergency AMC dispatch."
        badge="Commercial Queries"
      />
    </div>
  );
}

