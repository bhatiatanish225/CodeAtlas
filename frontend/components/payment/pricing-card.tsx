"use client"

import { Check, Star, Zap } from "lucide-react"
import type { PricingPlan } from "./types"

interface PricingCardProps {
  plan: PricingPlan
  onSelectPlan: (plan: PricingPlan) => void
  isLoading?: boolean
}

export function PricingCard({ plan, onSelectPlan, isLoading }: PricingCardProps) {
  const formatPrice = (price: number) => {
    if (price === 0) return "₹0"
    return `₹${(price / 100).toFixed(0)}`
  }

  const calculateSavings = () => {
    if (!plan.originalPrice) return null
    const savings = ((plan.originalPrice - plan.price) / plan.originalPrice) * 100
    return Math.round(savings)
  }

  const savings = calculateSavings()

  return (
    <div
      className={`relative bg-white dark:bg-gray-800 rounded-2xl border-2 p-8 transition-all duration-300 hover:shadow-2xl ${
        plan.popular
          ? "border-purple-500 shadow-2xl shadow-purple-500/20 scale-105"
          : "border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600"
      }`}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
            <Star className="w-4 h-4" />
            <span>Most Popular</span>
          </div>
        </div>
      )}

      {/* Savings Badge */}
      {savings && (
        <div className="absolute -top-2 -right-2">
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold">
            Save {savings}%
          </div>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{plan.description}</p>

        <div className="mb-4">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-4xl font-bold text-gray-900 dark:text-white">{formatPrice(plan.price)}</span>
            {plan.originalPrice && (
              <span className="text-lg text-gray-500 dark:text-gray-400 line-through">
                {formatPrice(plan.originalPrice)}
              </span>
            )}
          </div>
          <span className="text-gray-600 dark:text-gray-400">/{plan.period}</span>
        </div>

        {plan.id === "pro-yearly" && (
          <div className="inline-flex items-center space-x-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium">
            <Zap className="w-4 h-4" />
            <span>2 Months Free!</span>
          </div>
        )}
      </div>

      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, featureIndex) => (
          <li key={featureIndex} className="flex items-start space-x-3">
            <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={() => onSelectPlan(plan)}
        disabled={isLoading}
        className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${
          plan.popular
            ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg shadow-purple-500/25"
            : plan.price === 0
              ? "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white"
              : "bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white"
        }`}
      >
        {isLoading ? (
          <div className="flex items-center justify-center space-x-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            <span>Processing...</span>
          </div>
        ) : (
          plan.buttonText
        )}
      </button>

      {plan.price === 0 && (
        <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-3">No credit card required</p>
      )}
    </div>
  )
}
