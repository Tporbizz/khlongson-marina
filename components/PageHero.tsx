import Image from "next/image";
import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  image: string;
};

export default function PageHero({ eyebrow, title, subtitle, image }: Props) {
  return (
    <section className="relative h-[68vh] min-h-[440px] w-full overflow-hidden">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-navy-900)]/65 via-[var(--color-navy)]/40 to-[var(--color-navy-900)]/85" />
      <div className="relative container-edge h-full flex flex-col justify-end pb-16 md:pb-24">
        {eyebrow && (
          <span className="eyebrow text-[var(--color-gold-light)]">{eyebrow}</span>
        )}
        <h1 className="heading-xl mt-3 max-w-3xl text-white">{title}</h1>
        {subtitle && (
          <p className="mt-4 max-w-xl text-white/80 text-base md:text-lg leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
