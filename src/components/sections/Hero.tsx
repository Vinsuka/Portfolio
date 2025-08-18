"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="min-h-screen bg-white flex">
      {/* Left side - Navigation placeholder */}
      <div className="w-64 flex-shrink-0" />
      
      {/* Right side - Profile and intro */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
              <svg width="192" height="192" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="200" height="200" fill="#F3F4F6"/>
                <circle cx="100" cy="80" r="30" fill="#D1D5DB"/>
                <path d="M40 160C40 130 65 105 95 105H105C135 105 160 130 160 160V200H40V160Z" fill="#D1D5DB"/>
              </svg>
            </div>
            
            <h1 className="text-5xl font-bold text-black mb-4">
              Building the Future
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              I&apos;m a builder, creator, and entrepreneur focused on building products 
              that solve real problems and create meaningful impact.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center space-x-6"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-black">10+</div>
              <div className="text-gray-600">Projects Built</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black">100%</div>
              <div className="text-gray-600">Passion Driven</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
