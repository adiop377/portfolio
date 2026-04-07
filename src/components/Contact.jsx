import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    const formData = new FormData(e.target);
    
    // Using Web3Forms for backend-less email delivery
    formData.append("access_key", "f3e596af-9846-4bb0-b7d5-246c7594bc28");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setStatus('success');
        e.target.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        console.log("Error", data);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="section relative" style={{ paddingBottom: 'clamp(5rem, 15vw, 150px)', paddingLeft: 'clamp(1rem, 5vw, 5%)', paddingRight: 'clamp(1rem, 5vw, 5%)' }}>
      <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 8vw, 80px)' }}>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 font-bold tracking-[0.5em] uppercase text-sm mb-4 flicker"
          style={{ marginBottom: '20px' }}
        >
          Get In Touch
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-white uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(2rem, 8vw, 5rem)', fontWeight: '900' }}
        >
          Let's Build <br className="md:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">Something Grand</span>
        </motion.h2>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-card flex flex-col relative overflow-hidden"
          style={{ padding: 'clamp(1.5rem, 5vw, 60px)', borderRadius: '30px' }}
          onSubmit={handleSubmit}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'clamp(15px, 3vw, 30px)', marginBottom: '30px' }}>
            <div className="input-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" placeholder="Type your name..." required disabled={status === 'submitting'} />
            </div>
            <div className="input-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" placeholder="your@email.com" required disabled={status === 'submitting'} />
            </div>
            <div className="input-group">
              <label htmlFor="whatsapp">WhatsApp Number</label>
              <input type="tel" id="whatsapp" name="whatsapp" placeholder="+91 0000000000" disabled={status === 'submitting'} />
            </div>
          </div>
          
          <div className="input-group" style={{ marginBottom: '40px' }}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Tell me about your project..." required disabled={status === 'submitting'}></textarea>
          </div>

          <motion.button
            whileHover={{ scale: status === 'submitting' ? 1 : 1.02 }}
            whileTap={{ scale: status === 'submitting' ? 1 : 0.98 }}
            disabled={status === 'submitting'}
            className="group relative overflow-hidden flex items-center justify-center font-bold text-white transition-all duration-300"
            style={{
              width: '100%',
              padding: 'clamp(15px, 2vw, 20px)',
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              background: status === 'success' ? '#10B981' : status === 'error' ? '#EF4444' : 'black',
              border: status === 'success' ? '1px solid #10B981' : '1px solid rgba(168,85,247,0.5)',
              borderRadius: '15px',
              cursor: status === 'submitting' ? 'wait' : 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '0.1rem'
            }}
          >
            {status === 'idle' && (
              <>
                <span className="absolute inset-0 w-0 h-full transition-all duration-500 ease-out bg-gradient-to-r from-purple-600 to-cyan-500 group-hover:w-full -z-10" />
                <span className="relative z-10 text-shadow-sm group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">Transmit Signal</span>
              </>
            )}
            {status === 'submitting' && <span className="animate-pulse">Establishing Connection...</span>}
            {status === 'success' && <span>Message Received. Thanks!</span>}
            {status === 'error' && <span>Transmission Failed. Retry?</span>}
          </motion.button>
        </motion.form>
      </div>

      <style>{`
        .input-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .input-group label {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--accent-pink);
          text-transform: uppercase;
          letter-spacing: 0.1rem;
        }
        .input-group input, .input-group textarea {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 15px;
          color: white;
          font-family: inherit;
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        .input-group input:disabled, .input-group textarea:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .input-group input:focus, .input-group textarea:focus {
          outline: none;
          background: rgba(255, 255, 255, 0.05);
          border-color: var(--accent-cyan);
          box-shadow: 0 0 15px rgba(34, 211, 238, 0.2);
        }
      `}</style>
    </section>
  );
};

export default Contact;
