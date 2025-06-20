import { Code2, Github, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer
      className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          {/* Left side - Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Code2 className="w-4 h-4 text-white" aria-hidden="true" />
              </div>
              <span className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                CodeAtlas.AI
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">© 2025 CodeAtlas.AI. All rights reserved.</p>
            <p className="text-gray-500 dark:text-gray-500 text-sm">
              Made by{" "}
              <a
                href="#"
                className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-200"
              >
                Tanish Bhatiya
              </a>{" "}
              ❤️
            </p>
          </div>

          {/* Center - Links */}
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            >
              Support
            </a>
          </div>

          {/* Right side - Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="w-10 h-10 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-200 transform hover:scale-110 group"
              aria-label="Visit our GitHub page"
            >
              <Github className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-200 transform hover:scale-110 group"
              aria-label="Follow us on Twitter"
            >
              <Twitter className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-500" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-200 transform hover:scale-110 group"
              aria-label="Connect with us on LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-600" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
