import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Web Design',
    description: 'Modern, high-fidelity UI designs with a focus on cinematic visual storytelling.',
    icon: '✨',
    color: 'var(--accent-pink)',
  },
  {
    title: 'Frontend Dev',
    description: 'Buttery smooth, high-performance web applications built with the latest tech stack.',
    icon: '💻',
    color: 'var(--accent-purple)',
  },
  {
    title: 'UI/UX Design',
    description: 'Immersive user experiences that feel fluid, intuitive, and premium on every device.',
    icon: '💎',
    color: 'var(--accent-orange)',
  },
];

const Services = () => {
  return (
    <section id="services" className="section">
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ 
            color: 'var(--accent-pink)', 
            fontWeight: '600', 
            textTransform: 'uppercase', 
            letterSpacing: '0.1rem', 
            marginBottom: '20px' 
          }}
        >
          My Services
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '900' }}
        >
          Premium <span className="gradient-text">Solutions</span>
        </motion.h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5, type: 'spring' }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="glass-card"
            style={{ 
              padding: '50px 40px', 
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '20px',
              borderBottom: `4px solid ${service.color}`
            }}
          >
            <div 
              style={{ 
                fontSize: '3rem', 
                padding: '20px', 
                background: `rgba(${service.color === 'var(--accent-pink)' ? '255, 0, 127' : service.color === 'var(--accent-purple)' ? '123, 47, 247' : '255, 140, 0'}, 0.1)`, 
                borderRadius: '50%' 
              }}
            >
              {service.icon}
            </div>
            <h3 style={{ fontSize: '1.8rem', fontWeight: '800' }}>{service.title}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.6' }}>
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
