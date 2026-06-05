import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Home from './Home';
import About from './About';
import Qualifications from './Qualifications';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import Navbar from './Navbar';
import Cursor from './Cursor';
import './App.css';

function App() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    container: containerRef
  });

  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.15, 0.3, 0.45, 0.6, 0.8, 1],
    ['#f2f2f2', '#000000', '#9ca9b1', '#e2e2e2', '#f5f5f0', '#ad9f8d', '#ad9f8d']
  );

  return (
    <>
      <Cursor />
      <motion.div
        className="scroll-progress"
        style={{ scaleX: scrollYProgress }}
      />
      <motion.div
        className="main-scroll-container"
        ref={containerRef}
        style={{ backgroundColor: bgColor }}
      >
        <Navbar />

        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="qualifications"><Qualifications /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </motion.div>
      <a
        href="https://buymeacoffee.com/mokhalifa"
        target="_blank"
        rel="noopener noreferrer"
        className="coffee-float"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M2 21V19H20V21H2ZM20 8V5H22V11H20V10H18V13C18 14.1 17.55 15.04 16.83 15.71C16.11 16.38 15.14 16.79 14 16.92V19H16V21H8V19H10V16.92C8.86 16.79 7.89 16.38 7.17 15.71C6.45 15.04 6 14.1 6 13V4H20V8ZM8 7H10V5H8V7ZM12 7H14V5H12V7ZM16 7H18V5H16V7Z"/>
        </svg>
        Buy me a coffee
      </a>
    </>
  );
}

export default App;
