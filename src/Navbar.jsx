import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
    const [activeSection, setActiveSection] = useState('home');

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const sections = ['home', 'about', 'qualifications', 'experience', 'contact'];
        const container = document.querySelector('.main-scroll-container');

        if (!container) return;

        const handleScroll = () => {
            const scrollPos = container.scrollTop;
            const height = window.innerHeight;

            const index = Math.round(scrollPos / height);
            if (sections[index]) {
                setActiveSection(sections[index]);
            }
        };

        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
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
                    About Me
                </button>
                <button
                    className={activeSection === 'qualifications' ? 'active' : ''}
                    onClick={() => scrollToSection('qualifications')}
                >
                    Qualifications
                </button>
                <button
                    className={activeSection === 'experience' ? 'active' : ''}
                    onClick={() => scrollToSection('experience')}
                >
                    Experience
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
