import Image from "next/image";
import Link from "next/link";
import { IconFacebook, IconMail, IconPhone } from "@/lib/icons";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"],
];

export default function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Link href="/" aria-label="Blue Sky Painter — home" className="inline-flex">
              <Image src="/logo/blueskypainterlogo.png" alt="Blue Sky Painter" width={180} height={120} className="h-20 w-36 object-contain object-left" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">Professional painting services across Auckland.</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">Explore</p>
            <nav aria-label="Footer navigation" className="mt-5 grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-white/60">
              {links.map(([label, href]) => <Link key={href} href={href} className="transition-colors hover:text-brand-accent">{label}</Link>)}
            </nav>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">Connect</p>
            <div className="mt-5 space-y-3 text-sm text-white/60">
              <a href="tel:+64210362056" className="flex items-center gap-2 hover:text-brand-accent"><IconPhone className="h-4 w-4" />+64 210 362 056</a>
              <a href="mailto:info@blueskypainter.co.nz" className="flex items-center gap-2 hover:text-brand-accent"><IconMail className="h-4 w-4" />info@blueskypainter.co.nz</a>
              <a href="#" aria-label="Blue Sky Painter on Facebook (placeholder link)" className="flex items-center gap-2 hover:text-brand-accent"><IconFacebook className="h-4 w-4" />Facebook</a>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>4/35 Highgrove Lane, Totara Vale, Auckland, New Zealand</p>
          <p>&copy; {new Date().getFullYear()} Blue Sky Painter</p>
        </div>
      </div>
    </footer>
  );
}
