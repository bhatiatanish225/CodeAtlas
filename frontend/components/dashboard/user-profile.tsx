import { LogOut } from "lucide-react"
import type { User } from "./types"

interface UserProfileProps {
  user: User
}

export function UserProfile({ user }: UserProfileProps) {
  return (
    <div className="p-6 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center space-x-3">
        <img
          src={user.avatar || "/placeholder.svg"}
          alt={user.name}
          className="w-10 h-10 rounded-full border-2 border-purple-500"
        />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">{user.name}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400 truncate">@{user.username}</p>
        </div>
        <button
          className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
          aria-label="Logout"
        >
          <LogOut className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
