import { UserProfile } from "./user-profile"
import { RepositoryList } from "./repository-list"
import type { User, Repository } from "./types"

interface SidebarProps {
  user: User
  repositories: Repository[]
  selectedRepo: Repository | null
  onRepoSelect: (repo: Repository) => void
  isOpen: boolean
}

export function Sidebar({ user, repositories, selectedRepo, onRepoSelect, isOpen }: SidebarProps) {
  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-80 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex flex-col h-full">
        <UserProfile user={user} />
        <RepositoryList repositories={repositories} selectedRepo={selectedRepo} onRepoSelect={onRepoSelect} />
      </div>
    </div>
  )
}
