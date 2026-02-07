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
                </motion.div>
            </div>
        </div>
    );
}

export default Contact;
