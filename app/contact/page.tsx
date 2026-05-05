import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import MarinaMapWrapper from "@/components/MarinaMapWrapper";
import { MARINA } from "@/lib/constants";
import { IMG } from "@/lib/images";
import { MessageCircle, MapPin, Anchor, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Khlong Son Marina via WhatsApp +66 99 242 2655 or Navily. Most enquiries answered within hours.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Drop us a <span className="italic text-[var(--color-gold)]">line</span>.
          </>
        }
        subtitle="WhatsApp is our primary channel. Most berth enquiries are confirmed within a few hours, almost always same day."
        image={IMG.about}
      />

      <section className="py-24 bg-[var(--color-cream)]">
        <div className="container-edge grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="heading-md">How to reach us.</h2>
            <div className="divider-gold" />

            <ul className="space-y-5 mt-6">
              <ContactItem icon={MessageCircle} label="WhatsApp · primary">
                <a
                  href={MARINA.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-gold-dark)] text-lg font-medium"
                >
                  {MARINA.contact.whatsapp}
                </a>
                <p className="text-xs text-[var(--color-navy-800)]/55 mt-1">
                  Tap to chat — average response under 2 hours.
                </p>
              </ContactItem>

              <ContactItem icon={Anchor} label="Navily">
                <a
                  href={MARINA.contact.navily}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-gold-dark)]"
                >
                  {MARINA.contact.navilyName}
                </a>
                <p className="text-xs text-[var(--color-navy-800)]/55 mt-1">
                  Official Navily Partner Marina — Thailand.
                </p>
              </ContactItem>

              <ContactItem icon={Clock} label="Office hours">
                Daily 07:00 – 19:00 (Asia/Bangkok). Parking secured 24/7.
              </ContactItem>

              <ContactItem icon={MapPin} label="Address">
                {MARINA.address.line1}<br />
                {MARINA.address.district}, {MARINA.address.province} {MARINA.address.postalCode}<br />
                Thailand
              </ContactItem>
            </ul>

            <div className="mt-10 rounded-[var(--radius-md)] border border-[var(--color-gold)]/40 bg-[var(--color-gold)]/10 p-5 text-sm text-[var(--color-navy-800)]">
              <strong className="font-medium text-[var(--color-navy)]">Note:</strong>{" "}
              Khlong Son Marina is not a Port of Entry. Foreign-flagged vessels
              clear customs and immigration at Kantang Port — we coordinate the
              round-trip. There is no VHF monitoring at the marina yet; please
              WhatsApp for arrival comms.
            </div>
          </div>

          <form className="rounded-[var(--radius-lg)] bg-white p-7 border border-[var(--color-silver-200)] shadow-xl shadow-[var(--color-navy)]/5">
            <h3 className="font-[var(--font-display)] text-2xl">Send us a message.</h3>
            <p className="text-sm text-[var(--color-navy-800)]/65 mt-1">
              For urgent enquiries (incoming arrival, tide check), WhatsApp instead.
            </p>

            <div className="mt-6 grid gap-4">
              <Input label="Your name" name="name" />
              <Input label="WhatsApp / phone" name="phone" type="tel" />
              <Input label="Yacht / vessel" name="yacht" required={false} />
              <Field label="Message">
                <textarea
                  name="message"
                  rows={4}
                  className="w-full bg-transparent text-[var(--color-navy)] focus:outline-none resize-none"
                  required
                />
              </Field>
              <button type="submit" className="btn btn-navy mt-2 justify-center">
                Send enquiry
              </button>
              <p className="text-[11px] text-[var(--color-navy-800)]/50">
                We&apos;ll reply via WhatsApp using the number above.
              </p>
            </div>
          </form>
        </div>
      </section>

      <MarinaMapWrapper showHeader={false} />
    </>
  );
}

function ContactItem({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof MessageCircle;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--color-gold)]/15 text-[var(--color-gold-dark)]">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-navy-800)]/55">
          {label}
        </div>
        <div className="text-[var(--color-navy)] mt-0.5">{children}</div>
      </div>
    </li>
  );
}

function Input({
  label,
  name,
  type = "text",
  required = true,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <Field label={label}>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-transparent text-[var(--color-navy)] focus:outline-none"
      />
    </Field>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-navy-800)]/60">
        {label}
      </span>
      <div className="mt-1.5 border-b border-[var(--color-silver-200)] pb-2 focus-within:border-[var(--color-gold)] transition-colors">
        {children}
      </div>
    </label>
  );
}
