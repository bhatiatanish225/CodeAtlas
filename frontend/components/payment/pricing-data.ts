import type { PricingPlan } from "./types"

export const pricingPlans: PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    price: 0,
    period: "forever",
    description: "Perfect for getting started with code visualization",
    features: [
      "GitHub Login",
      "2D Code Map",
      "5 AI Questions/day",
      "Public Repos Only",
      "Community Support",
      "Basic File Explorer",
    ],
    popular: false,
    buttonText: "Get Started Free",
  },
  {
    id: "pro-monthly",
    name: "Pro",
    price: 1999, // ₹19.99 in paise
    originalPrice: 2999,
    period: "per month",
    description: "For developers who want unlimited access and advanced features",
    features: [
      "Everything in Free",
      "3D Code Visualization",
      "Unlimited AI Questions",
      "Private Repos",
      "Priority Support",
      "Advanced Analytics",
      "Team Collaboration",
      "Export Features",
    ],
    popular: true,
    buttonText: "Start Pro Trial",
    razorpayPlanId: "plan_pro_monthly",
  },
  {
    id: "pro-yearly",
    name: "Pro Annual",
    price: 19999, // ₹199.99 in paise (save 2 months)
    originalPrice: 35988, // 12 * 2999
    period: "per year",
    description: "Best value! Save 44% with annual billing",
    features: [
      "Everything in Pro Monthly",
      "2 Months Free",
      "Priority Feature Requests",
      "1-on-1 Onboarding Call",
      "Advanced Integrations",
      "Custom Branding",
      "API Access",
      "Dedicated Support",
    ],
    popular: false,
    buttonText: "Get Annual Plan",
    razorpayPlanId: "plan_pro_yearly",
  },
]
