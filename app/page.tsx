"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import Navigation from "@/components/Navigation";
import CTAButton from "@/components/CTAButton";
import ServiceCard from "@/components/ServiceCard";
import GallerySection, { type GalleryProject } from "@/components/GallerySection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import { playHeroEntrance, initScrollReveals } from "@/lib/animations";
import {
  IconRoomInterior,
  IconExterior,
  IconFence,
  IconResidential,
  IconFinish,
  IconPalette,
  IconRoof,
  IconHouseWash,
  IconDetail,
  IconReliable,
  IconTidy,
  IconCustomer,
  IconWorkmanship,
  IconPhone,
  IconMail,
  IconLocation,
  IconFacebook,
  IconArrowRight,
} from "@/lib/icons";

const SERVICES = [
  {
    icon: <IconRoomInterior className="h-6 w-6" />,
    title: "Interior Painting",
    description:
      "Interior painting requires commitment and thorough preparation to achieve impressions that will last. Our painters specialise in extensive prep work for the best-finished painting results.",
    image: "/images/services/interior-painting.png",
  },
  {
    icon: <IconExterior className="h-6 w-6" />,
    title: "Exterior Painting",
    description:
      "Whether it's a textured plaster wall, weather board, fibre cement cladding, concrete blocks, different bricks, cedar, hardy panels, timber and different wood materials, we can paint them all! We take a huge amount of pride in our work and always put in extra to achieve a high quality finish.",
    image: "/images/services/exterior-painting.png",
  },
  {
    icon: <IconFence className="h-6 w-6" />,
    title: "Fence Painting",
    description:
      "We can help you keep your fence for longer with durable staining or painting.",
    image: "/images/services/fence-painting.png",
  },
  {
    icon: <IconResidential className="h-6 w-6" />,
    title: "Residential & Commercial",
    description:
      "We specialise in painting all types of residential and commercial buildings in Auckland.",
    image: "/images/services/residential-commercial.png",
  },
  {
    icon: <IconFinish className="h-6 w-6" />,
    title: "Plastering",
    description:
      "We provide a premium standard of finish to all plaster surfaces. Whether it's wall and ceiling skimming, plasterboard and GIB stopping, or repairing cracks, dents, and holes; you can rely on us to take care of them all. We're quick, proficient, and flexible.",
    image: "/images/services/plastering.png",
  },
  {
    icon: <IconPalette className="h-6 w-6" />,
    title: "Colour Consulting",
    description:
      "Talk to us if you need help choosing your interior or exterior paint colours!",
    image: "/images/services/colour-consulting.png",
  },
  {
    icon: <IconRoof className="h-6 w-6" />,
    title: "Roof Painting",
    description:
      "Safety is a priority when it comes to roof painting, and we are trained on working at height. Roof painting aims to protect the roof from rusting. Spray and hand painting are combined to achieve this.",
    image: "/images/services/roof-painting.png",
  },
  {
    icon: <IconHouseWash className="h-6 w-6" />,
    title: "House Wash",
    description:
      "Maintain the value of your property with an exterior house wash. It's worth the investment, we're cost efficient, fast, and pay attention to detail!",
    image: "/images/services/house-wash.png",
  },
];

const WHY_CHOOSE_US = [
  {
    icon: <IconWorkmanship className="h-6 w-6" />,
    title: "Professional Workmanship",
    description: "Work carried out to a high, consistent standard, job to job.",
  },
  {
    icon: <IconDetail className="h-6 w-6" />,
    title: "Attention to Detail",
    description: "Clean lines, careful prep and finishing touches that show.",
  },
  {
    icon: <IconFinish className="h-6 w-6" />,
    title: "Quality Finishes",
    description: "A smooth, even result that's built to look good for years.",
  },
  {
    icon: <IconReliable className="h-6 w-6" />,
    title: "Reliable Service",
    description: "Clear communication and a team that turns up when expected.",
  },
  {
    icon: <IconTidy className="h-6 w-6" />,
    title: "Clean & Respectful",
    description: "Your home or workplace treated with care from start to finish.",
  },
  {
    icon: <IconCustomer className="h-6 w-6" />,
    title: "Customer-Focused",
    description: "Straightforward quotes and a team that listens to what you need.",
  },
];

