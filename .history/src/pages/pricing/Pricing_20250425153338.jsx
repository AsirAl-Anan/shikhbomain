"use client"

import { useState, useEffect } from "react"
import PricingCard from "../../components/Cards/PricingCard"
import FallingStars from "../../components/FallingStars"
import { motion } from "framer-motion"



//currently using concrete data for pricing plans, this should be replaced with data from the backend in the future
const pricingPlans = [
  {
    name: "Basic",
    price: "Free",
    description: "Perfect for beginners starting their AI learning journey",
    features: [
      "Access to basic AI courses",
      "Community forum access",
      "Weekly AI newsletters",
      "Basic AI assistant help",
      "Limited practice exercises",
    ],
    cta: "Get Started",
    popular: false,
    color: "from-blue-400 to-indigo-500",
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    description: "For serious learners who want to master AI development",
    features: [
      "All Basic features",
      "Unlimited access to all courses",
      "Personalized learning path",
      "Advanced AI assistant",
      "Hands-on projects with feedback",
      "Certificate of completion",
    ],
    cta: "Start 7-Day Free Trial",
    popular: true,
    color: "from-indigo-500 to-purple-600",
  },
  {
    name: "Enterprise",
    price: "$49",
    period: "/month",
    description: "For teams and organizations training multiple learners",
    features: [
      "All Pro features",
      "Team management dashboard",
      "Custom learning tracks",
      "Priority support",
      "API access",
      "Dedicated account manager",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    popular: false,
    color: "from-purple-500 to-pink-600",
  },
]

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-b from-[#0a1428] to-[#0d1d3b]">
      {/* Falling stars background */}
      <FallingStars />

      {/* Main content */}
      <main className="relative z-10 pt-12 pb-24 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Choose the Perfect Plan for Your{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                AI Learning Journey
              </span>
            </motion.h1>

            <motion.p
              className="text-lg text-gray-300 mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Unlock your potential with our flexible pricing options. Choose the plan that fits your learning goals.
            </motion.p>

            {/* Billing toggle */}
            <motion.div
              className="flex items-center justify-center space-x-3"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className={`text-sm ${!isYearly ? "text-white" : "text-gray-400"}`}>Monthly</span>

              <button
                onClick={() => setIsYearly(!isYearly)}
                className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors ${
                  isYearly ? "bg-indigo-600" : "bg-gray-700"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isYearly ? "translate-x-7" : "translate-x-1"
                  }`}
                />
              </button>

              <span className={`text-sm ${isYearly ? "text-white" : "text-gray-400"}`}>
                Yearly <span className="text-indigo-400 font-medium">(Save 20%)</span>
              </span>
            </motion.div>
          </div>

          {/* Pricing cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <PricingCard plan={plan} isYearly={isYearly} />
              </motion.div>
            ))}
          </div>

          {/* FAQ section */}
          <motion.div
            className="mt-24 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>

            <div className="space-y-6">
              {[
                {
                  question: "Can I switch plans later?",
                  answer:
                    "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, you'll be charged the prorated difference. If you downgrade, you'll receive credit towards your next billing cycle.",
                },
                {
                  question: "Is there a student discount?",
                  answer:
                    "Yes! We offer a 50% discount for verified students. Contact our support team with your student ID to get your discount code.",
                },
                {
                  question: "Do you offer refunds?",
                  answer:
                    "We offer a 7-day money-back guarantee for all paid plans. If you're not satisfied with your purchase, contact us within 7 days for a full refund.",
                },
                {
                  question: "Can I cancel my subscription anytime?",
                  answer:
                    "Yes, you can cancel your subscription at any time from your account settings. Your access will continue until the end of your current billing period.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-gray-900/50 rounded-lg p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-medium text-white mb-2">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      {/* CTA section */}
      <section className="relative z-10 py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 backdrop-blur-sm">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Ready to start your AI learning journey?</h2>
              <p className="text-gray-300">Join thousands of learners mastering AI with shikhbo.ai</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              
              <a   href="#"
                className="bg-white text-indigo-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Try Free Demo
              </a>

              <a
                href="#"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
