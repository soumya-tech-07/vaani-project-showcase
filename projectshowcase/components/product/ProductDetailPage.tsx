
"use client";

import React from "react";
import { ArrowUpRight, Bookmark, CircleArrowUp, Heart, Mic } from "lucide-react";
import { Product } from "@/data/products";
import { TextEffect } from "@/components/ui/text-effect";

interface ProductDetailPageProps {
  product: Product;
}

export function ProductDetailPage({ product }: ProductDetailPageProps) {
  return (
    <main className="case-study-shell min-h-screen px-4 pb-8 text-white sm:px-8 lg:px-10">
      <header className="case-study-header mx-auto flex max-w-[1680px] items-center justify-between py-7 text-[13px] font-medium tracking-[-0.02em] sm:py-9 sm:text-base">
        <a href="/" className="flex items-center gap-3 transition-opacity hover:opacity-70">
          <Bookmark className="h-6 w-6 fill-current stroke-[1.5] sm:h-7 sm:w-7" />
          <span>CASE UI/UX</span>
        </a>
        <a href="https://krisanfalova.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 transition-opacity hover:opacity-70">
          KRIS ANFALOVA <Heart className="h-5 w-5 fill-current sm:h-6 sm:w-6" />
        </a>
      </header>

      <section className="case-study-frame mx-auto grid max-w-[1680px] overflow-hidden rounded-[18px] border-[9px] border-white/80 bg-white shadow-[0_24px_70px_rgba(28,70,88,0.18)] lg:grid-cols-[1fr_1fr]">
        <div className="case-study-copy flex min-h-[650px] flex-col bg-[#fff] px-7 py-7 text-[#0c0d0d] sm:px-12 sm:py-9 lg:min-h-[850px] lg:px-[clamp(48px,7vw,120px)]">
          <div className="flex items-center justify-between gap-4 text-[#66889a]">
            <a href="/" className="flex items-center gap-3 text-xl font-medium tracking-[-0.06em] sm:text-2xl">
              <span className="case-study-mark" aria-hidden="true" />
              {product.title}
            </a>
            <span className="rounded-xl bg-[#f0f6f8] px-3 py-2 text-[11px] font-medium sm:px-4 sm:text-xs">#1 on ProductHunt</span>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center py-12 text-center sm:py-16">
            <div className="case-study-orb mb-9" aria-hidden="true" />
            <TextEffect
              per="word"
              as="p"
              preset="slide"
              className="mb-6 max-w-[600px] text-[clamp(2.8rem,5.5vw,6rem)] font-semibold leading-[0.93] tracking-[-0.075em]"
            >
              {product.title === "Lumina" ? "Give your product a design system that scales" : product.tagline}
            </TextEffect>
            <p className="mb-9 max-w-[350px] text-base leading-[1.35] text-[#17191a] sm:text-xl">
              {product.shortDescription}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={product.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-xl bg-[#78aabd] px-5 py-4 text-sm font-medium text-white transition-transform hover:-translate-y-1 sm:px-7 sm:text-base">
                Try live demo <CircleArrowUp className="h-4 w-4 fill-white text-[#78aabd]" />
              </a>
              <a href={product.CTA?.secondaryUrl ?? product.videoUrl} className="rounded-xl border-2 border-[#dce7ea] px-5 py-4 text-sm font-medium text-[#7897a5] transition-colors hover:border-[#78aabd] sm:px-7 sm:text-base">
                Book a call
              </a>
            </div>
          </div>

          <div className="text-center">
            <p className="mb-5 font-mono text-[10px] tracking-[0.12em] text-[#222] sm:text-xs">TRUSTED BY TEAMS GLOBALLY</p>
            <div className="flex items-center justify-center gap-5 text-lg font-semibold text-[#c7ccce] grayscale sm:gap-10 sm:text-2xl">
              <span>SONY</span><span>amazon</span><span>Adobe</span><span>intel</span><span>Google</span>
            </div>
          </div>
        </div>

        <div className="case-study-product relative min-h-[650px] overflow-hidden sm:min-h-[850px]">
          <img src="https://images.unsplash.com/photo-1502691511068-569764c17b7a?auto=format&fit=crop&q=85&w=1400" alt="Soft flowers against a blue sky" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(71,191,226,.3),transparent_35%),linear-gradient(180deg,rgba(45,126,159,.28),rgba(75,147,170,.38))]" />
          <div className="relative flex h-full flex-col p-5 sm:p-8">
            <div className="flex items-center gap-2 text-[11px] font-medium text-white/90 sm:gap-3 sm:text-sm">
              {['Platform', 'Use Cases', 'Pricing', 'Company'].map((item) => <span key={item} className="rounded-full bg-white/25 px-3 py-2 backdrop-blur-md sm:px-5 sm:py-3">{item}</span>)}
              <a href={product.liveUrl} className="ml-auto rounded-xl bg-white px-4 py-3 text-xs font-semibold text-[#101415] sm:px-6 sm:text-sm">Get started <ArrowUpRight className="ml-1 inline h-3 w-3" /></a>
            </div>

            <div className="case-study-assistant absolute left-1/2 top-[23%] w-[78%] -translate-x-1/2 rounded-[28px] border border-white/30 bg-[#a8c6d2]/70 p-5 text-white shadow-2xl backdrop-blur-xl sm:p-7">
              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center gap-3"><span className="case-study-mark case-study-mark-small" /><span><strong className="block text-sm">{product.title}</strong><small className="text-white/65">your assistant</small></span></div>
                <span className="rounded-full bg-white/20 px-3 py-2 text-[10px]"><i className="mr-1 inline-block h-2 w-2 rounded-full bg-[#a8f29c]" /> online now</span>
              </div>
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="w-fit rounded-2xl bg-white/20 px-4 py-3">Hi! How can I help you today?<small className="mt-1 block text-white/55">9:31 AM</small></div>
                <div className="ml-auto w-fit max-w-[85%] rounded-2xl bg-white/20 px-4 py-3">I need a consistent system for my next product.</div>
                <div className="w-fit max-w-[85%] rounded-2xl border border-white/40 bg-white/15 px-4 py-3">Of course. Let&apos;s build something clear, flexible, and ready for your team.</div>
              </div>
              <div className="mt-5 flex items-center justify-between rounded-full bg-white px-4 py-3 text-[#688c9d]"><span><Mic className="mr-2 inline h-4 w-4" /> Listening...</span><span className="rounded-full bg-[#e7eff2] px-3 py-1 text-[10px]">00:10</span></div>
            </div>

            <div className="mt-auto text-center text-white"><h2 className="text-2xl font-medium tracking-[-0.05em] sm:text-4xl">Real-time creation</h2><p className="mt-2 text-sm text-white/85 sm:text-base">Every idea becomes a usable interface.</p></div>
          </div>
        </div>
      </section>
    </main>
  );
}
