import { Github, Brain, Database, Code2, FileCode } from "lucide-react"

export function TechStackSection() {
  const technologies = [
    { name: "GitHub", icon: Github },
    { name: "GPT-4", icon: Brain },
    { name: "PostgreSQL", icon: Database },
    { name: "Node.js", icon: Code2 },
    { name: "VS Code", icon: FileCode },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="tech-heading">
      <div className="max-w-4xl mx-auto text-center">
        <h2 id="tech-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Powered by tools developers love
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 hover:opacity-100 transition-opacity duration-300">
          {technologies.map((tech, index) => (
            <div key={index} className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <tech.icon className="w-6 h-6" />
              <span className="font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
