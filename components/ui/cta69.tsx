import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Badge {
  label: string;
}

interface ActionButton {
  label: string;
  href: string;
}

interface Cta69Labels {
  marqueePhrase?: string;
  note?: string;
  footnote?: string;
}

interface Cta69Props {
  badge?: Badge;
  heading?: string;
  button?: ActionButton;
  labels?: Cta69Labels;
  className?: string;
}

const REPEATS = 8;

export function Cta69({
  badge,
  heading,
  button,
  labels = {},
  className,
}: Cta69Props) {
  const marqueeLine = labels.marqueePhrase
    ? `${labels.marqueePhrase} · `.repeat(REPEATS)
    : "";

  return (
    <section
      className={cn(
        "relative w-full overflow-hidden border-t-4 border-black bg-black py-20 text-white sm:py-28",
        className,
      )}
    >
      {labels.marqueePhrase && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex select-none items-center overflow-hidden"
        >
          <div className="cta69-marquee flex w-max shrink-0 whitespace-nowrap text-white/[0.06]">
            {[0, 1].map((copy) => (
              <span
                key={copy}
                className="font-serif text-[22vw] leading-none tracking-tighter md:text-[16vw]"
              >
                {marqueeLine}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-5 text-center sm:px-6">
        {badge && (
          <span className="inline-flex items-center gap-3 border border-white px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white">
            <span className="h-1.5 w-1.5 bg-white" />
            {badge.label}
          </span>
        )}

        {heading && (
          <h2 className="mt-8 text-balance font-serif text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl md:text-7xl">
            {heading}
          </h2>
        )}

        {labels.note && (
          <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-[#D4D4D4] sm:text-lg">
            {labels.note}
          </p>
        )}

        {button && (
          <Link
            href={button.href}
            className="mt-10 inline-flex min-h-12 items-center justify-center gap-3 border-2 border-white bg-white px-7 py-3 text-sm font-semibold text-black transition-colors duration-100 hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-white"
          >
            {button.label.toUpperCase()}
            <ArrowRight className="h-4 w-4" />
          </Link>
        )}

        {labels.footnote && (
          <p className="mt-7 font-mono text-[10px] uppercase tracking-[0.14em] text-[#A3A3A3]">
            {labels.footnote}
          </p>
        )}
      </div>
    </section>
  );
}

export default Cta69;
