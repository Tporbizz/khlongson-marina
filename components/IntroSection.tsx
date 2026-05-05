import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { MARINA } from "@/lib/constants";
import { IMG } from "@/lib/images";
import { MapPin } from "lucide-react";

export default function IntroSection() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-cream)]">
      <div className="container-edge grid gap-12 md:gap-20 lg:grid-cols-12 items-center">
        <ScrollReveal className="lg:col-span-5">
          <span className="eyebrow">Discover the Marina</span>
          <h2 className="heading-lg mt-3">
            Where the river meets the
            <span className="italic text-[var(--color-moss)]"> Andaman</span>.
          </h2>
          <div className="divider-gold" />
          <p className="text-base md:text-[17px] leading-relaxed text-[var(--color-navy-800)]/80">
            Tucked inside the Khlong Sikao estuary in Trang, Khlong Son Marina is a
            naturally protected basin shielded by 1,500 rai of mangrove forest.
            The river offers near-total protection from Andaman swell — a rare
            quality in this part of Thailand.
          </p>
          <p className="mt-4 text-base md:text-[17px] leading-relaxed text-[var(--color-navy-800)]/80">
            A concrete T-shape pier provides 10 alongside berths up to 25 m LOA.
            Depth is 2.0 m at low water, 3.5 m+ at high — comfortable for
            catamarans and most monohulls. Anchor authorised inside the basin
            with excellent mud holding.
          </p>

          <div className="mt-8 flex items-center gap-2 text-sm text-[var(--color-navy-800)]/70">
            <MapPin className="h-4 w-4 text-[var(--color-gold)]" />
            <span>
              {MARINA.address.line1}, {MARINA.address.district}, {MARINA.address.province}
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="lg:col-span-7">
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-[var(--radius-lg)] overflow-hidden shadow-2xl shadow-[var(--color-navy)]/15">
              <Image
                src={IMG.about}
                alt="Khlong Son Marina pier close-up inside the mangrove estuary"
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block w-48 h-48 rounded-[var(--radius-lg)] overflow-hidden border-4 border-[var(--color-cream)] shadow-xl">
              <Image
                src={IMG.dugong}
                alt="Dugong grazing on seagrass"
                fill
                sizes="200px"
                className="object-cover"
              />
            </div>

            <div className="absolute -top-6 -right-6 hidden md:flex flex-col items-center justify-center bg-[var(--color-navy)] text-white px-6 py-4 rounded-[var(--radius-md)] shadow-xl">
              <span className="font-[var(--font-display)] text-3xl">
                {MARINA.specs.berths}
              </span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-gold)]">
                Alongside Berths
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
