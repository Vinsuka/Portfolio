"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Navigation from "@/components/Navigation"
import Hero from "@/components/sections/Hero"
import Building from "@/components/sections/Building"
import Results from "@/components/sections/Results"
import Insights from "@/components/sections/Insights"
import Connect from "@/components/sections/Connect"

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true)
      const timeout = setTimeout(() => setIsScrolling(false), 150)
      return () => clearTimeout(timeout)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const sections = [
    { id: "hero", component: Hero },
    { id: "building", component: Building },
    { id: "results", component: Results },
    { id: "insights", component: Insights },
    { id: "connect", component: Connect }
  ]

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId)
    
    // Smooth scroll to section
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation 
        activeSection={activeSection} 
        onSectionChange={handleSectionChange}
      />
      
      {/* Main Content */}
      <div className="ml-64">
        <AnimatePresence mode="wait">
          {sections.map(({ id, component: Component }) => (
            <motion.div
              key={id}
              id={id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Component />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isScrolling ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="h-full bg-black origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        />
      </motion.div>
    </main>
  )
}
