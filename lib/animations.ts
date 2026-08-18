"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// useGSAP is GSAP's official React hook — registering it (rather than the
// manual gsap.context()+useEffect pattern) is what makes these animations
// survive React 19 Strict Mode's dev-only double-invoked effects. Runs once
// at module load, client-side only.
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * Animates the hero's eyebrow, headline, copy and CTAs in on page load.
 * Call once, inside a component's useGSAP() callback.
 */
export function playHeroEntrance() {
  if (prefersReducedMotion()) return;

  const targets = gsap.utils.toArray<HTMLElement>("[data-hero-reveal]");
  if (!targets.length) return;

  gsap.set(targets, { opacity: 0, y: 24 });
  gsap.to(targets, {
    opacity: 1,
    y: 0,
    duration: 0.7,
    ease: "power3.out",
    stagger: 0.1,
    delay: 0.1,
  });
}

/**
 * Wires up every [data-reveal] element on the page to fade/slide in the
 * first time it scrolls into view. Elements sharing a [data-reveal-group]
 * value are staggered together as one animation.
 */
export function initScrollReveals() {
  if (prefersReducedMotion()) {
    gsap.set("[data-reveal]", { opacity: 1, y: 0 });
    return;
  }

  const groups = new Map<string, HTMLElement[]>();
  const ungrouped: HTMLElement[] = [];

  gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
    const group = el.dataset.revealGroup;
    if (group) {
      const list = groups.get(group) ?? [];
      list.push(el);
      groups.set(group, list);
    } else {
      ungrouped.push(el);
    }
  });

  groups.forEach((els) => {
    gsap.set(els, { opacity: 0, y: 28 });
    gsap.to(els, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.12,
      scrollTrigger: {
        trigger: els[0],
        start: "top 85%",
        once: true,
      },
    });
  });

  ungrouped.forEach((el) => {
    gsap.set(el, { opacity: 0, y: 28 });
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        once: true,
      },
    });
  });
}
