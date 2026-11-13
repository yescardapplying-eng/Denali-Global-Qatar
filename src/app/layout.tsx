import type { Metadata, Viewport } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { companyData } from "@/data/company";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0B2035",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://denaliglobalqatar.com"),
  title: {
    default: "Denali Global Trading and Contracting | HVAC, MEP & Fire Solutions Qatar",
    template: "%s | Denali Global Trading & Contracting"
  },
  description: "Premier Qatar engineering solutions provider for commercial HVAC, ventilation systems, hydronics, fire protection, and comprehensive technical maintenance services. CR No. 255619, Doha, Qatar.",
  keywords: [
    "HVAC Solutions Qatar",
    "MEP Products Doha",
    "Air Handling Units Qatar",
    "VRF Systems Doha",
    "Ventilation Systems Qatar",
    "Hydronic Balancing Valves",
    "Fire Fighting Equipment Qatar",
    "Patterson Fire Pumps",
    "Denali Technical Services",
    "Testing Adjusting Balancing TAB Doha",
    "HVAC Maintenance AMC Qatar"
  ],
  authors: [{ name: "Denali Global Trading and Contracting" }],
  creator: "Denali Global Trading and Contracting",
  publisher: "Denali Global Trading and Contracting",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_QA",
    url: "https://denaliglobalqatar.com",
    siteName: "Denali Global Trading and Contracting",
    title: "Denali Global | International HVAC, MEP & Engineering Solutions",
    description: "Delivering world-class HVAC, MEP, ventilation, fire protection, and technical services across Qatar. CR No. 255619.",
    images: [
      {
        url: "/logo/denali-logo-horizontal.png",
        width: 1024,
        height: 341,
        alt: "Denali Global Trading and Contracting Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Denali Global Trading and Contracting | Doha, Qatar",
    description: "International engineering solutions for HVAC, MEP, and life safety in Qatar.",
    images: ["/logo/denali-logo-horizontal.png"],
  },
  alternates: {
    canonical: "https://denaliglobalqatar.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Denali Global Trading and Contracting",
    alternateName: "Denali Global Qatar",
    url: "https://denaliglobalqatar.com",
    logo: "https://denaliglobalqatar.com/logo/denali-logo-horizontal.png",
    image: "https://denaliglobalqatar.com/hero/hero-slide-1.jpg",
    description: "Premier engineering solutions provider for commercial HVAC, MEP products, ventilation systems, hydronics, fire protection, and technical commissioning services in Doha, Qatar.",
    identifier: {
      "@type": "PropertyValue",
      name: "Commercial Registration (CR)",
      value: "255619"
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Office No. 01/05, First Floor, Building No. 20, Street No. 854, Zone 27",
      addressLocality: "Umm Ghuwailina Area, Doha",
      addressRegion: "Doha",
      addressCountry: "QA"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.2854,
      longitude: 51.5310
    },
    email: "info@denaliglobalqatar.com",
    priceRange: "$$$"
  };

  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-white text-[#0B2035] antialiased selection:bg-[#F2A541] selection:text-[#0B2035]">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
