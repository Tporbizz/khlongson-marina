"use client";

import { motion } from "framer-motion";
import { APPROACH_TIPS } from "@/lib/constants";
import { Compass } from "lucide-react";

export default function ApproachGuide() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-navy-900)] text-white">
      <div className="container-edge">
        <div className="grid gap-8 lg:grid-cols-12 mb-12">
          <div className="lg:col-span-5">
            <span className="eyebrow text-[var(--color-gold-light)]">For skippers</span>
            <h2 className="heading-lg mt-3 text-white">
              Approach &amp; <span className="italic text-[var(--color-gold)]">Navigation</span>.
            </h2>
            <div className="divider-gold" />
            <p className="text-white/65 leading-relaxed">
              The Khlong Sikao river entrance is straightforward at the right tide.
              WhatsApp +66 99 242 2655 before arrival — we&apos;ll send current depth
              and tide guidance, plus precise leading marks once you contact us.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-px bg-white/10 rounded-[var(--radius-lg)] overflow-hidden">
              {APPROACH_TIPS.map((tip, i) => (
                <motion.div
                  key={tip.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="bg-[var(--color-navy-900)] p-6 md:p-7"
                >
                  <div className="flex items-start gap-4">
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[var(--color-gold)]/15 text-[var(--color-gold-light)]">
                      <Compass className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-[var(--font-display)] text-lg text-white">
                        {tip.title}
                      </h3>
                      <p className="mt-1 text-sm text-white/70 leading-relaxed">
                        {tip.body}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
