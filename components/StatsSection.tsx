"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/constants";

export default function StatsSection() {
  return (
    <section className="bg-[var(--color-navy)] text-white py-20">
      <div className="container-edge">
        <div className="grid gap-x-8 gap-y-10 grid-cols-2 md:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              className="border-l-2 border-[var(--color-gold)] pl-5 py-1"
            >
              <div className="font-[var(--font-display)] text-3xl md:text-4xl leading-none text-white">
                {s.value}
              </div>
              <div className="mt-2 text-[11px] uppercase tracking-[0.18em] text-white/65">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
