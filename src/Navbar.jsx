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

        const observerOptions = {
            root: document.querySelector('.main-scroll-container'),
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

    // Use full names for desktop, shortened for mobile to keep them in one row
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
                <button className={activeSection === 'home' ? 'active' : ''} onClick={() => scrollToSection('home')}>
                    {getLabel('home')}
                </button>
                <button className={activeSection === 'about' ? 'active' : ''} onClick={() => scrollToSection('about')}>
                    {getLabel('about')}
                </button>
                <button className={activeSection === 'qualifications' ? 'active' : ''} onClick={() => scrollToSection('qualifications')}>
                    {getLabel('qualifications')}
                </button>
                <button className={activeSection === 'experience' ? 'active' : ''} onClick={() => scrollToSection('experience')}>
                    {getLabel('experience')}
                </button>
                <button className={activeSection === 'contact' ? 'active' : ''} onClick={() => scrollToSection('contact')}>
                    {getLabel('contact')}
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
