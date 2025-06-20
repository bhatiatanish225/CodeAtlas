"use client"

import { Search, Filter, GitBranch } from "lucide-react"
import type { Repository } from "./types"

interface RepositoryListProps {
  repositories: Repository[]
  selectedRepo: Repository | null
  onRepoSelect: (repo: Repository) => void
}

export function RepositoryList({ repositories, selectedRepo, onRepoSelect }: RepositoryListProps) {
  return (
    <div className="flex-1 overflow-y-auto p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Your Repositories</h3>
        <div className="flex space-x-2">
          <button className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
            <Search className="w-4 h-4" />
          </button>
          <button className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
            <Filter className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="space-y-2">
        {repositories.map((repo) => (
          <div
            key={repo.id}
            className={`p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
              selectedRepo?.id === repo.id
                ? "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-700"
                : "bg-gray-50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
            onClick={() => onRepoSelect(repo)}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white truncate">{repo.name}</h4>
                  {repo.private && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200">
                      Private
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 truncate">{repo.description}</p>
                <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500 dark:text-gray-400">
                  <span className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span>{repo.language}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <GitBranch className="w-3 h-3" />
                    <span>{repo.stars}</span>
                  </span>
                  <span>{repo.updated}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
