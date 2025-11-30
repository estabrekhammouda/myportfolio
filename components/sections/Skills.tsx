'use client';

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  Code2, 
  Briefcase, 
  Star,
  Sparkles,
  Trophy
} from 'lucide-react';
import { skills, experience, deviconMap } from '@/lib/constants';

const Skills: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const skillItemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <section id="skills" className="relative px-6 py-20 bg-gradient-to-br from-slate-900 via-pink-900/25 to-slate-900 overflow-hidden"

>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-32 right-20 w-24 h-24 bg-blue-200/30 dark:bg-blue-500/10 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: [0.4, 0, 0.6, 1] }}
        />
        <motion.div 
          className="absolute bottom-20 left-16 w-28 h-28 bg-indigo-200/30 dark:bg-indigo-500/10 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: [0.4, 0, 0.6, 1], delay: 1 }}
        />
        <motion.div 
          className="absolute top-1/3 left-1/4 w-20 h-20 bg-purple-200/20 dark:bg-purple-500/10 rounded-full blur-lg"
          animate={{ 
            x: [0, 25, 0],
            y: [0, -15, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: [0.4, 0, 0.6, 1] }}
        />
      </div>

      <motion.div 
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 backdrop-blur-sm rounded-full px-6 py-2 border border-blue-200/50 dark:border-blue-500/30 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Trophy className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-blue-700 dark:text-blue-300 font-medium">Expertise & Journey</span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
            Skills & Experience
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
            A showcase of my technical expertise and professional journey
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skills Section */}
          <motion.div 
            className="space-y-8"
            variants={itemVariants}
          >
            <div className="bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-blue-200/30 dark:border-blue-500/20 shadow-xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">Technical Skills</h3>
                  <p className="text-slate-600 dark:text-slate-400">Technologies I work with</p>
                </div>
              </div>

              <div className="space-y-6">
                {skills.map((group: string[], groupIdx: number) => (
                  <motion.div
                    key={groupIdx}
                    className="space-y-3"
                    variants={itemVariants}
                  >
                    <div className="flex flex-wrap gap-3">
                      {group.map((skillName: string, skillIdx: number) => {
                        const iconClass = deviconMap[skillName];
                        return (
                          <motion.div
                            key={skillName}
                            className="relative group"
                            variants={skillItemVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: groupIdx * 0.1 + skillIdx * 0.05 }}
                            onMouseEnter={() => setHoveredSkill(skillName)}
                            onMouseLeave={() => setHoveredSkill(null)}
                          >
                            <motion.span 
                              className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 border border-blue-200/50 dark:border-blue-500/30 px-4 py-2.5 rounded-xl text-sm font-medium inline-block transition-all duration-300 text-blue-700 dark:text-blue-300 shadow-sm"
                              whileHover={{ 
                                scale: 1.05, 
                                y: -2,
                                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)"
                              }}
                              whileTap={{ scale: 0.95 }}
                            >
                              {skillName}
                            </motion.span>
                            
                            {/* Icon Tooltip */}
                            {iconClass && (
                              <motion.div 
                                className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-20"
                                initial={{ opacity: 0, scale: 0.5, y: 10 }}
                                animate={{
                                  opacity: hoveredSkill === skillName ? 1 : 0,
                                  scale: hoveredSkill === skillName ? 1 : 0.5,
                                  y: hoveredSkill === skillName ? 0 : 10
                                }}
                                transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                              >
                                <div className="bg-white dark:bg-slate-700 p-3 rounded-2xl shadow-xl border border-blue-200/50 dark:border-blue-500/30 flex items-center justify-center backdrop-blur-sm">
                                  <i className={`${iconClass} text-3xl`}></i>
                                </div>
                                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white dark:bg-slate-700 border-r border-b border-blue-200/50 dark:border-blue-500/30 rotate-45"></div>
                              </motion.div>
                            )}
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Floating Decorative Elements */}
              <div className="relative mt-8">
                {Array.from({ length: 4 }, (_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-gradient-to-r from-blue-400/50 to-indigo-400/50 rounded-full"
                    style={{
                      left: `${15 + Math.random() * 70}%`,
                      top: `${Math.random() * 40}px`,
                    }}
                    animate={{
                      y: [0, -15, 0],
                      opacity: [0, 0.8, 0],
                      scale: [0, 1.2, 0],
                    }}
                    transition={{
                      duration: 2.5 + Math.random() * 1.5,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                      ease: [0.4, 0, 0.6, 1],
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div 
            className="space-y-6"
            variants={itemVariants}
          >
            <div className="bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-indigo-200/30 dark:border-indigo-500/20 shadow-xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">Experience</h3>
                  <p className="text-slate-600 dark:text-slate-400">My professional journey</p>
                </div>
              </div>

              <div className="space-y-6">
                {experience.map((exp, expIdx) => (
                  <motion.div 
                    key={exp.year}
                    className="relative"
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: expIdx * 0.1 }}
                  >
                    {/* Year Badge */}
                    <motion.div 
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/40 dark:to-purple-900/40 px-4 py-2 rounded-xl border border-indigo-200/50 dark:border-indigo-500/30 mb-4"
                      whileHover={{ scale: 1.02 }}
                    >
                      <Star className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                      <span className="text-lg font-semibold text-indigo-700 dark:text-indigo-300">{exp.year}</span>
                    </motion.div>

                    {/* Experience Items */}
                    <div className="space-y-4 ml-2">
                      {exp.items.map((item, itemIdx) => (
                        <motion.div 
                          key={item.title}
                          className="bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-800/30 dark:to-blue-900/20 rounded-2xl p-6 border border-slate-200/50 dark:border-slate-600/30 shadow-sm"
                          whileHover={{ 
                            scale: 1.02, 
                            y: -2,
                            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                          }}
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ 
                            delay: expIdx * 0.1 + itemIdx * 0.05,
                            type: "spring",
                            stiffness: 300
                          }}
                        >
                          <div className="flex items-start gap-4">
                            <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-2 shadow-md"></div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-slate-800 dark:text-slate-200 text-lg mb-1">{item.title}</h4>
                              <p className="text-indigo-600 dark:text-indigo-400 font-medium">{item.company}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Connecting Line */}
                    {expIdx < experience.length - 1 && (
                      <motion.div 
                        className="w-px h-8 bg-gradient-to-b from-indigo-300 to-purple-300 dark:from-indigo-600 dark:to-purple-600 ml-6 mt-4"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ delay: expIdx * 0.2 + 0.5, duration: 0.5 }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Floating Sparkles */}
              <div className="relative mt-6">
                {Array.from({ length: 3 }, (_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${Math.random() * 30}px`,
                    }}
                    animate={{
                      rotate: [0, 360],
                      scale: [0.8, 1.2, 0.8],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 4 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                      ease: [0.4, 0, 0.6, 1],
                    }}
                  >
                    <Sparkles className="w-4 h-4 text-indigo-400/60 dark:text-indigo-300/40" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Decorative Element */}
        <motion.div 
          className="text-center mt-16"
          variants={itemVariants}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-100/80 to-blue-100/80 dark:from-slate-800/50 dark:to-blue-800/30 backdrop-blur-sm rounded-full px-6 py-3 border border-slate-200/50 dark:border-slate-600/30"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </motion.div>
            <span className="text-slate-700 dark:text-slate-300 font-medium">Always learning, always growing</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;