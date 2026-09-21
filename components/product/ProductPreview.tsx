"use client";

import React, { useState, useEffect } from "react";
import { Product } from "@/data/products";

interface ProductPreviewProps {
  product: Product;
}

export function ProductPreview({ product }: ProductPreviewProps) {
  const [iframeError, setIframeError] = useState(false);

  // Note: We cannot easily detect X-Frame-Options from client-side JS
  // because the browser doesn't expose that error to the window.
  // However, we can provide a "Open in new tab" button and a visual fallback
  // if the user reports it's not loading, or based on a known list.
  // For this implementation, we'll provide the iframe and a clear fallback CTA.

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-2 h-8 bg-[#336C85] rounded-full" />
            <h2 className="text-3xl font-bold text-[#2B3128]">Live Interaction</h2>
          </div>
          <span className="text-[#92968F] text-sm font-mono uppercase tracking-widest">Real-time Preview</span>
        </div>

        <div className="relative rounded-3xl border border-[#e0e3e2] bg-white shadow-2xl overflow-hidden group">
          <div className="aspect-video w-full relative bg-[#f8fafb]">
            <iframe
              src={product.liveUrl}
              className="w-full h-full border-none opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              title={product.title}
              loading="lazy"
              onError={() => setIframeError(true)}
            />

            {/* Fallback overlay if iframe fails or as a guide */}
            {iframeError && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white text-center p-6">
                <p className="text-[#2B3128] font-medium mb-4">Live preview is unavailable for this product.</p>
                <a
                  href={product.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#336C85] text-white px-6 py-3 rounded-full text-sm font-medium hover:scale-105 transition-all"
                >
                  Visit Official Site ↗
                </a>
              </div>
            )}

            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-[#f8fafb]/20" />
          </div>

          <div className="absolute bottom-6 right-6">
            <a
              href={product.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/80 backdrop-blur-md border border-[#e0e3e2] text-[#2B3128] px-4 py-2 rounded-full text-xs font-medium hover:bg-white transition-all"
            >
              Open in New Tab ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
