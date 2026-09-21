"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowUpRight,
  Clipboard as ClipboardIcon,
  Code2,
  Languages,
  Mic,
  Play,
  Sparkles,
  WandSparkles,
  Zap,
} from "lucide-react"
import { VoiceWorkspace } from "@/components/ui/voice-workspace"
import ArrowFillButton from "@/components/ui/arrow-fill-button"
import RevealText from "@/components/ui/reveal-text"
import { Typewriter } from "@/components/ui/typewriter-text"
import {
  ResizableMobileNav,
  ResizableMobileNavHeader,
  ResizableMobileNavMenu,
  ResizableMobileNavToggle,
  ResizableNavbar,
  ResizableNavbarButton,
  ResizableNavbarLogo,
  ResizableNavBody,
  ResizableNavItems,
} from "@/components/ui/resizable-navbar"
import { useEffect, useRef, useState } from "react"

const productUrl = "https://vaani.rianinfotech.com/"

const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Showcase", href: "#showcase" },
  { label: "Explore Vaani", href: "#explore" },
  { label: "Technology", href: "#technology" },
]

const capabilities = [
  {
    icon: Mic,
    title: "Natural Speech",
    description:
      "Capture conversational phrasing without forcing every thought into a script.",
  },
  {
    icon: Languages,
    title: "Hindi & Hinglish",
    description:
      "Move between English, Hindi, and mixed speech the way people actually talk.",
  },
  {
    icon: WandSparkles,
    title: "Smart Cleanup",
    description:
      "Strip filler and repetition while keeping the speaker's meaning intact.",
  },
  {
    icon: Sparkles,
    title: "Context Awareness",
    description:
      "Use the surrounding thought to produce clearer, more useful text.",
  },
  {
    icon: ClipboardIcon,
    title: "Smart Formatting",
    description:
      "Turn raw speech into readable paragraphs, lists, punctuation, and notes.",
  },
  {
    icon: Zap,
    title: "Self-Correction",
    description:
      "Handle spoken restarts and corrections without breaking the flow.",
  },
]

const techStack = [
  { label: "Next.js", detail: "App Router" },
  { label: "React", detail: "Component UI" },
  { label: "TypeScript", detail: "Typed codebase" },
  { label: "Tailwind CSS", detail: "Design system" },
  { label: "Framer Motion", detail: "Interaction layer" },
  { label: "Lucide", detail: "Interface icons" },
]

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <div className="max-w-2xl">
      <RevealText
        as="p"
        size="sm"
        stagger={0.02}
        className="mb-4 font-mono tracking-[0.24em] text-[#b8ff00] uppercase"
      >
        {eyebrow}
      </RevealText>
      <RevealText
        as="h2"
        size="xl"
        delay={0.08}
        className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl"
      >
        {title}
      </RevealText>
      {description && (
        <RevealText
          as="p"
          size="base"
          delay={0.16}
          stagger={0.02}
          className="mt-4 max-w-xl leading-7 font-normal text-[#a0a0a0]"
        >
          {description}
        </RevealText>
      )}
    </div>
  )
}

