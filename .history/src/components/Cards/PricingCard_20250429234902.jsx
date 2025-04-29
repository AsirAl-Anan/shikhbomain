"use client"

import { CheckIcon } from "../Icons/Icons"

export default function PricingCard({ plan, isYearly }) {
  // Calculate yearly price (20% discount)
  const yearlyPrice =
    plan.price === "Free" ? "Free" : `$${Math.floor(Number.parseInt(plan.price.replace("$", "")) * 12 * 0.8)}`

  return (
    <div className="pricing-card-wrapper ">
      {/* Outer container with gradient border effect */}
      <div
        className={`relative h-full rounded-2xl transition-all duration-300 ${plan.popular ? "scale-105 z-10" : ""}`}
      >
        {/* Gradient border/glow effect */}
        <div className="absolute inset-0 rounded-2xl pricing-card-glow"></div>

        {/* Card content */}
        <div className="relative h-full flex flex-col rounded-2xl p-6 bg-[#111827] text-white">
          {plan.popular && (
            <div className="absolute top-0 right-0">
              <div className="bg-indigo-500 text-white text-xs font-medium px-4 py-1 rounded-bl-lg rounded-tr-lg">
                Most Popular
              </div>
            </div>
          )}

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2 text-white">{plan.name}</h3>
            <p className="text-sm text-gray-400">{plan.description}</p>
          </div>

          <div className="mb-6">
            <div className="flex items-end">
              <span className="text-4xl font-bold text-white">
                {isYearly ? yearlyPrice : plan.price}
              </span>
              {plan.period && (
                <span className="ml-1 mb-1 text-gray-400">
                  {isYearly ? "/year" : plan.period}
                </span>
              )}
            </div>

            {isYearly && plan.price !== "Free" && (
              <p className="text-indigo-400 text-sm mt-1">Save 20% with annual billing</p>
            )}
          </div>

          <ul className="space-y-3 mb-8 flex-grow">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 mt-1 text-indigo-400">
                  <CheckIcon className="w-4 h-4" />
                </span>
                <span className="text-sm text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto">
            <button
              className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                plan.popular
                  ? "bg-indigo-500 hover:bg-indigo-600 text-white"
                  : "bg-gray-800 hover:bg-gray-700 text-white"
              }`}
            >
              {plan.cta}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}