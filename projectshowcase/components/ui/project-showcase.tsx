"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

interface Project {
  title: string
  description: string
  year: string
  link: string
  image: string
}

const projects: Project[] = [
  {
    title: "Lumina",
    description: "AI-powered design system generator.",
    year: "2024",
    link: "/products/lumina",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Flux",
    description: "Real-time collaboration for creative teams.",
    year: "2024",
    link: "/products/flux",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Prism",
    description: "Color palette extraction from any image.",
    year: "2023",
    link: "/products/prism",
    image: "https://images.unsplash.com/photo-1502691511068-569764c17b7a?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Vertex",
    description: "3D modeling toolkit for the web.",
    year: "2023",
    link: "/products/vertex",
    image: "https://images.unsplash.com/photo-1633167606207-d840b5060332?auto=format&fit=crop&q=80&w=800",
  },
]

export function ProjectShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor
    }

    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, mousePosition.x, 0.15),
        y: lerp(prev.y, mousePosition.y, 0.15),
      }))
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [mousePosition])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index)
    setIsVisible(true)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
    setIsVisible(false)
  }

  return (
    <section ref={containerRef} onMouseMove={handleMouseMove} className="relative w-full max-w-2xl mx-auto px-6 py-16">
      <h2 className="text-muted-foreground text-sm font-medium tracking-wide uppercase mb-8">Selected Work</h2>

      <div
        className="pointer-events-none fixed z-50 overflow-hidden rounded-xl shadow-2xl"
        style={{
          left: containerRef.current?.getBoundingClientRect().left ?? 0,
          top: containerRef.current?.getBoundingClientRect().top ?? 0,
          transform: `translate3d(${smoothPosition.x + 20}px, ${smoothPosition.y - 100}px, 0)`,
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.8,
          transition: "opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), scale 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div className="relative w-[280px] h-[180px] bg-secondary rounded-xl overflow-hidden">
          {projects.map((project, index) => (
            <img
              key={project.title}
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out"
              style={{
                opacity: hoveredIndex === index ? 1 : 0,
                scale: hoveredIndex === index ? 1 : 1.1,
                filter: hoveredIndex === index ? "none" : "blur(10px)",
              }}
            />
          ))}
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
        </div>
      </div>

      <div className="space-y-0">
        {projects.map((project, index) => (
          <motion.a
            key={project.title}
            href={project.link}
            className="group block"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            whileHover={{
              y: -8,
              scale: 1.01,
              rotateX: 2,
              rotateY: -2,
              transition: { type: "spring", stiffness: 240, damping: 18 },
            }}
            style={{ transformPerspective: 1200 }}
          >
            <div className="relative py-5 border-t border-border transition-all duration-300 ease-out">
              {/* Background highlight on hover */}
              <motion.div
                className="absolute inset-0 -mx-4 rounded-lg bg-secondary/50 px-4"
                initial={false}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  scale: hoveredIndex === index ? 1 : 0.95,
                }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              />

              <div className="relative flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  {/* Title with animated underline */}
                  <div className="inline-flex items-center gap-2">
                    <h3 className="text-foreground text-lg font-medium tracking-tight">
                      <span className="relative">
                        {project.title}
                        {/* Animated underline */}
                        <motion.span
                          className="absolute -bottom-0.5 left-0 h-px bg-foreground"
                          initial={false}
                          animate={{ width: hoveredIndex === index ? "100%" : 0 }}
                          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        />
                      </span>
                    </h3>

                    {/* Arrow that slides in */}
                    <motion.div
                      initial={false}
                      animate={{
                        opacity: hoveredIndex === index ? 1 : 0,
                        x: hoveredIndex === index ? 0 : -8,
                        y: hoveredIndex === index ? 0 : 6,
                      }}
                      transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                    </motion.div>
                  </div>

                  {/* Description with fade effect */}
                  <p
                    className={`
                      mt-1 text-sm leading-relaxed text-muted-foreground
                      transition-all duration-300 ease-out
                      ${hoveredIndex === index ? "text-foreground/70" : "text-muted-foreground"}
                    `}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Year badge */}
                <span
                  className={`
                    text-xs font-mono text-muted-foreground tabular-nums
                    transition-all duration-300 ease-out
                    ${hoveredIndex === index ? "text-foreground/60" : ""}
                  `}
                >
                  {project.year}
                </span>
              </div>
            </div>
          </motion.a>
        ))}

        {/* Bottom border for last item */}
        <div className="border-t border-border" />
      </div>
    </section>
  )
}
