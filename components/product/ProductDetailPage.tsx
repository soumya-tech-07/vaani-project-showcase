"use client";

import React from "react";
import { Product } from "@/data/products";
import { ProductNav } from "./ProductNav";
import { ProductHero } from "./ProductHero";
import { ProductPreview } from "./ProductPreview";
import { ProductStory } from "./ProductStory";
import { ProductDemo } from "./ProductDemo";
import { ProductFeatures } from "./ProductFeatures";
import { ProductGallery } from "./ProductGallery";
import { ProductJourney } from "./ProductJourney";
import { ProductProcess } from "./ProductProcess";
import { ProductTech } from "./ProductTech";
import { ProductCTA } from "./ProductCTA";

interface ProductDetailPageProps {
  product: Product;
}

export function ProductDetailPage({ product }: ProductDetailPageProps) {
  return (
    <div className="case-study-shell min-h-screen bg-[#588094] text-[#2B3128] selection:bg-[#336C85] selection:text-white">
      <ProductNav title={product.title} liveUrl={product.liveUrl} />

      <div className="flex flex-col">
        <ProductHero product={product} />
        <ProductPreview product={product} />
        <ProductStory product={product} />
        <ProductDemo product={product} />
        <ProductFeatures product={product} />
        <ProductGallery product={product} />
        <ProductJourney product={product} />
        <ProductProcess product={product} />
        <ProductTech product={product} />
        <ProductCTA product={product} />
      </div>

      <footer className="py-12 px-6 border-t border-border-premium bg-bg-secondary text-center">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-text-primary font-bold text-xl tracking-tighter">
            ProjectShowcase
          </div>
          <div className="flex gap-8 text-text-muted text-sm font-medium">
            <a href="/" className="hover:text-text-primary transition-colors">Products</a>
            <a href="#" className="hover:text-primary transition-colors">About</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <div className="text-text-muted text-xs font-mono">
            © 2024 ProjectShowcase. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
