"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

const StartLearningButton = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      className={`
        relative overflow-hidden
        bg-gradient-to-r from-purple-600 to-pink-500 hidden md:flex items-center space-x-2 text-white px-4 py-2 rounded-full font-medium
        transition-all duration-300 ease-in-out
        transform hover:scale-105
        ${isHovered ? "shadow-lg" : "shadow-md"}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    > 
      <span className="relative z-10 flex">Start Learning</span>
      <ArrowRight className="ml-2 h-4 w-4" />
      <div
        className={`absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 ${isHovered ? 'animate-shine' : ''}`}
        style={{
          transform: "translateX(-100%) rotate(-45deg)",
        }}
      />
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shine {
          0% {
            opacity: 0;
            transform: translateX(-100%) rotate(-45deg);
          }
          25% {
            opacity: 0.6;
          }
          50% {
            opacity: 0.6;
          }
          100% {
            opacity: 0;
            transform: translateX(100%) rotate(-45deg);
          }
        }
        
        .animate-shine {
          animation: shine 3s infinite;
        }
      `}} />
    </button>
  )
}

export default StartLearningButton