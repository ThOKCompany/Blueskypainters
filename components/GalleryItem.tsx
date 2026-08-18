import Image from "next/image";

interface GalleryItemProps {
  title: string;
  category: string;
  src?: string;
  alt?: string;
  swatch: "sky" | "clay" | "cream" | "ink";
  aspect?: "square" | "portrait" | "landscape";
  revealGroup?: string;
  priority?: boolean;
}

const swatchClasses: Record<GalleryItemProps["swatch"], string> = {
  sky: "bg-gradient-to-br from-brand-accent to-brand",
  clay: "bg-gradient-to-br from-clay-200 to-clay-500",
  cream: "bg-gradient-to-br from-white to-brand-bg",
  ink: "bg-gradient-to-br from-brand to-navy",
};

const aspectClasses: Record<
  NonNullable<GalleryItemProps["aspect"]>,
  string
> = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
};

/**
 * A single project photo in the gallery. Pass `src` once a real project
 * photo is available; until then it renders as a styled paint-swatch
 * placeholder (matching the hero art direction) so the layout still reads
 * as intentional rather than broken.
 */
export default function GalleryItem({
  title,
  category,
  src,
  alt,
  swatch,
  aspect = "square",
  revealGroup,
  priority = false,
}: GalleryItemProps) {
  return (
    <figure
      data-reveal
      data-reveal-group={revealGroup}
      className={`group relative overflow-hidden rounded-2xl ${aspectClasses[aspect]}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt ?? title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={priority}
        />
      ) : (
        <div
          role="img"
          aria-label={`Placeholder image — ${title}`}
          className={`flex h-full w-full items-end p-5 ${swatchClasses[swatch]}`}
        >
          <svg
            aria-hidden="true"
            className="absolute right-5 top-5 opacity-40"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 3l7 7-8.5 8.5a3 3 0 01-2 1H7v-3.5a3 3 0 01.9-2.1L14 3z" />
          </svg>
        </div>
      )}
      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col gap-0.5 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent p-5 pt-10 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="text-xs font-medium uppercase tracking-wide text-white/80">
          {category}
        </span>
        <span className="text-base font-semibold">{title}</span>
      </figcaption>
    </figure>
  );
}
