import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Story = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const wordVariants = {
    hidden: { opacity: 0, y: 50, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div ref={containerRef} className="relative min-h-screen bg-transparent py-32 flex items-center justify-center overflow-hidden">
      {/* Background Depth / Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Left Purple Glow */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-600/20 blur-[120px] mix-blend-screen"
        />
        {/* Right Cyan Glow */}
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-[-10%] w-[40vw] h-[40vw] rounded-full bg-cyan-500/20 blur-[100px] mix-blend-screen"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-10 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
          }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="cinematic-text text-white text-3xl md:text-7xl font-black uppercase tracking-tight leading-tight drop-shadow-2xl flex flex-wrap justify-center gap-x-4 md:gap-x-8 gap-y-4">
            <motion.span variants={wordVariants} className="inline-block">FROM</motion.span>
            <motion.span variants={wordVariants} className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">IDEAS</motion.span>
            <div className="w-full basis-full h-0 hidden md:block"></div>
            <motion.span variants={wordVariants} className="inline-block">TO</motion.span>
            <motion.span variants={wordVariants} className="inline-block">REAL</motion.span>
            <motion.span variants={wordVariants} className="inline-block">WEB</motion.span>
            <motion.span variants={wordVariants} className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">EXPERIENCES</motion.span>
          </h2>
          
          {/* Animated custom underline */}
          <motion.div 
            variants={{
              hidden: { width: 0, opacity: 0 },
              visible: { width: 96, opacity: 1, transition: { duration: 1, delay: 1.2, ease: "circOut" } }
            }}
            className="h-[2px] bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-12 shadow-[0_0_15px_rgba(34,211,238,0.6)]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Story;
