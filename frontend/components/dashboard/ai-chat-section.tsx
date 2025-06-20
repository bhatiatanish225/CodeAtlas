"use client"

import type React from "react"

import { useState } from "react"
import { MessageCircle, Send } from "lucide-react"
import { ChatMessageComponent } from "./chat-message"
import { TypingIndicator } from "./typing-indicator"
import type { ChatMessage } from "./types"

interface AIChatSectionProps {
  chatHistory: ChatMessage[]
  isAiTyping: boolean
  onSendMessage: (message: string) => void
}

export function AIChatSection({ chatHistory, isAiTyping, onSendMessage }: AIChatSectionProps) {
  const [chatMessage, setChatMessage] = useState("")

  const handleSendMessage = () => {
    if (!chatMessage.trim()) return
    onSendMessage(chatMessage)
    setChatMessage("")
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-2">
          <MessageCircle className="w-5 h-5 text-purple-500" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Ask AI About Code</h3>
          <div className="flex items-center space-x-1 text-xs text-green-600 dark:text-green-400">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>AI Ready</span>
          </div>
        </div>
      </div>

      {/* Chat History */}
      <div className="p-4 max-h-80 overflow-y-auto space-y-4">
        {chatHistory.map((message) => (
          <ChatMessageComponent key={message.id} message={message} />
        ))}
        {isAiTyping && <TypingIndicator />}
      </div>

      {/* Chat Input */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex space-x-3">
          <input
            type="text"
            value={chatMessage}
            onChange={(e) => setChatMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask anything about the code..."
            className="flex-1 px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <button
            onClick={handleSendMessage}
            disabled={!chatMessage.trim() || isAiTyping}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 disabled:cursor-not-allowed"
          >
            <Send className="w-4 h-4" />
            <span className="hidden sm:inline">Ask</span>
          </button>
        </div>
      </div>
    </div>
  )
}
