'use client';
import { projects } from '@/lib/constants';
import ProjectCard from '../ui/ProjectCard';
import { useEffect, useRef, useState } from 'react';

export default function ProjectsSection() {
  const [visibleProjects, setVisibleProjects] = useState<Set<number>>(new Set());
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt((entry.target as HTMLElement).dataset.index || '0');
            setVisibleProjects(prev => new Set([...Array.from(prev), index]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const projectElements = document.querySelectorAll('[data-project-card]');
    projectElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-float-slow"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Enhanced Header with Staggered Animation */}
        <div className="text-center mb-20">
          <div className="inline-block space-y-4">
            <div className="opacity-0 animate-fade-in-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm font-medium backdrop-blur-sm">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                Portfolio Showcase
              </span>
            </div>
            
            <h2 className="opacity-0 animate-fade-in-up delay-200 text-5xl md:text-7xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent leading-tight">
              Featured
              <br />
              <span className="relative">
                Projects
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-50"></div>
              </span>
            </h2>
            
            <p className="opacity-0 animate-fade-in-up delay-400 text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Explore my latest work showcasing innovative solutions, 
              <span className="text-purple-300 font-medium"> creative implementations</span>, 
              and cutting-edge technologies
            </p>
          </div>
        </div>

        {/* Projects with Enhanced Animation */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={project.title}
              data-project-card
              data-index={index}
              className={`
                transform transition-all duration-1000 ease-out
                ${visibleProjects.has(index) 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-12 scale-95'
                }
              `}
              style={{ 
                transitionDelay: `${index * 150}ms`
              }}
            >
              <div className="group relative">
                {/* Hover Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/0 via-purple-600/10 to-pink-600/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                
                {/* Card Container */}
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 transition-all duration-500 group-hover:border-purple-500/30 group-hover:bg-slate-800/70">
                  <ProjectCard
                    project={project}
                    reverse={index % 2 === 1}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(-5deg);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-15px) scale(1.05);
          }
        }

        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
          25% {
            opacity: 0.8;
          }
          50% {
            transform: translateY(-100px) translateX(50px);
            opacity: 0.5;
          }
          75% {
            opacity: 0.2;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
          animation-delay: 2s;
        }

        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
          animation-delay: 4s;
        }

        .animate-float-particle {
          animation: float-particle linear infinite;
        }

        .delay-200 {
          animation-delay: 200ms;
        }

        .delay-400 {
          animation-delay: 400ms;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </section>
  );
}