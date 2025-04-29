"use client"

import { useEffect, useRef, useState } from "react"
import ReviewRow from "./ReviewRow"
import { reviews } from "./data/reviews"

export default function ReviewsSection() {
  // Use Intersection Observer to detect when section is in view
  const [isInView, setIsInView] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-16 overflow-hidden bg-black">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Build by students, Loved by students</h2>
        <p className="text-lg text-center text-gray-300 max-w-3xl mx-auto">
          Students all around the country reach for our AI tutor by choice.
        </p>
      </div>

      <div className="relative">
        {/* First row - right direction */}
        <ReviewRow reviews={reviews.slice(0, 4)} direction="right" speed={35} isActive={isInView} />

        {/* Second row - left direction */}
        <ReviewRow reviews={reviews.slice(4, 8)} direction="left" speed={40} isActive={isInView} />

        {/* Third row - right direction */}
        <ReviewRow reviews={reviews.slice(8, 12)} direction="right" speed={30} isActive={isInView} />

        {/* Fourth row - left direction */}
        <ReviewRow reviews={reviews.slice(12, 16)} direction="left" speed={45} isActive={isInView} />
      </div>
    </section>
  )
}
