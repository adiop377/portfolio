import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const shapes = [
  {
    id: 1,
    size: 'w-64 h-64',
    position: 'top-[10%] left-[15%]',
    gradient: 'from-purple-500/40 to-indigo-500/10',
    border: 'border-purple-400/30',
    shadow: 'shadow-[0_0_40px_rgba(168,85,247,0.3)]',
    animation: { y: [0, -30, 0], rotate: [0, 10, 0], duration: 8 }
  },
  {
    id: 2,
    size: 'w-80 h-80',
    position: 'bottom-[15%] right-[10%]',
    gradient: 'from-cyan-500/40 to-blue-500/10',
    border: 'border-cyan-400/30',
    shadow: 'shadow-[0_0_50px_rgba(6,182,212,0.3)]',
    animation: { y: [0, 40, 0], rotate: [0, -15, 0], duration: 10 }
  },
  {
    id: 3,
    size: 'w-48 h-48',
    position: 'top-[40%] right-[25%]',
    gradient: 'from-fuchsia-500/30 to-purple-500/5',
    border: 'border-fuchsia-400/20',
    shadow: 'shadow-[0_0_30px_rgba(217,70,239,0.2)]',
    animation: { x: [0, -20, 0], y: [0, -15, 0], duration: 7 }
  },
  {
    id: 4,
    size: 'w-32 h-32',
    position: 'bottom-[30%] left-[25%]',
    gradient: 'from-teal-400/30 to-cyan-500/5',
    border: 'border-teal-400/20',
    shadow: 'shadow-[0_0_20px_rgba(45,212,191,0.2)]',
    animation: { x: [0, 20, 0], y: [0, 25, 0], duration: 6 }
  }
];

const AbstractBackground = () => {
    // Advanced Mouse Parallax Logic
    const mouseX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 0);
    const mouseY = useMotionValue(typeof window !== 'undefined' ? window.innerHeight / 2 : 0);

    const smoothX = useSpring(mouseX, { damping: 40, stiffness: 200, mass: 0.5 });
    const smoothY = useSpring(mouseY, { damping: 40, stiffness: 200, mass: 0.5 });

    const parallaxX = useTransform(smoothX, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [-40, 40]);
    const parallaxY = useTransform(smoothY, [0, typeof window !== 'undefined' ? window.innerHeight : 1000], [-40, 40]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="absolute inset-0 z-0 bg-transparent overflow-hidden pointer-events-none">
            <motion.div 
                style={{ x: parallaxX, y: parallaxY }} 
                className="absolute inset-0 w-full h-full"
            >
                {shapes.map((shape) => (
                    <motion.div
                        key={shape.id}
                        className={`absolute rounded-full backdrop-blur-3xl border bg-gradient-to-br ${shape.size} ${shape.position} ${shape.gradient} ${shape.border} ${shape.shadow}`}
                        animate={{
                            y: shape.animation.y,
                            x: shape.animation.x || [0, 0, 0],
                            rotate: shape.animation.rotate || [0, 0, 0]
                        }}
                        transition={{
                            duration: shape.animation.duration,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        style={{
                            boxShadow: `inset 0 0 20px rgba(255,255,255,0.05)`, // Inner glass reflection
                        }}
                    />
                ))}
            </motion.div>
            
            {/* Soft Ambient Glow Overlay behind shapes to merge with the starfield nicely */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)] pointer-events-none" />
        </div>
    );
};

export default AbstractBackground;
