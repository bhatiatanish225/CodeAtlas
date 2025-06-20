"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: "Is my code safe?",
      answer:
        "Yes! We use read-only GitHub permissions and never store your code. All analysis happens in real-time and data is encrypted in transit.",
    },
    {
      question: "Can I use private repos?",
      answer:
        "CodeAtlas.AI works with both public and private repositories. Your private code remains private and secure.",
    },
    {
      question: "Do you support monorepos?",
      answer:
        "Yes! CodeAtlas.AI is designed to handle complex monorepos and can visualize the relationships between different services and packages.",
    },
    {
      question: "How is this different from Copilot?",
      answer:
        "While Copilot helps you write code, CodeAtlas.AI helps you understand existing codebases through visual mapping and contextual AI conversations.",
    },
  ]

  return (
    <section
      id="faq"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 id="faq-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                aria-expanded={openFaq === index}
              >
                <span className="font-semibold text-gray-900 dark:text-white">{faq.question}</span>
                {openFaq === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                )}
              </button>
              {openFaq === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
