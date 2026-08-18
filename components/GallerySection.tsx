"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import GalleryItem from "./GalleryItem";

type GallerySwatch = "sky" | "clay" | "cream" | "ink";

export interface GalleryProject {
  title: string;
  category: string;
  description: string;
  swatch: GallerySwatch;
  aspect: "square" | "portrait" | "landscape";
  src?: string;
}

interface GallerySectionProps {
  items: GalleryProject[];
}

export default function GallerySection({ items }: GallerySectionProps) {
  const [activeItem, setActiveItem] = useState<GalleryProject | undefined>(items[0]);
  const copyRef = useRef<HTMLDivElement>(null);
  const transitionRef = useRef(0);

  useEffect(() => {
    const copy = copyRef.current;
    return () => {
      if (copy) gsap.killTweensOf(copy);
    };
  }, []);

  const activateItem = (item: GalleryProject) => {
    if (item.title === activeItem?.title) return;

    const copy = copyRef.current;
    const transitionId = transitionRef.current + 1;
    transitionRef.current = transitionId;

    if (!copy || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setActiveItem(item);
      return;
    }

    gsap.to(copy, {
      opacity: 0,
      y: 8,
      duration: 0.18,
      ease: "power2.in",
      overwrite: true,
      onComplete: () => {
        if (transitionId !== transitionRef.current) return;
        setActiveItem(item);
        requestAnimationFrame(() => {
          if (transitionId !== transitionRef.current || !copyRef.current) return;
          gsap.fromTo(
            copyRef.current,
            { opacity: 0, y: -8 },
            {
              opacity: 1,
              y: 0,
              duration: 0.35,
              ease: "power3.out",
              overwrite: true,
            },
          );
        });
      },
    });
  };

  const cardClassName =
    "h-[320px] min-w-0 w-[230px] shrink-0 overflow-hidden rounded-2xl sm:h-[340px] sm:w-[250px] lg:w-auto lg:flex-1 [&>figure]:h-full [&>figure]:w-full [&>figure]:aspect-auto";

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="bg-brand-bg"
    >
      <div className="mx-auto max-w-4/5 px-6 py-20 lg:px-10 lg:py-30">
        <div className="grid items-center gap-10 lg:grid-cols-[0.32fr_0.68fr]">
          <div ref={copyRef} className="max-w-md">
            <p
              data-reveal
              className="text-sm font-semibold uppercase tracking-[0.18em] text-brand"
            >
              Our Work
            </p>

            <p
              data-reveal
              className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-brand"
            >
              {activeItem?.category}
            </p>

            <h2
              data-reveal
              id="gallery-heading"
              className="mt-4 text-5xl font-semibold leading-[0.88] text-navy sm:text-6xl lg:text-7xl"
            >
              {activeItem?.title}
            </h2>

            <p
              data-reveal
              className="mt-6 max-w-sm text-base leading-relaxed text-navy/70"
            >
              {activeItem?.description}
            </p>
          </div>

          <div className="min-w-0">
            <div className="w-full overflow-x-auto pb-4 lg:overflow-visible">
              <div className="flex w-full flex-nowrap gap-3">
                {items.map((item) => {
                  const isActive = activeItem?.title === item.title;
                  const card = (
                    <GalleryItem
                      title={item.title}
                      category={item.category}
                      src={item.src}
                      swatch={item.swatch}
                      aspect="square"
                      revealGroup="gallery"
                    />
                  );

                  return item.src ? (
                    <button
                      key={item.title}
                      type="button"
                      aria-label={`Show ${item.title} project details`}
                      onMouseEnter={() => activateItem(item)}
                      onFocus={() => activateItem(item)}
                      onClick={() => activateItem(item)}
                      className={`${cardClassName} text-left shadow-[0_20px_45px_-24px_rgba(28,49,99,0.2)] ${
                        isActive ? "ring-2 ring-brand" : ""
                      }`}
                    >
                      {card}
                    </button>
                  ) : (
                    <div
                      key={item.title}
                      className={`${cardClassName} ${isActive ? "ring-2 ring-brand" : ""}`}
                    >
                      {card}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