const GALLERY_ITEMS: GalleryProject[] = [
  {
    title: "Living Room Repaint",
    category: "Interior",
    description:
      "A fresh interior repaint designed to brighten the space and create a clean modern finish.",
    swatch: "sky",
    aspect: "landscape",
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Weatherboard Exterior",
    category: "Exterior",
    description:
      "A crisp exterior refresh that gives the home a durable finish and a renewed street presence.",
    swatch: "clay",
    aspect: "landscape",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Fence Staining",
    category: "Fence",
    description:
      "A rich protective stain that restores the timber and gives the boundary a refined finish.",
    swatch: "cream",
    aspect: "landscape",
    src: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Office Fit-Out",
    category: "Commercial",
    description:
      "A polished commercial repaint planned to keep the workplace bright, practical and professional.",
    swatch: "ink",
    aspect: "landscape",
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Roof Repaint",
    category: "Roof",
    description:
      "A protective roof coating that refreshes the property and helps it stand up to the elements.",
    swatch: "sky",
    aspect: "landscape",
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80",
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Get in Touch",
    description: "Tell us about your painting project and what you'd like done.",
  },
  {
    number: "02",
    title: "Discuss & Quote",
    description: "We understand your requirements and prepare a clear, upfront quote.",
  },
  {
    number: "03",
    title: "Prepare & Paint",
    description: "Our team completes the work with care and attention to detail.",
  },
  {
    number: "04",
    title: "Final Walkthrough",
    description: "We review the finished work together to make sure it looks right.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Our house hadn't been painted in 35 years — Sam and his team did an amazing job of preparation, cleaning and painting. Now it looks brand new, and it was very well priced too.",
    name: "fahorizonz",
  },
  {
    quote:
      "After seeing their professional approach and standard of workmanship, I had no hesitation to employ them. They worked long hours whenever the weather allowed. Their attention to detail is second to none.",
    name: "John & Christine Eaton",
  },
  {
    quote:
      "They got the job done to an excellent standard and on time. Very clean to work with, and left everything tidy when they went home. Highly recommended — will use again!",
    name: "Heather Harris",
  },
  {
    quote:
      "A complete external refurb — roof, walls, window frames, deck and verandah — immaculately completed despite constant rain delays. Pricing was extremely competitive.",
    name: "Patrick Quinn",
  },
  {
    quote:
      "Brilliant painter — arrived punctually, did an excellent job and cleaned up after himself. Very happy with the workmanship. AAA+++",
    name: "Tracey Douglas",
  },
  {
    quote:
      "A very good job was done — prompt, and the price was reasonable. No regrets.",
    name: "Joe Tate",
  },
];

