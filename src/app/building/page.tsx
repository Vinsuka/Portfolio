"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { ArrowUpRight, X, Expand } from "lucide-react"
import Image from "next/image"

interface Venture {
  id: string
  name: string
  description: string
  domain: string
  website: string
  logo: string
  type: 'gallery' | 'roadmap'
  milestones: string[]
  images?: string[]
  roadmap?: {
    period: string
    plans: string[]
  }[]
}

const ventures: Venture[] = [
  {
    id: "standord",
    name: "Standord",
    description: "Innovative platform revolutionizing how people connect and collaborate in the digital age. Built with cutting-edge technology to create meaningful connections.",
    domain: "Social Platform",
    website: "https://standord.com",
    logo: "/standord-logo.png",
    type: 'gallery',
    milestones: [
      "Launched MVP with 1000+ users",
      "Secured $500K seed funding",
      "Partnership with major tech companies",
      "Expanded to 5 new markets",
      "Achieved 10K+ active users"
    ],
    images: [
      "/Picture/01-1.jpg",
      "/Picture/02-2.jpg", 
      "/Picture/03-3.jpeg",
      "/Picture/06-6.jpeg",
      "/Picture/07-7.jpeg"
    ]
  },
  {
    id: "goout",
    name: "GoOut.lk",
    description: "Sri Lanka's premier platform for discovering and booking exciting experiences, adventures, and local activities. Connecting travelers with authentic local experiences.",
    domain: "Travel & Experiences",
    website: "https://goout.lk",
    logo: "/goout-logo.png",
    type: 'roadmap',
    milestones: [
      "Launched in Colombo market",
      "Partnered with 50+ local providers",
      "Achieved 5000+ bookings",
      "Expanded to Kandy and Galle",
      "Mobile app launch"
    ],
    roadmap: [
      {
        period: "Q1 2025",
        plans: ["Expand to Jaffna", "Launch loyalty program", "Partner with hotels"]
      },
      {
        period: "Q2 2025", 
        plans: ["International expansion", "AI-powered recommendations", "Corporate partnerships"]
      },
      {
        period: "Q3 2025",
        plans: ["Series A funding", "Regional expansion", "Advanced analytics"]
      }
    ]
  },
  {
    id: "bloc-estate",
    name: "Bloc Estate",
    description: "Revolutionary real estate platform using blockchain technology to streamline property transactions, reduce costs, and increase transparency in the market.",
    domain: "Real Estate Tech",
    website: "https://blocestate.com",
    logo: "/bloc-estate-logo.png",
    type: 'roadmap',
    milestones: [
      "Platform development completed",
      "First 100 properties listed",
      "Blockchain integration successful",
      "Regulatory compliance achieved",
      "Partnership with major developers"
    ],
    roadmap: [
      {
        period: "Q1 2025",
        plans: ["Launch in Colombo", "1000+ properties", "Mobile app"]
      },
      {
        period: "Q2 2025",
        plans: ["Expand to suburbs", "AI property matching", "Virtual tours"]
      },
      {
        period: "Q3 2025", 
        plans: ["International markets", "Tokenization launch", "Strategic partnerships"]
      }
    ]
  },
  {
    id: "brandord",
    name: "Brandord",
    description: "Creative agency specializing in brand development, digital marketing, and visual identity creation. Helping businesses establish strong, memorable brand presence.",
    domain: "Creative Agency",
    website: "https://brandord.com",
    logo: "/brandord-logo.png",
    type: 'gallery',
    milestones: [
      "Launched creative studio",
      "First 25 clients onboarded",
      "Award-winning campaign designs",
      "Expanded team to 15 members",
      "International client acquisition"
    ],
    images: [
      "/brandord/01-b.MOV",
      "/brandord/02-b.jpg",
      "/brandord/03-b.mov",
      "/brandord/04.mov",
      "/brandord/05-b.jpg",
      "/brandord/06-b.mov"
    ]
  },
  {
    id: "fitbox",
    name: "FitBox",
    description: "Innovative fitness technology platform combining AI-powered workouts, nutrition tracking, and community features to revolutionize personal fitness journeys.",
    domain: "Fitness Tech",
    website: "https://fitbox.com",
    logo: "/fitbox-logo.png",
    type: 'roadmap',
    milestones: [
      "MVP development completed",
      "Beta testing with 500 users",
      "AI algorithm training",
      "Mobile app launch",
      "First 1000 subscribers"
    ],
    roadmap: [
      {
        period: "Q1 2025",
        plans: ["Public launch", "10K users target", "Premium features"]
      },
      {
        period: "Q2 2025",
        plans: ["Wearable integration", "Personal trainers", "Nutrition plans"]
      },
      {
        period: "Q3 2025",
        plans: ["International expansion", "Corporate wellness", "Series A funding"]
      }
    ]
  }
]

