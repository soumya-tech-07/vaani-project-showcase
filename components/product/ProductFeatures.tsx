"use client";

import React from "react";
import { Product } from "@/data/products";

interface ProductFeaturesProps {
  product: Product;
}

export function ProductFeatures({ product }: ProductFeaturesProps) {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-[#2B3128] text-4xl md:text-5xl font-bold mb-4 tracking-tight">Key Capabilities</h2>
          <p className="text-[#92968F] text-lg max-w-2xl mx-auto">
            Engineered for performance and designed for clarity. Explore the features that make {product.title} unique.
          </p>
        </div>

        <div className="space-y-32">
          {product.features.map((feature, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              <div className={`flex flex-col gap-6 ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                <div className="flex items-center gap-4">
                  <span className="text-[#336C85] font-mono text-sm font-bold uppercase tracking-widest">
                    Feature 0{index + 1}
                  </span>
                  <div className="h-px flex-1 bg-[#e0e3e2]" />
                </div>
                <h3 className="text-[#2B3128] text-3xl font-bold tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-[#92968F] text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className={`relative group ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                <div className="relative bg-white border border-[#e0e3e2] rounded-3xl overflow-hidden shadow-xl transition-transform duration-500 group-hover:scale-[1.02]">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full aspect-video object-cover"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
                </div>
                {/* Decorative glow behind image */}
                <div className="absolute -inset-4 bg-[#9FBCCD]/20 blur-3xl rounded-full -z-10 opacity-60" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
