"use client"

import { useState } from "react"
import { ArrowLeft, CreditCard, Shield, Users, Zap } from "lucide-react"
import { PricingCard } from "./pricing-card"
import { PaymentForm } from "./payment-form"
import { PaymentSuccess } from "./payment-success"
import { RazorpayService } from "./razorpay-service"
import { pricingPlans } from "./pricing-data"
import type { PricingPlan, PaymentFormData } from "./types"

type PaymentStep = "plans" | "form" | "success"

interface PaymentPageProps {
  onBack?: () => void
  onSuccess?: () => void
}

export function PaymentPage({ onBack, onSuccess }: PaymentPageProps) {
  const [currentStep, setCurrentStep] = useState<PaymentStep>("plans")
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [transactionId, setTransactionId] = useState("")

  const razorpayService = RazorpayService.getInstance()

  const handleSelectPlan = (plan: PricingPlan) => {
    if (plan.price === 0) {
      // Handle free plan signup
      console.log("Free plan selected")
      if (onSuccess) onSuccess()
      return
    }

    setSelectedPlan(plan)
    setCurrentStep("form")
  }

  const handlePaymentSubmit = async (formData: PaymentFormData) => {
    if (!selectedPlan) return

    setIsLoading(true)

    try {
      // Create order
      const { orderId, amount } = await razorpayService.createOrder(selectedPlan.price)

      // Initiate payment
      const paymentResponse = await razorpayService.initiatePayment(formData, orderId, amount)

      // Verify payment
      const verificationResult = await razorpayService.verifyPayment(
        paymentResponse.razorpay_payment_id,
        paymentResponse.razorpay_order_id,
        paymentResponse.razorpay_signature,
      )

      if (verificationResult.success) {
        setTransactionId(paymentResponse.razorpay_payment_id)
        setCurrentStep("success")
      } else {
        throw new Error("Payment verification failed")
      }
    } catch (error) {
      console.error("Payment error:", error)
      alert("Payment failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleSuccess = () => {
    if (onSuccess) {
      onSuccess()
    } else {
      // Navigate to dashboard
      window.location.href = "/dashboard"
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case "plans":
        return (
          <div>
            {/* Header */}
            <div className="text-center mb-16">
              {onBack && (
                <button
                  onClick={onBack}
                  className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 mb-8"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Home</span>
                </button>
              )}
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Choose Your{" "}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Perfect Plan
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Start with our free plan or unlock advanced features with Pro. Cancel anytime.
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
              {pricingPlans.map((plan) => (
                <PricingCard key={plan.id} plan={plan} onSelectPlan={handleSelectPlan} isLoading={isLoading} />
              ))}
            </div>

            {/* Features Comparison */}
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                Why Choose CodeAtlas.AI Pro?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Unlimited AI Queries</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Ask unlimited questions about your codebase with our advanced AI
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Private Repository Access</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Analyze your private repositories with enterprise-grade security
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Team Collaboration</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Share insights and collaborate with your team members
                  </p>
                </div>
              </div>
            </div>
          </div>
        )

      case "form":
        return selectedPlan ? (
          <PaymentForm
            selectedPlan={selectedPlan}
            onBack={() => setCurrentStep("plans")}
            onSubmit={handlePaymentSubmit}
            isLoading={isLoading}
          />
        ) : null

      case "success":
        return selectedPlan ? (
          <PaymentSuccess plan={selectedPlan} transactionId={transactionId} onContinue={handleSuccess} />
        ) : null

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">{renderStep()}</div>

      {/* Security Footer */}
      {currentStep === "plans" && (
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>SSL Secured</span>
            </div>
            <div className="flex items-center space-x-2">
              <CreditCard className="w-4 h-4" />
              <span>Powered by Razorpay</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>Trusted by 500+ developers</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
