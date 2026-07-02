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
            
            {/* Visual tech badges floating */}
            
            {/* 1. AI Card */}
            <div className="floating-card card-ai">
              <div className="ai-title">AI</div>
              <div className="ai-subtitle">
                ARTIFICIAL<br />INTELLIGENCE
              </div>
            </div>

            {/* 2. Data Science Card */}
            <div className="floating-card card-data-science">
              <div className="card-header-mini">Data Science</div>
              <svg viewBox="0 0 100 50" className="chart-svg">
                <defs>
                  <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ff7a00" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#ff7a00" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <line x1="0" y1="10" x2="100" y2="10" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" strokeDasharray="2" />
                <line x1="0" y1="25" x2="100" y2="25" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" strokeDasharray="2" />
                <line x1="0" y1="40" x2="100" y2="40" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" strokeDasharray="2" />
                <path d="M 0 45 Q 15 35 30 38 T 60 20 T 85 10 T 100 5 L 100 50 L 0 50 Z" fill="url(#chart-grad)" />
                <path d="M 0 45 Q 15 35 30 38 T 60 20 T 85 10 T 100 5" fill="none" stroke="#ff7a00" strokeWidth="2" strokeLinecap="round" />
                <circle cx="30" cy="38" r="1.5" fill="#fff" stroke="#ff7a00" strokeWidth="1" />
                <circle cx="60" cy="20" r="1.5" fill="#fff" stroke="#ff7a00" strokeWidth="1" />
                <circle cx="85" cy="10" r="1.5" fill="#fff" stroke="#ff7a00" strokeWidth="1" />
              </svg>
            </div>

            {/* 3. Python Developer Card */}
            <div className="floating-card card-python-dev">
              <svg viewBox="0 0 110 110" width="22" height="22">
                <path d="M54.1 2c-27 0-25.3 11.7-25.3 11.7h11.9s-.4 6.8 5.7 6.8h17.9s5.6-.2 5.6-5.8v-7.2S69.9 2 54.1 2zm-8.8 4.2c1.9 0 3.4 1.5 3.4 3.4s-1.5 3.4-3.4 3.4-3.4-1.5-3.4-3.4 1.5-3.4 3.4-3.4z" fill="#3776AB" />
                <path d="M55.9 108c27 0 25.3-11.7 25.3-11.7H69.3s.4-6.8-5.7-6.8H45.7s-5.6.2-5.6 5.8v7.2s.1 5.5 15.8 5.5zm8.8-4.2c-1.9 0-3.4-1.5-3.4-3.4s1.5-3.4 3.4-3.4 3.4 1.5 3.4 3.4-1.5 3.4-3.4 3.4z" fill="#FFD343" />
                <path d="M38.8 30.6c-5.7 0-10.2 4.6-10.2 10.3v7.2h10.2v-3.4c0-3.8 3.1-6.9 6.8-6.9h17v-7.2H38.8z" fill="#3776AB" />
                <path d="M71.2 79.4c5.7 0 10.2-4.6 10.2-10.3v-7.2H71.2v3.4c0 3.8-3.1 6.9-6.8 6.9h-17v7.2h13.8z" fill="#FFD343" />
              </svg>
              <span className="card-text-inline">Python Developer</span>
            </div>

            {/* 4. Machine Learning Card */}
            <div className="floating-card card-ml">
              <div className="card-header-mini">Machine Learning</div>
              <svg viewBox="0 0 100 50" className="chart-svg">
                <line x1="10" y1="5" x2="10" y2="45" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                <line x1="10" y1="45" x2="95" y2="45" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                <path d="M 10 40 Q 40 38 60 25 T 90 8" fill="none" stroke="#ff7a00" strokeWidth="1.5" strokeDasharray="2" />
                <circle cx="20" cy="38" r="1.5" fill="#ff7a00" />
                <circle cx="35" cy="30" r="1.5" fill="#ff7a00" />
                <circle cx="50" cy="28" r="1.5" fill="#ff7a00" />
                <circle cx="68" cy="18" r="1.5" fill="#ff7a00" />
                <circle cx="82" cy="12" r="1.5" fill="#ff7a00" />
                <circle cx="15" cy="42" r="1.5" fill="#6366f1" />
                <circle cx="28" cy="35" r="1.5" fill="#6366f1" />
                <circle cx="45" cy="34" r="1.5" fill="#6366f1" />
                <circle cx="58" cy="22" r="1.5" fill="#6366f1" />
                <circle cx="75" cy="15" r="1.5" fill="#6366f1" />
              </svg>
            </div>

            {/* 5. Researcher Card */}
            <div className="floating-card card-researcher">
              <div className="research-content-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff7a00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="research-icon">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <line x1="10" y1="9" x2="8" y2="9" />
                </svg>
                <div className="research-text-lines">
                  <div className="research-label-mini">Researcher</div>
                  <div className="research-line"></div>
                  <div className="research-line medium"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
