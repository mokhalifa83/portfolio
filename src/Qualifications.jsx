import React from 'react';
import { motion } from 'framer-motion';
import './Qualifications.css';

function Qualifications() {
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
        <div className="qualifications-container">
            <motion.div
                className="qualifications-content"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={containerVariants}
            >
                <motion.h2 className="section-title" variants={itemVariants}>
                    Qualifications
                </motion.h2>

                <div className="qualifications-grid">
                    {/* Education Column */}
                    <motion.div className="qual-column" variants={itemVariants}>
                        <div className="qual-icon">
                            <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                {/* Outer Hexagon */}
                                <path d="M50 5 L90 25 L90 75 L50 95 L10 75 L10 25 Z" />
                                {/* Inner structure lines */}
                                <path d="M10 25 L50 45 L90 25" />
                                <path d="M50 45 V95" />
                                {/* Sphere */}
                                <circle cx="50" cy="32" r="8" />
                                {/* Inner Cube/Box Platform */}
                                <path d="M35 60 L50 68 L65 60 L50 52 Z" />
                                <path d="M35 60 V68 L50 76 V68" />
                                <path d="M65 60 V68 L50 76" />
                                {/* Additional details to match image */}
                                <path d="M10 75 L50 55 L90 75" opacity="0.3" />
                            </svg>
                        </div>
                        <h3 className="qual-heading">Education</h3>
                        <div className="qual-details">
                            <p>Bachelor of Science in</p>
                            <p>Information Technology</p>
                            <p className="qual-year">2002 to 2007</p>
                            <p>University of Tripoli</p>
                        </div>
                    </motion.div>

                    {/* Skills Column */}
                    <motion.div className="qual-column" variants={itemVariants}>
                        <div className="qual-icon">
                            <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                {/* Outer Hexagon */}
                                <path d="M50 5 L90 25 L90 75 L50 95 L10 75 L10 25 Z" />
                                {/* Geometric Blooming Star / Multifaceted Pattern */}
                                <path d="M50 5 L40 35 L50 55 L60 35 Z" />
                                <path d="M90 25 L65 35 L50 55 L75 55 Z" />
                                <path d="M90 75 L75 55 L50 55 L65 75 Z" />
                                <path d="M50 95 L40 75 L50 55 L60 75 Z" />
                                <path d="M10 75 L25 75 L50 55 L35 55 Z" />
                                <path d="M10 25 L35 55 L50 55 L25 35 Z" />
                                {/* Connecting lines for the complex look */}
                                <path d="M40 35 L25 35 M60 35 L75 55 M65 75 L40 75 M25 75 L35 55" opacity="0.6" />
                                <path d="M50 5 L50 55 M90 25 L50 55 M90 75 L50 55 M50 95 L50 55 M10 75 L50 55 M10 25 L50 55" strokeWidth="1" />
                            </svg>
                        </div>
                        <h3 className="qual-heading">Skills</h3>
                        <ul className="skills-list">
                            <li>Full Stack Development</li>
                            <li>AI/ML Engineering</li>
                            <li>Database Design</li>
                            <li>Network Security & Infrastructure</li>
                            <li>Web Application Security</li>
                        </ul>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}

export default Qualifications;
