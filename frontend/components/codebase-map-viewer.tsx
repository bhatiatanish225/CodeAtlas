"use client"

import type React from "react"
import { useState, useEffect, useRef, useCallback, useMemo } from "react"
import {
  ArrowLeft,
  Search,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  FileText,
  Folder,
  FolderOpen,
  MessageCircle,
  Eye,
  Code2,
  ChevronRight,
  Info,
  Play,
  Pause,
  Maximize2,
  Download,
} from "lucide-react"

// Enhanced mock data structure with more realistic content
const mockCodebaseData = {
  name: "codeatlas-frontend",
  type: "folder",
  path: "/",
  size: "2.4 MB",
  children: [
    {
      name: "src",
      type: "folder",
      path: "/src",
      size: "1.8 MB",
      children: [
        {
          name: "components",
          type: "folder",
          path: "/src/components",
          size: "850 KB",
          children: [
            {
              name: "Dashboard.tsx",
              type: "file",
              path: "/src/components/Dashboard.tsx",
              size: "12.4 KB",
              language: "typescript",
            },
            {
              name: "Sidebar.tsx",
              type: "file",
              path: "/src/components/Sidebar.tsx",
              size: "8.2 KB",
              language: "typescript",
            },
            {
              name: "CodeViewer.tsx",
              type: "file",
              path: "/src/components/CodeViewer.tsx",
              size: "15.6 KB",
              language: "typescript",
            },
            {
              name: "MapViewer.tsx",
              type: "file",
              path: "/src/components/MapViewer.tsx",
              size: "22.1 KB",
              language: "typescript",
            },
            {
              name: "ui",
              type: "folder",
              path: "/src/components/ui",
              size: "120 KB",
              children: [
                {
                  name: "Button.tsx",
                  type: "file",
                  path: "/src/components/ui/Button.tsx",
                  size: "4.2 KB",
                  language: "typescript",
                },
                {
                  name: "Input.tsx",
                  type: "file",
                  path: "/src/components/ui/Input.tsx",
                  size: "3.1 KB",
                  language: "typescript",
                },
                {
                  name: "Modal.tsx",
                  type: "file",
                  path: "/src/components/ui/Modal.tsx",
                  size: "6.8 KB",
                  language: "typescript",
                },
              ],
            },
          ],
        },
        {
          name: "services",
          type: "folder",
          path: "/src/services",
          size: "320 KB",
          children: [
            { name: "api.ts", type: "file", path: "/src/services/api.ts", size: "8.5 KB", language: "typescript" },
            { name: "auth.ts", type: "file", path: "/src/services/auth.ts", size: "6.2 KB", language: "typescript" },
            {
              name: "github.ts",
              type: "file",
              path: "/src/services/github.ts",
              size: "14.8 KB",
              language: "typescript",
            },
            {
              name: "websocket.ts",
              type: "file",
              path: "/src/services/websocket.ts",
              size: "9.3 KB",
              language: "typescript",
            },
          ],
        },
        {
          name: "utils",
          type: "folder",
          path: "/src/utils",
          size: "180 KB",
          children: [
            { name: "helpers.ts", type: "file", path: "/src/utils/helpers.ts", size: "4.2 KB", language: "typescript" },
            {
              name: "constants.ts",
              type: "file",
              path: "/src/utils/constants.ts",
              size: "2.1 KB",
              language: "typescript",
            },
            {
              name: "formatters.ts",
              type: "file",
              path: "/src/utils/formatters.ts",
              size: "3.8 KB",
              language: "typescript",
            },
          ],
        },
        {
          name: "hooks",
          type: "folder",
          path: "/src/hooks",
          size: "95 KB",
          children: [
            { name: "useAuth.ts", type: "file", path: "/src/hooks/useAuth.ts", size: "5.2 KB", language: "typescript" },
            {
              name: "useLocalStorage.ts",
              type: "file",
              path: "/src/hooks/useLocalStorage.ts",
              size: "2.8 KB",
              language: "typescript",
            },
            {
              name: "useWebSocket.ts",
              type: "file",
              path: "/src/hooks/useWebSocket.ts",
              size: "7.1 KB",
              language: "typescript",
            },
          ],
        },
        { name: "App.tsx", type: "file", path: "/src/App.tsx", size: "3.2 KB", language: "typescript" },
        { name: "index.tsx", type: "file", path: "/src/index.tsx", size: "1.8 KB", language: "typescript" },
        { name: "index.css", type: "file", path: "/src/index.css", size: "2.4 KB", language: "css" },
      ],
    },
    {
      name: "public",
      type: "folder",
      path: "/public",
      size: "450 KB",
      children: [
        { name: "index.html", type: "file", path: "/public/index.html", size: "2.1 KB", language: "html" },
        { name: "favicon.ico", type: "file", path: "/public/favicon.ico", size: "4.2 KB", language: "binary" },
        { name: "manifest.json", type: "file", path: "/public/manifest.json", size: "1.5 KB", language: "json" },
        { name: "robots.txt", type: "file", path: "/public/robots.txt", size: "0.3 KB", language: "text" },
      ],
    },
    {
      name: "tests",
      type: "folder",
      path: "/tests",
      size: "120 KB",
      children: [
        { name: "App.test.tsx", type: "file", path: "/tests/App.test.tsx", size: "2.8 KB", language: "typescript" },
        { name: "utils.test.ts", type: "file", path: "/tests/utils.test.ts", size: "3.4 KB", language: "typescript" },
        {
          name: "components.test.tsx",
          type: "file",
          path: "/tests/components.test.tsx",
          size: "5.9 KB",
          language: "typescript",
        },
      ],
    },
    { name: "package.json", type: "file", path: "/package.json", size: "2.3 KB", language: "json" },
    { name: "README.md", type: "file", path: "/README.md", size: "4.7 KB", language: "markdown" },
    { name: "tsconfig.json", type: "file", path: "/tsconfig.json", size: "1.2 KB", language: "json" },
    { name: ".gitignore", type: "file", path: "/.gitignore", size: "0.8 KB", language: "text" },
    { name: "tailwind.config.js", type: "file", path: "/tailwind.config.js", size: "1.1 KB", language: "javascript" },
  ],
}

