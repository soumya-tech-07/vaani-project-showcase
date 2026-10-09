"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import { ArrowDown, ArrowRight, ArrowUpRight, BookOpenText, GitBranch, MessagesSquare } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
import { HandwritingText } from "@/components/ui/handwriting-text";
import type { Product } from "@/data/products";
import { EditorialCTA } from "./EditorialCTA";
import { ProductFooter } from "./ProductFooter";
import { ProductNav } from "./ProductNav";
import styles from "./GitHubContextPage.module.css";

const heading = Outfit({ subsets: ["latin"], variable: "--font-github-context-heading" });
const body = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-github-context-body" });
const heroPhrases = ["Across every repo.", "Know what changed."];
const requestAccessUrl = "mailto:hello@rianinfotech.com?subject=Request%20access%20to%20GitHub%20Context";

const workflow = [
  {
    title: "Connect your repos",
    description: "The whole portfolio, not one at a time.",
    Icon: GitBranch,
  },
  {
    title: "Ask across everything",
    description: "One chat covering every repository, with new ones added mid-conversation.",
    Icon: MessagesSquare,
  },
  {
    title: "Export the answer",
    description: "Turn the response into a client-facing delivery note.",
    Icon: BookOpenText,
  },
];

const audience = [
  "Your team is part-time, remote, or spread across time zones",
  "You are the technical lead and reviewing every repo is not realistic",
  "You need to report delivery to clients regularly",
  "New developers take weeks to find their way around",
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
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={reduceMotion ? undefined : { once: true, amount: 0.18 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}

export function GitHubContextPage({ product }: { product: Product }) {
  const reduceMotion = useReducedMotion();
  const themeStyles = {
    "--project-text": "#111827",
    "--project-secondary": "#475569",
    "--project-primary": "#2838D8",
    "--project-border": "#E2E8F0",
    "--project-surface": "#FFFFFF",
  } as CSSProperties;

  return (
    <main
      id="top"
      className={`${styles.page} ${heading.variable} ${body.variable} min-h-screen overflow-x-clip bg-white text-[#111827]`}
      style={themeStyles}
    >
      <ProductNav
        title={product.title}
        liveUrl="#"
        links={[
          { label: "Overview", href: "#top" },
          { label: "How it works", href: "#how-it-works" },
          { label: "All products", href: "/#products" },
        ]}
        actionLabel="Request access"
        actionHref={requestAccessUrl}
      />

      <div>
        <section className="github-hero relative isolate overflow-hidden px-5 pb-20 pt-8 sm:px-8 sm:pb-28 sm:pt-12 lg:px-12 lg:pt-16">
          <div className="mx-auto max-w-[1280px]">
            <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-14">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#111827]/55">
                  Products / Everyday tools
                  <span className="ml-2 inline-flex items-center gap-1.5 text-[#111827]/65">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#7C2EDB]" />
                    Private beta
                  </span>
                </p>
                <motion.h1
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="github-hero-title mt-7 max-w-2xl font-serif text-5xl leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-[4.6rem] xl:text-[5.1rem]"
                >
                  <span className="block">GitHub</span>
                  <span className="block">Context.</span>
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
                      className="github-handwriting"
                    />
                  </span>
                </motion.h1>
                <motion.p
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
                  className="mt-7 max-w-xl text-base leading-7 text-[#111827]/65 sm:text-lg sm:leading-8"
                >
                  Chat across every repo your team owns. Ask what changed, when, and in which files.
                </motion.p>
                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  className="mt-9 flex flex-wrap gap-3"
                >
                  <a
                    href={requestAccessUrl}
                    className="github-candy group inline-flex min-h-12 items-center gap-3 bg-[#2438E8] px-6 text-xs font-bold uppercase tracking-[0.1em] text-white"
                  >
                    Request access
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#111827]">
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </a>
                  <a
                    href="/#products"
                    className="github-secondary inline-flex min-h-12 items-center gap-2 px-6 text-xs font-semibold uppercase tracking-[0.1em] text-[#111827]"
                  >
                    All products
                    <ArrowDown className="h-3.5 w-3.5" />
                  </a>
                </motion.div>
                <div className="mt-12 flex max-w-lg flex-wrap items-center gap-3 border-t border-[#111827]/10 pt-5 font-mono text-[9px] uppercase tracking-[0.13em] text-[#111827]/45 sm:gap-4">
                  <span>Repositories</span><span className="text-[#2838D8]">→</span>
                  <span>Conversation</span><span className="text-[#2838D8]">→</span>
                  <span>Context</span><span className="text-[#7C2EDB]">→</span>
                  <span>Delivery</span>
                </div>
              </div>

              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
                className="relative lg:pl-4"
              >
                <div className="github-prompt relative border-y border-[#111827]/15 py-8 sm:py-10">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#64748B]">
                    Ask your portfolio
                  </p>
                  <p className="mt-5 max-w-xl font-serif text-3xl leading-[1.08] tracking-[-0.045em] text-[#111827] sm:text-4xl">
                    “What changed today?”
                  </p>
                  <div className="mt-7 space-y-0">
                    {["When did it change?", "Which files were involved?", "Who made the changes?", "What does this module do?"].map((question, index) => (
                      <div key={question} className="flex items-center gap-4 border-t border-[#111827]/10 py-3.5">
                        <span className="font-mono text-[9px] text-[#2838D8]">0{index + 1}</span>
                        <p className="text-sm text-[#475569] sm:text-base">{question}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-[#64748B]">
                    <span className="h-2 w-2 rounded-full bg-[#7C2EDB]" />
                    Across the repositories your team owns
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <RevealSection className="border-t border-[#E2E8F0] bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-12 lg:py-24">
            <div>
              <h2 className="max-w-xl text-4xl leading-[0.98] tracking-[-0.055em] text-[#111827] sm:text-5xl">
                What it does
              </h2>
              <div className="mt-7 space-y-5 text-lg leading-8 text-[#475569]">
                <p>
                  When developers work at different hours, tracking what actually got done turns into a standing meeting nobody enjoys. This replaces it with a question.
                </p>
                <p>
                  It indexes your repositories into a knowledge graph, so you can ask across all of them at once rather than opening each one. What changed today, which files, by whom, and what does this module do.
                </p>
                <p>
                  Answers export as a document, which makes it straightforward to turn a day of commits into something a client can read.
                </p>
              </div>
            </div>

            <aside className="h-fit border border-[#E2E8F0] bg-[#F8FAFC] p-6 sm:p-7">
              <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4">
                <h3 className="text-xl font-semibold tracking-[-0.04em] text-[#111827]">At a glance</h3>
                <span className="rounded-full border border-[#E2E8F0] bg-white px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-[#7C2EDB]">
                  Private beta
                </span>
              </div>
              <dl className="mt-5 space-y-4 text-sm text-[#475569]">
                {[
                  ["Best for", "Technical leads and agencies"],
                  ["Covers", "Your whole GitHub portfolio"],
                  ["Output", "Chat answers and exportable docs"],
                  ["Access", "By request"],
                  ["Status", "Private beta"],
                ].map(([label, value]) => (
                  <div key={label} className="grid grid-cols-[90px_1fr] gap-3 border-b border-[#E2E8F0] pb-3 last:border-none last:pb-0">
                    <dt className="font-medium text-[#111827]">{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </RevealSection>

        <RevealSection id="how-it-works" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#475569]">How it works</p>
            <h2 className="mt-5 text-4xl leading-[0.98] tracking-[-0.055em] text-[#111827] sm:text-5xl">
              A portfolio-wide view, one question at a time.
            </h2>
          </div>
          <div className="mt-10 space-y-5">
            {workflow.map(({ title, description, Icon }, index) => (
              <motion.div
                key={title}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={reduceMotion ? undefined : { once: true, amount: 0.2 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: index * 0.04 }}
                className="grid gap-4 border-b border-[#E2E8F0] pb-5 pt-3 lg:grid-cols-[120px_1fr] lg:items-start"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EEF0FF] text-sm font-semibold text-[#2838D8]">
                    {index + 1}
                  </span>
                  <Icon className="h-4 w-4 text-[#64748B]" aria-hidden="true" />
                </div>
                <div className="flex flex-col gap-2 lg:flex-row lg:items-start lg:gap-6">
                  <h3 className="max-w-xs text-xl font-semibold tracking-[-0.04em] text-[#111827]">{title}</h3>
                  <p className="max-w-2xl text-base leading-7 text-[#475569]">{description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </RevealSection>

        <RevealSection className="bg-[#EEF0FF]">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
            <div className="border border-[#D9E0FF] bg-[#F3F0FF] p-7 sm:p-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#475569]">Built around your repos</p>
              <div className="mt-5 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                <div>
                  <h2 className="text-3xl tracking-[-0.05em] text-[#111827] sm:text-4xl">
                    Already have a GitHub workflow?
                  </h2>
                  <p className="mt-4 max-w-xl text-lg leading-8 text-[#475569]">
                    GitHub Context should fit around the repositories and workflows your team already uses, not force everyone to change how they work.
                  </p>
                </div>
                <div className="flex justify-start lg:justify-end">
                  <a
                    href={requestAccessUrl}
                    className="github-candy group inline-flex min-h-12 items-center gap-3 bg-[#2438E8] px-5 text-xs font-bold uppercase tracking-[0.1em] text-white"
                  >
                    Request access
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>

        <RevealSection className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#475569]">This is for you if</p>
            <h2 className="mt-5 text-4xl leading-[0.98] tracking-[-0.055em] text-[#111827] sm:text-5xl">
              Your team ships across repos, people, and time zones.
            </h2>
          </div>
          <div className="mt-8 border-y border-[#111827]/10">
            {audience.map((item, index) => (
              <div key={item} className="flex items-start gap-5 border-b border-[#111827]/10 py-5 last:border-b-0 sm:gap-8">
                <span className="pt-1 font-mono text-[10px] text-[#2838D8]">0{index + 1}</span>
                <p className="max-w-3xl text-lg leading-7 text-[#111827] sm:text-xl">{item}</p>
              </div>
            ))}
          </div>
        </RevealSection>

        <EditorialCTA
          id="final-cta"
          eyebrow="Products / Everyday tools · Private beta"
          title="Know what your team shipped without opening your laptop"
          description="We run this across our own portfolio every day. Ask for access and we will set it up on your repos."
          primaryLabel="Request access"
          primaryHref={requestAccessUrl}
          secondaryLabel="Back to products"
          secondaryHref="/#products"
          caption="GitHub Context"
          wordmark="CONTEXT"
        />
      </div>

      <ProductFooter />
    </main>
  );
}
