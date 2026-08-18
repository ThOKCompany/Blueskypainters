import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import CTAButton from "@/components/CTAButton";
import SiteFooter from "@/components/SiteFooter";
import { SERVICES, getService } from "@/data/services";

export function generateStaticParams() { return SERVICES.map((service) => ({ slug: service.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const service = getService((await params).slug);
  return service ? { title: `${service.title} | Blue Sky Painter`, description: service.description } : { title: "Service | Blue Sky Painter" };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const service = getService((await params).slug);
  if (!service) notFound();
  return <><Navigation /><main className="flex-1"><section className="bg-brand-bg"><div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-28"><div><Link href="/services" className="text-sm font-semibold text-brand hover:text-brand-accent">← Back to Services</Link><p className="mt-10 text-sm font-semibold uppercase tracking-[0.18em] text-brand">Blue Sky Painter</p><h1 className="mt-4 text-5xl font-semibold leading-[0.95] text-navy sm:text-6xl">{service.title}</h1><p className="mt-6 max-w-xl text-base leading-relaxed text-navy/70">{service.description}</p><CTAButton href="/contact" className="mt-8">Request a Free Quote</CTAButton></div><div className="relative h-[300px] overflow-hidden rounded-3xl sm:h-[420px]"><Image src={service.image} alt={`${service.title} service`} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 55vw" /></div></div></section><section className="bg-white"><div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24"><div className="grid gap-12 lg:grid-cols-2"><div><h2 className="text-3xl font-semibold text-navy">What we can help with</h2><ul className="mt-6 space-y-3 text-base text-navy/70">{service.helpWith.map((item) => <li key={item} className="flex gap-3"><span className="text-brand">•</span>{item}</li>)}</ul></div><div><h2 className="text-3xl font-semibold text-navy">Our approach</h2><ol className="mt-6 space-y-4 text-navy/70"><li><strong className="text-navy">01 Get in Touch</strong></li><li><strong className="text-navy">02 Discuss &amp; Quote</strong></li><li><strong className="text-navy">03 Prepare &amp; Paint</strong></li><li><strong className="text-navy">04 Final Walkthrough</strong></li></ol></div></div><div className="mt-16 rounded-3xl bg-brand-bg p-8 sm:p-10"><h2 className="text-3xl font-semibold text-navy">Ready to get started?</h2><div className="mt-6 flex flex-wrap gap-4"><CTAButton href="/contact">Request a Free Quote</CTAButton><CTAButton href="tel:+64210362056" variant="secondary">Call Us</CTAButton></div></div></div></section></main><SiteFooter /></>;
}
