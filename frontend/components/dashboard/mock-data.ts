import type { Repository, TreeNode, ChatMessage, User } from "./types"

export const mockUser: User = {
  username: "tanishbhatiya",
  avatar: "/placeholder.svg?height=40&width=40",
  name: "Tanish Bhatiya",
}

export const mockRepos: Repository[] = [
  {
    id: 1,
    name: "codeatlas-frontend",
    description: "React frontend for CodeAtlas.AI",
    language: "TypeScript",
    stars: 42,
    private: false,
    updated: "2 hours ago",
  },
  {
    id: 2,
    name: "ai-code-analyzer",
    description: "AI-powered code analysis engine",
    language: "Python",
    stars: 128,
    private: true,
    updated: "1 day ago",
  },
  {
    id: 3,
    name: "github-integration",
    description: "GitHub API integration service",
    language: "Node.js",
    stars: 23,
    private: false,
    updated: "3 days ago",
  },
  {
    id: 4,
    name: "visualization-engine",
    description: "3D code visualization renderer",
    language: "JavaScript",
    stars: 67,
    private: false,
    updated: "1 week ago",
  },
  {
    id: 5,
    name: "auth-service",
    description: "Authentication microservice",
    language: "Go",
    stars: 15,
    private: true,
    updated: "2 weeks ago",
  },
]

export const mockFileTree: TreeNode = {
  name: "codeatlas-frontend",
  type: "folder",
  children: [
    {
      name: "src",
      type: "folder",
      children: [
        {
          name: "components",
          type: "folder",
          children: [
            { name: "Dashboard.tsx", type: "file", size: "2.4 KB" },
            { name: "Sidebar.tsx", type: "file", size: "1.8 KB" },
            { name: "CodeViewer.tsx", type: "file", size: "3.2 KB" },
          ],
        },
        {
          name: "services",
          type: "folder",
          children: [
            { name: "api.ts", type: "file", size: "1.5 KB" },
            { name: "auth.ts", type: "file", size: "2.1 KB" },
          ],
        },
        { name: "App.tsx", type: "file", size: "1.2 KB" },
        { name: "index.tsx", type: "file", size: "0.8 KB" },
      ],
    },
    {
      name: "public",
      type: "folder",
      children: [
        { name: "index.html", type: "file", size: "1.1 KB" },
        { name: "favicon.ico", type: "file", size: "4.2 KB" },
      ],
    },
    { name: "package.json", type: "file", size: "2.3 KB" },
    { name: "README.md", type: "file", size: "1.7 KB" },
  ],
}

export const mockChatHistory: ChatMessage[] = [
  {
    id: 1,
    type: "user",
    message: "How does authentication work in this codebase?",
    timestamp: "2 minutes ago",
  },
  {
    id: 2,
    type: "ai",
    message:
      "Based on the codebase analysis, authentication is handled through a JWT-based system. The auth.ts service manages token validation and user sessions. The flow goes: Login → JWT Token → Protected Routes → Dashboard access.",
    timestamp: "2 minutes ago",
  },
  {
    id: 3,
    type: "user",
    message: "What's the main entry point of the application?",
    timestamp: "5 minutes ago",
  },
  {
    id: 4,
    type: "ai",
    message:
      "The main entry point is src/index.tsx, which renders the App.tsx component. This follows the standard React application structure with the root component mounting to the DOM.",
    timestamp: "5 minutes ago",
  },
]
