"use server";

import { BOOKING_RATES } from "@/content/pricing";

export type QuoteInput = {
  loa: number;
  draft: number;
  startDate: string;
  endDate: string;
  vesselType: "monohull" | "catamaran" | "motor";
};

export type QuoteResult = {
  ok: true;
  loa: number;
  draft: number;
  days: number;
  vesselType: QuoteInput["vesselType"];
  dailyRate: number;
  subtotal: number;
  multihullSurcharge: number;
  total: number;
  currency: "THB";
} | {
  ok: false;
  error: string;
};

function diffDays(a: string, b: string): number {
  const start = new Date(a).getTime();
  const end = new Date(b).getTime();
  if (Number.isNaN(start) || Number.isNaN(end)) return 0;
  const diff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
  return Math.max(diff, 1);
}

export async function getBerthingQuote(formData: FormData): Promise<QuoteResult> {
  const loa = Number(formData.get("loa"));
  const draft = Number(formData.get("draft"));
  const startDate = String(formData.get("startDate") ?? "");
  const endDate = String(formData.get("endDate") ?? "");
  const vesselType = String(formData.get("vesselType") ?? "monohull") as QuoteInput["vesselType"];

  if (!loa || !draft || !startDate || !endDate) {
    return { ok: false, error: "Please fill every field." };
  }
  if (loa < BOOKING_RATES.loaMin || loa > BOOKING_RATES.loaMax) {
    return {
      ok: false,
      error: `LOA must be between ${BOOKING_RATES.loaMin} m and ${BOOKING_RATES.loaMax} m.`,
    };
  }
  if (draft > BOOKING_RATES.draftMax) {
    return {
      ok: false,
      error: `Maximum draft at low water is ${BOOKING_RATES.draftMax} m. Contact us for special arrangements.`,
    };
  }

  const days = diffDays(startDate, endDate);
  const draftFactor =
    draft >= BOOKING_RATES.deepDraftThreshold ? BOOKING_RATES.deepDraftFactor : 1;
  const multihullFactor = vesselType === "catamaran" ? BOOKING_RATES.multihullFactor : 1;

  const dailyRate = Math.round(loa * BOOKING_RATES.baseRatePerMeter * draftFactor);
  const subtotal = dailyRate * days;
  const multihullSurcharge = Math.round(subtotal * (multihullFactor - 1));
  const total = subtotal + multihullSurcharge;

  return {
    ok: true,
    loa,
    draft,
    days,
    vesselType,
    dailyRate,
    subtotal,
    multihullSurcharge,
    total,
    currency: "THB",
  };
}
