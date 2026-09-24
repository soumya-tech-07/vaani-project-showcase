"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { CSSProperties, ElementType } from "react"

interface DiaTextRevealProps {
  text: string
  as?: ElementType
  className?: string
  colors?: string[]
  textColor?: string
  delay?: number
  duration?: number
}

const defaultColors = ["#2838D8", "#7C2EDB", "#B9ADFF"]

export function DiaTextReveal({
  text,
  as = "span",
  className,
  colors = defaultColors,
  textColor = "currentColor",
  delay = 0,
  duration = 1.2,
}: DiaTextRevealProps) {
  const prefersReducedMotion = useReducedMotion()
  const MotionComponent = motion.create(as)
  const gradient = `linear-gradient(90deg, ${textColor} 0%, ${textColor} 32%, ${colors.join(", ")} 50%, ${textColor} 68%, ${textColor} 100%)`

  const style = {
    color: textColor,
    backgroundImage: gradient,
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundSize: "300% 100%",
  } as CSSProperties

  return (
    <MotionComponent
      className={className}
      style={style}
      initial={prefersReducedMotion ? false : { opacity: 0, backgroundPosition: "100% 50%" }}
      animate={prefersReducedMotion ? false : { opacity: 1, backgroundPosition: ["100% 50%", "0% 50%"] }}
      transition={prefersReducedMotion ? undefined : { duration, delay, ease: [0.23, 1, 0.32, 1] }}
    >
      {text}
    </MotionComponent>
  )
}

