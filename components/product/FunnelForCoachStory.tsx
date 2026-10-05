"use client";

import { useState, type ReactNode } from "react";
import { ArrowDown, ArrowRight, Check, Globe2, Sparkles } from "lucide-react";

const practices = [
  { name: "Leadership", audience: "For first-time managers", headline: "Become a better leader.", copy: "Build trust, guide your team, and grow into your role with practical leadership coaching." },
  { name: "Wellness", audience: "For people seeking balance", headline: "Make room to feel well.", copy: "Find a steadier rhythm with thoughtful support shaped around your wellbeing." },
  { name: "Meditation", audience: "For a more mindful life", headline: "Find a moment of calm.", copy: "Build a simple meditation practice with guidance that meets you where you are." },
  { name: "Healthcare", audience: "For healthcare professionals", headline: "Care for the person behind the role.", copy: "Get support for the demands of healthcare work and the transitions that come with it." },
  { name: "Retirement", audience: "For your next chapter", headline: "Shape what comes next.", copy: "Explore your next chapter with clarity, purpose, and a plan that feels like yours." },
  { name: "Other", audience: "For your coaching practice", headline: "Make your next move with confidence.", copy: "Build a landing page around the people you help and the change you want to support." },
];

const faqs = [
  ["What exactly is FunnelForCoach?", "FunnelForCoach uses AI to help coaches create a professional landing page for their coaching business."],
  ["Is FunnelForCoach only for coaches?", "It is designed for coaches and coaching professionals across different practice areas."],
  ["Do I need technical knowledge?", "The product is designed to help you create a landing page without starting from web development work."],
  ["What makes FunnelForCoach different from other landing-page builders?", "It focuses on the coaching business: describe your work, get a starting page, then customize and publish it."],
  ["How long does it take to create a landing page?", "The time depends on how much you want to review and customize your page. FunnelForCoach gives you a starting point from your idea."],
  ["Can I customize the generated page?", "Yes. Customizing the generated page is part of the product workflow, so you can make it your own before publishing."],
  ["Can I connect my own domain?", "Yes. The workflow includes connecting your domain before you publish."],
] as const;

const steps = ["Generate", "Customize", "Connect domain", "Publish", "Live page"];
const productHome = "https://www.funnelforcoach.com/";

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={`font-mono text-[10px] uppercase tracking-[0.2em] ${light ? "text-white/60" : "text-[#64748B]"}`}>{children}</p>;
}

function PageMock({ practice = practices[0], compact = false }: { practice?: (typeof practices)[number]; compact?: boolean }) {
  return (
    <div className={`overflow-hidden border border-[#E2E8F0] bg-white shadow-[0_24px_70px_rgba(17,24,39,0.09)] ${compact ? "" : ""}`}>
      <div className="flex items-center justify-between border-b border-[#E2E8F0] px-4 py-3 sm:px-6">
        <span className="font-serif text-sm font-semibold text-[#111827]">Your Coaching Practice</span>
        <span className="font-mono text-[9px] uppercase tracking-[0.13em] text-[#64748B]">{practice.name}</span>
      </div>
      <div className={`relative overflow-hidden bg-[#F8FAFC] px-6 text-center sm:px-10 ${compact ? "py-10 sm:py-14" : "py-14 sm:py-20"}`}>
        <div className="absolute -right-14 -top-20 h-52 w-52 rounded-full bg-[#EEF0FF]" />
        <div className="relative mx-auto max-w-lg">
          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#64748B]">{practice.audience}</p>
          <h3 className="mt-4 font-serif text-3xl leading-[1.03] tracking-[-0.04em] text-[#111827] sm:text-5xl">{practice.headline}</h3>
          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#475569]">{practice.copy}</p>
          <a href={productHome} className="mt-7 inline-flex min-h-11 items-center gap-3 bg-[#2438E8] px-5 text-[10px] font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#2838D8]">Book a discovery session <ArrowRight className="h-3.5 w-3.5" /></a>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#E2E8F0] px-4 py-3 font-mono text-[9px] uppercase tracking-[0.12em] text-[#64748B] sm:px-6">
        <span>{practice.name} coaching</span><span className="inline-flex items-center gap-1.5"><Globe2 className="h-3 w-3" /> Your domain</span>
      </div>
    </div>
  );
}

