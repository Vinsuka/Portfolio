"use client"

import { motion } from "framer-motion"
import Header from "@/components/Header"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

interface Project {
  id: string
  name: string
  description: string
  progress: number
  status: "active" | "planning" | "completed"
  logo: string
  category: string
  tech: string[]
}

const projects: Project[] = [
  {
    id: "1",
    name: "EcoTech Solutions",
    description: "Sustainable technology platform for reducing carbon footprint in businesses",
    progress: 75,
    status: "active",
    logo: "/project1.jpg",
    category: "Sustainability",
    tech: ["React", "Node.js", "MongoDB", "AWS"]
  },
  {
    id: "2",
    name: "HealthAI",
    description: "AI-powered health monitoring and predictive analytics platform",
    progress: 45,
    status: "active",
    logo: "/project2.jpg",
    category: "Healthcare",
    tech: ["Python", "TensorFlow", "React", "PostgreSQL"]
  },
  {
    id: "3",
    name: "EduFlow",
    description: "Personalized learning platform using adaptive algorithms",
    progress: 90,
    status: "active",
    logo: "/project3.jpg",
    category: "Education",
    tech: ["Next.js", "TypeScript", "Prisma", "Vercel"]
  },
  {
    id: "4",
    name: "SmartCity Hub",
    description: "IoT platform for smart city infrastructure management",
    progress: 30,
    status: "planning",
    logo: "/project4.jpg",
    category: "IoT",
    tech: ["Python", "Docker", "Kubernetes", "MQTT"]
  },
  {
    id: "5",
    name: "FinTech Dashboard",
    description: "Real-time financial analytics and portfolio management tool",
    progress: 60,
    status: "active",
    logo: "/project5.jpg",
    category: "Finance",
    tech: ["Vue.js", "Python", "Redis", "PostgreSQL"]
  },
  {
    id: "6",
    name: "Green Energy Tracker",
    description: "Renewable energy consumption monitoring and optimization",
    progress: 25,
    status: "planning",
    logo: "/project6.jpg",
    category: "Energy",
    tech: ["React Native", "Python", "InfluxDB", "Grafana"]
  }
]

export default function BuildingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-24">
        <div className="max-w-7xl mx-auto px-8">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-black mb-6">
              What I&apos;m Building
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Active ventures and projects that I&apos;m currently working on. Each represents 
              a unique challenge and opportunity to create meaningful impact.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:border-gray-300"
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                    <div className="w-8 h-8 bg-gray-300 rounded"></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-sm font-medium",
                      project.status === "active" && "bg-green-100 text-green-700",
                      project.status === "planning" && "bg-blue-100 text-blue-700",
                      project.status === "completed" && "bg-gray-100 text-gray-700"
                    )}>
                      {project.status}
                    </span>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors" />
                  </div>
                </div>

                {/* Project Info */}
                <h3 className="text-2xl font-bold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  {project.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-500">Progress</span>
                    <span className="text-sm font-medium text-black">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-black h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${project.progress}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    />
                  </div>
                </div>

                {/* Category and View More */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <button className="flex items-center space-x-2 text-black font-medium hover:text-blue-600 transition-colors group">
                    <span>View More</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
