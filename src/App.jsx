import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Home from './Home';
import About from './About';
import Qualifications from './Qualifications';
import Experience from './Experience';
import Contact from './Contact';
import Navbar from './Navbar';
import './App.css';

function App() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    container: containerRef
  });

  // Smooth out the scroll progress for better performance on mobile
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Background color morphing (Universal)
  const bgColor = useTransform(
    smoothScroll,
    [0, 0.15, 0.25, 0.4, 0.5, 0.65, 0.75, 0.9, 1.0],
    ["#f2f2f2", "#f2f2f2", "#000000", "#000000", "#9ca9b1", "#9ca9b1", "#e2e2e2", "#e2e2e2", "#ad9f8d"]
  );

  // Opacity Transitions (Universal)
  const homeOpacity = useTransform(smoothScroll, [0, 0.15, 0.25], [1, 1, 0]);
  const aboutOpacity = useTransform(smoothScroll, [0.1, 0.25, 0.4, 0.5], [0, 1, 1, 0]);
  const qualOpacity = useTransform(smoothScroll, [0.4, 0.5, 0.65, 0.75], [0, 1, 1, 0]);
  const expOpacity = useTransform(smoothScroll, [0.65, 0.75, 0.9, 1.0], [0, 1, 1, 0]);
  const contactOpacity = useTransform(smoothScroll, [0.9, 1.0], [0, 1]);

  // 3D/Scale Effects (Subtle on Mobile)
  const homeScale = useTransform(smoothScroll, [0, 0.25], [1, isMobile ? 0.95 : 0.4]);
  const homeRotateY = useTransform(smoothScroll, [0, 0.25], [0, isMobile ? 0 : -45]);
  const homeZ = useTransform(smoothScroll, [0, 0.25], [0, isMobile ? 0 : -500]);

  const aboutScale = useTransform(smoothScroll, [0.1, 0.25, 0.4, 0.5], [isMobile ? 1 : 1.5, 1, 1, 0.95]);
  const aboutRotateY = useTransform(smoothScroll, [0.1, 0.25], [isMobile ? 0 : 45, 0]);
  const aboutZ = useTransform(smoothScroll, [0.1, 0.25], [isMobile ? 0 : -500, 0]);

  return (
    <motion.div
      className="main-scroll-container"
      ref={containerRef}
      style={{
        backgroundColor: bgColor,
        perspective: isMobile ? "none" : "1200px"
      }}
    >
      <Navbar />

      <section id="home">
        <motion.div
          className="section-inner"
          style={{
            opacity: homeOpacity,
            scale: homeScale,
            rotateY: homeRotateY,
            z: homeZ,
            transformOrigin: "left center"
          }}
        >
          <Home />
        </motion.div>
      </section>

      <section id="about">
        <motion.div
          className="section-inner"
          style={{
            opacity: aboutOpacity,
            scale: aboutScale,
            rotateY: aboutRotateY,
            z: aboutZ,
            transformOrigin: "right center"
          }}
        >
          <About />
        </motion.div>
      </section>

      <section id="qualifications">
        <motion.div className="section-inner" style={{ opacity: qualOpacity }}>
          <Qualifications />
        </motion.div>
      </section>

      <section id="experience">
        <motion.div className="section-inner" style={{ opacity: expOpacity }}>
          <Experience />
        </motion.div>
      </section>

      <section id="contact">
        <motion.div className="section-inner" style={{ opacity: contactOpacity }}>
          <Contact />
        </motion.div>
      </section>
    </motion.div>
  );
}

export default App;
