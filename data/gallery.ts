export interface GalleryProject {
  title: string;
  category: string;
  description: string;
  swatch: "sky" | "clay" | "cream" | "ink";
  aspect: "square" | "portrait" | "landscape";
  src?: string;
}

export const GALLERY_ITEMS: GalleryProject[] = [
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
