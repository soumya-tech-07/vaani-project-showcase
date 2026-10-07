"use client";

import React from "react";
import { Product } from "@/data/products";

interface ProductStoryProps {
  product: Product;
}

export function ProductStory({ product }: ProductStoryProps) {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Problem Section */}
          <div className="relative group">
            <div className="flex items-start gap-8">
              <div className="text-6xl font-black text-[#E2E8F0] group-hover:text-[#2438E8] transition-colors duration-500 font-mono opacity-50">
                01
              </div>
              <div className="flex-1">
                <h3 className="text-[#111827] text-3xl font-bold mb-6 relative">
                  The Problem
                  <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#2438E8]" />
                </h3>
                <p className="text-[#475569] text-lg leading-relaxed">
                  {product.problem}
                </p>
              </div>
            </div>
          </div>

          {/* Solution Section */}
          <div className="relative group">
            <div className="flex items-start gap-8">
              <div className="text-6xl font-black text-[#E2E8F0] group-hover:text-[#2438E8] transition-colors duration-500 font-mono opacity-50">
                02
              </div>
              <div className="flex-1">
                <h3 className="text-[#111827] text-3xl font-bold mb-6 relative">
                  The Solution
                  <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#2438E8]" />
                </h3>
                <p className="text-[#475569] text-lg leading-relaxed">
                  {product.solution}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
