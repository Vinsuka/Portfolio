"use client"

import { motion } from "framer-motion"
import { Mail, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-6 px-4 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        {/* Signature Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-4 sm:mb-0 text-center sm:text-left"
        >
          <p className="text-lg font-medium text-gray-800 mb-1">
            vinsuka.j
          </p>
          <p className="text-sm text-gray-500">
            © 2025 vinsuka.com. All Rights Reserved.
          </p>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="flex items-center space-x-4"
        >
          {/* Email */}
          <a
            href="mailto:hello@vinsuka.com"
            className="group p-2 rounded-full bg-gray-50 hover:bg-gray-100 transition-all duration-200 hover:scale-110"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors" />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/vinsuka"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-2 rounded-full bg-gray-50 hover:bg-gray-100 transition-all duration-200 hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors" />
          </a>

          {/* TikTok */}
          <a
            href="https://tiktok.com/@vinsuka"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-2 rounded-full bg-gray-50 hover:bg-gray-100 transition-all duration-200 hover:scale-110"
            aria-label="TikTok"
          >
            <svg 
              className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </footer>
  )
}
