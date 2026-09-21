"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCTAProps {
  product: Product;
}

export function ProductCTA({ product }: ProductCTAProps) {
  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#588094] to-[#336C85] p-12 md:p-20 text-center text-white shadow-2xl">
          {/* Decorative Orbs */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full translate-x-1/2 translate-y-1/2" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Experience {product.title}
            </h2>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              Explore the product and see how it transforms your workflow. Join the future of digital creation today.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <a
                href={product.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white text-[#336C85] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl"
              >
                Visit Product <ArrowUpRight className="w-6 h-6" />
              </a>
              <a
                href={product.CTA?.secondaryUrl || "#"}
                className="flex items-center gap-2 bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
              >
                Request Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
