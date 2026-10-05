"use client";

import { useRef, type MouseEvent } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import HeroBackground from "@/components/ui/hero-17-utils/HeroBackground";

export default function Hero17() {
  const heroRef = useRef<HTMLElement>(null);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const smoothCursorX = useSpring(cursorX, { stiffness: 240, damping: 28, mass: 0.35 });
  const smoothCursorY = useSpring(cursorY, { stiffness: 240, damping: 28, mass: 0.35 });
  const cursorOpacity = useMotionValue(0);
  const reduceMotion = useReducedMotion();

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    if (!heroRef.current || reduceMotion) return;
    const bounds = heroRef.current.getBoundingClientRect();
    cursorX.set(event.clientX - bounds.left - 28);
    cursorY.set(event.clientY - bounds.top - 28);
    cursorOpacity.set(1);
  };

  return (
    <section
      ref={heroRef}
      aria-labelledby="ffc-title"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => cursorOpacity.set(0)}
      className="relative isolate w-full overflow-hidden border-y-4 border-black py-16 text-center sm:py-20 lg:py-24"
    >
      <HeroBackground />
      {!reduceMotion && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 z-20 hidden h-14 w-14 border border-black/45 bg-white/10 mix-blend-multiply md:block"
          style={{ x: smoothCursorX, y: smoothCursorY, opacity: cursorOpacity }}
        />
      )}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-8">
        <p className="mb-8 font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#525252]">
          FunnelForCoach / AI for coaching professionals
        </p>
        <h1
          id="ffc-title"
          className="mx-auto max-w-6xl text-balance font-serif text-[clamp(3.5rem,9vw,9rem)] leading-[0.91] tracking-[-0.055em] text-black"
        >
          Your coaching idea.
          <br />
          <span className="italic">A page that works.</span>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[#525252] sm:text-xl">
          Tell us what you help people do. We&apos;ll create your starting
          point, ready for your voice, your domain, and your next client.
        </p>
      </div>
    </section>
  );
}
