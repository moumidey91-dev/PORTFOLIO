import React from 'react';
import { 
  GraduationCap, 
  Laptop, 
  Trophy, 
  Target, 
  Brain, 
  Rocket, 
  Calendar, 
  User, 
  Code
} from 'lucide-react';
import aboutAvatar from '../assets/about_avatar.jpg';
import './About.css';

export default function About() {
  const infoCards = [
    {
      title: 'Education',
      icon: GraduationCap,
      watermark: GraduationCap,
      highlight: 'B.Tech',
      subtitle: 'Computer Science Engineering',
      type: 'education',
      details: [
        { icon: Calendar, text: 'Started in 2024' },
        { icon: User, text: 'Currently 3rd Year' }
      ],
      class: 'edu-card'
    },
    {
      title: 'Projects',
      icon: Laptop,
      watermark: Code,
      highlight: '15+',
      subtitle: 'Real-world Projects',
      type: 'projects',
      tags: ['Machine Learning', 'AI', 'Full Stack'],
      class: 'proj-card'
    },
    {
      title: 'Internship',
      icon: Trophy,
      watermark: Trophy,
      highlight: 'Completed in 2026',
      type: 'internship',
      description: 'Worked on practical software development and AI-related technologies while gaining industry experience.',
      class: 'intern-card'
    },
    {
      title: 'Focus Areas',
      icon: Target,
      watermark: Target,
      type: 'list',
      list: ['Data Science', 'Machine Learning', 'Artificial Intelligence', 'Full Stack Development'],
      class: 'focus-card'
    },
    {
      title: 'Currently Learning',
      icon: Brain,
      watermark: Brain,
      type: 'list',
      list: ['Deep Learning', 'Generative AI', 'MLOps', 'Large Language Models', 'Agentic AI'],
      class: 'learning-card'
    },
    {
      title: 'Career Goal',
      icon: Rocket,
      watermark: Rocket,
      highlight: 'Become a',
      type: 'list',
      list: ['Data Scientist', 'AI Researcher', 'Full Stack Developer'],
      class: 'career-card'
    }
  ];

  const techStack = [
    'Python', 'Java', 'C', 'React', 'Next.js', 'Node.js', 'Flask', 
    'MongoDB', 'MySQL', 'Git', 'GitHub', 'VS Code', 'Tailwind CSS', 
    'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'Matplotlib', 'Power BI'
  ];

  const timelineEvents = [
    {
      year: '2024',
      title: 'Started B.Tech in CSE',
      desc: 'Built a strong foundation in programming with C, Python, Java, Data Structures, HTML, CSS, and JavaScript while developing logical thinking and problem-solving skills.'
    },
    {
      year: '2025',
      title: 'Full Stack & Machine Learning',
      desc: 'Built responsive web applications using React, Flask, MongoDB, and explored Data Science with Pandas, NumPy, Scikit-learn, and predictive machine learning models.'
    },
    {
      year: '2026',
      title: 'Internship & Real-world Projects',
      desc: 'Gained practical industry experience by working on software development, AI, Data Science, and Full Stack technologies while improving teamwork, development workflow, and professional skills.'
    },
    {
      year: 'Future',
      title: 'Aspiring AI Professional',
      desc: 'Become a Data Scientist, AI Researcher, and Full Stack Developer. Build intelligent AI-powered products, contribute to impactful research, and develop innovative technologies.'
    }
  ];

  return (
    <section id="about" className="about-section section">
      {/* Section Background Effects */}
      <div className="about-glow-1"></div>
      <div className="about-glow-2"></div>

      <div className="section-header">
        <h2 className="section-title">About Me</h2>
      </div>

      <div className="about-container">
        {/* Left Side: Avatar inside futuristic glass frame with floating tags */}
        <div className="about-graphic">
          <div className="about-avatar-card glass-card">
            {/* Orange Glowing Circle background */}
            <div className="orange-glowing-circle"></div>
            
            <img src={aboutAvatar} alt="Moumi Dey" className="about-avatar animate-float" />
            
            {/* Floating Environment Tags */}
            <div className="env-tag t-ai">AI</div>
            <div className="env-tag t-ml">Machine Learning</div>
            <div className="env-tag t-ds">Data Science</div>
            <div className="env-tag t-py">Python</div>
            <div className="env-tag t-re">React</div>
            
            {/* Floating Particles */}
            <div className="env-particle p-1"></div>
            <div className="env-particle p-2"></div>
            <div className="env-particle p-3"></div>
            <div className="env-particle p-4"></div>
          </div>
        </div>

        {/* Right Side: Primary texts */}
        <div className="about-content">
          <h3 className="about-main-heading">
            Turning Data into <span className="highlight-text">Intelligent Solutions</span>
          </h3>
          <div className="about-text-paragraphs">
            <p className="about-para para-highlight">Hi, I'm Moumi Dey.</p>
            <p className="about-para">
              I’m a passionate B.Tech student with a strong interest in Data Science, Machine Learning, and Artificial Intelligence. I enjoy solving real-world problems using data and continuously improving my analytical skills.
            </p>
            <p className="about-para">
              Currently, I’m expanding my knowledge in Python, SQL, Machine Learning, and Data Analysis while building practical projects to strengthen my technical expertise.
            </p>
            <p className="about-para">
              My goal is to become a skilled Data Scientist and create intelligent, data-driven solutions that make a meaningful impact.
            </p>
          </div>
        </div>
      </div>

      {/* Premium Info Cards Grid */}
      <div className="about-cards-grid">
        {infoCards.map((card, i) => {
          const Icon = card.icon;
          const Watermark = card.watermark;
          return (
            <div key={i} className={`info-card glass-card ${card.class}`}>
              {/* Card Watermark Icon */}
              {Watermark && <Watermark className="card-watermark" />}

              {/* Card Header with Circle Icon & Title */}
              <div className="card-title-container">
                <div className="card-title-icon-wrapper">
                  <Icon size={18} />
                </div>
                <h4 className="card-title-text">{card.title}</h4>
              </div>

              {/* Card Body */}
              <div className="info-card-body">
                {card.highlight && (
                  <div className="card-highlight">{card.highlight}</div>
                )}
                
                {card.subtitle && (
                  <div className="card-subtitle-bold">{card.subtitle}</div>
                )}

                {/* Render based on card type */}
                {card.type === 'education' && card.details && (
                  <div className="card-details-container">
                    {card.details.map((detail, idx) => {
                      const DetailIcon = detail.icon;
                      return (
                        <div key={idx} className="card-detail-badge">
                          <DetailIcon size={14} className="badge-icon" />
                          <span>{detail.text}</span>
                        </div>
                      );
                    })}
                  </div>
                )}

                {card.type === 'projects' && card.tags && (
                  <div className="card-tags-grid">
                    {card.tags.map((tag, idx) => (
                      <span key={idx} className="card-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {card.type === 'internship' && card.description && (
                  <p className="card-description-small">
                    {card.description}
                  </p>
                )}

                {card.type === 'list' && card.list && (
                  <ul className="card-list">
                    {card.list.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Tech Stack Grid */}
      <div className="about-tech-stack-section">
        <h3 className="tech-stack-title">Technical Expertise</h3>
        <div className="tech-badges-grid">
          {techStack.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* My Journey (Horizontal/Vertical Timeline) */}
      <div className="about-journey-section">
        <h3 className="journey-title">My Professional Journey</h3>
        
        <div className="timeline-container">
          <div className="timeline-track"></div>
          <div className="timeline-events">
            {timelineEvents.map((evt, i) => (
              <div key={i} className="timeline-event">
                <div className="timeline-node-wrapper">
                  <div className="timeline-node">
                    <span className="node-year">{evt.year}</span>
                  </div>
                </div>
                <div className="timeline-event-card glass-card">
                  <h4 className="event-heading">{evt.title}</h4>
                  <p className="event-description">{evt.desc}</p>
                </div>
                {i < timelineEvents.length - 1 && (
                  <div className="timeline-connector-arrow">&rarr;</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="journey-cta">
          <a href="#contact" className="btn-journey-outlined">
            Explore My Journey <span className="arrow">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
