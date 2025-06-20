import { ArrowRight } from "lucide-react"

export function NewsletterSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="newsletter-heading">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
          <h2 id="newsletter-heading" className="text-2xl sm:text-3xl font-bold mb-4">
            Join 500+ devs staying in the loop
          </h2>
          <p className="text-purple-100 mb-6">Get updates on new features, tips, and exclusive early access</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Email address"
            />
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2">
              <span>Subscribe</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
