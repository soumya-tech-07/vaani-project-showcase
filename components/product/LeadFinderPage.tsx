"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import { ArrowDown, ArrowRight, Check } from "lucide-react";
import { useRef, type MouseEvent } from "react";
import { useMotionValue, useSpring } from "framer-motion";
import type { CSSProperties } from "react";
import type { Product } from "@/data/products";
import { HandwritingText } from "@/components/ui/handwriting-text";
import { DiaTextReveal } from "@/components/ui/dia-text-reveal";
import { HeroReveal } from "@/components/product/ProjectHeroAnimation";
import { ProductFooter } from "./ProductFooter";
import { ProductNav } from "./ProductNav";
import styles from "./LeadFinderPage.module.css";

const heading = Outfit({ subsets: ["latin"], variable: "--font-lead-finder-heading" });
const body = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-lead-finder-body" });
const heroPhrases = ["Know who to call.", "Start with a city."];

const walkthroughUrl =
  "mailto:hello@rianinfotech.com?subject=Book%20a%20walkthrough%20for%20Lead%20Finder";

const steps = [
  {
    title: "Describe the market",
    description:
      "A city and a niche is enough to start. Narrow it further with the filters if you already know your segment.",
  },
  {
    title: "It searches and enriches",
    description:
      "Discovery runs as a background job while you carry on. Contacts, signals and business detail are pulled in and attached to each lead.",
  },
  {
    title: "Every lead is scored",
    description:
      "Scores come with a reason and the evidence behind them, so you can disagree with one and move on.",
  },
  {
    title: "Call from a ready list",
    description:
      "Export it, or work it inside the app. The opener is already written for each business.",
  },
];

const atAGlance = [
  ["Best for", "Local and SMB outbound"],
  ["Output", "Scored list with openers"],
  ["Runs as", "Web app and Android"],
  ["Costing", "Per search, against your balance"],
  ["Status", "Live"],
];

const whoItHelps = [
  "You sell to local businesses and building the list eats your week",
  "Your team is calling from a list nobody has qualified",
  "You want to test a new city or niche before committing to it",
  "You have been paying for data that arrives raw and unsorted",
];

