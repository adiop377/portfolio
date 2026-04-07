import React from 'react';
import { motion } from 'framer-motion';
import { FaDiscord, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const socials = [
    { name: 'Discord', url: 'https://discord.gg/dGGp4aTCGF', icon: <FaDiscord size={20} /> },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/aditya-raj-614715363', icon: <FaLinkedin size={20} /> },
    { name: 'Instagram', url: 'https://www.instagram.com/_rajdevx/', icon: <FaInstagram size={20} /> }
  ];

  return (
    <footer style={{ padding: '80px 5%', background: '#050506', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '40px' }}>
        <div>
          <div style={{ fontSize: '2rem', fontWeight: '900', fontFamily: 'var(--font-heading)', marginBottom: '10px' }}>
            <span style={{ color: 'var(--accent-pink)' }}>ADITYA</span> RAJ
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            Crafting the future of the web, one pixel at a time.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '25px' }}>
          {socials.map((social) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: '#FFFFFF' }}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px',
                fontSize: '1rem', 
                fontWeight: '500', 
                color: 'var(--text-muted)', 
                transition: 'all 0.3s ease',
                background: 'rgba(255,255,255,0.03)',
                padding: '10px 18px',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.05)'
              }}
            >
              <span style={{ color: 'var(--accent-pink)' }}>{social.icon}</span>
              <span className="hidden md:inline">{social.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
      
      <div style={{ marginTop: '80px', display: 'flex', justifyContent: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
        <p>© 2026 Aditya Raj. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
