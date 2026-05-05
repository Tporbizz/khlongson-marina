"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { SERVICES, type Service } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const FILTERS = [
  { id: "all", label: "All services" },
  { id: "marina", label: "Marina" },
  { id: "tour", label: "Tours" },
  { id: "concierge", label: "Concierge" },
] as const;

type FilterId = (typeof FILTERS)[number]["id"];

export default function ServicesSection() {
  const [filter, setFilter] = useState<FilterId>("all");
  const items: Service[] =
    filter === "all" ? SERVICES : SERVICES.filter((s) => s.category === filter);

  return (
    <section id="services" className="py-24 md:py-32 bg-[var(--color-cream-100)]">
      <div className="container-edge">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="eyebrow">Everything on the dock</span>
            <h2 className="heading-lg mt-3 max-w-2xl">
              A full-service marina with the soul of a river village.
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={cn(
                  "px-4 py-2 text-sm rounded-full border transition-all",
                  filter === f.id
                    ? "bg-[var(--color-navy)] border-[var(--color-navy)] text-white"
                    : "bg-white border-[var(--color-silver-200)] text-[var(--color-navy-800)]/70 hover:border-[var(--color-gold)]"
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
                className="card p-6 group"
              >
                <div className="grid h-12 w-12 place-items-center rounded-[var(--radius-sm)] bg-[var(--color-navy)] text-[var(--color-gold)] mb-5 group-hover:bg-[var(--color-gold)] group-hover:text-[var(--color-navy)] transition-colors">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-[var(--font-display)] text-xl text-[var(--color-navy)]">
                    {s.title}
                  </h3>
                  {s.onRequest && (
                    <span className="shrink-0 rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-gold)]/10 px-2 py-0.5 text-[9px] uppercase tracking-[0.15em] text-[var(--color-gold-dark)]">
                      On Request
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-navy-800)]/70">
                  {s.description}
                </p>
                <Link
                  href={`/services#${s.slug}`}
                  className="mt-5 inline-flex items-center gap-1 text-xs uppercase tracking-[0.18em] text-[var(--color-gold-dark)] hover:text-[var(--color-navy)]"
                >
                  Learn more <ArrowRight className="h-3 w-3" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
