export interface NavChildItem {
  name: string;
  href: string;
  desc?: string;
  count?: number;
}

export interface NavItem {
  name: string;
  href: string;
  badge?: string;
  isCta?: boolean;
  hasDropdown?: boolean;
  children?: NavChildItem[];
}

export const serviceNavCategories: NavChildItem[] = [
  {
    name: "Installation & Fitout Works",
    href: "/services/installation-fitout",
    desc: "Chillers, AHUs, FCUs, ductwork, cladding & MEP fitout",
    count: 16
  },
  {
    name: "HVAC & MEP Contracting",
    href: "/services/hvac-mep-contracting",
    desc: "Turnkey mechanical, electrical, plumbing & contracting",
    count: 1
  },
  {
    name: "Design Services",
    href: "/services/design-services",
    desc: "Heat load, sizing, BOQ, stress, CFD & 3D BIM modeling",
    count: 9
  },
  {
    name: "Retrofit Fabrication Works",
    href: "/services/retrofit-fabrication",
    desc: "Equipment replacement, pipe modification & spool fabrication",
    count: 8
  },
  {
    name: "Service & Maintenance",
    href: "/services/service-maintenance",
    desc: "24/7 facility AMC, preventive care & system overhauls",
    count: 1
  },
  {
    name: "Denali Technical Services",
    href: "/technical-services",
    desc: "Certified TAB commissioning, AMC maintenance & retrofits",
    count: 4
  }
];

export const mainNavItems: NavItem[] = [
  { name: "Home", href: "/" },
  {
    name: "Our Services",
    href: "/services",
    hasDropdown: true,
    children: serviceNavCategories
  },
  { name: "Our Products", href: "/products" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact", isCta: true },
];

export const footerQuickLinks1: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Our Services", href: "/services" },
  { name: "Installation & Fitout", href: "/services/installation-fitout" },
  { name: "HVAC & MEP Contracting", href: "/services/hvac-mep-contracting" },
  { name: "Design Services", href: "/services/design-services" },
  { name: "Retrofit Fabrication", href: "/services/retrofit-fabrication" },
  { name: "Service & Maintenance", href: "/services/service-maintenance" },
  { name: "Denali Technical Services", href: "/technical-services" },
];

export const footerQuickLinks2: NavItem[] = [
  { name: "Our Products", href: "/products" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  { name: "FAQs", href: "/faqs" },
];

export const legalLinks: NavItem[] = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms-and-conditions" },
  { name: "Cookie Policy", href: "/cookie-policy" },
];
