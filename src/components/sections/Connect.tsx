"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Mail, Linkedin, Twitter, Github, MessageSquare, Users, Briefcase, Lightbulb } from "lucide-react"

interface CollaborationOpportunity {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  category: string
}

const collaborationOpportunities: CollaborationOpportunity[] = [
  {
    id: "1",
    title: "Startup Partnerships",
    description: "Join forces on innovative projects and bring ideas to market together.",
    icon: <Lightbulb className="w-6 h-6" />,
    category: "Partnerships"
  },
  {
    id: "2",
    title: "Freelance Collaborations",
    description: "Work together on specific projects with flexible engagement models.",
    icon: <Briefcase className="w-6 h-6" />,
    category: "Freelance"
  },
  {
    id: "3",
    title: "Mentorship & Advisory",
    description: "Share knowledge and guide the next generation of builders and entrepreneurs.",
    icon: <Users className="w-6 h-6" />,
    category: "Mentorship"
  }
]

export default function Connect() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - integrate with Formspree or Supabase later
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

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
            Let&apos;s Connect
          </h2>
                      <p className="text-xl text-gray-600 max-w-3xl">
              Ready to collaborate, share ideas, or just have a conversation? 
              I&apos;m always open to new opportunities and meaningful connections.
            </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Info & Collaboration */}
          <div className="space-y-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-black mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <a
                  href="mailto:hello@example.com"
                  className="flex items-center space-x-3 text-gray-600 hover:text-black transition-colors group"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>hello@example.com</span>
                </a>
                <a
                  href="https://linkedin.com/in/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-600 hover:text-black transition-colors group"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://twitter.com/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-600 hover:text-black transition-colors group"
                >
                  <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Twitter</span>
                </a>
                <a
                  href="https://github.com/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-600 hover:text-black transition-colors group"
                >
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>GitHub</span>
                </a>
              </div>
            </motion.div>

            {/* Collaboration Opportunities */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-black mb-6">Ways to Collaborate</h3>
              <div className="space-y-4">
                {collaborationOpportunities.map((opportunity, index) => (
                  <motion.div
                    key={opportunity.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="group p-4 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 group-hover:text-black transition-colors">
                        {opportunity.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-black mb-1">{opportunity.title}</h4>
                        <p className="text-sm text-gray-600">{opportunity.description}</p>
                        <span className="inline-block mt-2 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                          {opportunity.category}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-50 rounded-2xl p-8"
          >
            <div className="flex items-center space-x-3 mb-6">
              <MessageSquare className="w-6 h-6 text-black" />
              <h3 className="text-2xl font-bold text-black">Send a Message</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell me about your project, idea, or just say hello..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 group"
              >
                <span className="flex items-center justify-center">
                  Send Message
                  <MessageSquare className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
                </span>
              </button>
            </form>
            
            <p className="text-sm text-gray-500 mt-4 text-center">
              I&apos;ll get back to you within 24 hours. Looking forward to connecting!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
