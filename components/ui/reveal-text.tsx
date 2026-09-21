"use client";

import { useRef } from "react";
import type { CSSProperties, ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";

export function cn(...inputs: (string | number | boolean | undefined | null)[]): string {
  return inputs
    .filter((value): value is string => typeof value === "string" && value.trim().length > 0)
    .join(" ");
}

export function splitTextIntoWords(input: string): string[] {
  if (!input) return [];
  return input.trim().split(/\s+/);
}

export function getFontSize(size: string = "display"): string {
  switch (size) {
    case "sm":
      return "clamp(0.875rem, 1.5vw, 1.125rem)";
    case "base":
      return "clamp(1rem, 2vw, 1.375rem)";
    case "lg":
      return "clamp(1.375rem, 3vw, 2rem)";
    case "xl":
      return "clamp(1.75rem, 4vw, 2.75rem)";
    case "2xl":
    case "display":
      return "clamp(2rem, 5vw, 4rem)";
    case "huge":
      return "clamp(2.5rem, 7vw, 5.5rem)";
    default:
      return size;
  }
}

export function getLineHeight(size: string = "display"): number {
  switch (size) {
    case "sm":
      return 1.6;
    case "base":
      return 1.5;
    case "lg":
      return 1.35;
    default:
      return 1.2;
  }
}

export function createRevealVariants({
  stagger = 0.045,
  delay = 0,
  duration = 0.8,
  yOffset = 24,
  blur = 10,
}: {
  stagger?: number;
  delay?: number;
  duration?: number;
  yOffset?: number;
  blur?: number | string;
}) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  const childVariants: Variants = {
    hidden: {
      opacity: 0,
      y: yOffset,
      filter: typeof blur === "number" ? `blur(${blur}px)` : `blur(${blur})`,
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  return { containerVariants, childVariants };
}

export interface RevealTextProps {
  text?: string;
  children?: ReactNode;
  className?: string;
  size?: "sm" | "base" | "lg" | "xl" | "2xl" | "display" | "huge" | (string & {});
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  delay?: number;
  duration?: number;
  stagger?: number;
  yOffset?: number;
  blur?: number | string;
  once?: boolean;
  viewportMargin?: string;
  style?: CSSProperties;
}

const motionElements = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  p: motion.p,
  span: motion.span,
  div: motion.div,
} as const;

export const RevealText = ({
  text,
  children,
  className,
  size = "display",
  as = "h2",
  delay = 0,
  duration = 0.8,
  stagger = 0.045,
  yOffset = 24,
  blur = 10,
  once = true,
  viewportMargin = "-10% 0px",
  style,
}: RevealTextProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once, margin: viewportMargin as `${number}${"px" | "%"} ${number}${"px" | "%"}` });
  const rawText = typeof children === "string" ? children : text || "";
  const words = splitTextIntoWords(rawText);
  const { containerVariants, childVariants } = createRevealVariants({ stagger, delay, duration, yOffset, blur });
  const MotionComponent = motionElements[as] || motion.h2;

  return (
    <MotionComponent
      ref={ref as never}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={cn("w-full", className)}
      style={{ fontSize: getFontSize(size), lineHeight: getLineHeight(size), ...style }}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          variants={childVariants}
          style={{ display: "inline-block", marginRight: "0.24em", willChange: "transform, opacity, filter" }}
        >
          {word}
        </motion.span>
      ))}
    </MotionComponent>
  );
};

export default RevealText;