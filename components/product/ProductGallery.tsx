"use client";

import React from "react";
import { Product } from "@/data/products";

interface ProductGalleryProps {
  product: Product;
}

export function ProductGallery({ product }: ProductGalleryProps) {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-[#2B3128] text-4xl font-bold tracking-tight mb-4">Visual Showcase</h2>
          <p className="text-[#92968F] text-lg max-w-2xl mx-auto">
            A closer look at the interface and user experience of {product.title}.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {product.screenshots.map((src, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-3xl border border-[#e0e3e2] bg-white shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
                index === 0 ? "md:col-span-2 md:row-span-2 aspect-auto" : "aspect-square"
              }`}
            >
              <img
                src={src}
                alt={`Screenshot ${index + 1}`}
                className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                  index === 0 ? "h-full" : ""
                }`}
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
