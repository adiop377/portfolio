import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import blueDragon from '../assets/dragon_blue_aura.png';

const DragonBackground = () => {
    // Advanced Mouse Parallax Logic
    const mouseX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 0);
    const mouseY = useMotionValue(typeof window !== 'undefined' ? window.innerHeight / 2 : 0);

    const smoothX = useSpring(mouseX, { damping: 40, stiffness: 200, mass: 0.5 });
    const smoothY = useSpring(mouseY, { damping: 40, stiffness: 200, mass: 0.5 });

    // Increased Parallax boundaries to make it much more noticeable
    const parallaxX = useTransform(smoothX, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [-80, 80]);
    const parallaxY = useTransform(smoothY, [0, typeof window !== 'undefined' ? window.innerHeight : 1000], [-80, 80]);

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
            {/* Cinematic Floating Dragon Container */}
            <div className="absolute inset-0 flex items-center justify-center mix-blend-screen z-10 perspective-1000">
                <motion.div
                    style={{ x: parallaxX, y: parallaxY }} 
                    className="w-full max-w-[900px] aspect-square flex justify-center items-center relative"
                >
                    {/* Deep Breathing Glow Pulse Layer */}
                    <motion.div
                        animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.7, 0.3] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 rounded-full"
                        style={{ background: 'radial-gradient(circle at center, rgba(34,211,238,0.2) 0%, transparent 60%)', filter: 'blur(40px)' }}
                    />

                    {/* Highly Animated Dragon Body */}
                    <motion.div
                        animate={{ 
                            y: [0, -35, 0],
                            x: [0, 10, -10, 0],
                            scale: [1, 1.05, 1],
                            rotate: [0, 1.5, -1.5, 0]
                        }}
                        transition={{ 
                            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                            x: { duration: 7, repeat: Infinity, ease: "easeInOut" },
                            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                            rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                        }}
                        className="w-full h-full flex justify-center items-center relative z-10"
                    >
                        <img 
                            src={blueDragon} 
                            alt="Glowing Neon Blue Dragon" 
                            className="w-[90%] h-auto object-contain filter drop-shadow-[0_0_50px_rgba(34,211,238,0.8)] saturate-150 brightness-125 contrast-[1.4]"
                            style={{
                                WebkitMaskImage: 'radial-gradient(circle at center, black 65%, transparent 100%)',
                                maskImage: 'radial-gradient(circle at center, black 65%, transparent 100%)'
                            }}
                        />
                    </motion.div>
                </motion.div>
            </div>
            
            {/* Deep space overlay */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_transparent_10%,_rgba(0,0,0,0.95)_100%)] pointer-events-none" />
        </div>
    );
};

export default DragonBackground;
