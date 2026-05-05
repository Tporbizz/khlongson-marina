import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { ArrowRight } from "lucide-react";
import { MARINA } from "@/lib/constants";
import { IMG } from "@/lib/images";

export default function CtaSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src={IMG.catamaranSunset}
        alt="Catamaran cruising through the mangrove channel at sunset"
        fill
        sizes="100vw"
        className="object-cover -z-10"
      />
      <div className="absolute inset-0 bg-[var(--color-navy-900)]/72 -z-10" />

      <div className="container-edge py-28 md:py-36 text-center text-white">
        <ScrollReveal>
          <span className="eyebrow text-[var(--color-gold-light)]">Drop the lines</span>
          <h2 className="heading-xl mt-4 text-white max-w-3xl mx-auto">
            Reserve your berth on the
            <span className="italic text-[var(--color-gold)]"> Andaman</span>.
          </h2>
          <p className="mt-6 text-white/75 max-w-xl mx-auto">
            Whether it&apos;s a weekend stopover or a six-month long stay, our team is
            ready to welcome you. Most reservations confirmed within hours.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/berthing#booking" className="btn btn-primary">
              Reserve a berth <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={MARINA.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Chat on WhatsApp
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
