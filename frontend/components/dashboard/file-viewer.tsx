import { FileText } from "lucide-react"
import type { TreeNode } from "./types"

interface FileViewerProps {
  selectedFile: TreeNode | null
}

export function FileViewer({ selectedFile }: FileViewerProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {selectedFile ? selectedFile.name : "Select a file"}
        </h3>
      </div>
      <div className="p-4">
        {selectedFile ? (
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 font-mono text-sm">
            <div className="text-gray-600 dark:text-gray-400">
              <div className="text-green-600 dark:text-green-400">// {selectedFile.name}</div>
              <div className="text-blue-600 dark:text-blue-400">import React from 'react'</div>
              <div className="text-purple-600 dark:text-purple-400">
                export default function {selectedFile.name.replace(".tsx", "")}() {"{"}
              </div>
              <div className="ml-4 text-gray-700 dark:text-gray-300">
                return (
                <br />
                <span className="ml-4">
                  &lt;div className="component"&gt;
                  <br />
                  <span className="ml-4">// Component implementation</span>
                  <br />
                  &lt;/div&gt;
                </span>
                <br />)
              </div>
              <div className="text-purple-600 dark:text-purple-400">{"}"}</div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>Select a file from the tree to view its contents</p>
          </div>
        )}
      </div>
    </div>
  )
}
