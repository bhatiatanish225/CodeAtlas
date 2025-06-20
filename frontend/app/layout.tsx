import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CodeAtlas.AI - Visualize & Understand Any GitHub Repository",
  description:
    "CodeAtlas.AI builds an interactive map of your codebase and lets you ask AI questions about any file or service. Transform complex GitHub repositories into visual, conversational experiences.",
  keywords: [
    "code visualization",
    "GitHub repository analysis",
    "AI code assistant",
    "codebase mapping",
    "software development tools",
    "code understanding",
    "repository explorer",
    "AI-powered development",
    "code navigation",
    "developer productivity",
  ],
  authors: [{ name: "Tanish Bhatiya" }],
  creator: "Tanish Bhatiya",
  publisher: "CodeAtlas.AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://codeatlas.ai"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CodeAtlas.AI - Visualize & Understand Any GitHub Repository",
    description:
      "Transform complex GitHub repositories into interactive maps. Ask AI questions about your code and navigate codebases like never before.",
    url: "https://codeatlas.ai",
    siteName: "CodeAtlas.AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CodeAtlas.AI - Interactive Code Visualization Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeAtlas.AI - Visualize & Understand Any GitHub Repository",
    description:
      "Transform complex GitHub repositories into interactive maps. Ask AI questions about your code and navigate codebases like never before.",
    images: ["/twitter-image.png"],
    creator: "@tanishbhatiya",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1f2937" />
        <meta name="color-scheme" content="dark light" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
