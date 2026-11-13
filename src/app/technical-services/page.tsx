import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CtaBanner from "@/components/home/CtaBanner";
import { technicalServicesFaqs } from "@/data/faqs";
import { companyData } from "@/data/company";
import {
  Wrench,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Activity,
  RefreshCw,
  SlidersHorizontal,
  Wind,
  Gauge,
  Volume2,
  Flame,
  FileCheck
} from "lucide-react";

export const metadata: Metadata = {
  title: "Denali Technical Services | HVAC Maintenance, Retrofit & TAB Qatar",
  description: "Specialized engineering division in Doha, Qatar providing Annual Maintenance Contracts (AMC), commercial equipment replacement, energy retrofits, and certified Testing, Adjusting & Balancing (TAB).",
  alternates: {
    canonical: "https://denaliglobalqatar.com/technical-services",
  },
};

export default function TechnicalServicesPage() {
  const amcScope = [
    "Indoor and outdoor unit comprehensive washing",
    "High-efficiency air filter sanitization & replacement",
    "Chemical cleaning of evaporator & condenser coils",
    "Inspection & diagnosis of abnormal operating sounds",
    "Refrigerant leak detection & charge verification",
    "Suction and discharge pressure log calibration",
    "Compressor electrical load & winding insulation testing",
    "Fan motor bearing lubrication & alignment checks",
    "Power, safety, and control wiring terminal tightening",
    "Condensate drainage pan & trap blockage clearing",
    "Detailed preventive maintenance logging & reporting",
    "24/7 priority emergency dispatch response"
  ];

  const replacementScope = [
    "On-site HVAC plant inspection & lifecycle assessment",
    "Thermal imaging and room temperature evaluation",
    "Supply and return grille temperature differential analysis",
    "Operating parameter efficiency logging",
    "Full package unit & modular chiller replacement recommendations",
    "Semi-hermetic & scroll compressor replacement",
    "Custom heavy-gauge condenser coil fabrication & replacement",
    "High-performance evaporator coil upgrades",
    "Rigging, crane lifting, and rooftop transport coordination",
    "System vacuuming, nitrogen leak pressure testing & commissioning"
  ];

  const retrofitScope = [
    "Baseline energy efficiency & COP evaluation",
    "Variable Frequency Drive (VFD) installation on pumps and fans",
    "Electronically Commutated (EC) backward-curved plug fan upgrades",
    "Refrigerant compatibility evaluation (including R-410A conversions)",
    "Compressor protection logic and soft-starter installations",
    "BMS direct digital control (DDC) sensor integration",
    "Operating and maintenance cost optimization",
    "Acoustic noise reduction and vibration dampening"
  ];

  const tabCategories = [
    {
      title: "A. Air & Water Balancing",
      desc: "Comprehensive balancing of air distribution networks, AHUs, FCUs, and hydronic chilled water circuits.",
      equipment: [
        "Electronic Capture Hood (Balometer)",
        "Digital Hydronic Manometer",
        "Rotating Vane Anemometer",
        "Hot-Wire Thermal Anemometer",
        "High-Precision Digital Micromanometer"
      ],
      icon: SlidersHorizontal
    },
    {
      title: "B. Duct Leakage Testing",
      desc: "Quantifying air leakage in high, medium, and low pressure ductwork conforming to SMACNA HVAC Air Duct Leakage standards.",
      equipment: ["Calibrated Duct Leakage Tester with Orifice Tube & Manometer"],
      icon: Wind
    },
    {
      title: "C. Indoor Air Quality (IAQ) Testing",
      desc: "Measuring particulate concentration, CO2 levels, carbon monoxide, temperature, and relative humidity for occupant wellness.",
      equipment: ["Multi-Sensor Indoor Air Quality Meter & Particle Counter"],
      icon: Activity
    },
    {
      title: "D. Sound & Vibration Testing",
      desc: "Acoustic decibel logging and vibration amplitude analysis to prevent structure-borne mechanical noise.",
      equipment: ["Type 1 Precision Sound Level Meter", "Digital Vibration FFT Analyzer"],
      icon: Volume2
    },
    {
      title: "E. Smoke & Airflow Visualization Testing",
      desc: "Visualizing air containment, cleanroom laminar flows, and smoke evacuation dynamics under actual operational velocities.",
      equipment: ["Non-Toxic Glycol Smoke Generator Machine"],
      icon: Flame
    }
  ];

  return (
    <div className="w-full">
      {/* Page Hero */}
      <section className="relative py-24 bg-[#0B2035] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#36B8B0_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#087E8B]/30 border border-[#36B8B0]/40 text-[#36B8B0] text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#F2A541]" />
              <span>{companyData.serviceDivision}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Engineering Maintenance, Overhauls &amp; TAB Commissioning
            </h1>
            <p className="text-lg sm:text-xl text-[#A9B7C3] leading-relaxed font-normal">
              A specialized mobile engineering division operating across Qatar, safeguarding mechanical performance, prolonging equipment lifespans, and certifying system balancing.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Container */}
      <div className="py-20 space-y-28">
        {/* SERVICE 01 – ANNUAL MAINTENANCE CONTRACT (AMC) */}
        <section id="amc" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#087E8B]/10 text-[#087E8B] text-xs font-bold uppercase tracking-wider">
                <span>Service Division 01</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B2035]">
                Annual Maintenance Contracts (AMC)
              </h2>
              <p className="text-[#64748B] text-base leading-relaxed">
                Denali Technical Services offers tailored comprehensive and non-comprehensive preventive maintenance agreements. Our scheduled inspections keep commercial split ACs, ducted units, rooftop packages, ventilation blowers, and CO systems operating at peak efficiency in Qatar&apos;s harsh climate.
              </p>

              <div className="space-y-2 pt-2">
                <h3 className="text-sm font-bold text-[#0B2035] uppercase tracking-wider">
                  Preventive Maintenance Scope:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#102D46]">
                  {amcScope.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#087E8B] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Two Words CTA */}
              <div className="pt-4">
                <Link
                  href="/contact?service=Annual+Maintenance+Contract"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md btn-amber text-sm font-semibold tracking-wide"
                >
                  <span>Request AMC</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden border border-[#DCE5EB] shadow-md group">
                <Image
                  src="/services/service-amc.jpg"
                  alt="Annual Maintenance Contract HVAC technician servicing control panel"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2035]/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 px-3.5 py-1.5 rounded-lg bg-[#0B2035]/85 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold">
                  Scheduled Preventive Maintenance
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICE 02 – EQUIPMENT REPLACEMENT */}
        <section id="replacement" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 lg:order-2 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F2A541]/15 text-[#0B2035] text-xs font-bold uppercase tracking-wider">
                <span>Service Division 02</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B2035]">
                HVAC Equipment Replacement
              </h2>
              <p className="text-[#64748B] text-base leading-relaxed">
                When equipment reaches end-of-life or suffers catastrophic failure, Denali delivers turnkey engineering replacement solutions. We perform comprehensive diagnostics, evaluate room and grille Delta-T performance, and execute seamless swaps with minimal operational downtime.
              </p>

              <div className="space-y-2 pt-2">
                <h3 className="text-sm font-bold text-[#0B2035] uppercase tracking-wider">
                  Replacement Engineering Scope:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#102D46]">
                  {replacementScope.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F2A541] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Two Words CTA */}
              <div className="pt-4">
                <Link
                  href="/contact?service=Equipment+Replacement"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md btn-amber text-sm font-semibold tracking-wide"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 lg:order-1">
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden border border-[#DCE5EB] shadow-md group">
                <Image
                  src="/services/service-replacement.jpg"
                  alt="HVAC technicians replacing commercial compressor equipment"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2035]/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 px-3.5 py-1.5 rounded-lg bg-[#0B2035]/85 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold">
                  Turnkey Chiller &amp; AHU Overhauls
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICE 03 – HVAC RETROFIT SOLUTIONS */}
        <section id="retrofit" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#087E8B]/10 text-[#087E8B] text-xs font-bold uppercase tracking-wider">
                <span>Service Division 03</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B2035]">
                HVAC Retrofit &amp; Modernization
              </h2>
              <p className="text-[#64748B] text-base leading-relaxed">
                Extend mechanical asset life and slash power consumption by upgrading older systems with cutting-edge engineering retrofits. We implement intelligent variable speed drives, high-efficiency plug fan assemblies, and modern refrigerant compatibility protocols.
              </p>

              <div className="space-y-2 pt-2">
                <h3 className="text-sm font-bold text-[#0B2035] uppercase tracking-wider">
                  Modernization Capabilities:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#102D46]">
                  {retrofitScope.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#087E8B] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Two Words CTA */}
              <div className="pt-4">
                <Link
                  href="/contact?service=HVAC+Retrofit+Solutions"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md btn-amber text-sm font-semibold tracking-wide"
                >
                  <span>Explore Retrofit</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden border border-[#DCE5EB] shadow-md group">
                <Image
                  src="/services/service-retrofit.jpg"
                  alt="Modernizing commercial HVAC chiller plant with VFDs"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2035]/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 px-3.5 py-1.5 rounded-lg bg-[#0B2035]/85 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold">
                  Energy Optimization &amp; VFD Integration
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICE 04 – TESTING, ADJUSTING & BALANCING (TAB) */}
        <section id="tab" className="bg-[#F5F8FA] py-20 border-y border-[#DCE5EB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#087E8B]/10 text-[#087E8B] text-xs font-bold uppercase tracking-wider">
                <span>Service Division 04</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B2035]">
                Testing, Adjusting &amp; Balancing (TAB)
              </h2>
              <p className="text-[#64748B] text-base leading-relaxed">
                Independent, certified testing and balancing ensuring air and water distribution match consultant design values exactly. Our procedural methodologies refer to internationally recognized <strong>NEBB</strong>, <strong>AABC</strong>, and <strong>SMACNA</strong> engineering standards.
              </p>
            </div>

            {/* TAB 5 Sub-Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tabCategories.map((tab, idx) => {
                const Icon = tab.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-6 border border-[#DCE5EB] hover:border-[#087E8B] transition-all duration-300 denali-card flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-lg bg-[#087E8B]/10 text-[#087E8B] flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-[#0B2035]">
                        {tab.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                        {tab.desc}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-[#F5F8FA]">
                      <span className="text-[11px] font-bold text-[#102D46] uppercase tracking-wider block mb-2">
                        Precision Instrumentation:
                      </span>
                      <ul className="space-y-1 text-xs text-[#087E8B]">
                        {tab.equipment.map((eq, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <span className="text-[#F2A541]">•</span>
                            <span className="text-[#102D46]">{eq}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}

              {/* Reference Standards Card */}
              <div className="bg-[#102D46] text-white rounded-xl p-6 border border-[#1F4965] flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-[#F2A541]/20 text-[#F2A541] flex items-center justify-center">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    Reference Procedural Standards
                  </h3>
                  <p className="text-xs text-[#A9B7C3] leading-relaxed">
                    Our reporting, field tolerances, and calibration methods adhere to recognized engineering guidelines:
                  </p>
                  <div className="space-y-2 pt-2">
                    <div className="p-2.5 rounded bg-[#0B2035] border border-[#1F4965]">
                      <strong className="text-xs text-[#F2A541] block">NEBB Guidelines</strong>
                      <span className="text-[11px] text-[#A9B7C3]">National Environmental Balancing Bureau procedures</span>
                    </div>
                    <div className="p-2.5 rounded bg-[#0B2035] border border-[#1F4965]">
                      <strong className="text-xs text-[#36B8B0] block">SMACNA Standards</strong>
                      <span className="text-[11px] text-[#A9B7C3]">HVAC Systems Duct Leakage &amp; Air Distribution Test Manual</span>
                    </div>
                    <div className="p-2.5 rounded bg-[#0B2035] border border-[#1F4965]">
                      <strong className="text-xs text-white block">AABC Standards</strong>
                      <span className="text-[11px] text-[#A9B7C3]">Associated Air Balance Council National Standards</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#1F4965]">
                  <Link
                    href="/contact?service=TAB+Commissioning"
                    className="w-full text-center block py-2.5 rounded btn-amber text-xs font-semibold"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Exactly 3 Inner Page FAQs */}
      <FAQAccordion
        items={technicalServicesFaqs}
        title="Technical Services FAQs"
        subtitle="Clarifications regarding AMC coverage, retrofit viability, and NEBB/SMACNA TAB standards."
        badge="Division Inquiries"
      />

      {/* Final CTA */}
      <CtaBanner />
    </div>
  );
}
