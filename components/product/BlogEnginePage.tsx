"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import { ArrowDown, ArrowRight, BookOpenText, Check } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
import { HandwritingText } from "@/components/ui/handwriting-text";
import type { Product } from "@/data/products";
import { EditorialCTA } from "./EditorialCTA";
import { ProductFooter } from "./ProductFooter";
import { ProductNav } from "./ProductNav";
import styles from "./BlogEnginePage.module.css";

const heading = Outfit({ subsets: ["latin"], variable: "--font-blog-engine-heading" });
const body = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-blog-engine-body" });
const heroPhrases = ["Find the content gap.", "Publish with purpose."];

const walkthroughUrl =
  "mailto:hello@rianinfotech.com?subject=Book%20a%20walkthrough%20for%20Blog%20Engine";

const glanceItems = [
  ["Best for", "Businesses that need search traffic"],
  ["Includes", "Research, drafting, publishing"],
  ["Research", "Keyword volume, difficulty, SERP"],
  ["Control", "Review before publish"],
  ["Status", "Live"],
];

const steps = [
  {
    title: "Find the gap",
    description:
      "Keyword volume, difficulty and what is already ranking, so you write where you can actually win.",
  },
  {
    title: "Draft from your material",
    description:
      "Your positions, your examples, your client work. Not a summary of the top three results.",
  },
  {
    title: "Review and edit",
    description:
      "Nothing publishes unseen. Change the angle, cut a section, rewrite the intro.",
  },
  {
    title: "Publish to your site",
    description:
      "Straight into your CMS, with the metadata and internal links handled.",
  },
];

