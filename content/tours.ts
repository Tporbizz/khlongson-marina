/* ============================================================
 * ⛵ TOURS — ทัวร์ที่จัดจากท่าเรือ
 * ------------------------------------------------------------
 *  • title       — ชื่อทัวร์
 *  • duration    — ระยะเวลา (text)
 *  • price       — ข้อความราคา (string) เช่น "Quote on request" หรือ "From ฿4,500"
 *  • image       — IMG.xxx จาก @/lib/images
 *  • highlights  — bullet ในการ์ด (3-4 ข้อ)
 * ============================================================ */

import { IMG } from "@/lib/images";

export type Tour = {
  slug: string;
  title: string;
  duration: string;
  price: string;
  image: string;
  highlights: string[];
};

export const TOURS: Tour[] = [
  {
    slug: "dugong",
    title: "Dugong Sanctuary Expedition",
    duration: "Half day · 4 hours",
    price: "Quote on request",
    image: IMG.estuary,
    highlights: [
      "Slow longtail approach to Ko Libong",
      "Thailand's only wild dugong sanctuary",
      "Up to 6 guests per departure",
    ],
  },
  {
    slug: "emerald-cave",
    title: "Emerald Cave & Ko Mook",
    duration: "Full day · 8 hours",
    price: "Quote on request",
    image: IMG.marinaAerial,
    highlights: [
      "Swim through the 80-meter sea cave (mornings)",
      "Hidden lagoon beach picnic",
      "Snorkel reef stop at Ko Kradan",
    ],
  },
  {
    slug: "four-islands",
    title: "4 Islands Private Charter",
    duration: "Full day · 9 hours",
    price: "Quote on request",
    image: "/images/50905-35917.jpeg",
    highlights: [
      "Ko Mook · Ko Kradan · Ko Ngai · Ko Liang",
      "Fresh local seafood arranged on request",
      "Skipper-curated route, flexible schedule",
    ],
  },
  {
    slug: "sunset",
    title: "Andaman Sunset Cruise",
    duration: "3 hours · golden hour",
    price: "Quote on request",
    image: IMG.catamaranSunset,
    highlights: [
      "Sunset drinks at anchor",
      "River departure through mangrove channel",
      "Returns under starlight",
    ],
  },
];
