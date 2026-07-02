import React from 'react';
import { Download, Mail } from 'lucide-react';
import heroAvatar from '../assets/hero_avatar.jpg';
import './Hero.css';

// Custom SVG Icon Components to prevent dependency export issues
const Github = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const Linkedin = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Kaggle = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.82 20.3a.46.46 0 0 1-.36.19h-3.48a.46.46 0 0 1-.37-.18l-5.32-6.83-2.45 2.3v4.53a.47.47 0 0 1-.46.48H3.3a.48.48 0 0 1-.48-.48V3.7A.48.48 0 0 1 3.3 3.2h3.08a.47.47 0 0 1 .47.48v8.42l7.5-7.79a.48.48 0 0 1 .35-.17h3.53a.47.47 0 0 1 .33.8L11.55 12l7.27 7.5a.47.47 0 0 1 0 .8z" />
  </svg>
);

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      {/* Background blobs for premium glassmorphism glow */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      
      <div className="hero-container">
        {/* Hero Content */}
        <div className="hero-content">
          <div className="social-icons">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link github" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link linkedin" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="https://kaggle.com" target="_blank" rel="noopener noreferrer" className="social-link kaggle" aria-label="Kaggle">
              <Kaggle size={18} />
            </a>
            <a href="mailto:moumi.dey@example.com" className="social-link mail" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>

          <h1 className="hero-title">
            Hi, I'm <br />
            <span className="highlight-text">Moumi Dey</span>
          </h1>

          <div className="hero-roles">
            <span className="role-text">Data Scientist</span>
            <span className="role-separator">|</span>
            <span className="role-text">Full Stack Developer</span>
            <span className="role-separator">|</span>
            <span className="role-text">AI & ML Researcher</span>
          </div>

          <p className="hero-subtitle">
            I create modern web applications, build machine learning solutions, and conduct research to transform ideas into impactful, data-driven technologies.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn btn-filled">
              <Download size={18} />
              Download CV
            </a>
            <a href="#contact" className="btn btn-outlined">
              <Mail size={18} />
              Contact Me
            </a>
          </div>
        </div>

        {/* Hero Graphic */}
        <div className="hero-graphic-container">
          <div className="hero-avatar-wrapper animate-float">
            <img src={heroAvatar} alt="Moumi Dey Avatar" className="hero-avatar" />
          </div>
        </div>
      </div>
    </section>
  );
}
