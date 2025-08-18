"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Header from "@/components/Header"
import { ArrowUpRight, TrendingUp, Users, DollarSign, X } from "lucide-react"

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
  details: {
    problem: string
    solution: string
    results: string[]
    challenges: string[]
    lessons: string[]
  }
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
    ],
    details: {
      problem: "The existing e-commerce platform had poor user experience, slow loading times, and low mobile conversion rates.",
      solution: "Implemented a complete redesign with modern UI/UX principles, optimized performance, and mobile-first responsive design.",
      results: [
        "Conversion rate increased from 2.1% to 3.1%",
        "Average page load time reduced from 4.2s to 1.7s",
        "Mobile revenue increased by 80%",
        "Customer satisfaction score improved to 4.8/5"
      ],
      challenges: [
        "Migrating existing user data without downtime",
        "Maintaining SEO rankings during redesign",
        "Training team on new platform features"
      ],
      lessons: [
        "Performance optimization is crucial for e-commerce success",
        "Mobile-first design significantly impacts conversion rates",
        "User testing should be continuous throughout the design process"
      ]
    }
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
    ],
    details: {
      problem: "Entering a crowded project management market with limited resources and brand recognition.",
      solution: "Focused on a specific niche (creative agencies), built a differentiated product, and implemented a targeted go-to-market strategy.",
      results: [
        "Reached $100K ARR in 6 months",
        "500+ active users within 3 months",
        "95% customer satisfaction rate",
        "Successfully raised seed funding"
      ],
      challenges: [
        "Standing out in a competitive market",
        "Building initial customer base",
        "Scaling customer support operations"
      ],
      lessons: [
        "Niche focus is more effective than broad market appeal",
        "Early customer feedback is invaluable for product development",
        "Customer success is as important as product features"
      ]
    }
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
    ],
    details: {
      problem: "The mobile banking app had frequent crashes, poor performance, and low user ratings.",
      solution: "Implemented comprehensive performance monitoring, optimized code, improved error handling, and enhanced user experience.",
      results: [
        "App crash rate reduced from 15% to 1.5%",
        "App store rating improved from 3.2 to 4.8/5",
        "Daily active users increased by 85%",
        "User session duration increased by 40%"
      ],
      challenges: [
        "Identifying root causes of crashes",
        "Optimizing performance without breaking existing functionality",
        "Managing app store review process"
      ],
      lessons: [
        "Performance monitoring is essential for mobile apps",
        "User experience directly impacts app store ratings",
        "Gradual optimization is better than major rewrites"
      ]
    }
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
    ],
    details: {
      problem: "A tech startup needed to generate awareness and leads for a new product with limited marketing budget.",
      solution: "Developed a multi-channel marketing strategy combining content marketing, social media, paid advertising, and influencer partnerships.",
      results: [
        "Generated 10,000+ qualified leads",
        "Achieved 300% ROI on ad spend",
        "Increased brand awareness by 200%",
        "Established thought leadership in the industry"
      ],
      challenges: [
        "Working with limited marketing budget",
        "Coordinating multiple marketing channels",
        "Measuring ROI across different platforms"
      ],
      lessons: [
        "Content marketing provides long-term value",
        "Multi-channel approach increases overall effectiveness",
        "Data-driven decisions improve campaign performance"
      ]
    }
  }
]

export default function ResultsPage() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null)

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
              Results & Case Studies
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real projects with measurable outcomes. Each case study represents 
              a unique challenge and the results achieved through strategic thinking and execution.
            </p>
          </motion.div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-gray-300 cursor-pointer"
                onClick={() => setSelectedCase(study)}
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

        {/* Detailed Case Study Modal */}
        <AnimatePresence>
          {selectedCase && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedCase(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <h2 className="text-3xl font-bold text-black">{selectedCase.title}</h2>
                    <button
                      onClick={() => setSelectedCase(null)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <div className="space-y-8">
                    {/* Problem & Solution */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-bold text-black mb-3">Problem</h3>
                        <p className="text-gray-600">{selectedCase.details.problem}</p>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-black mb-3">Solution</h3>
                        <p className="text-gray-600">{selectedCase.details.solution}</p>
                      </div>
                    </div>

                    {/* Results */}
                    <div>
                      <h3 className="text-xl font-bold text-black mb-3">Results</h3>
                      <ul className="space-y-2">
                        {selectedCase.details.results.map((result, idx) => (
                          <li key={idx} className="text-gray-600 flex items-start">
                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Challenges & Lessons */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-bold text-black mb-3">Challenges</h3>
                        <ul className="space-y-2">
                          {selectedCase.details.challenges.map((challenge, idx) => (
                            <li key={idx} className="text-gray-600 flex items-start">
                              <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-black mb-3">Key Lessons</h3>
                        <ul className="space-y-2">
                          {selectedCase.details.lessons.map((lesson, idx) => (
                            <li key={idx} className="text-gray-600 flex items-start">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                              {lesson}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  )
}
