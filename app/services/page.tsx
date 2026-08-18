import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import ServiceCard from "@/components/ServiceCard";
import ServiceIcon from "@/components/ServiceIcon";
import SiteFooter from "@/components/SiteFooter";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = { title: "Services | Blue Sky Painter", description: "Explore Blue Sky Painter's interior, exterior, roof, fence, plastering and property care services across Auckland." };

export default function ServicesPage() {
  return <><Navigation /><main className="flex-1"><section className="bg-brand-bg"><div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">What we do</p><h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[0.95] text-navy sm:text-6xl">Painting services for every space.</h1><p className="mt-6 max-w-xl text-base leading-relaxed text-navy/70">Professional painting and property care with thorough preparation and quality finishes.</p><div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{SERVICES.map((service) => <ServiceCard key={service.slug} icon={<ServiceIcon icon={service.icon} />} title={service.title} description={service.description} image={service.image} ctaHref={`/services/${service.slug}`} ctaLabel="View Service" revealGroup="services-page" />)}</div></div></section></main><SiteFooter /></>;
}
