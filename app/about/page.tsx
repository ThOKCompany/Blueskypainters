import type { Metadata } from "next";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import CTAButton from "@/components/CTAButton";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = { title: "About | Blue Sky Painter", description: "Learn about Blue Sky Painter's preparation-led approach to painting across Auckland." };

export default function AboutPage() {
  return <><Navigation /><main className="flex-1">
    <section className="bg-brand-bg"><div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-28"><div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">About Blue Sky Painter</p><h1 className="mt-5 text-4xl font-semibold leading-tight text-navy sm:text-6xl">Painting done properly, from prep to final coat.</h1><p className="mt-6 max-w-xl text-base leading-relaxed text-navy/70">Our planning and preparation work is done in partnership with our clients so that we meet goals in a realistic and timely manner.</p><CTAButton href="/contact" className="mt-8">Request a Free Quote</CTAButton></div><div className="relative h-[280px] overflow-hidden rounded-3xl sm:h-[380px]"><Image src="/images/hero/paintedwall.jpg" alt="Freshly painted interior wall" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" /></div></div></section>
    <section className="bg-white"><div className="mx-auto max-w-4xl px-6 py-20 lg:px-10 lg:py-24"><div className="grid gap-10 sm:grid-cols-2"><div><h2 className="text-2xl font-semibold text-navy">Our approach</h2><p className="mt-4 text-base leading-relaxed text-navy/70">We bring experience and industry knowledge to every job, with careful preparation and a final walk-through to ensure your satisfaction.</p></div><div><h2 className="text-2xl font-semibold text-navy">Why customers trust us</h2><p className="mt-4 text-base leading-relaxed text-navy/70">We aim to create lasting relationships with clients who value a quality finish, clear communication and work completed with care.</p></div></div></div></section>
  </main><SiteFooter /></>;
}
