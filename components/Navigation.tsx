"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import CTAButton from "./CTAButton";

// Navigation is also rendered on the dedicated pages, which do not import
// the homepage animation module. Register the hook here so the drawer works
// consistently on every route.
if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useGSAP(
    () => {
      const panel = panelRef.current;
      if (!panel) return;

      gsap.to(panel, {
        x: isOpen ? "0%" : "-100%",
        duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? 0.01
          : 0.45,
        ease: "power3.out",
        overwrite: true,
      });
    },
    { dependencies: [isOpen], scope: panelRef },
  );

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  // Close the mobile menu whenever a link is chosen.
  const handleLinkClick = () => setIsOpen(false);

  return (
    <>
      <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(28,49,99,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10"
      >
        <Link href="/" aria-label="Blue Sky Painter — home" className="flex items-center">
        <Image
  src="/logo/blueskypainterlogo.png"
  alt="Blue Sky Painter"
  width={160}
  height={160}
  sizes="80px"
  className="h-20 w-20 object-contain"
  priority
  quality={100}
/>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-8 text-sm font-medium text-navy/70">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-navy"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <CTAButton href="/contact" variant="primary">
            Request a Quote
          </CTAButton>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/15 text-navy lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {isOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      </header>

    {/* These layers intentionally sit outside the sticky header so the
        header's backdrop blur cannot create a containing block for them. */}
    <button
      type="button"
      aria-label="Close navigation menu"
      aria-hidden={!isOpen}
      tabIndex={isOpen ? 0 : -1}
      onClick={handleLinkClick}
      className={`fixed inset-0 z-[90] bg-navy/35 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${
        isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
    />

    <div
      ref={panelRef}
      id="mobile-menu"
      aria-label="Mobile navigation"
      aria-hidden={!isOpen}
      className="fixed left-0 top-0 z-[100] flex h-[100dvh] w-[84vw] max-w-[360px] flex-col overscroll-contain overflow-y-auto bg-white px-6 pb-8 pt-5 shadow-2xl lg:hidden"
      style={{ transform: "translateX(-100%)" }}
    >
      <div className="flex items-center justify-between">
        <Link href="/" aria-label="Blue Sky Painter — home" onClick={handleLinkClick} tabIndex={isOpen ? 0 : -1}>
          <Image
            src="/logo/blueskypainterlogo.png"
            alt="Blue Sky Painter"
            width={120}
            height={80}
            className="h-14 w-20 object-contain object-left"
          />
        </Link>
        <button
          ref={closeButtonRef}
          type="button"
          aria-label="Close menu"
          tabIndex={isOpen ? 0 : -1}
          onClick={handleLinkClick}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/15 text-navy transition-colors hover:border-brand hover:text-brand focus-visible:outline-brand"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>

      <ul className="mt-10 flex flex-col gap-2 text-lg font-medium text-navy">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={handleLinkClick}
              tabIndex={isOpen ? 0 : -1}
              className="block rounded-xl px-3 py-3 transition-colors hover:bg-brand-bg hover:text-brand focus-visible:outline-brand"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <CTAButton
        href="/contact"
        variant="primary"
        className="mt-auto w-full"
        onClick={handleLinkClick}
        tabIndex={isOpen ? 0 : -1}
      >
        Request a Quote
      </CTAButton>
    </div>
  </>
  );
}
