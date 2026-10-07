"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { HandwritingText } from "@/components/ui/handwriting-text";

interface HeroRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

interface HeroHandwritingProps {
  words: string[];
  height?: number;
  className?: string;
}

export function HeroReveal({
  children,
  className,
  delay = 0,
  y = 16,
}: HeroRevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function HeroHandwriting({
  words,
  height = 88,
  className,
}: HeroHandwritingProps) {
  return (
    <HandwritingText
      words={words}
      interval={4300}
      duration={1.7}
      delay={0.05}
      strokeWidth={1.35}
      fill="#2838D8"
      height={height}
      className={className}
    />
  );
}
