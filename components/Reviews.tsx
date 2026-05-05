"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { REVIEWS } from "@/lib/constants";

export default function Reviews() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-cream)]">
      <div className="container-edge">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Preview reviews</span>
          <h2 className="heading-lg mt-3">
            The experience we&apos;re <span className="italic text-[var(--color-moss)]">building</span>.
          </h2>
          <p className="mt-4 text-[var(--color-navy-800)]/70 text-base">
            Real reviews coming as our first sailors arrive.
          </p>

          <div className="mt-6 mx-auto max-w-xl rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm font-medium text-amber-800">
            ⚠️ Preview Reviews — We are newly opened. These illustrate the
            experience we aim to deliver. Real verified reviews will appear here
            as sailors arrive.
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <motion.figure
              key={`${r.name}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="card p-6 flex flex-col"
            >
              <div className="flex items-center gap-1 text-[var(--color-gold)] mb-4">
                {Array.from({ length: r.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current" />
                ))}
                <span className="ml-auto text-[10px] uppercase tracking-[0.18em] text-[var(--color-navy-800)]/45">
                  {r.source}
                </span>
              </div>
              <blockquote className="text-sm leading-relaxed text-[var(--color-navy-800)]/85">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <figcaption className="mt-5 pt-5 border-t border-[var(--color-silver-200)] flex items-center gap-3">
                <span className="text-2xl">{r.flag}</span>
                <div>
                  <div className="text-sm font-medium text-[var(--color-navy)]">{r.name}</div>
                  <div className="text-xs text-[var(--color-navy-800)]/55">
                    {r.yacht} · {r.date}
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
