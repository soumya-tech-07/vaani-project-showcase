"use client";

import React from "react";
import { Product } from "@/data/products";

interface ProductTechProps {
  product: Product;
}

export function ProductTech({ product }: ProductTechProps) {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-[#111827] text-4xl font-bold tracking-tight mb-12">Built With</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {product.technology.map((tech, index) => (
            <span
              key={index}
              className="px-6 py-3 rounded-full bg-white border border-[#E2E8F0] text-[#111827] font-medium text-sm shadow-sm hover:border-[var(--project-primary)] hover:text-[var(--project-primary)] transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
