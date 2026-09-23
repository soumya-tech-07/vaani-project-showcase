"use client"

import { ArrowRight, ArrowUpRight, Check, Circle, Sparkles } from "lucide-react"
import { products } from "@/data/products"

const hrefFor = (slug: string) => (slug === "vaani" ? "/vaani" : `/products/${slug}`)

function Preview({ product, featured = false }: { product: (typeof products)[number]; featured?: boolean }) {
  return (
    <div className={`relative overflow-hidden border border-[#E2E8F0] bg-white ${featured ? "h-[22rem] sm:h-[30rem]" : "h-44"}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(40,56,216,0.18),transparent_34%),linear-gradient(135deg,#F8FAFC_0%,#EEF0FF_55%,#F3F0FF_100%)] product-visual-shimmer" />
      {product.heroImage ? (
        <img src={product.heroImage} alt={`${product.title} preview`} className="absolute inset-6 h-[calc(100%-3rem)] w-[calc(100%-3rem)] object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-[1.04]" />
      ) : (
        <div className="absolute inset-6 grid place-items-center border border-white/80 bg-white/50">
          <span className="text-5xl font-black tracking-[-0.1em] text-[#2838D8]/20">{product.title.slice(0, 2).toUpperCase()}</span>
        </div>
      )}
      <div className="absolute right-4 top-4 rounded-full border border-white/80 bg-white/80 px-2 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-[#2838D8]">
        {product.status}
      </div>
    </div>
  )
}

export function ProjectShowcase() {
  const featured = products[0]
  const liveCount = products.filter((product) => product.status === "live").length
  const indexProducts = products.slice(1, 10)

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
                    Products we&apos;ve built.<br />
                    <span className="bg-gradient-to-r from-[#2838D8] to-[#7C2EDB] bg-clip-text text-transparent">Ideas turned into software.</span>
                  </h1>
                  <p className="max-w-2xl text-base leading-relaxed text-[#475569] sm:text-lg">
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

        <section id="spotlight" className="border-b border-[#E2E8F0] bg-[#F8FAFC] py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col justify-between gap-4 border-b border-[#E2E8F0] pb-6 sm:flex-row sm:items-end">
              <div><p className="mb-1 text-xs font-mono font-bold uppercase tracking-widest text-[#2838D8]">[Product monograph 01]</p><h2 className="text-3xl font-black uppercase tracking-[-0.06em] sm:text-5xl">{featured.title} Voice Engine</h2></div>
              <div className="font-mono text-xs text-[#64748B]"><span className="inline-flex items-center gap-1.5 font-bold text-[#10B981]"><Circle className="h-2 w-2 fill-current" /> Active production</span> / Revised Q1 2026</div>
            </div>
            <div className="reveal-on-scroll grid items-center gap-8 lg:grid-cols-12">
              <a href={hrefFor(featured.slug)} className="group lg:col-span-7"><Preview product={featured} featured /></a>
              <div className="lg:col-span-5 lg:pl-8">
                <div className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#7C2EDB]"><Sparkles className="h-4 w-4" /> Voice intelligence</div>
                <h3 className="text-4xl font-black leading-[0.95] tracking-[-0.07em] sm:text-6xl">Just speak.<br /><span className="text-[#2838D8]">Vaani writes.</span></h3>
                <p className="mt-6 text-base leading-relaxed text-[#475569]">{featured.shortDescription}</p>
                <a href={hrefFor(featured.slug)} className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#2438E8] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2838D8]">Open Vaani route <ArrowUpRight className="h-4 w-4" /></a>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex items-end justify-between border-b border-[#E2E8F0] pb-5">
              <div><p className="text-xs font-mono font-bold uppercase tracking-widest text-[#2838D8]">The product index</p><h2 className="mt-2 text-3xl font-black tracking-[-0.06em] sm:text-5xl">Built for the next useful thing.</h2></div>
              <span className="hidden font-mono text-xs text-[#64748B] sm:block">01 — {String(indexProducts.length).padStart(2, "0")}</span>
            </div>
            <div className="divide-y divide-[#E2E8F0]">
              {indexProducts.map((product, index) => (
                <a key={product.slug} href={hrefFor(product.slug)} className="product-index-row group grid gap-5 py-7 transition hover:-translate-y-0.5 hover:bg-[#F8FAFC] lg:grid-cols-12 lg:items-center lg:px-3">
                  <div className="flex items-baseline gap-3 lg:col-span-1"><span className="font-mono text-3xl font-extrabold tracking-[-0.08em] text-[#111827] transition group-hover:text-[#2838D8]">{String(index + 2).padStart(2, "0")}</span><span className="text-[10px] font-mono uppercase text-[#64748B] lg:hidden">{product.category}</span></div>
                  <div className="lg:col-span-3"><div className="mb-1 flex items-center gap-2"><span className="rounded bg-[#EEF0FF] px-2 py-0.5 text-[10px] font-mono font-bold uppercase text-[#7C2EDB]">{product.status}</span><span className="text-[11px] font-mono text-[#64748B]">{product.year}</span></div><h3 className="text-2xl font-black tracking-tight transition group-hover:text-[#2838D8]">{product.title}</h3><p className="text-xs font-mono text-[#64748B]">{product.category}</p></div>
                  <p className="text-sm leading-relaxed text-[#475569] lg:col-span-4">{product.shortDescription}</p>
                  <div className="flex items-center justify-between gap-4 lg:col-span-4 lg:justify-end"><div className="hidden h-10 w-16 items-center justify-center overflow-hidden border border-[#E2E8F0] bg-[#EEF0FF] text-[10px] font-mono font-bold text-[#2838D8] sm:flex">{product.title.slice(0, 3).toUpperCase()}</div><span className="grid h-10 w-10 place-items-center rounded-full border border-[#E2E8F0] transition group-hover:border-[#2838D8] group-hover:bg-[#2838D8] group-hover:text-white"><ArrowRight className="action-arrow h-4 w-4 transition-transform group-hover:translate-x-1" /></span></div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="relative overflow-hidden border-t border-white/10 bg-[#111827] py-24 text-white sm:py-32">
          <div className="pointer-events-none absolute right-[-10rem] top-[-10rem] h-[30rem] w-[30rem] rounded-full bg-[#7C2EDB]/20 blur-[100px] ambient-orb ambient-orb-purple" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
            <div className="lg:col-span-8"><p className="mb-5 text-xs font-mono font-bold uppercase tracking-widest text-[#B9ADFF]">Have a real problem to solve?</p><h2 className="max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.08em] sm:text-7xl">Let&apos;s build something <span className="text-[#B9ADFF]">useful.</span></h2></div>
            <div className="lg:col-span-4 lg:pt-10"><p className="text-sm leading-relaxed text-white/60">We partner with teams who value clarity, speed, and software that earns its place in the workflow.</p><a href="mailto:hello@rianinfotech.com" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#111827] transition hover:bg-[#EEF0FF]">Start a conversation <ArrowUpRight className="h-4 w-4" /></a></div>
          </div>
        </section>
      </main>
    </div>
  )
}
