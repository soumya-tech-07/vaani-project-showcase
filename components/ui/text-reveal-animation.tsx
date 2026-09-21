"use client"

import { useEffect, useRef, useState } from "react"
import type {
  CSSProperties,
  ComponentPropsWithoutRef,
  ElementType,
} from "react"

interface TextRevealProps<T extends ElementType = "h1"> {
  word?: string
  as?: T
  className?: string
  showReplay?: boolean
}

export function TextReveal<T extends ElementType = "h1">({
  word = "Animations",
  as,
  className = "",
}: TextRevealProps<T>) {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const Heading = (as ?? "h1") as ElementType
  const words = word.split(" ")
  let animationIndex = 0
  const headingProps = {
    className: `text-reveal-heading ${className}`,
  } as ComponentPropsWithoutRef<T>

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={containerRef}
      className={`text-reveal ${isVisible ? "is-visible" : ""}`}
    >
      <div>
        <Heading {...headingProps}>
          {words.map((currentWord, wordIndex) => {
            const characters = currentWord.split("").map((char) => {
              const index = animationIndex
              animationIndex += 1
              return (
                <span
                  className="text-reveal-character"
                  style={{ "--index": index } as CSSProperties}
                  key={`${char}-${index}`}
                >
                  {char}
                </span>
              )
            })

            return (
              <span
                className="text-reveal-word"
                key={`${currentWord}-${wordIndex}`}
              >
                {characters}
                {wordIndex < words.length - 1 ? " " : null}
              </span>
            )
          })}
        </Heading>
      </div>
      <style jsx>{`
        .text-reveal-heading {
          overflow: hidden;
        }

        .text-reveal-word {
          display: inline-block;
          white-space: nowrap;
        }

        .text-reveal-character {
          display: inline-block;
          opacity: 0;
        }

        .text-reveal.is-visible .text-reveal-character {
          animation: text-reveal 0.5s ease-in-out forwards;
          animation-delay: calc(0.02s * var(--index));
        }

        @keyframes text-reveal {
          from {
            opacity: 0;
            transform: translateY(100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .text-reveal-character {
            opacity: 1;
            animation: none;
          }
        }
      `}</style>
    </div>
  )
}
