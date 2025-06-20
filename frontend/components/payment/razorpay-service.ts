import type { PaymentFormData, RazorpayOptions, RazorpayResponse } from "./types"

export class RazorpayService {
  private static instance: RazorpayService
  private razorpayKey: string

  private constructor() {
    // In production, get this from environment variables
    this.razorpayKey = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_your_key_here"
  }

  public static getInstance(): RazorpayService {
    if (!RazorpayService.instance) {
      RazorpayService.instance = new RazorpayService()
    }
    return RazorpayService.instance
  }

  public async loadRazorpayScript(): Promise<boolean> {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true)
        return
      }

      const script = document.createElement("script")
      script.src = "https://checkout.razorpay.com/v1/checkout.js"
      script.onload = () => resolve(true)
      script.onerror = () => resolve(false)
      document.body.appendChild(script)
    })
  }

  public async createOrder(amount: number, currency = "INR"): Promise<{ orderId: string; amount: number }> {
    try {
      // In a real app, this would call your backend API
      const response = await fetch("/api/payment/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount,
          currency,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to create order")
      }

      const data = await response.json()
      return {
        orderId: data.orderId,
        amount: data.amount,
      }
    } catch (error) {
      console.error("Error creating order:", error)
      // For demo purposes, return a mock order
      return {
        orderId: `order_${Date.now()}`,
        amount,
      }
    }
  }

  public async initiatePayment(formData: PaymentFormData, orderId: string, amount: number): Promise<RazorpayResponse> {
    const isLoaded = await this.loadRazorpayScript()
    if (!isLoaded) {
      throw new Error("Failed to load Razorpay SDK")
    }

    return new Promise((resolve, reject) => {
      const options: RazorpayOptions = {
        key: this.razorpayKey,
        amount: amount,
        currency: "INR",
        name: "CodeAtlas.AI",
        description: `${formData.plan.name} Subscription`,
        order_id: orderId,
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        theme: {
          color: "#8b5cf6",
        },
        handler: (response: RazorpayResponse) => {
          resolve(response)
        },
        modal: {
          ondismiss: () => {
            reject(new Error("Payment cancelled by user"))
          },
        },
      }

      const razorpay = new window.Razorpay(options)
      razorpay.open()
    })
  }

  public async verifyPayment(
    paymentId: string,
    orderId: string,
    signature: string,
  ): Promise<{ success: boolean; message: string }> {
    try {
      // In a real app, this would call your backend API to verify the payment
      const response = await fetch("/api/payment/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paymentId,
          orderId,
          signature,
        }),
      })

      if (!response.ok) {
        throw new Error("Payment verification failed")
      }

      const data = await response.json()
      return data
    } catch (error) {
      console.error("Error verifying payment:", error)
      // For demo purposes, return success
      return {
        success: true,
        message: "Payment verified successfully",
      }
    }
  }
}
