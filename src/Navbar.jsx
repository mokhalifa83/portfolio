import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
    const [activeSection, setActiveSection] = useState('home');
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    useEffect(() => {
        const sections = ['home', 'about', 'qualifications', 'experience', 'contact'];
        const container = document.querySelector('.main-scroll-container');

        const observerOptions = {
            root: container,
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    // Labels for desktop vs mobile
    const getLabel = (id) => {
        if (isMobile) {
            switch (id) {
                case 'home': return 'Home';
                case 'about': return 'About';
                case 'qualifications': return 'Quals';
                case 'experience': return 'Work';
                case 'contact': return 'Contact';
                default: return id;
            }
        } else {
            switch (id) {
                case 'home': return 'Home';
                case 'about': return 'About Me';
                case 'qualifications': return 'Qualifications';
                case 'experience': return 'Experience';
                case 'contact': return 'Contact';
                default: return id;
            }
        }
    };

    return (
        <nav className={`navbar section-${activeSection}`}>
            <div className="nav-links">
                {['home', 'about', 'qualifications', 'experience', 'contact'].map((id) => (
                    <button
                        key={id}
                        className={activeSection === id ? 'active' : ''}
                        onClick={() => scrollToSection(id)}
                    >
                        {getLabel(id)}
                    </button>
                ))}
            </div>
        </nav>
    );
}

export default Navbar;
