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
          <h2 className="text-[#2B3128] text-4xl font-bold tracking-tight mb-4">How It Works</h2>
          <p className="text-[#92968F] text-lg max-w-2xl mx-auto">
            A streamlined process designed for maximum efficiency and clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {product.howItWorks.map((step, index) => (
            <div key={index} className="relative p-8 rounded-3xl border border-[#e0e3e2] bg-white shadow-sm group hover:border-[#336C85] transition-all duration-300">
              <div className="text-4xl font-black text-[#C6CDCE] mb-6 font-mono group-hover:text-[#336C85] transition-colors">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="text-[#2B3128] text-xl font-bold mb-3">{step.step}</h3>
              <p className="text-[#92968F] leading-relaxed">
                {step.description}
              </p>

              {/* Connecting line for desktop */}
              {index < product.howItWorks.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-[#e0e3e2] z-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
