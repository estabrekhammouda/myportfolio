'use client'

import { Mail, Linkedin, Github, Send, Sparkles, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

type ContactCardProps = {
  href: string
  icon: React.ElementType
  title: string
  description: string
  isExternal?: boolean
  delay?: number
}

const ContactCard = ({ href, icon: Icon, title, description, isExternal = false, delay = 0 }: ContactCardProps) => {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <div 
      className="group"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a 
        href={href} 
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="block relative overflow-hidden"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl transform scale-110" />
        
        {/* Main card */}
        <div className="relative bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10 hover:border-purple-400/60 transition-all duration-500 group-hover:transform group-hover:scale-105 group-hover:bg-white/10">
          {/* Floating particles effect */}
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Sparkles size={16} className="text-purple-400 animate-pulse" />
          </div>
          
          {/* Icon with rotation effect */}
          <div className="relative mb-6">
            <div className={`w-16 h-16 mx-auto bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center transition-transform duration-300 ${isHovered ? 'rotate-12 scale-110' : ''}`}>
              <Icon size={28} className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
            </div>
            {/* Pulse ring */}
            <div className={`absolute inset-0 w-16 h-16 mx-auto rounded-full border-2 border-purple-400/30 transition-all duration-1000 ${isHovered ? 'scale-125 opacity-0' : 'scale-100 opacity-100'}`} />
          </div>
          
          <h3 className="text-xl font-bold mb-3 group-hover:text-purple-300 transition-colors duration-300">{title}</h3>
          <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-sm leading-relaxed">{description}</p>
          
          {/* Hover arrow */}
          <div className="flex justify-center mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <ArrowRight size={16} className="text-purple-400" />
          </div>
        </div>
      </a>
    </div>
  )
}

const ContactSection = () => {
  const [ctaHovered, setCtaHovered] = useState(false)
  
  return (
    <section id="contact" className="relative px-6 py-20 bg-gradient-to-br from-slate-900 via-violet-800/40 to-slate-900 overflow-hidden"

>
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
        
        {/* Floating Orbs */}
        <motion.div 
          className="absolute top-20 left-20 w-32 h-32 border-2 border-indigo-500/20 rounded-full"
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-24 h-24 border-2 border-purple-500/20 rounded-full"
          animate={{ rotate: -360, scale: [1, 0.9, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Additional Orbs */}
        <motion.div 
          className="absolute top-1/2 left-10 w-20 h-20 bg-indigo-500/10 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: [0.4, 0, 0.6, 1] }}
        />
        <motion.div 
          className="absolute bottom-32 right-16 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: [0.4, 0, 0.6, 1], delay: 2 }}
        />
        
        {/* Animated Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-indigo-400/40 rounded-full"
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
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Enhanced header */}
        <div className="mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-6">
            <Sparkles size={16} className="text-purple-400" />
            <span className="text-sm text-gray-300">Let s Connect</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
              🚀 Launch a conversation
            </span>
            <br />
            <span className="text-white/90">with me</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            I am always interested in new opportunities and collaborations. 
            <span className="text-purple-300"> Let s build something amazing together!</span>
          </p>
        </div>

        {/* Enhanced contact cards grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <ContactCard 
            href="mailto:contact.estabrek@gmail.com"
            icon={Mail}
            title="Email"
            description="Drop me a line anytime. I'll get back to you within 24 hours!"
            delay={100}
          />
          <ContactCard 
            href="https://linkedin.com/in/estabrek-hammouda-1127ba2a5"
            icon={Linkedin}
            title="LinkedIn"
            description="Let's connect professionally and grow our networks together"
            isExternal={true}
            delay={200}
          />
          <ContactCard 
            href="https://github.com/estabrekhammouda"
            icon={Github}
            title="GitHub"
            description="Explore my code, contribute to projects, or start something new"
            isExternal={true}
            delay={300}
          />
        </div>

        {/* Enhanced CTA section */}
        <div 
          className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-10 border border-white/10 animate-fade-in-up shadow-2xl"
          style={{ animationDelay: '400ms' }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-t-2xl" />
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
          <div className="absolute -top-1 -right-6 w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <Send size={24} className="text-purple-400" />
            <h3 className="text-3xl font-bold text-purple-300">Ready to collaborate?</h3>
          </div>
          
          <p className="text-gray-300 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
            Whether you have a project in mind, need a developer for your team, or just want to chat about technology, 
            <span className="text-white font-medium"> I would love to hear from you.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="mailto:contact.estabrek@gmail.com"
              className="group relative inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              onMouseEnter={() => setCtaHovered(true)}
              onMouseLeave={() => setCtaHovered(false)}
            >
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity duration-300 scale-110" />
              
              <span className="relative">Send Message</span>
              <Send size={20} className={`relative transition-transform duration-300 ${ctaHovered ? 'translate-x-1' : ''}`} />            </a>
            
            <span className="text-gray-400 text-sm">or</span>
            
            <a 
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full hover:border-purple-400/60 transition-all duration-300 text-gray-300 hover:text-white"
            >
              <span>Scroll up to connect</span>
              <ArrowRight size={16} className="group-hover:-rotate-90 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  )
}

export default ContactSection;