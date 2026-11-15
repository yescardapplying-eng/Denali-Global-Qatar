"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollRevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    let observer: IntersectionObserver | null = null;

    const setupObserver = () => {
      if (observer) {
        observer.disconnect();
      }

      const observerCallback: IntersectionObserverCallback = (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            obs.unobserve(entry.target);
          }
        });
      };

      observer = new IntersectionObserver(observerCallback, {
        root: null,
        rootMargin: "0px 0px -40px 0px",
        threshold: 0.1,
      });

      // Comprehensive selectors covering cards, headers, grids, list items across all pages
      const candidateElements = document.querySelectorAll(
        [
          ".scroll-reveal",
          ".denali-card",
          "section > div > .text-center",
          "section > div > div.grid > div",
          "section > div > div.space-y-12 > div",
          "section > div > div.space-y-4 > div",
          "section > div > div.space-y-8 > div",
          ".product-card",
          ".service-card",
          ".faq-card"
        ].join(", ")
      );

      candidateElements.forEach((el, index) => {
        if (!el.classList.contains("scroll-reveal")) {
          el.classList.add("scroll-reveal");
        }

        // Stagger cards based on their sibling index within their parent
        if (!el.hasAttribute("data-delay")) {
          const parent = el.parentElement;
          if (parent && parent.children.length > 1) {
            const siblingIndex = Array.prototype.indexOf.call(parent.children, el);
            const staggerDelay = (siblingIndex % 6) + 1;
            el.setAttribute("data-delay", String(staggerDelay));
          } else {
            const staggerDelay = (index % 4) + 1;
            el.setAttribute("data-delay", String(staggerDelay));
          }
        }

        observer?.observe(el);
      });
    };

    // Small delay to ensure DOM is fully painted after route transition
    const timeout = setTimeout(setupObserver, 80);

    return () => {
      clearTimeout(timeout);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [pathname]);

  return null;
}
