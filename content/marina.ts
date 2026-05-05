/* ============================================================
 * 📍 MARINA — Master information (verified May 2026)
 * ------------------------------------------------------------
 * แก้ ชื่อ · ที่อยู่ · WhatsApp · พิกัด · สเปก ที่นี่ที่เดียว.
 * รายการที่มาร์ก // TBD = ยังต้องวัดจริงที่ท่าก่อน confirm.
 * ============================================================ */

export const MARINA = {
  // 🏷️  Brand identity — สะกด "Khlong Son" (มี space, มี H) ทุกที่
  name: "Khlong Son Marina",
  fullName: "Khlong Son Marina — Si Kao, Trang",
  legalEntity: "KLANG AKARD X Co., Ltd.",
  concessionYears: 30,
  tagline: "Your Natural Safe Haven in the Andaman Sea",
  subTagline:
    "Trang's first marina · 9 islands within 30 NM · Last stop before Langkawi",
  shortDesc:
    "Trang's first and only marina — a naturally protected concrete T-shape pier inside 1,500 rai of mangrove forest on the Khlong Sikao river.",

  // 📬  Address
  address: {
    line1: "Khlong Sikao Estuary",
    district: "Si Kao District",
    province: "Trang",
    country: "Thailand",
    postalCode: "92150",
  },

  // 🗺️  GPS — TBD verify on chart. Approximate waypoint per master sheet
  coords: {
    lat: 7.55, // TBD — verify on chart
    lng: 99.32, // TBD — verify on chart
  },

  // ☎️  Contact — WhatsApp PRIMARY · ไม่มี email/VHF อย่างเป็นทางการ
  contact: {
    whatsapp: "+66 99 242 2655",
    whatsappLink: "https://wa.me/66992422655",
    navilyName: "Khlong Son Marina - Trang",
    navily: "https://www.navily.com/port/khlong-son-marina-trang/35387",
    website: "https://khlongsonmarina.com",
  },

  // ⚓  Specs — verified from master sheet (no aspirational claims)
  specs: {
    structure: "Concrete T-Shape pier",
    berths: 10,
    berthType: "Alongside mooring",
    maxLOA: "25 m",
    depthLW: "2.0 m at Low Water",
    depthHW: "3.5 m+ at High Water",
    plannedDredging: "Marine Department dredging to 4 m planned",
    bottom: "Mud · excellent holding",
    mooring: "Alongside + anchor authorized in basin",
    tidal: "~2.5 m tidal range",
    protection: "360° natural · 1,500 rai mangrove forest",
    parking: "10 rai secure parking",
    bathrooms: "TBD — confirm count before go-live",

    // 🚧 Phase 2 vision — NOT yet available
    pontoonsAvailable: false,
    shorePowerAvailable: false,
    craneAvailable: false,
    hardstandAvailable: false,
  },

  // 🚗  Travel times
  distances: [
    { label: "Khlong Son Beach", value: "15 min" },
    { label: "Trang City", value: "40 min" },
    { label: "Krabi Int'l Airport", value: "90 min" },
    { label: "Langkawi, Malaysia", value: "60 NM south" },
  ],
};

/* ============================================================
 * ✨ SELLING POINTS — จุดขาย 6 ข้อ (ขึ้นในหน้า Home)
 * ============================================================ */

export const SELLING_POINTS = [
  {
    title: "Trang's first marina",
    body: "The first and only operating marina in Trang Province. Official Navily Partner Marina from day one.",
  },
  {
    title: "Total natural protection",
    body: "1,500 rai of mangrove forest on every side. Mirror-still water year-round.",
  },
  {
    title: "Last stop before Langkawi",
    body: "60 NM south to Malaysia, 12 NM north to Ko Lanta. The natural waypoint on the Andaman cruising route.",
  },
  {
    title: "Uncrowded island cluster",
    body: "9 islands within 30 NM — Ko Mook, Ko Kradan, Ko Ngai, Ko Rok, Ko Libong — without charter-fleet pressure.",
  },
  {
    title: "Wild dugong territory",
    body: "Ko Libong, Thailand's only sanctuary for wild dugongs, is reachable in under 35 minutes by boat.",
  },
  {
    title: "90 minutes from Krabi International",
    body: "Direct international connections, 90-minute private transfer to your berth. Trang Airport is 40 min.",
  },
];

/* ============================================================
 * 🏝️  NEARBY ISLANDS — verified NM/min from Google Maps
 * ============================================================ */

export type NearbyIsland = {
  name: string;
  nm: number | string;       // nautical miles, or label like "60"
  min?: number;              // approx. minutes by speedboat
  highlight: string;         // descriptive text
  signature?: boolean;       // gold star
};

export const NEARBY_ISLANDS: NearbyIsland[] = [
  { name: "Ko Ngai", nm: 9.7, min: 16, highlight: "Crystal-clear water" },
  { name: "Ko Cheua (Rope Island)", nm: 10.3, min: 17, highlight: "Pristine snorkeling" },
  {
    name: "Ko Mook · Emerald Cave",
    nm: 10.8, min: 18,
    highlight: "Tidal sea cave · morning only",
    signature: true,
  },
  { name: "Ko Waen (Ring Island)", nm: 11.3, min: 19, highlight: "Coral gardens" },
  { name: "Ko Lanta Old Town", nm: 12.4, min: 21, highlight: "Major sailing hub" },
  {
    name: "Ko Kradan",
    nm: 14.6, min: 24,
    highlight: "Anantara Resort · World's best beach 2023",
    signature: true,
  },
  {
    name: "Ko Libong",
    nm: 18.9, min: 31,
    highlight: "Thailand's only wild dugong sanctuary 🐚",
    signature: true,
  },
  {
    name: "Ko Rok",
    nm: 23.8, min: 40,
    highlight: "Premium diving · whale sharks 🤿",
    signature: true,
  },
  { name: "Ko Ha", nm: 26.5, min: 44, highlight: "Renowned dive site" },
  { name: "Lao Liang", nm: 30.2, min: 51, highlight: "Luxury eco island" },
  { name: "Langkawi, Malaysia", nm: 60, highlight: "Final south destination · Malaysia border" },
];
