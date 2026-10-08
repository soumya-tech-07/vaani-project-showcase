"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import {
  ArrowDown,
  ArrowRight,
  Check,
  CircleCheckBig,
  Globe,
  Headphones,
  MoreHorizontal,
  PhoneCall,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Product } from "@/data/products";
import { HandwritingText } from "@/components/ui/handwriting-text";
import { EditorialCTA } from "./EditorialCTA";
import { ProductNav } from "./ProductNav";
import styles from "./AIVoiceCallsPage.module.css";

const heading = Outfit({ subsets: ["latin"], variable: "--font-ai-voice-heading" });
const body = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-ai-voice-body" });
const heroPhrases = ["Call when it matters.", "Speak their language.", "Hand off with care."];

const steps = [
  {
    title: "A lead qualifies",
    description: "Usually from the WhatsApp flow, or from a list you push in.",
  },
  {
    title: "The call goes out",
    description: "Inside business hours, within budget, after checking the number is reachable.",
  },
  {
    title: "The conversation runs",
    description: "Natural back and forth in the lead's language, not a menu tree.",
  },
  {
    title: "Outcome classified",
    description: "What happened on the call is read and logged properly, so a polite no is not filed as interest.",
  },
];

const useCases = [
  "Qualified leads sit uncalled overnight and over weekends",
  "Your callers spend the day on leads that were never going to buy",
  "Your buyers switch language mid-sentence",
  "You want calling capacity without hiring a calling team",
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
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={reduceMotion ? undefined : { once: true, amount: 0.22 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}

export function AIVoiceCallsPage({ product }: { product: Product }) {
  const reduceMotion = useReducedMotion();

  return (
    <main
      className={`${styles.page} ${heading.variable} ${body.variable} min-h-screen overflow-x-clip bg-white text-[#111827]`}
      style={{ fontFamily: "var(--font-ai-voice-body), sans-serif" }}
    >
      <ProductNav title={product.title} liveUrl={product.liveUrl} />

      <div className="pt-12">
        <section className="voice-hero relative isolate overflow-hidden px-5 pb-20 pt-8 sm:px-8 sm:pb-28 sm:pt-12 lg:px-12 lg:pt-16">
          <div className="mx-auto max-w-[1280px]">
            <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-14">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#111827]/55">
                  Products / Convert <span className="mx-2 text-[#2838D8]">·</span> 2026
                  <span className="ml-2 inline-flex items-center gap-1.5 text-[#111827]/65">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
                    Live
                  </span>
                </p>
                <motion.h1
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="voice-hero-title mt-7 max-w-2xl font-serif text-5xl leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-[4.6rem] xl:text-[5.1rem]"
                >
                  <span className="block">AI Voice</span>
                  <span className="block">Calls.</span>
                  <span className="mt-3 block min-h-[1.55em] sm:mt-4">
                    <HandwritingText
                      words={heroPhrases}
                      interval={4300}
                      fontUrl="https://raw.githubusercontent.com/google/fonts/main/ofl/caveat/Caveat%5Bwght%5D.ttf"
                      duration={1.7}
                      delay={0.05}
                      strokeWidth={1.35}
                      fill="#2438E8"
                      height={112}
                      className="voice-handwriting"
                    />
                  </span>
                </motion.h1>
                <motion.p
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
                  className="mt-7 max-w-xl text-base leading-7 text-[#111827]/65 sm:text-lg sm:leading-8"
                >
                  An AI that rings your hot leads, holds a real conversation in their language, and hands the call to a human the moment it should be one.
                </motion.p>
                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  className="mt-9 flex flex-wrap gap-3"
                >
                  <a href="#final-cta" className="voice-candy group inline-flex min-h-12 items-center gap-3 bg-[#2438E8] px-6 text-xs font-bold uppercase tracking-[0.1em] text-white">
                    Hear a sample call
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#111827]">
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </a>
                  <a href="#how-it-works" className="voice-secondary inline-flex min-h-12 items-center gap-2 px-6 text-xs font-semibold uppercase tracking-[0.1em] text-[#111827]">
                    See how it works
                    <ArrowDown className="h-3.5 w-3.5" />
                  </a>
                </motion.div>
                <div className="mt-12 flex max-w-lg flex-wrap items-center gap-3 border-t border-[#111827]/10 pt-5 font-mono text-[9px] uppercase tracking-[0.13em] text-[#111827]/45 sm:gap-4">
                  <span>Qualify</span><span className="text-[#2838D8]">→</span>
                  <span>Call</span><span className="text-[#2838D8]">→</span>
                  <span>Converse</span><span className="text-[#7C2EDB]">→</span>
                  <span>Hand off</span>
                </div>
              </div>

              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
                className="voice-hero-product relative lg:pl-4"
              >
                <div className="voice-orbit absolute -right-3 -top-5 z-10 hidden rounded-full border-2 border-[#111827] bg-[#F3F0FF] px-4 py-3 font-mono text-[9px] uppercase tracking-[0.12em] text-[#111827] shadow-[4px_4px_0_#111827] sm:block">
                  <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#F478AA]" />
                  Natural conversation. Human when needed.
                </div>
                <div className="voice-browser overflow-hidden bg-white">
                  <div className="flex h-11 items-center gap-3 border-b border-[#111827]/10 bg-[#111827]/[0.03] px-4">
                    <div className="flex gap-1.5" aria-hidden="true">
                      <i className="h-2.5 w-2.5 rounded-full bg-[#7C2EDB]" />
                      <i className="h-2.5 w-2.5 rounded-full bg-[#EEF0FF]" />
                      <i className="h-2.5 w-2.5 rounded-full bg-[#2838D8]" />
                    </div>
                    <div className="ml-2 min-w-0 flex-1 truncate rounded-sm bg-white px-3 py-1 font-mono text-[9px] text-[#111827]/50">
                      AI Voice Calls · Illustrative call flow
                    </div>
                    <MoreHorizontal className="h-4 w-4 text-[#111827]/40" aria-hidden="true" />
                  </div>
                  <div className="grid bg-white md:grid-cols-[0.9fr_1.1fr]">
                    <div className="border-b border-[#111827]/10 p-4 sm:border-b-0 sm:border-r sm:p-5">
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#111827]/55">A lead is ready</p>
                      <div className="voice-lead-card mt-3 bg-white p-4 sm:p-5">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2838D8]/10 text-[#2838D8]">
                            <PhoneCall className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-[#111827]">Qualified lead</p>
                            <p className="text-[11px] text-[#111827]/50">Ready for follow-up</p>
                          </div>
                        </div>
                        <p className="mt-4 text-sm leading-6 text-[#111827]/75">
                          A lead comes from the WhatsApp flow or a list you provide.
                        </p>
                        <div className="mt-4 flex items-center gap-2 border-t border-[#111827]/10 pt-3 text-[10px] text-[#111827]/50">
                          <Sparkles className="h-3 w-3 text-[#2838D8]" />
                          Illustrative call flow
                        </div>
                      </div>
                    </div>
                    <div className="p-4 sm:p-5">
                      <div className="flex items-center justify-between border-b border-[#111827]/10 pb-3">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-[#2838D8]" />
                          <span className="text-xs font-semibold text-[#111827]">Call and handoff</span>
                        </div>
                        <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#111827]/45">AI Voice Calls</span>
                      </div>
                      <div className="mt-4 space-y-0">
                        {[
                          { label: "The call goes out", detail: "Within business hours and budget", icon: PhoneCall },
                          { label: "The conversation", detail: "English · Hindi · Hinglish · Marathi", icon: Globe },
                          { label: "Human handoff", detail: "When a person should take over", icon: Headphones },
                        ].map(({ label, detail, icon: Icon }, index) => (
                          <div key={label} className="flex gap-3 border-t border-[#111827]/10 py-3 first:border-t-0">
                            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EEF0FF] text-[#2838D8]">
                              <Icon className="h-3.5 w-3.5" />
                            </span>
                            <div>
                              <p className="text-xs font-semibold text-[#111827]">{label}</p>
                              <p className="mt-1 text-[10px] leading-5 text-[#111827]/55">{detail}</p>
                            </div>
                            <span className="ml-auto font-mono text-[9px] text-[#2838D8]">0{index + 1}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-2 flex items-center gap-2 border-t border-[#111827]/10 pt-3 text-[10px] text-[#111827]/55">
                        <Check className="h-3.5 w-3.5 text-[#2838D8]" />
                        Budget cap · business hours · kill switch
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-right font-mono text-[9px] uppercase tracking-[0.13em] text-[#111827]/40">
                  An illustrative flow, not a product screenshot.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <FadeInSection id="what-it-does" className="border-t border-[#E2E8F0] bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-12 lg:py-24">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#475569]">What it does</p>
              <h2
                className="mt-5 max-w-xl text-4xl leading-[0.98] tracking-[-0.055em] text-[#111827] sm:text-5xl"
                style={{ fontFamily: "var(--font-ai-voice-heading), sans-serif" }}
              >
                A lead that qualifies on WhatsApp at ten at night is worth a call. Nobody is making that call at ten at night.
              </h2>

              <div className="mt-7 space-y-5 text-lg leading-8 text-[#475569]">
                <p>
                  This does. It speaks English, Hindi, Hinglish and Marathi, holds a conversation rather than reading a script, and knows when the answer it is getting means a human should take over.
                </p>
                <p>
                  Every account has a monthly budget cap, business-hours rules and a kill switch, because an AI that can dial is an AI that needs limits.
                </p>
              </div>
            </div>

            <aside className="rounded-[1.25rem] border border-[#E2E8F0] bg-[#F8FAFC] p-6">
              <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4">
                <h3 className="text-xl font-semibold tracking-[-0.04em] text-[#111827]">At a glance</h3>
                <Sparkles className="h-4 w-4 text-[#2838D8]" />
              </div>
              <dl className="mt-5 space-y-4 text-sm text-[#475569]">
                {[
                  ["Best for", "High-intent inbound follow-up"],
                  ["Languages", "English, Hindi, Hinglish, Marathi"],
                  ["Controls", "Budget cap, hours, kill switch"],
                  ["Pairs with", "WhatsApp Automation"],
                  ["Status", "Live"],
                ].map(([label, value]) => (
                  <div key={label} className="grid grid-cols-[110px_1fr] gap-3 border-b border-[#E2E8F0] pb-3 last:border-none last:pb-0">
                    <dt className="font-medium text-[#111827]">{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </FadeInSection>

        <FadeInSection id="how-it-works" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#475569]">How it works</p>
            <h2
              className="mt-5 text-4xl leading-[0.98] tracking-[-0.055em] text-[#111827] sm:text-5xl"
              style={{ fontFamily: "var(--font-ai-voice-heading), sans-serif" }}
            >
              A quiet workflow, designed to move fast when the lead is hot.
            </h2>
          </div>

          <div className="mt-10 space-y-5">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={reduceMotion ? undefined : { once: true, amount: 0.2 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: index * 0.04 }}
                className="grid gap-4 border-b border-[#E2E8F0] pb-5 pt-3 lg:grid-cols-[120px_1fr] lg:items-start"
              >
                <div className="flex items-center gap-3 lg:block">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EEF0FF] text-sm font-semibold text-[#2838D8]">
                    {index + 1}
                  </span>
                </div>
                <div className="flex flex-col gap-2 lg:flex-row lg:items-start lg:gap-6">
                  <div className="max-w-xs">
                    <h3 className="text-xl font-semibold tracking-[-0.04em] text-[#111827]">{step.title}</h3>
                  </div>
                  <p className="max-w-2xl text-base leading-7 text-[#475569]">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </FadeInSection>

        <FadeInSection className="bg-[#EEF0FF]">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
            <div className="rounded-[1.5rem] border border-[#D9E0FF] bg-[#F3F0FF] p-7 sm:p-10">
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-[#475569]">
                <Workflow className="h-4 w-4 text-[#2838D8]" />
                <span>Integrations</span>
              </div>
              <div className="mt-5 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                <div>
                  <h2 className="text-3xl tracking-[-0.05em] text-[#111827] sm:text-4xl" style={{ fontFamily: "var(--font-ai-voice-heading), sans-serif" }}>
                    Already using other tools?
                  </h2>
                  <p className="mt-4 max-w-xl text-lg leading-8 text-[#475569]">
                    We can connect this to your CRM, outreach tool or internal systems through their API or a webhook.
                  </p>
                </div>
                <div className="flex justify-start lg:justify-end">
                  <a
                    href="#final-cta"
                    className="inline-flex items-center gap-3 rounded-[0.1rem] bg-[#2838D8] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#2335d0]"
                  >
                    Talk through your stack
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection id="for-you" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#475569]">This is for you if</p>
            <h2
              className="mt-5 text-4xl leading-[0.98] tracking-[-0.055em] text-[#111827] sm:text-5xl"
              style={{ fontFamily: "var(--font-ai-voice-heading), sans-serif" }}
            >
              Calling capacity without adding more people to the team.
            </h2>
          </div>

          <div className="mt-8 space-y-4">
            {useCases.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-[1rem] border border-[#E2E8F0] bg-white p-4 sm:p-5">
                <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#EEF0FF] text-[#2838D8]">
                  <CircleCheckBig className="h-4 w-4" />
                </span>
                <p className="text-lg leading-7 text-[#111827]">{item}</p>
              </div>
            ))}
          </div>
        </FadeInSection>

        <EditorialCTA
          id="final-cta"
          eyebrow="Products / Convert"
          title="Hear it before you believe it"
          description="We will place a live call to your number so you can judge the voice, the language handling and the handoff yourself."
          primaryLabel="Hear a sample call"
          primaryHref="#"
          secondaryLabel="Back to products"
          secondaryHref="/#products"
          caption="AI Voice Calls"
          wordmark="VOICE"
        />
      </div>
    </main>
  );
}
