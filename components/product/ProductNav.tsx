"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

interface ProductNavProps {
  title: string;
  liveUrl: string;
}

export function ProductNav({ title, liveUrl }: ProductNavProps) {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-5 text-[var(--project-text)] md:px-8">
      <div className="flex items-center gap-4">
        <Link
          href="/"
          className="group flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.04em] text-[var(--project-secondary)] transition-colors hover:text-[var(--project-primary)]"
        >
          <span className="flex h-3.5 w-3.5 items-end justify-center border-l border-b border-[var(--project-primary)] pb-0.5">
            <span className="h-1 w-1 bg-[var(--project-primary)]" />
          </span>
          Case UI/UX
        </Link>
      </div>

      <div className="flex items-center gap-6">
        <span className="hidden text-[11px] font-medium uppercase tracking-[0.04em] text-[var(--project-secondary)] md:block">
          Kris Anfalova <span className="ml-1 text-base leading-none text-[var(--project-accent)]">♥</span>
        </span>
        {liveUrl !== '#' && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-[var(--project-primary)] px-4 py-2 text-xs font-semibold text-white shadow-sm transition-transform hover:scale-105 sm:flex"
          >
            Visit {title}
            <ArrowUpRight className="w-4 h-4" />
          </a>
        )}
      </div>
    </nav>
  );
}
