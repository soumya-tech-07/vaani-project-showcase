"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductNavProps {
  title: string;
  liveUrl: string;
}

export function ProductNav({ title, liveUrl }: ProductNavProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full transition-all duration-300">
      <div className="flex items-center gap-4">
        <Link
          href="/"
          className="group flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Projects
        </Link>
      </div>

      <div className="flex items-center gap-6">
        <span className="hidden md:block text-text-muted text-sm font-mono uppercase tracking-widest">
          Case Study / {title}
        </span>
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-accent-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all hover:scale-105 shadow-lg shadow-accent-primary/20"
        >
          Visit Product
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </nav>
  );
}
