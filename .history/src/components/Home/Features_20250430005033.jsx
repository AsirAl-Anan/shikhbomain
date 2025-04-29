"use client"

import { useEffect, useRef, useState } from "react"

const features = [
  {
    title: "Smart Topic Teaching",
    description: "Explains complex topics in simple terms, personalized to each student's level and pace.",
    img:"https://placehold.co/400x500"
  },
  {
    title: "Instant Problem Solving",
    description: "Solves any academic problem with step-by-step guidance and real-time support.",
    img:"https://placehold.co/400x500"
  },
  {
    title: "Exam Generator & Evaluator",
    description: "Creates custom exams and evaluates them like a human tutor—complete with grading.",
    img:"https://placehold.co/400x500"
  },
  {
    title: "All-in-One Tutor",
    description: "Acts just like a human tutor—teaches, solves, evaluates, and adapts to the student.",
    img:"https://placehold.co/400x500"
  },
  {
    title: "Smart Question Bank",
    description: "Access a vast, categorized question bank built from years of board exams and AI curation.",
    img:"https://placehold.co/400x500"
  },
  {
    title: "Productivity Manager",
    description: "Built-in tools for notes, tasks, and goals—just like a student-friendly version of Notion.",
    img:"https://placehold.co/400x500"
  },
  {
    title: "Team Collaboration",
    description: "Work on subjects with friends or project groups—live shared AI assistance (if time allows).",
    img:"https://placehold.co/400x500"
  },
]

const Features = ({ scrollY }) => {
  const sectionRef = useRef(null)
  const featureRefs = useRef([])
  const titleRef = useRef(null)
  const [showAllFeatures, setShowAllFeatures] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    const featureElements = featureRefs.current
    const titleElement = titleRef.current

    if (section && featureElements.length) {
      const sectionTop = section.offsetTop
      const windowHeight = window.innerHeight
      const sectionHeight = section.offsetHeight

      // Calculate how much of the section is visible
      const distanceFromTop = sectionTop - scrollY
      const progress = Math.min(Math.max((windowHeight - distanceFromTop) / windowHeight, 0), 1)
      
      // Animate title from right to middle
      if (titleElement) {
        const titleProgress = Math.min(progress * 2, 1)
        const translateX = 100 - (titleProgress * 100) // From right (100%) to center (0%)
        titleElement.style.opacity = titleProgress
        titleElement.style.transform = `translateX(${Math.max(translateX, 0)}%)`
      }

      // Simple opacity animation for each feature card based on scroll position
      featureElements.forEach((feature, index) => {
        if (index > 4 && !showAllFeatures) return; // Skip hidden features animation if not shown
        
        const featureTop = feature.offsetTop
        const featureHeight = feature.offsetHeight
        
        // Calculate when the feature should start and finish revealing
        const featureStartReveal = featureTop - windowHeight + featureHeight * 0.2
        const featureEndReveal = featureTop - windowHeight + featureHeight * 0.5
        
        // Calculate progress specifically for this feature
        let featureProgress = 0
        if (scrollY > featureStartReveal) {
          featureProgress = Math.min((scrollY - featureStartReveal) / (featureEndReveal - featureStartReveal), 1)
        }
        
        // Apply simple opacity animation only
        feature.style.opacity = featureProgress
      })
    }
  }, [scrollY, showAllFeatures])

  const addToRefs = (el) => {
    if (el && !featureRefs.current.includes(el)) {
      featureRefs.current.push(el)
    }
  }

  const toggleFeatures = () => {
    setShowAllFeatures(!showAllFeatures)
  }

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-b from-[#161b22] to-[#0d1117]"
    >
      <div className="container mx-auto px-4">
        <h2 
          ref={titleRef}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white transition-all duration-500 ease-out"
          style={{ opacity: 0, transform: "translateX(100%)" }} // Start from right side (100%)
        >
          <span className="md:text-6xl text-4xl font-bold bg-gradient-to-b from-gray-100 to-gray-500 bg-clip-text text-transparent ">
           Our Solutions
          </span>
        </h2>

        <div className="grid grid-cols-1 gap-8 relative">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={addToRefs}
              className={`bg-white shadow-[0px_25px_50px_-12px_rgba(255,255,255,0.25)] md:mb-[100px] relative md:w-[70%] md:h-[65vh] md:mx-auto bg-gradient-to-br from-purple-600 to-pink-700 rounded-xl p-6 transition-all duration-500 ease-out hover:shadow-lg flex flex-col justify-between
                ${index === 3 && !showAllFeatures ? 'half-visible' : ''}
                ${index > 3 && !showAllFeatures ? 'hidden' : ''}`}
              style={{ 
                opacity: 0,
                filter: index === 4 && !showAllFeatures ? 'blur(3px) brightness(0.7)' : 'none',
              }}
            >
              <div className="px-2">
                <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-b from-gray-600 to-gray-800 bg-clip-text text-transparent text-center">{feature.title}</h3>
                <p className="text-gray-700 md:text-lg my-2 font-semibold text-center">{feature.description}</p>
              </div>
              <img
                src={feature.img}
                className="rounded-t-xl w-full mt-4 object-cover md:w-[70%] md:h-[80%] md:mx-auto origin-bottom scale-100 hover:scale-[1.02] transition-transform duration-300"
                alt=""
                style={{ marginBottom: "-1.5rem" }}
              />
            </div>
          ))}
          
          {features.length > 3 && (
            <div 
              className={`absolute inset-x-0 bottom-0 ${!showAllFeatures && features.length > 3 ? 'block' : 'hidden'}`}
              style={{
                height: '200px',
                background: 'linear-gradient(to bottom, rgba(22, 27, 34, 0), rgba(22, 27, 34, 0.9) 50%, rgba(22, 27, 34, 1))',
                pointerEvents: 'none',
                zIndex: 1
              }}
            ></div>
          )}
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={toggleFeatures}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105"
          >
            {showAllFeatures ? "Hide features" : "Explore all features"}
          </button>
        </div>
      </div>
      
      <style jsx>{`
        .half-visible {
          position: relative;
          overflow: hidden;
        }
        
        .half-visible::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 50%;
          background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.8));
          pointer-events: none;
        }
      `}</style>
    </section>
  )
}

export default Features