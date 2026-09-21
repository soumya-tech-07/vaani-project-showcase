"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion"
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  ChevronDown,
  CircleUserRound,
  FolderKanban,
  Inbox,
  LayoutDashboard,
  MessageCircle,
  MoreHorizontal,
  Phone,
  Search,
  Send,
  Sparkle,
  Tags,
  UsersRound,
  Video,
} from "lucide-react"
import { Product } from "@/data/products"
import ArrowFillButton from "@/components/ui/arrow-fill-button"
import { TextEffect } from "@/components/ui/text-effect"
import { TextRotate } from "@/components/ui/text-rotate"
import { TextReveal } from "@/components/ui/text-reveal-animation"

interface ProductCrmShowcaseProps {
  product: Product
}

const conversations = [
  {
    name: "Demo contact A",
    message: "Could you share more details?",
    time: "10:24",
    status: "Unread",
    tag: "needs-review",
  },
  {
    name: "Demo contact B",
    message: "Thanks, I will take a look.",
    time: "09:42",
    status: "Recent",
    tag: "ai-qualified",
  },
  {
    name: "Demo contact C",
    message: "Can we discuss next steps?",
    time: "Yesterday",
    status: "Recent",
    tag: "warm-lead",
  },
  {
    name: "Demo contact D",
    message: "Please send the document.",
    time: "Mon",
    status: "Closed",
    tag: "document-shared",
  },
]

const contacts = [
  {
    name: "Demo contact A",
    phone: "+00 000 000 001",
    lead: "needs-review",
    activity: "Today",
    tags: ["inquiry", "new"],
  },
  {
    name: "Demo contact B",
    phone: "+00 000 000 002",
    lead: "ai-qualified",
    activity: "Today",
    tags: ["qualified"],
  },
  {
    name: "Demo contact C",
    phone: "+00 000 000 003",
    lead: "warm-lead",
    activity: "Yesterday",
    tags: ["follow-up"],
  },
]

const leadPipeline = [
  { label: "Conversation", description: "New customer conversation" },
  { label: "ai-qualifying", description: "AI-assisted qualification" },
  { label: "ai-qualified", description: "Qualified customer" },
  { label: "warm-lead", description: "Follow-up opportunity" },
  { label: "hot-lead", description: "High-priority lead" },
]

