"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

interface NavigationItem {
  id: string
  label: string
  href: string
  image: string
}

const navigationItems: NavigationItem[] = [
  {
    id: "building",
    label: "Building",
    href: "/building",
    image: "/01.mp4"
  },
  {
    id: "results",
    label: "Results",
    href: "/results",
    image: "/02.mp4"
  },
  {
    id: "insights",
    label: "Insights",
    href: "/insights",
    image: "/03.mp4"
  },
  {
    id: "contact",
    label: "Connect",
    href: "/contact",
    image: "/04.mp4"
  }
]

export default function Home() {
  const [currentImage, setCurrentImage] = useState("/profile-image.jpg")

  const handleHover = (item: NavigationItem | null) => {
    setCurrentImage(item?.image || "/profile-image.jpg")
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Main Content - Centered */}
      <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
        {/* Header Section */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-5xl lg:text-6xl font-bold text-black mb-6">
            Hi, I&apos;m Vinsuka
          </h1>
                           <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed mb-2">
                   I&apos;m in my 20s, chasing the vision of building something meaningful and impactful. Instead of taking the safer, familiar path, I&apos;ve chosen to embrace uncertainty — investing my energy into shaping ideas and bringing them to life with some incredible people by my side.
                 </p>
                 <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed mb-2">
                   I believe in building in public, sharing the real journey with full transparency — the wins, the struggles, the lessons, and everything in between.
                 </p>
                 <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed mb-2">
                   This is more than just work; it&apos;s my digital footprint. My journey. And you&apos;re welcome to be part of it.
                 </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="flex justify-center"
          >
            <Image
              src="/signature.png"
              alt="Vinsuka - Signature"
              width={180}
              height={65}
              className="opacity-80"
            />
          </motion.div>
        </motion.div>

        {/* Main Content Row */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 max-w-6xl mb-0">
          {/* Left Side - Navigation */}
          <motion.div 
            className="flex flex-col items-center space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            {/* Navigation Menu */}
            <nav className="space-y-6">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  onHoverStart={() => handleHover(item)}
                  onHoverEnd={() => handleHover(null)}
                  whileHover={{ x: 10 }}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 + index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center space-x-4 text-2xl font-bold text-gray-400 hover:text-black transition-colors duration-300"
                  >
                    <span className="relative">
                      {item.label}
                      {/* Hover underline */}
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-black origin-left"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    </span>
                    <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div 
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  className="w-full h-full rounded-2xl overflow-hidden bg-gray-200"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  {/* Profile Image */}
                  {currentImage === "/profile-image.jpg" && (
                    <Image
                      src="/profile-image.jpg"
                      alt="Vinsuka - Profile Photo"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  )}
                  {currentImage === "/01.mp4" && (
                    <video
                      src="/01.mp4"
                      className="w-full h-full object-cover rounded-2xl"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  )}
                  {currentImage === "/02.mp4" && (
                    <video
                      src="/02.mp4"
                      className="w-full h-full object-cover rounded-2xl"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  )}
                  {currentImage === "/03.mp4" && (
                    <video
                      src="/03.mp4"
                      className="w-full h-full object-cover rounded-2xl"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  )}
                  {currentImage === "/04.mp4" && (
                    <video
                      src="/04.mp4"
                      className="w-full h-full object-cover rounded-2xl"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Homepage Footer */}
      <footer className="bg-white py-3 px-4 mt-0">
        <div className="border-t border-gray-200 mb-3"></div>
        <div className="text-center">
          <p className="text-sm text-gray-500">
            © 2025 vinsuka.com. All Rights Reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
