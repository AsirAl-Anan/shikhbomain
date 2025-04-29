"use client"

import { useEffect, useRef, useState } from "react"
import ReviewCard from "./ReviewCard"

export default function ReviewRow({ reviews, direction, speed, isActive }) {
  const containerRef = useRef(null)
  const contentRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)
  const animationRef = useRef(null)
  const positionRef = useRef(0)

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return

    const container = containerRef.current
    const content = contentRef.current

    // Clone the content to create a seamless loop
    const clone = content.cloneNode(true)
    container.appendChild(clone)

    // Initialize position
    positionRef.current = 0

    const animate = () => {
      if (!isPaused && isActive) {
        // Calculate the width of a single set of reviews
        const contentWidth = content.offsetWidth

        // Move the position based on direction and speed
        if (direction === "left") {
          positionRef.current -= speed / 100
          if (positionRef.current <= -contentWidth) {
            positionRef.current = 0
          }
        } else {
          positionRef.current += speed / 100
          if (positionRef.current >= contentWidth) {
            positionRef.current = 0
          }
        }

        // Apply the transform
        container.style.transform = `translateX(${positionRef.current}px)`
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [direction, speed, isActive, isPaused])

  const handleMouseEnter = () => {
    setIsPaused(true)
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
  }

  return (
    <div className="py-4 overflow-hidden">
      <div
        ref={containerRef}
        className={`flex ${isPaused ? "transition-transform duration-300 ease-out" : "transition-none"}`}
        style={{ willChange: "transform" }}
      >
        <div ref={contentRef} className="flex gap-4 px-4">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
          ))}
        </div>
      </div>
    </div>
  )
}
