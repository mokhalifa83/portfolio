import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    title: 'PHANTOM MCP',
    desc: 'Enterprise compliance & security auditing framework. MCP server for authorized infrastructure assessment.',
    tags: ['Python', 'MCP', 'Security'],
    github: 'https://github.com/mokhalifa83/phantom-mcp',
    live: null,
  },
  {
    title: 'HEICtoJPG',
    desc: 'Convert HEIC & WebP to JPEG entirely in-browser. Zero server uploads, WASM-powered.',
    tags: ['JavaScript', 'WASM', 'heic-to'],
    github: 'https://github.com/mokhalifa83/heictojpg',
    live: 'https://heictojpg.com',
  },
  {
    title: 'SeeraCV',
    desc: 'Arabic CV builder with AI-powered content, multiple templates, and PDF export.',
    tags: ['React', 'TypeScript', 'Supabase', 'AI'],
    github: 'https://github.com/mokhalifa83/SeeraCV',
    live: null,
  },
  {
    title: 'Meta AI Watermark Remover',
    desc: 'Web application to remove watermarks from Meta AI videos using Flask backend.',
    tags: ['Python', 'Flask', 'AI'],
    github: 'https://github.com/mokhalifa83/watermark-remover',
    live: null,
  },
  {
    title: 'Vista Suites',
    desc: 'High-end hospitality landing page with cinematic motion and interactive cursor system.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/mokhalifa83/vista-suites',
    live: 'https://mokhalifa83.github.io/vista-suites',
  },
  {
    title: 'Design Portfolio',
    desc: 'Premium interior design portfolio with sticky parallax stacking and Framer Motion animations.',
    tags: ['React', 'Framer Motion', 'CSS'],
    github: 'https://github.com/mokhalifa83/design-portfolio-minimalist',
    live: 'https://mokhalifa83.github.io/design-portfolio-minimalist/',
  },
  {
    title: 'TextToolbox',
    desc: 'Comprehensive collection of 32+ text manipulation tools. Fast, free, and privacy-focused.',
    tags: ['JavaScript', 'Tools', 'Privacy'],
    github: 'https://github.com/mokhalifa83/texttoolbox',
    live: 'https://texttoolbox.net',
  },
  {
    title: 'KHALIFA',
    desc: 'Professional web security scanner & penetration testing toolkit.',
    tags: ['Python', 'Security', 'Pentesting'],
    github: 'https://github.com/mokhalifa83/Khalifa-Tool',
    live: null,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

function Projects() {
  return (
    <div className="projects-container">
      <motion.div
        className="projects-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.h2 className="section-title-projects" variants={cardVariants}>
          Projects
        </motion.h2>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <motion.div className="project-card" key={i} variants={cardVariants}>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map((t, j) => (
                  <span className="project-tag" key={j}>{t}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  Code
                </a>
                {p.live && (
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className="project-link project-link-live">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Projects;
