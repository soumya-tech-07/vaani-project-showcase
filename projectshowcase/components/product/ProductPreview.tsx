"use client";

import React from "react";
import { Product } from "@/data/products";

interface ProductPreviewProps {
  product: Product;
}

export function ProductPreview({ product }: ProductPreviewProps) {
  return (
    <section className="py-20 px-6 bg-bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-2 h-8 bg-accent-primary rounded-full" />
            <h2 className="text-3xl font-bold text-text-primary">Product Preview</h2>
          </div>
          <span className="text-text-muted text-sm font-mono uppercase tracking-widest">Live Interaction</span>
        </div>

        <div className="relative rounded-3xl border border-border-premium bg-bg-primary shadow-2xl overflow-hidden group">
          {/* iframe wrapper */}
          <div className="aspect-video w-full relative">
            {/* Note: If the URL doesn't allow iframing, we show a placeholder/screenshot */}
            <iframe
              src={product.liveUrl}
              className="w-full h-full border-none opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              title={product.title}
              loading="lazy"
            />
            {/* Overlay for non-embeddable sites (simplified) */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-bg-primary/20" />
          </div>

          <div className="absolute bottom-6 right-6">
            <a
              href={product.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-xs font-medium hover:bg-white/20 transition-all"
            >
              Open in New Tab ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
