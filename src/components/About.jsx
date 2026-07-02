import React from 'react';
import { BookOpen, Briefcase, Award } from 'lucide-react';
import aboutAvatar from '../assets/about_avatar.png';
import './About.css';

export default function About() {
  const stats = [
    {
      icon: <BookOpen className="stat-icon" size={24} />,
      value: '5+',
      label: 'Years Education',
      desc: 'B.Tech in Computer Science'
    },
    {
      icon: <Briefcase className="stat-icon" size={24} />,
      value: '2+',
      label: 'Years Experience',
      desc: 'Developing React Apps'
    },
    {
      icon: <Award className="stat-icon" size={24} />,
      value: '30+',
      label: 'Projects Built',
      desc: 'Delivered successfully'
    }
  ];

  return (
    <section id="about" className="about-section section">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know my professional journey and design ethos</p>
      </div>

      <div className="about-container">
        {/* Left Side: Photo Frame */}
        <div className="about-graphic">
          <div className="about-image-wrapper">
            <img src={aboutAvatar} alt="About Moumi Dey" className="about-img" />
          </div>
        </div>

        {/* Right Side: Description & Stats */}
        <div className="about-content">
          <h3 className="about-heading">
            Designing digital platforms with <span className="highlight-text">passion and precision</span>
          </h3>
          <p className="about-text">
            I am a full stack developer who is deeply invested in creating experiences that feel fluid, responsive, and aesthetically premium. I love bridging the gap between clean code architectures and visual design.
          </p>
          <p className="about-text">
            My background combines robust programming principles with modern visual styling. Whether developing interactive dashboards or launching dynamic single-page web applications, I bring detail-oriented focus to every line of code.
          </p>

          <div className="stats-grid">
            {stats.map((stat, i) => (
              <div key={i} className="stat-card glass-card">
                <div className="stat-icon-wrapper">
                  {stat.icon}
                </div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-desc">{stat.desc}</div>
              </div>
            ))}
          </div>

          <a href="#contact" className="btn btn-secondary about-cta">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
