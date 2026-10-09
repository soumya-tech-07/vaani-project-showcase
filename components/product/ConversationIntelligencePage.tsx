"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import {
  ArrowDown,
  ArrowRight,
  AudioLines,
  Check,
  MessageSquareText,
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
  variable: "--font-conversation-heading",
});
const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-conversation-body",
});

const waitlistUrl =
  "mailto:hello@rianinfotech.com?subject=Join%20the%20waitlist%20for%20Conversation%20Intelligence";
const contactUrl =
  "mailto:hello@rianinfotech.com?subject=Talk%20through%20my%20stack%20for%20Conversation%20Intelligence";
const heroPhrases = ["Never miss a detail.", "Follow up with context."];

const glanceItems = [
  ["Best for", "Sales teams and consultants"],
  ["Covers", "Meetings and live sales calls"],
  ["Output", "Transcript, notes, follow-up draft"],
  ["Availability", "Waitlist"],
  ["Status", "In build"],
];

const steps = [
  {
    title: "Join the call",
    description:
      "It sits in the meeting or captures from your desktop, depending on where the call happens.",
  },
  {
    title: "Transcribe live",
    description:
      "Speakers separated, transcript running while you are still talking.",
  },
  {
    title: "Summarise on hangup",
    description:
      "Notes, objections, commitments and next steps, written without you touching anything.",
  },
  {
    title: "Draft the follow-up",
    description:
      "Pulled from your knowledge base, ready for you to edit and send.",
  },
];

const audiences = [
  "You run sales calls and the notes never get written properly.",
  "Handoffs between people lose context every time.",
  "You want to know which objections keep coming back.",
  "Your follow-up emails go out two days late.",
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

export function ConversationIntelligencePage({
  product,
}: {
  product: Product;
}) {
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
        actionLabel="Join the waitlist"
        actionHref={waitlistUrl}
      />

      <section
        aria-labelledby="conversation-intelligence-title"
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
                <span className="ml-2 inline-flex items-center gap-1.5 text-[#7C2EDB]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#7C2EDB]" />
                  In build
                </span>
              </p>

              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className="mt-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#2838D8]/15 bg-[#EEF0FF] text-[#2838D8] shadow-[0_8px_24px_rgba(40,56,216,0.08)]"
              >
                <MessageSquareText aria-hidden="true" className="h-6 w-6" />
              </motion.div>

              <motion.h1
                id="conversation-intelligence-title"
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.06, ease: "easeOut" }}
                className={`${styles.heroTitle} mt-7 max-w-2xl text-5xl leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-[4.6rem] xl:text-[5.1rem]`}
              >
                Conversation Intelligence
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
                Transcription for your meetings and a live transcript while a
                sales call is still running, with the notes and follow-up draft
                written before you have left the call.
              </motion.p>
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="mt-9 flex flex-wrap gap-3"
              >
                <a
                  href={waitlistUrl}
                  className={`${styles.primaryButton} group inline-flex min-h-12 items-center gap-3 bg-[#2438E8] px-6 text-xs font-bold uppercase tracking-[0.1em] text-white`}
                >
                  Join the waitlist
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
                <span>Listen</span>
                <span className="text-[#2838D8]">→</span>
                <span>Understand</span>
                <span className="text-[#2838D8]">→</span>
                <span>Follow up</span>
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
                    From conversation to follow-up
                  </p>
                  <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-[#7C2EDB]/15 bg-[#F3F0FF] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.1em] text-[#7C2EDB]">
                    <Radio className="h-3 w-3" aria-hidden="true" />
                    In build
                  </span>
                </div>
                {[
                  ["01", "Capture the conversation"],
                  ["02", "Separate speakers as it happens"],
                  ["03", "Surface notes and next steps"],
                  ["04", "Prepare a follow-up to review"],
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
                  Review the draft before you send
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
              Sales calls are where the useful detail lives, and it is the detail
              most likely to be lost. People take half a page of notes and
              reconstruct the rest from memory two days later.
            </p>
            <p>
              This records the call, separates who said what, and writes the
              transcript as the conversation happens rather than afterwards. The
              summary, the objections raised and the agreed next step come out
              the moment the call ends.
            </p>
            <p>
              Because it reads from the same knowledge base as everything else,
              the follow-up it drafts already knows your pricing, your case
              studies and what you promised on the last call.
            </p>
          </div>
        </div>

        <aside className={`${styles.glancePanel} border border-[#E2E8F0] bg-[#F8FAFC] p-6 sm:p-8`}>
          <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4">
            <h3 className="text-2xl tracking-[-0.04em] text-[#111827]">
              At a glance
            </h3>
            <MessageSquareText aria-hidden="true" className="h-4 w-4 text-[#2838D8]" />
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
                From the live conversation to a considered next step.
              </h2>
            </div>
            <p className="max-w-lg text-base leading-7 text-[#111827]/60">
              Capture what was said, keep the details together, and leave the
              call with a follow-up draft ready for your review.
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
          eyebrow="Conversation Intelligence / In build"
          title="This one is not finished yet"
          description="We are building it now. Join the waitlist and we will bring you in as an early tester rather than selling you something that does not exist."
          primaryLabel="Join the waitlist"
          primaryHref={waitlistUrl}
          secondaryLabel="Back to products"
          secondaryHref="/#products"
          wordmark="CONVERSATION"
        />
      </motion.div>

      <ProductFooter />
    </main>
  );
}