const audiences = [
  "Your blog stopped three months after it started",
  "You rank for nothing that brings in buyers",
  "You are paying a writer who does not know your business",
  "You want search traffic without running an SEO retainer",
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

export function BlogEnginePage({ product }: { product: Product }) {
  const themeStyles = {
    "--project-text": "#111827",
    "--project-secondary": "#475569",
    "--project-primary": "#2838D8",
    "--project-accent": "#7C2EDB",
    "--project-border": "#E2E8F0",
    "--project-surface": "#FFFFFF",
  } as CSSProperties;

  const reduceMotion = useReducedMotion();

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
          { label: "Product", href: "#what-it-does" },
          { label: "How it works", href: "#how-it-works" },
          { label: "For you", href: "#for-you" },
        ]}
        actionLabel="Book a walkthrough"
        actionHref={walkthroughUrl}
      />

      <div>
        <section
          aria-labelledby="blog-engine-title"
          className={`${styles.hero} relative isolate overflow-hidden px-5 pb-20 pt-8 sm:px-8 sm:pb-28 sm:pt-12 lg:px-12 lg:pt-16`}
        >
          <div className="mx-auto max-w-[1280px]">
            <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-14">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#111827]/55">
                  Products / Create
                  <span className="ml-2 inline-flex items-center gap-1.5 text-[#111827]/65">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
                    Live
                  </span>
                </p>
                <motion.h1
                  id="blog-engine-title"
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className={`${styles.heroTitle} mt-7 max-w-2xl font-serif text-5xl leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-[4.6rem] xl:text-[5.1rem]`}
                >
                  Blog Engine
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
                  Long-form articles researched, drafted and published to your site, with
                  the SEO work done in the same pass rather than bolted on afterwards.
                </motion.p>
                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  className="mt-9 flex flex-wrap gap-3"
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
                    className={`${styles.secondaryButton} inline-flex min-h-12 items-center gap-2 px-6 text-xs font-semibold uppercase tracking-[0.1em] text-[#111827]`}
                  >
                    All products <ArrowDown className="h-3.5 w-3.5" />
                  </a>
                </motion.div>
                <div className="mt-12 flex max-w-lg flex-wrap items-center gap-3 border-t border-[#111827]/10 pt-5 font-mono text-[9px] uppercase tracking-[0.13em] text-[#111827]/45 sm:gap-5">
                  <span>Research</span>
                  <span className="text-[#2838D8]">→</span>
                  <span>Draft</span>
                  <span className="text-[#2838D8]">→</span>
                  <span>Review</span>
                  <span className="text-[#7C2EDB]">→</span>
                  <span>Publish</span>
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
                    <BookOpenText className="h-4 w-4 text-[#2838D8]" />
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#64748B]">
                      From research to publication
                    </p>
                  </div>
                  {[
                    ["01", "Find a content gap"],
                    ["02", "Ground the draft in your knowledge"],
                    ["03", "Review before it goes live"],
                    ["04", "Publish with SEO in place"],
                  ].map(([number, label], index) => (
                    <motion.div
                      key={number}
                      initial={reduceMotion ? false : { opacity: 0, x: 14 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.08, duration: 0.45 }}
                      className="grid grid-cols-[2rem_1fr_auto] items-center gap-4 border-t border-[#111827]/10 py-5 sm:gap-6"
                    >
                      <span className="font-mono text-[9px] text-[#2838D8]">{number}</span>
                      <span className="font-serif text-xl text-[#111827]/80 sm:text-2xl">
                        {label}
                      </span>
                      {index < 3 && (
                        <ArrowDown className="h-3.5 w-3.5 text-[#111827]/35" />
                      )}
                    </motion.div>
                  ))}
                  <p className="mt-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.12em] text-[#111827]/50">
                    <Check className="h-3.5 w-3.5 text-[#2838D8]" />
                    Your review comes before publication
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
            <h2 className="mt-5 max-w-2xl font-serif text-5xl leading-[0.98] tracking-[-0.045em] sm:text-6xl">
              Research, writing, and publishing in one considered workflow.
            </h2>
            <div className="mt-7 max-w-2xl space-y-5 text-base leading-7 text-[#475569] sm:text-lg sm:leading-8">
              <p>
                Blogging usually dies for practical reasons. Somebody has to pick the
                topic, do the research, write two thousand words, fit the keywords in,
                and then remember to publish it.
              </p>
              <p>
                This handles the sequence end to end. Keyword and gap research happens
                before the draft, so the article is aimed at something real rather than
                written first and optimised later.
              </p>
              <p>
                The writing is grounded in your knowledge base, which is what keeps it
                from becoming another interchangeable listicle.
              </p>
            </div>
          </div>

          <aside className={`${styles.glancePanel} border border-[#E2E8F0] bg-[#F8FAFC] p-6 sm:p-8`}>
            <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4">
              <h3 className="font-serif text-2xl tracking-[-0.04em] text-[#111827]">
                At a glance
              </h3>
              <BookOpenText className="h-4 w-4 text-[#2838D8]" />
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
                <h2 className="mt-5 max-w-2xl font-serif text-5xl leading-[0.98] tracking-[-0.045em] sm:text-6xl">
                  From a real search opportunity to a reviewed article.
                </h2>
              </div>
              <p className="max-w-lg text-base leading-7 text-[#111827]/60">
                One workflow connects research, your expertise, editorial control, and
                publishing.
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
                  <span className="font-mono text-[9px] text-[#2838D8]">0{index + 1}</span>
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
        </RevealSection>

        <RevealSection className="bg-[#EEF0FF] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
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
        </RevealSection>

        <RevealSection
          id="for-you"
          className="scroll-mt-8 px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36"
        >
          <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#475569]">
                This is for you if
              </p>
              <h2 className="mt-5 max-w-xl font-serif text-5xl leading-[0.98] tracking-[-0.045em] sm:text-6xl">
                Search content needs to keep moving.
              </h2>
            </div>
            <div className="border-y border-[#111827]/15">
              {audiences.map((item, index) => (
                <motion.div
                  key={item}
                  initial={reduceMotion ? false : { opacity: 0, x: 12 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                  viewport={reduceMotion ? undefined : { once: true, amount: 0.3 }}
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
        </RevealSection>

        <EditorialCTA
          id="final-cta"
          eyebrow="Products / Create"
          title="Publish properly, not occasionally"
          description="Send us your domain. We will show you the gaps worth writing into before you commit to anything."
          primaryLabel="Book a walkthrough"
          primaryHref={walkthroughUrl}
          secondaryLabel="Back to products"
          secondaryHref="/#products"
          wordmark="BLOG ENGINE"
        />
      </div>

      <ProductFooter />
    </main>
  );
}
