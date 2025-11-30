'use client';

import { useState, useEffect } from 'react';

const ScrollDots = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [clickedSection, setClickedSection] = useState('');
  const sections = ['home', 'about', 'skills', 'projects', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    
    setClickedSection(sectionId);
    
    setTimeout(() => setClickedSection(''), 300);
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
      {sections.map((section, index) => {
        const isActive = activeSection === section;
        const isClicked = clickedSection === section;
        
        return (
          <a
            key={index}
            href={`#${section}`}
            onClick={(e) => handleClick(e, section)}
            className={`
              rounded-full transition-all duration-300 cursor-pointer
              ${isActive 
                ? 'bg-purple-500 w-4 h-4' 
                : 'bg-slate-600 hover:bg-purple-400 w-3 h-3'
              }
              ${isClicked ? 'scale-150' : 'scale-100'}
            `}
            aria-label={`Go to ${section} section`}
            title={section.charAt(0).toUpperCase() + section.slice(1)}
          >
            <span className="sr-only">{section}</span>
          </a>
        );
      })}
    </div>
  );
};

export default ScrollDots;