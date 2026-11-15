import type { Metadata, Viewport } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MouseFollower from "@/components/common/MouseFollower";
import ScrollRevealObserver from "@/components/common/ScrollRevealObserver";
import { companyData } from "@/data/company";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
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
  themeColor: "#002858",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://denaliglobalqatar.com"),
  title: {
    default: "Denali Global Trading and Contracting | The Strength Behind Every Structure",
    template: "%s | Denali Global Trading & Contracting"
  },
  description: "Premier Qatar engineering solutions provider for commercial HVAC, ventilation systems, hydronics, fire protection, and comprehensive technical maintenance services. Doha, Qatar.",
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
    }
  },
  openGraph: {
    type: "website",
    locale: "en_QA",
    url: "https://denaliglobalqatar.com",
    siteName: "Denali Global Trading and Contracting",
    title: "Denali Global Trading and Contracting | Qatar",
    description: "Integrated HVAC, MEP, fire protection, and specialized technical services across commercial, residential, and infrastructure sectors in Qatar.",
    images: [
      {
        url: "/logo/denali-logo-horizontal.png",
        width: 1200,
        height: 630,
        alt: "Denali Global Trading and Contracting"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Denali Global Trading and Contracting | Qatar",
    description: "Commercial HVAC, MEP systems, fire protection, and technical engineering services in Doha, Qatar.",
    images: ["/logo/denali-logo-horizontal.png"]
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/logo/denali-icon.png", sizes: "192x192", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data Schema for Local Business / Corporation
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": companyData.name,
    "alternateName": companyData.shortName,
    "url": companyData.domain,
    "logo": `${companyData.domain}/logo/denali-logo-horizontal.png`,
    "description": "Denali Global Trading and Contracting is a premier engineering solutions provider in Qatar specializing in HVAC, MEP, fire protection, and technical services.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": `${companyData.address.building}, ${companyData.address.street}`,
      "addressLocality": companyData.address.city,
      "addressRegion": companyData.address.area,
      "postalCode": companyData.address.zone,
      "addressCountry": "QA"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "sales",
      "email": companyData.email
    }
  };

  return (
    <html lang="en" className={`scroll-smooth overflow-x-hidden max-w-full ${montserrat.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased text-[#172B45] bg-white selection:bg-[#D8A848] selection:text-[#002858] overflow-x-hidden max-w-full w-full relative">
        <MouseFollower />
        <ScrollRevealObserver />
        <Header />
        <main className="flex-grow overflow-x-hidden w-full max-w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
