import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { IMG } from "@/lib/images";
import { Sparkles } from "lucide-react";

export default function VisionMasterplan() {
  return (
    <section className="relative bg-[var(--color-navy-900)] text-white py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,169,120,0.12),_transparent_55%)]" />
      <div className="container-edge relative">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          <ScrollReveal className="lg:col-span-5">
            <span className="eyebrow text-[var(--color-gold-light)]">The Vision</span>
            <h2 className="heading-lg mt-3 text-white">
              Khlong Son Marina <span className="italic text-[var(--color-gold)]">Masterplan</span>.
            </h2>
            <div className="divider-gold" />
            <p className="mt-3 text-white/75 leading-relaxed">
              We are building Thailand&apos;s premier boutique marina in the heart of
              Trang&apos;s island cluster. Phase 2 will bring floating pontoons,
              shore power, a clubhouse, and villa accommodations — all designed to
              sit lightly on the mangrove and serve the slow-cruising sailor.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-gold)]/10 px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--color-gold-light)]">
              <Sparkles className="h-4 w-4" />
              Architectural Vision · Phase 2 Development Plan
            </div>

            <ul className="mt-8 space-y-3 text-sm text-white/70">
              <li className="flex gap-3">
                <span className="text-[var(--color-gold)]">·</span>
                Floating pontoon expansion to ~20 berths
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-gold)]">·</span>
                Shore power, fuel dock, and pump-out
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-gold)]">·</span>
                Club house, showers, and laundry building
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-gold)]">·</span>
                Villa accommodations for crew &amp; guests
              </li>
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.15} className="lg:col-span-7">
            <div className="relative aspect-[4/3] rounded-[var(--radius-lg)] overflow-hidden border border-white/10 shadow-2xl shadow-[var(--color-navy-900)]/40">
              <Image
                src={IMG.vision}
                alt="Khlong Son Marina Phase 2 masterplan render"
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
              />
              <span className="absolute bottom-4 left-4 rounded bg-[var(--color-navy-900)]/80 backdrop-blur px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-[var(--color-gold-light)] italic">
                Development Vision — Phase 2 Masterplan
              </span>
            </div>
          </ScrollReveal>
        </div>

        {/* Club House feature */}
        <ScrollReveal delay={0.1} className="mt-16">
          <div className="grid gap-8 lg:grid-cols-12 items-center border-t border-white/10 pt-16">
            <div className="lg:col-span-7 order-2 lg:order-1 relative aspect-[4/3] rounded-[var(--radius-lg)] overflow-hidden border border-white/10 shadow-2xl shadow-[var(--color-navy-900)]/40">
              <Image
                src={IMG.clubHouse}
                alt="Phase 2 club house concept render"
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
              />
              <span className="absolute bottom-4 left-4 rounded bg-[var(--color-navy-900)]/80 backdrop-blur px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-[var(--color-gold-light)] italic">
                Development Vision — Phase 2 Masterplan
              </span>
            </div>
            <div className="lg:col-span-5 order-1 lg:order-2">
              <span className="eyebrow text-[var(--color-gold-light)]">The Club House</span>
              <h3 className="heading-md mt-3 text-white">
                A quiet base for crews and visiting cruisers.
              </h3>
              <p className="mt-4 text-white/75 leading-relaxed">
                Phase 2 brings a dedicated club house at the head of the pier — guest
                lounge, showers, laundry, a small chandlery, and an open-air bar
                looking out over the mangrove basin.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
