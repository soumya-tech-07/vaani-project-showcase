"use client";

import React from "react";
import { Product } from "@/data/products";

interface ProductStoryProps {
  product: Product;
}

export function ProductStory({ product }: ProductStoryProps) {
  return (
    <section className="py-32 px-6 bg-bg-primary">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Problem Section */}
          <div className="relative group animate-slide-up">
            <div className="flex items-start gap-6">
              <div className="text-6xl font-black text-bg-card group-hover:text-accent-primary transition-colors duration-500 font-mono opacity-30">
                01
              </div>
              <div>
                <h3 className="text-text-primary text-3xl font-bold mb-6 relative">
                  The Problem
                  <span className="absolute -bottom-2 left-0 w-12 h-1 bg-accent-primary" />
                </h3>
                <p className="text-text-secondary text-lg leading-relaxed">
                  {product.problem}
                </p>
              </div>
            </div>
          </div>

          {/* Solution Section */}
          <div className="relative group animate-slide-up" style={{ animationDelay: '200ms' }}>
            <div className="flex items-start gap-6">
              <div className="text-6xl font-black text-bg-card group-hover:text-accent-secondary transition-colors duration-500 font-mono opacity-30">
                02
              </div>
              <div>
                <h3 className="text-text-primary text-3xl font-bold mb-6 relative">
                  The Solution
                  <span className="absolute -bottom-2 left-0 w-12 h-1 bg-accent-secondary" />
                </h3>
                <p className="text-text-secondary text-lg leading-relaxed">
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
