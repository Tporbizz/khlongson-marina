"use client";

import { useState, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Anchor, CalendarDays, Ship, Ruler, Loader2 } from "lucide-react";
import { getBerthingQuote, type QuoteResult } from "@/app/actions/booking";
import { formatTHB } from "@/lib/utils";

export default function BookingTeaser() {
  const [pending, startTransition] = useTransition();
  const [result, setResult] = useState<QuoteResult | null>(null);

  function handleSubmit(formData: FormData) {
    startTransition(async () => {
      const r = await getBerthingQuote(formData);
      setResult(r);
    });
  }

  return (
    <section
      id="booking"
      className="relative py-24 md:py-32 bg-[var(--color-cream)]"
    >
      <div className="container-edge grid gap-12 lg:grid-cols-12 items-start">
        <div className="lg:col-span-5">
          <span className="eyebrow">Quick estimate</span>
          <h2 className="heading-lg mt-3">
            Get a berthing quote in <span className="italic text-[var(--color-gold-dark)]">seconds</span>.
          </h2>
          <div className="divider-gold" />
          <p className="text-[var(--color-navy-800)]/75 leading-relaxed">
            Tell us about your boat and we&apos;ll generate an instant indicative
            rate. Final pricing is confirmed once a berth is held — usually within a
            few hours via WhatsApp or Navily.
          </p>

          <ul className="mt-8 space-y-3 text-sm text-[var(--color-navy-800)]/75">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]" />
              Daily, weekly, monthly, and long-stay rates available
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]" />
              Catamarans welcome — alongside berths available
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]" />
              No surprise surcharges. Fresh water ฿5/litre · Fuel on request.
            </li>
          </ul>
        </div>

        <div className="lg:col-span-7">
          <form
            action={handleSubmit}
            className="rounded-[var(--radius-lg)] bg-white p-6 md:p-8 shadow-xl shadow-[var(--color-navy)]/10 border border-[var(--color-silver-200)]"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Vessel type"
                icon={<Ship className="h-4 w-4 text-[var(--color-gold-dark)]" />}
              >
                <select
                  name="vesselType"
                  defaultValue="monohull"
                  className="w-full bg-transparent text-[var(--color-navy)] focus:outline-none"
                  required
                >
                  <option value="monohull">Monohull</option>
                  <option value="catamaran">Catamaran</option>
                  <option value="motor">Motor yacht</option>
                </select>
              </Field>

              <Field
                label="LOA (m)"
                icon={<Ruler className="h-4 w-4 text-[var(--color-gold-dark)]" />}
              >
                <input
                  type="number"
                  name="loa"
                  min={6}
                  max={25}
                  step={0.1}
                  defaultValue={12}
                  required
                  className="w-full bg-transparent text-[var(--color-navy)] focus:outline-none"
                />
              </Field>

              <Field
                label="Draft (m)"
                icon={<Anchor className="h-4 w-4 text-[var(--color-gold-dark)]" />}
              >
                <input
                  type="number"
                  name="draft"
                  min={0.5}
                  max={2.0}
                  step={0.1}
                  defaultValue={1.6}
                  required
                  className="w-full bg-transparent text-[var(--color-navy)] focus:outline-none"
                />
              </Field>

              <Field
                label="Arrival"
                icon={<CalendarDays className="h-4 w-4 text-[var(--color-gold-dark)]" />}
              >
                <input
                  type="date"
                  name="startDate"
                  required
                  className="w-full bg-transparent text-[var(--color-navy)] focus:outline-none"
                />
              </Field>

              <Field
                label="Departure"
                icon={<CalendarDays className="h-4 w-4 text-[var(--color-gold-dark)]" />}
                className="sm:col-span-2"
              >
                <input
                  type="date"
                  name="endDate"
                  required
                  className="w-full bg-transparent text-[var(--color-navy)] focus:outline-none"
                />
              </Field>
            </div>

            <button
              type="submit"
              disabled={pending}
              className="btn btn-navy mt-7 w-full justify-center disabled:opacity-60"
            >
              {pending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Calculating…
                </>
              ) : (
                "Get my estimate"
              )}
            </button>

            <AnimatePresence mode="wait">
              {result && (
                <motion.div
                  key={result.ok ? "ok" : "err"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-6"
                >
                  {result.ok ? (
                    <div className="rounded-[var(--radius-md)] bg-[var(--color-navy)] text-white p-6">
                      <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold-light)]">
                        Indicative total
                      </div>
                      <div className="font-[var(--font-display)] text-4xl mt-2">
                        {formatTHB(result.total)}
                      </div>
                      <div className="text-sm text-white/65 mt-2">
                        {result.days} {result.days === 1 ? "night" : "nights"} · daily rate{" "}
                        {formatTHB(result.dailyRate)}
                        {result.multihullSurcharge > 0 && (
                          <> · multihull surcharge {formatTHB(result.multihullSurcharge)}</>
                        )}
                      </div>
                      <p className="text-[11px] text-white/50 mt-4">
                        Excludes electric, water, and concierge add-ons. We&apos;ll
                        confirm berth availability via WhatsApp.
                      </p>
                    </div>
                  ) : (
                    <div className="rounded-[var(--radius-md)] bg-rose-50 text-rose-800 px-4 py-3 text-sm">
                      {result.error}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  icon,
  className = "",
  children,
}: {
  label: string;
  icon: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-navy-800)]/60">
        {label}
      </span>
      <div className="mt-1.5 flex items-center gap-2 border-b border-[var(--color-silver-200)] pb-2 focus-within:border-[var(--color-gold)] transition-colors">
        {icon}
        {children}
      </div>
    </label>
  );
}
