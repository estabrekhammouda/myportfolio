'use client';

import { motion } from 'framer-motion';
import { Sparkles, Heart, Code, Coffee } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative px-6 py-12 bg-gradient-to-r from-purple-900 via-pink-900 to-blue-900 text-white overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-16 h-16 bg-purple-400/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 20, 0],
            y: [0, -15, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-24 h-24 bg-pink-400/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, -25, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-20 h-20 bg-blue-400/15 rounded-full blur-xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 text-center space-y-8">
        {/* Signature */}
        <div className="space-y-3">
          <motion.div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 border border-white/20"
            whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.4)' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Sparkles className="w-4 h-4 text-pink-300" />
            </motion.div>
            <span className="font-medium">Made with passion</span>
          </motion.div>

          <motion.h2
            className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          >
            Stoooo
          </motion.h2>

          <motion.p
            className="text-purple-200 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Crafting digital experiences that inspire, connect, and solve real-world problems.
          </motion.p>
        </div>

        {/* Creative Attribution */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-2 text-sm text-purple-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span>Built with</span>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Heart className="w-4 h-4 text-pink-400 fill-pink-400" />
          </motion.div>
          <span>fueled by</span>
          <motion.div
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            <Coffee className="w-4 h-4 text-amber-300" />
          </motion.div>
          <span>and lots of</span>
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Code className="w-4 h-4 text-blue-300" />
          </motion.div>
        </motion.div>

        {/* Copyright with hover effect */}
        <motion.div
          className="pt-6 border-t border-white/10 text-sm text-purple-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="inline-block cursor-default"
          >
            © {currentYear} Estabrek Hammouda. All Rights Reserved.
          </motion.span>
        </motion.div>
      </div>
    </footer>
  );
}