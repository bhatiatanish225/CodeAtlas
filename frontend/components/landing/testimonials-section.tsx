"use client"

import { useState, useEffect } from "react"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      text: "I understood a legacy repo in minutes. Magic!",
      author: "DevOps Engineer",
      initials: "DE",
      color: "from-purple-500 to-pink-500",
    },
    {
      text: "Perfect for onboarding new developers.",
      author: "Tech Lead",
      initials: "TL",
      color: "from-blue-500 to-cyan-500",
    },
    {
      text: "CodeAtlas saved me hours during audits.",
      author: "Security Analyst",
      initials: "SA",
      color: "from-green-500 to-teal-500",
    },
  ]

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="testimonials-heading">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 id="testimonials-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              What Developers Say
            </span>
          </h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
                    <div className="flex items-center space-x-4 mb-6">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold`}
                      >
                        {testimonial.initials}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</p>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-lg text-gray-700 dark:text-gray-300 italic">
                      "{testimonial.text}"
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === activeTestimonial ? "bg-purple-600" : "bg-gray-300 dark:bg-gray-600"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
