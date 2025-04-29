"use client"

import { useEffect, useRef, useState } from "react"

export default function Whyus() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
      },
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
    <section ref={sectionRef} className="w-full overflow-hidden bg-[#0C1540] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16">
          {/* Logo Container with Animation */}
          <div
            className={`flex w-full items-center justify-center md:w-1/2 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
            } transition-all duration-1000 ease-out`}
          >
            <div className="relative flex h-80 w-80 items-center justify-center">
              {/* Background Circle */}
              <div className="absolute h-64 w-64 rounded-full bg-[#1A2563]"></div>

              {/* Logo */}
              <div className="relative z-10 flex h-40 w-40 items-center justify-center rounded-full bg-[#3D68FF]">
                <ShikhboIcon className="h-24 w-24 text-white" />
                <div className="absolute -right-2 -top-2 flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl font-bold text-[#0C1540]">
                  #1
                </div>
                {/* Sparkle Effects */}
                <span className="absolute -right-4 -top-4 text-2xl text-blue-200">✨</span>
                <span className="absolute -bottom-2 right-0 text-2xl text-blue-200">✨</span>
              </div>

              {/* Decorative Elements */}
              <FlowerElement className="absolute -left-8 top-10 h-16 w-16 rotate-45 transform text-blue-300" />
              <FlowerElement className="absolute -right-8 bottom-20 h-16 w-16 -rotate-12 transform text-blue-300" />
              <FlowerElement className="absolute right-0 top-0 h-16 w-16 rotate-90 transform text-blue-300" />
            </div>
          </div>

          {/* Content Container with Animation */}
          <div
            className={`w-full space-y-6 md:w-1/2 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            } transition-all delay-300 duration-1000 ease-out`}
          >
            <h2 className="text-3xl font-bold text-white md:text-4xl">Why Shikhbo?</h2>
            <p className="text-gray-200">
              We're young, we're fun, and we are students ourselves. Hence, we know what you need. Shikhbo team's
              mission is to bring powerful, innovative tools to students everywhere - no more outdated methods, no more
              study stress.
            </p>

            <ul className="space-y-4">
              {[
                "A smarter way to prepare for O/A Levels",
                "Everything you need, all in one place",
                "Designed to make studying stress-free & efficient",
                "Your ultimate companion for academic success",
              ].map((item, index) => (
                <li
                  key={index}
                  className={`flex items-start gap-2 ${
                    isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                  } transition-all`}
                  style={{ transitionDelay: `${index * 150 + 600}ms` }}
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#3D68FF] text-white">
                    <CheckIcon className="h-4 w-4" />
                  </div>
                  <span className="text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

// SVG Components
export const ShikhboIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
)

const CheckIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const FlowerElement = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22c2-4 4-8 4-12a4 4 0 0 0-8 0c0 4 2 8 4 12z" />
    <path d="M12 8c4 0 8-2 8-4s-4-2-8-2-8 0-8 2 4 4 8 4z" />
    <path d="M12 2v4" />
    <path d="M10 8L8 6" />
    <path d="M14 8l2-2" />
  </svg>
)
