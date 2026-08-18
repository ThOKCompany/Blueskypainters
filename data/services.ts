export type ServiceIconKey =
  | "interior"
  | "exterior"
  | "fence"
  | "residential"
  | "plastering"
  | "colour"
  | "roof"
  | "house-wash";

export interface Service {
  slug: string;
  title: string;
  description: string;
  image: string;
  icon: ServiceIconKey;
  helpWith: string[];
}

export const SERVICES: Service[] = [
  {
    slug: "interior-painting",
    title: "Interior Painting",
    description:
      "Interior painting requires commitment and thorough preparation to achieve impressions that will last. Our painters specialise in extensive prep work for the best-finished painting results.",
    image: "/images/services/interior-painting.png",
    icon: "interior",
    helpWith: ["Thorough preparation", "Walls and ceilings", "Careful finishing"],
  },
  {
    slug: "exterior-painting",
    title: "Exterior Painting",
    description:
      "Whether it's a textured plaster wall, weather board, fibre cement cladding, concrete blocks, different bricks, cedar, hardy panels, timber and different wood materials, we can paint them all! We take a huge amount of pride in our work and always put in extra to achieve a high quality finish.",
    image: "/images/services/exterior-painting.png",
    icon: "exterior",
    helpWith: ["Weatherboard and timber", "Plaster and cladding", "High-quality exterior finishes"],
  },
  {
    slug: "fence-painting",
    title: "Fence Painting",
    description:
      "We can help you keep your fence for longer with durable staining or painting.",
    image: "/images/services/fence-painting.png",
    icon: "fence",
    helpWith: ["Fence preparation", "Durable staining", "Protective painting"],
  },
  {
    slug: "residential-commercial",
    title: "Residential & Commercial",
    description:
      "We specialise in painting all types of residential and commercial buildings in Auckland.",
    image: "/images/services/residential-commercial.png",
    icon: "residential",
    helpWith: ["Residential buildings", "Commercial buildings", "Clear project coordination"],
  },
  {
    slug: "plastering",
    title: "Plastering",
    description:
      "We provide a premium standard of finish to all plaster surfaces. Whether it's wall and ceiling skimming, plasterboard and GIB stopping, or repairing cracks, dents, and holes; you can rely on us to take care of them all. We're quick, proficient, and flexible.",
    image: "/images/services/plastering.png",
    icon: "plastering",
    helpWith: ["Wall and ceiling skimming", "GIB stopping", "Repairing cracks, dents and holes"],
  },
  {
    slug: "colour-consulting",
    title: "Colour Consulting",
    description:
      "Talk to us if you need help choosing your interior or exterior paint colours!",
    image: "/images/services/colour-consulting.png",
    icon: "colour",
    helpWith: ["Interior colour choices", "Exterior colour choices", "A considered palette"],
  },
  {
    slug: "roof-painting",
    title: "Roof Painting",
    description:
      "Safety is a priority when it comes to roof painting, and we are trained on working at height. Roof painting aims to protect the roof from rusting. Spray and hand painting are combined to achieve this.",
    image: "/images/services/roof-painting.png",
    icon: "roof",
    helpWith: ["Working at height", "Rust protection", "Spray and hand painting"],
  },
  {
    slug: "house-wash",
    title: "House Wash",
    description:
      "Maintain the value of your property with an exterior house wash. It's worth the investment, we're cost efficient, fast, and pay attention to detail!",
    image: "/images/services/house-wash.png",
    icon: "house-wash",
    helpWith: ["Exterior house washing", "Careful attention to detail", "Efficient preparation"],
  },
];

export function getService(slug: string) {
  return SERVICES.find((service) => service.slug === slug);
}
