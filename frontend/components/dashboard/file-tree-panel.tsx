"use client"

import { Download, Eye } from "lucide-react"
import { FileTreeNode } from "./file-tree-node"
import type { TreeNode } from "./types"

interface FileTreePanelProps {
  fileTree: TreeNode
  selectedFile: TreeNode | null
  onFileSelect: (file: TreeNode) => void
  onDownloadTree: () => void
  onViewMap: () => void
}

export function FileTreePanel({ fileTree, selectedFile, onFileSelect, onDownloadTree, onViewMap }: FileTreePanelProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">File Structure</h3>
          <div className="flex space-x-2">
            <button
              onClick={onDownloadTree}
              className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
              title="Download tree.json"
            >
              <Download className="w-4 h-4" />
            </button>
            <button
              className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
              title="View as graph"
            >
              <Eye className="w-4 h-4" />
            </button>
            <button
              onClick={onViewMap}
              className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
              title="View interactive map"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="p-4 max-h-96 overflow-y-auto">
        <FileTreeNode node={fileTree} level={0} onFileSelect={onFileSelect} selectedFile={selectedFile} />
      </div>
    </div>
  )
}
