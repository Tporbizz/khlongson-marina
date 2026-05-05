"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { TOURS } from "@/lib/constants";
import { Clock, ArrowUpRight } from "lucide-react";

export default function ToursSection() {
  return (
    <section
      id="tours"
      className="relative py-24 md:py-32 bg-[var(--color-navy)] text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(212,175,135,0.16),_transparent_55%)]" />

      <div className="relative container-edge">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="eyebrow text-[var(--color-gold-light)]">
              Signature experiences
            </span>
            <h2 className="heading-lg mt-3 text-white max-w-2xl">
              Sail into the Andaman&apos;s most magical waters.
            </h2>
          </div>
          <Link
            href="/tours"
            className="text-sm uppercase tracking-[0.18em] text-[var(--color-gold-light)] hover:text-white inline-flex items-center gap-1"
          >
            All tours <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TOURS.map((t, i) => (
            <motion.article
              key={t.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group rounded-[var(--radius-lg)] overflow-hidden bg-[var(--color-navy-800)] border border-white/5 hover:border-[var(--color-gold)]/40 transition-all"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={t.image}
                  alt={t.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy-900)] via-transparent to-transparent" />
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-[var(--color-navy-900)]/70 backdrop-blur px-3 py-1 rounded-full text-[11px]">
                  <Clock className="h-3 w-3 text-[var(--color-gold)]" />
                  {t.duration}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-[var(--font-display)] text-lg leading-tight">
                  {t.title}
                </h3>
                <ul className="mt-3 space-y-1.5 text-xs text-white/65">
                  {t.highlights.slice(0, 2).map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="text-[var(--color-gold)]">·</span>
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex items-baseline justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.18em] text-white/45">
                      Pricing
                    </span>
                    <div className="text-[var(--color-gold-light)] font-medium text-sm">
                      {t.price}
                    </div>
                  </div>
                  <Link
                    href={`/tours#${t.slug}`}
                    className="text-xs uppercase tracking-[0.16em] text-white/85 hover:text-[var(--color-gold)] inline-flex items-center gap-1"
                  >
                    Enquire <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
