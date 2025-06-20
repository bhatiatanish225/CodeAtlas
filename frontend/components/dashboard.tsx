"use client"

import { useState } from "react"
import CodebaseMapViewer from "./codebase-map-viewer"
import { Sidebar } from "./dashboard/sidebar"
import { MobileHeader } from "./dashboard/mobile-header"
import { RepositorySelector } from "./dashboard/repository-selector"
import { FileTreePanel } from "./dashboard/file-tree-panel"
import { FileViewer } from "./dashboard/file-viewer"
import { AIChatSection } from "./dashboard/ai-chat-section"
import { EmptyState } from "./dashboard/empty-state"
import { mockUser, mockRepos, mockFileTree, mockChatHistory } from "./dashboard/mock-data"
import type { Repository, TreeNode, ChatMessage } from "./dashboard/types"

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedRepo, setSelectedRepo] = useState<Repository | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [showVisualization, setShowVisualization] = useState(false)
  const [selectedFile, setSelectedFile] = useState<TreeNode | null>(null)
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>(mockChatHistory)
  const [isAiTyping, setIsAiTyping] = useState(false)
  const [showMapViewer, setShowMapViewer] = useState(false)

  const handleRepoSelect = (repo: Repository) => {
    setSelectedRepo(repo)
    setShowVisualization(false)
    setSelectedFile(null)
  }

  const handleAnalyzeRepo = async () => {
    if (!selectedRepo) return

    setIsAnalyzing(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsAnalyzing(false)
    setShowVisualization(true)
  }

  const handleSendMessage = async (message: string) => {
    const userMessage: ChatMessage = {
      id: Date.now(),
      type: "user",
      message,
      timestamp: "Just now",
    }

    setChatHistory((prev) => [userMessage, ...prev])
    setIsAiTyping(true)

    // Simulate AI response
    await new Promise((resolve) => setTimeout(resolve, 1500))

    const aiMessage: ChatMessage = {
      id: Date.now() + 1,
      type: "ai",
      message: `Based on your question about "${message}", I can see that this relates to the ${
        selectedFile?.name || "codebase structure"
      }. The implementation follows modern best practices with proper separation of concerns.`,
      timestamp: "Just now",
    }

    setChatHistory((prev) => [aiMessage, ...prev])
    setIsAiTyping(false)
  }

  const handleFileSelect = (file: TreeNode) => {
    setSelectedFile(file)
  }

  const downloadTreeJson = () => {
    const dataStr = JSON.stringify(mockFileTree, null, 2)
    const dataUri = "data:application/json;charset=utf-8," + encodeURIComponent(dataStr)
    const exportFileDefaultName = `${selectedRepo?.name || "repo"}-tree.json`

    const linkElement = document.createElement("a")
    linkElement.setAttribute("href", dataUri)
    linkElement.setAttribute("download", exportFileDefaultName)
    linkElement.click()
  }

  // Show map viewer if requested
  if (showMapViewer && selectedRepo) {
    return <CodebaseMapViewer repoName={selectedRepo.name} onBack={() => setShowMapViewer(false)} />
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      <Sidebar
        user={mockUser}
        repositories={mockRepos}
        selectedRepo={selectedRepo}
        onRepoSelect={handleRepoSelect}
        isOpen={sidebarOpen}
      />

      {/* Main Content */}
      <div className="flex-1 lg:ml-0">
        <MobileHeader onMenuToggle={() => setSidebarOpen(true)} />

        {/* Main Panel */}
        <div className="p-6 space-y-6">
          {/* Repository Selection */}
          <RepositorySelector
            repositories={mockRepos}
            selectedRepo={selectedRepo}
            isAnalyzing={isAnalyzing}
            onRepoSelect={handleRepoSelect}
            onAnalyze={handleAnalyzeRepo}
            onViewMap={() => setShowMapViewer(true)}
          />

          {/* Code Visualization */}
          {showVisualization && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <FileTreePanel
                fileTree={mockFileTree}
                selectedFile={selectedFile}
                onFileSelect={handleFileSelect}
                onDownloadTree={downloadTreeJson}
                onViewMap={() => setShowMapViewer(true)}
              />
              <FileViewer selectedFile={selectedFile} />
            </div>
          )}

          {/* AI Chat Section */}
          {showVisualization && (
            <AIChatSection chatHistory={chatHistory} isAiTyping={isAiTyping} onSendMessage={handleSendMessage} />
          )}

          {/* Empty State */}
          {!selectedRepo && <EmptyState />}
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}
    </div>
  )
}
