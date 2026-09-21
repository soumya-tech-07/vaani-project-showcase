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
        <h2 className="text-[#2B3128] text-4xl font-bold tracking-tight mb-12">Built With</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {product.technology.map((tech, index) => (
            <span
              key={index}
              className="px-6 py-3 rounded-full bg-white border border-[#e0e3e2] text-[#2B3128] font-medium text-sm shadow-sm hover:border-[#336C85] hover:text-[#336C85] transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
