import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
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

        <div style={{ display: 'flex', gap: '30px' }}>
          {[
            { name: 'Discord', url: 'https://discord.gg/dGGp4aTCGF' },
            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/aditya-raj-614715363' },
            { name: 'Instagram', url: 'https://www.instagram.com/_rajdevx/' }
          ].map((social) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: 'var(--accent-pink)' }}
              style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--text-muted)', transition: 'color 0.3s ease' }}
            >
              {social.name}
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
