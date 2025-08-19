"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Home, Building, TrendingUp, Lightbulb, Handshake } from "lucide-react"

const navigationItems = [
  { href: "/building", label: "Building", icon: Building },
  { href: "/results", label: "Results", icon: TrendingUp },
  { href: "/insights", label: "Insights", icon: Lightbulb },
  { href: "/contact", label: "Connect", icon: Handshake }
]

export default function Header() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <header className="fixed top-0 left-0 z-40 p-6">
      <div className="relative">
        <Link
          href="/"
          className="group relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110">
            <Home className="w-6 h-6 text-gray-600 group-hover:text-black transition-colors" />
          </div>
          
          {/* Hover Navigation Tab */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="absolute left-16 top-0 bg-white shadow-lg rounded-lg p-3 min-w-[200px]"
                initial={{ opacity: 0, x: -10, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -10, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <div className="space-y-1">
                  {navigationItems.map((item) => {
                    const IconComponent = item.icon
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center space-x-3 p-2 rounded-md hover:bg-black transition-colors group"
                        onMouseEnter={(e) => {
                          e.currentTarget.querySelector('svg')?.style.setProperty('color', 'white');
                          e.currentTarget.querySelector('span')?.style.setProperty('color', 'white');
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.querySelector('svg')?.style.setProperty('color', 'black');
                          e.currentTarget.querySelector('span')?.style.setProperty('color', 'black');
                        }}
                      >
                        <IconComponent 
                          className="w-4 h-4 transition-colors" 
                          style={{ color: 'black' }}
                        />
                        <span 
                          className="text-sm font-medium transition-colors"
                          style={{ color: 'black' }}
                        >
                          {item.label}
                        </span>
                      </Link>
                    )
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Link>
      </div>
    </header>
  )
}
