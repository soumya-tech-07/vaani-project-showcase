"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface ResizableNavItem {
  name: string;
  link: string;
}

export function ResizableNavbar({ children, className, onScrollChange }: { children: React.ReactNode; className?: string; onScrollChange?: (visible: boolean) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const nextVisible = latest > 100;
    setVisible(nextVisible);
    onScrollChange?.(nextVisible);
  });

  return (
    <motion.div ref={ref} className={cn("fixed inset-x-0 top-0 z-50 w-full", className)}>
      {React.Children.map(children, (child) => React.isValidElement(child) ? React.cloneElement(child as React.ReactElement<{ visible?: boolean }>, { visible }) : child)}
    </motion.div>
  );
}

export function ResizableNavBody({ children, className, visible = false }: { children: React.ReactNode; className?: string; visible?: boolean }) {
  return (
    <motion.div
      animate={{ backdropFilter: visible ? "blur(12px)" : "blur(0px)", boxShadow: visible ? "0 18px 50px rgba(0,0,0,0.28)" : "0 0 0 rgba(0,0,0,0)", width: visible ? "min(92%, 58rem)" : "100%", y: visible ? 12 : 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 50 }}
      className={cn("relative mx-auto hidden min-h-16 flex-row items-center justify-between rounded-full border border-transparent bg-[#080808]/80 px-4 py-2 lg:flex", visible && "border-[#242424] bg-[#101010]/90", className)}
    >
      {children}
    </motion.div>
  );
}

export function ResizableNavItems({ items, className, onItemClick }: { items: ResizableNavItem[]; className?: string; onItemClick?: () => void }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div onMouseLeave={() => setHovered(null)} className={cn("absolute inset-0 hidden flex-1 flex-row items-center justify-center gap-1 text-sm font-medium text-[#a0a0a0] lg:flex", className)}>
      {items.map((item, index) => <Link key={item.name} href={item.link} onMouseEnter={() => setHovered(index)} onClick={onItemClick} className="relative rounded-full px-4 py-2 transition-colors hover:text-white">{hovered === index && <motion.span layoutId="resizable-nav-hover" className="absolute inset-0 rounded-full bg-[#171717]" />}<span className="relative z-10">{item.name}</span></Link>)}
    </motion.div>
  );
}

export function ResizableMobileNav({ children, className, visible = false }: { children: React.ReactNode; className?: string; visible?: boolean }) {
  return <motion.div animate={{ backdropFilter: visible ? "blur(12px)" : "blur(0px)", boxShadow: visible ? "0 18px 50px rgba(0,0,0,0.28)" : "0 0 0 rgba(0,0,0,0)", width: visible ? "94%" : "100%", y: visible ? 12 : 0 }} transition={{ type: "spring", stiffness: 200, damping: 50 }} className={cn("relative mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col bg-[#080808]/80 px-0 py-3 lg:hidden", visible && "rounded-2xl border border-[#242424] bg-[#101010]/95", className)}>{children}</motion.div>;
}

export function ResizableMobileNavHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("flex w-full flex-row items-center justify-between", className)}>{children}</div>;
}

export function ResizableMobileNavMenu({ children, className, isOpen, onClose }: { children: React.ReactNode; className?: string; isOpen: boolean; onClose: () => void }) {
  return <AnimatePresence>{isOpen && <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} onClick={onClose} className={cn("absolute inset-x-0 top-full z-50 flex flex-col items-start gap-3 overflow-hidden rounded-2xl border border-[#242424] bg-[#101010] px-4 py-5 shadow-[0_18px_50px_rgba(0,0,0,0.35)]", className)}>{children}</motion.div>}</AnimatePresence>;
}

export function ResizableMobileNavToggle({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
  return <button type="button" aria-label={isOpen ? "Close navigation" : "Open navigation"} onClick={onClick} className="rounded-lg p-2 text-white hover:bg-[#171717]">{isOpen ? <X size={20} /> : <Menu size={20} />}</button>;
}

export function ResizableNavbarLogo() {
  return <Link href="#top" className="relative z-20 flex items-center gap-3 px-2 py-1"><span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#b8ff00]/40 bg-[#b8ff00] text-sm font-bold text-[#080808]">V</span><span><span className="block text-sm font-semibold tracking-[0.18em] text-white">VAANI</span><span className="hidden text-[9px] uppercase tracking-[0.2em] text-[#707070] sm:block">by Rian Infotech</span></span></Link>;
}

export function ResizableNavbarButton({ href, children, className, onClick }: { href: string; children: React.ReactNode; className?: string; onClick?: () => void }) {
  return <Link href={href} onClick={onClick} className={cn("relative z-20 inline-flex items-center justify-center rounded-lg bg-[#b8ff00] px-4 py-2 text-xs font-semibold text-[#080808] transition-transform hover:-translate-y-0.5", className)}>{children}</Link>;
}