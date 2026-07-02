import React from 'react';
import aboutAvatar from '../assets/about_avatar.png';
import './About.css';

export default function About() {
  const infoCards = [
    {
      title: '🎓 Education',
      content: (
        <>
          <div className="card-highlight">B.Tech</div>
          <div className="card-subtitle-bold">Computer Science Engineering</div>
          <div className="card-detail">Started in 2024</div>
          <div className="card-detail">Currently 3rd Year</div>
        </>
      ),
      class: 'edu-card'
    },
    {
      title: '💻 Projects',
      content: (
        <>
          <div className="card-highlight">15+</div>
          <div className="card-subtitle-bold">Real-world Projects</div>
          <div className="card-tags-grid">
            <span className="card-tag">Machine Learning</span>
            <span className="card-tag">AI</span>
            <span className="card-tag">Full Stack</span>
          </div>
        </>
      ),
      class: 'proj-card'
    },
    {
      title: '🏆 Internship',
      content: (
        <>
          <div className="card-highlight">Completed in 2026</div>
          <p className="card-description-small">
            Worked on practical software development and AI-related technologies while gaining industry experience.
          </p>
        </>
      ),
      class: 'intern-card'
    },
    {
      title: '🤖 Focus Areas',
      content: (
        <ul className="card-list">
          <li>Data Science</li>
          <li>Machine Learning</li>
          <li>Artificial Intelligence</li>
          <li>Full Stack Development</li>
        </ul>
      ),
      class: 'focus-card'
    },
    {
      title: '🌱 Currently Learning',
      content: (
        <ul className="card-list">
          <li>Deep Learning</li>
          <li>Generative AI</li>
          <li>MLOps</li>
          <li>Large Language Models</li>
          <li>Agentic AI</li>
        </ul>
      ),
      class: 'learning-card'
    },
    {
      title: '🚀 Career Goal',
      content: (
        <>
          <div className="card-subtitle-bold">Become a</div>
          <ul className="card-list accent-list">
            <li>Data Scientist</li>
            <li>AI Researcher</li>
            <li>Full Stack Developer</li>
          </ul>
        </>
      ),
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
            <div className="env-tag t-an">Analytics</div>
            <div className="env-tag t-bd">Big Data</div>
            <div className="env-tag t-dl">Deep Learning</div>
            <div className="env-tag t-rs">Research</div>
            <div className="env-tag t-db">Database</div>
            <div className="env-tag t-nn">Neural Network</div>
            <div className="env-tag t-dh">Dashboard</div>
            <div className="env-tag t-cs">&lt;/&gt; Code</div>
            <div className="env-tag t-gr">Graphs</div>
            <div className="env-tag t-ch">Charts</div>
            
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
        {infoCards.map((card, i) => (
          <div key={i} className={`info-card glass-card ${card.class}`}>
            <h4 className="info-card-title">{card.title}</h4>
            <div className="info-card-body">{card.content}</div>
          </div>
        ))}
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