export default function Building() {
  const [expandedVenture, setExpandedVenture] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  // Shuffle images for gallery ventures
  const shuffledVentures = ventures.map(venture => {
    if (venture.type === 'gallery' && venture.images) {
      return {
        ...venture,
        images: [...venture.images].sort(() => Math.random() - 0.5)
      }
    }
    return venture
  })

  // Auto-advance images for gallery ventures
  useEffect(() => {
    if (expandedVenture) {
      const venture = ventures.find(v => v.id === expandedVenture)
      if (venture?.type === 'gallery' && venture.images) {
        const interval = setInterval(() => {
          setCurrentImageIndex((prev) => (prev + 1) % venture.images!.length)
        }, 3000) // Change image every 3 seconds
        
        return () => clearInterval(interval)
      }
    }
  }, [expandedVenture])

  const handleVentureClick = (ventureId: string) => {
    setExpandedVenture(expandedVenture === ventureId ? null : ventureId)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (expandedVenture) {
      const venture = ventures.find(v => v.id === expandedVenture)
      if (venture?.images) {
        setCurrentImageIndex((prev) => (prev + 1) % venture.images!.length)
      }
    }
  }

  const prevImage = () => {
    if (expandedVenture) {
      const venture = ventures.find(v => v.id === expandedVenture)
      if (venture?.images) {
        setCurrentImageIndex((prev) => (prev - 1 + venture.images!.length) % venture.images!.length)
      }
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-black mb-4">
              What I&apos;m Building
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Active ventures and projects I&apos;m currently working on
            </p>
          </motion.div>

          {/* Ventures Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {shuffledVentures.map((venture, index) => (
              <motion.div
                key={venture.id}
                className="bg-white border border-gray-200 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-gray-300"
                onClick={() => handleVentureClick(venture.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Compact View */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-xl">🏢</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-black">{venture.name}</h3>
                        <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                          {venture.domain}
                        </span>
                      </div>
                    </div>
                    <Expand className="w-5 h-5 text-gray-400" />
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">{venture.description}</p>
                  
                  <div className="flex items-center justify-between pt-2">
                    <span className="inline-flex items-center px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                      Active
                    </span>
                    <a
                      href={venture.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
                    >
                      Visit →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Expanded Venture Overlay */}
      <AnimatePresence>
        {expandedVenture && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpandedVenture(null)}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const venture = ventures.find(v => v.id === expandedVenture)
                if (!venture) return null

                return (
                  <div className="p-8">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-8">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center">
                          <span className="text-4xl">🏢</span>
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-black mb-2">{venture.name}</h2>
                          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 text-lg font-medium rounded-full">
                            {venture.domain}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => setExpandedVenture(null)}
                        className="p-3 hover:bg-gray-100 rounded-full transition-colors"
                      >
                        <X className="w-6 h-6 text-gray-500" />
                      </button>
                    </div>

                    {/* About Section */}
                    <div className="mb-8">
                      <h3 className="text-2xl font-semibold text-black mb-4">About</h3>
                      <p className="text-gray-600 text-lg leading-relaxed">{venture.description}</p>
                    </div>

                    {/* Milestones Section */}
                    <div className="mb-8">
                      <h3 className="text-2xl font-semibold text-black mb-4">Milestones</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {venture.milestones.map((milestone, idx) => (
                          <div key={idx} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="text-gray-700">{milestone}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Gallery or Roadmap Section */}
                    {venture.type === 'gallery' && venture.images && (
                      <div className="mb-8">
                        <div className="w-full h-80 bg-gray-50 rounded-xl overflow-hidden">
                          <div className="relative h-full">
                            <motion.div
                              className="absolute top-0 left-0 h-full flex space-x-6"
                              animate={{
                                x: [0, -(venture.images.length * 200 + (venture.images.length - 1) * 24 + 600)]
                              }}
                              transition={{
                                duration: venture.images.length * 4,
                                repeat: Infinity,
                                ease: "linear"
                              }}
                            >
                              {/* Duplicate media files for seamless loop */}
                              {venture.images && [...venture.images, ...venture.images].map((media, idx) => {
                                const isVideo = media.toLowerCase().endsWith('.mov');
                                const displayIndex = (idx % venture.images!.length) + 1;
                                
                                return (
                                  <div
                                    key={`${venture.id}-${idx}`}
                                    className="h-full rounded-lg flex-shrink-0 overflow-hidden"
                                    style={{ width: 'auto', minWidth: '200px' }}
                                  >
                                    {isVideo ? (
                                      <video
                                        src={media}
                                        className="h-full w-auto object-contain"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                      />
                                    ) : (
                                      <Image
                                        src={media}
                                        alt={`${venture.name} - Media ${displayIndex}`}
                                        width={200}
                                        height={320}
                                        className="h-full w-auto object-contain"
                                      />
                                    )}
                                  </div>
                                );
                              })}
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    )}

                    {venture.type === 'roadmap' && venture.roadmap && (
                      <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-black mb-4">Roadmap</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {venture.roadmap.map((item, idx) => (
                            <div key={idx} className="bg-gray-50 p-6 rounded-xl">
                              <h4 className="text-xl font-semibold text-black mb-3">{item.period}</h4>
                              <ul className="space-y-2">
                                {item.plans.map((plan, planIdx) => (
                                  <li key={planIdx} className="text-gray-600 flex items-start space-x-3">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <span>{plan}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Website Link */}
                    <div className="pt-6 border-t border-gray-200">
                      <a
                        href={venture.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-3 text-blue-600 hover:text-blue-800 text-lg font-medium transition-colors"
                      >
                        <span>Visit Website</span>
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                )
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  )
}
