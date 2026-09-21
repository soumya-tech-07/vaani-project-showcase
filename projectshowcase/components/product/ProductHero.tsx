"use client";

import React from "react";
import { ArrowUpRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { Product } from "@/data/products";

interface ProductHeroProps {
  product: Product;
}

export function ProductHero({ product }: ProductHeroProps) {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Radial Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-accent-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-secondary/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bg-elevated border border-border-premium text-text-secondary text-xs font-medium mb-6 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
          {product.category} • {product.year}
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-text-primary tracking-tight mb-6 animate-slide-up">
          {product.title}
        </h1>

        <p className="text-xl md:text-2xl text-accent-primary font-medium mb-4 animate-slide-up" style={{ animationDelay: '100ms' }}>
          {product.tagline}
        </p>

        <p className="max-w-2xl mx-auto text-text-secondary text-lg mb-10 animate-slide-up" style={{ animationDelay: '200ms' }}>
          {product.shortDescription}
        </p>

        <div className="flex items-center justify-center gap-4 mb-20 animate-slide-up" style={{ animationDelay: '300ms' }}>
          <a
            href={product.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-accent-primary text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all shadow-xl shadow-accent-primary/20"
          >
            Visit Product <ArrowUpRight className="w-5 h-5" />
          </a>
          <a
            href={product.videoUrl}
            className="flex items-center gap-2 bg-bg-card text-text-primary border border-border-premium px-8 py-4 rounded-full font-semibold hover:bg-bg-elevated transition-all"
          >
            <Play className="w-5 h-5 fill-current" /> Watch Demo
          </a>
        </div>

        {/* Main Visual Representation */}
        <div className="relative group animate-slide-up" style={{ animationDelay: '400ms' }}>
          {/* Browser Frame */}
          <div className="relative bg-bg-elevated border border-border-premium rounded-t-2xl shadow-2xl overflow-hidden">
            {/* Browser Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-bg-secondary border-b border-border-premium">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="mx-auto bg-bg-primary border border-border-premium rounded-md px-3 py-1 text-[10px] text-text-muted w-1/2 max-w-md text-center truncate">
                {product.liveUrl}
              </div>
            </div>

            {/* Product UI Image */}
            <div className="relative aspect-video bg-bg-primary">
              <img
                src={product.heroImage}
                alt={`${product.title} UI`}
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
              {/* Inner Glow */}
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10" />
            </div>
          </div>

          {/* Bottom Shadow/Glow */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-20 bg-accent-primary/20 blur-[60px] rounded-full -z-10" />
        </div>
      </div>
    </section>
  );
}
