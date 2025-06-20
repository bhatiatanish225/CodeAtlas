export interface PricingPlan {
  id: string
  name: string
  price: number
  originalPrice?: number
  period: string
  description: string
  features: string[]
  popular: boolean
  buttonText: string
  razorpayPlanId?: string
}

export interface PaymentFormData {
  email: string
  name: string
  phone: string
  plan: PricingPlan
}

export interface RazorpayOptions {
  key: string
  amount: number
  currency: string
  name: string
  description: string
  order_id: string
  prefill: {
    name: string
    email: string
    contact: string
  }
  theme: {
    color: string
  }
  handler: (response: RazorpayResponse) => void
  modal: {
    ondismiss: () => void
  }
}

export interface RazorpayResponse {
  razorpay_payment_id: string
  razorpay_order_id: string
  razorpay_signature: string
}

declare global {
  interface Window {
    Razorpay: any
  }
}