function StaticVaaniPreview() {
  const previewBars = [
    16, 28, 42, 24, 35, 20, 39, 30, 45, 22, 34, 18, 40, 27, 36, 21,
  ]

  return (
    <div className="absolute inset-0 overflow-auto bg-[#080808] p-5 sm:p-8">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between border-b border-[#242424] pb-4">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#b8ff00] text-xs font-bold text-[#080808]">
              V
            </span>
            <span className="text-xs font-semibold tracking-[0.18em] text-white">
              VAANI
            </span>
          </div>
          <span className="font-mono text-[9px] tracking-[0.18em] text-[#707070] uppercase">
            voice to polished text
          </span>
        </div>
        <div className="grid gap-6 py-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="font-mono text-[9px] tracking-[0.2em] text-[#b8ff00] uppercase">
              AI voice workspace
            </p>
            <h3 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
              Speak naturally.
              <br />
              <span className="text-[#dfff80]">Get polished text.</span>
            </h3>
            <p className="mt-4 max-w-sm text-xs leading-6 text-[#a0a0a0]">
              Turn natural speech into clean, structured, ready-to-use text.
            </p>
            <a
              href={productUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-md bg-[#b8ff00] px-3 py-2 text-[11px] font-semibold text-[#080808]"
            >
              Open Vaani <ArrowUpRight size={12} />
            </a>
          </div>
          <div className="rounded-xl border border-[#242424] bg-[#101010] p-3 shadow-[0_16px_45px_rgba(0,0,0,0.3)]">
            <div className="flex items-center justify-between border-b border-[#242424] pb-3">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#b8ff00] text-[#080808]">
                  <Mic size={12} />
                </span>
                <span className="text-[11px] font-medium text-white">
                  Vaani workspace
                </span>
              </div>
              <span className="text-[9px] tracking-[0.15em] text-[#dfff80] uppercase">
                Recording
              </span>
            </div>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-[#242424] bg-[#0d0d0d] p-3">
                <p className="font-mono text-[8px] tracking-[0.16em] text-[#707070] uppercase">
                  Raw speech
                </p>
                <div className="mt-3 flex h-8 items-center gap-1">
                  {previewBars.map((height, index) => (
                    <span
                      key={index}
                      className="w-1 flex-1 rounded-full bg-[#b8ff00]"
                      style={{
                        height: `${height * 0.55}px`,
                        opacity: 0.6 + (index % 3) * 0.12,
                      }}
                    />
                  ))}
                </div>
                <p className="mt-3 text-[10px] leading-5 text-[#a0a0a0]">
                  “so basically yesterday I was...”
                </p>
              </div>
              <div className="rounded-lg border border-[#b8ff00]/25 bg-[#171717] p-3">
                <p className="font-mono text-[8px] tracking-[0.16em] text-[#b8ff00] uppercase">
                  Polished output
                </p>
                <p className="mt-5 text-[11px] leading-6 text-white">
                  “Yesterday, I was planning to go to the office...”
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 border-t border-[#242424] pt-4 sm:grid-cols-4">
          <span className="rounded-md border border-[#242424] px-3 py-2 text-center text-[9px] tracking-[0.14em] text-[#707070] uppercase">
            Features
          </span>
          <span className="rounded-md border border-[#242424] px-3 py-2 text-center text-[9px] tracking-[0.14em] text-[#707070] uppercase">
            How It Works
          </span>
          <span className="rounded-md border border-[#242424] px-3 py-2 text-center text-[9px] tracking-[0.14em] text-[#707070] uppercase">
            Pricing
          </span>
          <span className="rounded-md border border-[#242424] px-3 py-2 text-center text-[9px] tracking-[0.14em] text-[#707070] uppercase">
            FAQ
          </span>
        </div>
      </div>
    </div>
  )
}

function LiveVaaniPreview() {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const fallbackTimerRef = useRef<number | null>(null)

  useEffect(() => {
    fallbackTimerRef.current = window.setTimeout(() => setHasError(true), 10000)
    return () => {
      if (fallbackTimerRef.current !== null)
        window.clearTimeout(fallbackTimerRef.current)
    }
  }, [])

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-[#242424] bg-[#101010] p-2 shadow-[0_30px_80px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:-translate-y-1 sm:p-3">
      <div className="flex h-11 items-center gap-3 rounded-xl border border-[#242424] bg-[#0d0d0d] px-3 sm:px-4">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff6257]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="min-w-0 flex-1 rounded-md border border-[#242424] bg-[#121212] px-3 py-1.5 font-mono text-[10px] text-[#707070] sm:text-xs">
          vaani.rianinfotech.com
        </div>
        <a
          href={productUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden shrink-0 items-center gap-1.5 rounded-md border border-[#b8ff00]/30 px-3 py-1.5 text-xs font-medium text-[#dfff80] transition-colors hover:bg-[#b8ff00] hover:text-[#080808] sm:inline-flex"
        >
          Open <ArrowUpRight size={13} />
        </a>
      </div>
      <div className="relative mt-2 h-[min(72vw,720px)] min-h-[460px] overflow-hidden rounded-xl border border-[#242424] bg-[#0d0d0d] sm:h-[680px]">
        {!hasError && (
          <iframe
            title="Live Vaani website preview"
            src={productUrl}
            onLoad={() => {
              setIsLoading(false)
              setHasError(false)
              if (fallbackTimerRef.current !== null)
                window.clearTimeout(fallbackTimerRef.current)
            }}
            className={`h-full w-full border-0 bg-white transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}
            loading="lazy"
            allow="clipboard-write"
          />
        )}
        {isLoading && !hasError && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#0d0d0d] px-6 text-center">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-[#b8ff00]/30 bg-[#b8ff00]/10 text-[#b8ff00]">
              <span className="animate-pulse text-xl font-semibold">V</span>
            </div>
            <p className="text-base font-medium text-white">
              Loading live experience...
            </p>
            <span className="mt-4 h-1.5 w-28 overflow-hidden rounded-full bg-[#242424]">
              <span className="block h-full w-1/2 animate-pulse rounded-full bg-[#b8ff00]" />
            </span>
          </div>
        )}
        {hasError && (
          <>
            <StaticVaaniPreview />
            <div className="pointer-events-none absolute right-3 bottom-3 z-10 rounded-full border border-[#b8ff00]/25 bg-[#080808]/90 px-2.5 py-1 font-mono text-[9px] tracking-[0.14em] text-[#dfff80] uppercase">
              Preview
            </div>
          </>
        )}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2 px-1 pt-3 text-[10px] tracking-[0.16em] text-[#707070] uppercase sm:px-2">
        <span>
          {hasError ? "Preview" : isLoading ? "Loading live site" : "Live site"}
        </span>
        {hasError && (
          <span className="tracking-normal text-[#707070] normal-case">
            Live preview unavailable in this embedded view
          </span>
        )}
        <a
          href={productUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#b8ff00] hover:text-[#dfff80] sm:hidden"
        >
          Open Vaani ↗
        </a>
      </div>
    </div>
  )
}

export function VaaniLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#080808] text-white selection:bg-[#b8ff00] selection:text-[#080808]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#242424]/80 bg-[#080808]/85 backdrop-blur-xl">
        <ResizableNavbar>
          <ResizableNavBody>
            <ResizableNavbarLogo />
            <ResizableNavItems
              items={navItems.map((item) => ({
                name: item.label,
                link: item.href,
              }))}
            />
            <ArrowFillButton
              btnText="View Product"
              href={productUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 min-w-[10rem] px-5 pr-14 text-xs"
            />
          </ResizableNavBody>
          <ResizableMobileNav>
            <ResizableMobileNavHeader>
              <ResizableNavbarLogo />
              <ResizableMobileNavToggle
                isOpen={mobileMenuOpen}
                onClick={() => setMobileMenuOpen((open) => !open)}
              />
            </ResizableMobileNavHeader>
            <ResizableMobileNavMenu
              isOpen={mobileMenuOpen}
              onClose={() => setMobileMenuOpen(false)}
            >
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full rounded-lg px-3 py-2 text-sm text-[#a0a0a0] hover:bg-[#171717] hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
              <ResizableNavbarButton
                href={productUrl}
                className="mt-2 w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                View Product <ArrowUpRight size={14} />
              </ResizableNavbarButton>
            </ResizableMobileNavMenu>
          </ResizableMobileNav>
        </ResizableNavbar>
      </header>
      <section id="top" className="relative border-b border-[#242424]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(184,255,0,0.12),transparent_28%),linear-gradient(180deg,#0d0d0d,#080808)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pt-28 pb-20 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16 lg:px-8 lg:pt-36 lg:pb-24">
          <div>
            <RevealText
              as="p"
              size="sm"
              stagger={0.02}
              className="mb-6 font-mono tracking-[0.24em] text-[#b8ff00] uppercase"
            >
              Rian Infotech / Product Showcase
            </RevealText>
            <h1 className="text-6xl font-semibold tracking-[-0.08em] text-white sm:text-8xl">
              VAANI
            </h1>
            <h2 className="mt-5 max-w-lg text-3xl leading-tight font-medium tracking-[-0.04em] text-[#dfff80] sm:text-4xl">
              <span className="block">Speak naturally.</span>
              <span className="block text-[#b8ff00]">
                <Typewriter
                  text={[
                    "Get polished text.",
                    "Turn speech into structure.",
                    "Write what you mean.",
                  ]}
                  speed={80}
                  deleteSpeed={40}
                  delay={1200}
                  loop
                  className="inline-block"
                />
              </span>
            </h2>
            <RevealText
              as="p"
              size="base"
              delay={0.2}
              className="mt-6 max-w-lg leading-7 font-normal text-[#a0a0a0]"
            >
              An AI-powered voice-to-text experience designed to turn natural
              speech into clean, structured, ready-to-use text.
            </RevealText>
            <div className="mt-8 flex flex-wrap gap-3">
              <ArrowFillButton
                btnText="View Product"
                href={productUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 min-w-[12rem]"
              />
              <Link
                href="#showcase"
                className="inline-flex items-center gap-2 rounded-lg border border-[#3a3a3a] px-5 py-3 text-sm font-medium text-white transition-colors hover:border-[#b8ff00]/50 hover:text-[#dfff80]"
              >
                Explore Project <Play size={15} />
              </Link>
            </div>
            <div className="mt-8 flex gap-3 font-mono text-[10px] tracking-[0.16em] text-[#707070] uppercase">
              <span>English</span>
              <span className="text-[#b8ff00]">•</span>
              <span>Hindi</span>
              <span className="text-[#b8ff00]">•</span>
              <span>Hinglish</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[28px] bg-[#b8ff00]/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-[#242424] bg-[#121212] p-2">
              <Image
                src="/vaaniHover.png"
                alt="Vaani voice-to-text product concept"
                width={1440}
                height={1080}
                priority
                className="h-auto w-full rounded-xl opacity-90"
              />
            </div>
            <p className="mt-3 text-right font-mono text-[10px] tracking-[0.16em] text-[#707070] uppercase">
              Product concept / interface direction
            </p>
          </div>
        </div>
      </section>
      <section
        id="overview"
        className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24"
      >
        <div>
          <SectionHeading
            eyebrow="01 / Project overview"
            title="Built to make voice useful."
          />
          <div className="mt-7 max-w-2xl space-y-4 text-base leading-7 text-[#a0a0a0]">
            <p>
              Vaani explores a simple product idea: speaking should be faster
              than typing, but the result should still feel professional.
            </p>
            <p>
              The experience takes natural speech, cleans up the rough edges,
              and shapes it into text that can move straight into a note,
              message, email, or work document.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-px self-start overflow-hidden rounded-xl border border-[#242424] bg-[#242424]">
          {[
            ["Product", "Vaani"],
            ["Category", "AI / Voice"],
            ["Platform", "Web application"],
            ["Languages", "EN / HI / Hinglish"],
          ].map(([label, value]) => (
            <div key={label} className="bg-[#121212] p-4 sm:p-5">
              <p className="font-mono text-[10px] tracking-[0.16em] text-[#707070] uppercase">
                {label}
              </p>
              <p className="mt-2 text-sm font-medium text-white">{value}</p>
            </div>
          ))}
        </div>
      </section>
      <section
        id="capabilities"
        className="border-y border-[#242424] bg-[#0d0d0d]"
      >
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="02 / Product capabilities"
            title="A focused layer between voice and work."
            description="The product is designed around the moments where raw transcription is not enough: language mixing, corrections, structure, and intent."
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-[#242424] bg-[#242424] sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="group bg-[#121212] p-5 transition-colors hover:bg-[#171717] sm:p-6"
              >
                <Icon
                  size={19}
                  className="text-[#b8ff00] transition-transform group-hover:scale-110"
                />
                <h3 className="mt-6 text-base font-semibold text-white">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#808080]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section
        id="showcase"
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
      >
        <SectionHeading
          eyebrow="03 / Product showcase"
          title="From voice to polished text."
          description="Watch the Vaani workflow unfold: natural speech becomes a clear, structured result through a compact product demonstration."
        />
        <div className="mt-12">
          <VoiceWorkspace />
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {[
            "Speak naturally",
            "Process the speech",
            "Clean and structure",
            "Ready to use",
          ].map((step, index) => (
            <div
              key={step}
              className="flex gap-3 border-t border-[#242424] pt-4"
            >
              <span className="font-mono text-xs text-[#b8ff00]">
                0{index + 1}
              </span>
              <span className="text-sm text-[#a0a0a0]">{step}</span>
            </div>
          ))}
        </div>
      </section>
      <section id="explore" className="border-y border-[#242424] bg-[#0d0d0d]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="04 / Explore Vaani"
            title="Explore Vaani."
            description="Take a closer look at the product and experience the Vaani interface."
          />
          <div className="mt-10">
            <LiveVaaniPreview />
          </div>
          <div className="mt-6 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <p className="text-sm text-[#707070]">
              The full Vaani experience is available on the live site.
            </p>
            <ArrowFillButton
              btnText="Open Full Experience"
              href={productUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 min-w-[13rem]"
            />
          </div>
        </div>
      </section>
      <section
        id="technology"
        className="border-y border-[#242424] bg-[#0d0d0d]"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="05 / Technology"
            title="What's behind Vaani."
            description="The showcase is built as a typed, component-driven Next.js experience with a small interaction layer and a restrained visual system."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {techStack.map((tech) => (
              <div
                key={tech.label}
                className="flex items-center justify-between rounded-lg border border-[#242424] bg-[#121212] px-4 py-4"
              >
                <div className="flex items-center gap-3">
                  <Code2 size={16} className="text-[#b8ff00]" />
                  <span className="text-sm font-medium text-white">
                    {tech.label}
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#707070]">
                  {tech.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-10 rounded-2xl border border-[#b8ff00]/25 bg-[#121212] p-6 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="mb-4 font-mono text-[11px] tracking-[0.24em] text-[#b8ff00] uppercase">
              05 / Explore the product
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              Experience Vaani.
            </h2>
            <p className="mt-4 max-w-xl text-base text-[#a0a0a0]">
              See how natural speech becomes polished text in the live product
              experience.
            </p>
          </div>
          <a
            href={productUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#b8ff00] px-5 py-3 text-sm font-semibold text-[#080808] transition-transform hover:-translate-y-0.5"
          >
            View Product <ArrowUpRight size={16} />
          </a>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="border-t border-[#242424] pt-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="text-sm font-semibold tracking-[0.18em] text-white">
                VAANI
              </p>
              <p className="mt-3 max-w-xs text-sm leading-6 text-[#707070]">
                An AI voice-to-text project by Rian Infotech.
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.18em] text-[#707070] uppercase">
                Explore
              </p>
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#a0a0a0]">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="hover:text-[#b8ff00]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="sm:text-right">
              <p className="font-mono text-[10px] tracking-[0.18em] text-[#707070] uppercase">
                Rian Infotech
              </p>
              <a
                href={productUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-sm text-[#a0a0a0] hover:text-[#b8ff00]"
              >
                Open product <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
          <div className="mt-10 flex flex-col justify-between gap-3 border-t border-[#242424] pt-5 text-xs text-[#707070] sm:flex-row">
            <span>© 2026 Rian Infotech</span>
            <span>Project showcase / Vaani</span>
          </div>
        </div>
      </section>
      +{" "}
    </main>
  )
}
