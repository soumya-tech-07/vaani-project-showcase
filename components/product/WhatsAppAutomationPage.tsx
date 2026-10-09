"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import {
  ArrowDown,
  ArrowRight,
  AudioLines,
  Check,
  MessageCircle,
  Radio,
} from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
import type { Product } from "@/data/products";
import { HandwritingText } from "@/components/ui/handwriting-text";
import { EditorialCTA } from "./EditorialCTA";
import { ProductFooter } from "./ProductFooter";
import { ProductNav } from "./ProductNav";
import styles from "./ConversationIntelligencePage.module.css";

const heading = Outfit({
  subsets: ["latin"],
  variable: "--font-whatsapp-automation-heading",
});
const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-whatsapp-automation-body",
});

const demoUrl =
  "mailto:hello@rianinfotech.com?subject=Book%20a%20demo%20for%20WhatsApp%20Automation";
const contactUrl =
  "mailto:hello@rianinfotech.com?subject=Talk%20through%20my%20stack%20for%20WhatsApp%20Automation";
const heroPhrases = ["Reply in seconds.", "Turn chats into calls."];

const glanceItems = [
  ["Best for", "Real estate, coaching, high-ticket services"],
  ["Built on", "Meta Cloud API, direct"],
  ["Languages", "English, Hindi, Hinglish, Marathi"],
  ["Includes", "Inbox, broadcasts, sequences, voice"],
  ["Status", "Live"],
];

const steps = [
  {
    title: "Lead lands",
    description:
      "From your ads, your site, a Click-to-WhatsApp campaign or a QR code. The first reply goes out in seconds.",
  },
  {
    title: "The bot qualifies",
    description:
      "Budget, authority, need and timing, asked conversationally rather than as a form. Answers are scored as they come.",
  },
  {
    title: "Hot leads get called",
    description:
      "An AI voice call goes out to the leads that qualify, with a budget cap and a kill switch you control.",
  },
  {
    title: "A human takes over",
    description:
      "Anyone on your team can step into the thread from the shared inbox at any point, and the bot stands down.",
  },
];

const audiences = [
  "Your inbound chats arrive faster than your team can answer them.",
  "You spend on ads and the follow-up is where it leaks.",
  "Your buyers write in Hindi, English and Hinglish in the same message.",
  "You want your own branding on the platform, not a vendor's.",
];

