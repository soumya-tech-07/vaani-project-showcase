"use client";

import React from "react";
import { ArrowUpRight, CirclePlay, Mic } from "lucide-react";
import { Product } from "@/data/products";
import { TextEffect } from "@/components/ui/text-effect";

interface ProductHeroProps {
  product: Product;
}

export function ProductHero({ product }: ProductHeroProps) {
  const isVaani = product.title === "Vaani";

  return (
    <section className="relative flex min-h-[780px] items-center overflow-hidden px-4 pb-10 pt-28 sm:px-7 lg:min-h-screen lg:pb-16 lg:pt-24">
      <div className="mx-auto grid w-full max-w-[1380px] grid-cols-1 overflow-hidden rounded-[10px] border-4 border-[#E0E3E2] bg-[#FEFEFE] shadow-[0_28px_80px_rgba(37,74,83,0.18)] lg:grid-cols-[1fr_1fr]">
        <div className="relative flex min-h-[600px] flex-col justify-between bg-[#FEFEFE] px-7 py-7 sm:px-12 lg:min-h-[690px] lg:px-16 lg:py-10">
          <div className="flex items-center justify-between text-xs text-[#7b8c8d]">
            <div className="flex items-center gap-2 font-semibold text-[#1c292b]">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#9fc9d1] text-white shadow-inner"><Mic className="h-3.5 w-3.5" /></span>
              {product.title}
            </div>
            <span className="rounded-full bg-[#f2f6f5] px-3 py-1 text-[10px]">{isVaani ? "Voice to clean text" : "#1 on ProductHunt"}</span>
          </div>

          <div className="mx-auto w-full max-w-[510px] text-center">
            <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-[#a7d4dc] shadow-[inset_0_-8px_14px_rgba(54,111,124,0.2),0_6px_16px_rgba(83,142,153,0.18)]">
              <span className="h-7 w-7 rounded-full border border-white/60 bg-white/20" />
            </div>
            <h1 className="text-[clamp(2.8rem,5vw,5rem)] font-semibold leading-[0.94] tracking-[-0.065em] text-[#101618]">
              <TextEffect as="span" per="word" preset="blur" delay={0.15} className="block">
                {product.title === "Lumina" ? "Give your product a design system that scales" : product.tagline}
              </TextEffect>
            </h1>
            <p className="mx-auto mt-7 max-w-[390px] text-sm leading-relaxed text-[#687778] sm:text-base">
              {product.shortDescription}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-2.5">
              <a href={product.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-[#7eafba] px-5 py-3 text-xs font-semibold text-white shadow-[0_6px_18px_rgba(76,131,143,0.22)] transition-transform hover:-translate-y-0.5">
                Try live demo <CirclePlay className="h-4 w-4" />
              </a>
              <a href={product.videoUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-[#dce6e5] bg-white px-5 py-3 text-xs font-semibold text-[#799091] transition-colors hover:bg-[#f5f9f8]">
                Book a call
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center gap-5 pt-10 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#b2bdbb] sm:gap-8">
            <span>Google</span><span>SONY</span><span>amazon</span><span>Adobe</span><span>intel</span>
          </div>
        </div>

        <div className="relative min-h-[600px] overflow-hidden bg-[#9FBCCD] lg:min-h-[690px]">
          <img src={product.heroImage} alt={`${product.title} product environment`} className="absolute inset-0 h-full w-full object-cover opacity-75 mix-blend-screen saturate-50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(218,246,247,0.35),transparent_34%),linear-gradient(160deg,rgba(74,142,157,0.25),rgba(34,91,108,0.5))]" />
          <div className="relative flex h-full flex-col justify-between p-5 sm:p-8">
            <div className="flex items-center justify-between text-[10px] text-white/85">
              <div className="flex gap-5 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm"><span>{isVaani ? "How it works" : "Platform"}</span><span>{isVaani ? "Features" : "Use Cases"}</span><span>Pricing</span><span>{isVaani ? "FAQ" : "Company"}</span></div>
              <a href={product.liveUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-4 py-2 font-semibold text-[#304d53]">Get started <ArrowUpRight className="inline h-3 w-3" /></a>
            </div>
            <div className="mx-auto w-full max-w-[390px] rounded-[24px] border border-white/35 bg-white/25 p-4 text-white shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-2 border-b border-white/20 pb-4 text-xs"><span className="h-7 w-7 rounded-full bg-white/70" /><span>{product.title}<small className="block text-[9px] text-white/60">{isVaani ? "voice workspace" : "your assistant"}</small></span><span className="ml-auto rounded-full bg-[#c8f4d4]/50 px-2 py-1 text-[9px]">● online now</span></div>
              <div className="space-y-3 py-12 text-[11px] text-white/75"><p className="ml-auto max-w-[220px] rounded-2xl rounded-br-sm bg-white/15 p-3">{isVaani ? "Client call notes, ready to send." : "Hi, how can I help you today?"}</p><p className="max-w-[220px] rounded-2xl rounded-bl-sm bg-white/15 p-3">{isVaani ? "Speak in Hindi, Hinglish, or English. I will clean it up." : "I can help you explore the product and get started."}</p></div>
              <div className="flex items-center justify-between rounded-full bg-white/80 px-4 py-2 text-[10px] text-[#6d8589]"><span>● Listening...</span><span>00:10</span></div>
            </div>
            <div className="text-center text-white"><h2 className="text-xl font-semibold">{isVaani ? "Speak once. Send polished text." : "Real-time collaboration"}</h2><p className="mt-1 text-xs text-white/70">{isVaani ? "Your words, wherever your cursor is" : "Everything your team needs, right when it happens"}</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
