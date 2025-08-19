"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { BookOpen, Play, Headphones, ExternalLink, Calendar, Clock, ArrowUpRight } from "lucide-react"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  content: string
}

interface Recommendation {
  id: string
  title: string
  type: "book" | "video" | "podcast"
  author: string
  description: string
  link: string
  cover: string
  rating?: number
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of AI in Product Development",
    excerpt: "Exploring how artificial intelligence is reshaping the way we build and iterate on products, from ideation to deployment.",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Technology",
    content: "Full blog post content would go here..."
  },
  {
    id: "2",
    title: "Building Sustainable Tech: Lessons Learned",
    excerpt: "Key insights from building eco-friendly technology solutions and the challenges of balancing innovation with environmental impact.",
    date: "2024-01-10",
    readTime: "8 min read",
    category: "Sustainability",
    content: "Full blog post content would go here..."
  },
  {
    id: "3",
    title: "Startup Lessons: From Idea to First 100 Users",
    excerpt: "A comprehensive guide to launching a startup, covering everything from market validation to user acquisition strategies.",
    date: "2024-01-05",
    readTime: "12 min read",
    category: "Startups",
    content: "Full blog post content would go here..."
  },
  {
    id: "4",
    title: "Designing for Accessibility: Why It Matters",
    excerpt: "Understanding the importance of inclusive design and how it can improve user experience for everyone.",
    date: "2024-01-01",
    readTime: "6 min read",
    category: "Design",
    content: "Full blog post content would go here..."
  },
  {
    id: "5",
    title: "The Psychology of User Onboarding",
    excerpt: "How to design onboarding experiences that reduce friction and increase user retention.",
    date: "2023-12-28",
    readTime: "7 min read",
    category: "UX",
    content: "Full blog post content would go here..."
  }
]

const recommendations: Recommendation[] = [
  {
    id: "1",
    title: "Atomic Habits",
    type: "book",
    author: "James Clear",
    description: "Transform your life with tiny changes that lead to remarkable results.",
    link: "https://amzn.to/example",
    cover: "/book1.jpg",
    rating: 5
  },
  {
    id: "2",
    title: "How to Build a Startup",
    type: "video",
    author: "Y Combinator",
    description: "Essential startup advice from the world's most successful accelerator.",
    link: "https://youtube.com/example",
    cover: "/video1.jpg",
    rating: 5
  },
  {
    id: "3",
    title: "Masters of Scale",
    type: "podcast",
    author: "Reid Hoffman",
    description: "Stories, insights, and advice from the world's most successful entrepreneurs.",
    link: "https://spotify.com/example",
    cover: "/podcast1.jpg",
    rating: 5
  },
  {
    id: "4",
    title: "The Lean Startup",
    type: "book",
    author: "Eric Ries",
    description: "How constant innovation creates radically successful businesses.",
    link: "https://amzn.to/example2",
    cover: "/book2.jpg",
    rating: 4
  },
  {
    id: "5",
    title: "Designing Data-Intensive Applications",
    type: "book",
    author: "Martin Kleppmann",
    description: "The big ideas behind reliable, scalable, and maintainable applications.",
    link: "https://amzn.to/example3",
    cover: "/book3.jpg",
    rating: 5
  },
  {
    id: "6",
    title: "The Tim Ferriss Show",
    type: "podcast",
    author: "Tim Ferriss",
    description: "Interviews with world-class performers to extract tools and tactics.",
    link: "https://tim.blog/podcast",
    cover: "/podcast2.jpg",
    rating: 4
  }
]

export default function InsightsPage() {
  const [activeTab, setActiveTab] = useState<"blog" | "recommendations">("blog")
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "book":
        return <BookOpen className="w-5 h-5 text-blue-600" />
      case "video":
        return <Play className="w-5 h-5 text-red-600" />
      case "podcast":
        return <Headphones className="w-5 h-5 text-purple-600" />
      default:
        return <BookOpen className="w-5 h-5 text-gray-600" />
    }
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>
        ★
      </span>
    ))
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-24">
        <div className="max-w-6xl mx-auto px-8">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h1 className="text-5xl font-bold text-black mb-4">
              My Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Sharing knowledge, experiences, and resources that have shaped my thinking 
              and helped me grow as a builder and entrepreneur.
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg mb-12 max-w-md mx-auto">
            <button
              onClick={() => setActiveTab("blog")}
              className={`flex-1 py-3 px-6 rounded-md font-medium transition-all duration-200 ${
                activeTab === "blog"
                  ? "bg-white text-black shadow-sm"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              Blog Posts
            </button>
            <button
              onClick={() => setActiveTab("recommendations")}
              className={`flex-1 py-3 px-6 rounded-md font-medium transition-all duration-200 ${
                activeTab === "recommendations"
                  ? "bg-white text-black shadow-sm"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              Recommendations
            </button>
          </div>

          {/* Blog Posts Tab */}
          {activeTab === "blog" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group border-b border-gray-200 pb-8 last:border-b-0 hover:border-gray-300 transition-colors cursor-pointer"
                  onClick={() => setSelectedPost(post)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-3">
                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(post.date).toLocaleDateString()}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                      
                      <button className="text-black font-medium hover:text-blue-600 transition-colors group inline-flex items-center">
                        Read More
                        <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}

          {/* Recommendations Tab */}
          {activeTab === "recommendations" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {recommendations.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-gray-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-20 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                      {getTypeIcon(item.type)}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        {getTypeIcon(item.type)}
                        <span className="text-sm text-gray-500 capitalize">{item.type}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-black mb-2 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      
                      <p className="text-sm text-gray-600 mb-2">by {item.author}</p>
                      
                      {item.rating && (
                        <div className="mb-2">
                          <div className="flex items-center space-x-1">
                            {renderStars(item.rating)}
                            <span className="text-sm text-gray-500 ml-2">{item.rating}/5</span>
                          </div>
                        </div>
                      )}
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-black font-medium hover:text-blue-600 transition-colors group"
                      >
                        Check it out
                        <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>

        {/* Blog Post Modal */}
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="mb-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {selectedPost.category}
                    </span>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(selectedPost.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {selectedPost.readTime}
                      </span>
                    </div>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-black mb-4">
                    {selectedPost.title}
                  </h2>
                  
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {selectedPost.excerpt}
                  </p>
                </div>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 leading-relaxed">
                    {selectedPost.content}
                  </p>
                  <p className="text-gray-600 leading-relaxed mt-4">
                    This is a placeholder for the full blog post content. In a real implementation, 
                    you would load the full content from a CMS, markdown file, or database.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </main>
      <Footer />
    </>
  )
}
