"use client"
import { useEffect, useRef, useState } from "react"
import ReviewCard from "./ReviewCard"

// Create a custom hook for media queries
 function useMediaQuery(query) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    
    // Update the state initially
    setMatches(media.matches)
    
    // Define listener function
    const listener = (e) => {
      setMatches(e.matches)
    }
    
    // Add the listener
    media.addEventListener("change", listener)
    
    // Clean up
    return () => {
      media.removeEventListener("change", listener)
    }
  }, [query])

  return matches
}

export default function ReviewRow({ reviews, direction, speed, isActive }) {
  const containerRef = useRef(null)
  const contentRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)
  const animationRef = useRef(null)
  const positionRef = useRef(0)
  
  // Check if screen is small (adjust breakpoint as needed)
  const isSmallScreen = useMediaQuery("(max-width: 639px)")

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return
    
    const container = containerRef.current
    const content = contentRef.current
    
    // Clone the content to create a seamless loop
    const clone = content.cloneNode(true)
    
    // Remove old clone if it exists (important for screen size changes)
    const existingClone = container.querySelector(".clone-content")
    if (existingClone) {
      container.removeChild(existingClone)
    }
    
    clone.classList.add("clone-content")
    container.appendChild(clone)
    
    // Initialize position
    positionRef.current = 0
    container.style.transform = `translateX(0px)`
    
    const animate = () => {
      if (!isPaused && isActive && !isSmallScreen) {
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
  }, [direction, speed, isActive, isPaused, isSmallScreen])

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
        className={`flex ${isPaused ? "transition-transform duration-300 ease-out" : "transition-none"} ${isSmallScreen ? "flex-nowrap overflow-x-auto" : ""}`}
        style={{ 
          willChange: "transform",
          transform: isSmallScreen ? "translateX(0)" : undefined
        }} 
      >
        <div 
          ref={contentRef} 
          className="flex gap-4 px-4"
        >
          {reviews.map((review, index) => (
            <ReviewCard 
              key={index} 
              review={review} 
              onMouseEnter={!isSmallScreen ? handleMouseEnter : undefined}
              onMouseLeave={!isSmallScreen ? handleMouseLeave : undefined} 
            />
          ))}
        </div>
      </div>
    </div>
  )
}