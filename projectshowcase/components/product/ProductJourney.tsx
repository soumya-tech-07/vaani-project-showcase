"use client";

import React from "react";
import { Product } from "@/data/products";

interface ProductJourneyProps {
  product: Product;
}

export function ProductJourney({ product }: ProductJourneyProps) {
  return (
    <section className="py-32 px-6 bg-bg-secondary">
      <div className="max-w-4xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-text-primary text-4xl font-bold tracking-tight mb-4">The User Journey</h2>
          <p className="text-text-secondary text-lg">
            From first interaction to final result, here is how users experience {product.title}.
          </p>
        </div>

        <div className="relative space-y-12">
          {/* Connecting Line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border-premium hidden sm:block" />

          {product.userJourney.map((step, index) => (
            <div key={index} className="relative flex gap-8 group">
              {/* Step Marker */}
              <div className="hidden sm:flex items-center justify-center z-10 w-12 h-12 rounded-full bg-bg-card border-2 border-accent-primary text-accent-primary font-bold shrink-0 transition-all duration-300 group-hover:bg-accent-primary group-hover:text-white">
                {index + 1}
              </div>

              <div className="flex-1 bg-bg-elevated p-8 rounded-2xl border border-border-premium shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                <h3 className="text-text-primary text-xl font-bold mb-2">{step.label}</h3>
                <p className="text-text-secondary leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
