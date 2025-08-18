"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Home } from "lucide-react"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          href="/"
          className="group w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <Home className="w-6 h-6 text-gray-700 group-hover:text-black transition-colors" />
        </Link>
      </motion.div>
    </header>
  )
}
