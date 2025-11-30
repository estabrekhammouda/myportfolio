'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Github, ExternalLink, Star, GitFork, Code2, Calendar } from 'lucide-react';

type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  created_at: string;
  updated_at: string;
  fork: boolean;
};

// Define the GitHub API response type
type GitHubApiRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  created_at: string;
  updated_at: string;
  fork: boolean;
};

export default function ProjectsSection() {
  const [projects, setProjects] = useState<GitHubRepo[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [direction, setDirection] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const particlePositions = [
    { left: 10, top: 20 },
    { left: 30, top: 50 },
    { left: 60, top: 15 },
    { left: 80, top: 70 },
    { left: 25, top: 85 },
    { left: 70, top: 40 },
    { left: 45, top: 60 },
    { left: 90, top: 30 },
  ];

  useEffect(() => {
    const fetchGitHubProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/estabrekhammouda/repos?sort=updated&per_page=100');
        
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        
        const data: GitHubApiRepo[] = await response.json();
        
        const allProjects = data
          .filter((repo: GitHubApiRepo) => repo && repo.name)
          .map((repo: GitHubApiRepo) => ({
            id: repo.id,
            name: repo.name,
            description: repo.description,
            html_url: repo.html_url,
            homepage: repo.homepage,
            stargazers_count: repo.stargazers_count || 0,
            forks_count: repo.forks_count || 0,
            language: repo.language,
            topics: repo.topics || [],
            created_at: repo.created_at,
            updated_at: repo.updated_at,
            fork: repo.fork || false,
          }))
          .sort((a: GitHubRepo, b: GitHubRepo) => {
            if (b.stargazers_count !== a.stargazers_count) {
              return b.stargazers_count - a.stargazers_count;
            }
            return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
          });
        
        setProjects(allProjects);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching GitHub projects:', error);
        setLoading(false);
      }
    };

    fetchGitHubProjects();
  }, []);

  const nextProject = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short' 
    });
  };

  if (loading) {
    return (
      <section className="relative px-6 py-20 bg-gradient-to-br from-slate-900 via-violet-900/25 to-slate-900 overflow-hidden min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-300 text-lg">Loading projects from GitHub...</p>
        </div>
      </section>
    );
  }

  if (projects.length === 0) {
    return (
      <section className="relative px-6 py-20 bg-gradient-to-br from-slate-900 via-violet-900/25 to-slate-900 overflow-hidden min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Github size={64} className="text-slate-600 mx-auto mb-4" />
          <p className="text-slate-300 text-lg">No projects found</p>
        </div>
      </section>
    );
  }

  const currentProject = projects[currentIndex];

  return (
    <section 
      id="projects" 
      className="relative px-6 py-20 bg-gradient-to-br from-slate-900 via-violet-900/25 to-slate-900 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
        
        <motion.div 
          className="absolute top-20 left-20 w-32 h-32 border-2 border-violet-500/20 rounded-full"
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-24 h-24 border-2 border-fuchsia-500/20 rounded-full"
          animate={{ rotate: -360, scale: [1, 0.9, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        
        <motion.div 
          className="absolute top-1/2 left-10 w-20 h-20 bg-violet-500/10 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: [0.4, 0, 0.6, 1] }}
        />
        <motion.div 
          className="absolute bottom-32 right-16 w-32 h-32 bg-fuchsia-500/10 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: [0.4, 0, 0.6, 1], delay: 2 }}
        />
        
        {mounted && particlePositions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-violet-400/40 rounded-full"
            style={{
              left: `${pos.left}%`,
              top: `${pos.top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm font-medium backdrop-blur-sm mb-6">
              <Github size={16} />
              Live from GitHub
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent leading-tight mb-4"
          >
            Featured Projects
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-slate-300 text-lg max-w-2xl mx-auto"
          >
            Automatically synced from my GitHub • {projects.length} repositories
          </motion.p>
        </div>

        <div className="relative">
          <button
            onClick={prevProject}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 bg-slate-800/90 backdrop-blur-sm border border-purple-500/30 rounded-full flex items-center justify-center text-purple-300 hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Previous project"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextProject}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 bg-slate-800/90 backdrop-blur-sm border border-purple-500/30 rounded-full flex items-center justify-center text-purple-300 hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Next project"
          >
            <ChevronRight size={24} />
          </button>

          <div className="relative max-w-sm mx-auto overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 }
                }}
                className="w-full"
              >
                <div className="bg-slate-800/70 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden hover:border-purple-500/30 transition-all duration-500 shadow-2xl">
                  <div className="relative w-full aspect-square bg-gradient-to-br from-slate-900/90 to-slate-800/90 flex items-center justify-center border-b border-slate-700/50">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10"></div>
                    
                    <div className="relative z-10">
                      {currentProject.fork ? (
                        <GitFork size={64} className="text-purple-400" />
                      ) : (
                        <Code2 size={64} className="text-purple-400" />
                      )}
                    </div>

                    <div className="absolute top-4 right-4 flex items-center gap-3 bg-slate-900/70 backdrop-blur-sm rounded-full px-4 py-2 border border-slate-700/50">
                      <div className="flex items-center gap-1 text-yellow-400">
                        <Star size={14} />
                        <span className="text-xs font-semibold">{currentProject.stargazers_count}</span>
                      </div>
                      <div className="flex items-center gap-1 text-slate-400">
                        <GitFork size={14} />
                        <span className="text-xs font-semibold">{currentProject.forks_count}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      {currentProject.fork && (
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium border border-purple-500/30">
                          Forked • Collaborative
                        </span>
                      )}
                      {currentProject.language && (
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          {currentProject.language}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">
                      {currentProject.name}
                    </h3>

                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                      <Calendar size={12} />
                      <span>{formatDate(currentProject.updated_at)}</span>
                    </div>

                    <p className="text-slate-300 text-sm leading-relaxed mb-3 line-clamp-3">
                      {currentProject.description || 'No description available'}
                    </p>

                    {currentProject.topics && currentProject.topics.length > 0 && (
                      <div className="mb-3">
                        <div className="flex flex-wrap gap-2">
                          {currentProject.topics.slice(0, 6).map((topic, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded-md text-xs font-medium border border-slate-600/50"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex items-center gap-2 pt-3 border-t border-slate-700/50">
                      <a
                        href={currentProject.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-700/50 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg text-sm font-semibold transition-all duration-300 border border-slate-600/50 hover:border-slate-500"
                      >
                        <Github size={16} />
                        <span>GitHub</span>
                      </a>
                      {currentProject.homepage && (
                        <a
                          href={currentProject.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105"
                        >
                          <ExternalLink size={16} />
                          <span>Live</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {projects.slice(0, 10).map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 bg-purple-500' 
                    : 'w-2 bg-slate-600 hover:bg-slate-500'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
            {projects.length > 10 && (
              <span className="text-slate-500 text-sm ml-2">
                +{projects.length - 10} more
              </span>
            )}
          </div>

          <div className="text-center mt-4">
            <span className="text-slate-400 text-sm">
              {currentIndex + 1} / {projects.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}