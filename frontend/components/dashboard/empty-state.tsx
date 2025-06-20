import { Code2 } from "lucide-react"

export function EmptyState() {
  return (
    <div className="text-center py-12">
      <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
        <Code2 className="w-12 h-12 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Welcome to CodeAtlas.AI</h3>
      <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
        Select a repository from the sidebar to start visualizing and understanding your code with AI.
      </p>
    </div>
  )
}
