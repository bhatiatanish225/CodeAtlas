export function FeaturesSection() {
  const features = [
    {
      icon: "🗺",
      title: "Interactive Code Map",
      description: "Explore your repo visually",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: "🧠",
      title: "Ask AI Anything",
      description: "Understand any part of your code",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: "🔗",
      title: "GitHub Login",
      description: "Connect instantly",
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: "⚡",
      title: "No Setup Required",
      description: "Start exploring in seconds",
      gradient: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 relative" aria-labelledby="features-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 id="features-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Everything you need to understand and navigate complex codebases
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <article
              key={index}
              className="group bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
