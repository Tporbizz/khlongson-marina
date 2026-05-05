import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServicesSection from "@/components/ServicesSection";
import CtaSection from "@/components/CtaSection";
import { SERVICES, AMENITIES, ANCILLARY_SERVICES, MARINA } from "@/lib/constants";
import { IMG } from "@/lib/images";
import { MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Berthing, dugong tours, transfers, provisioning, and customs coordination via Kantang Port. Everything on request via WhatsApp.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Full service marina"
        title={
          <>
            Care for your yacht.
            <br />
            <span className="italic text-[var(--color-gold)]">Care for your crew.</span>
          </>
        }
        subtitle="Every service organised on request via WhatsApp — from a quick fuel-and-go to a full week's provisioning."
        image={IMG.hero}
      />

      <ServicesSection />

      {/* On-request price list */}
      <section className="py-24 bg-[var(--color-cream)]">
        <div className="container-edge">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow">Services on request · with prices</span>
            <h2 className="heading-lg mt-3">
              Indicative price list.
            </h2>
            <p className="mt-4 text-[var(--color-navy-800)]/70">
              All services are arranged on request — there are no permanent
              concession stands at the marina yet. WhatsApp before arrival and we&apos;ll
              line everything up.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {ANCILLARY_SERVICES.map((s) => (
              <div
                key={s.label}
                className="rounded-[var(--radius-md)] bg-white border border-[var(--color-silver-200)] p-5"
              >
                <div className="flex items-baseline justify-between gap-3 mb-1.5">
                  <h3 className="font-medium text-[var(--color-navy)]">{s.label}</h3>
                  <span className="text-sm text-[var(--color-gold-dark)] font-medium whitespace-nowrap">
                    {s.price}
                  </span>
                </div>
                {s.note && (
                  <p className="text-xs text-[var(--color-navy-800)]/60">{s.note}</p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a
              href={MARINA.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp the marina
            </a>
          </div>
        </div>
      </section>

      {/* Detailed service catalogue */}
      <section className="py-24 bg-[var(--color-cream-100)]">
        <div className="container-edge max-w-4xl">
          <span className="eyebrow">Service catalogue</span>
          <h2 className="heading-lg mt-3 mb-12">Every service in one place.</h2>

          <div className="space-y-12">
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <article
                  key={s.slug}
                  id={s.slug}
                  className="grid gap-6 md:grid-cols-12 items-start scroll-mt-24"
                >
                  <div className="md:col-span-2">
                    <span className="grid h-12 w-12 place-items-center rounded-[var(--radius-sm)] bg-[var(--color-navy)] text-[var(--color-gold)]">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                  </div>
                  <div className="md:col-span-10">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-gold-dark)]">
                      {s.category}
                    </div>
                    <h3 className="font-[var(--font-display)] text-2xl mt-1">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-[var(--color-navy-800)]/80 leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Amenities recap */}
      <section className="py-20 bg-[var(--color-cream)]">
        <div className="container-edge">
          <h3 className="heading-md mb-8">On-site amenities.</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {AMENITIES.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 p-4 bg-white rounded-[var(--radius-md)] border border-[var(--color-silver-200)]"
              >
                <Icon className="h-4 w-4 text-[var(--color-moss)]" />
                <span className="text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
