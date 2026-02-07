import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Home from './Home';
import About from './About';
import Qualifications from './Qualifications';
import Experience from './Experience';
import Contact from './Contact';
import Navbar from './Navbar';
import './App.css';

function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: containerRef
  });

  // Background color morphing
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.15, 0.25, 0.4, 0.5, 0.65, 0.75, 0.9, 1.0],
    ["#f2f2f2", "#f2f2f2", "#000000", "#000000", "#9ca9b1", "#9ca9b1", "#e2e2e2", "#e2e2e2", "#ad9f8d"]
  );

  // Transitions
  // Home: 0 -> 0.25
  const homeOpacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const homeScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.4]);
  const homeRotateY = useTransform(scrollYProgress, [0, 0.25], [0, -45]);
  const homeZ = useTransform(scrollYProgress, [0, 0.25], [0, -500]);
  const homePointerEvents = useTransform(scrollYProgress, [0, 0.15, 0.25], ["auto", "auto", "none"]);

  // About: 0.25 -> 0.5
  const aboutOpacity = useTransform(scrollYProgress, [0.1, 0.25, 0.4, 0.5], [0, 1, 1, 0]);
  const aboutScale = useTransform(scrollYProgress, [0.1, 0.25, 0.4, 0.5], [1.5, 1, 1, 0.95]);
  const aboutRotateY = useTransform(scrollYProgress, [0.1, 0.25], [45, 0]);
  const aboutZ = useTransform(scrollYProgress, [0.1, 0.25], [-500, 0]);
  const aboutPointerEvents = useTransform(scrollYProgress, [0.15, 0.25, 0.4, 0.5], ["none", "auto", "auto", "none"]);

  // Qualifications: 0.5 -> 0.75
  const qualOpacity = useTransform(scrollYProgress, [0.4, 0.5, 0.65, 0.75], [0, 1, 1, 0]);
  const qualScale = useTransform(scrollYProgress, [0.4, 0.5, 0.65, 0.75], [0.95, 1, 1, 0.95]);
  const qualPointerEvents = useTransform(scrollYProgress, [0.4, 0.5, 0.65, 0.75], ["none", "auto", "auto", "none"]);

  // Experience: 0.75 -> 1.0
  const expOpacity = useTransform(scrollYProgress, [0.65, 0.75, 0.9, 0.95], [0, 1, 1, 0]);
  const expScale = useTransform(scrollYProgress, [0.65, 0.75, 0.9, 0.95], [0.95, 1, 1, 0.95]);
  const expPointerEvents = useTransform(scrollYProgress, [0.65, 0.75, 0.9, 0.95], ["none", "auto", "auto", "none"]);

  // Contact: 1.0
  const contactOpacity = useTransform(scrollYProgress, [0.9, 1.0], [0, 1]);
  const contactScale = useTransform(scrollYProgress, [0.9, 1.0], [0.95, 1]);
  const contactPointerEvents = useTransform(scrollYProgress, [0.9, 1.0], ["none", "auto"]);

  return (
    <motion.div
      className="main-scroll-container"
      ref={containerRef}
      style={{
        backgroundColor: bgColor,
        perspective: "1200px"
      }}
    >
      <Navbar />

      <section id="home" style={{ transformStyle: "preserve-3d" }}>
        <motion.div
          className="section-inner"
          style={{
            opacity: homeOpacity,
            scale: homeScale,
            rotateY: homeRotateY,
            z: homeZ,
            pointerEvents: homePointerEvents,
            transformOrigin: "left center"
          }}
        >
          <Home />
        </motion.div>
      </section>

      <section id="about" style={{ transformStyle: "preserve-3d" }}>
        <motion.div
          className="section-inner"
          style={{
            opacity: aboutOpacity,
            scale: aboutScale,
            rotateY: aboutRotateY,
            z: aboutZ,
            pointerEvents: aboutPointerEvents,
            transformOrigin: "right center"
          }}
        >
          <About />
        </motion.div>
      </section>

      <section id="qualifications">
        <motion.div
          className="section-inner"
          style={{ opacity: qualOpacity, scale: qualScale, pointerEvents: qualPointerEvents }}>
          <Qualifications />
        </motion.div>
      </section>

      <section id="experience">
        <motion.div
          className="section-inner"
          style={{ opacity: expOpacity, scale: expScale, pointerEvents: expPointerEvents }}>
          <Experience />
        </motion.div>
      </section>

      <section id="contact">
        <motion.div
          className="section-inner"
          style={{ opacity: contactOpacity, scale: contactScale, pointerEvents: contactPointerEvents }}>
          <Contact />
        </motion.div>
      </section>
    </motion.div>
  );
}

export default App;
