import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

function Contact() {
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
        <div className="contact-container">
            <motion.div
                className="contact-left"
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            >
                <img
                    src="/1770433161941-019c3608-9800-7d40-bef7-d1b8388459c2.png"
                    alt="Mohamed Khalifa Working"
                    className="contact-image"
                />
            </motion.div>
            <div className="contact-right">
                <motion.div
                    className="contact-text-content"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={containerVariants}
                >
                    <motion.h2 className="contact-title" variants={itemVariants}>
                        Get in touch
                    </motion.h2>
                    <motion.p className="contact-message" variants={itemVariants}>
                        If you want to work together, you can<br />
                        reach me at <a href="mailto:mokhalifa83@outlook.com">mokhalifa83@outlook.com</a>.
                    </motion.p>
                    <motion.div className="social-links" variants={itemVariants}>
                        <a href="https://www.linkedin.com/in/mokhalifa83/" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </a>
                        <a href="https://github.com/mokhalifa83" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                        </a>
                        <a href="https://www.facebook.com/moekhalifa8/" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

export default Contact;
