import { ArrowDown, ArrowRight } from "lucide-react";

interface EditorialCTAProps {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  caption?: string;
  wordmark?: string;
  primaryExternal?: boolean;
}

export function EditorialCTA({
  id,
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  caption,
  wordmark,
  primaryExternal = false,
}: EditorialCTAProps) {
  return (
    <section
      id={id}
      className="relative isolate scroll-mt-8 overflow-hidden bg-[#111827] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12 lg:py-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_18%_100%,rgba(40,56,216,0.38),transparent_48%),radial-gradient(ellipse_at_88%_0%,rgba(124,46,219,0.32),transparent_42%)]"
      />
      {wordmark && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-8 left-1/2 -z-10 -translate-x-1/2 select-none whitespace-nowrap font-sans text-[18vw] font-bold leading-none tracking-[-0.08em] text-white/[0.035]"
        >
          {wordmark}
        </div>
      )}
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-t border-white/20 pt-8 lg:grid-cols-[1fr_0.65fr] lg:gap-20 lg:pt-12">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
              {eyebrow}
            </p>
            <h2 className="mt-7 max-w-5xl text-5xl font-semibold leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-[7rem]">
              {title}
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/70 sm:text-xl">
              {description}
            </p>
          </div>
          <div className="flex flex-col justify-end gap-5 lg:pb-2">
            <a
              href={primaryHref}
              target={primaryExternal ? "_blank" : undefined}
              rel={primaryExternal ? "noreferrer" : undefined}
              className="group inline-flex min-h-16 items-center justify-between gap-6 rounded-sm bg-white px-6 text-sm font-semibold uppercase tracking-[0.1em] text-[#2838D8] transition-colors hover:bg-[#EEF0FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-8"
            >
              {primaryLabel}
              <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
            </a>
            {secondaryLabel && secondaryHref && (
              <a
                href={secondaryHref}
                className="inline-flex min-h-11 items-center gap-2 self-start text-sm text-white/75 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white"
              >
                {secondaryLabel}
                {secondaryHref.startsWith("#") ? (
                  <ArrowDown className="h-4 w-4" />
                ) : (
                  <ArrowRight className="h-4 w-4" />
                )}
              </a>
            )}
            {caption && (
              <p className="pt-4 font-mono text-[9px] uppercase tracking-[0.16em] text-white/45">
                {caption}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
