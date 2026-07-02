import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';

export default function Skills() {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  const skillsData = [
    { name: 'React', level: 95, color: '#00d8ff', bg: 'rgba(0, 216, 255, 0.1)' },
    { name: 'Tailwind CSS', level: 90, color: '#38b2ac', bg: 'rgba(56, 178, 172, 0.1)' },
    { name: 'Python', level: 85, color: '#3776ab', bg: 'rgba(55, 118, 171, 0.1)' },
    { name: 'Laravel', level: 75, color: '#ff2d20', bg: 'rgba(255, 45, 32, 0.1)' },
    { name: 'Framer Motion', level: 80, color: '#f81ce5', bg: 'rgba(248, 28, 229, 0.1)' },
    { name: 'Vue', level: 70, color: '#41b883', bg: 'rgba(65, 184, 131, 0.1)' },
    { name: 'Firebase', level: 80, color: '#ffca28', bg: 'rgba(255, 202, 40, 0.1)' },
    { name: 'Vite', level: 90, color: '#646cff', bg: 'rgba(100, 108, 255, 0.1)' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="skills-section section">
      <div className="section-header">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">Technologies and frameworks I specialize in</p>
      </div>

      <div className="skills-grid">
        {skillsData.map((skill, i) => (
          <div key={i} className="skill-card glass-card">
            <div className="skill-info">
              <div className="skill-badge-wrapper">
                <span 
                  className="skill-color-indicator" 
                  style={{ backgroundColor: skill.color, boxShadow: `0 0 10px ${skill.color}` }}
                ></span>
                <span className="skill-name">{skill.name}</span>
              </div>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
            
            <div className="skill-bar-container">
              <div 
                className="skill-bar-fill"
                style={{ 
                  width: animate ? `${skill.level}%` : '0%',
                  background: `linear-gradient(90deg, var(--primary) 0%, ${skill.color} 100%)`,
                  boxShadow: `0 0 8px ${skill.color}80`
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
