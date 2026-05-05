import { MARINA } from "@/content/marina";

export default function OnRequestBanner() {
  return (
    <div className="bg-[var(--color-moss)] text-white text-center py-3 px-4">
      <p className="text-sm font-medium">
        📱 All services arranged on request —{" "}
        <a
          href={MARINA.contact.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-[var(--color-gold-light)]"
        >
          WhatsApp {MARINA.contact.whatsapp}
        </a>{" "}
        before arrival so we can prepare everything you need
      </p>
    </div>
  );
}
