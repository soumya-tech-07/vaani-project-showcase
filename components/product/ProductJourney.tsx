"use client";

import React from "react";
import { Product } from "@/data/products";

interface ProductJourneyProps {
  product: Product;
}

export function ProductJourney({ product }: ProductJourneyProps) {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-[#2B3128] text-4xl font-bold tracking-tight mb-4">The User Journey</h2>
          <p className="text-[#92968F] text-lg">
            From first interaction to final result, here is how users experience {product.title}.
          </p>
        </div>

        <div className="relative space-y-12">
          {/* Connecting Line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-[#e0e3e2] hidden sm:block" />

          {product.userJourney.map((step, index) => (
            <div key={index} className="relative flex gap-8 group">
              {/* Step Marker */}
              <div className="hidden sm:flex items-center justify-center z-10 w-12 h-12 rounded-full bg-white border-2 border-[#336C85] text-[#336C85] font-bold shrink-0 transition-all duration-300 group-hover:bg-[#336C85] group-hover:text-white">
                {index + 1}
              </div>

              <div className="flex-1 bg-white p-8 rounded-3xl border border-[#e0e3e2] shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1">
                <h3 className="text-[#2B3128] text-xl font-bold mb-2">{step.label}</h3>
                <p className="text-[#92968F] leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
