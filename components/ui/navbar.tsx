"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface NavbarItem {
  name: string;
  link: string;
}

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
  onVisibilityChange?: (visible: boolean) => void;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
  expanded?: boolean;
}

interface NavItemsProps {
  items: NavbarItem[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export function Navbar({ children, className, onVisibilityChange }: NavbarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const nextVisible = latest > 100;
    setVisible(nextVisible);
    onVisibilityChange?.(nextVisible);
  });

  return (
    <motion.div ref={ref} className={cn("fixed inset-x-0 top-0 z-50 w-full", className)}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<{ visible?: boolean }>, { visible })
          : child,
      )}
    </motion.div>
  );
}

export function NavBody({ children, className, visible = false, expanded = false }: NavBodyProps) {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(12px)" : "blur(0px)",
        boxShadow: visible ? "0 12px 35px rgba(17, 17, 17, 0.08)" : "0 0 0 rgba(17, 17, 17, 0)",
        width: expanded ? "100%" : "min(94%, 34rem)",
        y: visible ? 12 : 0,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 50 }}
      className={cn(
        "relative mx-auto hidden min-h-16 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 rounded-full border border-transparent px-4 py-2 lg:grid",
        visible && "border-[#dfe5d7] bg-[#f6f7f2]/90",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}

export function NavItems({ items, className, onItemClick }: NavItemsProps) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn("flex min-w-0 flex-row items-center justify-center gap-1 text-sm font-medium text-[#5d5d5d]", className)}
    >
      {items.map((item, index) => (
        <Link
          key={item.name}
          href={item.link}
          onMouseEnter={() => setHovered(index)}
          onClick={onItemClick}
          className="relative rounded-full px-4 py-2 transition-colors hover:text-[#111111]"
        >
          {hovered === index && <motion.span layoutId="vaani-nav-hover" className="absolute inset-0 rounded-full bg-[#edf2e7]" />}
          <span className="relative z-10">{item.name}</span>
        </Link>
      ))}
    </motion.div>
  );
}

export function MobileNav({ children, className, visible = false }: MobileNavProps) {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(12px)" : "blur(0px)",
        boxShadow: visible ? "0 12px 35px rgba(17, 17, 17, 0.08)" : "0 0 0 rgba(17, 17, 17, 0)",
        width: visible ? "94%" : "100%",
        y: visible ? 12 : 0,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 50 }}
      className={cn("relative mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col bg-transparent px-0 py-3 lg:hidden", visible && "rounded-2xl border border-[#dfe5d7] bg-[#f6f7f2]/90", className)}
    >
      {children}
    </motion.div>
  );
}

export function MobileNavHeader({ children, className }: MobileNavHeaderProps) {
  return <div className={cn("flex w-full flex-row items-center justify-between", className)}>{children}</div>;
}

export function MobileNavMenu({ children, className, isOpen, onClose }: MobileNavMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className={cn("absolute inset-x-0 top-full z-50 flex flex-col items-start gap-2 overflow-hidden rounded-2xl border border-[#dfe5d7] bg-white px-4 py-4 shadow-[0_12px_35px_rgba(17,17,17,0.08)]", className)}
          onClick={onClose}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function MobileNavToggle({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
  return (
    <button type="button" aria-label={isOpen ? "Close navigation" : "Open navigation"} onClick={onClick} className="rounded-lg p-2 text-[#111111]">
      {isOpen ? <X size={21} /> : <Menu size={21} />}
    </button>
  );
}

export function NavbarLogo() {
  return (
    <Link href="#" className="relative z-20 flex items-center gap-3 px-2 py-1">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#b8ff00]/40 bg-[#edf7d0] text-sm font-semibold tracking-[0.2em] text-[#0d0d0d]">V</span>
      <span>
        <span className="block text-lg font-semibold tracking-[0.22em] text-[#111111]">VAANI</span>
        <span className="block text-[9px] uppercase tracking-[0.2em] text-[#5d5d5d]">by Rian Infotech</span>
      </span>
    </Link>
  );
}

export function NavbarButton({ href, children, className, onClick }: { href: string; children: React.ReactNode; className?: string; onClick?: () => void }) {
  return <Link href={href} onClick={onClick} className={cn("relative z-20 inline-flex items-center justify-center rounded-lg bg-[#b8ff00] px-4 py-2 text-sm font-medium text-[#080808] shadow-[0_0_24px_rgba(184,255,0,0.18)] transition-transform hover:-translate-y-0.5", className)}>{children}</Link>;
}

export function DesktopNavToggle({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-label={isOpen ? "Collapse navigation" : "Expand navigation"}
      aria-expanded={isOpen}
      onClick={onClick}
      className="relative z-20 rounded-lg p-2 text-[#111111] transition-colors hover:bg-[#edf2e7]"
    >
      {isOpen ? <X size={19} /> : <Menu size={19} />}
    </button>
  );
}