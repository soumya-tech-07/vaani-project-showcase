"use client";

import { useRef, type MouseEvent } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import HeroBackground from "@/components/ui/hero-17-utils/HeroBackground";
import { HeroHandwriting, HeroReveal } from "@/components/product/ProjectHeroAnimation";

const heroPhrases = [
  "A page that works.",
  "Ready to publish.",
  "Made for coaches.",
];

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
      className="relative isolate w-full overflow-hidden py-8 text-left sm:py-10 lg:py-12"
    >
      <HeroBackground />
      {!reduceMotion && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 z-20 hidden h-14 w-14 border border-black/45 bg-white/10 mix-blend-multiply md:block"
          style={{ x: smoothCursorX, y: smoothCursorY, opacity: cursorOpacity }}
        />
      )}
      <HeroReveal className="relative z-10 w-full">
        <p className="mb-6 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-[#525252] sm:text-xs">
          FunnelForCoach / AI for coaching professionals
        </p>
        <h1
          id="ffc-title"
          className="max-w-3xl text-balance font-serif text-[clamp(2.7rem,5.5vw,5.8rem)] leading-[0.94] tracking-[-0.055em] text-black"
        >
          Your coaching idea.
          <HeroHandwriting
            words={heroPhrases}
            height={72}
            className="mt-2 h-[4.5rem] w-full max-w-[520px]"
          />
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-[#525252] sm:text-lg">
          Tell us what you help people do. We&apos;ll create your starting
          point, ready for your voice, your domain, and your next client.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="#ffc-cta"
            className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border-2 border-[#2838D8] bg-[#2838D8] px-6 py-3 text-xs font-semibold text-white transition-colors hover:border-[#7C2EDB] hover:bg-[#7C2EDB] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#2838D8]"
          >
            CREATE YOUR LANDING PAGE <span aria-hidden="true">→</span>
          </a>
          <a
            href="#ffc-workflow"
            className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border-2 border-[#2838D8] bg-white px-6 py-3 text-xs font-semibold text-[#2838D8] transition-colors hover:bg-[#EEF0FF] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#2838D8]"
          >
            SEE HOW IT WORKS
          </a>
        </div>
      </HeroReveal>
    </section>
  );
}