function FadeInSection({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={reduceMotion ? undefined : { once: true, amount: 0.16 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}

export function LeadFinderPage({ product }: { product: Product }) {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const smoothCursorX = useSpring(cursorX, { stiffness: 240, damping: 28, mass: 0.35 });
  const smoothCursorY = useSpring(cursorY, { stiffness: 240, damping: 28, mass: 0.35 });
  const cursorOpacity = useMotionValue(0);

  const handleHeroPointerMove = (event: MouseEvent<HTMLElement>) => {
    if (!heroRef.current || reduceMotion) return;
    const bounds = heroRef.current.getBoundingClientRect();
    cursorX.set(event.clientX - bounds.left - 28);
    cursorY.set(event.clientY - bounds.top - 28);
    cursorOpacity.set(1);
  };

  return (
    <main
      id="top"
      className={`${styles.page} ${heading.variable} ${body.variable} rian-editorial-theme min-h-screen selection:bg-[#2838D8]/20`}
      style={{
        "--project-bg": "#FFFFFF",
        "--project-primary": "#2838D8",
        "--project-secondary": "#475569",
        "--project-text": "#111827",
        "--project-accent": "#7C2EDB",
        "--project-border": "#E2E8F0",
        "--project-highlight": "#EEF0FF",
        "--project-surface": "#FFFFFF",
        fontFamily: "var(--font-lead-finder-body), sans-serif",
      } as CSSProperties}
    >
      <ProductNav
        title={product.title}
        liveUrl="#"
        links={[
          { label: "Product", href: "#what-it-does" },
          { label: "How it works", href: "#how-it-works" },
          { label: "For you", href: "#for-you" },
        ]}
        actionLabel="Book a walkthrough"
        actionHref={walkthroughUrl}
      />

      <section
        ref={heroRef}
        aria-labelledby="lead-finder-title"
        onMouseMove={handleHeroPointerMove}
        onMouseLeave={() => cursorOpacity.set(0)}
        className={`${styles.hero} rian-paper-wash relative isolate overflow-hidden px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24 lg:px-12 lg:pt-28`}
      >
        {!reduceMotion && (
          <motion.div
            aria-hidden="true"
            className={`${styles.pointerMarker} pointer-events-none absolute left-0 top-0 z-20 hidden h-14 w-14 md:block`}
            style={{ x: smoothCursorX, y: smoothCursorY, opacity: cursorOpacity }}
          />
        )}
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-14">
            <HeroReveal className="relative z-10 w-full">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#111827]/55">
                Products / Find <span className="mx-2 text-[#2838D8]">·</span>
                <span className="inline-flex items-center gap-1.5 text-[#111827]/65">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
                  Live
                </span>
              </p>
              <h1
                id="lead-finder-title"
                className={`${styles.heroTitle} mt-7 max-w-2xl font-serif text-5xl leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-[4.6rem] xl:text-[5.1rem]`}
              >
                Lead Finder
                <span className="mt-3 block min-h-[1.2em] sm:mt-4">
                  <HandwritingText
                    words={heroPhrases}
                    interval={4300}
                    fontUrl="https://raw.githubusercontent.com/google/fonts/main/ofl/caveat/Caveat%5Bwght%5D.ttf"
                    duration={1.7}
                    delay={0.05}
                    strokeWidth={1.35}
                    fill="#2438E8"
                    height={88}
                    className={styles.handwriting}
                  />
                </span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-7 text-[#111827]/65 sm:text-lg sm:leading-8">
                Give it a city and a niche. Get back a ranked, scored call list of local
                businesses, each one paired with an opener you can read out loud.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={walkthroughUrl}
                  className={`${styles.primaryButton} group inline-flex min-h-12 items-center gap-3 bg-[#2438E8] px-6 text-xs font-bold uppercase tracking-[0.1em] text-white`}
                >
                  Book a walkthrough
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#111827]">
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
                <a
                  href="/#products"
                  className={`${styles.secondaryButton} inline-flex min-h-12 items-center gap-2 px-6 text-xs font-semibold uppercase tracking-[0.1em] text-[#111827]`}
                >
                  All products <ArrowDown className="h-3.5 w-3.5" />
                </a>
              </div>
              <div className="mt-12 flex max-w-lg flex-wrap items-center gap-3 border-t border-[#111827]/10 pt-5 font-mono text-[9px] uppercase tracking-[0.13em] text-[#111827]/45 sm:gap-5">
                <span>Search</span><span className="text-[#2838D8]">→</span>
                <span>Enrich</span><span className="text-[#2838D8]">→</span>
                <span>Score</span><span className="text-[#7C2EDB]">→</span>
                <span>Call</span>
              </div>
            </HeroReveal>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
              className="relative lg:pl-4"
            >
              <motion.div
                animate={reduceMotion ? undefined : { y: [0, -8, 0], rotate: [-1, 1, -1] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                className={`${styles.orbit} absolute -right-3 -top-5 z-10 hidden rounded-full bg-[#F3F0FF] px-4 py-3 font-mono text-[9px] uppercase tracking-[0.12em] text-[#111827] sm:block`}
              >
                <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#7C2EDB]" />
                From market to first call
              </motion.div>
              <div className={`${styles.heroPanel} relative overflow-hidden bg-white p-6 sm:p-9`}>
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#111827]/45">
                  A clearer way to build your call list
                </p>
                <div className="mt-8 border-y border-[#111827]/15">
                  {[
                    ["01", "A city and a niche"],
                    ["02", "A market searched and enriched"],
                    ["03", "Businesses scored with evidence"],
                    ["04", "An opener ready for each lead"],
                  ].map(([number, label], index) => (
                    <motion.div
                      key={number}
                      initial={reduceMotion ? false : { opacity: 0, x: 14 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.25 + index * 0.09, duration: 0.45 }}
                      className={`${styles.flowRow} flex items-center gap-4 border-b border-[#111827]/10 py-5 last:border-0 sm:gap-6`}
                    >
                      <span className="font-mono text-[9px] text-[#2838D8]">{number}</span>
                      <span className="font-serif text-xl text-[#111827]/80 sm:text-2xl">
                        {label}
                      </span>
                      {index < 3 && (
                        <ArrowDown className="ml-auto h-3.5 w-3.5 shrink-0 text-[#111827]/35" />
                      )}
                    </motion.div>
                  ))}
                </div>
                <p className="mt-5 flex items-center gap-2 text-[10px] uppercase tracking-[0.12em] text-[#111827]/50">
                  <Check className="h-3.5 w-3.5 text-[#2838D8]" />
                  Ranked. Explained. Ready for outreach.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FadeInSection
        id="what-it-does"
        className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36"
      >
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#111827]/50">
              01 / What it does
            </p>
            <h2 className="mt-5 max-w-xl font-serif text-5xl leading-[0.98] tracking-[-0.045em] sm:text-6xl">
              What it does
            </h2>
          </div>
          <div className="space-y-6 lg:pt-2">
            <p className="max-w-2xl text-base leading-7 text-[#111827]/65 sm:text-lg sm:leading-8">
              Most lead tools hand you a spreadsheet and leave the hard part to you. This
              one does the sorting. It searches a market, enriches what it finds, scores
              every business against what you sell, and tells you why each one scored the
              way it did.
            </p>
            <p className="max-w-2xl text-base leading-7 text-[#111827]/65 sm:text-lg sm:leading-8">
              By the time you open the list, the decision of who to call first has already
              been made. Each row carries an opening line written from your knowledge
              base, so the call starts with something specific to that business rather
              than a script.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-[1280px] gap-10 border-t border-[#111827]/15 pt-8 lg:mt-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <h3 className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#111827]/50">
              At a glance
            </h3>
          </div>
          <dl className="grid gap-x-10 sm:grid-cols-2">
            {atAGlance.map(([label, value], index) => (
              <div
                key={label}
                className={`grid grid-cols-[110px_1fr] gap-4 border-b border-[#111827]/10 py-4 ${
                  index === atAGlance.length - 1 ? "sm:col-span-2" : ""
                }`}
              >
                <dt className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#111827]/45">
                  {label}
                </dt>
                <dd className="text-sm font-medium text-[#111827]">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </FadeInSection>

      <FadeInSection
        id="how-it-works"
        className="scroll-mt-8 bg-[#111827]/[0.035] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#111827]/50">
                02 / Workflow
              </p>
              <h2 className="mt-5 max-w-2xl font-serif text-5xl leading-[0.98] tracking-[-0.045em] sm:text-6xl">
                How it works
              </h2>
            </div>
            <p className="max-w-lg text-base leading-7 text-[#111827]/60">
              A simple path from choosing a market to starting a more specific
              conversation.
            </p>
          </div>
          <div className="mt-12 border-y border-[#111827]/15">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={reduceMotion ? undefined : { once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                className={`${styles.stepRow} grid gap-3 border-b border-[#111827]/10 py-6 last:border-0 sm:grid-cols-[3rem_0.8fr_1.2fr] sm:items-baseline sm:gap-8 sm:py-8`}
              >
                <span className="font-mono text-[9px] text-[#2838D8]">
                  0{index + 1}
                </span>
                <h3 className="font-serif text-2xl tracking-[-0.025em] text-[#111827] sm:text-3xl">
                  {step.title}
                </h3>
                <p className="max-w-lg text-sm leading-6 text-[#111827]/60 sm:text-base sm:leading-7">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="bg-[#EEF0FF] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto grid max-w-[1280px] gap-8 border-y border-[#2838D8]/15 py-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20 lg:py-12">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#2838D8]">
              An open workflow
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-[0.98] tracking-[-0.045em] text-[#111827] sm:text-5xl">
              Already using other tools?
            </h2>
          </div>
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-base leading-7 text-[#475569] sm:text-lg">
              We can connect this to your CRM, outreach tool or internal systems through
              their API or a webhook.
            </p>
            <a
              href={`${walkthroughUrl}&body=I%20would%20like%20to%20talk%20through%20my%20stack.`}
              className={`${styles.primaryButton} inline-flex min-h-12 shrink-0 items-center gap-3 bg-[#2838D8] px-5 text-xs font-bold uppercase tracking-[0.1em] text-white`}
            >
              Talk through your stack <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection
        id="for-you"
        className="scroll-mt-8 px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36"
      >
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <h2 className="mt-5 max-w-xl font-serif text-5xl leading-[0.98] tracking-[-0.045em] sm:text-6xl">
              This is for you if
            </h2>
          </div>
          <div className="border-y border-[#111827]/15">
            {whoItHelps.map((item, index) => (
              <motion.div
                key={item}
                initial={reduceMotion ? false : { opacity: 0, x: 12 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                viewport={reduceMotion ? undefined : { once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="grid grid-cols-[2rem_1fr] items-baseline gap-4 border-b border-[#111827]/10 py-5 last:border-0 sm:gap-6 sm:py-6"
              >
                <span className="font-mono text-[9px] text-[#7C2EDB]">0{index + 1}</span>
                <p className="font-serif text-xl leading-snug text-[#111827]/80 sm:text-2xl">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </FadeInSection>

      <motion.section
        id="final-cta"
        className={`${styles.finalCta} scroll-mt-8 bg-[#111827] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12 lg:py-36`}
        initial={reduceMotion ? false : { opacity: 0, y: 28 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={reduceMotion ? undefined : { once: true, amount: 0.2 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="mx-auto grid max-w-[1280px] gap-10 border-t border-white/20 pt-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20 lg:pt-12"
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={reduceMotion ? undefined : { once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.12 } },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/55">
              Products / Find
            </p>
            <h2 className="mt-6 max-w-5xl font-serif text-5xl leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-[5rem]">
              <DiaTextReveal
                as="span"
                text="See it run on"
                textColor="#FFFFFF"
                className="block"
              />
              <DiaTextReveal
                as="span"
                text="your own city and niche"
                textColor="#B9ADFF"
                className="block"
                delay={0.16}
              />
            </h2>
            <p className="mt-7 max-w-xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
              We will run a live search on a segment you actually sell to, and you can
              judge the list yourself.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col items-start gap-5 lg:pb-2"
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <a
              href={walkthroughUrl}
              className={`${styles.primaryButton} group inline-flex min-h-12 items-center gap-3 bg-[#2438E8] px-6 text-xs font-bold uppercase tracking-[0.1em] text-white`}
            >
              Book a walkthrough
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#111827]">
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
            <a
              href="/#products"
              className={`${styles.darkSecondary} inline-flex min-h-11 items-center gap-2 px-5 text-xs font-semibold uppercase tracking-[0.1em] text-white`}
            >
              Back to products <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </motion.div>
        </motion.div>
      </motion.section>

      <ProductFooter />
    </main>
  );
}
