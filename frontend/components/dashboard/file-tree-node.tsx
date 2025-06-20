"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight, FolderOpen, Folder, FileText } from "lucide-react"
import type { TreeNode } from "./types"

interface FileTreeNodeProps {
  node: TreeNode
  level: number
  onFileSelect: (file: TreeNode) => void
  selectedFile: TreeNode | null
}

export function FileTreeNode({ node, level, onFileSelect, selectedFile }: FileTreeNodeProps) {
  const [isExpanded, setIsExpanded] = useState(level < 2)

  const handleClick = () => {
    if (node.type === "folder") {
      setIsExpanded(!isExpanded)
    } else {
      onFileSelect(node)
    }
  }

  const isSelected = selectedFile?.name === node.name && node.type === "file"

  return (
    <div>
      <div
        className={`flex items-center space-x-2 py-2 px-3 rounded-lg cursor-pointer transition-all duration-200 ${
          isSelected ? "bg-purple-500/20 border border-purple-500/30" : "hover:bg-gray-100 dark:hover:bg-gray-800"
        }`}
        style={{ paddingLeft: `${level * 16 + 12}px` }}
        onClick={handleClick}
      >
        {node.type === "folder" ? (
          <>
            {isExpanded ? (
              <ChevronDown className="w-4 h-4 text-gray-500" />
            ) : (
              <ChevronRight className="w-4 h-4 text-gray-500" />
            )}
            {isExpanded ? (
              <FolderOpen className="w-4 h-4 text-blue-500" />
            ) : (
              <Folder className="w-4 h-4 text-blue-500" />
            )}
          </>
        ) : (
          <>
            <div className="w-4" />
            <FileText className="w-4 h-4 text-gray-500" />
          </>
        )}
        <span className="text-sm text-gray-700 dark:text-gray-300 flex-1">{node.name}</span>
        {node.type === "file" && <span className="text-xs text-gray-500">{node.size}</span>}
      </div>
      {node.type === "folder" && isExpanded && node.children && (
        <div>
          {node.children.map((child: TreeNode, index: number) => (
            <FileTreeNode
              key={index}
              node={child}
              level={level + 1}
              onFileSelect={onFileSelect}
              selectedFile={selectedFile}
            />
          ))}
        </div>
      )}
    </div>
  )
}
