import { AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost-on-dark" | "inverse";

interface CTAButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  children: React.ReactNode;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand text-white shadow-[0_10px_30px_-12px_rgba(28,49,99,0.55)] transition-all duration-700 ease-out hover:-translate-y-1 hover:scale-105 hover:bg-brand-accent hover:shadow-[0_20px_45px_-12px_rgba(28,49,99,0.7)] active:translate-y-0 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
  secondary:
    "bg-transparent text-navy border border-navy/20 hover:border-navy/40 hover:bg-navy/5",
  "ghost-on-dark":
    "bg-transparent text-white border border-white/40 hover:bg-white/10",
  inverse:
    "bg-white text-navy hover:bg-white/90 focus-visible:outline-navy shadow-[0_10px_30px_-12px_rgba(28,49,99,0.35)]",
};

/**
 * Shared call-to-action button, used for both real navigation (in-page
 * anchors like #contact) and tel:/mailto: links. Renders as an <a> so it
 * works without JavaScript.
 */
export default function CTAButton({
  variant = "primary",
  children,
  className = "",
  ...anchorProps
}: CTAButtonProps) {
  return (
    <a
      {...anchorProps}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-200 ${variantClasses[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
