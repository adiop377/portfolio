import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import AbstractBackground from './AbstractBackground';

const Hero = () => {
  const mouseX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 500);
  const mouseY = useMotionValue(typeof window !== 'undefined' ? window.innerHeight / 2 : 500);

  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  const parallaxX = useTransform(smoothX, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [-30, 30]);
  const parallaxY = useTransform(smoothY, [0, typeof window !== 'undefined' ? window.innerHeight : 1000], [-30, 30]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 1.5,
        staggerChildren: 0.3,
        delayChildren: 0.5 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } }
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 1.5, ease: 'easeInOut', delay: 1 } }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-transparent flex flex-col justify-center items-center">
      {/* Premium Apple-style Abstract Shapes Background */}
      <AbstractBackground />

      {/* Cinematic Overlays */}
      <div className="vignette z-10" />
      <div className="scene-overlay z-10" />

      {/* Horizontal Letterboxing */}
      <div className="letterbox letterbox-top z-20" />
      <div className="letterbox letterbox-bottom z-20" />

      {/* Main Content Area with Parallax */}
      <motion.div 
        style={{ x: parallaxX, y: parallaxY }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 text-center px-6 flex flex-col items-center"
      >
        <motion.div variants={itemVariants} className="mb-2">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 font-bold tracking-[0.4em] uppercase text-sm md:text-base mb-2 flicker" style={{ filter: 'drop-shadow(0 0 8px rgba(168,85,247,0.3))' }}>
            System Initialized
          </p>
          <motion.div 
            variants={lineVariants}
            className="h-[1px] w-24 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mb-6"
            style={{ originX: 0.5 }}
          />
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-white text-[clamp(2rem,10vw,6rem)] leading-none font-black mb-4 tracking-tight"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          ADITYA <br className="md:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.6)] animate-pulse">RAJ</span>
        </motion.h1>

        <motion.h2 
          variants={itemVariants}
          className="text-white/60 font-light tracking-[clamp(0.1em,1vw,0.4em)] uppercase text-[clamp(0.7rem,2vw,0.875rem)] mb-12 drop-shadow-md text-center max-w-lg mx-auto leading-relaxed px-4"
        >
          Full Stack Developer crafting immersive web experiences.
        </motion.h2>

        <motion.div 
          variants={itemVariants}
          className="relative inline-block mt-4"
        >
          <a 
            href="#projects"
            className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-300 bg-black/40 backdrop-blur-md rounded-full border border-purple-500/30 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:scale-105 overflow-hidden"
          >
            <span className="absolute inset-0 w-0 h-full transition-all duration-500 ease-out bg-gradient-to-r from-purple-600 to-cyan-500 group-hover:w-full -z-10" />
            <span className="relative tracking-[0.3em] uppercase text-sm text-shadow-sm group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">Enter Portfolio</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom Status Bar - Movie Style */}
      <div className="absolute bottom-10 left-10 z-20 hidden md:block">
        <div className="flex items-center gap-4 text-[10px] text-gray-500 tracking-widest uppercase">
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(168,85,247,1)]" />
          <span>System: Active</span>
          <span className="opacity-40">|</span>
          <span>Location: New Delhi, IN</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] text-gray-500 tracking-[0.3em] uppercase">Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-purple-500 via-cyan-400 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