function RevealSection({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
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

export function WhatsAppAutomationPage({ product }: { product: Product }) {
  const reduceMotion = useReducedMotion();
  const themeStyles = {
    "--project-text": "#111827",
    "--project-secondary": "#475569",
    "--project-primary": "#2838D8",
    "--project-accent": "#7C2EDB",
    "--project-border": "#E2E8F0",
    "--project-surface": "#FFFFFF",
  } as CSSProperties;

  return (
    <main
      id="top"
      className={`${styles.page} ${heading.variable} ${body.variable} rian-editorial-theme min-h-screen bg-white text-[#111827]`}
      style={themeStyles}
    >
      <ProductNav
        title={product.title}
        liveUrl="#"
        links={[
          { label: "Product", href: "#what-it-does" },
          { label: "How it works", href: "#how-it-works" },
          { label: "For you", href: "#for-you" },
        ]}
        actionLabel="Book a demo"
        actionHref={demoUrl}
      />

      <section
        aria-labelledby="whatsapp-automation-title"
        className={`${styles.hero} relative isolate overflow-hidden px-5 pb-20 pt-12 sm:px-8 sm:pb-28 sm:pt-16 lg:px-12 lg:pt-20`}
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-14">
            <div className="relative z-10">
              <p className="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#111827]/55">
                <a className="transition-colors hover:text-[#2838D8]" href="/#products">
                  Products
                </a>
                <span className="text-[#2838D8]">/</span>
                <span>Nurture</span>
                <span className="ml-2 inline-flex items-center gap-1.5 text-[#059669]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
                  Live
                </span>
              </p>

              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className="mt-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#2838D8]/15 bg-[#EEF0FF] text-[#2838D8] shadow-[0_8px_24px_rgba(40,56,216,0.08)]"
              >
                <MessageCircle aria-hidden="true" className="h-6 w-6" />
              </motion.div>

              <motion.h1
                id="whatsapp-automation-title"
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.06, ease: "easeOut" }}
                className={`${styles.heroTitle} mt-7 max-w-2xl text-5xl leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-[4.6rem] xl:text-[5.1rem]`}
              >
                WhatsApp Automation
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
              </motion.h1>
              <motion.p
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
                className="mt-7 max-w-xl text-base leading-7 text-[#111827]/65 sm:text-lg sm:leading-8"
              >
                A whitelabel WhatsApp platform on Meta&apos;s Cloud API. Shared
                inbox, broadcasts, drip sequences, an AI bot that qualifies on
                BANT, and AI voice calls to the leads worth chasing.
              </motion.p>
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="mt-9 flex flex-wrap gap-3"
              >
                <a
                  href={demoUrl}
                  className={`${styles.primaryButton} group inline-flex min-h-12 items-center gap-3 bg-[#2438E8] px-6 text-xs font-bold uppercase tracking-[0.1em] text-white`}
                >
                  Book a demo
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
              </motion.div>
              <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-[#111827]/10 pt-5 font-mono text-[9px] uppercase tracking-[0.13em] text-[#111827]/45 sm:gap-5">
                <span>Respond</span>
                <span className="text-[#2838D8]">→</span>
                <span>Qualify</span>
                <span className="text-[#2838D8]">→</span>
                <span>Connect</span>
              </div>
            </div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
              className="relative lg:pl-4"
            >
              <div className={`${styles.heroFlow} border-y border-[#111827]/15 py-7 sm:py-9`}>
                <div className="mb-6 flex items-center gap-3">
                  <AudioLines aria-hidden="true" className="h-4 w-4 text-[#2838D8]" />
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#64748B]">
                    From first reply to qualified lead
                  </p>
                  <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-emerald-600/15 bg-emerald-50 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.1em] text-emerald-700">
                    <Radio className="h-3 w-3" aria-hidden="true" />
                    Live
                  </span>
                </div>
                {[
                  ["01", "Respond as the enquiry arrives"],
                  ["02", "Qualify with a conversational bot"],
                  ["03", "Call promising leads with AI voice"],
                  ["04", "Hand the thread to your team"],
                ].map(([number, label], index) => (
                  <motion.div
                    key={number}
                    initial={reduceMotion ? false : { opacity: 0, x: 14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.08, duration: 0.45 }}
                    className={`${styles.flowRow} grid grid-cols-[2rem_1fr_auto] items-center gap-4 border-t border-[#111827]/10 py-5 sm:gap-6`}
                  >
                    <span className="font-mono text-[9px] text-[#2838D8]">{number}</span>
                    <span className="text-lg text-[#111827]/80 sm:text-xl">
                      {label}
                    </span>
                    {index < 3 && (
                      <ArrowDown
                        aria-hidden="true"
                        className="h-3.5 w-3.5 text-[#111827]/35"
                      />
                    )}
                  </motion.div>
                ))}
                <p className="mt-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.12em] text-[#111827]/50">
                  <Check aria-hidden="true" className="h-3.5 w-3.5 text-[#2838D8]" />
                  Your team can take over at any time
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <RevealSection
        id="what-it-does"
        className="mx-auto grid max-w-[1280px] gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:px-12 lg:py-36"
      >
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#475569]">
            What it does
          </p>
          <h2 className="mt-5 max-w-2xl text-5xl leading-[0.98] tracking-[-0.045em] sm:text-6xl">
            What it does
          </h2>
          <div className="mt-7 max-w-2xl space-y-5 text-base leading-7 text-[#475569] sm:text-lg sm:leading-8">
            <p>
              Most businesses do not have a lead problem. They have a response
              problem. The enquiry comes in at nine at night, somebody answers
              it at eleven the next morning, and by then it has gone cold.
            </p>
            <p>
              This answers immediately, in the language the customer wrote in,
              and keeps going until the lead is either qualified or clearly not
              worth chasing. It runs on Meta&apos;s Cloud API directly, so there
              is no reseller sitting between you and your own numbers.
            </p>
            <p>
              When a lead scores well, it does not just sit in a queue. It gets
              a call.
            </p>
          </div>
        </div>

        <aside className={`${styles.glancePanel} border border-[#E2E8F0] bg-[#F8FAFC] p-6 sm:p-8`}>
          <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4">
            <h3 className="text-2xl tracking-[-0.04em] text-[#111827]">
              At a glance
            </h3>
            <MessageCircle aria-hidden="true" className="h-4 w-4 text-[#2838D8]" />
          </div>
          <dl className="mt-2">
            {glanceItems.map(([label, value]) => (
              <div
                key={label}
                className="grid grid-cols-[100px_1fr] gap-3 border-b border-[#E2E8F0] py-4 last:border-none"
              >
                <dt className="text-sm font-medium text-[#111827]">{label}</dt>
                <dd className="text-sm leading-6 text-[#475569]">{value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </RevealSection>

      <RevealSection
        id="how-it-works"
        className="scroll-mt-8 bg-[#111827]/[0.035] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#475569]">
                How it works
              </p>
              <h2 className="mt-5 max-w-2xl text-5xl leading-[0.98] tracking-[-0.045em] sm:text-6xl">
                From first reply to a real conversation.
              </h2>
            </div>
            <p className="max-w-lg text-base leading-7 text-[#111827]/60">
              Respond quickly, understand who is ready to talk, and bring a
              person into the conversation whenever they are needed.
            </p>
          </div>
          <div className="mt-12 border-y border-[#111827]/15">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={reduceMotion ? undefined : { once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                className={`${styles.stepRow} grid gap-3 border-b border-[#111827]/10 py-6 last:border-0 sm:grid-cols-[3rem_0.8fr_1.2fr] sm:items-baseline sm:gap-8 sm:py-8`}
              >
                <span className="font-mono text-[9px] text-[#2838D8]">
                  0{index + 1}
                </span>
                <h3 className="text-2xl tracking-[-0.025em] text-[#111827] sm:text-3xl">
                  {step.title}
                </h3>
                <p className="max-w-lg text-sm leading-6 text-[#111827]/60 sm:text-base sm:leading-7">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection className="bg-[#EEF0FF] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto grid max-w-[1280px] gap-8 border-y border-[#2838D8]/15 py-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20 lg:py-12">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#2838D8]">
              An open workflow
            </p>
            <h2 className="mt-4 text-4xl leading-[0.98] tracking-[-0.045em] text-[#111827] sm:text-5xl">
              Already using other tools?
            </h2>
          </div>
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-base leading-7 text-[#475569] sm:text-lg">
              We can connect this to your CRM, outreach tool or internal systems
              through their API or a webhook.
            </p>
            <a
              href={contactUrl}
              className={`${styles.primaryButton} inline-flex min-h-12 shrink-0 items-center gap-3 bg-[#2838D8] px-5 text-xs font-bold uppercase tracking-[0.1em] text-white`}
            >
              Talk through your stack <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <p className="text-xs leading-5 text-[#475569] sm:col-start-2">
            Connections depend on the systems you use; integrations are not
            assumed to be preconfigured.
          </p>
        </div>
      </RevealSection>

      <RevealSection
        id="for-you"
        className="scroll-mt-8 px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36"
      >
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <h2 className="mt-5 max-w-xl text-5xl leading-[0.98] tracking-[-0.045em] sm:text-6xl">
              This is for you if
            </h2>
          </div>
          <div className="border-y border-[#111827]/15">
            {audiences.map((item, index) => (
              <motion.div
                key={item}
                initial={reduceMotion ? false : { opacity: 0, x: 12 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                viewport={reduceMotion ? undefined : { once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className={`${styles.audienceRow} grid grid-cols-[2rem_1fr] items-baseline gap-4 border-b border-[#111827]/10 py-5 last:border-0 sm:gap-6 sm:py-6`}
              >
                <span className="font-mono text-[9px] text-[#7C2EDB]">
                  0{index + 1}
                </span>
                <p className="text-xl leading-snug text-[#111827]/80 sm:text-2xl">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </RevealSection>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={reduceMotion ? undefined : { once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <EditorialCTA
          id="final-cta"
          eyebrow="WhatsApp Automation / Live"
          title="Stop losing the leads you already paid for"
          description="We will show you the inbox, the qualifying bot and a live voice call, on a number set up for your business."
          primaryLabel="Book a demo"
          primaryHref={demoUrl}
          secondaryLabel="Back to products"
          secondaryHref="/#products"
          wordmark="WHATSAPP"
        />
      </motion.div>

      <ProductFooter />
    </main>
  );
}
