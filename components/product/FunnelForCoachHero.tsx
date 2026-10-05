import Link from "next/link";
import { ArrowRight, Check, Globe2, Sparkles } from "lucide-react";
import Hero17 from "@/components/ui/hero-17";

const inputExample =
  "I help first-time managers become better leaders through a leadership coaching program.";
const productHome = "https://www.funnelforcoach.com/";

export function FunnelForCoachHero() {
  return (
    <main className="ffc-hero relative isolate w-full min-w-0 overflow-x-clip bg-white text-black">
      <header className="relative z-10 flex w-full items-center justify-between border-b border-black px-5 py-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-black underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
        >
          FUNNELFORCOACH
        </Link>
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#525252] sm:text-xs">
          AI / Funnels / Coaching
        </span>
      </header>

      <div className="relative w-full min-w-0">
        <Hero17 />

        <div className="relative z-10 mx-auto flex w-full flex-col justify-center gap-3 px-5 pb-4 sm:w-auto sm:flex-row sm:px-8 lg:px-12">
          <a
            href="#ffc-cta"
            className="inline-flex min-h-12 items-center justify-center gap-3 border-2 border-black bg-black px-7 py-3 text-sm font-semibold text-white transition-colors duration-100 hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-black"
          >
            CREATE YOUR LANDING PAGE <span aria-hidden="true">→</span>
          </a>
          <a
            href="#ffc-workflow"
            className="inline-flex min-h-12 items-center justify-center gap-3 border-2 border-black bg-white px-7 py-3 text-sm font-semibold text-black transition-colors duration-100 hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-black"
          >
            SEE HOW IT WORKS
          </a>
        </div>

        <div
          id="ffc-input"
          aria-label="Example FunnelForCoach generation experience"
          className="relative mx-auto mt-14 w-full max-w-[960px] scroll-mt-8 px-5 pb-16 sm:mt-20 sm:px-8 sm:pb-24 lg:px-12"
        >
          <div className="group grid gap-0 border-2 border-black bg-white transition-[border-width] duration-100 hover:border-4 md:grid-cols-[0.9fr_1.1fr]">
            <section className="border-b-2 border-black p-5 sm:p-8 md:border-r-2 md:border-b-0">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#525252]">
                    01 / Your coaching business
                  </p>
                  <h2 className="mt-4 font-serif text-2xl leading-tight tracking-tight sm:text-3xl">
                    Tell us what you do.
                  </h2>
                </div>
                <Sparkles
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 text-black"
                  strokeWidth={1.5}
                />
              </div>
              <p className="mt-6 border-y border-[#E5E5E5] py-5 text-base leading-relaxed text-[#525252] sm:text-lg">
                &ldquo;{inputExample}&rdquo;
              </p>
              <div className="mt-6 flex items-center justify-between gap-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#525252]">
                  Your idea is the starting point.
                </span>
                <a href={productHome} className="inline-flex min-h-11 items-center gap-2 border-2 border-black bg-black px-4 text-xs font-semibold text-white transition-colors hover:bg-white hover:text-black">
                  GENERATE <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </section>

            <section className="p-5 sm:p-8">
              <div className="flex items-center justify-between gap-3 border-b-2 border-black pb-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#525252]">
                    02 / AI-generated page
                  </p>
                  <p className="mt-1 text-sm font-semibold">A first draft, ready for you.</p>
                </div>
                <span className="inline-flex items-center gap-2 border border-black px-3 py-2 font-mono text-[9px] uppercase tracking-[0.1em]">
                  <Check className="h-3 w-3" strokeWidth={1.5} /> GENERATED
                </span>
              </div>

              <article className="mt-5 border border-[#E5E5E5] p-5 sm:p-7">
                <div className="flex items-center justify-between border-b border-black pb-3">
                  <span className="font-serif text-sm font-semibold">
                    Your Coaching Practice
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#525252]">
                    Leadership
                  </span>
                </div>
                <div className="py-8 sm:py-10">
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#525252]">
                    For first-time managers
                  </p>
                  <h3 className="mt-3 max-w-md font-serif text-3xl leading-[1.04] tracking-tight sm:text-4xl">
                    Become a better leader.
                    <br /> Lead with confidence.
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-[#525252]">
                    Practical coaching to help you build trust, guide your team,
                    and grow into your role.
                  </p>
                  <a href={productHome} className="mt-6 inline-flex min-h-11 items-center gap-3 border-2 border-black bg-black px-4 text-xs font-semibold text-white transition-colors hover:bg-white hover:text-black">
                    BOOK A DISCOVERY SESSION <span aria-hidden="true">→</span>
                  </a>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#E5E5E5] pt-3 font-mono text-[9px] uppercase tracking-[0.1em] text-[#525252]">
                  <span>Leadership coaching</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Globe2 className="h-3 w-3" strokeWidth={1.5} /> Your domain
                  </span>
                </div>
              </article>
            </section>
          </div>

          <div
            id="ffc-workflow"
            className="mt-8 flex scroll-mt-8 flex-wrap items-center justify-center gap-x-4 gap-y-3 border-y-2 border-black py-4 font-mono text-[10px] uppercase tracking-[0.14em] text-black sm:gap-x-6"
          >
            <span>01 / Tell the AI</span>
            <ArrowRight aria-hidden="true" className="h-3 w-3" />
            <span>02 / Customize</span>
            <ArrowRight aria-hidden="true" className="h-3 w-3" />
            <span>03 / Connect domain</span>
            <ArrowRight aria-hidden="true" className="h-3 w-3" />
            <span>04 / Publish</span>
          </div>
        </div>
      </div>
    </main>
  );
}
