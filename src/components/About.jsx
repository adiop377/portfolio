import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, Webhook, Zap } from 'lucide-react';



const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.2 } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const About = () => {
  return (
    <section id="about" className="relative py-32 bg-transparent overflow-hidden px-6 md:px-[10%] min-h-screen flex items-center">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-purple-600/10 rounded-full blur-[100px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-cyan-500/10 rounded-full blur-[100px] mix-blend-screen animate-pulse" style={{ animationDuration: '10s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        
        {/* 1. Hero Statement */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-24"
        >
          <motion.h2 variants={itemVariants} className="text-white text-3xl md:text-6xl font-black uppercase tracking-tight leading-tight drop-shadow-lg">
            Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Digital</span><br/> Ecosystems
          </motion.h2>
          <motion.div variants={itemVariants} className="w-16 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-8 shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
        </motion.div>

        {/* Top Grid: Identity & Philosophy */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24"
        >
          {/* 2. Identity */}
          <motion.div variants={itemVariants} className="p-8 md:p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-500/30 transition-colors duration-500 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <span className="text-purple-400 font-mono text-sm tracking-widest uppercase mb-4 block">01 // Identity</span>
              <h3 className="text-2xl font-bold text-white mb-4">Who I Am</h3>
              <p className="text-gray-400 leading-relaxed font-light">
                I am a Full Stack Developer dedicated to building scalable, modern, and performance-driven applications. I thrive at the complex intersection where pristine frontend layouts meet robust backend architecture. My goal is to transform complex problems into elegant, intuitive digital solutions.
              </p>
            </div>
          </motion.div>

          {/* 4. Philosophy */}
          <motion.div variants={itemVariants} className="p-8 md:p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400/30 transition-colors duration-500 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-bl from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4 block">02 // Philosophy</span>
              <h3 className="text-2xl font-bold text-white mb-4">My Approach</h3>
              <p className="text-gray-400 leading-relaxed font-light">
                Engineering excellence is driven by a focus on clean code, seamless scalability, and obsessive attention to detail. I believe a superior user experience is not just about what is seen, but how intelligently the underlying systems respond. Form follows function perfectly.
              </p>
            </div>
          </motion.div>
        </motion.div>



        {/* 5. Vision */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mt-32 text-center"
        >
          <motion.div variants={itemVariants} className="inline-block p-[1px] rounded-full bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500 overflow-hidden shadow-[0_0_30px_rgba(168,85,247,0.3)]">
            <div className="bg-black/90 backdrop-blur-xl px-8 py-4 md:px-12 md:py-6 rounded-full flex items-center justify-center">
              <h3 className="text-white text-base md:text-xl font-light tracking-wide m-0">
                Vision: <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300">Building impactful digital products for the modern world.</span>
              </h3>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
