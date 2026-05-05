import Link from "next/link";
import { Compass } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] grid place-items-center bg-[var(--color-cream)] py-24">
      <div className="container-edge text-center max-w-xl">
        <Compass className="h-10 w-10 mx-auto text-[var(--color-gold)]" strokeWidth={1.5} />
        <span className="eyebrow mt-6 inline-block">Off the chart</span>
        <h1 className="heading-lg mt-3">
          We can&apos;t find that <span className="italic text-[var(--color-moss)]">waypoint</span>.
        </h1>
        <p className="mt-4 text-[var(--color-navy-800)]/70">
          The page you&apos;re looking for doesn&apos;t exist — but the marina is
          still right where you left it.
        </p>
        <Link href="/" className="btn btn-primary mt-8">
          Back to the marina
        </Link>
      </div>
    </section>
  );
}
