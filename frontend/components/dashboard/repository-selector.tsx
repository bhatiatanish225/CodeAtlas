"use client"

import { Sparkles } from "lucide-react"
import type { Repository } from "./types"

interface RepositorySelectorProps {
  repositories: Repository[]
  selectedRepo: Repository | null
  isAnalyzing: boolean
  onRepoSelect: (repo: Repository) => void
  onAnalyze: () => void
  onViewMap: () => void
}

export function RepositorySelector({
  repositories,
  selectedRepo,
  isAnalyzing,
  onRepoSelect,
  onAnalyze,
  onViewMap,
}: RepositorySelectorProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Select Repository</h2>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <select
            value={selectedRepo?.id || ""}
            onChange={(e) => {
              const repo = repositories.find((r) => r.id === Number.parseInt(e.target.value))
              if (repo) onRepoSelect(repo)
            }}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="">Choose a repository...</option>
            {repositories.map((repo) => (
              <option key={repo.id} value={repo.id}>
                {repo.name} ({repo.language})
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={onAnalyze}
          disabled={!selectedRepo || isAnalyzing}
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 disabled:cursor-not-allowed"
        >
          {isAnalyzing ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Analyzing...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4" />
              <span>Parse & Visualize</span>
            </>
          )}
        </button>
        <button
          onClick={onViewMap}
          disabled={!selectedRepo}
          className="px-6 py-3 bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-700 hover:to-green-700 disabled:from-gray-400 disabled:to-gray-500 text-white rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 disabled:cursor-not-allowed"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7"
            />
          </svg>
          <span>View Map</span>
        </button>
      </div>
    </div>
  )
}
