import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Cpu, Zap, Server, Layout, MonitorSmartphone } from 'lucide-react';

const skills = [
  { 
    name: 'Frontend Engineering', 
    tech: 'React • Next.js • Tailwind CSS • Vite', 
    icon: <Code2 size={24} />, 
    color: '#06B6D4', // Cyan
    desc: 'Building fast, scalable and interactive user interfaces with modern frameworks.'
  },
  { 
    name: 'JavaScript & Core Logic', 
    tech: 'JavaScript (ES6+) • TypeScript • API', 
    icon: <Cpu size={24} />, 
    color: '#22D3EE', // Light Cyan
    desc: 'Writing clean, efficient logic and handling real-time data with optimized performance.'
  },
  { 
    name: 'Backend Development', 
    tech: 'Node.js • Express • REST APIs • Firebase', 
    icon: <Server size={24} />, 
    color: '#8B5CF6', // Purple
    desc: 'Developing secure, scalable backend systems and managing server-side logic.'
  },
  { 
    name: 'UI/UX Design', 
    tech: 'Figma • Design Systems • Prototyping', 
    icon: <Palette size={24} />, 
    color: '#A855F7', // Neon Purple
    desc: 'Designing intuitive, visually appealing interfaces with user-focused experience.'
  },
  { 
    name: 'Animations & Interactions', 
    tech: 'GSAP • Framer Motion • Micro-interactions', 
    icon: <Zap size={24} />, 
    color: '#C084FC', // Light Purple
    desc: 'Creating smooth, engaging animations for modern web experiences.'
  },
  { 
    name: 'Responsive & Performance', 
    tech: 'Mobile-first • Optimization • SEO Basics', 
    icon: <MonitorSmartphone size={24} />, 
    color: '#06B6D4', // Cyan
    desc: 'Ensuring fast loading, responsiveness, and performance across all devices.'
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-[clamp(4rem,10vw,8rem)] bg-transparent overflow-hidden px-[clamp(1.5rem,5vw,10%)]">
      {/* Background Grids */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div style={{ marginBottom: '80px' }} className="text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 font-bold tracking-[0.5em] uppercase text-sm mb-4 flicker"
          >
            Core Competencies
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white text-[clamp(2.5rem,6vw,4.5rem)] leading-none font-black uppercase tracking-tighter"
          >
            CORE <br className="md:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">CAPABILITIES</span>
          </motion.h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.7, ease: "easeOut" }}
              whileHover={{ 
                y: -8, 
                boxShadow: `0 15px 35px ${skill.color}33`, 
                borderColor: skill.color,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              viewport={{ once: true }}
              className="group flex flex-col p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-purple-500/20 transition-all duration-300 relative overflow-hidden h-full cursor-pointer"
            >
              {/* Top Accent Line */}
              <div 
                className="absolute top-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 ease-out"
                style={{ background: skill.color, boxShadow: `0 0 10px ${skill.color}` }}
              />

              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="p-3 rounded-lg bg-black/40 border border-white/10 group-hover:scale-110 transition-transform duration-300" 
                  style={{ color: skill.color, boxShadow: `inset 0 0 20px ${skill.color}22` }}
                >
                  {skill.icon}
                </div>
                <h3 className="text-white font-bold tracking-tight text-[clamp(1.1rem,2vw,1.25rem)] leading-tight group-hover:text-cyan-400 transition-colors uppercase">
                  {skill.name}
                </h3>
              </div>

              <div className="mb-4">
                <p className="text-xs font-mono text-purple-400/80 uppercase tracking-widest break-words leading-relaxed mb-4 p-3 bg-black/40 rounded border border-purple-500/20">
                  {skill.tech}
                </p>
                <p className="text-sm text-gray-400 leading-relaxed font-light">
                  {skill.desc}
                </p>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-16 h-16 opacity-10 pointer-events-none overflow-hidden group-hover:opacity-30 transition-opacity">
                <div className="absolute bottom-[-20px] right-[-20px] w-full h-full border-b-[40px] border-l-[40px] border-l-transparent" style={{ borderBottomColor: skill.color }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
