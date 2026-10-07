"use client";

import { useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { HandwritingText } from "@/components/ui/handwriting-text";
import styles from "./MastreachShowcase.module.css";
import { EditorialCTA } from "./EditorialCTA";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Bookmark,
  BookOpen,
  Check,
  ChevronDown,
  CircleUserRound,
  Clock3,
  FileText,
  Layers3,
  MessageCircle,
  MoreHorizontal,
  Search,
  Sparkles,
  Waypoints,
} from "lucide-react";

const intents = ["Agree", "Push Back", "Ask", "Story", "Add"] as const;
const mastreachUrl = "https://mastreach.com/today";
const heroPhrases = ["Watch what matters.", "Say what matters.", "Keep what matters."];
type Intent = (typeof intents)[number];

const responses: Record<Intent, string> = {
  Agree: "This resonates. The strongest teams I’ve worked with make space for clear ownership and honest conversations. That’s often where trust starts to grow.",
  "Push Back": "I wonder if clarity alone is enough here. In my experience, people also need the room and support to act on what they understand.",
  Ask: "What have you found helps a team keep that clarity when priorities shift or new people join?",
  Story: "I once worked with a team that documented every decision but still felt misaligned. One open conversation changed more than another process ever did.",
  Add: "One thing I’d add: make the next step visible. A shared understanding becomes useful when everyone knows what they can do with it.",
};

const ecosystem = [
  { title: "Watcher", copy: "Notices relevant LinkedIn activity on your device", Icon: Waypoints },
  { title: "Comment Assistant", copy: "Helps you understand a post and shape a response", Icon: MessageCircle },
  { title: "Knowledge", copy: "Keeps useful posts and ideas for later", Icon: BookOpen },
];

