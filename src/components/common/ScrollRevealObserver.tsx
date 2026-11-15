"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollRevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // Check if user prefers reduced motion
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px 0px -60px 0px",
      threshold: 0.08,
    });

    // Select candidate elements to animate
    const elementsToReveal = document.querySelectorAll(
      ".scroll-reveal, .denali-card, section > div > div.grid > div, section > div > div.space-y-12 > div"
    );

    elementsToReveal.forEach((el, index) => {
      if (!el.classList.contains("scroll-reveal")) {
        el.classList.add("scroll-reveal");
      }
      // Add auto-stagger delay if inside a grid
      if (!el.hasAttribute("data-delay")) {
        const staggerIndex = (index % 4) + 1;
        el.setAttribute("data-delay", String(staggerIndex));
      }
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
