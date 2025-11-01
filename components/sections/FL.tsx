'use client';

import Image from 'next/image';
import Button from '../ui/button';
import SocialSidebar from '../ui/SocialSidebar';
import ScrollDots from '../ui/ScrollDots';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Smartphone,
  Sparkles,
  ArrowRight
} from 'lucide-react';

import { skills, deviconMap } from '@/lib/constants';

// Randomly select 8 featured skills from your skills array
const getFeaturedSkills = () => {
  const allSkills = skills.flat();
  const skillsWithIcons = allSkills.filter(skill => deviconMap[skill]);
  
  // Shuffle and pick 8 random skills
  const shuffled = skillsWithIcons.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 8);
};

export default function FemaleLead() {
  const featuredSkills = getFeaturedSkills();

  // Define positions and animations for the floating icons
  const iconPositions = [
    { className: "absolute -top-16 -right-16 w-24 h-24", animation: { y: [0, -12, 0], rotate: [0, 8, 0] }, color: "cyan" },
    { className: "absolute top-1/2 -left-20 w-20 h-20", animation: { x: [-6, 6, -6], scale: [1, 1.05, 1] }, color: "yellow" },
    { className: "absolute -bottom-12 left-8 w-18 h-18", animation: { rotate: [0, 360], scale: [1, 1.1, 1] }, color: "blue" },
    { className: "absolute top-12 -left-12 w-16 h-16", animation: { y: [0, -10, 0], opacity: [0.7, 1, 0.7] }, color: "green" },
    { className: "absolute bottom-16 -right-8 w-14 h-14", animation: { rotate: [0, -12, 12, 0], scale: [1, 0.95, 1.05, 1] }, color: "emerald" },
    { className: "absolute top-24 right-4 w-12 h-12", animation: { scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }, color: "purple" },
    { className: "absolute top-32 left-12 w-14 h-14", animation: { x: [0, 5, 0], y: [0, -5, 0] }, color: "gray" },
    { className: "absolute bottom-4 right-16 w-12 h-12", animation: { rotate: [0, 10, -10, 0], scale: [1, 1.05, 1] }, color: "teal" }
  ];

  const colorMap = {
    cyan: { border: "border-cyan-500/40", text: "text-cyan-400" },
    yellow: { border: "border-yellow-500/40", text: "text-yellow-400" },
    blue: { border: "border-blue-500/40", text: "text-blue-400" },
    green: { border: "border-green-500/30", text: "text-green-400" },
    emerald: { border: "border-emerald-600/30", text: "text-emerald-500" },
    purple: { border: "border-purple-500/20", text: "text-purple-400" },
    gray: { border: "border-gray-400/20", text: "text-gray-300" },
    teal: { border: "border-teal-400/20", text: "text-teal-400" }
  };

  return (
    <>
      {/* Add Devicon CDN */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      
      <motion.div
        id="home"
        className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <SocialSidebar />
        <ScrollDots />

        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Animated Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
          
          {/* Floating Orbs */}
          <motion.div 
            className="absolute top-20 left-20 w-32 h-32 border-2 border-purple-500/20 rounded-full"
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-24 h-24 border-2 border-pink-500/20 rounded-full"
            animate={{ rotate: -360, scale: [1, 0.9, 1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Animated Particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="flex items-center justify-center min-h-screen px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-16">

            {/* Enhanced Left Side - Animated Text Block */}
            <motion.div
              className="flex-1 flex flex-col items-center lg:items-start justify-center text-center lg:text-left space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Enhanced Badge */}
              <motion.div 
                className="inline-flex items-center gap-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-2xl px-8 py-4 border border-purple-400/30 shadow-2xl"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.span 
                  className="text-3xl"
                  animate={{ rotate: [0, 20, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  👋
                </motion.span>
                <div className="text-left">
                  <motion.p 
                    className="text-sm text-purple-300 font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    Hello, I am
                  </motion.p>
                  <motion.h2 
                    className="text-white text-2xl font-bold tracking-wide bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    Estabrek
                  </motion.h2>
                </div>
              </motion.div>

              {/* Enhanced Main Title */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  Creative
                  <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                    Developer
                  </span>
                </h1>
                <p className="text-lg text-slate-300 max-w-lg leading-relaxed">
                  Transforming ideas into exceptional digital experiences through innovative code and creative design.
                </p>
              </motion.div>

              {/* Enhanced Info Tags */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <motion.div 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/30 to-pink-500/30 border border-purple-400/40 rounded-full px-6 py-3 backdrop-blur-sm"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)" }}
                >
                  <Code2 className="w-4 h-4 text-purple-300" />
                  <p className="text-purple-200 font-medium">Software Developer</p>
                </motion.div>
                <motion.div 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 border border-blue-400/40 rounded-full px-6 py-3 backdrop-blur-sm"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)" }}
                >
                  <Sparkles className="w-4 h-4 text-blue-300" />
                  <p className="text-blue-200 font-medium">Engineering Student</p>
                </motion.div>
              </motion.div>

              {/* Enhanced Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <Button variant="primary" href="#projects">
                  <span className="flex items-center gap-2 group">
                    View My Work
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
                <Button variant="secondary" href="#contact">
                  Get In Touch
                </Button>
              </motion.div>
            </motion.div>

            {/* Enhanced Right Side - Profile & Tech Stack */}
            <motion.div
              className="flex-1 flex justify-center lg:justify-end relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="relative group">
                {/* Main Profile Image Container - Made Bigger */}
                <div className="w-96 h-96 md:w-[28rem] md:h-[28rem] relative">
                  {/* Animated Gradient Border */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 p-2 rounded-3xl shadow-2xl"
                    animate={{ 
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity, 
                      ease: "linear" 
                    }}
                    style={{ backgroundSize: "300% 300%" }}
                  >
                    <div className="overflow-hidden bg-slate-900 rounded-2xl relative h-full">
                      <Image
                        src="/images/photo1.png"
                        alt="Estabrek Hammouda - Software Developer"
                        width={600}
                        height={600}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                        priority
                      />
                      {/* Enhanced Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Shine Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                      />
                    </div>
                  </motion.div>

                  {/* Enhanced Rotating Rings */}
                  <motion.div
                    className="absolute inset-0 border-2 border-purple-500/30 rounded-3xl"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute -inset-2 border border-pink-500/20 rounded-3xl"
                    animate={{ rotate: -360, scale: [1, 1.02, 1] }}
                    transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute -inset-6 border border-blue-500/10 rounded-3xl"
                    animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>

                {/* Dynamic Tech Stack Icons using randomly selected skills */}
                {featuredSkills.map((skill, index) => {
                  const position = iconPositions[index];
                    const colors = colorMap[position.color as keyof typeof colorMap];
                  return (
                    <motion.div
                      key={skill}
                      className={`${position.className} bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl rounded-2xl flex items-center justify-center ${colors.border} shadow-2xl`}
                      animate={position.animation}
                      transition={{ 
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3
                      }}
                      whileHover={{ scale: 1.15, rotate: 15 }}
                    >
                      <div className="text-center">
                        <div className="w-10 h-10 mb-2 flex items-center justify-center">
                          {deviconMap[skill] ? (
                            <i className={`${deviconMap[skill]} text-3xl`}></i>
                          ) : (
                            // Fallback icons for skills without devicons
                            skill === 'MongoDB' ? <Database className="w-5 h-5" /> :
                            skill.includes('React Native') || skill.includes('Mobile') ? <Smartphone className="w-4 h-4" /> :
                            <Code2 className="w-5 h-5" />
                          )}
                        </div>
                        <span className={`${colors.text} font-semibold text-xs`}>
                          {skill.length > 8 ? skill.substring(0, 6) + '...' : skill}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}

                {/* Enhanced Floating Particles */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(10)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-gradient-to-r from-purple-400/40 to-pink-400/40 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -25, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 4 + Math.random() * 3,
                        repeat: Infinity,
                        delay: Math.random() * 3,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Enhanced CSS Styles */}
        <style jsx>{`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          .animate-gradient {
            animation: gradient 6s ease infinite;
          }
          
          .animate-spin-slow {
            animation: spin 60s linear infinite;
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }

          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}</style>
      </motion.div>
    </>
  );
}