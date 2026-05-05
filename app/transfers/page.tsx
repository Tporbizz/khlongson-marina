import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";
import ScrollReveal from "@/components/ScrollReveal";
import { Plane, Hotel, Car, Ship } from "lucide-react";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "Transfers",
  description:
    "Pre-arranged airport, hotel, and tender transfers for cruisers and crew. Krabi & Trang airports, Parima Hotel, and partner resorts.",
};

const ROUTES = [
  {
    icon: Plane,
    title: "Krabi International ⇄ Marina",
    duration: "40 minutes",
    price: "From ฿1,800",
    notes: ["Air-conditioned 4-7 seater vans", "Meet & greet at arrivals"],
  },
  {
    icon: Plane,
    title: "Trang Airport ⇄ Marina",
    duration: "40 minutes",
    price: "From ฿1,400",
    notes: ["Convenient for AirAsia from Bangkok", "Daily scheduled vans on request"],
  },
  {
    icon: Hotel,
    title: "Parima Hotel & Trang Town",
    duration: "40 minutes",
    price: "From ฿1,200",
    notes: ["Round-trip pickups during dinner", "Local restaurant routing"],
  },
  {
    icon: Car,
    title: "Anantara Si Kao & coastal resorts",
    duration: "20 minutes",
    price: "From ฿900",
    notes: ["Hourly on request", "Family-size SUV available"],
  },
  {
    icon: Ship,
    title: "Tender to outer anchorage",
    duration: "10 minutes",
    price: "From ฿600",
    notes: ["For yachts at anchor outside the river", "WhatsApp to dispatch"],
  },
];

export default function TransfersPage() {
  return (
    <>
      <PageHero
        eyebrow="Transfers"
        title={
          <>
            Door-to-deck, on <span className="italic text-[var(--color-gold)]">your schedule</span>.
          </>
        }
        subtitle="From the moment you land until you step aboard — transfers organized so the marina experience starts before you arrive."
        image={IMG.about}
      />

      <section className="py-24 bg-[var(--color-cream)]">
        <div className="container-edge max-w-4xl">
          <div className="space-y-5">
            {ROUTES.map((r, i) => {
              const Icon = r.icon;
              return (
                <ScrollReveal key={r.title} delay={i * 0.05}>
                  <div className="card p-6 grid gap-4 md:grid-cols-12 items-center">
                    <span className="grid h-12 w-12 place-items-center rounded-[var(--radius-sm)] bg-[var(--color-navy)] text-[var(--color-gold)] md:col-span-1">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <div className="md:col-span-7">
                      <h3 className="font-[var(--font-display)] text-xl">
                        {r.title}
                      </h3>
                      <p className="text-sm text-[var(--color-navy-800)]/60 mt-1">
                        {r.duration}
                      </p>
                      <ul className="mt-3 text-sm text-[var(--color-navy-800)]/75 space-y-1">
                        {r.notes.map((n) => (
                          <li key={n}>· {n}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="md:col-span-4 md:text-right">
                      <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-navy-800)]/55">
                        Indicative
                      </div>
                      <div className="font-[var(--font-display)] text-2xl text-[var(--color-navy)]">
                        {r.price}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <p className="mt-8 text-xs text-[var(--color-navy-800)]/50">
            Rates per vehicle, one-way. Night surcharge applies after 21:00.
            All vehicles operated by licensed local partners.
          </p>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
