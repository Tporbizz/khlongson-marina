import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";
import ScrollReveal from "@/components/ScrollReveal";
import { MARINA } from "@/lib/constants";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Khlong Son Marina — Trang's first marina, operated under a 30-year concession by KLANG AKARD X Co., Ltd. on the Khlong Sikao river.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            A small marina with a <span className="italic text-[var(--color-gold)]">big sense of place</span>.
          </>
        }
        subtitle="Trang's first operational marina — built under a 30-year concession by KLANG AKARD X Co., Ltd. inside 1,500 rai of mangrove forest on the Khlong Sikao river."
        image={IMG.hero}
      />

      <section className="py-24 bg-[var(--color-cream)]">
        <div className="container-edge grid gap-12 lg:grid-cols-12 items-start">
          <ScrollReveal className="lg:col-span-6">
            <span className="eyebrow">Our story</span>
            <h2 className="heading-lg mt-3">
              The first <span className="italic text-[var(--color-moss)]">cruisers&apos; marina</span> in Trang.
            </h2>
            <div className="divider-gold" />
            <p className="mt-3 text-[var(--color-navy-800)]/80 leading-relaxed">
              Khlong Sikao has been a working river for generations. When sailors
              started dropping anchor inside the estuary to escape the southwest
              monsoon, we recognised an opportunity to build something quietly
              excellent — Trang Province&apos;s first proper marina.
            </p>
            <p className="mt-4 text-[var(--color-navy-800)]/80 leading-relaxed">
              Today we operate ten alongside berths on a concrete T-shape pier,
              with secure 10-rai parking and a Phase 2 masterplan that will bring
              floating pontoons, shore power, and a crew lounge as we grow.
              Operated under a 30-year concession by{" "}
              <span className="text-[var(--color-navy)] font-medium">{MARINA.legalEntity}</span>.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="lg:col-span-6">
            <div className="relative aspect-[4/5] rounded-[var(--radius-lg)] overflow-hidden">
              <Image
                src={IMG.about}
                alt="Khlong Son Marina pier close-up"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-[var(--color-cream-100)]">
        <div className="container-edge grid gap-10 md:grid-cols-3">
          {[
            {
              title: "Slow cruising",
              body: "Trang rewards those who linger. Our island chain is best sampled over a week, not a day.",
            },
            {
              title: "Light footprint",
              body: "Concrete pier built into the natural estuary, anchor-authorised basin, zero discharge inside the river. Always.",
            },
            {
              title: "Local hands",
              body: "Our team and partners are from Sikao. The marina is a job-creator, not a developer's outpost.",
            },
          ].map((v) => (
            <div key={v.title} className="card p-7">
              <h3 className="font-[var(--font-display)] text-xl text-[var(--color-navy)]">
                {v.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-navy-800)]/75 leading-relaxed">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-[var(--color-navy)] text-white">
        <div className="container-edge text-center max-w-2xl mx-auto">
          <span className="eyebrow text-[var(--color-gold-light)]">Find us</span>
          <h3 className="heading-md text-white mt-3">
            ~{MARINA.coords.lat.toFixed(2)}°N, ~{MARINA.coords.lng.toFixed(2)}°E
          </h3>
          <p className="mt-3 text-white/65">
            Approximate coordinates · WhatsApp before arrival to confirm leading
            marks and current depth at the entry.
          </p>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
