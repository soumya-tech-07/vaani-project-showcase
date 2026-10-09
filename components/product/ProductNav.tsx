"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";

export interface ProductNavLink {
  label: string;
  href: string;
}

interface ProductNavProps {
  title: string;
  liveUrl: string;
  links?: ProductNavLink[];
  actionLabel?: string;
  actionHref?: string;
}

const defaultLinks: ProductNavLink[] = [
  { label: "Product", href: "#product-story" },
  { label: "Workflow", href: "#product-process" },
  { label: "Products", href: "/#products" },
];

export function ProductNav({
  title,
  liveUrl,
  links = defaultLinks,
  actionLabel,
  actionHref,
}: ProductNavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const hasLiveDestination = liveUrl !== "#";
  const href =
    actionHref ??
    (hasLiveDestination
      ? liveUrl
      : `mailto:hello@rianinfotech.com?subject=${encodeURIComponent(`Ask about ${title}`)}`);
  const label =
    actionLabel ??
    (hasLiveDestination ? `Explore ${title}` : "Talk to us");
  const external = href.startsWith("http");

  return (
    <header className="relative z-50 grid w-full grid-cols-[1fr_auto_auto] items-center gap-x-3 border-b border-[#111827]/10 px-5 py-5 text-[#111827] sm:grid-cols-[1fr_auto_1fr] sm:px-8 lg:px-12">
      <Link
        href="#top"
        className="justify-self-start font-serif text-xl font-semibold tracking-[-0.04em] text-[#111827]"
        aria-label={`${title} home`}
      >
        {title.toLowerCase()}
        <span className="text-[#2838D8]">.</span>
      </Link>

      <nav
        aria-label={`${title} page navigation`}
        className="hidden items-center gap-8 font-mono text-[9px] uppercase tracking-[0.15em] text-[#111827]/55 sm:flex"
      >
        {links.map((link) => (
          <a
            key={`${link.label}-${link.href}`}
            href={link.href}
            className="whitespace-nowrap transition-colors hover:text-[#2838D8]"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className="inline-flex min-h-11 items-center justify-self-end gap-2 rounded-full border-2 border-[#111827] px-4 py-2 text-[10px] font-semibold text-[#111827] transition-colors hover:bg-[#EEF0FF] sm:px-5"
      >
        <span className="whitespace-nowrap">{label}</span>
        {external ? (
          <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
        ) : (
          <ArrowRight className="h-3.5 w-3.5 shrink-0" />
        )}
      </a>
      <button
        type="button"
        aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen((open) => !open)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#111827] text-[#111827] transition-colors hover:bg-[#EEF0FF] sm:hidden"
      >
        {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </button>
      {mobileOpen && (
        <nav
          aria-label={`${title} mobile navigation`}
          className="col-span-full flex flex-col border-t border-[#111827]/10 pt-3 font-mono text-[10px] uppercase tracking-[0.15em] text-[#111827]/65 sm:hidden"
        >
          {links.map((link) => (
            <a
              key={`mobile-${link.label}-${link.href}`}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="border-b border-[#111827]/10 py-3 transition-colors hover:text-[#2838D8]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
