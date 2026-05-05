/* ============================================================
 * 🖼️  GALLERY — รูปสำหรับหน้า /gallery (ฟิลเตอร์ได้)
 * ------------------------------------------------------------
 * Categories: "Aerial" | "Facilities" | "Tours" | "Vision"
 * ใช้ /images/xxx ใน public/ เท่านั้น (no external hosts).
 * ทุกไฟล์รูปจริง โผล่ครั้งเดียว (no duplicates).
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
  { id: "g1", src: "/images/Drone1.jpg",        alt: "Aerial of pier and mangrove at golden hour",   category: "Aerial" },
  { id: "g2", src: "/images/Drone2.jpg",        alt: "Concrete T-shape pier from above",             category: "Facilities" },
  { id: "g3", src: "/images/Drone4.jpg",        alt: "Yachts berthed in the protected river basin",  category: "Aerial" },
  { id: "g4", src: "/images/Drone5.jpg",        alt: "Wide aerial of the Khlong Sikao estuary",      category: "Aerial" },
  { id: "g5", src: MANGROVE_LONG,               alt: "Calm mangrove water close-up",                 category: "Tours" },
  { id: "g6", src: "/images/50905-35917.jpeg",  alt: "Longtail boats on a turquoise Trang beach",    category: "Tours" },
  { id: "g7", src: "/images/MArina 3D.png",     alt: "Phase 2 marina masterplan render",             category: "Vision" },
  { id: "g8", src: "/images/Club House.png",    alt: "Phase 2 club house concept render",            category: "Vision" },
];