export function FunnelForCoachStory() {
  const [activePractice, setActivePractice] = useState(0);
  const practice = practices[activePractice];

  return (
    <div className="ffc-story bg-white text-[#111827]">
      <section id="ffc-experience" className="scroll-mt-8 px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:gap-20">
            <div><Eyebrow>01 / Product experience</Eyebrow><h2 className="mt-5 max-w-xl font-serif text-5xl leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl">A page that works.</h2></div>
            <p className="max-w-xl text-lg leading-8 text-[#475569]">Tell FunnelForCoach what you do. Get a professional starting point you can review, customize, and make your own.</p>
          </div>

          <div className="mt-14 grid overflow-hidden border border-[#E2E8F0] lg:mt-20 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="bg-[#F8FAFC] p-6 sm:p-9 lg:p-10">
              <Eyebrow>01 — Tell us what you do</Eyebrow>
              <p className="mt-6 font-serif text-2xl leading-snug text-[#111827]">“I help first-time managers become better leaders through a leadership coaching program.”</p>
              <div className="mt-8 flex items-center gap-3 border-t border-[#E2E8F0] pt-5 text-sm text-[#64748B]"><span className="flex h-8 w-8 items-center justify-center bg-[#EEF0FF] text-[#2838D8]"><Sparkles className="h-4 w-4" /></span> Your expertise is the starting point.</div>
              <div className="mt-8 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.13em] text-[#64748B]"><ArrowDown className="h-3.5 w-3.5" /> AI creates a first draft</div>
            </div>
            <div className="p-5 sm:p-8 lg:p-10">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-4"><div><Eyebrow>02 — AI generates your page</Eyebrow><p className="mt-2 text-sm text-[#475569]">A starting point, ready for your review.</p></div><span className="inline-flex items-center gap-2 border border-[#E2E8F0] px-3 py-2 font-mono text-[9px] uppercase tracking-[0.12em] text-[#475569]"><Check className="h-3 w-3 text-[#10B981]" /> Draft preview</span></div>
              <PageMock compact />
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#E2E8F0] pt-5"><div><Eyebrow>03 — Make it yours</Eyebrow><p className="mt-2 text-sm text-[#475569]">Review the page and shape it around your practice.</p></div><div className="flex gap-2">{["Edit", "Customize", "Preview"].map((label) => <a key={label} href={productHome} className="border border-[#E2E8F0] px-3 py-2 font-mono text-[9px] uppercase tracking-[0.1em] text-[#475569] transition-colors hover:border-[#2838D8] hover:text-[#2838D8]">{label}</a>)}</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111827] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div><Eyebrow light>02 / The problem</Eyebrow><h2 className="mt-5 font-serif text-5xl leading-[0.98] tracking-[-0.045em] sm:text-6xl">You shouldn’t have to become a web designer to grow your coaching business.</h2></div>
          <div className="grid gap-10 sm:grid-cols-2">
            <div className="border-t border-white/20 pt-5"><p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/45">The traditional route</p><div className="mt-5 space-y-3">{["Learn design", "Choose a template", "Write copy", "Build the page", "Handle responsive design", "Set up hosting", "Connect a domain", "Publish"].map((label, i) => <p key={label} className="flex items-center gap-3 text-sm text-white/60"><span className="w-4 font-mono text-[9px] text-white/30">{String(i + 1).padStart(2, "0")}</span>{label}</p>)}</div></div>
            <div className="border-t border-[#7C2EDB] pt-5"><p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#B7A4FF]">The FunnelForCoach route</p><div className="mt-5 space-y-3">{["Tell us what you do", "AI generates a starting page", "Customize", "Connect your domain", "Publish"].map((label, i) => <p key={label} className="flex items-center gap-3 text-sm text-white"><span className="w-4 font-mono text-[9px] text-[#B7A4FF]">{String(i + 1).padStart(2, "0")}</span>{label}</p>)}</div><p className="mt-8 border-l-2 border-[#7C2EDB] pl-4 text-sm leading-6 text-white/60">Start with your coaching idea. Stay in control of the result.</p></div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20"><div><Eyebrow>03 / Who it’s for</Eyebrow><h2 className="mt-5 font-serif text-5xl leading-[0.98] tracking-[-0.045em] sm:text-6xl">Different coaching practices. One simpler way to get online.</h2><p className="mt-6 text-base leading-7 text-[#475569]">Explore example coaching contexts. Each preview is illustrative.</p><div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Choose a coaching context">{practices.map((item, index) => <button key={item.name} type="button" aria-pressed={activePractice === index} onClick={() => setActivePractice(index)} className={`border px-3 py-2 font-mono text-[9px] uppercase tracking-[0.11em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2838D8] ${activePractice === index ? "border-[#2838D8] bg-[#2838D8] text-white" : "border-[#E2E8F0] text-[#475569] hover:border-[#2838D8] hover:text-[#2838D8]"}`}>{item.name}</button>)}</div></div><div aria-live="polite"><PageMock practice={practice} /></div></div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
        <div className="mx-auto max-w-7xl"><div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"><div><Eyebrow>04 / Shape what comes next</Eyebrow><h2 className="mt-5 font-serif text-5xl leading-[0.98] tracking-[-0.045em] sm:text-6xl">Shape what comes next.</h2></div><p className="max-w-xl text-lg leading-8 text-[#475569]">AI creates a thoughtful starting point. Then you review the result, customize the experience, and make the page feel like your coaching business.</p></div>
          <div className="mt-14 grid gap-8 lg:mt-20 lg:grid-cols-[1fr_auto_1fr] lg:items-center"><div><Eyebrow>AI-generated starting point</Eyebrow><div className="mt-4"><PageMock compact /></div></div><ArrowRight className="mx-auto hidden h-6 w-6 text-[#7C2EDB] lg:block" /><div><Eyebrow>Your customized page</Eyebrow><div className="mt-4 border border-[#2838D8]/25 p-2"><PageMock practice={{ ...practices[0], audience: "For thoughtful, people-first leaders", headline: "Lead with clarity and confidence.", copy: "Practical coaching for the moments that shape how you lead." }} compact /></div></div></div>
          <div className="mt-8 flex flex-wrap justify-center gap-2">{["Edit copy", "Change section", "Customize", "Preview", "Approve"].map((label) => <a key={label} href={productHome} className="border border-[#E2E8F0] px-3 py-2 font-mono text-[9px] uppercase tracking-[0.1em] text-[#475569] transition-colors hover:border-[#2838D8] hover:text-[#2838D8]">{label}</a>)}</div>
          <p className="mx-auto mt-4 max-w-xl text-center text-xs leading-5 text-[#64748B]">Illustrative controls representing the review and customization workflow.</p>
        </div>
      </section>

      <section className="bg-[#F3F0FF] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
          <div><Eyebrow>05 / Human + AI</Eyebrow><h2 className="mt-5 font-serif text-5xl leading-[0.98] tracking-[-0.045em] sm:text-6xl">Stay in control.</h2><p className="mt-6 max-w-lg text-lg leading-8 text-[#475569]">AI takes care of the complicated first draft. You bring the context, judgment, and voice that make it yours.</p></div>
          <div className="grid border-y border-[#C7D2FE] sm:grid-cols-2 sm:divide-x sm:divide-[#C7D2FE]">
            <div className="py-8 sm:pr-8"><span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#7C2EDB]">AI can help with</span><ul className="mt-5 space-y-3 font-serif text-2xl sm:text-3xl"><li>Page structure</li><li>First-draft copy</li><li>Content organization</li></ul></div>
            <div className="border-t border-[#C7D2FE] py-8 sm:border-t-0 sm:pl-8"><span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#2838D8]">You stay in charge</span><ul className="mt-5 space-y-3 font-serif text-2xl sm:text-3xl"><li>Review the result</li><li>Make it your voice</li><li>Decide when it’s ready</li></ul></div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-7xl"><div className="max-w-3xl"><Eyebrow>06 / From draft to live</Eyebrow><h2 className="mt-5 font-serif text-5xl leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl">Launch for real.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-[#475569]">Take your page beyond a preview. Connect your domain, publish it, and put your landing page to work.</p></div>
          <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-[0.7fr_1.3fr] lg:items-center"><div className="space-y-0">{steps.map((step, i) => <div key={step} className="flex items-center gap-5"><span className="flex h-9 w-9 items-center justify-center border border-[#CBD5E1] font-mono text-[9px] text-[#2838D8]">0{i + 1}</span><span className={`text-sm ${i === steps.length - 1 ? "font-semibold text-[#111827]" : "text-[#475569]"}`}>{step}</span>{i < steps.length - 1 && <span className="ml-auto hidden h-8 border-l border-[#CBD5E1] sm:block" />}</div>)}</div>
            <div className="border border-[#E2E8F0] bg-white p-4 sm:p-7"><div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E2E8F0] pb-4"><Eyebrow>Page preview</Eyebrow><span className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.12em] text-[#64748B]"><span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" /> Ready to publish</span></div><div className="py-7 text-center sm:py-10"><p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#64748B]">Leadership coaching</p><h3 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">Lead with confidence.<br />Grow with intention.</h3><p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[#475569]">A coaching page shaped around your practice, ready to connect to your domain.</p><a href={productHome} className="mt-5 inline-flex bg-[#2438E8] px-5 py-3 text-[9px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#2838D8]">Book a conversation</a></div><div className="flex items-center justify-between border-t border-[#E2E8F0] pt-4 text-xs text-[#64748B]"><span>Custom domain connection</span><Globe2 className="h-4 w-4" /></div></div>
          </div>
        </div>
      </section>

      <section className="bg-[#111827] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12 lg:py-36"><div className="mx-auto max-w-7xl"><div className="max-w-3xl"><Eyebrow light>07 / Product philosophy</Eyebrow><h2 className="mt-5 font-serif text-5xl leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl">Built around coaches, not complexity.</h2></div><div className="mt-14 grid gap-x-12 sm:grid-cols-2">{[["Simplicity", "Technology should feel easy to use."], ["Empowerment", "Coaches remain in control of the final result."], ["Human", "Focus on helping people, not technical configuration."], ["Focus", "You focus on coaching. FunnelForCoach handles the technology."]].map(([title, copy], index) => <div key={title} className={`grid grid-cols-[3rem_1fr] gap-4 border-t border-white/20 py-7 sm:py-9 ${index > 1 ? "sm:mt-2" : ""}`}><span className="font-mono text-[10px] text-[#B7A4FF]">0{index + 1}</span><div><h3 className="font-serif text-3xl sm:text-4xl">{title}</h3><p className="mt-3 text-sm leading-6 text-white/60">{copy}</p></div></div>)}</div></div></section>

      <section id="ffc-live-site" className="scroll-mt-8 bg-[#F8FAFC] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div><Eyebrow>08 / The live experience</Eyebrow><h2 className="mt-5 max-w-3xl font-serif text-5xl leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl">See FunnelForCoach in action.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-[#475569]">Explore the live website right here, or open it in a new tab.</p></div>
            <a href="https://www.funnelforcoach.com/" target="_blank" rel="noreferrer" className="inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-semibold text-[#2838D8] transition-colors hover:text-[#7C2EDB]">Open live site <ArrowRight className="h-4 w-4" /></a>
          </div>
          <div className="mt-10 overflow-hidden rounded-[1.4rem] border border-[#D9E1EB] bg-white shadow-[0_30px_90px_rgba(17,24,39,0.12)] sm:mt-14">
            <div className="flex h-14 items-center gap-4 border-b border-[#E2E8F0] bg-[#F1F5F9] px-4 sm:px-6">
              <div aria-hidden="true" className="flex gap-2"><span className="h-3 w-3 rounded-full bg-[#FF6058]" /><span className="h-3 w-3 rounded-full bg-[#FFBD2E]" /><span className="h-3 w-3 rounded-full bg-[#28C840]" /></div>
              <div className="min-w-0 flex-1 truncate font-sans text-xs text-[#64748B] sm:text-sm">https://www.funnelforcoach.com/</div>
              <a href="https://www.funnelforcoach.com/" target="_blank" rel="noreferrer" className="hidden shrink-0 items-center gap-1 text-xs font-semibold text-[#7C2EDB] sm:inline-flex">Open live ↗</a>
            </div>
            <iframe title="Live FunnelForCoach website" src="https://www.funnelforcoach.com/" loading="lazy" className="block h-[460px] w-full border-0 bg-white sm:h-[600px] lg:h-[720px]" />
          </div>
          <p className="mt-4 text-center text-xs leading-5 text-[#64748B]">The live site is displayed in an embedded preview. If it does not load here, use “Open live site.”</p>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-36"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24"><div><Eyebrow>09 / Frequently asked</Eyebrow><h2 className="mt-5 font-serif text-5xl leading-[0.98] tracking-[-0.045em] sm:text-6xl">A few useful answers.</h2><p className="mt-6 text-base leading-7 text-[#475569]">A clearer picture of how the product works.</p></div><div className="border-t border-[#CBD5E1]">{faqs.map(([question, answer]) => <details key={question} className="group border-b border-[#CBD5E1] py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-serif text-xl marker:hidden sm:text-2xl"><span>{question}</span><span aria-hidden="true" className="font-sans text-2xl font-light text-[#2838D8] transition-transform group-open:rotate-45">+</span></summary><p className="max-w-2xl pt-4 text-sm leading-6 text-[#475569]">{answer}</p></details>)}</div></div></section>

      <section id="ffc-cta" className="relative isolate scroll-mt-8 overflow-hidden bg-[#111827] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12 lg:py-40">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_18%_100%,rgba(40,56,216,0.5),transparent_48%),radial-gradient(ellipse_at_88%_0%,rgba(124,46,219,0.42),transparent_42%)]" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-8 left-1/2 -z-10 -translate-x-1/2 select-none whitespace-nowrap font-serif text-[18vw] leading-none tracking-[-0.08em] text-white/[0.035]">FUNNELFORCOACH</div>
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 border-t border-white/20 pt-8 lg:grid-cols-[1fr_0.65fr] lg:gap-20 lg:pt-12">
            <div><Eyebrow light>10 / Take the next step</Eyebrow><h2 className="mt-7 max-w-5xl font-serif text-6xl leading-[0.92] tracking-[-0.05em] sm:text-7xl lg:text-[7.5rem]">Your next client could start here.</h2><p className="mt-7 max-w-xl text-lg leading-8 text-white/70 sm:text-xl">Tell FunnelForCoach what you do. Turn your coaching idea into a page worth sharing.</p></div>
            <div className="flex flex-col justify-end gap-5 lg:pb-2">
              <a href="https://www.funnelforcoach.com/" className="group inline-flex min-h-16 items-center justify-between gap-6 bg-white px-6 text-sm font-semibold uppercase tracking-[0.1em] text-[#2838D8] transition-colors hover:bg-[#EEF0FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-8">Create your landing page <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></a>
              <a href="#ffc-live-site" className="inline-flex items-center gap-2 self-start text-sm text-white/75 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white">Explore the live website <ArrowDown className="h-4 w-4" /></a>
              <p className="pt-4 font-mono text-[9px] uppercase tracking-[0.16em] text-white/45">Your coaching business. Your voice. Your page.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
