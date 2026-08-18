"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { IconArrowRight } from "@/lib/icons";

interface Testimonial {
  quote: string;
  name: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

// Cycled across avatar placeholders so consecutive cards don't repeat the
// same tone — all three are already part of the brand palette.
const AVATAR_TONES = ["bg-brand", "bg-brand-accent", "bg-navy"];

/** Derives a two-letter placeholder (e.g. "John & Christine Eaton" → "JE"). */
function getInitials(name: string) {
  const words = name
    .replace(/&/g, " ")
    .split(/\s+/)
    .filter(Boolean);
  if (words.length === 0) return "";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * Editorial testimonial carousel: a header row (eyebrow, heading, arrow
 * controls) above a horizontally-sliding track of fixed-height cards. The
 * track's x-offset is tracked in state and animated with GSAP; arrow clicks
 * measure the actual rendered card width so the step works at any
 * breakpoint without hard-coded "cards visible" counts.
 */
export default function TestimonialsCarousel({
  testimonials,
}: TestimonialsCarouselProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  // Animate the track to the current offset. One tween per offset change —
  // overwrite prevents stacking if the arrows are clicked in quick succession.
  useGSAP(
    () => {
      const track = trackRef.current;
      if (!track) return;

      gsap.to(track, {
        x: -offset,
        duration: prefersReducedMotion() ? 0.01 : 0.7,
        ease: "power3.out",
        overwrite: true,
      });
    },
    { dependencies: [offset], scope: viewportRef },
  );

  // Keep the offset (and arrow disabled-state) valid as the viewport resizes.
  useEffect(() => {
    const clampToViewport = () => {
      const track = trackRef.current;
      const viewport = viewportRef.current;
      if (!track || !viewport) return;

      const maxOffset = Math.max(0, track.scrollWidth - viewport.clientWidth);
      setOffset((current) => {
        const next = Math.min(current, maxOffset);
        setAtStart(next <= 0);
        setAtEnd(next >= maxOffset - 1);
        return next;
      });
    };

    clampToViewport();
    window.addEventListener("resize", clampToViewport);
    return () => window.removeEventListener("resize", clampToViewport);
  }, []);

  const step = (direction: 1 | -1) => {
    const track = trackRef.current;
    const viewport = viewportRef.current;
    const firstCard = track?.children[0] as HTMLElement | undefined;
    if (!track || !viewport || !firstCard) return;

    const gap = parseFloat(getComputedStyle(track).columnGap || "0") || 0;
    const cardStep = firstCard.getBoundingClientRect().width + gap;
    const maxOffset = Math.max(0, track.scrollWidth - viewport.clientWidth);

    setOffset((current) => {
      const next = Math.min(Math.max(current + direction * cardStep, 0), maxOffset);
      setAtStart(next <= 0);
      setAtEnd(next >= maxOffset - 1);
      return next;
    });
  };

  return (
    <>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p
            data-reveal
            className="text-sm font-semibold uppercase tracking-[0.18em] text-brand"
          >
            Our Reviews
          </p>
          <h2
            data-reveal
            id="testimonials-heading"
            className="mt-3 text-4xl font-semibold leading-[1.05] text-navy sm:text-5xl"
          >
            What Our <span className="text-brand-accent">Clients</span> Say
          </h2>
        </div>

        <div data-reveal className="flex items-center gap-3 self-start sm:self-auto">
          <button
            type="button"
            aria-label="Previous testimonials"
            onClick={() => step(-1)}
            disabled={atStart}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/15 text-navy transition-colors hover:border-brand hover:text-brand disabled:opacity-30 disabled:hover:border-navy/15 disabled:hover:text-navy"
          >
            <IconArrowRight className="h-4 w-4 rotate-180" />
          </button>
          <button
            type="button"
            aria-label="Next testimonials"
            onClick={() => step(1)}
            disabled={atEnd}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-white transition-colors hover:bg-brand disabled:opacity-30 disabled:hover:bg-navy"
          >
            <IconArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div ref={viewportRef} className="mt-12 overflow-hidden">
        <div ref={trackRef} className="flex gap-6 will-change-transform">
          {testimonials.map((t, i) => {
            const initials = getInitials(t.name);
            return (
              <figure
                key={t.name}
                data-reveal
                data-reveal-group="testimonials"
                className="flex h-[360px] w-[85%] shrink-0 flex-col rounded-2xl border border-navy/10 bg-brand-bg p-7 shadow-[0_20px_40px_-28px_rgba(28,49,99,0.18)] sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
              >
                <div className="flex items-center justify-between">
                  <span
                    aria-hidden="true"
                    className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-semibold text-white ${AVATAR_TONES[i % AVATAR_TONES.length]}`}
                  >
                    {initials}
                  </span>
                  <span className="rounded-full border border-navy/10 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-navy/60">
                    Client Review
                  </span>
                </div>

                <span
                  aria-hidden="true"
                  className="mt-5 text-5xl leading-none text-brand/30"
                >
                  &ldquo;
                </span>

                <blockquote className="mt-2 flex-1 text-lg font-medium leading-snug text-navy line-clamp-5">
                  {t.quote}
                </blockquote>

                <figcaption className="mt-6 border-l-2 border-brand pl-3">
                  <p className="text-sm font-semibold text-navy">{t.name}</p>
                  <p className="text-xs text-navy/60">Client</p>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </>
  );
}
