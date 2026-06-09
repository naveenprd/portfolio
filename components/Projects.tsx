import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data';
import { ProjectItem } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Lock } from 'lucide-react';

interface ProjectsProps {
  onProjectClick: (project: ProjectItem) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onProjectClick }) => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    // Calculate relative position for image tilt/movement if needed, 
    // simply storing client coordinates for now
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section id="work" className="relative min-h-screen pb-32 pt-6 pl-[1px] bg-dark z-20" onMouseMove={handleMouseMove}>
      
      {/* Fixed Background Image Reveal */}
      <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center opacity-30 blur-sm">
         <AnimatePresence mode="wait">
            {hoveredProject && (
                <motion.img 
                    key={hoveredProject}
                    src={PROJECTS_DATA.find(p => p.id === hoveredProject)?.imageUrl}
                    alt=""
                    aria-hidden="true"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 0.4, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover grayscale"
                />
            )}
         </AnimatePresence>
      </div>
      
      {/* Floating Preview Image near cursor (Optional - adding a fixed centered one instead for better perf) */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-0 flex items-end justify-between border-b border-white/10 pb-8">
            <h2 className="text-4xl font-display font-bold text-light">Selected Work</h2>
            <span className="text-accent font-mono text-sm">01 — 0{PROJECTS_DATA.length}</span>
        </div>

        <div className="flex flex-col">
          {PROJECTS_DATA.map((project, index) => (
            <motion.div 
              key={project.id}
              className="group relative border-b border-white/10 last:border-b-0 py-12 cursor-hover transition-transform duration-300 md:hover:translate-x-6"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => onProjectClick(project)}
            >
              <div className="flex flex-col gap-6 pr-12 md:pr-20">
                 <div className="flex flex-col items-start gap-4">
                    <span className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-widest opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                        {project.locked && (
                            <>
                                <Lock size={12} aria-hidden="true" />
                                <span className="sr-only">Password protected.</span>
                            </>
                        )}
                        {project.tags.join(' • ')}
                    </span>
                    <h3 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-transparent text-stroke-light group-hover:text-light transition-colors duration-300 flex flex-col gap-2" 
                        style={{ WebkitTextStroke: hoveredProject === project.id ? "0px" : "1px #333" }}>
                       <span>{project.title.split('(')[0].trim()}</span>
                       {project.title.includes('(') && (
                           <span className="text-2xl md:text-4xl font-sans font-normal text-gray-400 tracking-normal mt-2" style={{ WebkitTextStroke: "0px" }}>
                               ({project.title.split('(')[1]}
                           </span>
                       )}
                    </h3>
                 </div>
                 <div className="mt-4">
                    <p className="text-gray-400 font-light max-w-2xl opacity-70 group-hover:opacity-100 transition-opacity text-lg">
                        {project.subtitle}
                    </p>
                 </div>
              </div>
              
              {/* Arrow Icon */}
              <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-0 transition-all duration-300">
                  {project.locked
                    ? <Lock size={48} className="text-accent" aria-hidden="true" />
                    : <ArrowUpRight size={48} className="text-accent" aria-hidden="true" />}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;