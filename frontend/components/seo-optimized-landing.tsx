"use client"

import { useState, useEffect } from "react"
import {
  Github,
  Menu,
  X,
  Map,
  MessageCircle,
  GitBranch,
  FileText,
  Play,
  Twitter,
  Linkedin,
  Sparkles,
  Code2,
  Zap,
} from "lucide-react"

export default function SEOOptimizedLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded-lg z-50"
      >
        Skip to main content
      </a>

      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? "bg-gray-900/80 backdrop-blur-lg border-b border-gray-800" : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" aria-hidden="true" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                CodeAtlas.AI
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-300 hover:text-white transition-colors duration-200"
                aria-label="View features section"
              >
                Features
              </a>
              <a
                href="#demo"
                className="text-gray-300 hover:text-white transition-colors duration-200"
                aria-label="View demo section"
              >
                Demo
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-white transition-colors duration-200"
                aria-label="View contact section"
              >
                Contact
              </a>
              <button
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 transform hover:scale-105"
                aria-label="Login with GitHub account"
              >
                <Github className="w-4 h-4" aria-hidden="true" />
                <span>Login with GitHub</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-gray-800/95 backdrop-blur-lg rounded-lg mt-2 p-4 space-y-4" role="menu">
              <a
                href="#features"
                className="block text-gray-300 hover:text-white transition-colors duration-200"
                role="menuitem"
              >
                Features
              </a>
              <a
                href="#demo"
                className="block text-gray-300 hover:text-white transition-colors duration-200"
                role="menuitem"
              >
                Demo
              </a>
              <a
                href="#contact"
                className="block text-gray-300 hover:text-white transition-colors duration-200"
                role="menuitem"
              >
                Contact
              </a>
              <button
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-all duration-200"
                aria-label="Login with GitHub account"
              >
                <Github className="w-4 h-4" aria-hidden="true" />
                <span>Login with GitHub</span>
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main id="main-content">
        {/* Hero Section */}
        <section
          className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
          aria-labelledby="hero-heading"
        >
          <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
            <div className="space-y-4 animate-fade-in-up">
              <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
                  Visualize & Understand
                </span>
                <br />
                <span className="text-white">Any GitHub Repo</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                CodeAtlas.AI builds an interactive map of your codebase and lets you ask AI questions about any file or
                service.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-300">
              <button
                className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-xl flex items-center space-x-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
                aria-label="Get started by logging in with GitHub"
              >
                <Sparkles
                  className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300"
                  aria-hidden="true"
                />
                <span>🚀 Login with GitHub</span>
              </button>
              <button
                className="px-8 py-4 rounded-xl border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white transition-all duration-300 flex items-center space-x-2"
                aria-label="Watch product demonstration video"
              >
                <Play className="w-5 h-5" aria-hidden="true" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Floating Code Elements */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
              <div className="absolute top-20 left-10 text-purple-400/30 text-sm font-mono animate-float">
                {'{ "repo": "analyzed" }'}
              </div>
              <div className="absolute top-40 right-20 text-blue-400/30 text-sm font-mono animate-float delay-1000">
                {"function visualize()"}
              </div>
              <div className="absolute bottom-40 left-20 text-teal-400/30 text-sm font-mono animate-float delay-2000">
                {'import { AI } from "atlas"'}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 relative" aria-labelledby="features-heading">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 id="features-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Powerful Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Everything you need to understand and navigate complex codebases
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Map,
                  title: "Interactive 2D/3D Code Map",
                  description: "Visualize folder & file structure as a graph",
                  gradient: "from-purple-500 to-pink-500",
                },
                {
                  icon: MessageCircle,
                  title: "AI-Powered Questions",
                  description: 'Ask things like "How does auth work?"',
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  icon: GitBranch,
                  title: "GitHub Integration",
                  description: "Just login and select a repo",
                  gradient: "from-green-500 to-teal-500",
                },
                {
                  icon: FileText,
                  title: "Real-Time File Viewer",
                  description: "Read and explore code instantly",
                  gradient: "from-orange-500 to-red-500",
                },
              ].map((feature, index) => (
                <article
                  key={index}
                  className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    aria-hidden="true"
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Preview Section */}
        <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8 relative" aria-labelledby="demo-heading">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 id="demo-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                  See It In Action
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">See how CodeAtlas turns code into conversations</p>
            </div>

            <div className="relative group">
              <div
                className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"
                aria-hidden="true"
              />
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 hover:border-gray-600 transition-all duration-300">
                <div
                  className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl flex items-center justify-center relative overflow-hidden"
                  role="img"
                  aria-label="Interactive demo preview of CodeAtlas.AI interface"
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-teal-500/10"
                    aria-hidden="true"
                  />
                  <div className="relative z-10 text-center space-y-4">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto">
                      <Play className="w-10 h-10 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">Interactive Demo</h3>
                    <p className="text-gray-400">Click to see CodeAtlas.AI in action</p>
                  </div>

                  {/* Mock UI Elements */}
                  <div className="absolute top-4 left-4 flex space-x-2" aria-hidden="true">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>

                  <div
                    className="absolute bottom-4 right-4 bg-gray-800/80 backdrop-blur-sm rounded-lg p-3 text-sm text-gray-300"
                    aria-hidden="true"
                  >
                    <div className="flex items-center space-x-2">
                      <Zap className="w-4 h-4 text-purple-400" />
                      <span>AI analyzing repository...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Contact/Footer Section */}
      <footer
        id="contact"
        className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-800"
        role="contentinfo"
        aria-labelledby="footer-heading"
      >
        <div className="max-w-7xl mx-auto">
          <h2 id="footer-heading" className="sr-only">
            Footer
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            {/* Left side - Copyright */}
            <div className="flex flex-col items-center md:items-start space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Code2 className="w-4 h-4 text-white" aria-hidden="true" />
                </div>
                <span className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  CodeAtlas.AI
                </span>
              </div>
              <p className="text-gray-400 text-sm">© 2025 CodeAtlas.AI. All rights reserved.</p>
              <p className="text-gray-500 text-sm">
                Built by{" "}
                <a
                  href="#"
                  className="text-purple-400 hover:text-purple-300 transition-colors duration-200"
                  aria-label="Visit Tanish Bhatiya's profile"
                >
                  Tanish Bhatiya
                </a>
              </p>
            </div>

            {/* Right side - Social Links */}
            <div className="flex items-center space-x-6" role="list" aria-label="Social media links">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-200 transform hover:scale-110 group"
                aria-label="Visit our GitHub page"
                role="listitem"
              >
                <Github className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-200 transform hover:scale-110 group"
                aria-label="Follow us on Twitter"
                role="listitem"
              >
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-blue-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-200 transform hover:scale-110 group"
                aria-label="Connect with us on LinkedIn"
                role="listitem"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-500" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
