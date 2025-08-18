"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, TrendingUp, Users, DollarSign } from "lucide-react"

interface CaseStudy {
  id: string
  title: string
  description: string
  thumbnail: string
  category: string
  metrics: {
    revenue?: string
    users?: string
    growth?: string
  }
  outcomes: string[]
}

const caseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "E-commerce Platform Redesign",
    description: "Complete redesign of an e-commerce platform resulting in significant performance improvements",
    thumbnail: "/case1.jpg",
    category: "Web Design",
    metrics: {
      revenue: "+45%",
      users: "+120%",
      growth: "+67%"
    },
    outcomes: [
      "Improved conversion rate by 45%",
      "Reduced page load time by 60%",
      "Increased mobile engagement by 80%"
    ]
  },
  {
    id: "2",
    title: "SaaS Product Launch",
    description: "Successfully launched a B2B SaaS product in the competitive project management space",
    thumbnail: "/case2.jpg",
    category: "Product Launch",
    metrics: {
      revenue: "+200%",
      users: "+500%",
      growth: "+150%"
    },
    outcomes: [
      "Achieved $100K ARR in first 6 months",
      "500+ active users within 3 months",
      "95% customer satisfaction rate"
    ]
  },
  {
    id: "3",
    title: "Mobile App Optimization",
    description: "Performance optimization and UX improvements for a mobile banking application",
    thumbnail: "/case3.jpg",
    category: "Mobile Development",
    metrics: {
      users: "+85%",
      growth: "+120%"
    },
    outcomes: [
      "Reduced crash rate by 90%",
      "Improved app store rating to 4.8/5",
      "Increased daily active users by 85%"
    ]
  },
  {
    id: "4",
    title: "Marketing Campaign Strategy",
    description: "Comprehensive digital marketing strategy for a tech startup's product launch",
    thumbnail: "/case4.jpg",
    category: "Marketing",
    metrics: {
      revenue: "+180%",
      users: "+300%"
    },
    outcomes: [
      "Generated 10,000+ qualified leads",
      "Achieved 300% ROI on ad spend",
      "Increased brand awareness by 200%"
    ]
  }
]

export default function Results() {
  return (
    <section className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl font-bold text-black mb-4">
            Results & Case Studies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            Real projects with measurable outcomes. Each case study represents 
            a unique challenge and the results achieved through strategic thinking and execution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-gray-300"
            >
              {/* Thumbnail */}
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400"></div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {study.category}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
                </div>

                <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-blue-600 transition-colors">
                  {study.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {study.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {study.metrics.revenue && (
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <DollarSign className="w-4 h-4 text-green-600 mr-1" />
                        <span className="text-lg font-bold text-green-600">{study.metrics.revenue}</span>
                      </div>
                      <span className="text-xs text-gray-500">Revenue</span>
                    </div>
                  )}
                  {study.metrics.users && (
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Users className="w-4 h-4 text-blue-600 mr-1" />
                        <span className="text-lg font-bold text-blue-600">{study.metrics.users}</span>
                      </div>
                      <span className="text-xs text-gray-500">Users</span>
                    </div>
                  )}
                  {study.metrics.growth && (
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <TrendingUp className="w-4 h-4 text-purple-600 mr-1" />
                        <span className="text-lg font-bold text-purple-600">{study.metrics.growth}</span>
                      </div>
                      <span className="text-xs text-gray-500">Growth</span>
                    </div>
                  )}
                </div>

                {/* Key Outcomes */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-black text-sm">Key Outcomes:</h4>
                  <ul className="space-y-1">
                    {study.outcomes.slice(0, 2).map((outcome, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 mr-2 flex-shrink-0" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full mt-4 py-3 px-4 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors group">
                  <span className="flex items-center justify-center">
                    View Full Case Study
                    <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
