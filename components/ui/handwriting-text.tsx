"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { useReducedMotion } from "framer-motion";

type Glyph = { d: string; delay: number };
type Phrase = { glyphs: Glyph[]; width: number };
type OpenTypeFont = {
  getAdvanceWidth: (text: string, fontSize: number) => number;
  getPath: (text: string, x: number, y: number, fontSize: number) => { toPathData: (decimalPlaces?: number) => string };
};
type OpenType = { load: (url: string, callback: (error: Error | null, font?: OpenTypeFont) => void) => void };

declare global {
  interface Window {
    opentype?: OpenType;
  }
}

const openTypeUrl = "https://cdn.jsdelivr.net/npm/opentype.js@1.3.4/dist/opentype.min.js";
const fontCache = new Map<string, Promise<OpenTypeFont>>();
let openTypePromise: Promise<OpenType> | null = null;

function loadOpenType(): Promise<OpenType> {
  const loadedOpenType = (window as unknown as { opentype?: OpenType }).opentype;
  if (loadedOpenType) return Promise.resolve(loadedOpenType);
  if (!openTypePromise) {
    openTypePromise = new Promise<OpenType>((resolve, reject) => {
      const existing = document.querySelector<HTMLScriptElement>(`script[src="${openTypeUrl}"]`);
      const script = existing ?? document.createElement("script");
      const onLoad = () => {
        const opentype = (window as unknown as { opentype?: OpenType }).opentype;
        if (opentype) resolve(opentype);
        else reject(new Error("opentype.js did not initialize"));
      };
      const onError = () => reject(new Error("opentype.js failed to load"));
      script.addEventListener("load", onLoad, { once: true });
      script.addEventListener("error", onError, { once: true });
      if (!existing) {
        script.src = openTypeUrl;
        script.async = true;
        document.head.appendChild(script);
      }
    }).catch((error: unknown) => {
      openTypePromise = null;
      throw error;
    });
  }
  return openTypePromise ?? Promise.reject(new Error("opentype.js failed to initialize"));
}

function loadFont(fontUrl: string): Promise<OpenTypeFont> {
  const cached = fontCache.get(fontUrl);
  if (cached) return cached;
  const promise = loadOpenType().then((opentype) => new Promise<OpenTypeFont>((resolve, reject) => {
    opentype.load(fontUrl, (error, font) => error || !font ? reject(error ?? new Error("Font failed to load")) : resolve(font));
  }));
  fontCache.set(fontUrl, promise);
  promise.catch(() => fontCache.delete(fontUrl));
  return promise;
}

function makePhrase(font: OpenTypeFont, word: string, height: number, duration: number): Phrase {
  const fontSize = height * 0.76;
  const baseline = height * 0.8;
  let x = 0;
  let visibleIndex = 0;
  const glyphs: Glyph[] = [];
  for (const character of word) {
    const advance = font.getAdvanceWidth(character, fontSize);
    if (character.trim()) {
      const path = font.getPath(character, x, baseline, fontSize).toPathData(2);
      glyphs.push({ d: path, delay: visibleIndex * Math.min(0.055, duration / Math.max(word.length, 1)) });
      visibleIndex += 1;
    }
    x += advance;
  }
  return { glyphs, width: Math.max(x, fontSize) };
}

export interface HandwritingTextProps {
  words: string[];
  interval?: number;
  fontUrl?: string;
  duration?: number;
  delay?: number;
  strokeWidth?: number;
  fill?: string;
  height?: number;
  className?: string;
}

export function HandwritingText({
  words,
  interval = 4300,
  fontUrl = "https://raw.githubusercontent.com/google/fonts/main/ofl/caveat/Caveat%5Bwght%5D.ttf",
  duration = 1.7,
  delay = 0.05,
  strokeWidth = 1.35,
  fill = "#2199ED",
  height = 108,
  className,
}: HandwritingTextProps) {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [phrases, setPhrases] = useState<Phrase[] | null>(null);
  const current = words[activeIndex] ?? words[0] ?? "";

  useEffect(() => {
    if (!words.length || reduceMotion) return;
    let cancelled = false;
    loadFont(fontUrl)
      .then((font) => {
        if (!cancelled) setPhrases(words.map((word) => makePhrase(font, word, height, duration)));
      })
      .catch(() => {
        if (!cancelled) setPhrases(null);
      });
    return () => { cancelled = true; };
  }, [duration, fontUrl, height, reduceMotion, words]);

  useEffect(() => {
    if (reduceMotion || words.length < 2) return;
    const timer = window.setInterval(() => setActiveIndex((index) => (index + 1) % words.length), interval);
    return () => window.clearInterval(timer);
  }, [interval, reduceMotion, words.length]);

  if (reduceMotion || !phrases) {
    return <span className={className} aria-live="polite">{current}</span>;
  }

  const phrase = phrases[activeIndex] ?? phrases[0];
  const viewHeight = height;
  const viewWidth = Math.max(...phrases.map((item) => item.width));
  const glyphDuration = duration * 0.42;
  const phraseStyle = { "--draw-duration": `${glyphDuration}s`, "--draw-delay": `${delay}s` } as CSSProperties;

  return (
    <svg key={current} className={className} role="img" aria-label={current} viewBox={`0 0 ${viewWidth} ${viewHeight}`} preserveAspectRatio="xMinYMid meet" xmlns="http://www.w3.org/2000/svg">
      <style>{`@keyframes mastreach-write { to { stroke-dashoffset: 0; } } @keyframes mastreach-ink { to { fill-opacity: 1; } } .mastreach-glyph { fill: ${fill}; fill-opacity: 0; stroke: ${fill}; stroke-width: ${strokeWidth}; stroke-linecap: round; stroke-linejoin: round; stroke-dasharray: 1; stroke-dashoffset: 1; animation: mastreach-write var(--draw-duration) ease-in-out var(--glyph-delay) both, mastreach-ink .3s ease var(--ink-delay) both; } @media (prefers-reduced-motion: reduce) { .mastreach-glyph { animation: none; fill-opacity: 1; stroke: none; } }`}</style>
      {phrase.glyphs.map((glyph, index) => <path key={`${activeIndex}-${index}`} className="mastreach-glyph" d={glyph.d} pathLength="1" style={{ ...phraseStyle, "--glyph-delay": `${glyph.delay}s`, "--ink-delay": `${delay + glyph.delay + glyphDuration * 0.72}s` } as CSSProperties} />)}
    </svg>
  );
}
