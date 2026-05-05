"use client";

import { motion } from "framer-motion";
import { SELLING_POINTS } from "@/content/marina";
import {
  Award,
  Trees,
  Compass,
  Sparkles,
  Droplets,
  Plane,
} from "lucide-react";

const ICONS = [Award, Trees, Compass, Sparkles, Droplets, Plane];

export default function SellingPoints() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-cream-100)]">
      <div className="container-edge">
        <div className="max-w-2xl">
          <span className="eyebrow">Why Khlong Son</span>
          <h2 className="heading-lg mt-3">
            Six reasons cruisers <span className="italic text-[var(--color-moss)]">stay longer</span>.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SELLING_POINTS.map((sp, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.article
                key={sp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="card p-7"
              >
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[var(--color-gold)]/15 text-[var(--color-gold-dark)]">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <div>
                    <h3 className="font-[var(--font-display)] text-xl text-[var(--color-navy)] leading-tight">
                      {sp.title}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--color-navy-800)]/75 leading-relaxed">
                      {sp.body}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
