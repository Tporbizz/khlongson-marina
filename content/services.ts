/* ============================================================
 * 🛠️  SERVICES — 6 services per brief
 * ------------------------------------------------------------
 * บริการที่ available · มีสถานะ on-request กำกับชัดเจน.
 * ============================================================ */

import type { LucideIcon } from "lucide-react";
import {
  Anchor, Fish, Ship, Plane, Sparkles, Wrench, Trees,
  ShieldCheck, Wifi, ShowerHead, Compass, Fuel,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  category: "marina" | "tour" | "concierge";
  /** บริการเปิดให้แล้ว / ยังไม่เปิด */
  available: boolean;
  /** ต้อง WhatsApp นัดล่วงหน้า */
  onRequest: boolean;
};

export const SERVICES: Service[] = [
  {
    slug: "berthing",
    title: "Yacht Berthing",
    description:
      "Alongside mooring on a solid concrete T-shape pier. Calm protected estuary — flat water in all conditions. Anchor also authorized in the basin.",
    icon: Anchor,
    category: "marina",
    available: true,
    onRequest: false,
  },
  {
    slug: "fuel-water",
    title: "Fuel & Fresh Water",
    description:
      "Diesel and gasoline at market price + ฿5 / litre. Fresh water ฿5 / litre. Order 24 hours ahead via WhatsApp.",
    icon: Fuel,
    category: "marina",
    available: true,
    onRequest: true,
  },
  {
    slug: "islands",
    title: "Island Day Trips",
    description:
      "Longtail boat to Ko Mook Emerald Cave, Ko Kradan, Ko Ngai, Ko Libong dugongs. All arranged on request via WhatsApp.",
    icon: Ship,
    category: "tour",
    available: true,
    onRequest: true,
  },
  {
    slug: "dugong",
    title: "Dugong Spotting",
    description:
      "Responsible eco-tour to Ko Libong — Thailand's only wild dugong sanctuary. Slow longtail approach. Book 1 day ahead.",
    icon: Fish,
    category: "tour",
    available: true,
    onRequest: true,
  },
  {
    slug: "mechanic",
    title: "Marine Mechanic",
    description:
      "Mobile marine mechanic arranged within 24 hours. Hull inspection diving also available.",
    icon: Wrench,
    category: "marina",
    available: true,
    onRequest: true,
  },
  {
    slug: "concierge",
    title: "Concierge Services",
    description:
      "Provisioning, laundry, local SIM cards, massage, airport transfers. Everything arranged via WhatsApp — no permanent staff on site yet.",
    icon: Sparkles,
    category: "concierge",
    available: true,
    onRequest: true,
  },
];

/* AMENITIES — visible / planned features at the marina */
export const AMENITIES = [
  { icon: Trees, label: "1,500 rai mangrove protection · 360°" },
  { icon: ShieldCheck, label: "Secure 10-rai gated parking" },
  { icon: ShowerHead, label: "Guest facilities at the pier office" },
  { icon: Wifi, label: "Strong mobile data signal in the basin" },
  { icon: Compass, label: "Local pilotage support via WhatsApp" },
  { icon: Anchor, label: "Anchor authorized inside the basin" },
];
