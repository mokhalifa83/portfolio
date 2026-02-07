import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
    const [activeSection, setActiveSection] = useState('home');

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            // Use logical center for better alignment on mobile
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    useEffect(() => {
        const sections = ['home', 'about', 'qualifications', 'experience', 'contact'];

        // Intersection Observer is much better for scrollytelling
        const observerOptions = {
            root: document.querySelector('.main-scroll-container'),
            threshold: 0.5, // Section is active when 50% visible
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

    return (
        <nav className={`navbar section-${activeSection}`}>
            <div className="nav-links">
                <button
                    className={activeSection === 'home' ? 'active' : ''}
                    onClick={() => scrollToSection('home')}
                >
                    Home
                </button>
                <button
                    className={activeSection === 'about' ? 'active' : ''}
                    onClick={() => scrollToSection('about')}
                >
                    About
                </button>
                <button
                    className={activeSection === 'qualifications' ? 'active' : ''}
                    onClick={() => scrollToSection('qualifications')}
                >
                    Quals
                </button>
                <button
                    className={activeSection === 'experience' ? 'active' : ''}
                    onClick={() => scrollToSection('experience')}
                >
                    Work
                </button>
                <button
                    className={activeSection === 'contact' ? 'active' : ''}
                    onClick={() => scrollToSection('contact')}
                >
                    Contact
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