function Label({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={`font-mono text-[10px] uppercase tracking-[0.2em] ${light ? "text-white/55" : "text-[#111827]/55"}`}>{children}</p>;
}

function LinkedInPost({ compact = false }: { compact?: boolean }) {
  return (
    <article className={`mastreach-sticker border border-[#111827]/10 bg-white ${compact ? "p-4 sm:p-5" : "p-5 sm:p-7"}`}>
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2838D8]/10 text-sm font-semibold text-[#2838D8]">JL</div>
        <div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold text-[#111827]">Jordan Lee</p><p className="text-[11px] text-[#111827]/50">Leadership coach · 2h</p></div>
        <MoreHorizontal className="h-4 w-4 text-[#111827]/40" />
      </div>
      <p className="mt-4 text-sm leading-6 text-[#111827]/80">The best teams don’t avoid difficult conversations. They build enough trust to have them early, with curiosity instead of blame.</p>
      <div className="mt-4 flex items-center gap-4 border-t border-[#111827]/10 pt-3 text-[10px] text-[#111827]/50"><span>Post context</span><span className="ml-auto">Illustrative sample</span></div>
    </article>
  );
}

function IntentComposer({ compact = false, hidePost = false }: { compact?: boolean; hidePost?: boolean }) {
  const [intent, setIntent] = useState<Intent>("Ask");
  const [response, setResponse] = useState(responses.Ask);

  const chooseIntent = (next: Intent) => {
    setIntent(next);
    setResponse(responses[next]);
  };

  return (
    <div className="mastreach-composer overflow-hidden border border-[#111827]/10 bg-white shadow-[8px_8px_0_#E2E8F0]">
      <div className="flex items-center justify-between border-b border-[#111827]/10 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#2838D8]" /><span className="text-xs font-semibold text-[#111827]">Comment Assistant</span></div>
        <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#111827]/45">Mastreach</span>
      </div>
      <div className={`grid ${compact || hidePost ? "" : "lg:grid-cols-[0.9fr_1.1fr]"}`}>
        {!hidePost && <div className="border-b border-[#111827]/10 p-4 sm:p-6 lg:border-b-0 lg:border-r"><Label>LinkedIn post</Label><div className="mt-4"><LinkedInPost compact /></div><p className="mt-3 flex items-center gap-2 text-[10px] text-[#111827]/45"><Sparkles className="h-3 w-3 text-[#2838D8]" /> Context ready for your response</p></div>}
        <div className="p-4 sm:p-6">
          <Label>Choose your intention</Label>
          <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Choose comment intent">
            {intents.map((option) => <button key={option} type="button" aria-pressed={intent === option} onClick={() => chooseIntent(option)} className={`mastreach-intent border px-3 py-2 text-xs transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2838D8] ${intent === option ? "border-[#2838D8] bg-[#2838D8] text-white" : "border-[#111827]/15 text-[#111827]/75 hover:border-[#2838D8] hover:text-[#2838D8]"}`}>{option}</button>)}
          </div>
          <div className="mt-5"><div className="mb-2 flex items-center justify-between"><Label>Suggested response</Label><span className="font-mono text-[9px] text-[#2838D8]">{intent.toUpperCase()}</span></div><textarea aria-label="Edit suggested response" value={response} onChange={(event) => setResponse(event.target.value)} rows={compact ? 4 : 5} className="w-full resize-y border border-[#111827]/15 bg-white p-3 text-sm leading-6 text-[#111827] outline-none transition-colors focus:border-[#2838D8]" /></div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[#111827]/10 pt-4"><span className="flex items-center gap-2 text-[10px] text-[#111827]/55"><Check className="h-3.5 w-3.5 text-[#2838D8]" /> Review and edit before using</span><span className="inline-flex items-center gap-2 bg-[#111827] px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-white">Your choice to post <ArrowUpRight className="h-3.5 w-3.5" /></span></div>
        </div>
      </div>
    </div>
  );
}

function BrowserFrame({ children, label }: { children: ReactNode; label: string }) {
  return <div className="mastreach-browser overflow-hidden border border-[#111827]/15 bg-white shadow-[8px_8px_0_#E2E8F0]"><div className="flex h-11 items-center gap-3 border-b border-[#111827]/10 bg-[#111827]/[0.03] px-4"><div className="flex gap-1.5"><i className="h-2.5 w-2.5 rounded-full bg-[#7C2EDB]" /><i className="h-2.5 w-2.5 rounded-full bg-[#EEF0FF]" /><i className="h-2.5 w-2.5 rounded-full bg-[#2838D8]" /></div><div className="ml-2 min-w-0 flex-1 truncate rounded-sm bg-white px-3 py-1 font-mono text-[9px] text-[#111827]/50">{label}</div><span className="text-[#111827]/40"><MoreHorizontal className="h-4 w-4" /></span></div>{children}</div>;
}

export function MastreachShowcase() {
  const reduceMotion = useReducedMotion();

  return (
    <main id="top" className={`${styles.page} min-h-screen overflow-x-clip selection:bg-[#2838D8]/20`}>
      <header className="flex items-center justify-between border-b border-[#111827]/10 px-5 py-5 sm:px-8 lg:px-12">
        <a href="/" className="font-serif text-xl font-semibold tracking-[-0.04em] text-[#111827]">mastreach<span className="text-[#2838D8]">.</span></a>
        <div className="hidden items-center gap-8 font-mono text-[9px] uppercase tracking-[0.15em] text-[#111827]/55 sm:flex"><a href="#ecosystem" className="transition-colors hover:text-[#2838D8]">Product</a><a href="#intent" className="transition-colors hover:text-[#2838D8]">Intent</a><a href="#knowledge" className="transition-colors hover:text-[#2838D8]">Knowledge</a></div>
        <a href={mastreachUrl} target="_blank" rel="noreferrer" className="mastreach-secondary inline-flex min-h-11 items-center gap-2 px-4 py-2 text-[10px] font-semibold text-[#111827] transition-colors hover:border-[#2838D8] hover:text-[#111827]">Explore Mastreach <ArrowRight className="h-3.5 w-3.5" /></a>
      </header>

      <section className="relative isolate overflow-hidden px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24 lg:px-12 lg:pt-28">
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-28 -z-10 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(33,153,237,0.1),rgba(244,120,170,0.06)_48%,transparent_70%)]" />
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-14">
            <div>
              <Label>AI / LinkedIn / Knowledge <span className="mx-2 text-[#2838D8]">·</span> 2026</Label>
              <motion.h1 initial={reduceMotion ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} className="mastreach-hero-title mt-7 max-w-2xl font-serif text-5xl leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-[4.6rem] xl:text-[5.1rem]">
                <span className="block">Make LinkedIn</span>
                <span className="block">work for you.</span>
                <span className="mastreach-hero-phrase mt-3 block min-h-[1.55em] sm:mt-4">
                  <HandwritingText words={heroPhrases} interval={4300} fontUrl="https://raw.githubusercontent.com/google/fonts/main/ofl/caveat/Caveat%5Bwght%5D.ttf" duration={1.7} delay={0.05} strokeWidth={1.35} fill="#2438E8" height={112} className="mastreach-handwriting" />
                </span>
              </motion.h1>
              <p className="mt-7 max-w-xl text-base leading-7 text-[#111827]/65 sm:text-lg sm:leading-8">Mastreach helps you discover meaningful conversations, write thoughtful LinkedIn comments, and turn valuable ideas into a growing knowledge base.</p>
              <div className="mt-9 flex flex-wrap gap-3"><a href={mastreachUrl} target="_blank" rel="noreferrer" className="mastreach-candy inline-flex min-h-12 items-center gap-3 bg-[#2438E8] px-6 text-xs font-bold uppercase tracking-[0.1em] text-white">Explore Mastreach <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#111827]"><ArrowRight className="h-4 w-4" /></span></a><a href="#demo" className="mastreach-secondary inline-flex min-h-12 items-center gap-2 px-6 text-xs font-semibold uppercase tracking-[0.1em] text-[#111827]">See how it works <ArrowDown className="h-3.5 w-3.5" /></a></div>
              <div className="mt-12 flex max-w-lg items-center gap-3 border-t border-[#111827]/10 pt-5 font-mono text-[9px] uppercase tracking-[0.13em] text-[#111827]/45 sm:gap-5"><span>Discover</span><span className="text-[#2838D8]">→</span><span>Understand</span><span className="text-[#2838D8]">→</span><span>Engage</span><span className="text-[#7C2EDB]">→</span><span>Save</span></div>
            </div>
            <motion.div initial={reduceMotion ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }} className="mastreach-hero-product relative lg:pl-4">
              <div className="mastreach-orbit absolute -right-3 -top-5 z-10 hidden rounded-full border-2 border-[#111827] bg-[#F3F0FF] px-4 py-3 font-mono text-[9px] uppercase tracking-[0.12em] text-[#111827] shadow-[4px_4px_0_#111827] sm:block"><span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#F478AA]" />A thoughtful response starts here</div>
              <BrowserFrame label="LinkedIn · Comment Assistant"><div className="grid gap-0 bg-white md:grid-cols-[0.9fr_1.1fr]"><div className="border-b border-[#111827]/10 p-4 sm:border-b-0 sm:border-r sm:p-5"><Label>Post in view</Label><div className="mt-3"><LinkedInPost compact /></div></div><div className="p-4 sm:p-5"><IntentComposer compact hidePost /></div></div></BrowserFrame>
              <p className="mt-3 text-right font-mono text-[9px] uppercase tracking-[0.13em] text-[#111827]/40">You review. You decide.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="demo" className="scroll-mt-8 bg-[#111827] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1280px]"><div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end"><div><Label light>02 / Product demonstration</Label><h2 className="mt-5 max-w-2xl font-serif text-5xl leading-[0.98] tracking-[-0.045em] sm:text-6xl">From post to thoughtful response.</h2></div><p className="max-w-lg text-base leading-7 text-white/65">Read the context. Choose what you mean. Shape the response before it becomes yours.</p></div>
          <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-[0.72fr_1.28fr] lg:items-start"><div className="space-y-0">{["LinkedIn post", "Mastreach understands context", "Choose your intent", "Generate a response", "Review and edit", "You post it"].map((item, index) => <div key={item} className="flex items-center gap-4 border-t border-white/15 py-4"><span className="w-6 font-mono text-[9px] text-[#EEF0FF]">0{index + 1}</span><span className="text-sm text-white/80">{item}</span>{index < 5 && <ArrowDown className="ml-auto h-3.5 w-3.5 text-white/35" />}</div>)}</div><IntentComposer /></div>
          <p className="mt-6 text-right font-mono text-[9px] uppercase tracking-[0.14em] text-white/45">Mastreach suggests. You decide whether to post.</p>
        </div>
      </section>

      <section id="intent" className="scroll-mt-8 px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20"><div><Label>03 / Intent system</Label><h2 className="mt-5 font-serif text-5xl leading-[0.98] tracking-[-0.045em] sm:text-6xl">Don’t just generate a comment. Decide what you want to say.</h2><p className="mt-6 max-w-lg text-base leading-7 text-[#111827]/60">Same post. Different intention. A response that follows your lead.</p><div className="mt-8 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.14em] text-[#111827]/45"><span className="h-px w-8 bg-[#2838D8]" /> Choose an intent to explore</div></div><IntentComposer /></div>
      </section>

      <section className="bg-[#111827]/[0.035] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24"><div><Label>04 / The problem</Label><h2 className="mt-5 font-serif text-5xl leading-[0.98] tracking-[-0.045em] sm:text-6xl">LinkedIn is full of ideas worth keeping.</h2><p className="mt-6 text-lg text-[#111827]/60">But it’s easy for a good thought to disappear into the feed.</p></div><div><div className="border-y border-[#111827]/15">{["You see something valuable.", "You want to respond.", "You save it for later.", "More posts appear.", "The idea disappears."].map((line, index) => <div key={line} className="flex items-center gap-5 border-b border-[#111827]/10 py-5 last:border-b-0"><span className="font-mono text-[9px] text-[#2838D8]">0{index + 1}</span><p className="font-serif text-2xl text-[#111827]/75 sm:text-3xl">{line}</p></div>)}</div><div className="mt-8 flex items-start gap-4"><span className="mt-1 h-8 w-1 shrink-0 bg-gradient-to-b from-[#2838D8] via-[#2838D8] to-[#7C2EDB]" /><p className="max-w-xl font-serif text-3xl leading-tight tracking-tight text-[#111827] sm:text-4xl">Mastreach gives those ideas somewhere to go.</p></div></div></div>
      </section>

      <section id="knowledge" className="scroll-mt-8 px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1280px]"><div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-end"><div><Label>05 / Knowledge</Label><h2 className="mt-5 font-serif text-5xl leading-[0.98] tracking-[-0.045em] sm:text-6xl">Don’t just save content. Build your knowledge.</h2></div><p className="max-w-lg text-base leading-7 text-[#111827]/60">Keep useful posts, articles, and ideas together, ready to revisit and draw on later.</p></div>
          <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-[0.72fr_1.28fr]"><div className="border-y border-[#111827]/15 py-4">{["Discover", "Save", "Knowledge", "Revisit", "Create"].map((item, index) => <div key={item} className={`flex items-center gap-4 py-4 ${index < 4 ? "border-b border-[#111827]/10" : ""}`}><span className="w-7 font-mono text-[9px] text-[#2838D8]">0{index + 1}</span><span className={`font-serif ${item === "Knowledge" ? "text-3xl text-[#2838D8]" : "text-2xl text-[#111827]/75"}`}>{item}</span>{index < 4 && <ArrowDown className="ml-auto h-3.5 w-3.5 text-[#111827]/35" />}</div>)}</div>
            <BrowserFrame label="Mastreach · Knowledge"><div className="p-4 sm:p-6"><div className="flex flex-wrap items-center justify-between gap-4"><div><p className="font-serif text-2xl">Your knowledge</p><p className="mt-1 text-xs text-[#111827]/50">Saved ideas, ready to revisit.</p></div><div className="flex items-center gap-2 border border-[#111827]/10 px-3 py-2 text-[10px] text-[#111827]/45"><Search className="h-3.5 w-3.5" /> Search saved items</div></div><div className="mt-5 grid gap-3 sm:grid-cols-2"><article className="border border-[#111827]/10 p-4"><div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.12em] text-[#2838D8]"><Bookmark className="h-3.5 w-3.5" /> LinkedIn post</div><h3 className="mt-3 font-serif text-xl">Trust is built in the small moments.</h3><p className="mt-2 text-xs leading-5 text-[#111827]/55">A note on consistency, listening, and the everyday work of leadership.</p><p className="mt-4 flex items-center gap-2 border-t border-[#111827]/10 pt-3 text-[9px] text-[#111827]/45"><CircleUserRound className="h-3 w-3" /> Jordan Lee · Saved item</p></article><article className="border border-[#111827]/10 p-4"><div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.12em] text-[#2838D8]"><BookOpen className="h-3.5 w-3.5" /> Article</div><h3 className="mt-3 font-serif text-xl">How teams learn to disagree well</h3><p className="mt-2 text-xs leading-5 text-[#111827]/55">A useful perspective on making room for productive differences.</p><p className="mt-4 flex items-center gap-2 border-t border-[#111827]/10 pt-3 text-[9px] text-[#111827]/45"><Clock3 className="h-3 w-3" /> Saved for later</p></article></div><div className="mt-4 flex items-center gap-3 bg-[#2838D8]/[0.07] p-3 text-xs text-[#111827]/65"><Layers3 className="h-4 w-4 text-[#2838D8]" /> Personal knowledge grows from the things you choose to keep.</div></div></BrowserFrame>
          </div>
        </div>
      </section>

      <section className="bg-[#111827] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-24"><div><Label light>06 / Watcher</Label><h2 className="mt-5 font-serif text-5xl leading-[0.98] tracking-[-0.045em] sm:text-6xl">Mastreach keeps an eye on what matters.</h2><p className="mt-6 max-w-lg text-base leading-7 text-white/65">Watcher runs on your device and helps surface LinkedIn activity that may need your attention.</p><div className="mt-8 flex items-center gap-3 border-t border-white/15 pt-5 text-xs text-white/60"><span className="h-2 w-2 rounded-full bg-[#EEF0FF]" /> Activity surfaces for you to review</div></div>
          <div className="border-y border-white/20">{ecosystem.map(({ title, copy, Icon }, index) => <div key={title} className={`grid grid-cols-[2.5rem_2rem_1fr] items-center gap-4 py-6 ${index < 2 ? "border-b border-white/15" : ""}`}><span className="font-mono text-[9px] text-[#EEF0FF]">0{index + 1}</span><Icon className="h-5 w-5 text-[#7C2EDB]" /><div><h3 className="font-serif text-2xl">{title}</h3><p className="mt-1 text-xs leading-5 text-white/55">{copy}</p></div></div>)}</div>
        </div>
      </section>

      <section id="ecosystem" className="scroll-mt-8 overflow-hidden px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
        <div className="mx-auto max-w-[1280px]"><div className="max-w-3xl"><Label>07 / The Mastreach loop</Label><h2 className="mt-5 font-serif text-5xl leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl">Your LinkedIn activity becomes a knowledge loop.</h2><p className="mt-6 max-w-xl text-base leading-7 text-[#111827]/60">Every interaction can become the starting point for the next idea.</p></div>
          <div className="relative mt-16 border-y border-[#111827]/10 py-10 sm:mt-20 sm:py-14"><div aria-hidden="true" className="absolute inset-x-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-[#2838D8]/40 via-[#2838D8]/35 to-[#EEF0FF]/50 md:block" /><div className="relative grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">{["Discover", "Understand", "Engage", "Save", "Reuse", "Discover again"].map((item, index) => <div key={item} className="flex items-center gap-3 bg-white py-3 md:flex-col md:gap-5 md:text-center"><span className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#111827]/15 bg-white font-mono text-[10px] text-[#2838D8]">0{index + 1}</span><span className="font-serif text-xl sm:text-2xl">{item}</span>{index < 5 && <ArrowRight className="ml-auto h-4 w-4 text-[#111827]/35 md:hidden" />}</div>)}</div></div>
        </div>
      </section>

      <section className="bg-[#111827]/[0.035] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-20"><div><Label>08 / Human control</Label><h2 className="mt-5 font-serif text-5xl leading-[0.98] tracking-[-0.045em] sm:text-6xl">AI helps. You stay in control.</h2><p className="mt-6 max-w-lg text-base leading-7 text-[#111827]/60">Mastreach assists your thinking; it doesn’t take over your conversation. Comments are never automatically posted.</p><div className="mt-8 flex flex-wrap items-center gap-2 font-mono text-[9px] uppercase tracking-[0.12em] text-[#111827]/55">{["AI analyzes", "AI suggests", "You review", "You edit", "You decide"].map((item, index) => <span key={item} className="inline-flex items-center gap-2">{index > 0 && <ArrowRight className="h-3 w-3 text-[#2838D8]" />}{item}</span>)}</div></div><IntentComposer /></div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20"><div><Label>09 / Knowledge to content</Label><h2 className="mt-5 font-serif text-5xl leading-[0.98] tracking-[-0.045em] sm:text-6xl">What you save today can become what you create tomorrow.</h2><p className="mt-6 max-w-lg text-base leading-7 text-[#111827]/60">Saved knowledge gives future ideas a useful place to begin. Revisit what you’ve collected and use it as source material for what comes next.</p></div>
          <BrowserFrame label="Mastreach · Content workspace"><div className="p-4 sm:p-6"><div className="flex items-center justify-between border-b border-[#111827]/10 pb-4"><div><Label>From your knowledge</Label><p className="mt-2 font-serif text-xl">Ideas to explore</p></div><FileText className="h-5 w-5 text-[#2838D8]" /></div><div className="mt-5 grid gap-3 sm:grid-cols-[0.9fr_1.1fr]"><div className="border border-[#111827]/10 p-4"><p className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#2838D8]">Saved source</p><p className="mt-3 font-serif text-lg">Trust makes honest conversations possible.</p><p className="mt-2 text-xs leading-5 text-[#111827]/50">Saved post · Leadership</p></div><div className="border border-[#111827]/10 p-4"><p className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#2838D8]">A draft idea</p><div className="mt-3 space-y-2"><div className="h-2 w-full bg-[#111827]/10" /><div className="h-2 w-[88%] bg-[#111827]/10" /><div className="h-2 w-[70%] bg-[#111827]/10" /></div><p className="mt-4 flex items-center gap-2 text-[10px] text-[#111827]/50"><Sparkles className="h-3 w-3 text-[#7C2EDB]" /> Develop this idea in your own voice</p></div></div><div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[#111827]/10 pt-4"><div className="flex flex-wrap items-center gap-2 text-[9px] font-mono uppercase tracking-[0.1em] text-[#111827]/55">{["Knowledge", "Ideas", "Create", "Review", "Finalized"].map((item, index) => <span key={item} className="inline-flex items-center gap-2">{index > 0 && <ArrowRight className="h-3 w-3 text-[#2838D8]" />}{item}</span>)}</div><span className="text-[9px] text-[#111827]/40">Draft · Scheduled are optional workflow states</span></div></div></BrowserFrame>
        </div>
      </section>

      <section className="bg-[#111827] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1280px]"><div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"><div><Label light>10 / Product gallery</Label><h2 className="mt-5 font-serif text-5xl leading-[0.98] tracking-[-0.045em] sm:text-6xl">Everything you need to engage with intention.</h2></div><p className="max-w-lg text-base leading-7 text-white/60">Three connected tools. One considered way to turn discovery into useful knowledge.</p></div>
          <div className="mt-12 grid gap-4 lg:mt-16 lg:grid-cols-12"><article className="bg-white p-5 text-[#111827] sm:p-7 lg:col-span-7"><div className="flex items-start justify-between"><div><Label>Watcher</Label><h3 className="mt-2 font-serif text-3xl">Activity to notice</h3></div><Waypoints className="h-5 w-5 text-[#2838D8]" /></div><div className="mt-6 border-y border-[#111827]/10">{["A conversation on leadership trust", "A post from your saved topics", "A new perspective worth reviewing"].map((item, index) => <div key={item} className="flex items-center gap-3 border-b border-[#111827]/10 py-4 last:border-0"><span className={`h-2 w-2 rounded-full ${index === 0 ? "bg-[#2838D8]" : index === 1 ? "bg-[#2838D8]" : "bg-[#7C2EDB]"}`} /><span className="flex-1 text-sm">{item}</span><ChevronDown className="h-3.5 w-3.5 -rotate-90 text-[#111827]/40" /></div>)}</div><p className="mt-4 text-[10px] text-[#111827]/50">Example activity view · surfaced for you to review</p></article>
            <article className="bg-[#2838D8]/10 p-5 text-[#111827] sm:p-7 lg:col-span-5"><div className="flex items-start justify-between"><div><Label>Comment Assistant</Label><h3 className="mt-2 font-serif text-3xl">Thought, then response</h3></div><MessageCircle className="h-5 w-5 text-[#2838D8]" /></div><div className="mt-6 border border-[#111827]/10 bg-white p-4"><p className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#2838D8]">Intent · Ask</p><p className="mt-3 font-serif text-xl">What helps a team keep trust when priorities change?</p><div className="mt-4 flex items-center gap-2 border-t border-[#111827]/10 pt-3 text-[10px] text-[#111827]/55"><Check className="h-3.5 w-3.5 text-[#2838D8]" /> Suggested for you to review</div></div></article>
            <article className="bg-white p-5 text-[#111827] sm:p-7 lg:col-span-5"><div className="flex items-start justify-between"><div><Label>Knowledge</Label><h3 className="mt-2 font-serif text-3xl">Keep the useful parts</h3></div><BookOpen className="h-5 w-5 text-[#7C2EDB]" /></div><div className="mt-6 space-y-3">{["Leadership & trust", "Ideas for a future post", "A saved article"].map((item) => <div key={item} className="flex items-center gap-3 border-b border-[#111827]/10 pb-3 text-sm"><Bookmark className="h-3.5 w-3.5 text-[#2838D8]" />{item}</div>)}</div></article>
            <article className="bg-gradient-to-br from-[#2838D8]/10 via-[#7C2EDB]/10 to-[#EEF0FF]/15 p-5 text-[#111827] sm:p-7 lg:col-span-7"><div className="flex items-start justify-between"><div><Label>Content workflow</Label><h3 className="mt-2 font-serif text-3xl">From saved ideas to a draft</h3></div><FileText className="h-5 w-5 text-[#2838D8]" /></div><div className="mt-6 grid gap-3 sm:grid-cols-[0.8fr_1.2fr]"><div className="border border-[#111827]/10 bg-white/80 p-4"><p className="font-mono text-[9px] uppercase tracking-[0.1em] text-[#2838D8]">Source notes</p><p className="mt-3 text-xs leading-5 text-[#111827]/65">A saved post on trust, team habits, and honest conversations.</p></div><div className="border border-[#111827]/10 bg-white/80 p-4"><p className="font-mono text-[9px] uppercase tracking-[0.1em] text-[#2838D8]">Working draft</p><div className="mt-3 space-y-2"><div className="h-2 w-full bg-[#111827]/10" /><div className="h-2 w-[85%] bg-[#111827]/10" /><div className="h-2 w-[66%] bg-[#111827]/10" /></div><p className="mt-3 text-[10px] text-[#111827]/50">Review and shape before sharing.</p></div></div></article>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
        <div className="mx-auto max-w-[1280px]"><div className="max-w-4xl"><Label>11 / Product philosophy</Label><h2 className="mt-6 font-serif text-5xl leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl">Thoughtful engagement shouldn’t require more noise.</h2></div><div className="mt-14 border-y border-[#111827]/15">{[["Intent over automation", "Choose your purpose. Review the words before they leave your hands."], ["Context over generic responses", "Start with the post you’re actually reading."], ["Knowledge over endless scrolling", "Keep the ideas you want to return to."], ["Human judgment over autopilot", "Mastreach supports your voice. You decide what to say."]].map(([principle, detail], index) => <div key={principle} className={`grid gap-3 py-6 sm:grid-cols-[3rem_0.8fr_1.2fr] sm:items-baseline sm:gap-8 sm:py-8 ${index < 3 ? "border-b border-[#111827]/10" : ""}`}><span className="font-mono text-[9px] text-[#2838D8]">0{index + 1}</span><h3 className="font-serif text-2xl uppercase tracking-tight sm:text-3xl">{principle}</h3><p className="max-w-lg text-sm leading-6 text-[#111827]/55">{detail}</p></div>)}</div></div>
      </section>

      <section id="live-preview" className="scroll-mt-8 bg-[#111827]/[0.035] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div><Label>12 / Full live page preview</Label><h2 className="mt-5 max-w-3xl font-serif text-5xl leading-[0.98] tracking-[-0.045em] sm:text-6xl">See Mastreach in its own space.</h2><p className="mt-5 max-w-xl text-base leading-7 text-[#111827]/60">Explore the live Mastreach page below. Scroll inside the preview to see the full experience.</p></div>
            <a href={mastreachUrl} target="_blank" rel="noreferrer" className="mastreach-secondary inline-flex min-h-11 shrink-0 items-center gap-2 self-start px-5 text-xs font-semibold text-[#111827] sm:self-auto">Open live site <ArrowUpRight className="h-3.5 w-3.5" /></a>
          </div>
          <div className="mt-10"><BrowserFrame label="mastreach.com / today"><iframe title="Full Mastreach live page preview" src={mastreachUrl} loading="lazy" className="block h-[68vh] min-h-[560px] w-full border-0 bg-white sm:h-[78vh] sm:min-h-[680px] lg:h-[84vh] lg:min-h-[820px]" /></BrowserFrame></div>
          <p className="mt-4 text-right font-mono text-[9px] uppercase tracking-[0.13em] text-[#111827]/45">If the live site blocks embedding, use “Open live site” above.</p>
        </div>
      </section>

      <EditorialCTA
        id="mastreach-cta"
        eyebrow="13 / Begin with what you notice"
        title="Read less passively. Engage more thoughtfully."
        description="Turn the things you discover into conversations, knowledge, and ideas worth keeping."
        primaryLabel="Try Mastreach"
        primaryHref={mastreachUrl}
        secondaryLabel="Explore how it works"
        secondaryHref="#demo"
        caption="Your voice. Your intent. Your decision."
        wordmark="MASTREACH"
        primaryExternal
      />

      <footer className="flex flex-col justify-between gap-4 border-t border-[#111827]/10 px-5 py-6 text-[10px] text-[#111827]/45 sm:flex-row sm:items-center sm:px-8 lg:px-12"><a href="/" className="font-serif text-lg font-semibold text-[#111827]">mastreach<span className="text-[#2838D8]">.</span></a><p>AI / LinkedIn / Knowledge · 2026</p><a href="#top" className="inline-flex items-center gap-2 hover:text-[#2838D8]">Back to top <ArrowUpRight className="h-3.5 w-3.5" /></a></footer>
    </main>
  );
}
