"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCTAProps {
  product: Product;
}

export function ProductCTA({ product }: ProductCTAProps) {
  return (
    <section className="py-32 px-6 bg-bg-primary">
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-bg-card p-12 md:p-20 text-center text-text-primary shadow-2xl border border-border-premium">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Experience {product.title}
            </h2>
            <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              Explore the product and see how it works. Join the future of digital creation today.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <a
                href={product.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-accent-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-accent-primary/20"
              >
                Visit Product <ArrowUpRight className="w-6 h-6" />
              </a>
              <a
                href={product.CTA?.secondaryUrl || "#"}
                className="flex items-center gap-2 bg-bg-elevated text-text-primary border border-border-premium px-8 py-4 rounded-full font-bold text-lg hover:bg-bg-card transition-all"
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
