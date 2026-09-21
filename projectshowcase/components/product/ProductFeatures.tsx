"use client";

import React from "react";
import { Product } from "@/data/products";

interface ProductFeaturesProps {
  product: Product;
}

export function ProductFeatures({ product }: ProductFeaturesProps) {
  return (
    <section className="py-32 px-6 bg-bg-primary">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-text-primary text-4xl md:text-5xl font-bold mb-4 tracking-tight">Key Capabilities</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Engineered for performance and designed for clarity. Explore the features that make {product.title} unique.
          </p>
        </div>

        <div className="space-y-32">
          {product.features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              )}
              style={{
                flexDirection: index % 2 === 1 ? 'row-reverse' : 'row',
                gridTemplateColumns: index % 2 === 1 ? '1fr 1fr' : '1fr 1fr' // Tailwind will handle layout
              }}
            >
              <div className={cn(
                "space-y-6",
                index % 2 === 1 ? "lg:order-2" : "lg:order-1"
              )}>
                <div className="flex items-center gap-4">
                  <span className="text-accent-primary font-mono text-sm font-bold">
                    FEATURE 0{index + 1}
                  </span>
                  <div className="h-px flex-1 bg-border-premium" />
                </div>
                <h3 className="text-text-primary text-3xl font-bold tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-text-secondary text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className={cn(
                "relative group",
                index % 2 === 1 ? "lg:order-1" : "lg:order-2"
              )}>
                <div className="relative bg-bg-elevated border border-border-premium rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full aspect-video object-cover opacity-90"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
                </div>
                {/* Decorative glow behind image */}
                <div className="absolute -inset-4 bg-accent-primary/10 blur-2xl rounded-full -z-10 opacity-50" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function cn(...classes: (string | boolean | false | null | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}