function Tag({
  children,
  tone = "green",
}: {
  children: React.ReactNode
  tone?: "green" | "amber" | "gray" | "hot"
}) {
  const tones = {
    green: "bg-[#E8F8EE] text-[#128C7E] ring-[#BCECCB]",
    amber: "bg-[#FFF6DE] text-[#9A6700] ring-[#F9DC91]",
    gray: "bg-[#F1F4F2] text-[#66736B] ring-[#E2E8E4]",
    hot: "bg-[#FDE8EA] text-[#C23B4A] ring-[#F5B7BE]",
  }
  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-semibold ring-1 ${tones[tone]}`}
    >
      {children}
    </span>
  )
}

const referenceConversations = [
  {
    initial: "R",
    name: "Rohan Mehta",
    message: "Hi, I'm interested in your property.",
    time: "10:24 AM",
    tag: "hot",
    tagTone: "hot" as const,
  },
  {
    initial: "P",
    name: "Priya Sharma",
    message: "Can you share more details?",
    time: "09:48 AM",
    tag: "qualified",
    tagTone: "green" as const,
  },
]

function ReferenceInboxWindow() {
  return (
    <div className="relative pt-10 lg:pl-6">
      <Sparkle
        className="crm-inbox-sparkle crm-inbox-sparkle-top"
        aria-hidden="true"
      />
      <Sparkle
        className="crm-inbox-sparkle crm-inbox-sparkle-mid"
        aria-hidden="true"
      />

      <div className="crm-reference-dashboard crm-float relative">
        <div className="overflow-hidden rounded-[22px] border border-[#1A2620] bg-[#0E1612] shadow-[0_32px_80px_rgba(7,94,84,0.22)]">
          <div className="flex h-10 items-center gap-2 border-b border-white/8 bg-[#121C17] px-3.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
            <span className="ml-2 h-[18px] w-40 rounded-md bg-white/8" />
          </div>

          <div className="flex min-h-[340px] sm:min-h-[392px]">
            <aside className="hidden w-[158px] shrink-0 border-r border-white/8 bg-[#0C1411] p-3 md:block">
              <div className="mb-7 flex items-center gap-2 px-1 pt-1 text-[13px] font-bold text-white">
                <span className="grid h-7 w-7 place-items-center rounded-[8px] bg-[#25D366] text-[#083A21]">
                  <MessageCircle className="h-4 w-4" />
                </span>
                WA Inbox
              </div>
              <div className="space-y-1 text-[11px] font-medium text-white/50">
                <div className="flex items-center gap-2 rounded-full bg-[#25D366] px-2.5 py-2 text-[#083A21]">
                  <Inbox className="h-3.5 w-3.5" />
                  Inbox
                  <span className="ml-auto grid h-4 min-w-4 place-items-center rounded-full bg-[#083A21] px-1 text-[9px] font-bold text-white">
                    12
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-lg px-2.5 py-2">
                  <UsersRound className="h-3.5 w-3.5" />
                  Contacts
                </div>
                <div className="flex items-center gap-2 rounded-lg px-2.5 py-2">
                  <FolderKanban className="h-3.5 w-3.5" />
                  Projects
                </div>
                <div className="flex items-center gap-2 rounded-lg px-2.5 py-2">
                  <Tags className="h-3.5 w-3.5" />
                  Tags
                </div>
              </div>
            </aside>

            <div className="w-[42%] min-w-0 shrink-0 border-r border-white/8 bg-[#111A16] text-white">
              <div className="border-b border-white/8 p-3">
                <div className="flex items-center justify-between">
                  <b className="text-[12px] tracking-tight">Inbox</b>
                  <MoreHorizontal className="h-3.5 w-3.5 text-white/35" />
                </div>
                <div className="mt-2.5 flex items-center gap-1.5 rounded-lg border border-white/8 bg-[#0C1411] px-2.5 py-1.5 text-[9px] text-white/40">
                  <Search className="h-3 w-3" />
                  Search conversations...
                </div>
                <div className="mt-2.5 flex gap-1.5">
                  <span className="rounded-full bg-[#25D366]/18 px-2 py-0.5 text-[8px] font-semibold text-[#72E89A]">
                    All 10
                  </span>
                  <span className="rounded-full bg-white/6 px-2 py-0.5 text-[8px] font-semibold text-white/55">
                    Unread 4
                  </span>
                  <span className="rounded-full bg-white/6 px-2 py-0.5 text-[8px] font-semibold text-white/55">
                    Leads 2
                  </span>
                </div>
              </div>
              {referenceConversations.map((item, index) => (
                <div
                  key={item.name}
                  className={`border-b border-white/6 px-3 py-2.5 ${index === 0 ? "bg-[#25D366]/12" : ""}`}
                >
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#25D366] text-[10px] font-bold text-[#083A21]">
                      {item.initial}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center justify-between gap-2">
                        <b className="truncate text-[10px]">{item.name}</b>
                        <span className="shrink-0 text-[8px] text-white/40">
                          {item.time}
                        </span>
                      </span>
                      <span className="mt-0.5 block truncate text-[9px] text-white/45">
                        {item.message}
                      </span>
                      <span
                        className={`mt-1.5 inline-flex rounded-full px-1.5 py-0.5 text-[8px] font-semibold ${item.tagTone === "hot" ? "bg-[#FDE8EA] text-[#C23B4A]" : "bg-[#E8F8EE] text-[#128C7E]"}`}
                      >
                        {item.tag}
                      </span>
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden min-w-0 flex-1 flex-col bg-[#0E1612] text-white sm:flex">
              <div className="flex items-center justify-between border-b border-white/8 px-3.5 py-2.5">
                <div className="flex items-center gap-2">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-[#25D366] text-[10px] font-bold text-[#083A21]">
                    R
                  </span>
                  <div>
                    <b className="block text-[11px] tracking-tight">
                      Rohan Mehta
                    </b>
                    <span className="text-[8px] text-[#25D366]">Online</span>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 text-white/45">
                  <Video className="h-3.5 w-3.5" />
                  <Phone className="h-3.5 w-3.5" />
                  <MoreHorizontal className="h-3.5 w-3.5" />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-3 bg-[#0E1612] p-3.5 text-[10px] leading-relaxed">
                <div className="max-w-[82%] rounded-2xl rounded-tl-md bg-[#24322B] px-3 py-2 text-white/85">
                  Hi, I&apos;m interested in your property. Can you share more
                  details?
                  <span className="mt-1.5 block text-right text-[8px] text-white/35">
                    10:24 AM
                  </span>
                </div>
                <div className="ml-auto max-w-[82%] rounded-2xl rounded-tr-md bg-[#25D366] px-3 py-2 text-[#083A21]">
                  Sure! Could you tell me your preferred location and budget?
                  <span className="mt-1.5 block text-right text-[8px] text-[#083A21]/55">
                    10:25 AM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function AppSidebar({ dark = false }: { dark?: boolean }) {
  return (
    <aside
      className={`hidden w-[174px] shrink-0 border-r p-3 md:block ${dark ? "border-white/10 bg-[#101714] text-white" : "border-[#DCE5E0] bg-[#F0F5F2]"}`}
    >
      <div
        className={`mb-8 flex items-center gap-2 px-2 pt-1 text-sm font-bold ${dark ? "text-white" : "text-[#102019]"}`}
      >
        <span className="grid h-7 w-7 place-items-center rounded-lg bg-[#25D366] text-[#083A21]">
          <MessageCircle className="h-4 w-4" />
        </span>
        WA Inbox
      </div>
      <div
        className={`space-y-1 text-xs font-medium ${dark ? "text-white/55" : "text-[#607068]"}`}
      >
        <div
          className={`flex items-center gap-2 rounded-lg px-2.5 py-2 ${dark ? "bg-[#25D366]/15 text-[#72E89A]" : "bg-[#DDF7E7] text-[#128C7E]"}`}
        >
          <Inbox className="h-3.5 w-3.5" />
          Inbox{" "}
          <span className="ml-auto rounded-full bg-[#25D366] px-1.5 py-0.5 text-[9px] text-[#083A21]">
            3
          </span>
        </div>
        <div className="flex items-center gap-2 rounded-lg px-2.5 py-2">
          <UsersRound className="h-3.5 w-3.5" />
          Contacts
        </div>
        <div className="flex items-center gap-2 rounded-lg px-2.5 py-2">
          <FolderKanban className="h-3.5 w-3.5" />
          Projects
        </div>
        <div className="flex items-center gap-2 rounded-lg px-2.5 py-2">
          <Tags className="h-3.5 w-3.5" />
          Tags
        </div>
      </div>
    </aside>
  )
}

function PremiumButton({
  href,
  children,
  light = false,
}: {
  href: string
  children: React.ReactNode
  light?: boolean
}) {
  return (
    <a
      href={href}
      className={`crm-pill group inline-flex items-center gap-3 rounded-full px-2 py-2 pl-5 text-sm font-bold ${light ? "bg-white text-[#075E54]" : "bg-[#25D366] text-[#075E54]"}`}
    >
      <span>{children}</span>
      <span
        className={`crm-pill-icon grid h-8 w-8 place-items-center rounded-full ${light ? "bg-[#DDF7E7]" : "bg-[#075E54] text-white"}`}
      >
        <ArrowRight className="h-4 w-4" />
      </span>
    </a>
  )
}

const crmNavItems = [
  { label: "Overview", href: "#overview" },
  { label: "Inbox", href: "#inbox" },
  { label: "Workflow", href: "#workflow" },
]

function CrmNavbar() {
  const { scrollY } = useScroll()
  const [raised, setRaised] = useState(false)
  const [hovered, setHovered] = useState<string | null>(null)
  const [active, setActive] = useState("overview")

  useMotionValueEvent(scrollY, "change", (value) => setRaised(value > 56))

  useEffect(() => {
    const setActiveSection = () => {
      const sections = crmNavItems
        .map(({ href }) => document.querySelector(href))
        .filter(Boolean) as HTMLElement[]
      const current = sections.reduce(
        (closest, section) => {
          const distance = Math.abs(section.getBoundingClientRect().top - 132)
          return distance < closest.distance
            ? { id: section.id, distance }
            : closest
        },
        { id: active, distance: Number.POSITIVE_INFINITY }
      )
      setActive(current.id)
    }
    setActiveSection()
    window.addEventListener("scroll", setActiveSection, { passive: true })
    return () => window.removeEventListener("scroll", setActiveSection)
  }, [active])

  return (
    <motion.nav
      animate={{
        y: raised ? 10 : 0,
        width: raised ? "min(54%, 1344px)" : "100%",
      }}
      transition={{ type: "spring", stiffness: 230, damping: 32 }}
      className={`crm-navbar mx-auto flex items-center justify-between px-5 py-4 sm:px-8 ${raised ? "crm-navbar-raised" : ""}`}
    >
      <Link
        href="/"
        className="inline-flex items-center gap-3 text-xs font-semibold text-[#607068] transition-colors hover:text-[#128C7E]"
      >
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#DDF7E7] text-[#075E54]">
          <MessageCircle className="h-4 w-4" />
        </span>
        <span>
          <span className="block text-sm font-bold tracking-tight text-[#102019]">
            WA Inbox
          </span>
          <span className="hidden text-[9px] tracking-[0.12em] uppercase sm:block">
            Rian Infotech
          </span>
        </span>
      </Link>
      <div
        onMouseLeave={() => setHovered(null)}
        className="relative hidden items-center gap-1 rounded-full border border-transparent bg-[#F0F5F2]/70 p-1 lg:flex"
      >
        {crmNavItems.map((item) => {
          const selected = active === item.href.slice(1)
          return (
            <a
              key={item.href}
              href={item.href}
              onMouseEnter={() => setHovered(item.href)}
              className={`relative rounded-full px-3 py-1.5 text-[11px] font-semibold transition-colors ${selected ? "text-[#075E54]" : "text-[#607068] hover:text-[#102019]"}`}
            >
              {(hovered === item.href || (hovered === null && selected)) && (
                <motion.span
                  layoutId="crm-nav-highlight"
                  className="absolute inset-0 rounded-full bg-white shadow-[0_2px_8px_rgba(7,94,84,0.09)]"
                  transition={{ type: "spring", stiffness: 360, damping: 28 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </a>
          )
        })}
      </div>
      <a
        href="#inbox"
        className="inline-flex items-center gap-1.5 rounded-full bg-[#102019] px-4 py-2 text-xs font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-[#075E54]"
      >
        Explore product <ArrowRight className="h-3.5 w-3.5" />
      </a>
    </motion.nav>
  )
}

export function ProductCrmShowcase({ product }: ProductCrmShowcaseProps) {
  const [selectedConversation, setSelectedConversation] = useState(0)
  const [selectedContact, setSelectedContact] = useState(0)
  const shouldReduceMotion = useReducedMotion()
  const active = conversations[selectedConversation]
  const contact = contacts[selectedContact]

  return (
    <main className="crm-page min-h-screen overflow-x-hidden bg-[#F5F8F6] text-[#102019] selection:bg-[#25D366]/35">
      <CrmNavbar />

      <section className="crm-reference-hero relative px-5 pt-16 pb-10 sm:px-8 lg:pt-20 lg:pb-12">
        <div
          className="crm-reference-glow crm-reference-glow-left"
          aria-hidden="true"
        />
        <div
          className="crm-reference-glow crm-reference-glow-right"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-[1340px]">
          <div className="grid items-center gap-9 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12">
            <div className="crm-reveal max-w-[430px]">
              <p className="mb-5 inline-flex rounded-full bg-[#DDF7E7] px-3 py-1.5 text-[9px] font-bold tracking-[0.15em] text-[#128C7E] uppercase">
                WhatsApp CRM / Customer Communication
              </p>
              <h1 className="text-[3.65rem] leading-[0.88] font-bold tracking-[-0.075em] text-[#102019] sm:text-[4.5rem] lg:text-[4.8rem]">
                <TextEffect
                  as="span"
                  per="word"
                  preset="blur"
                  delay={0.05}
                  className="block"
                >
                  WhatsApp
                </TextEffect>
                <span className="block">
                  <TextEffect as="span" per="word" preset="blur" delay={0.18}>
                    Business
                  </TextEffect>{" "}
                  <span className="text-[#128C7E]">Inbox</span>
                </span>
              </h1>
              <div className="mt-6 text-lg leading-[1.1] font-bold tracking-[-0.035em] text-[#102019]">
                <TextEffect
                  as="span"
                  per="word"
                  preset="slide"
                  delay={0.35}
                  className="block"
                >
                  Turn conversations into
                </TextEffect>
                <TextRotate
                  texts={[
                    "actionable lead follow-up.",
                    "organized customer workflows.",
                    "visible customer context.",
                  ]}
                  rotationInterval={2800}
                  splitBy="words"
                  staggerDuration={0.025}
                  mainClassName="mt-1 block text-[#128C7E]"
                  elementLevelClassName="will-change-transform"
                />
              </div>
              <TextEffect
                as="p"
                per="word"
                preset="fade"
                delay={0.55}
                className="mt-4 max-w-[380px] text-xs leading-relaxed text-[#607068]"
              >
                A centralized workspace for managing conversations, contacts,
                lead qualification, and customer activity - all in one place.
              </TextEffect>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <ArrowFillButton
                  href="#inbox"
                  btnText="Explore product"
                  bgColor="#075E54"
                  textColor="#FFFFFF"
                  fillBgColor="#25D366"
                  fillTextColor="#075E54"
                  hoverFillBgColor="#DDF7E7"
                  hoverFillTextColor="#075E54"
                  className="min-w-[9.5rem] shadow-[0_10px_22px_rgba(37,211,102,0.18)]"
                />
                <a
                  href={product.liveUrl}
                  className="inline-flex items-center gap-2 rounded-full border border-[#DCE5E0] bg-white px-4 py-2.5 text-xs font-semibold text-[#102019] transition-colors hover:bg-[#EFFAF3]"
                >
                  Watch demo <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
              <div className="mt-8 grid max-w-[390px] grid-cols-3 gap-3 border-t border-[#DCE5E0] pt-5">
                <div>
                  <b className="block text-xl tracking-[-0.06em] text-[#128C7E]">
                    2.5×
                  </b>
                  <span className="text-[9px] text-[#607068]">
                    Faster follow-ups
                  </span>
                </div>
                <div>
                  <b className="block text-xl tracking-[-0.06em] text-[#128C7E]">
                    80%
                  </b>
                  <span className="text-[9px] text-[#607068]">
                    Better organization
                  </span>
                </div>
                <div>
                  <b className="block text-xl tracking-[-0.06em] text-[#128C7E]">
                    100%
                  </b>
                  <span className="text-[9px] text-[#607068]">
                    Your data, your control
                  </span>
                </div>
              </div>
            </div>
            <ReferenceInboxWindow />
          </div>
          <div className="crm-reference-footer mt-7 flex items-end justify-end gap-6">
            <div className="hidden items-center gap-3 rounded-full border border-[#DCE5E0] bg-white px-4 py-2 text-[9px] text-[#607068] shadow-sm sm:flex">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-[#DDF7E7] text-[#128C7E]">
                <MessageCircle className="h-4 w-4" />
              </span>
              <b className="text-[#102019]">
                Real conversations. Real opportunities.
              </b>
              <span>Manage leads, track progress, grow your business.</span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="overview"
        className="border-y border-[#DCE5E0] bg-white px-5 py-16 sm:px-8"
      >
        <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-[11px] font-bold tracking-[0.16em] text-[#128C7E] uppercase">
              Product overview
            </p>
            <TextReveal
              as="h2"
              word="Built for conversations that matter."
              className="mt-3 text-4xl leading-none font-bold tracking-[-0.055em]"
              showReplay={false}
            />
          </div>
          <div className="text-sm leading-relaxed text-[#66736B]">
            Businesses can have conversations scattered across WhatsApp while
            contact details and lead status become difficult to manage. This
            workspace centralizes conversations, searchable contacts, lead
            classification, customer activity, and organized follow-up.
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-[1180px] grid-cols-2 gap-px overflow-hidden rounded-xl border border-[#DCE5E0] bg-[#DCE5E0] md:grid-cols-4">
          {[
            ["Product", "WhatsApp Business Inbox"],
            ["Category", "CRM / Communication"],
            ["Focus", "Customer Conversations"],
            ["Workflow", "Lead Management"],
          ].map(([label, value]) => (
            <div key={label} className="bg-white p-5">
              <p className="text-[10px] font-bold tracking-[0.12em] text-[#89958F] uppercase">
                {label}
              </p>
              <p className="mt-2 text-sm leading-snug font-semibold">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="inbox" className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-10 max-w-2xl">
            <p className="text-[11px] font-bold tracking-[0.16em] text-[#128C7E] uppercase">
              Inbox experience
            </p>
            <TextReveal
              as="h2"
              word="Every conversation in one place."
              className="mt-3 text-4xl font-bold tracking-[-0.055em] sm:text-5xl"
              showReplay={false}
            />
            <p className="mt-4 text-sm leading-relaxed text-[#66736B]">
              Move from conversation to customer context without leaving the
              workspace.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[#D8E4DC] bg-white shadow-sm">
            <div className="flex min-h-[530px]">
              <AppSidebar />
              <div className="w-full border-r border-[#E2E8E4] md:w-[34%]">
                <div className="border-b border-[#E2E8E4] p-4">
                  <div className="flex items-center justify-between">
                    <b className="text-sm">Inbox</b>
                    <span className="text-[10px] text-[#66736B]">
                      All conversations
                    </span>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <Tag>Unread</Tag>
                    <Tag tone="gray">Recent</Tag>
                    <Tag tone="gray">Closed</Tag>
                  </div>
                </div>
                {conversations.map((item, index) => (
                  <button
                    key={item.name}
                    onClick={() => setSelectedConversation(index)}
                    className={`block w-full border-b border-[#EAF0EC] px-4 py-4 text-left transition-colors hover:bg-[#F7F9F8] ${selectedConversation === index ? "bg-[#E8F8EE]" : ""}`}
                  >
                    <div className="flex justify-between gap-3">
                      <b className="text-xs">{item.name}</b>
                      <span className="text-[10px] text-[#66736B]">
                        {item.time}
                      </span>
                    </div>
                    <p className="mt-1 truncate text-[11px] text-[#66736B]">
                      {item.message}
                    </p>
                  </button>
                ))}
              </div>
              <div className="hidden min-w-0 flex-1 flex-col md:flex">
                <div className="flex items-center justify-between border-b border-[#E2E8E4] p-4">
                  <div>
                    <b className="text-sm">{active.name}</b>
                    <p className="mt-0.5 text-[10px] text-[#66736B]">
                      Demo customer · Conversation open
                    </p>
                  </div>
                  <Tag tone="amber">{active.tag}</Tag>
                </div>
                <div className="flex-1 space-y-4 bg-[#F7F9F8] p-5 text-xs">
                  <p className="max-w-[310px] rounded-xl rounded-tl-sm bg-white p-3 shadow-sm">
                    Hello, I&apos;m interested in learning more.
                  </p>
                  <p className="ml-auto max-w-[310px] rounded-xl rounded-tr-sm bg-[#DCF8E6] p-3">
                    Happy to help. What would you like to know?
                  </p>
                  <p className="max-w-[310px] rounded-xl rounded-tl-sm bg-white p-3 shadow-sm">
                    Please share the relevant details.
                  </p>
                </div>
                <div className="border-t border-[#E2E8E4] p-4">
                  <div className="flex items-center rounded-lg border border-[#E2E8E4] px-3 py-2.5 text-xs text-[#66736B]">
                    Type a message{" "}
                    <Send className="ml-auto h-4 w-4 text-[#128C7E]" />
                  </div>
                </div>
              </div>
              <aside className="hidden w-[220px] border-l border-[#E2E8E4] p-4 xl:block">
                <p className="text-[10px] font-bold tracking-[0.12em] text-[#66736B] uppercase">
                  Customer context
                </p>
                <div className="mt-4 grid h-10 w-10 place-items-center rounded-full bg-[#E8F8EE] text-[#128C7E]">
                  <CircleUserRound className="h-5 w-5" />
                </div>
                <b className="mt-3 block text-sm">{active.name}</b>
                <p className="mt-1 text-[11px] text-[#66736B]">
                  Demo customer record
                </p>
                <div className="mt-6">
                  <p className="text-[10px] font-bold text-[#66736B] uppercase">
                    Status
                  </p>
                  <div className="mt-2">
                    <Tag tone="amber">{active.tag}</Tag>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="lead-management relative overflow-hidden bg-[#EFFAF3] px-5 py-20 sm:px-8 lg:py-28">
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#25D366]/10 blur-3xl" />
        <div className="relative mx-auto max-w-[1180px]">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <div className="flex items-center gap-3">
                <p className="text-[11px] font-bold tracking-[0.16em] text-[#128C7E] uppercase">
                  Lead management
                </p>
                <span className="h-px w-8 bg-[#25D366]" />
                <p className="text-[10px] font-bold tracking-[0.12em] text-[#607068] uppercase">
                  Lead pipeline · 5 stages
                </p>
              </div>
              <TextReveal
                as="h2"
                word="Turn conversations into actionable leads."
                className="mt-4 max-w-xl text-4xl leading-[0.95] font-bold tracking-[-0.055em] text-[#102019] sm:text-5xl"
                showReplay={false}
              />
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-[#4F6259]">
              Use the project&apos;s existing lead labels to make conversation
              state visible for follow-up.
            </p>
          </div>
          <div className="lead-pipeline relative mt-14 grid gap-4 md:grid-cols-5 md:gap-3">
            <div className="lead-pipeline-line" aria-hidden="true" />
            {leadPipeline.map((stage, index) => (
              <motion.div
                key={stage.label}
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0, y: 22, scale: 0.985 }
                }
                whileInView={
                  shouldReduceMotion
                    ? undefined
                    : { opacity: 1, y: 0, scale: 1 }
                }
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.42,
                  delay: shouldReduceMotion ? 0 : index * 0.075,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`lead-pipeline-card lead-stage-${index + 1} relative z-10 min-h-[208px] border p-6`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] font-semibold tracking-[0.12em]">
                    0{index + 1}
                  </span>
                  <span className="lead-status-dot h-2.5 w-2.5 rounded-full" />
                </div>
                <div className="mt-12">
                  <TextReveal
                    as="h3"
                    word={stage.label}
                    className="text-[15px] font-bold tracking-[-0.02em]"
                    showReplay={false}
                  />
                  <p className="mt-2 text-xs leading-relaxed opacity-70">
                    {stage.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="mt-7 text-xs text-[#607068]">
            Lead labels shown from the existing project UI. The page describes a
            supported workflow and does not imply fully autonomous automation.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-[11px] font-bold tracking-[0.16em] text-[#128C7E] uppercase">
              Contact management
            </p>
            <TextReveal
              as="h2"
              word="Keep customer context organized."
              className="mt-3 text-4xl leading-none font-bold tracking-[-0.055em]"
              showReplay={false}
            />
            <p className="mt-5 text-sm leading-relaxed text-[#66736B]">
              Contact records keep phone, lead status, last activity, and tags
              in view next to customer conversations.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[#D8E4DC] bg-white shadow-sm">
            <div className="grid md:grid-cols-[1fr_1.1fr]">
              <div className="border-b border-[#E2E8E4] md:border-r md:border-b-0">
                <div className="flex items-center justify-between border-b border-[#E2E8E4] p-4">
                  <b className="text-sm">Contacts</b>
                  <Search className="h-4 w-4 text-[#66736B]" />
                </div>
                {contacts.map((item, index) => (
                  <button
                    key={item.name}
                    onClick={() => setSelectedContact(index)}
                    className={`flex w-full items-center justify-between gap-2 border-b border-[#EAF0EC] p-4 text-left transition-colors hover:bg-[#F7F9F8] ${selectedContact === index ? "bg-[#E8F8EE]" : ""}`}
                  >
                    <div>
                      <b className="block text-xs">{item.name}</b>
                      <span className="text-[10px] text-[#66736B]">
                        {item.phone}
                      </span>
                    </div>
                    <Tag tone={index === 0 ? "amber" : "green"}>
                      {item.lead}
                    </Tag>
                  </button>
                ))}
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-[#E8F8EE] text-[#128C7E]">
                    <CircleUserRound className="h-5 w-5" />
                  </span>
                  <div>
                    <TextReveal
                      as="h3"
                      word={contact.name}
                      className="font-bold"
                      showReplay={false}
                    />
                    <p className="text-xs text-[#66736B]">{contact.phone}</p>
                  </div>
                </div>
                <dl className="mt-7 space-y-5 text-xs">
                  <div>
                    <dt className="font-bold tracking-[0.1em] text-[#66736B] uppercase">
                      Lead status
                    </dt>
                    <dd className="mt-2">
                      <Tag tone={selectedContact === 0 ? "amber" : "green"}>
                        {contact.lead}
                      </Tag>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-bold tracking-[0.1em] text-[#66736B] uppercase">
                      Last activity
                    </dt>
                    <dd className="mt-1 font-semibold">{contact.activity}</dd>
                  </div>
                  <div>
                    <dt className="font-bold tracking-[0.1em] text-[#66736B] uppercase">
                      Tags
                    </dt>
                    <dd className="mt-2 flex flex-wrap gap-1.5">
                      {contact.tags.map((item) => (
                        <Tag key={item} tone="gray">
                          {item}
                        </Tag>
                      ))}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="workflow"
        className="border-y border-[#E2E8E4] bg-white px-5 py-20 sm:px-8"
      >
        <div className="mx-auto max-w-[1180px]">
          <p className="text-[11px] font-bold tracking-[0.16em] text-[#128C7E] uppercase">
            AI qualification / workflow
          </p>
          <TextReveal
            as="h2"
            word="From conversation to qualification."
            className="mt-3 text-4xl font-bold tracking-[-0.055em]"
            showReplay={false}
          />
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {[
              [MessageCircle, "Customer conversation"],
              [Bot, "AI processing / qualification"],
              [Tags, "Lead classification"],
              [UsersRound, "Sales follow-up"],
            ].map(([Icon, label], index) => {
              const StepIcon = Icon as typeof MessageCircle
              return (
                <div
                  key={label as string}
                  className="rounded-xl border border-[#E2E8E4] p-5"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-[#E8F8EE] text-[#128C7E]">
                    <StepIcon className="h-5 w-5" />
                  </span>
                  <p className="mt-9 text-sm font-bold">0{index + 1}</p>
                  <TextReveal
                    as="h3"
                    word={label as string}
                    className="mt-2 text-sm font-semibold"
                    showReplay={false}
                  />
                </div>
              )
            })}
          </div>
          <p className="mt-6 max-w-2xl text-xs leading-relaxed text-[#66736B]">
            The workspace presents AI qualification as part of the lead
            workflow; specific processing behavior depends on the product&apos;s
            implementation.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1180px]">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-[11px] font-bold tracking-[0.16em] text-[#128C7E] uppercase">
                Product screens
              </p>
              <TextReveal
                as="h2"
                word="The workspace, at a glance."
                className="mt-3 text-4xl font-bold tracking-[-0.055em]"
                showReplay={false}
              />
            </div>
            <p className="max-w-sm text-sm text-[#66736B]">
              A gallery of the UI areas represented in this implementation.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              ["01", "Inbox", "Shared conversations and visible lead state."],
              ["02", "Conversation", "Messages alongside customer context."],
              ["03", "Contacts", "Customer details, activity, and tags."],
              ["04", "Lead workflow", "Qualification states for follow-up."],
            ].map(([number, title, description], index) => (
              <div
                key={title}
                className={`min-h-56 rounded-2xl border border-[#E2E8E4] p-6 ${index === 0 ? "bg-[#17211B] text-white" : "bg-white"}`}
              >
                <p
                  className={`font-mono text-xs ${index === 0 ? "text-[#72E89A]" : "text-[#128C7E]"}`}
                >
                  {number}
                </p>
                <div className="mt-12 flex items-end justify-between">
                  <div>
                    <TextReveal
                      as="h3"
                      word={title}
                      className="text-xl font-bold tracking-tight"
                      showReplay={false}
                    />
                    <p
                      className={`mt-2 max-w-xs text-sm ${index === 0 ? "text-white/60" : "text-[#66736B]"}`}
                    >
                      {description}
                    </p>
                  </div>
                  <LayoutDashboard
                    className={`h-8 w-8 ${index === 0 ? "text-[#25D366]" : "text-[#128C7E]"}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="workspace-editorial relative overflow-hidden px-5 py-24 sm:px-8 lg:py-32">
        <div
          className="workspace-atmosphere workspace-atmosphere-one"
          aria-hidden="true"
        />
        <div
          className="workspace-atmosphere workspace-atmosphere-two"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-[1180px]">
          <div className="workspace-heading grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-[11px] font-bold tracking-[0.18em] text-[#128C7E] uppercase">
                Product overview
              </p>
              <TextReveal
                as="h2"
                word="The workspace, at a glance."
                className="mt-4 max-w-[620px] text-5xl leading-[0.94] font-bold tracking-[-0.065em] text-[#102019] sm:text-6xl"
                showReplay={false}
              />
              <p className="mt-6 max-w-[470px] text-base leading-relaxed text-[#607068]">
                Everything you need to manage conversations, contacts and leads
                - in one place.
              </p>
            </div>
            <div className="relative max-w-sm lg:justify-self-end">
              <p className="text-sm leading-relaxed text-[#607068]">
                A quick view of the main features in this project. Explore each
                area to see how conversations turn into actionable
                opportunities.
              </p>
              <a
                href="#inbox"
                className="workspace-cta mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#075E54]"
              >
                Explore the Workspace <ArrowRight className="h-4 w-4" />
              </a>
              <div
                className="workspace-annotation mt-9 ml-auto w-fit"
                aria-label="Manage, Convert, Grow"
              >
                <div className="workspace-script">
                  Manage
                  <br />
                  Convert
                  <br />
                  Grow
                </div>
                <svg
                  className="workspace-annotation-arrow"
                  viewBox="0 0 100 70"
                  aria-hidden="true"
                >
                  <path d="M5 8 C54 4, 78 17, 58 44 C50 55, 42 59, 34 61 M34 61 L43 58 M34 61 L37 51" />
                </svg>
              </div>
            </div>
          </div>

          <div className="workspace-inbox-panel mt-14 grid gap-10 rounded-[28px] p-6 sm:p-8 lg:grid-cols-[0.7fr_1.3fr] lg:p-10">
            <div className="flex flex-col justify-between">
              <div>
                <p className="font-mono text-xs font-semibold tracking-[0.16em] text-[#72E89A]">
                  01
                </p>
                <TextReveal
                  as="h3"
                  word="Inbox"
                  className="mt-5 text-3xl font-bold tracking-[-0.045em] text-white"
                  showReplay={false}
                />
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">
                  Shared conversations and visible lead state.
                </p>
              </div>
              <div className="mt-12 space-y-5 text-xs text-white/70">
                {[
                  [MessageCircle, "All conversations", "In one place"],
                  [Tags, "With lead tags", "Stay organized"],
                  [Check, "Real-time updates", "Never miss a lead"],
                ].map(([Icon, title, detail]) => {
                  const FeatureIcon = Icon as typeof MessageCircle
                  return (
                    <div
                      key={title as string}
                      className="flex items-center gap-3"
                    >
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#25D366]/15 text-[#72E89A]">
                        <FeatureIcon className="h-4 w-4" />
                      </span>
                      <span>
                        <b className="block text-white">{title as string}</b>
                        <span>{detail as string}</span>
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="workspace-product-preview overflow-hidden rounded-2xl border border-white/10 bg-[#111C17] shadow-2xl">
              <div className="flex items-center gap-2 border-b border-white/10 bg-[#16251D] px-4 py-3">
                <span className="h-2 w-2 rounded-full bg-[#25D366]" />
                <b className="text-[10px] text-white/80">WA Inbox</b>
                <div className="ml-auto flex items-center gap-2 rounded-md bg-white/5 px-3 py-1.5 text-[9px] text-white/40">
                  <Search className="h-3 w-3" /> Search conversations
                </div>
              </div>
              <div className="grid min-h-[330px] md:grid-cols-[0.82fr_1.18fr]">
                <div className="border-b border-white/10 md:border-r md:border-b-0">
                  <div className="border-b border-white/10 px-4 py-3 text-[10px] font-bold text-white">
                    Inbox{" "}
                    <span className="ml-1 font-normal text-white/35">
                      3 unread
                    </span>
                  </div>
                  {conversations.slice(0, 3).map((item, index) => (
                    <button
                      key={item.name}
                      onClick={() => setSelectedConversation(index)}
                      className={`flex w-full items-start gap-2 border-b border-white/8 px-4 py-3 text-left transition-colors hover:bg-white/5 ${selectedConversation === index ? "bg-[#25D366]/10" : ""}`}
                    >
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#DDF7E7] text-[9px] font-bold text-[#075E54]">
                        {item.name.slice(-1)}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex items-center justify-between gap-2">
                          <b className="truncate text-[10px] text-white">
                            {item.name}
                          </b>
                          <span className="text-[8px] text-white/35">
                            {item.time}
                          </span>
                        </span>
                        <span className="mt-1 block truncate text-[9px] text-white/45">
                          {item.message}
                        </span>
                        <Tag tone={index === 0 ? "amber" : "green"}>
                          {item.tag}
                        </Tag>
                      </span>
                    </button>
                  ))}
                </div>
                <div className="hidden min-w-0 flex-col md:flex">
                  <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="grid h-7 w-7 place-items-center rounded-full bg-[#25D366]/15 text-[#72E89A]">
                        <CircleUserRound className="h-4 w-4" />
                      </span>
                      <span>
                        <b className="block text-[10px] text-white">
                          {active.name}
                        </b>
                        <span className="text-[8px] text-white/40">
                          Customer conversation
                        </span>
                      </span>
                    </div>
                    <Tag tone="amber">{active.tag}</Tag>
                  </div>
                  <div className="flex-1 space-y-3 p-4 text-[10px]">
                    <p className="max-w-[75%] rounded-xl rounded-tl-sm bg-[#24352B] p-2.5 text-white/80">
                      Hello, I&apos;d like to know more about your service.
                    </p>
                    <p className="ml-auto max-w-[75%] rounded-xl rounded-tr-sm bg-[#25D366] p-2.5 text-[#075E54]">
                      Thanks for reaching out. What would you like to explore?
                    </p>
                    <p className="max-w-[75%] rounded-xl rounded-tl-sm bg-[#24352B] p-2.5 text-white/80">
                      {active.message}
                    </p>
                  </div>
                  <div className="m-3 flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-[9px] text-white/35">
                    Write a reply{" "}
                    <span className="ml-auto flex items-center gap-2 text-[#72E89A]">
                      <span>Attach</span>
                      <Send className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <div className="workspace-light-card rounded-[22px] border border-[#DCE5E0] bg-white p-6 sm:p-8">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-mono text-xs font-semibold text-[#128C7E]">
                    02
                  </p>
                  <TextReveal
                    as="h3"
                    word="Conversation"
                    className="mt-4 text-2xl font-bold tracking-[-0.04em]"
                    showReplay={false}
                  />
                  <p className="mt-2 text-sm text-[#607068]">
                    Messages alongside customer context.
                  </p>
                </div>
                <MessageCircle className="h-6 w-6 text-[#128C7E]" />
              </div>
              <div className="mt-7 space-y-2 rounded-xl bg-[#F5F8F6] p-4 text-[10px]">
                <p className="w-fit rounded-lg bg-white px-3 py-2 text-[#607068] shadow-sm">
                  Could you share more details?
                </p>
                <p className="ml-auto w-fit rounded-lg bg-[#DDF7E7] px-3 py-2 text-[#075E54]">
                  Absolutely - here&apos;s what happens next.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="workspace-pill">Message history</span>
                <span className="workspace-pill">Customer context</span>
                <span className="workspace-pill">Quick actions</span>
              </div>
            </div>
            <div className="workspace-light-card rounded-[22px] border border-[#DCE5E0] bg-white p-6 sm:p-8">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-mono text-xs font-semibold text-[#128C7E]">
                    03
                  </p>
                  <TextReveal
                    as="h3"
                    word="Contacts"
                    className="mt-4 text-2xl font-bold tracking-[-0.04em]"
                    showReplay={false}
                  />
                  <p className="mt-2 text-sm text-[#607068]">
                    Customer details, activity, and tags.
                  </p>
                </div>
                <UsersRound className="h-6 w-6 text-[#128C7E]" />
              </div>
              <div className="mt-7 flex items-center gap-3 rounded-xl bg-[#F5F8F6] p-4">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#DDF7E7] text-[#128C7E]">
                  <CircleUserRound className="h-5 w-5" />
                </span>
                <span>
                  <b className="block text-xs text-[#102019]">{contact.name}</b>
                  <span className="text-[10px] text-[#607068]">
                    {contact.phone}
                  </span>
                </span>
                <Tag tone="amber">{contact.lead}</Tag>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="workspace-pill">Complete profiles</span>
                <span className="workspace-pill">Activity tracking</span>
                <span className="workspace-pill">Lead tags</span>
              </div>
            </div>
          </div>

          <div className="workspace-workflow-card mt-5 rounded-[22px] border border-[#DCE5E0] bg-[#F9FCFA] p-6 sm:p-8">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="font-mono text-xs font-semibold text-[#128C7E]">
                  04
                </p>
                <TextReveal
                  as="h3"
                  word="Lead workflow"
                  className="mt-4 text-2xl font-bold tracking-[-0.04em] text-[#102019]"
                  showReplay={false}
                />
                <p className="mt-2 text-sm text-[#607068]">
                  Qualification states for follow-up.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#89958F]">
                From conversation to growth
              </span>
            </div>
            <div className="workspace-stages mt-8">
              {leadPipeline.map((stage, index) => (
                <div key={stage.label} className="workspace-stage-wrap">
                  <div
                    className={`workspace-stage workspace-stage-${index + 1}`}
                  >
                    <span className="font-mono text-[10px] font-bold">
                      0{index + 1}
                    </span>
                    <b className="mt-3 block text-xs">{stage.label}</b>
                  </div>
                  {index < leadPipeline.length - 1 && (
                    <ArrowRight className="workspace-stage-arrow hidden h-4 w-4 md:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 flex items-center gap-4 text-center text-[10px] font-bold tracking-[0.16em] text-[#89958F] uppercase">
            <span className="h-px flex-1 bg-[#DCE5E0]" />
            From conversations to growth
            <span className="h-px flex-1 bg-[#DCE5E0]" />
          </div>
        </div>
      </section>

      <section className="border-t border-[#E2E8E4] bg-white px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-[900px] text-center">
          <p className="text-[11px] font-bold tracking-[0.16em] text-[#128C7E] uppercase">
            Technology
          </p>
          <TextReveal
            as="h2"
            word="Built for the web."
            className="mt-3 text-3xl font-bold tracking-[-0.05em]"
            showReplay={false}
          />
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {product.technology.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[#E2E8E4] bg-[#F7F9F8] px-4 py-2 text-xs font-semibold text-[#17211B]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-[1180px] rounded-3xl bg-[#128C7E] px-7 py-14 text-center text-white sm:px-12">
          <p className="text-[11px] font-bold tracking-[0.16em] text-[#B9F6CC] uppercase">
            WhatsApp Business Inbox
          </p>
          <TextReveal
            as="h2"
            word="Explore the workspace."
            className="mt-4 text-4xl font-bold tracking-[-0.06em] sm:text-5xl"
            showReplay={false}
          />
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/75">
            See how conversations, contacts and lead workflows come together in
            one place.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#inbox"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#128C7E]"
            >
              View workspace <ArrowUpRight className="h-4 w-4" />
            </a>
            <Link
              href="/"
              className="rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold transition-colors hover:bg-white/10"
            >
              Back to Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
