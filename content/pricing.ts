/* ============================================================
 * 💰 PRICING — ราคาทั้งหมด แก้ที่นี่ที่เดียว
 * ------------------------------------------------------------
 *   1) BOOKING_RATES   → ใช้คำนวณราคาในฟอร์ม "Get my estimate"
 *   2) BERTHING_RATES  → ตารางราคา 4 ระดับ (หน้า Berthing)
 *   3) ANCILLARY       → บริการเสริมแบบ On Request พร้อมราคา
 *   ทัวร์ราคา: content/tours.ts
 * ============================================================ */

/* -------- 1) สูตรคำนวณราคาท่าจอด (Server Action) -------- */
export const BOOKING_RATES = {
  /** ราคาฐาน บาท / เมตร LOA / วัน */
  baseRatePerMeter: 220,
  /** คาตามารัน คูณ × ค่าฐาน */
  multihullFactor: 1.2,
  /** ถ้า draft ≥ ค่านี้ (เมตร) จะมี surcharge */
  deepDraftThreshold: 1.8,
  deepDraftFactor: 1.1,
  /** ขนาดเรือที่รับคำนวณ */
  loaMin: 6,
  loaMax: 25,
  draftMax: 2.0,
} as const;

/* -------- 2) ตารางราคา 4 ระดับ (หน้า Berthing) -------- */
export type BerthingRate = {
  loa: string;           // ช่วง LOA
  thbDay?: number;       // บาท/วัน
  eurDay?: number;       // €/วัน
  thbWeek?: number;      // บาท/สัปดาห์ (rate × 7 ลด)
  thbMonth?: number;     // บาท/เดือน (long-stay)
  note?: string;         // ใช้กับ Catamaran row ที่เป็น × multiplier
};

export const BERTHING_RATES: BerthingRate[] = [
  { loa: "Up to 10 m", thbDay: 500, eurDay: 14, thbWeek: 2700, thbMonth: 18000 },
  { loa: "10 m – 15 m", thbDay: 900, eurDay: 24, thbWeek: 4900, thbMonth: 22000 },
  { loa: "15 m – 20 m", thbDay: 1300, eurDay: 35, thbWeek: 7000, thbMonth: 26000 },
  { loa: "20 m – 25 m", thbDay: 1800, eurDay: 49, thbWeek: 9700, thbMonth: 32000 },
  { loa: "Catamaran", note: "Rate × 1.2 of monohull tier" },
];

/* -------- 3) บริการเสริมแบบ On Request พร้อมราคา -------- */
export type AncillaryService = {
  label: string;
  price: string;
  note?: string;
};

export const ANCILLARY_SERVICES: AncillaryService[] = [
  { label: "Diesel / Gasoline", price: "Market + ฿5 / litre", note: "Order 24 hrs ahead" },
  { label: "Fresh water", price: "฿5 / litre", note: "Metered at the dock" },
  { label: "Ice", price: "฿40 / bag" },
  { label: "Secure parking", price: "฿100 / day", note: "10-rai compound" },
  { label: "Mobile massage", price: "฿400 – 600 / hr", note: "On-deck or in lounge" },
  { label: "Laundry service", price: "฿150 – 250 / load" },
  { label: "Local SIM card", price: "฿300 – 400" },
  { label: "Marine mechanic", price: "Quote on request", note: "24-hour response" },
  { label: "Provisioning", price: "Cost + ฿200 service fee" },
  { label: "Immigration assistance", price: "฿500 – 1,500", note: "Routes to Kantang Port" },
];
