/**
 * Central image registry — Khlong Son Marina real photography.
 * All assets live in public/images/ — no external hosts.
 */

const MANGROVE_LONG =
  "/images/Close-up serene calm water in tropical mangrove canal, crystal clear turquoise water surface, gentle ripples, reflections of mangrove trees, peaceful atmosphere, natural protected waterway, soft natural lighting, tr.jpg";

export const IMG = {
  // brand mark — transparent PNG (white lines on dark)
  logo: "/images/Logo_white_transparent.png",

  // hero / large compositions
  hero: "/images/Drone1.jpg",
  about: "/images/Drone2.jpg",
  estuary: MANGROVE_LONG,

  // Phase 2 vision renders
  vision: "/images/MArina 3D.png",
  clubHouse: "/images/Club House.png",

  // chart asset
  islandMap: "/images/Island Map.png",
  nauticalMap: "/images/Drone5.jpg",

  // tour cards (use real drone shots)
  marinaAerial: "/images/Drone1.jpg",
  yachtsMangrove: "/images/Drone4.jpg",
  catamaranSunset: "/images/Drone5.jpg",
  dugong: MANGROVE_LONG,
} as const;

// Flat list of every real photo for galleries / carousels
export const ALL_PHOTOS: { src: string; alt: string; category: "Aerial" | "Estuary" | "Vision" }[] = [
  { src: "/images/Drone1.jpg", alt: "Aerial of marina at golden hour", category: "Aerial" },
  { src: "/images/Drone2.jpg", alt: "Pier close-up with mangrove backdrop", category: "Aerial" },
  { src: "/images/Drone4.jpg", alt: "Drone shot over the river basin", category: "Aerial" },
  { src: "/images/Drone5.jpg", alt: "Wide aerial of the Khlong Sikao estuary", category: "Aerial" },
  { src: MANGROVE_LONG, alt: "Calm mangrove water close-up", category: "Estuary" },
  { src: "/images/MArina 3D.png", alt: "Phase 2 marina masterplan render", category: "Vision" },
  { src: "/images/Club House.png", alt: "Phase 2 club house concept render", category: "Vision" },
];
