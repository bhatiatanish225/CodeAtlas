"use client"

import { Sparkles, Play } from "lucide-react"

interface HeroSectionProps {
  onShowDemo: () => void
}

export function HeroSection({ onShowDemo }: HeroSectionProps) {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <div className="space-y-4 animate-fade-in-up">
          <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
              Visualize & Understand
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">Any GitHub Repo</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            CodeAtlas.AI builds an interactive map of your codebase and lets you ask AI questions about any file or
            service.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-300">
          <button className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-xl flex items-center space-x-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 text-white">
            <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" aria-hidden="true" />
            <span>🚀 Login with GitHub</span>
          </button>
          <button
            onClick={onShowDemo}
            className="px-8 py-4 rounded-xl border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 flex items-center space-x-2"
          >
            <Play className="w-5 h-5" aria-hidden="true" />
            <span>Try Dashboard Demo</span>
          </button>
        </div>

        {/* Floating Code Elements */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-20 left-10 text-purple-400/50 dark:text-purple-400/30 text-sm font-mono animate-float">
            {'{ "repo": "analyzed" }'}
          </div>
          <div className="absolute top-40 right-20 text-blue-400/50 dark:text-blue-400/30 text-sm font-mono animate-float delay-1000">
            {"function visualize()"}
          </div>
          <div className="absolute bottom-40 left-20 text-teal-400/50 dark:text-teal-400/30 text-sm font-mono animate-float delay-2000">
            {'import { AI } from "atlas"'}
          </div>
        </div>
      </div>
    </section>
  )
}
