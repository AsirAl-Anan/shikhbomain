"use client"

import { useEffect, useRef } from "react"


const PreviewSection = ({ scrollY }) => {
  const sectionRef = useRef(null)
  const codeBlockRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const codeBlock = codeBlockRef.current

    if (section && codeBlock) {
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight

      // Calculate how far the section is from the viewport
      const distanceFromTop = sectionTop - scrollY
      const windowHeight = window.innerHeight

      // Calculate the progress (0 to 1) of the section coming into view
      const progress = Math.min(Math.max((windowHeight - distanceFromTop) / windowHeight, 0), 1)

      // Apply animations based on scroll progress
      codeBlock.style.transform = `translateY(${(1 - progress) * 50}px)`
      codeBlock.style.opacity = progress
    }
  }, [scrollY])

  return (
    <section ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-[#181A43] to-[#20235a]">
    <div className="container mx-auto px-4 rounded-2xl">
      <div ref={codeBlockRef} className="relative transition-all duration-500 ease-out max-w-6xl mx-auto">
        <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 opacity-75 blur-lg"></div>
  
        <div className="relative bg-[#0d1117] border border-gray-800 rounded-2xl shadow-2xl overflow-hidden">
          <div className="flex flex-wrap justify-center items-stretch gap-4 p-6">
            
            <div className="flex flex-col items-center bg-[#0d1117] p-6 rounded-lg w-[250px]">
              <h1 className="text-xl whitespace-nowrap">20,000+</h1>
              <p className="text-center mt-2">Questions</p>
            </div>
  
            <div className="flex flex-col items-center bg-[#0d1117] p-6 rounded-lg w-[250px]">
              <h1 className="text-xl whitespace-nowrap">SSC, HSC and Admission</h1>
              <p className="text-center mt-2">Shikhzy Covers everything</p>
            </div>
  
            <div className="flex flex-col items-center bg-[#0d1117] p-6 rounded-lg w-[280px]">
              <h1 className="text-xl whitespace-nowrap">Bangla Medium and English Version</h1>
              <p className="text-center mt-2">We care about everybody</p>
            </div>
  
            <div className="flex flex-col items-center bg-[#0d1117] p-6 rounded-lg w-[250px]">
              <h1 className="text-xl whitespace-nowrap">10+</h1>
              <p className="text-center mt-2">AI integrated tools for maximum productivity</p>
            </div>
  
          </div>
        </div>
      </div>
    </div>
  </section>
  
  
  )
}

export default PreviewSection