interface TreeNode {
  name: string
  type: "file" | "folder"
  path: string
  size?: string
  language?: string
  children?: TreeNode[]
  x?: number
  y?: number
  z?: number
  expanded?: boolean
  level?: number
  id?: string
}

interface Node2D extends TreeNode {
  x: number
  y: number
  expanded: boolean
  level: number
  id: string
}

interface Node3D extends TreeNode {
  x: number
  y: number
  z: number
  id: string
  vx?: number
  vy?: number
  vz?: number
}

// Utility functions
const generateId = (path: string) => path.replace(/[^a-zA-Z0-9]/g, "_")

const getFileIcon = (node: TreeNode) => {
  if (node.type === "folder") {
    return node.expanded ? FolderOpen : Folder
  }
  return FileText
}

const getFileColor = (node: TreeNode, isSelected = false) => {
  if (isSelected) return "#8b5cf6"

  if (node.type === "folder") return "#3b82f6"

  switch (node.language) {
    case "typescript":
      return "#3178c6"
    case "javascript":
      return "#f7df1e"
    case "css":
      return "#1572b6"
    case "html":
      return "#e34f26"
    case "json":
      return "#000000"
    case "markdown":
      return "#083fa1"
    default:
      return "#10b981"
  }
}

// 2D Tree View Component
function TreeView2D({
  data,
  onNodeClick,
  selectedNode,
  searchTerm,
}: {
  data: TreeNode
  onNodeClick: (node: TreeNode) => void
  selectedNode: TreeNode | null
  searchTerm: string
}) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [nodes, setNodes] = useState<Node2D[]>([])
  const [transform, setTransform] = useState({ x: 400, y: 50, scale: 1 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [hoveredNode, setHoveredNode] = useState<Node2D | null>(null)

  const flattenTree = useCallback((node: TreeNode, level = 0, x = 0, y = 0): Node2D[] => {
    const result: Node2D[] = []
    const nodeWithPosition: Node2D = {
      ...node,
      x,
      y,
      level,
      expanded: node.expanded !== undefined ? node.expanded : level < 2,
      id: generateId(node.path),
    }
    result.push(nodeWithPosition)

    if (node.children && nodeWithPosition.expanded) {
      const childSpacing = Math.max(150, 400 / Math.pow(2, level))
      const totalWidth = (node.children.length - 1) * childSpacing
      const startX = x - totalWidth / 2

      node.children.forEach((child, index) => {
        const childX = startX + index * childSpacing
        const childY = y + 150
        result.push(...flattenTree(child, level + 1, childX, childY))
      })
    }

    return result
  }, [])

  useEffect(() => {
    const flatNodes = flattenTree(data)
    setNodes(flatNodes)
  }, [data, flattenTree])

  const handleNodeClick = (node: Node2D) => {
    if (node.type === "folder") {
      const updatedData = { ...data }
      const toggleExpanded = (current: TreeNode, target: Node2D): TreeNode => {
        if (current.path === target.path) {
          return { ...current, expanded: !current.expanded }
        }
        if (current.children) {
          return {
            ...current,
            children: current.children.map((child) => toggleExpanded(child, target)),
          }
        }
        return current
      }
      const newData = toggleExpanded(updatedData, node)
      setNodes(flattenTree(newData))
    }
    onNodeClick(node)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.target === svgRef.current) {
      setIsDragging(true)
      setDragStart({ x: e.clientX - transform.x, y: e.clientY - transform.y })
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setTransform({
        ...transform,
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    const delta = e.deltaY > 0 ? 0.9 : 1.1
    setTransform((prev) => ({
      ...prev,
      scale: Math.max(0.1, Math.min(3, prev.scale * delta)),
    }))
  }

  const filteredNodes = useMemo(() => {
    return nodes.filter((node) => (searchTerm ? node.name.toLowerCase().includes(searchTerm.toLowerCase()) : true))
  }, [nodes, searchTerm])

  const connections = useMemo(() => {
    const links: { source: Node2D; target: Node2D }[] = []
    filteredNodes.forEach((node) => {
      if (node.children && node.expanded) {
        node.children.forEach((child) => {
          const childNode = filteredNodes.find((n) => n.path === child.path)
          if (childNode) {
            links.push({ source: node, target: childNode })
          }
        })
      }
    })
    return links
  }, [filteredNodes])

  return (
    <div className="w-full h-full relative overflow-hidden bg-gray-900 rounded-lg">
      <svg
        ref={svgRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
      >
        <defs>
          <filter id="glow2d">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        <g transform={`translate(${transform.x}, ${transform.y}) scale(${transform.scale})`}>
          {/* Render connections */}
          {connections.map((link, index) => (
            <line
              key={`connection-${index}`}
              x1={link.source.x}
              y1={link.source.y}
              x2={link.target.x}
              y2={link.target.y}
              stroke="url(#connectionGradient)"
              strokeWidth="2"
              className="transition-all duration-300"
            />
          ))}

          {/* Render nodes */}
          {filteredNodes.map((node) => {
            const isSelected = selectedNode?.path === node.path
            const isHovered = hoveredNode?.path === node.path
            const nodeColor = getFileColor(node, isSelected)
            const nodeSize = node.type === "folder" ? 25 : 20
            const IconComponent = getFileIcon(node)

            return (
              <g
                key={node.id}
                className="cursor-pointer group"
                onClick={() => handleNodeClick(node)}
                onMouseEnter={() => setHoveredNode(node)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                {/* Node background circle */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={nodeSize + (isHovered ? 5 : 0)}
                  fill={nodeColor}
                  filter="url(#glow2d)"
                  className="transition-all duration-300"
                  style={{
                    filter: `drop-shadow(0 0 ${isSelected ? "15px" : isHovered ? "10px" : "5px"} ${nodeColor})`,
                  }}
                />

                {/* Node icon */}
                <foreignObject x={node.x - 12} y={node.y - 12} width={24} height={24} className="pointer-events-none">
                  <IconComponent className="w-6 h-6 text-white" />
                </foreignObject>

                {/* Node label */}
                <text
                  x={node.x}
                  y={node.y + nodeSize + 20}
                  textAnchor="middle"
                  className="fill-white text-sm font-medium pointer-events-none transition-opacity duration-300"
                  style={{
                    filter: "drop-shadow(0 0 3px rgba(0,0,0,0.8))",
                    opacity: isHovered || isSelected ? 1 : 0.8,
                  }}
                >
                  {node.name}
                </text>

                {/* Hover tooltip */}
                {isHovered && (
                  <g className="pointer-events-none">
                    <rect
                      x={node.x - 100}
                      y={node.y - nodeSize - 50}
                      width={200}
                      height={40}
                      fill="rgba(0, 0, 0, 0.9)"
                      rx="8"
                      className="transition-opacity duration-300"
                    />
                    <text
                      x={node.x}
                      y={node.y - nodeSize - 35}
                      textAnchor="middle"
                      className="fill-white text-xs font-medium"
                    >
                      {node.path}
                    </text>
                    <text x={node.x} y={node.y - nodeSize - 20} textAnchor="middle" className="fill-gray-300 text-xs">
                      {node.size || `${node.type}`}
                    </text>
                  </g>
                )}
              </g>
            )
          })}
        </g>
      </svg>

      {/* 2D Controls */}
      <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
        <button
          onClick={() => setTransform((prev) => ({ ...prev, scale: prev.scale * 1.2 }))}
          className="p-3 bg-gray-800/90 hover:bg-gray-700 rounded-lg text-white transition-all duration-200 backdrop-blur-sm border border-gray-600"
          title="Zoom In"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <button
          onClick={() => setTransform((prev) => ({ ...prev, scale: prev.scale * 0.8 }))}
          className="p-3 bg-gray-800/90 hover:bg-gray-700 rounded-lg text-white transition-all duration-200 backdrop-blur-sm border border-gray-600"
          title="Zoom Out"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        <button
          onClick={() => setTransform({ x: 400, y: 50, scale: 1 })}
          className="p-3 bg-gray-800/90 hover:bg-gray-700 rounded-lg text-white transition-all duration-200 backdrop-blur-sm border border-gray-600"
          title="Reset View"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      {/* Node count indicator */}
      <div className="absolute top-4 left-4 bg-gray-800/90 backdrop-blur-sm border border-gray-600 rounded-lg px-3 py-2 text-white text-sm">
        {filteredNodes.length} nodes
      </div>
    </div>
  )
}

// 3D Force Graph Component
function TreeView3D({
  data,
  onNodeClick,
  selectedNode,
  searchTerm,
}: {
  data: TreeNode
  onNodeClick: (node: TreeNode) => void
  selectedNode: TreeNode | null
  searchTerm: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [nodes, setNodes] = useState<Node3D[]>([])
  const [links, setLinks] = useState<{ source: string; target: string }[]>([])
  const animationRef = useRef<number>()
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [isAutoRotating, setIsAutoRotating] = useState(true)
  const [hoveredNode, setHoveredNode] = useState<Node3D | null>(null)
  const [cameraDistance, setCameraDistance] = useState(800)

  const flattenTreeFor3D = useCallback((node: TreeNode, level = 0): { nodes: Node3D[]; links: any[] } => {
    const nodes: Node3D[] = []
    const links: { source: string; target: string }[] = []

    const addNode = (current: TreeNode, currentLevel: number, parentPath?: string) => {
      // Create more organized 3D positioning
      const radius = 150 + currentLevel * 100
      const angleStep = (Math.PI * 2) / Math.max(1, current.children?.length || 1)
      const angle = Math.random() * Math.PI * 2
      const height = (currentLevel - 2) * 80 + (Math.random() - 0.5) * 40

      const node3D: Node3D = {
        ...current,
        x: Math.cos(angle) * radius,
        y: height,
        z: Math.sin(angle) * radius,
        level: currentLevel,
        id: generateId(current.path),
      }

      nodes.push(node3D)

      if (parentPath) {
        links.push({ source: parentPath, target: current.path })
      }

      if (current.children) {
        current.children.forEach((child, index) => {
          addNode(child, currentLevel + 1, current.path)
        })
      }
    }

    addNode(node, level)
    return { nodes, links }
  }, [])

  useEffect(() => {
    const { nodes: flatNodes, links: flatLinks } = flattenTreeFor3D(data)
    setNodes(flatNodes)
    setLinks(flatLinks)
  }, [data, flattenTreeFor3D])

  useEffect(() => {
    if (isAutoRotating) {
      const animate = () => {
        setRotation((prev) => ({
          x: prev.x + 0.003,
          y: prev.y + 0.005,
        }))
        animationRef.current = requestAnimationFrame(animate)
      }
      animationRef.current = requestAnimationFrame(animate)
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isAutoRotating])

  const filteredNodes = useMemo(() => {
    return nodes.filter((node) => (searchTerm ? node.name.toLowerCase().includes(searchTerm.toLowerCase()) : true))
  }, [nodes, searchTerm])

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    const delta = e.deltaY > 0 ? 1.1 : 0.9
    setCameraDistance((prev) => Math.max(200, Math.min(2000, prev * delta)))
  }

  const projectedNodes = useMemo(() => {
    return filteredNodes
      .map((node) => {
        // Apply 3D transformations
        const rotatedX = node.x * Math.cos(rotation.y) - node.z * Math.sin(rotation.y)
        const rotatedZ = node.x * Math.sin(rotation.y) + node.z * Math.cos(rotation.y)
        const rotatedY = node.y * Math.cos(rotation.x) - rotatedZ * Math.sin(rotation.x)
        const finalZ = node.y * Math.sin(rotation.x) + rotatedZ * Math.cos(rotation.x)

        // Project to 2D screen coordinates
        const perspective = cameraDistance / (cameraDistance + finalZ)
        const screenX = 400 + rotatedX * perspective
        const screenY = 300 + rotatedY * perspective
        const scale = perspective

        return {
          ...node,
          screenX,
          screenY,
          scale,
          depth: finalZ,
        }
      })
      .sort((a, b) => a.depth - b.depth) // Sort by depth for proper rendering order
  }, [filteredNodes, rotation, cameraDistance])

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative overflow-hidden bg-gray-900 rounded-lg"
      onMouseEnter={() => setIsAutoRotating(false)}
      onMouseLeave={() => setIsAutoRotating(true)}
      onWheel={handleWheel}
    >
      <div className="w-full h-full">
        <svg className="w-full h-full absolute inset-0">
          <defs>
            <filter id="glow3d">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <radialGradient id="nodeGradient" cx="50%" cy="30%" r="70%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>
          </defs>

          {/* Render connections */}
          {links.map((link, index) => {
            const sourceNode = projectedNodes.find((n) => n.path === link.source)
            const targetNode = projectedNodes.find((n) => n.path === link.target)
            if (!sourceNode || !targetNode) return null

            const opacity = Math.min(sourceNode.scale, targetNode.scale) * 0.6

            return (
              <line
                key={`link-${index}`}
                x1={sourceNode.screenX}
                y1={sourceNode.screenY}
                x2={targetNode.screenX}
                y2={targetNode.screenY}
                stroke={`rgba(59, 130, 246, ${opacity})`}
                strokeWidth={Math.max(0.5, 2 * Math.min(sourceNode.scale, targetNode.scale))}
                className="transition-all duration-300"
                filter="url(#glow3d)"
              />
            )
          })}

          {/* Render nodes */}
          {projectedNodes.map((node) => {
            const isSelected = selectedNode?.path === node.path
            const isHovered = hoveredNode?.path === node.path
            const nodeColor = getFileColor(node, isSelected)
            const nodeSize = (node.type === "folder" ? 12 : 8) * node.scale
            const opacity = Math.max(0.3, Math.min(1, node.scale))

            return (
              <g
                key={node.id}
                className="cursor-pointer group"
                onClick={() => onNodeClick(node)}
                onMouseEnter={() => setHoveredNode(node)}
                onMouseLeave={() => setHoveredNode(null)}
                style={{ opacity }}
              >
                {/* Node glow effect */}
                <circle
                  cx={node.screenX}
                  cy={node.screenY}
                  r={nodeSize + (isSelected ? 8 : isHovered ? 4 : 0)}
                  fill={nodeColor}
                  filter="url(#glow3d)"
                  className="transition-all duration-300"
                  style={{
                    filter: `drop-shadow(0 0 ${isSelected ? "20px" : isHovered ? "15px" : "10px"} ${nodeColor})`,
                  }}
                />

                {/* Node highlight */}
                <circle
                  cx={node.screenX}
                  cy={node.screenY}
                  r={nodeSize * 0.7}
                  fill="url(#nodeGradient)"
                  className="pointer-events-none"
                />

                {/* Node label on hover */}
                {(isHovered || isSelected) && node.scale > 0.5 && (
                  <g className="pointer-events-none">
                    <rect
                      x={node.screenX - 60}
                      y={node.screenY - nodeSize - 35}
                      width={120}
                      height={25}
                      fill="rgba(0, 0, 0, 0.9)"
                      rx="4"
                      className="transition-opacity duration-300"
                    />
                    <text
                      x={node.screenX}
                      y={node.screenY - nodeSize - 20}
                      textAnchor="middle"
                      className="fill-white text-xs font-medium"
                    >
                      {node.name}
                    </text>
                  </g>
                )}
              </g>
            )
          })}
        </svg>
      </div>

      {/* 3D Controls */}
      <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
        <button
          onClick={() => setIsAutoRotating(!isAutoRotating)}
          className={`p-3 rounded-lg text-white transition-all duration-200 backdrop-blur-sm border ${
            isAutoRotating
              ? "bg-purple-600/90 border-purple-500 hover:bg-purple-700"
              : "bg-gray-800/90 border-gray-600 hover:bg-gray-700"
          }`}
          title={isAutoRotating ? "Pause Rotation" : "Start Rotation"}
        >
          {isAutoRotating ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>
        <button
          onClick={() => setRotation({ x: 0, y: 0 })}
          className="p-3 bg-gray-800/90 hover:bg-gray-700 rounded-lg text-white transition-all duration-200 backdrop-blur-sm border border-gray-600"
          title="Reset Rotation"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      {/* 3D Info */}
      <div className="absolute top-4 left-4 bg-gray-800/90 backdrop-blur-sm border border-gray-600 rounded-lg px-3 py-2 text-white text-sm">
        <div>{projectedNodes.length} nodes</div>
        <div className="text-xs text-gray-400">{isAutoRotating ? "Auto-rotating" : "Manual control"}</div>
      </div>
    </div>
  )
}

// Main Codebase Map Viewer Component
export default function CodebaseMapViewer({
  repoName = "codeatlas-frontend",
  onBack,
}: {
  repoName?: string
  onBack?: () => void
}) {
  const [viewMode, setViewMode] = useState<"2D" | "3D">("2D")
  const [selectedNode, setSelectedNode] = useState<TreeNode | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [showFilePanel, setShowFilePanel] = useState(false)

  const handleNodeClick = (node: TreeNode) => {
    setSelectedNode(node)
    setShowFilePanel(true)
  }

  const handleBackToRepo = () => {
    if (onBack) {
      onBack()
    } else {
      console.log("Navigate back to repository selection")
    }
  }

  const handleAskAI = () => {
    if (selectedNode) {
      console.log(`Ask AI about: ${selectedNode.path}`)
    }
  }

  const handleExportView = () => {
    console.log("Export current view")
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Top Bar */}
      <div className="bg-gray-800 border-b border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={handleBackToRepo}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-all duration-200 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
              <span>Back to Repo</span>
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-lg">{repoName}</span>
              <span className="text-sm text-gray-400">• Map View</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search files and folders..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-64 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  ×
                </button>
              )}
            </div>

            {/* Export Button */}
            <button
              onClick={handleExportView}
              className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-gray-300 hover:text-white transition-all duration-200"
              title="Export View"
            >
              <Download className="w-4 h-4" />
            </button>

            {/* View Mode Toggle */}
            <div className="flex bg-gray-700 rounded-lg p-1 border border-gray-600">
              <button
                onClick={() => setViewMode("2D")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                  viewMode === "2D"
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25"
                    : "text-gray-300 hover:text-white hover:bg-gray-600"
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span>2D View</span>
              </button>
              <button
                onClick={() => setViewMode("3D")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                  viewMode === "3D"
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25"
                    : "text-gray-300 hover:text-white hover:bg-gray-600"
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
                <span>3D View</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex h-[calc(100vh-80px)]">
        {/* Map Viewer */}
        <div className="flex-1 p-6">
          <div className="h-full rounded-xl border border-gray-700 overflow-hidden shadow-2xl">
            {viewMode === "2D" ? (
              <TreeView2D
                data={mockCodebaseData}
                onNodeClick={handleNodeClick}
                selectedNode={selectedNode}
                searchTerm={searchTerm}
              />
            ) : (
              <TreeView3D
                data={mockCodebaseData}
                onNodeClick={handleNodeClick}
                selectedNode={selectedNode}
                searchTerm={searchTerm}
              />
            )}
          </div>
        </div>

        {/* File Info Panel */}
        <div
          className={`w-80 bg-gray-800 border-l border-gray-700 transition-transform duration-300 ${
            showFilePanel ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 h-full flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">File Details</h3>
              <button
                onClick={() => setShowFilePanel(false)}
                className="p-2 text-gray-400 hover:text-white transition-colors duration-200 hover:bg-gray-700 rounded-lg"
              >
                ×
              </button>
            </div>

            {selectedNode ? (
              <div className="space-y-6 flex-1">
                {/* File Icon and Name */}
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg border border-purple-500/30">
                    {selectedNode.type === "folder" ? (
                      <FolderOpen className="w-6 h-6 text-purple-400" />
                    ) : (
                      <FileText className="w-6 h-6 text-blue-400" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{selectedNode.name}</h4>
                    <p className="text-sm text-gray-400 capitalize flex items-center space-x-2">
                      <span>{selectedNode.type}</span>
                      {selectedNode.language && (
                        <>
                          <span>•</span>
                          <span>{selectedNode.language}</span>
                        </>
                      )}
                    </p>
                  </div>
                </div>

                {/* File Info */}
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-400">Path</label>
                    <p className="text-sm text-white font-mono bg-gray-700 p-3 rounded-lg mt-1 break-all border border-gray-600">
                      {selectedNode.path}
                    </p>
                  </div>

                  {selectedNode.size && (
                    <div>
                      <label className="text-sm font-medium text-gray-400">Size</label>
                      <p className="text-sm text-white mt-1 flex items-center space-x-2">
                        <span>{selectedNode.size}</span>
                      </p>
                    </div>
                  )}

                  {selectedNode.type === "folder" && selectedNode.children && (
                    <div>
                      <label className="text-sm font-medium text-gray-400">Contents</label>
                      <div className="mt-2 space-y-2">
                        <p className="text-sm text-white">
                          {selectedNode.children.length} item{selectedNode.children.length !== 1 ? "s" : ""}
                        </p>
                        <div className="text-xs text-gray-400 space-y-1">
                          <div>Folders: {selectedNode.children.filter((child) => child.type === "folder").length}</div>
                          <div>Files: {selectedNode.children.filter((child) => child.type === "file").length}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="space-y-3 pt-6 border-t border-gray-700">
                  <button
                    onClick={handleAskAI}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-4 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg shadow-purple-500/25"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Ask AI about this {selectedNode.type}</span>
                  </button>

                  {selectedNode.type === "file" && (
                    <button className="w-full bg-gray-700 hover:bg-gray-600 px-4 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2 border border-gray-600">
                      <Eye className="w-4 h-4" />
                      <span>View File Content</span>
                    </button>
                  )}

                  <button className="w-full bg-gray-700 hover:bg-gray-600 px-4 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2 border border-gray-600">
                    <Maximize2 className="w-4 h-4" />
                    <span>Focus on Node</span>
                  </button>
                </div>

                {/* Breadcrumb */}
                <div className="pt-4 border-t border-gray-700">
                  <label className="text-sm font-medium text-gray-400 mb-2 block">Path Breadcrumb</label>
                  <div className="flex items-center space-x-1 text-sm flex-wrap">
                    {selectedNode.path
                      .split("/")
                      .filter(Boolean)
                      .map((segment, index, array) => (
                        <div key={index} className="flex items-center space-x-1">
                          <span className="text-gray-300 hover:text-white cursor-pointer transition-colors duration-200">
                            {segment}
                          </span>
                          {index < array.length - 1 && <ChevronRight className="w-3 h-3 text-gray-500" />}
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex-1 flex items-center justify-center text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto">
                    <Info className="w-8 h-8 text-gray-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Select a Node</h4>
                    <p className="text-sm text-gray-400">
                      Click on any file or folder in the {viewMode} view to see its details here.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
