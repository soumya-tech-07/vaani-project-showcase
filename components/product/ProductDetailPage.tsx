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
import { ProductInboxShowcase } from "./ProductInboxShowcase";
import { ProductLeadManagement } from "./ProductLeadManagement";
import { ProductContactManagement } from "./ProductContactManagement";
import { ProductCrmShowcase } from "./ProductCrmShowcase";

interface ProductDetailPageProps {
  product: Product;
}

export function ProductDetailPage({ product }: ProductDetailPageProps) {
  if (product.showcase === 'crm') {
    return <ProductCrmShowcase product={product} />;
  }

  const theme = product.theme ?? {
    primary: '#336C85', secondary: '#66736B', background: '#F7F9F8', text: '#17211B',
    accent: '#128C7E', border: '#E2E8E4', highlight: '#E8F8EE', surface: '#FFFFFF',
  };
  const sections = product.sections ?? ['hero', 'story', 'features', 'gallery', 'tech', 'cta'];

  const themeStyles = {
    '--project-bg': theme.background,
    '--project-primary': theme.primary,
    '--project-secondary': theme.secondary,
    '--project-text': theme.text,
    '--project-accent': theme.accent,
    '--project-border': theme.border,
    '--project-highlight': theme.highlight,
    '--project-surface': theme.surface || '#FFFFFF',
    '--project-soft-green': theme.highlight,
  } as React.CSSProperties;

  const renderSection = (section: string) => {
    switch (section) {
      case 'hero': return <ProductHero product={product} />;
      case 'preview': return <ProductPreview product={product} />;
      case 'story': return <ProductStory product={product} />;
      case 'demo': return <ProductDemo product={product} />;
      case 'features': return <ProductFeatures product={product} />;
      case 'gallery': return <ProductGallery product={product} />;
      case 'journey': return <ProductJourney product={product} />;
      case 'process': return <ProductProcess product={product} />;
      case 'tech': return <ProductTech product={product} />;
      case 'cta': return <ProductCTA product={product} />;
      case 'inbox': return <ProductInboxShowcase product={product} />;
      case 'leads': return <ProductLeadManagement product={product} />;
      case 'contacts': return <ProductContactManagement product={product} />;
      default: return null;
    }
  };

  return (
    <div
      className="case-study-shell min-h-screen text-[var(--project-text)] selection:bg-[var(--project-primary)] selection:text-white"
      style={{
        backgroundColor: 'var(--project-bg)',
        ...themeStyles
      }}
    >
      <ProductNav title={product.title} liveUrl={product.liveUrl} />

      <div className="flex flex-col">
        {sections.map((section, index) => (
          <React.Fragment key={`${section}-${index}`}>
            {renderSection(section)}
          </React.Fragment>
        ))}
      </div>

      <footer className="py-12 px-6 border-t border-[var(--project-border)] bg-[var(--project-surface)] text-center">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[var(--project-text)] font-bold text-xl tracking-tighter">
            ProjectShowcase
          </div>
          <div className="flex gap-8 text-[var(--project-secondary)] text-sm font-medium">
            <a href="/" className="hover:text-[var(--project-text)] transition-colors">Products</a>
            <a href="#" className="hover:text-[var(--project-primary)] transition-colors">About</a>
            <a href="#" className="hover:text-[var(--project-primary)] transition-colors">Contact</a>
          </div>
          <div className="text-[var(--project-secondary)] text-xs font-mono">
            © 2024 ProjectShowcase. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
