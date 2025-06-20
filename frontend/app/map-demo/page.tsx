"use client"

import { useState } from "react"
import CodebaseMapViewer from "@/components/codebase-map-viewer"

export default function MapViewerDemo() {
  const [showMapViewer, setShowMapViewer] = useState(false)

  if (showMapViewer) {
    return <CodebaseMapViewer onBack={() => setShowMapViewer(false)} />
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-gray-800 rounded-xl border border-gray-700 p-8 text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-white mb-4">Codebase Map Viewer</h2>
        <p className="text-gray-400 mb-6">Explore your repository structure in stunning 2D and 3D visualizations</p>
        <button
          onClick={() => setShowMapViewer(true)}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2"
        >
          <span>Launch Map Viewer</span>
        </button>
        <p className="text-xs text-gray-500 mt-4">Demo with sample repository structure</p>
      </div>
    </div>
  )
}