export default function Home() {
  useGSAP(() => {
    playHeroEntrance();
    initScrollReveals();
  });

  return (
    <>
      <Navigation />

      <main id="home">
        {/* ---------------------------------------------------------- Hero */}
       <section
  aria-label="Introduction"
  className="w-full"
>
  <div className="relative min-h-[620px] w-full overflow-hidden sm:min-h-[680px] lg:min-h-[720px]">

    {/* Full Background Image */}
    <Image
      src="/images/hero/paintbox.jpg"
      alt="Professional painting tools and fresh paint"
      fill
      priority
      sizes="100vw"
      className="object-cover object-bottom"
    />

    {/* Overlay */}
    <div
      aria-hidden="true"
      className="absolute inset-0 bg-gradient-to-b from-navy/25 via-navy/35 to-navy/70"
    />

    <div
      aria-hidden="true"
      className="absolute inset-0 bg-black/10"
    />

    {/* Content */}
    <div className="relative z-10 flex min-h-[620px] w-full items-center justify-center px-6 py-16 sm:min-h-[680px] sm:px-10 lg:min-h-[720px] lg:px-14">
      <div className="mx-auto max-w-4xl text-center">

        <span
          data-hero-reveal
          className="inline-flex rounded-full border border-white/25 bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-md"
        >
          Totara Vale, Auckland
        </span>

        <h1
          data-hero-reveal
          className="mx-auto mt-6 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl xl:text-[4rem]"
        >
          Increase the Value of Your Home with Our Painting Services
        </h1>

        <p
          data-hero-reveal
          className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base lg:text-lg"
        >
          From interior painting to exterior work, we complete every project
          with careful preparation, quality finishes and reliable service
          across Auckland.
        </p>

        <div
          data-hero-reveal
          className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4"
        >
          <CTAButton href="#contact" variant="inverse">
            Request a Free Quote
            <IconArrowRight className="h-4 w-4" />
          </CTAButton>

          <a
            href="#gallery"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/35 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-navy"
          >
            View Our Work
          </a>
        </div>

      </div>
    </div>
  </div>
</section>
        {/* --------------------------------------------------------- About */}
        <section
  id="about"
  aria-labelledby="about-heading"
  className="bg-white"
>
  <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-30">

    {/* ------------------------------- Top */}
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end lg:gap-14">
      <div>
        <p
          data-reveal
          className="text-xs font-semibold uppercase tracking-[0.16em] text-brand"
        >
          About Blue Sky Painter
        </p>

        <h2
          data-reveal
          id="about-heading"
          className="mt-4 max-w-xl text-3xl font-semibold leading-[1.05] tracking-[-0.03em] text-navy sm:text-4xl lg:text-5xl"
        >
          Painting done properly,
          <br />
          <span className="text-brand-accent">
            from prep to final coat.
          </span>
        </h2>

        <div data-reveal className="mt-6">
          <CTAButton href="#contact" variant="primary">
            Get a Free Quote
            <IconArrowRight className="h-4 w-4" />
          </CTAButton>
        </div>
      </div>

      <div data-reveal className="max-w-lg lg:pb-2">
        <p className="text-sm leading-relaxed text-navy/70 sm:text-base">
          We work closely with every client from planning and preparation
          through to the final walkthrough, making sure each project is
          completed carefully, efficiently and to a high standard.
        </p>

        <p className="mt-3 text-sm leading-relaxed text-navy/70 sm:text-base">
          With experience across residential and commercial painting, our
          focus is simple — reliable service, quality workmanship and finishes
          that are made to last.
        </p>
      </div>
    </div>

    {/* ------------------------------- Bottom */}
    <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-[1.35fr_1fr]">

      {/* Story Image */}
      <div
        data-reveal
        className="group relative min-h-[360px] overflow-hidden rounded-[1.75rem] sm:min-h-[420px] lg:min-h-[470px]"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.03]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1600&q=85')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-7 lg:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-accent">
            Our Story
          </p>

          <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
            Built around quality work
            <br />
            and lasting relationships.
          </h3>

          <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/75">
            We bring practical experience and attention to detail to every
            project. Our goal is to leave every client confident in the finish
            and happy to recommend Blue Sky Painter to others.
          </p>
        </div>
      </div>

      {/* Mission + Vision */}
      <div className="grid grid-cols-1 gap-5">

        {/* Mission */}
        <div
          data-reveal
          className="flex min-h-[210px] flex-col justify-end rounded-[1.75rem] bg-brand-bg p-6 sm:p-7"
        >
          <span className="mb-auto flex h-10 w-10 items-center justify-center rounded-xl bg-white text-brand shadow-sm">
            <IconWorkmanship className="h-5 w-5" />
          </span>

          <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">
            Our Mission
          </p>

          <h3 className="mt-2 text-xl font-semibold text-navy">
            Quality without compromise.
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-navy/70">
            To deliver dependable painting services with careful preparation,
            professional workmanship and a finish our clients can be proud of.
          </p>
        </div>

        {/* Vision */}
        <div
          data-reveal
          className="flex min-h-[210px] flex-col justify-end rounded-[1.75rem] bg-navy p-6 text-white sm:p-7"
        >
          <span className="mb-auto flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-brand-accent">
            <IconCustomer className="h-5 w-5" />
          </span>

          <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-accent">
            Our Vision
          </p>

          <h3 className="mt-2 text-xl font-semibold">
            A painter people trust.
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-white/70">
            To build long-term relationships across Auckland through honest
            service, consistent quality and painting work that speaks for
            itself.
          </p>
        </div>

      </div>
    </div>
  </div>
</section>

        {/* ------------------------------------------------------ Services */}
        <section id="services" aria-labelledby="services-heading" className="bg-brand-bg">
  <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-8">

    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-3xl">
        <p
          data-reveal
          className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-brand"
        >
          What We Do
        </p>

        <h2
          data-reveal
          id="services-heading"
          className="text-5xl font-medium leading-[0.95] tracking-[-0.04em] text-navy sm:text-6xl lg:text-7xl"
        >
          Painting services
          <br />
          <span className="text-brand-accent">for every space.</span>
        </h2>
      </div>

      <p
        data-reveal
        className="max-w-sm text-sm leading-relaxed text-navy/70 lg:mb-2"
      >
        From interiors and exteriors to roofs, fences and commercial spaces,
        we provide professional painting services with careful preparation
        and quality finishes.
      </p>
    </div>

    <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {SERVICES.map((service) => (
        <ServiceCard
          key={service.title}
          icon={service.icon}
          title={service.title}
          description={service.description}
          image={service.image}
          ctaHref="#contact"
          revealGroup="services"
        />
      ))}
    </div>

  </div>
</section>

        {/* ------------------------------------------------- Why Choose Us */}
        <section aria-labelledby="why-heading">
  <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">

    <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

      {/* Left Content */}
      <div className="max-w-xl">
        <p
          data-reveal
          className="text-sm font-semibold uppercase tracking-[0.18em] text-brand"
        >
          Why Choose Us
        </p>

        <h2
          data-reveal
          id="why-heading"
          className="mt-6 text-5xl font-medium leading-[0.95] tracking-[-0.04em] text-navy sm:text-6xl lg:text-7xl"
        >
          The Blue Sky
          <br />
          <span className="text-brand-accent">difference.</span>
        </h2>

        <p
          data-reveal
          className="mt-8 max-w-md text-base leading-relaxed text-navy/70"
        >
          We combine professional workmanship, careful preparation and
          reliable service to make every painting project straightforward
          from start to finish.
        </p>

        <div data-reveal className="mt-8 flex flex-wrap gap-6">
          <a
            href="#contact"
            className="text-sm font-semibold text-brand transition-colors hover:text-brand-accent"
          >
            Get a Free Quote →
          </a>

          <a
            href="#contact"
            className="text-sm font-semibold text-brand transition-colors hover:text-brand-accent"
          >
            Talk to Us →
          </a>
        </div>
      </div>

      {/* Benefits */}
      <div
        data-reveal
        data-reveal-group="why-choose"
        className="grid grid-cols-1 sm:grid-cols-2"
      >
        {WHY_CHOOSE_US.map((item, index) => (
          <div
            key={item.title}
            className={[
              "flex gap-5 py-8",
              index % 2 === 1 ? "sm:border-l sm:border-navy/15 sm:pl-10" : "sm:pr-10",
              index >= 2 ? "border-t border-navy/15" : "",
            ].join(" ")}
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-bg text-brand">
              {item.icon}
            </span>

            <div>
              <h3 className="text-lg font-semibold text-navy">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-navy/70">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>

        {/* ----------------------------------------------------- Gallery */}
        <GallerySection items={GALLERY_ITEMS} />

        {/* ------------------------------------------------------ Process */}
        <section aria-labelledby="process-heading">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="mx-auto max-w-2xl text-center">
              <p data-reveal className="text-sm font-semibold uppercase tracking-wide text-brand">
                Our Process
              </p>
              <h2 data-reveal id="process-heading" className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">
                Simple, from first call to final coat
              </h2>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {PROCESS_STEPS.map((step) => (
                <div key={step.number} data-reveal data-reveal-group="process" className="relative pl-2">
                  <span className="text-4xl font-semibold text-brand-accent/40">
                    {step.number}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/70">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* -------------------------------------------------- Testimonials */}
        <section aria-labelledby="testimonials-heading" className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <TestimonialsCarousel testimonials={TESTIMONIALS} />

            <p data-reveal className="mt-10 text-center text-sm text-navy/70">
              More reviews on Google
            </p>
          </div>
        </section>

        {/* -------------------------------------------- Contact + closing CTA */}
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="bg-brand-bg"
        >
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-[0_30px_80px_-40px_rgba(28,49,99,0.25)]">
              <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                <div className="bg-brand-bg p-8 sm:p-10 lg:p-14">
                  <p
                    data-reveal
                    className="text-sm font-semibold uppercase tracking-[0.18em] text-brand"
                  >
                    Contact
                  </p>
                  <h2
                    data-reveal
                    id="contact-heading"
                    className="mt-5 max-w-sm text-4xl font-semibold leading-[0.95] text-navy sm:text-5xl"
                  >
                    Get in Touch With Us <span className="text-brand">Today</span>
                  </h2>
                  <p
                    data-reveal
                    className="mt-6 max-w-sm text-base leading-relaxed text-navy/70"
                  >
                    Tell us about your painting project and we&apos;ll get back to
                    you with the next steps.
                  </p>

                  <div className="mt-10 space-y-6">
                    <a
                      data-reveal
                      data-reveal-group="contact"
                      href="tel:+64210362056"
                      className="flex items-center gap-3"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-white">
                        <IconPhone className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block text-xs uppercase tracking-wide text-navy/50">Phone</span>
                        <span className="text-sm font-medium text-navy">+64 210 362 056</span>
                      </span>
                    </a>
                    <div
                      data-reveal
                      data-reveal-group="contact"
                      className="flex items-center gap-3"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-white">
                        <IconLocation className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block text-xs uppercase tracking-wide text-navy/50">Location</span>
                        <span className="block max-w-xs text-sm font-medium leading-relaxed text-navy">
                          4/35 Highgrove Lane, Totara Vale, Auckland, New Zealand
                        </span>
                      </span>
                    </div>
                    <a
                      data-reveal
                      data-reveal-group="contact"
                      href="mailto:info@blueskypainter.co.nz"
                      className="flex items-center gap-3"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-white">
                        <IconMail className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block text-xs uppercase tracking-wide text-navy/50">Email</span>
                        <span className="text-sm font-medium text-navy">info@blueskypainter.co.nz</span>
                      </span>
                    </a>
                  </div>

                  <CTAButton
                    data-reveal
                    href="tel:+64210362056"
                    variant="primary"
                    className="mt-10"
                  >
                    <IconPhone className="h-4 w-4" />
                    Call Us
                  </CTAButton>
                </div>

                <div className="p-8 sm:p-10 lg:p-14">
                  <div data-reveal>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">Request a quote</p>
                    <h3 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">Tell us about your project</h3>
                  </div>
                  <form
                    data-reveal
                    className="mt-8 space-y-5"
                    onSubmit={(event) => event.preventDefault()}
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <label className="text-sm font-medium text-navy">
                        Name
                        <input name="name" type="text" autoComplete="name" className="mt-2 w-full rounded-xl border border-navy/10 bg-brand-bg px-4 py-3 text-sm font-normal outline-none transition-colors placeholder:text-navy/40 focus:border-brand" placeholder="Your name" />
                      </label>
                      <label className="text-sm font-medium text-navy">
                        Phone
                        <input name="phone" type="tel" autoComplete="tel" className="mt-2 w-full rounded-xl border border-navy/10 bg-brand-bg px-4 py-3 text-sm font-normal outline-none transition-colors placeholder:text-navy/40 focus:border-brand" placeholder="Your phone number" />
                      </label>
                    </div>
                    <label className="block text-sm font-medium text-navy">
                      Email
                      <input name="email" type="email" autoComplete="email" className="mt-2 w-full rounded-xl border border-navy/10 bg-brand-bg px-4 py-3 text-sm font-normal outline-none transition-colors placeholder:text-navy/40 focus:border-brand" placeholder="you@example.com" />
                    </label>
                    <label className="block text-sm font-medium text-navy">
                      Service
                      <select name="service" defaultValue="" className="mt-2 w-full rounded-xl border border-navy/10 bg-brand-bg px-4 py-3 text-sm font-normal text-navy outline-none transition-colors focus:border-brand">
                        <option value="" disabled>Select a service</option>
                        {SERVICES.map((service) => <option key={service.title}>{service.title}</option>)}
                      </select>
                    </label>
                    <label className="block text-sm font-medium text-navy">
                      Message
                      <textarea name="message" rows={4} className="mt-2 w-full resize-none rounded-xl border border-navy/10 bg-brand-bg px-4 py-3 text-sm font-normal outline-none transition-colors placeholder:text-navy/40 focus:border-brand" placeholder="Tell us a little about your project" />
                    </label>
                    <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-brand-accent">
                      Request a Quote
                      <IconArrowRight className="h-4 w-4" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-navy text-white">
        <div className="mx-auto max-w-[80%] px-6 py-14 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
            <div>
              <a href="#home" aria-label="Blue Sky Painter — home" className="inline-flex">
                <Image
                  src="/logo/blueskypainterlogo.png"
                  alt="Blue Sky Painter"
                  width={180}
                  height={120}
                  className="h-20 w-36 object-contain object-left"
                />
              </a>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
                Professional painting services across Auckland.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white">Explore</p>
              <nav aria-label="Footer navigation" className="mt-5 grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-white/60">
                {["Home", "About", "Services", "Gallery", "Contact"].map((link) => (
                  <a key={link} href={link === "Home" ? "/" : `/${link.toLowerCase()}`} className="transition-colors hover:text-brand-accent">{link}</a>
                ))}
              </nav>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white">Connect</p>
              <div className="mt-5 space-y-3 text-sm text-white/60">
                <a href="tel:+64210362056" className="flex items-center gap-2 transition-colors hover:text-brand-accent"><IconPhone className="h-4 w-4" />+64 210 362 056</a>
                <a href="mailto:info@blueskypainter.co.nz" className="flex items-center gap-2 transition-colors hover:text-brand-accent"><IconMail className="h-4 w-4" />info@blueskypainter.co.nz</a>
                <a href="#" aria-label="Blue Sky Painter on Facebook (placeholder link)" className="flex items-center gap-2 transition-colors hover:text-brand-accent"><IconFacebook className="h-4 w-4" />Facebook</a>
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
            <p>4/35 Highgrove Lane, Totara Vale, Auckland, New Zealand</p>
            <p>&copy; {new Date().getFullYear()} Blue Sky Painter</p>
          </div>
        </div>
      </footer>
    </>
  );
}
