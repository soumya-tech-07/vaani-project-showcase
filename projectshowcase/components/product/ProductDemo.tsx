"use client";

import React from "react";
import { Play } from "lucide-react";
import { Product } from "@/data/products";

interface ProductDemoProps {
  product: Product;
}

export function ProductDemo({ product }: ProductDemoProps) {
  return (
    <section className="py-32 px-6 bg-bg-secondary relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-accent-primary/5 blur-[100px] rounded-full -z-10" />

      <div className="max-w-5xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
          <h2 className="text-text-primary text-4xl font-bold tracking-tight">Product Demonstration</h2>
        </div>

        <div className="relative group rounded-3xl overflow-hidden shadow-2xl border border-border-premium bg-bg-card transition-transform duration-500 hover:scale-[1.01]">
          <div className="aspect-video relative overflow-hidden">
            {/* Poster Image / Video Placeholder */}
            <img
              src={product.heroImage}
              alt="Demo Poster"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
            />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
              <div className="w-20 h-20 rounded-full bg-accent-primary text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 ring-8 ring-accent-primary/20">
                <Play className="w-8 h-8 fill-current ml-1" />
              </div>
            </div>

            {/* Video Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-bg-primary to-transparent text-left">
              <p className="text-text-primary font-medium">Watch how {product.title} transforms your workflow.</p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <a
            href={product.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors font-medium"
          >
            <Play className="w-4 h-4 fill-current" /> View on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
