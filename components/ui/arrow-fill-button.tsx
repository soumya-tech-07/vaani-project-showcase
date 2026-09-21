"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState, type ComponentPropsWithoutRef, type CSSProperties, type PointerEvent } from "react";

const COMPACT_LAYOUT_BREAKPOINT = 1280;
const ANIMATION_DURATION_MS = 450;

export interface ArrowFillButtonOwnProps {
  btnText?: string;
  href?: string;
  className?: string;
  bgColor?: string;
  textColor?: string;
  fillBgColor?: string;
  fillTextColor?: string;
  hoverFillBgColor?: string;
  hoverFillTextColor?: string;
  arrowColor?: string;
  hoverArrowColor?: string;
}

export type ArrowFillButtonProps = ArrowFillButtonOwnProps & Omit<ComponentPropsWithoutRef<"a">, keyof ArrowFillButtonOwnProps>;

function ArrowFillButton({
  btnText = "View Product",
  href = "#",
  className = "",
  bgColor = "#080808",
  textColor = "#ffffff",
  fillBgColor = "#b8ff00",
  fillTextColor = "#080808",
  hoverFillBgColor = "#dfff80",
  hoverFillTextColor = "#080808",
  arrowColor,
  hoverArrowColor,
  ...props
}: ArrowFillButtonProps) {
  const [isReady, setIsReady] = useState(false);
  const [isCompactLayout, setIsCompactLayout] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const releaseTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setIsReady(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${COMPACT_LAYOUT_BREAKPOINT - 1}px)`);
    const syncCompactLayout = (event: MediaQueryList | MediaQueryListEvent) => setIsCompactLayout(event.matches);
    syncCompactLayout(mediaQuery);
    mediaQuery.addEventListener("change", syncCompactLayout);
    return () => mediaQuery.removeEventListener("change", syncCompactLayout);
  }, []);

  useEffect(() => () => {
    if (releaseTimeoutRef.current !== null) window.clearTimeout(releaseTimeoutRef.current);
  }, []);

  const releasePressedState = () => {
    if (releaseTimeoutRef.current !== null) window.clearTimeout(releaseTimeoutRef.current);
    releaseTimeoutRef.current = window.setTimeout(() => {
      setIsPressed(false);
      releaseTimeoutRef.current = null;
    }, ANIMATION_DURATION_MS);
  };

  const handlePointerDown = (event: PointerEvent<HTMLAnchorElement>) => {
    props.onPointerDown?.(event);
    if (isCompactLayout && event.pointerType !== "mouse") setIsPressed(true);
  };

  const handlePointerUp = (event: PointerEvent<HTMLAnchorElement>) => {
    props.onPointerUp?.(event);
    if (isCompactLayout && event.pointerType !== "mouse") releasePressedState();
  };

  const handlePointerCancel = (event: PointerEvent<HTMLAnchorElement>) => {
    props.onPointerCancel?.(event);
    if (isCompactLayout && event.pointerType !== "mouse") releasePressedState();
  };

  return (
    <a
      href={href}
      {...props}
      data-pressed={isPressed ? "true" : "false"}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
      className={`group relative inline-flex h-12 min-w-[12rem] cursor-pointer items-center justify-center overflow-hidden rounded-full border border-(--btn-bg) bg-(--btn-bg) px-6 pr-16 text-sm font-medium leading-none text-(--btn-text) ${isReady ? "transition-transform duration-200 hover:-translate-y-0.5" : ""} ${className}`}
      style={{
        "--btn-bg": bgColor,
        "--btn-text": textColor,
        "--btn-fill-bg": fillBgColor,
        "--btn-fill-text": fillTextColor,
        "--btn-fill-bg-hover": hoverFillBgColor,
        "--btn-fill-text-hover": hoverFillTextColor,
        "--btn-arrow": arrowColor || fillTextColor,
        "--btn-arrow-hover": hoverArrowColor || hoverFillTextColor,
        visibility: isReady ? "visible" : "hidden",
      } as CSSProperties & Record<string, string | number>}
    >
      <span className="relative z-[1]">{btnText}</span>
      <span aria-hidden="true" className={`pointer-events-none absolute z-[2] rounded-full bg-(--btn-fill-bg) inset-[calc((100%-var(--icon-circle,2.25rem))/2)_0.35rem_calc((100%-var(--icon-circle,2.25rem))/2)_calc(100%-0.35rem-var(--icon-circle,2.25rem))] [--icon-circle:2.25rem] ${isReady ? "transition-all duration-[450ms] ease-[cubic-bezier(0.785,0.135,0.15,0.86)] group-hover:bg-(--btn-fill-bg-hover) group-hover:inset-0 group-data-[pressed=true]:bg-(--btn-fill-bg-hover) group-data-[pressed=true]:inset-0" : ""}`} />
      <span aria-hidden="true" className={`pointer-events-none absolute inset-0 z-[2] flex items-center px-6 pr-16 text-(--btn-fill-text) [clip-path:inset(calc((100%-var(--icon-circle,2.25rem))/2)_0.35rem_calc((100%-var(--icon-circle,2.25rem))/2)_calc(100%-0.35rem-var(--icon-circle,2.25rem)))] [--icon-circle:2.25rem] ${isReady ? "transition-all duration-[450ms] ease-[cubic-bezier(0.785,0.135,0.15,0.86)] group-hover:text-(--btn-fill-text-hover) group-hover:[clip-path:inset(0_0_0_0)] group-data-[pressed=true]:text-(--btn-fill-text-hover) group-data-[pressed=true]:[clip-path:inset(0_0_0_0)]" : ""}`}>
        <span className="relative z-[1] whitespace-nowrap">{btnText}</span>
      </span>
      <span aria-hidden="true" className="pointer-events-none absolute right-1.5 top-1/2 z-[3] flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-(--btn-fill-bg) text-(--btn-arrow)">
        <ArrowRight className={`absolute size-5 ${isReady ? "transition-transform duration-[450ms] group-hover:translate-x-[70%] group-hover:scale-0" : ""}`} strokeWidth={1.8} />
        <ArrowRight className={`absolute size-5 -translate-x-[170%] scale-0 ${isReady ? "transition-transform duration-[450ms] group-hover:translate-x-0 group-hover:scale-100" : ""}`} strokeWidth={1.8} />
      </span>
    </a>
  );
}

export default ArrowFillButton;