import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

function Experience() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <div className="experience-container">
            <motion.div
                className="experience-content"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={containerVariants}
            >
                <motion.h2 className="section-title" variants={itemVariants}>
                    Work Experience
                </motion.h2>

                <div className="experience-grid">
                    {/* Full Stack Developer */}
                    <motion.div className="exp-column" variants={itemVariants}>
                        <div className="exp-icon">
                            <svg width="80" height="80" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                {/* 3D Stack / Layers representing Full Stack */}
                                <path d="M20 35 L50 20 L80 35 L50 50 Z" /> {/* Top layer */}
                                <path d="M20 50 L50 65 L80 50" /> {/* Middle layer line */}
                                <path d="M20 65 L50 80 L80 65" /> {/* Bottom layer line */}
                                <path d="M20 35 V65 L50 80 V50" /> {/* Left side edges */}
                                <path d="M80 35 V65 L50 80" /> {/* Right side edges */}
                                {/* Small indicator for code/logic */}
                                <path d="M42 32 L48 35 L42 38" strokeWidth="1" />
                                <path d="M58 32 L52 35 L58 38" strokeWidth="1" />
                            </svg>
                        </div>
                        <h3 className="exp-heading">Full Stack<br />Developer</h3>
                        <p className="exp-date">Jan 2016 to Present</p>
                    </motion.div>

                    {/* Network Security Specialist */}
                    <motion.div className="exp-column" variants={itemVariants}>
                        <div className="exp-icon">
                            <svg width="80" height="80" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                {/* Shield-Shielded Cube structure */}
                                <path d="M50 15 L85 32 V68 L50 85 L15 68 V32 Z" /> {/* Outer Hexagon */}
                                <path d="M50 45 L85 32" />
                                <path d="M50 45 L15 32" />
                                <path d="M50 45 V85" />
                                {/* Shield detail in front face */}
                                <path d="M40 55 C40 55 40 70 50 75 C60 70 60 55 60 55 V50 H40 V55Z" fill="currentColor" fillOpacity="0.1" />
                                <path d="M50 25 V45" strokeWidth="1" strokeDasharray="4 2" />
                            </svg>
                        </div>
                        <h3 className="exp-heading">Network Security<br />Specialist</h3>
                        <p className="exp-date">Apr 2009 to Dec 2011</p>
                    </motion.div>

                    {/* Systems Administrator */}
                    <motion.div className="exp-column" variants={itemVariants}>
                        <div className="exp-icon">
                            <svg width="80" height="80" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                {/* Server Rack / Node Cluster representation */}
                                <rect x="25" y="20" width="50" height="60" rx="2" />
                                <line x1="25" y1="35" x2="75" y2="35" />
                                <line x1="25" y1="50" x2="75" y2="50" />
                                <line x1="25" y1="65" x2="75" y2="65" />
                                {/* Status dots */}
                                <circle cx="35" cy="27.5" r="1.5" fill="currentColor" />
                                <circle cx="45" cy="27.5" r="1.5" fill="currentColor" />
                                <circle cx="35" cy="42.5" r="1.5" fill="currentColor" />
                                <circle cx="35" cy="57.5" r="1.5" fill="currentColor" />
                                <circle cx="35" cy="72.5" r="1.5" fill="currentColor" />
                                {/* Geometric connectivity flair */}
                                <path d="M75 40 L85 30 M75 60 L85 70" strokeWidth="1" />
                            </svg>
                        </div>
                        <h3 className="exp-heading">Systems<br />Administrator</h3>
                        <p className="exp-date">Apr 2007 to May 2009</p>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}

export default Experience;
