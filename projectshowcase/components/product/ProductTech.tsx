"use client";

import React from "react";
import { Product } from "@/data/products";

interface ProductTechProps {
  product: Product;
}

export function ProductTech({ product }: ProductTechProps) {
  return (
    <section className="py-32 px-6 bg-bg-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-text-primary text-4xl font-bold tracking-tight mb-12">Built With</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {product.technology.map((tech, index) => (
            <span
              key={index}
              className="px-6 py-3 rounded-full bg-bg-card border border-border-premium text-text-primary font-medium text-sm shadow-sm hover:border-accent-primary hover:text-accent-primary transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
