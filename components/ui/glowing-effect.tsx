"use client"

import { memo, useCallback, useEffect, useRef } from "react"

interface GlowingEffectProps {
  blur?: number
  inactiveZone?: number
  proximity?: number
  spread?: number
  glow?: boolean
  className?: string
  disabled?: boolean
  borderWidth?: number
}

export const GlowingEffect = memo(function GlowingEffect({
  blur = 0,
  inactiveZone = 0.7,
  proximity = 0,
  spread = 20,
  glow = false,
  className,
  disabled = true,
  borderWidth = 1,
}: GlowingEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<number | null>(null)
  const positionRef = useRef({ x: 0, y: 0 })

  const updateGlow = useCallback(
    (x = positionRef.current.x, y = positionRef.current.y) => {
      const element = containerRef.current
      if (!element) return

      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current)
      }

      frameRef.current = requestAnimationFrame(() => {
        const bounds = element.getBoundingClientRect()
        const centerX = bounds.left + bounds.width / 2
        const centerY = bounds.top + bounds.height / 2
        const distance = Math.hypot(x - centerX, y - centerY)
        const inactiveRadius = Math.min(bounds.width, bounds.height) * inactiveZone / 2
        const isActive =
          distance >= inactiveRadius &&
          x >= bounds.left - proximity &&
          x <= bounds.right + proximity &&
          y >= bounds.top - proximity &&
          y <= bounds.bottom + proximity

        element.style.setProperty("--glow-active", isActive ? "1" : "0")
        if (isActive) {
          const angle = (Math.atan2(y - centerY, x - centerX) * 180) / Math.PI + 90
          element.style.setProperty("--glow-start", `${angle}deg`)
        }
      })
    },
    [inactiveZone, proximity],
  )

  useEffect(() => {
    if (disabled) return

    const handlePointerMove = (event: PointerEvent) => {
      positionRef.current = { x: event.clientX, y: event.clientY }
      updateGlow(event.clientX, event.clientY)
    }
    const handleScroll = () => updateGlow()

    document.body.addEventListener("pointermove", handlePointerMove, { passive: true })
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      document.body.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("scroll", handleScroll)
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current)
    }
  }, [disabled, updateGlow])

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`pointer-events-none absolute -inset-px overflow-hidden rounded-[inherit] transition-opacity duration-300 ${className ?? ""}`}
      style={
        {
          "--glow-active": "0",
          "--glow-start": "0deg",
          "--glow-spread": `${spread}deg`,
          "--glow-blur": `${blur}px`,
          "--glow-border-width": `${borderWidth}px`,
          background: `conic-gradient(from var(--glow-start), transparent 0deg, rgba(40, 56, 216, 0.95) var(--glow-spread), rgba(124, 46, 219, 0.7) calc(var(--glow-spread) * 2), transparent calc(var(--glow-spread) * 3))`,
          opacity: "var(--glow-active)",
          filter: "blur(var(--glow-blur))",
        } as React.CSSProperties
      }
    >
      <div
        className="absolute rounded-[inherit] bg-white"
        style={{ inset: "var(--glow-border-width)" }}
      />
    </div>
  )
})

GlowingEffect.displayName = "GlowingEffect"
