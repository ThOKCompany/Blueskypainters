"use client";

import { ReactNode, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { IconArrowRight } from "@/lib/icons";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  image: string;
  ctaHref?: string;
  ctaLabel?: string;
  revealGroup?: string;
}

function isTouchDevice() {
  return typeof window !== "undefined" && window.matchMedia("(hover: none)").matches;
}

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * A service card that flips in 3D on hover (or tap, on touch devices) to
 * reveal a photo of the service on its reverse side. The flip itself is
 * driven by GSAP animating the `rotateY` of `.card-inner`; front/back faces
 * are pinned in place with `backface-hidden` so only one is ever visible.
 */
export default function ServiceCard({
  icon,
  title,
  description,
  image,
  ctaHref,
  ctaLabel = "Get a Quote",
  revealGroup,
}: ServiceCardProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [flipped, setFlipped] = useState(false);

  // One tween per flip-state change — not per render. `overwrite: "auto"`
  // kills any in-flight tween on this element so rapidly moving the mouse
  // in/out can't stack animations on top of each other.
  useGSAP(
    () => {
      const inner = innerRef.current;
      if (!inner) return;

      gsap.to(inner, {
        rotateY: flipped ? 180 : 0,
        duration: prefersReducedMotion() ? 0.01 : 0.7,
        ease: "power3.out",
        overwrite: "auto",
      });
    },
    { dependencies: [flipped], scope: wrapperRef },
  );

  const handleMouseEnter = () => {
    if (isTouchDevice()) return;
    setFlipped(true);
  };

  const handleMouseLeave = () => {
    if (isTouchDevice()) return;
    setFlipped(false);
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isTouchDevice()) return;
    // Let the CTA link inside the front face navigate normally instead of
    // just toggling the flip.
    if ((event.target as HTMLElement).closest("a")) return;
    setFlipped((f) => !f);
  };

  return (
    <div
      ref={wrapperRef}
      data-reveal
      data-reveal-group={revealGroup}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className="group relative h-[380px] [perspective:1600px]"
    >
      <div
        ref={innerRef}
        className="relative h-full w-full transform-3d will-change-transform"
      >
        {/* Front */}
        <div
          aria-hidden={flipped}
          className="absolute inset-0 flex flex-col gap-4 rounded-2xl border border-navy/10 bg-brand-bg p-7 shadow-[0_20px_40px_-24px_rgba(28,49,99,0.25)] backface-hidden"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand/15 bg-brand-bg text-brand transition-colors duration-300 group-hover:border-transparent group-hover:bg-brand-accent group-hover:text-white">
            {icon}
          </span>
          <h3 className="text-xl font-semibold text-navy">{title}</h3>
          <p className="text-[15px] leading-relaxed text-navy/70 line-clamp-5">
            {description}
          </p>
          {ctaHref && (
            <a
              href={ctaHref}
              tabIndex={flipped ? -1 : undefined}
              className="mt-auto inline-flex items-center gap-1.5 pt-1 text-sm font-semibold text-brand transition-colors hover:text-brand-accent"
            >
              {ctaLabel}
              <IconArrowRight className="h-3.5 w-3.5" />
            </a>
          )}
        </div>

        {/* Back */}
        <div
          aria-hidden={!flipped}
          className="absolute inset-0 overflow-hidden rounded-2xl backface-hidden [transform:rotateY(180deg)]"
        >
          <Image
            src={image}
            alt={`${title} example`}
            fill
            sizes="(max-width: 1024px) 50vw, 25vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/45 to-navy/10" />
          <div className="absolute inset-0 flex flex-col justify-end gap-2 p-7 text-white">
            <h3 className="text-xl font-semibold">{title}</h3>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent">
              View Service
              <IconArrowRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
