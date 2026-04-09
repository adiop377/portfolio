import React from 'react';
import { motion } from 'framer-motion';

import projectNeon from '../assets/project-neon.png';
import projectPulse from '../assets/project-pulse.png';

const projects = [
  {
    id: 1,
    title: 'Play Nova',
    category: 'Full-Stack Web App',
    image: projectNeon,
    link: 'https://playnovax.vercel.app/',
    accent: '#A855F7', // Neon Purple
    description: 'A premium digital asset marketplace and gaming platform with rapid transactions.',
    buttonText: 'Launch Protocol'
  },
  {
    id: 2,
    title: 'Untitled Studios',
    category: 'INTERACTIVE GAME DEV PORTFOLIO',
    image: projectPulse,
    link: 'https://untitled-creator.vercel.app/',
    accent: '#06B6D4', // Cyan
    description: 'A futuristic pixel-inspired portfolio designed for game developers, focused on immersive UI, smooth animations, and engaging user experience.',
    buttonText: 'ENTER EXPERIENCE'
  }
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ 
        y: -8, 
        boxShadow: `0 15px 35px ${project.accent}33`, 
        borderColor: project.accent,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      viewport={{ once: true }}
      className="group relative flex flex-col h-full rounded-2xl overflow-hidden backdrop-blur-md md:backdrop-blur-xl bg-white/5 border border-purple-500/20 transition-all duration-300 p-6 md:p-8 cursor-pointer w-full"
    >
      {/* Category Badge & Glow */}
      <div 
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at top right, ${project.accent} 0%, transparent 60%)` }}
      />
      
      <div className="relative z-10 flex flex-col flex-grow">
        <div className="self-start mb-6 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full border border-white/10 text-[10px] text-white/80 font-bold uppercase tracking-widest" style={{ borderColor: `${project.accent}55`, color: project.accent }}>
          {project.category}
        </div>

        <h3 className="text-[clamp(1.2rem,3vw,2.25rem)] font-black text-white mb-4 tracking-tight uppercase group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] transition-all leading-tight">
          {project.title.split(' ')[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">{project.title.split(' ').slice(1).join(' ')}</span>
        </h3>
        
        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 flex-grow font-light">
          {project.description}
        </p>

        <a 
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="self-start relative inline-flex items-center justify-center px-8 py-3 font-bold text-white transition-all duration-300 bg-black/40 border border-purple-500/30 rounded-full hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] overflow-hidden group/btn"
        >
          <span className="absolute inset-0 w-0 h-full transition-all duration-500 ease-out bg-gradient-to-r from-purple-600 to-cyan-500 group-hover/btn:w-full -z-10" />
          <span className="relative tracking-[0.2em] uppercase text-xs">{project.buttonText || 'Launch Protocol'}</span>
        </a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative bg-transparent py-[clamp(4rem,10vw,8rem)] px-[clamp(1.5rem,5vw,10%)]">
      {/* Background radial gradient corresponding with Ripto aesthetic */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at top, rgba(168,85,247,0.05) 0%, transparent 70%)' }}></div>
      
      <div className="mb-20 text-center relative z-10">
        <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 font-bold tracking-[0.5em] uppercase text-sm mb-4 flicker"
          >
            Digital Experiences
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-white text-[clamp(2rem,6vw,5rem)] leading-none font-black uppercase tracking-tight"
        >
          Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Missions</span>
        </motion.h2>
        <div className="w-24 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-6" />
      </div>

      {/* Grid Layout for Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 max-w-6xl mx-auto px-4 justify-items-center">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
