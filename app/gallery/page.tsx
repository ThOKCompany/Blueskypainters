import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import GallerySection from "@/components/GallerySection";
import SiteFooter from "@/components/SiteFooter";
import { GALLERY_ITEMS } from "@/data/gallery";

export const metadata: Metadata = { title: "Gallery | Blue Sky Painter", description: "Browse temporary demonstration imagery for Blue Sky Painter's work." };

export default function GalleryPage() { return <><Navigation /><main className="flex-1"><div className="pt-4"><GallerySection items={GALLERY_ITEMS} /></div><p className="bg-brand-bg px-6 pb-12 text-center text-sm text-navy/60">Temporary demonstration images shown for layout purposes; these are not confirmed Blue Sky Painter projects.</p></main><SiteFooter /></>; }
