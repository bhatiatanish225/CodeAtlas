export interface Repository {
  id: number
  name: string
  description: string
  language: string
  stars: number
  private: boolean
  updated: string
}

export interface TreeNode {
  name: string
  type: "file" | "folder"
  path?: string
  size?: string
  children?: TreeNode[]
}

export interface ChatMessage {
  id: number
  type: "user" | "ai"
  message: string
  timestamp: string
}

export interface User {
  username: string
  avatar: string
  name: string
}
