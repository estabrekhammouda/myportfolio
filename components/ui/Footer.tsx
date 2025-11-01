'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative px-6 py-12 bg-gradient-to-r from-purple-900 via-pink-900 to-blue-900 text-white overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-16 h-16 bg-purple-400/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-24 h-24 bg-pink-400/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 text-center space-y-8">
        {/* Signature */}
        <div className="space-y-3">
          <motion.div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 border border-white/20"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="w-4 h-4 text-pink-300" />
            <span className="font-medium">Made with passion</span>
          </motion.div>

          <motion.h2
            className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
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


        {/* Copyright */}
        <motion.div
          className="pt-6 border-t border-white/10 text-sm text-purple-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          © {new Date().getFullYear()} Estabrek Hammouda. All Rights Reserved.
        </motion.div>
      </div>
    </footer>
  );
}