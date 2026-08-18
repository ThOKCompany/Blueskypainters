/**
 * Small inline line icons used across the homepage (services, trust
 * points, contact). Kept together in one file rather than as individual
 * components — each is a couple of SVG paths, not a piece of UI structure.
 */

type IconProps = { className?: string };

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function IconRoomInterior({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
      <path d="M9 21v-6h6v6" />
    </svg>
  );
}

export function IconExterior({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 21V10l8-6 8 6v11" />
      <path d="M4 21h16" />
      <path d="M9 21v-5a3 3 0 016 0v5" />
    </svg>
  );
}

export function IconResidential({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3 11l9-7 9 7" />
      <path d="M5 10v10h14V10" />
      <path d="M9 20v-6h6v6" />
    </svg>
  );
}

export function IconCommercial({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1" />
    </svg>
  );
}

export function IconRepaint({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3 21c1.5-1.5 2-3 2-5 0-3 2-4 4-4 3 0 4 2 4 4" />
      <path d="M13 12l7-7 3 3-7 7-4 1 1-4z" />
    </svg>
  );
}

export function IconFeatureWall({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="4" width="18" height="16" rx="1" />
      <path d="M3 12h18" />
      <path d="M9 4v8" />
    </svg>
  );
}

export function IconDetail({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  );
}

export function IconFinish({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3l1.9 4.6L19 9l-4 3.3L16.2 18 12 15.3 7.8 18 9 12.3 5 9l5.1-1.4L12 3z" />
    </svg>
  );
}

export function IconReliable({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.2 2" />
    </svg>
  );
}

export function IconTidy({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 4l7 7" />
      <path d="M14 6l4-3 3 3-3 4" />
      <path d="M9.5 9.5L4 20l3 1 5.5-5.5" />
      <path d="M14 12l6 6" />
    </svg>
  );
}

export function IconCustomer({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M20 21a8 8 0 10-16 0" />
      <circle cx="12" cy="8" r="4" />
    </svg>
  );
}

export function IconWorkmanship({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M14.5 3.5l6 6L12 18l-6 1.5L7.5 13l7-9.5z" />
      <path d="M13 6l5 5" />
    </svg>
  );
}

export function IconFence({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 21V7l2-3 2 3v14" />
      <path d="M13 21V7l2-3 2 3v14" />
      <path d="M3 11h6M11 11h6M3 16h6M11 16h6" />
    </svg>
  );
}

export function IconPalette({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3a9 8 0 000 16c1.1 0 1.6-.7 1.6-1.5 0-.4-.2-.7-.4-1-.3-.3-.4-.6-.4-1 0-.8.7-1.5 1.6-1.5H16a4 4 0 004-4c0-4.4-3.6-7-8-7z" />
      <circle cx="7.5" cy="10.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="10.5" cy="7" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="7.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconRoof({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3 12L12 4l9 8" />
      <path d="M6 11.5V20h12v-8.5" />
      <path d="M6 15h12" />
    </svg>
  );
}

export function IconHouseWash({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 20l7-13 7 13" />
      <path d="M8.5 14h7" />
      <path d="M17.5 5.5c.8.7 1.2 1.4 1.2 2.2 0 .9-.6 1.3-1.2 1.3S16.3 8.6 16.3 7.7c0-.8.4-1.5 1.2-2.2z" />
    </svg>
  );
}

export function IconPhone({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
    </svg>
  );
}

export function IconMail({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

export function IconLocation({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

export function IconFacebook({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M14 8.5h2.5V5H14a3.5 3.5 0 00-3.5 3.5V11H8v3.5h2.5V21H14v-6.5h2.4l.6-3.5h-3V9c0-.4.3-.5.5-.5z" />
    </svg>
  );
}

export function IconArrowRight({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}
