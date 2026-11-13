export interface NavItem {
  name: string;
  href: string;
  badge?: string;
  isCta?: boolean;
}

export const mainNavItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Our Services", href: "/services" },
  { name: "Denali Technical Services", href: "/technical-services" },
  { name: "Brands", href: "/brands" },
  { name: "Our Products", href: "/products" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact", isCta: true },
];

export const footerQuickLinks1: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Our Services", href: "/services" },
  { name: "Denali Technical Services", href: "/technical-services" },
  { name: "Brands", href: "/brands" },
];

export const footerQuickLinks2: NavItem[] = [
  { name: "Our Products", href: "/products" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

export const legalLinks: NavItem[] = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms-and-conditions" },
  { name: "Cookie Policy", href: "/cookie-policy" },
];

