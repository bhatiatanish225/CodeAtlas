"use client"

import { Menu, Code2 } from "lucide-react"

interface MobileHeaderProps {
  onMenuToggle: () => void
}

export function MobileHeader({ onMenuToggle }: MobileHeaderProps) {
  return (
    <div className="lg:hidden bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3">
      <div className="flex items-center justify-between">
        <button onClick={onMenuToggle} className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
          <Menu className="w-6 h-6" />
        </button>
        <div className="flex items-center space-x-2">
          <Code2 className="w-6 h-6 text-purple-500" />
          <span className="font-semibold text-gray-900 dark:text-white">CodeAtlas.AI</span>
        </div>
      </div>
    </div>
  )
}
