import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

function About() {
    return (
        <div className="about-container">
            <div className="about-content">
                <motion.div
                    className="about-left"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h2 className="hello-text">Hello there!</h2>
                </motion.div>
                <motion.div
                    className="about-right"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <p className="bio-text">
                        My name is Mohamed and I'm a Full Stack Developer and AI/ML Engineer
                        based in Gävle, Sweden. I specialize in building AI-powered web
                        applications using modern technologies like React, Python, and
                        LangChain. I have successfully delivered 100+ projects on Fiverr
                        and created popular open-source tools including phantom-mcp with
                        24 GitHub stars.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}

export default About;
