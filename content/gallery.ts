/* ============================================================
 * 🖼️  GALLERY — รูปสำหรับหน้า /gallery (ฟิลเตอร์ได้)
 * ------------------------------------------------------------
 * Categories: "Aerial" | "Facilities" | "Tours" | "Vision"
 * ใช้ /images/xxx ใน public/ เท่านั้น (no external hosts).
 * ============================================================ */

const MANGROVE_LONG =
  "/images/Close-up serene calm water in tropical mangrove canal, crystal clear turquoise water surface, gentle ripples, reflections of mangrove trees, peaceful atmosphere, natural protected waterway, soft natural lighting, tr.jpg";

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  category: "Aerial" | "Facilities" | "Tours" | "Vision";
};

export const GALLERY: GalleryItem[] = [
  { id: "g1",  src: "/images/Drone1.jpg", alt: "Aerial of pier and mangrove at golden hour",       category: "Aerial" },
  { id: "g2",  src: "/images/Drone2.jpg", alt: "Pier close-up with mangrove backdrop",              category: "Aerial" },
  { id: "g3",  src: "/images/Drone4.jpg", alt: "Drone shot of yachts berthed in the river basin",  category: "Aerial" },
  { id: "g4",  src: "/images/Drone5.jpg", alt: "Wide aerial of the Khlong Sikao estuary",          category: "Aerial" },
  { id: "g5",  src: MANGROVE_LONG,        alt: "Calm tropical mangrove water close-up",            category: "Tours" },
  { id: "g6",  src: "/images/MArina 3D.png", alt: "Phase 2 marina masterplan render",              category: "Vision" },
  { id: "g7",  src: "/images/Club House.png", alt: "Phase 2 clubhouse concept render",             category: "Vision" },
  { id: "g8",  src: "/images/Drone1.jpg", alt: "Approach into the Khlong Sikao river",             category: "Tours" },
  { id: "g9",  src: "/images/Drone2.jpg", alt: "Concrete T-shape pier from above",                 category: "Facilities" },
  { id: "g10", src: "/images/Drone4.jpg", alt: "Marina basin with anchored yachts",                category: "Facilities" },
  { id: "g11", src: "/images/Drone5.jpg", alt: "Mangrove channel approach from open sea",          category: "Tours" },
  { id: "g12", src: MANGROVE_LONG,        alt: "Mirror-still water inside the basin",              category: "Tours" },
];
