"use client";

import { SERVICES } from "@/data/services";
import { IconArrowRight } from "@/lib/icons";

export default function QuoteForm() {
  return (
    <form className="space-y-5" onSubmit={(event) => event.preventDefault()}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium text-navy">Name<input name="name" type="text" autoComplete="name" className="mt-2 w-full rounded-xl border border-navy/10 bg-brand-bg px-4 py-3 text-sm font-normal outline-none focus:border-brand" placeholder="Your name" /></label>
        <label className="text-sm font-medium text-navy">Phone<input name="phone" type="tel" autoComplete="tel" className="mt-2 w-full rounded-xl border border-navy/10 bg-brand-bg px-4 py-3 text-sm font-normal outline-none focus:border-brand" placeholder="Your phone number" /></label>
      </div>
      <label className="block text-sm font-medium text-navy">Email<input name="email" type="email" autoComplete="email" className="mt-2 w-full rounded-xl border border-navy/10 bg-brand-bg px-4 py-3 text-sm font-normal outline-none focus:border-brand" placeholder="you@example.com" /></label>
      <label className="block text-sm font-medium text-navy">Service<select name="service" defaultValue="" className="mt-2 w-full rounded-xl border border-navy/10 bg-brand-bg px-4 py-3 text-sm font-normal text-navy outline-none focus:border-brand"><option value="" disabled>Select a service</option>{SERVICES.map((service) => <option key={service.slug}>{service.title}</option>)}</select></label>
      <label className="block text-sm font-medium text-navy">Message<textarea name="message" rows={4} className="mt-2 w-full resize-none rounded-xl border border-navy/10 bg-brand-bg px-4 py-3 text-sm font-normal outline-none focus:border-brand" placeholder="Tell us about your project" /></label>
      <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-accent">Request a Quote <IconArrowRight className="h-4 w-4" /></button>
    </form>
  );
}
