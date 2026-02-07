import React from 'react';
import { motion } from 'framer-motion';
import './App.css';

function Home() {
    return (
        <div className="portfolio-container">
            <motion.div
                className="left-panel"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
                <img
                    src="/personal-image.png"
                    alt="Mohamed Khalifa"
                />
            </motion.div>
            <div className="right-panel">
                <motion.div
                    className="text-content"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15,
                                delayChildren: 0.3
                            }
                        }
                    }}
                >
                    <motion.h1
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        Mohamed<br />
                        Khalifa
                    </motion.h1>
                    <motion.p
                        className="subtitle"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        Full Stack Developer & AI/ML Engineer
                    </motion.p>
                    <motion.div
                        className="button-group"
                        variants={{
                            hidden: { opacity: 0, scale: 0.9 },
                            visible: { opacity: 1, scale: 1 }
                        }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <a href="mailto:mokhalifa83@outlook.com" className="email-button">
                            <span className="icon-container" aria-hidden="true">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                            </span>
                            Email me
                        </a>
                        <a
                            href="/Mohamed_Khalifa_CV.pdf"
                            download="Mohamed_Khalifa_CV.pdf"
                            className="email-button"
                        >
                            <span className="icon-container" aria-hidden="true">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4"></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                </svg>
                            </span>
                            Download CV
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

export default Home;
