import type { ChatMessage } from "./types"

interface ChatMessageProps {
  message: ChatMessage
}

export function ChatMessageComponent({ message }: ChatMessageProps) {
  return (
    <div className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
          message.type === "user"
            ? "bg-purple-600 text-white"
            : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
        }`}
      >
        <p className="text-sm">{message.message}</p>
        <p
          className={`text-xs mt-2 ${message.type === "user" ? "text-purple-200" : "text-gray-500 dark:text-gray-400"}`}
        >
          {message.timestamp}
        </p>
      </div>
    </div>
  )
}
