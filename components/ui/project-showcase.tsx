"use client"

import { ArrowRight, ArrowUpRight, Check } from "lucide-react"
import { products } from "@/data/products"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { DiaTextReveal } from "@/components/ui/dia-text-reveal"

const hrefFor = (slug: string) => (slug === "vaani" ? "/vaani" : slug === "lumina" ? "/products/mastreach" : `/products/${slug}`)

export function ProjectShowcase() {
  const liveCount = products.filter((product) => product.status === "live").length
  const indexProducts = products.slice(0, 10)

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F8FAFC] text-[#111827]">
      <main>
        <section id="home" className="relative overflow-hidden border-b border-[#E2E8F0] bg-[#F8FAFC] pb-16 pt-16 sm:pt-20">
          <div className="pointer-events-none absolute left-1/3 top-12 h-96 w-96 rounded-full bg-[#2838D8]/[0.08] blur-[120px] ambient-orb ambient-orb-blue" />
          <div className="pointer-events-none absolute -bottom-10 right-10 h-96 w-96 rounded-full bg-[#7C2EDB]/[0.08] blur-[130px] ambient-orb ambient-orb-purple" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-12">
              <div className="reveal-on-load relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white p-8 shadow-sm sm:p-12 lg:col-span-8">
                <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-gradient-to-bl from-[#EEF0FF] via-[#F3F0FF] to-transparent" />
                <div className="relative">
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#2838D8]/20 bg-[#EEF0FF] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#2838D8]">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-[#2838D8]" /> Independent product studio
                  </div>
                  <h1 className="mb-6 text-4xl font-extrabold leading-[1.08] tracking-[-0.07em] sm:text-6xl">
                    <DiaTextReveal as="span" text="Products we've built." className="block" />
                    <DiaTextReveal as="span" text="Ideas turned into software." className="block" delay={0.16} />
                  </h1>
                  <p className="crm-reveal max-w-2xl text-base leading-relaxed text-[#475569] sm:text-lg" style={{ animationDelay: "120ms" }}>
                    Explore our product portfolio across speech intelligence, customer operations, and focused workflow tools. Carefully architected, deployed to production, and built for everyday mastery.
                  </p>
                </div>
                <div className="relative mt-10 flex flex-wrap items-center gap-4 border-t border-[#E2E8F0] pt-6">
                  <a href="#products" className="rounded-full bg-[#2438E8] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:scale-[1.03] hover:bg-[#2838D8]">Explore index ↓</a>
                  <a href="#contact" className="rounded-full border border-[#E2E8F0] bg-white px-6 py-3 text-sm font-semibold transition hover:border-[#2838D8]">Partner with us</a>
                  <span className="hidden text-xs font-medium text-[#64748B] sm:ml-auto sm:inline">Curated studio showcase · 2026</span>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-3 lg:col-span-4 lg:grid-cols-1">
                <div className="reveal-on-load stagger-1 flex items-center justify-between rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div><span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">Total portfolio</span><div className="mt-1 text-3xl font-extrabold">{products.length} products</div><p className="mt-1 text-xs text-[#475569]">Across our active index</p></div>
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#EEF0FF] text-xl font-bold text-[#2838D8]">{products.length}</span>
                </div>
                <div className="reveal-on-load stagger-2 flex items-center justify-between rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div><div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#10B981]"><span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#10B981]" /> Active & live</div><div className="mt-1 text-3xl font-extrabold text-[#2838D8]">{liveCount} live in prod</div><p className="mt-1 text-xs text-[#475569]">Serving clients and operators</p></div>
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-xl font-bold text-[#10B981]"><Check className="h-5 w-5" /></span>
                </div>
                <div className="reveal-on-load stagger-3 flex items-center justify-between rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div><span className="text-xs font-bold uppercase tracking-wider text-[#7C2EDB]">Core reliability</span><div className="mt-1 text-3xl font-extrabold text-[#7C2EDB]">99.9% uptime</div><p className="mt-1 text-xs text-[#475569]">Resilient product systems</p></div>
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#F3F0FF] text-sm font-bold text-[#7C2EDB]">SLA</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="bg-white py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 flex items-end justify-between border-b border-[#E2E8F0] pb-6">
              <div><p className="text-xs font-mono font-bold uppercase tracking-widest text-[#2838D8]">The product index</p><h2 className="mt-2 text-3xl font-black tracking-[-0.06em] sm:text-5xl"><DiaTextReveal as="span" text="Built for the next useful thing." /></h2></div>
              <span className="hidden font-mono text-xs text-[#64748B] sm:block">01 — {String(indexProducts.length).padStart(2, "0")}</span>
            </div>
            <div className="space-y-5">
              {indexProducts.map((product, index) => (
                <a key={product.slug} href={hrefFor(product.slug)} className="product-index-row group relative grid gap-6 overflow-hidden rounded-3xl border border-[#E2E8F0] bg-[#FCFDFE] px-5 py-8 transition duration-300 hover:-translate-y-1 hover:border-[#C7D2FE] hover:bg-white hover:shadow-[0_10px_28px_rgba(40,56,216,0.06)] sm:px-7 lg:grid-cols-12 lg:items-center lg:px-8">
                  <GlowingEffect disabled={false} glow spread={36} proximity={48} inactiveZone={0.2} borderWidth={4} />
                <div className="relative flex items-baseline gap-3 lg:col-span-1"><span className="crm-reveal font-mono text-3xl font-extrabold tracking-[-0.08em] text-[#111827] transition group-hover:text-[#2838D8]" style={{ animationDelay: `${index * 60}ms` }}>{String(index + 1).padStart(2, "0")}</span><span className="crm-reveal text-[10px] font-mono uppercase text-[#64748B] lg:hidden" style={{ animationDelay: `${index * 60 + 40}ms` }}>{product.category}</span></div>
                  <div className="relative lg:col-span-3"><div className="mb-1 flex items-center gap-2"><span className="rounded bg-[#EEF0FF] px-2 py-0.5 text-[10px] font-mono font-bold uppercase text-[#7C2EDB]">{product.status}</span><span className="text-[11px] font-mono text-[#64748B]">{product.year}</span></div><h3 className="text-2xl font-black tracking-tight transition-all duration-300 group-hover:translate-x-1 group-hover:tracking-[-0.02em] group-hover:text-[#2838D8]"><DiaTextReveal as="span" text={product.title} /></h3><p className="text-xs font-mono text-[#64748B]">{product.category}</p></div>
                  <p className="crm-reveal relative text-sm leading-relaxed text-[#475569] lg:col-span-4" style={{ animationDelay: `${index * 60 + 160}ms` }}>{product.shortDescription}</p>
                  <div className="relative flex items-center justify-between gap-4 lg:col-span-4 lg:justify-end"><div className="hidden h-10 w-16 items-center justify-center overflow-hidden border border-[#E2E8F0] bg-[#EEF0FF] text-[10px] font-mono font-bold text-[#2838D8] transition-transform duration-300 group-hover:scale-105 sm:flex">{product.title.slice(0, 3).toUpperCase()}</div><span className="grid h-10 w-10 place-items-center rounded-full border border-[#E2E8F0] transition duration-300 group-hover:border-[#2838D8] group-hover:bg-[#2838D8] group-hover:text-[#111827]"><ArrowRight className="action-arrow h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" /></span></div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="relative overflow-hidden border-t border-white/10 bg-[#111827] py-24 text-white sm:py-32">
          <div className="pointer-events-none absolute right-[-10rem] top-[-10rem] h-[30rem] w-[30rem] rounded-full bg-[#7C2EDB]/20 blur-[100px] ambient-orb ambient-orb-purple" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
            <div className="lg:col-span-8"><p className="mb-5 text-xs font-mono font-bold uppercase tracking-widest text-[#B9ADFF]">Have a real problem to solve?</p><h2 className="max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.08em] sm:text-7xl"><DiaTextReveal as="span" text="Let's build something" className="inline" textColor="#ffffff" />{" "}<DiaTextReveal as="span" text="useful." className="inline" textColor="#B9ADFF" delay={0.16} /></h2></div>
            <div className="lg:col-span-4 lg:pt-10"><p className="crm-reveal text-sm leading-relaxed text-white/60" style={{ animationDelay: "180ms" }}>We partner with teams who value clarity, speed, and software that earns its place in the workflow.</p><a href="mailto:hello@rianinfotech.com" className="crm-reveal mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#111827] transition hover:bg-[#EEF0FF]" style={{ animationDelay: "260ms" }}>Start a conversation <ArrowUpRight className="h-4 w-4" /></a></div>
          </div>
        </section>
      </main>
    </div>
  )
}
