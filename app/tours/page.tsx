import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import NearbyIslands from "@/components/NearbyIslands";
import CtaSection from "@/components/CtaSection";
import { TOURS } from "@/lib/constants";
import { IMG } from "@/lib/images";
import { Clock, ArrowUpRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Tours & Charters",
  description:
    "Dugong sanctuary expeditions, Emerald Cave at Koh Muk, 4 Islands private charter, and sunset cruises. Curated by Trang's most experienced skippers.",
};

export default function ToursPage() {
  return (
    <>
      <PageHero
        eyebrow="Signature experiences"
        title={
          <>
            Sail into <span className="italic text-[var(--color-gold)]">unforgettable</span> waters.
          </>
        }
        subtitle="Four flagship experiences plus custom private charters — designed for cruisers, families, and slow travelers who want depth, not crowds."
        image={IMG.catamaranSunset}
      />

      <section className="py-24 bg-[var(--color-cream)]">
        <div className="container-edge space-y-16">
          {TOURS.map((t, i) => (
            <ScrollReveal key={t.slug}>
              <article
                id={t.slug}
                className="grid gap-8 lg:grid-cols-12 items-center scroll-mt-24"
              >
                <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative aspect-[16/10] rounded-[var(--radius-lg)] overflow-hidden shadow-xl shadow-[var(--color-navy)]/15">
                    <Image
                      src={t.image}
                      alt={t.title}
                      fill
                      sizes="(min-width: 1024px) 60vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <div className="inline-flex items-center gap-1.5 text-xs text-[var(--color-navy-800)]/55">
                    <Clock className="h-3 w-3 text-[var(--color-gold)]" />
                    {t.duration}
                  </div>
                  <h2 className="heading-md mt-3">{t.title}</h2>
                  <ul className="mt-5 space-y-2 text-sm text-[var(--color-navy-800)]/80">
                    {t.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2">
                        <Check className="h-4 w-4 mt-0.5 text-[var(--color-moss)]" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 flex items-center justify-between gap-4">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-navy-800)]/55">
                        Pricing
                      </div>
                      <div className="font-[var(--font-display)] text-xl text-[var(--color-navy)]">
                        {t.price}
                      </div>
                    </div>
                    <Link href="/contact" className="btn btn-primary">
                      Enquire <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <NearbyIslands />
      <CtaSection />
    </>
  );
}
