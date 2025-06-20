import { Play } from "lucide-react"

export function DemoPreviewSection() {
  return (
    <section
      id="demo"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50"
      aria-labelledby="demo-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 id="demo-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              See It In Action
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            See how CodeAtlas turns your codebase into a conversation
          </p>
        </div>

        <div className="relative group">
          <div
            className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"
            aria-hidden="true"
          />
          <div className="relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-3xl p-8 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300">
            <div
              className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 rounded-2xl flex items-center justify-center relative overflow-hidden"
              role="img"
              aria-label="Interactive demo preview of CodeAtlas.AI interface"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-teal-500/10"
                aria-hidden="true"
              />
              <div className="relative z-10 text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto animate-pulse">
                  <Play className="w-10 h-10 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Interactive Demo</h3>
                <p className="text-gray-600 dark:text-gray-400">Click to see CodeAtlas.AI in action</p>
              </div>

              {/* Mock UI Elements */}
              <div className="absolute top-4 left-4 flex space-x-2" aria-hidden="true">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>

              <div
                className="absolute bottom-4 right-4 bg-gray-800/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-lg p-3 text-sm text-gray-300 dark:text-gray-400"
                aria-hidden="true"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                  <span>AI analyzing repository...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
