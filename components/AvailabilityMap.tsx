"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import {
  IconCustomer,
  IconLocation,
  IconRoomInterior,
  IconResidential,
} from "@/lib/icons";

type Area = {
  name: string;
  x: number;
  y: number;
  central?: boolean;
};

/**
 * IMPORTANT:
 * Coordinates are percentages of the COMPLETE map image.
 *
 * Because the image now uses object-contain instead of object-cover,
 * these positions stay attached to the map instead of shifting due to cropping.
 */
const AREAS: Area[] = [
  {
    name: "Auckland CBD",
    x: 49,
    y: 55,
    central: true,
  },

  {
    name: "Hibiscus Coast",
    x: 47,
    y: 24,
  },

  {
    name: "Warkworth",
    x: 67,
    y: 29,
  },

  {
    name: "Albany",
    x: 40,
    y: 36,
  },

  {
    name: "North Shore",
    x: 57,
    y: 40,
  },

  {
    name: "Helensville",
    x: 26,
    y: 39,
  },

  {
    name: "West Auckland",
    x: 23,
    y: 50,
  },

  {
    name: "Waitākere",
    x: 22,
    y: 61,
  },

  {
    name: "East Auckland",
    x: 70,
    y: 52,
  },

  {
    name: "Clevedon",
    x: 87,
    y: 60,
  },

  {
    name: "Papakura",
    x: 39,
    y: 68,
  },

  {
    name: "Manukau",
    x: 55,
    y: 68,
  },

  {
    name: "Pukekohe",
    x: 70,
    y: 69,
  },
];

export default function AvailabilityMap() {
  const [active, setActive] = useState<string | null>(null);

  const markerRefs = useRef<
    Record<string, HTMLButtonElement | null>
  >({});

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    AREAS.forEach((area) => {
      const marker = markerRefs.current[area.name];

      if (!marker) return;

      gsap.to(marker, {
        scale:
          active === area.name
            ? area.central
              ? 1.05
              : 1.09
            : 1,

        duration: reducedMotion ? 0.01 : 0.6,
        ease: "power3.out",
        overwrite: true,
      });
    });
  }, [active]);

  return (
    <section
      aria-labelledby="availability-heading"
      className="overflow-hidden bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

        {/* ------------------------------------------------ Heading */}

        <div className="mx-auto max-w-4xl text-center">
          <p
            data-reveal
            className="inline-flex rounded-full bg-brand-bg px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand sm:text-sm"
          >
            We are available in
          </p>

          <h2
            data-reveal
            id="availability-heading"
            className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-navy sm:text-5xl lg:text-6xl"
          >
            Auckland &amp; Surrounding Areas
          </h2>

          <p
            data-reveal
            className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-navy/65 sm:text-base lg:text-lg"
          >
            Proudly delivering professional painting services across Auckland
            and its communities.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex rounded-full bg-brand px-7 py-3.5 text-sm font-semibold tracking-wide text-white shadow-[0_12px_30px_-14px_rgba(3,101,234,0.8)] transition-colors duration-300 hover:bg-brand-accent"
          >
            Request a Quote
          </a>
        </div>

        {/* ------------------------------------------------ Map */}

        <div
          className="relative mx-auto mt-10 w-full max-w-6xl sm:mt-12 lg:mt-14"
          onMouseLeave={() => setActive(null)}
        >
          {/*
            IMPORTANT:
            The map image is 3:2-ish.

            Do NOT use aspect-[2.4] or object-cover.
            That was cropping the map and breaking the coordinate positions.
          */}

          <div className="relative aspect-[3/2] w-full">

            <Image
              src="/images/gallery/map-auckland.png"
              alt="Auckland and surrounding service areas"
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 92vw, 1152px"
              className="object-contain"
            />

            {/* -------------------------------- Location Cards */}

            {AREAS.map((area) => {
              const isActive = active === area.name;

              return (
                <div
                  key={area.name}
                  className="absolute z-10"
                  style={{
                    left: `${area.x}%`,
                    top: `${area.y}%`,
                  }}
                >
                  <button
                    ref={(element) => {
                      markerRefs.current[area.name] = element;
                    }}
                    type="button"
                    aria-label={`${area.name} — painting services available`}
                    onMouseEnter={() => setActive(area.name)}
                    onFocus={() => setActive(area.name)}
                    onBlur={() => setActive(null)}
                    onClick={() =>
                      setActive((current) =>
                        current === area.name ? null : area.name
                      )
                    }
                    className={[
                      "flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 whitespace-nowrap",
                      "rounded-xl border bg-white text-navy",
                      "shadow-[0_8px_24px_-12px_rgba(28,49,99,0.35)]",
                      "transition-[border-color,box-shadow] duration-500 ease-out",
                      "hover:shadow-[0_16px_32px_-14px_rgba(3,101,234,0.4)]",

                      area.central
                        ? "border-brand/40 px-3 py-2 sm:px-4 sm:py-2.5"
                        : "border-navy/10 px-2 py-1.5 sm:px-3 sm:py-2",

                      isActive
                        ? "border-brand shadow-[0_16px_32px_-14px_rgba(3,101,234,0.5)]"
                        : "",
                    ].join(" ")}
                  >
                    <IconLocation
                      className={[
                        "shrink-0 text-brand",
                        area.central
                          ? "h-4 w-4 sm:h-5 sm:w-5"
                          : "h-3 w-3 sm:h-4 sm:w-4",
                      ].join(" ")}
                    />

                    <span
                      className={[
                        "font-semibold",

                        area.central
                          ? "text-[9px] sm:text-xs lg:text-sm"
                          : "text-[8px] sm:text-[10px] lg:text-xs",
                      ].join(" ")}
                    >
                      {area.name}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* ------------------------------------------------ Bottom Cards */}

        <div className="mt-4 grid gap-4 sm:mt-6 sm:grid-cols-3">
          {[
            {
              icon: IconRoomInterior,
              title: "Auckland Wide",
              label: "Service Coverage",
            },

            {
              icon: IconResidential,
              title: "Residential & Commercial",
              label: "Painting Services",
            },

            {
              icon: IconCustomer,
              title: "Local Auckland",
              label: "Painting Team",
            },
          ].map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="flex items-center gap-4 rounded-2xl border border-navy/10 bg-brand-bg p-5 shadow-[0_18px_40px_-28px_rgba(28,49,99,0.5)]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand text-white sm:h-12 sm:w-12">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </span>

                <div className="min-w-0">
                  <p className="text-sm font-semibold text-navy">
                    {stat.title}
                  </p>

                  <p className="mt-1 text-xs text-navy/60">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}