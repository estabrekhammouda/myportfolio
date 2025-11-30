'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { 
  MapPin, 
  Mail, 
  GraduationCap, 
  Code2, 
  Globe,
  Sparkles 
} from 'lucide-react';

export default function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <section id="about"  className="relative px-6 py-20 bg-gradient-to-br from-slate-900 via-purple-900/25 to-slate-900 overflow-hidden"
>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-20 h-20 bg-purple-200/30 dark:bg-purple-500/10 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: [0.4, 0, 0.6, 1] }}
        />
        <motion.div 
          className="absolute bottom-32 right-16 w-32 h-32 bg-pink-200/30 dark:bg-pink-500/10 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: [0.4, 0, 0.6, 1], delay: 2 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-16 h-16 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-lg"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: [0.4, 0, 0.6, 1] }}
        />
      </div>

      <motion.div 
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 backdrop-blur-sm rounded-full px-6 py-2 border border-purple-200/50 dark:border-purple-500/30 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-purple-700 dark:text-purple-300 font-medium">Get to know me</span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-700 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent mb-4">
            About Me
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div 
            className="space-y-8"
            variants={itemVariants}
          >
            {/* Story Paragraphs */}
            <div className="space-y-6">
              <motion.p 
                className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed"
                variants={itemVariants}
              >
                I am a passionate <span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">full-stack developer</span> and 
                software engineering student based in Tunisia, focused on building responsive, accessible, and high-performance digital solutions.
              </motion.p>
              
              <motion.p 
                className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed"
                variants={itemVariants}
              >
                My journey in computer science began in high school, and since then I have developed several projects including 
                <span className="font-semibold text-purple-600 dark:text-purple-400"> mobile apps, web platforms, and system applications</span>. 
                I enjoy turning complex problems into elegant solutions.
              </motion.p>
            </div>

            {/* Skills Tags */}
            <motion.div 
              className="flex flex-wrap gap-3"
              variants={itemVariants}
            >
              {['Full-Stack Development', 'Mobile Apps', 'System Design', 'Problem Solving',"UI Design"].map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-800/30 dark:to-pink-800/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium border border-purple-200/50 dark:border-purple-500/30"
                  whileHover={{ scale: 1.05, y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* Contact Info Cards */}
            <motion.div 
              className="grid sm:grid-cols-2 gap-4"
              variants={itemVariants}
            >
              <motion.div 
                className="bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-200/30 dark:border-purple-500/20 shadow-lg"
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 dark:text-slate-200">Education</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">ISIMM</p>
                  </div>
                </div>
                <p className="text-purple-600 dark:text-purple-400 font-medium">Software Engineering</p>
              </motion.div>

              <motion.div 
                className="bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-200/30 dark:border-purple-500/20 shadow-lg"
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 dark:text-slate-200">Languages</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Multilingual</p>
                  </div>
                </div>
                <p className="text-blue-600 dark:text-blue-400 font-medium">French • Arabic • English</p>
              </motion.div>

              <motion.div 
                className="bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-200/30 dark:border-purple-500/20 shadow-lg sm:col-span-2"
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 dark:text-slate-200">Let s Connect</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Open for opportunities</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-green-600 dark:text-green-400" />
                    <span className="text-slate-700 dark:text-slate-300">contact.estabrek@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-green-600 dark:text-green-400" />
                    <span className="text-slate-700 dark:text-slate-300">Tunisia</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            className="flex justify-center lg:justify-end"
            variants={imageVariants}
          >
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Animated Background Rings */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-3xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                  className="absolute inset-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-3xl"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Image Container */}
                <div className="absolute inset-4 bg-slate-900 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/photo2.png"
                    alt="Estabrek Hammouda - About"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    priority
                  />
                  
                  {/* Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Floating Icons */}
                  <motion.div
                    className="absolute top-4 right-4 w-12 h-12 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: [0.4, 0, 0.6, 1] }}
                  >
                    <Code2 className="w-6 h-6 text-purple-600" />
                  </motion.div>
                  
                  <motion.div
                    className="absolute bottom-4 left-4 w-10 h-10 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: [0.4, 0, 0.6, 1] }}
                  >
                    <Sparkles className="w-5 h-5 text-pink-500" />
                  </motion.div>
                </div>

                {/* Floating Particles */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-gradient-to-r from-purple-400/60 to-pink-400/60 rounded-full"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                      ease: [0.4, 0, 0.6, 1],
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}