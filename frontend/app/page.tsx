"use client"

import { useState, useEffect } from "react"
import DashboardDemo from "@/components/dashboard-demo"
import { Background } from "@/components/landing/background"
import { Navbar } from "@/components/landing/navbar"
import { HeroSection } from "@/components/landing/hero-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { HowItWorksSection } from "@/components/landing/how-it-works-section"
import { ComparisonSection } from "@/components/landing/comparison-section"
import { DemoPreviewSection } from "@/components/landing/demo-preview-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { FAQSection } from "@/components/landing/faq-section"
import { NewsletterSection } from "@/components/landing/newsletter-section"
import { PricingSection } from "@/components/landing/pricing-section"
import { TechStackSection } from "@/components/landing/tech-stack-section"
import { Footer } from "@/components/landing/footer"

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0)
  const [showDemo, setShowDemo] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (showDemo) {
    return <DashboardDemo />
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 overflow-x-hidden">
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded-lg z-50"
      >
        Skip to main content
      </a>

      <Background />
      <Navbar scrollY={scrollY} />

      <main id="main-content">
        <HeroSection onShowDemo={() => setShowDemo(true)} />
        <FeaturesSection />
        <HowItWorksSection />
        <ComparisonSection />
        <DemoPreviewSection />
        <TestimonialsSection />
        <FAQSection />
        <NewsletterSection />
        <PricingSection />
        <TechStackSection />
      </main>

      <Footer />
    </div>
  )
}
