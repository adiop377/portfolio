import React from 'react';
import Hero from './components/Hero';
import Story from './components/Story';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Services from './components/Services';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NoiseOverlay from './components/NoiseOverlay';
import CustomCursor from './components/CustomCursor';
import Starfield from './components/Starfield';

function App() {
  return (
    <div className="portfolio-app relative" style={{ background: 'var(--bg-dark)', color: 'var(--text-main)', minHeight: '100vh' }}>
      <Starfield />
      <NoiseOverlay />
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        <Story />
        <About />
        <Projects />
        <div style={{ background: 'linear-gradient(to bottom, #050506, #0a0a0c)' }}>
          <Skills />
          <Services />
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
