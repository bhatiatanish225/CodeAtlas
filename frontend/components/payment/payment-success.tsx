"use client"

import { CheckCircle, Download, ArrowRight } from "lucide-react"
import type { PricingPlan } from "./types"

interface PaymentSuccessProps {
  plan: PricingPlan
  transactionId: string
  onContinue: () => void
}

export function PaymentSuccess({ plan, transactionId, onContinue }: PaymentSuccessProps) {
  const formatPrice = (price: number) => {
    if (price === 0) return "₹0"
    return `₹${(price / 100).toFixed(2)}`
  }

  const downloadReceipt = () => {
    // In a real app, this would download the actual receipt
    const receiptData = {
      transactionId,
      plan: plan.name,
      amount: formatPrice(plan.price),
      date: new Date().toLocaleDateString(),
      status: "Paid",
    }

    const dataStr = JSON.stringify(receiptData, null, 2)
    const dataUri = "data:application/json;charset=utf-8," + encodeURIComponent(dataStr)
    const exportFileDefaultName = `codeatlas-receipt-${transactionId}.json`

    const linkElement = document.createElement("a")
    linkElement.setAttribute("href", dataUri)
    linkElement.setAttribute("download", exportFileDefaultName)
    linkElement.click()
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-xl">
        <div className="p-8 text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400" />
          </div>

          {/* Success Message */}
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Payment Successful! 🎉</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Welcome to CodeAtlas.AI {plan.name}! Your subscription is now active.
          </p>

          {/* Transaction Details */}
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 mb-8 text-left">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Transaction Details</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Plan:</span>
                <span className="font-medium text-gray-900 dark:text-white">{plan.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Amount:</span>
                <span className="font-medium text-gray-900 dark:text-white">{formatPrice(plan.price)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Transaction ID:</span>
                <span className="font-mono text-sm text-gray-900 dark:text-white">{transactionId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Date:</span>
                <span className="font-medium text-gray-900 dark:text-white">{new Date().toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Status:</span>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400">
                  Paid
                </span>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8 text-left">
            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">What's Next?</h3>
            <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                <span>Access all {plan.name} features immediately</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                <span>Check your email for the welcome guide</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                <span>Start exploring your repositories with AI</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={downloadReceipt}
              className="flex-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Receipt</span>
            </button>
            <button
              onClick={onContinue}
              className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Go to Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
