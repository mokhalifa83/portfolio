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
    </>
  );
}

export default App;
