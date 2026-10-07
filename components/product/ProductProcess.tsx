"use client";

import React from "react";
import { Product } from "@/data/products";

interface ProductProcessProps {
  product: Product;
}

export function ProductProcess({ product }: ProductProcessProps) {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-[#111827] text-4xl font-bold tracking-tight mb-4">How It Works</h2>
          <p className="text-[#475569] text-lg max-w-2xl mx-auto">
            A streamlined process designed for maximum efficiency and clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {product.howItWorks.map((step, index) => (
            <div key={index} className="relative p-8 rounded-3xl border border-[#E2E8F0] bg-white shadow-sm group hover:border-[#2438E8] transition-all duration-300">
              <div className="text-4xl font-black text-[#E2E8F0] mb-6 font-mono group-hover:text-[#2438E8] transition-colors">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="text-[#111827] text-xl font-bold mb-3">{step.step}</h3>
              <p className="text-[#475569] leading-relaxed">
                {step.description}
              </p>

              {/* Connecting line for desktop */}
              {index < product.howItWorks.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-[#E2E8F0] z-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
