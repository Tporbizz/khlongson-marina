"use client";

import { motion } from "framer-motion";
import { NEARBY_ISLANDS } from "@/content/marina";
import { Compass, Star } from "lucide-react";

export default function NearbyIslands() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-navy-900)] text-white">
      <div className="container-edge">
        <div className="grid gap-6 lg:grid-cols-12 mb-12 items-end">
          <div className="lg:col-span-7">
            <span className="eyebrow text-[var(--color-gold-light)]">Cruising chart</span>
            <h2 className="heading-lg mt-3 text-white">
              Eleven destinations within a <span className="italic text-[var(--color-gold)]">day&apos;s sail</span>.
            </h2>
            <p className="mt-4 text-white/65 max-w-xl">
              Distances verified via Google Maps. Times assume an average of ~35
              kts on a private speedboat — sailing yachts plan accordingly.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {NEARBY_ISLANDS.map((island, i) => (
            <motion.div
              key={island.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
              className="rounded-[var(--radius-md)] bg-[var(--color-navy)] border border-white/10 p-5 hover:border-[var(--color-gold)]/40 transition-colors"
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="font-[var(--font-display)] text-lg leading-tight text-white">
                  {island.name}
                </h3>
                {island.signature && (
                  <Star className="h-4 w-4 text-[var(--color-gold)] shrink-0 fill-current" />
                )}
              </div>

              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-[var(--color-gold-light)]">
                <span className="inline-flex items-center gap-1">
                  <Compass className="h-3 w-3" />
                  {island.nm} NM
                </span>
                {island.min && (
                  <span className="text-white/45">·  {island.min} min</span>
                )}
              </div>

              <p className="mt-3 text-xs text-white/65 leading-relaxed">
                {island.highlight}
              </p>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-[11px] text-white/40">
          ⭐ Signature destinations · WhatsApp +66 99 242 2655 to plan a charter.
        </p>
      </div>
    </section>
  );
}
