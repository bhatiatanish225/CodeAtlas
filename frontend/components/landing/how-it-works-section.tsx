import { Github, FolderOpen, MessageCircle } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      step: "1",
      icon: Github,
      title: "Login with GitHub",
      description: "Securely connect your GitHub account with one click",
    },
    {
      step: "2",
      icon: FolderOpen,
      title: "Choose any repo",
      description: "Select any public or private repository to explore",
    },
    {
      step: "3",
      icon: MessageCircle,
      title: "Explore & Chat",
      description: "Visualize your code and ask AI questions about it",
    },
  ]

  return (
    <section
      id="how-it-works"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50"
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 id="how-it-works-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get started in three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 max-w-xs">{item.description}</p>
              </div>
              {index < 2 && (
                <div className="hidden md:block absolute top-10 left-full w-12 h-0.5 bg-gradient-to-r from-purple-300 to-blue-300 dark:from-purple-600 dark:to-blue-600 transform translate-x-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
