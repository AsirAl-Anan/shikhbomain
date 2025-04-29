"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"


// Educational content for the spotlight
const educationalContent = [
  {
    type: "question",
    content: "What is Newton's First Law of Motion?",
    answer:
      "An object at rest stays at rest, and an object in motion stays in motion with the same speed and direction unless acted upon by an external force.",
  },
  {
    type: "problem",
    content: "Solve: 3x + 7 = 22",
    solution: "3x + 7 = 22\n3x = 15\nx = 5",
  },
  {
    type: "fact",
    content: "The Great Wall of China is not visible from space with the naked eye, contrary to popular belief.",
  },
  {
    type: "question",
    content: "What is photosynthesis?",
    answer:
      "The process by which green plants and some other organisms use sunlight to synthesize foods with carbon dioxide and water, generating oxygen as a byproduct.",
  },
  {
    type: "problem",
    content: "If a triangle has angles of 30° and 60°, what is the third angle?",
    solution: "Sum of angles in a triangle = 180°\n180° - 30° - 60° = 90°\nThe third angle is 90°",
  },
]

export default function EducationalSpotlight() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const currentItem = educationalContent[currentIndex]

  useEffect(() => {
    if (isHovered) return

    // Show answer after 3 seconds
    const answerTimer = setTimeout(() => {
      if (currentItem.type === "question" || currentItem.type === "problem") {
        setShowAnswer(true)
      }
    }, 3000)

    // Move to next item after 6 seconds
    const nextTimer = setTimeout(() => {
      setShowAnswer(false)
      setCurrentIndex((prev) => (prev + 1) % educationalContent.length)
    }, 6000)

    return () => {
      clearTimeout(answerTimer)
      clearTimeout(nextTimer)
    }
  }, [currentIndex, currentItem, isHovered])

  return (
    <motion.div
      className="w-60 md:w-72 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Spotlight header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-3">
        <div className="flex items-center justify-between">
          <h3 className="text-white font-medium text-sm">Learning Spotlight</h3>
          <div className="flex space-x-1">
            <span className="block w-2 h-2 rounded-full bg-white opacity-60"></span>
            <span className="block w-2 h-2 rounded-full bg-white opacity-80"></span>
            <span className="block w-2 h-2 rounded-full bg-white"></span>
          </div>
        </div>
      </div>

      {/* Spotlight content */}
      <div className="p-4" style={{ minHeight: "180px" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${currentIndex}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mb-3"
          >
            <div className="flex items-center mb-2">
              {currentItem.type === "question" && (
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium px-2 py-0.5 rounded">
                  Question
                </span>
              )}
              {currentItem.type === "problem" && (
                <span className="bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 text-xs font-medium px-2 py-0.5 rounded">
                  Problem
                </span>
              )}
              {currentItem.type === "fact" && (
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs font-medium px-2 py-0.5 rounded">
                  Fun Fact
                </span>
              )}
            </div>

            <p className="text-gray-900 dark:text-white font-medium">{currentItem.content}</p>
          </motion.div>
        </AnimatePresence>

        {/* Answer/Solution section */}
        {(currentItem.type === "question" || currentItem.type === "problem") && (
          <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
            <AnimatePresence>
              {showAnswer ? (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-1">
                    {currentItem.type === "question" ? "Answer:" : "Solution:"}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line">
                    {currentItem.type === "question" ? currentItem.answer : currentItem.solution}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-center"
                >
                  <div className="relative">
                    <div className="h-1.5 w-24 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-indigo-500"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 3, ease: "linear" }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-center">Revealing answer...</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Spotlight footer */}
      <div className="px-4 py-3 bg-gray-50 dark:bg-gray-900 flex justify-between items-center">
        <div className="flex space-x-1">
          {educationalContent.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? "bg-indigo-500" : "bg-gray-300 dark:bg-gray-700"
              }`}
              onClick={() => {
                setCurrentIndex(index)
                setShowAnswer(false)
              }}
            />
          ))}
        </div>

        <button
          className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"
          onClick={() => {
            setShowAnswer(false)
            setCurrentIndex((prev) => (prev + 1) % educationalContent.length)
          }}
        >
          Next →
        </button>
      </div>

      {/* Spotlight glow effect */}
      <div
        className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"
        style={{
          animationDuration: "3s",
          zIndex: -1,
        }}
      ></div>
    </motion.div>
  )
}
