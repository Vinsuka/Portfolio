"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface NavigationProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

const navItems = [
  { id: "building", label: "Building" },
  { id: "results", label: "Results" },
  { id: "insights", label: "Insights" },
  { id: "connect", label: "Connect" },
]

export default function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  return (
    <nav className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-100 p-8 flex flex-col justify-center">
      <div className="space-y-8">
        {navItems.map((item) => (
          <motion.div
            key={item.id}
            className="relative"
            whileHover={{ x: 8 }}
            transition={{ duration: 0.2 }}
          >
            <button
              onClick={() => onSectionChange(item.id)}
              className={cn(
                "text-2xl font-bold transition-all duration-200 hover:text-black",
                activeSection === item.id ? "text-black" : "text-gray-400"
              )}
            >
              {item.label}
            </button>
            
            {/* Active indicator */}
            {activeSection === item.id && (
              <motion.div
                className="absolute -left-8 top-1/2 w-1 h-8 bg-black -translate-y-1/2"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
            
            {/* Hover underline */}
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-black origin-left"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>
        ))}
      </div>
    </nav>
  )
}
