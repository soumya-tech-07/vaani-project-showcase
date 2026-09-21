"use client";

import React from "react";
import { Play } from "lucide-react";
import { Product } from "@/data/products";

interface ProductDemoProps {
  product: Product;
}

export function ProductDemo({ product }: ProductDemoProps) {
  const getEmbedUrl = (url: string) => {
    if (url.includes("youtube.com/watch?v=")) {
      return url.replace("watch?v=", "embed/");
    }
    if (url.includes("youtu.be/")) {
      return "https://www.youtube.com/embed/" + url.split("/").pop();
    }
    return url;
  };

  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="w-2 h-2 rounded-full bg-[#336C85] animate-pulse" />
          <h2 className="text-[#2B3128] text-4xl font-bold tracking-tight">Product Demonstration</h2>
        </div>

        <div className="relative group rounded-[32px] overflow-hidden shadow-2xl border border-[#e0e3e2] bg-white transition-transform duration-500 hover:scale-[1.01]">
          <div className="aspect-video relative overflow-hidden">
            <iframe
              src={getEmbedUrl(product.videoUrl)}
              className="w-full h-full border-none"
              title="Product Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="mt-10">
          <a
            href={product.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#92968F] hover:text-[#336C85] transition-colors font-medium"
          >
            <Play className="w-4 h-4 fill-current" /> Watch on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
