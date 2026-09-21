"use client";

import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useState } from "react";
import { AnimatePresence, motion, type AnimatePresenceProps, type MotionProps, type Transition } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRotateProps extends MotionProps {
  texts: string[];
  rotationInterval?: number;
  animatePresenceMode?: AnimatePresenceProps["mode"];
  animatePresenceInitial?: boolean;
  staggerDuration?: number;
  staggerFrom?: "first" | "last" | "center" | number | "random";
  transition?: Transition;
  loop?: boolean;
  auto?: boolean;
  splitBy?: "words" | "characters" | "lines" | string;
  onNext?: (index: number) => void;
  mainClassName?: string;
  splitLevelClassName?: string;
  elementLevelClassName?: string;
}

export interface TextRotateRef {
  next: () => void;
  previous: () => void;
  jumpTo: (index: number) => void;
  reset: () => void;
}

export const TextRotate = forwardRef<TextRotateRef, TextRotateProps>(function TextRotate(
  {
    texts,
    transition = { type: "spring", damping: 25, stiffness: 300 },
    initial = { y: "100%", opacity: 0 },
    animate = { y: 0, opacity: 1 },
    exit = { y: "-120%", opacity: 0 },
    animatePresenceMode = "wait",
    animatePresenceInitial = false,
    rotationInterval = 2400,
    staggerDuration = 0.012,
    staggerFrom = "first",
    loop = true,
    auto = true,
    splitBy = "characters",
    onNext,
    mainClassName,
    splitLevelClassName,
    elementLevelClassName,
    ...props
  },
  ref,
) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const currentText = texts[currentTextIndex] ?? "";

  const elements = useMemo(() => {
    if (splitBy === "lines") return currentText.split("\n");
    if (splitBy === "words") return currentText.split(" ");
    return Array.from(currentText);
  }, [currentText, splitBy]);

  const delayFor = useCallback((index: number, length: number) => {
    if (staggerFrom === "first") return index * staggerDuration;
    if (staggerFrom === "last") return (length - 1 - index) * staggerDuration;
    if (staggerFrom === "center") return Math.abs(Math.floor(length / 2) - index) * staggerDuration;
    if (staggerFrom === "random") return Math.abs(Math.floor(Math.random() * length) - index) * staggerDuration;
    return Math.abs(staggerFrom - index) * staggerDuration;
  }, [staggerDuration, staggerFrom]);

  const jumpTo = useCallback((index: number) => {
    const nextIndex = Math.max(0, Math.min(index, texts.length - 1));
    setCurrentTextIndex(nextIndex);
    onNext?.(nextIndex);
  }, [onNext, texts.length]);

  const next = useCallback(() => {
    const nextIndex = currentTextIndex === texts.length - 1 ? (loop ? 0 : currentTextIndex) : currentTextIndex + 1;
    if (nextIndex !== currentTextIndex) jumpTo(nextIndex);
  }, [currentTextIndex, jumpTo, loop, texts.length]);

  const previous = useCallback(() => {
    const previousIndex = currentTextIndex === 0 ? (loop ? texts.length - 1 : 0) : currentTextIndex - 1;
    if (previousIndex !== currentTextIndex) jumpTo(previousIndex);
  }, [currentTextIndex, jumpTo, loop, texts.length]);

  useImperativeHandle(ref, () => ({ next, previous, jumpTo, reset: () => jumpTo(0) }), [jumpTo, next, previous]);

  useEffect(() => {
    if (!auto || texts.length < 2) return;
    const timer = window.setInterval(next, rotationInterval);
    return () => window.clearInterval(timer);
  }, [auto, next, rotationInterval, texts.length]);

  return (
    <motion.span className={cn("inline-flex overflow-hidden align-bottom", mainClassName)} layout transition={transition} {...props}>
      <span className="sr-only">{currentText}</span>
      <AnimatePresence mode={animatePresenceMode} initial={animatePresenceInitial}>
        <motion.span key={currentTextIndex} className={cn("inline-flex", splitBy === "lines" && "flex-col", splitLevelClassName)} aria-hidden="true" layout>
          {elements.map((element, index) => (
            <motion.span key={`${element}-${index}`} className={cn("inline-block", elementLevelClassName)} initial={initial} animate={animate} exit={exit} transition={{ ...transition, delay: delayFor(index, elements.length) }}>
              {element}{splitBy === "words" && index < elements.length - 1 ? "\u00A0" : ""}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
});

TextRotate.displayName = "TextRotate";
