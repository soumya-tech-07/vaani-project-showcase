"use client";

import { Product } from "@/data/products";
import { EditorialCTA } from "./EditorialCTA";

interface ProductCTAProps {
  product: Product;
}

export function ProductCTA({ product }: ProductCTAProps) {
  const primaryHref = product.CTA?.primaryUrl || product.liveUrl;
  const secondaryHref = product.CTA?.secondaryUrl;

  return (
    <EditorialCTA
      eyebrow={`Next step / ${product.category}`}
      title={`Make ${product.title} part of your workflow.`}
      description={product.shortDescription}
      primaryLabel={product.CTA?.primaryText || "Explore product"}
      primaryHref={primaryHref}
      secondaryLabel={product.CTA?.secondaryText}
      secondaryHref={secondaryHref}
      wordmark={product.title}
      primaryExternal={primaryHref.startsWith("http")}
    />
  );
}
