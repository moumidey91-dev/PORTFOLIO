import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import './Projects.css';

const Github = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Web Dev', 'UI/UX', 'Python/AI'];

  const projectsData = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Dev',
      tech: ['React', 'Node.js', 'Stripe'],
      desc: 'A full-featured shopping solution with checkout integration and dashboard control.',
      previewType: 'ecom',
      demo: '#',
      code: '#'
    },
    {
      title: 'Fitness Tracker App',
      category: 'Web Dev',
      tech: ['React', 'Firebase', 'Chart.js'],
      desc: 'Interactive health dashboard showing step metrics, sleep charts, and calories.',
      previewType: 'fitness',
      demo: '#',
      code: '#'
    },
    {
      title: 'AI Content Generator',
      category: 'Python/AI',
      tech: ['Python', 'React', 'OpenAI'],
      desc: 'Creative copywriter assistant utilizing natural language processing engines.',
      previewType: 'ai',
      demo: '#',
      code: '#'
    },
    {
      title: 'Crypto Dashboard',
      category: 'Web Dev',
      tech: ['React', 'Vite', 'WebSockets'],
      desc: 'Real-time cryptocurrency valuation boards with price charts and order books.',
      previewType: 'crypto',
      demo: '#',
      code: '#'
    },
    {
      title: 'Task Management',
      category: 'UI/UX',
      tech: ['React', 'Framer Motion'],
      desc: 'A highly interactive drag-and-drop Kanban board tool with task tracking tags.',
      previewType: 'tasks',
      demo: '#',
      code: '#'
    },
    {
      title: 'Real Estate Platform',
      category: 'Web Dev',
      tech: ['React', 'Laravel', 'Postgres'],
      desc: 'Geographic listing directory with advanced filters and scheduling features.',
      previewType: 'realestate',
      demo: '#',
      code: '#'
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  // Render a beautiful pure-CSS graphic mockup based on type
  const renderPreview = (type) => {
    switch (type) {
      case 'ecom':
        return (
          <div className="css-mockup mock-ecom">
            <div className="mock-card product-card">
              <div className="product-img-placeholder"></div>
              <div className="product-line short"></div>
              <div className="product-line long"></div>
              <div className="product-price-row">
                <span className="mock-price">$129.99</span>
                <span className="mock-buy-btn"></span>
              </div>
            </div>
          </div>
        );
      case 'fitness':
        return (
          <div className="css-mockup mock-fitness">
            <div className="mock-card fitness-card">
              <div className="circular-progress-ring">
                <div className="circle-inner">84%</div>
              </div>
              <div className="stat-bars">
                <div className="stat-bar" style={{width: '80%'}}></div>
                <div className="stat-bar" style={{width: '60%'}}></div>
              </div>
            </div>
          </div>
        );
      case 'ai':
        return (
          <div className="css-mockup mock-ai">
            <div className="mock-card prompt-card">
              <div className="prompt-input">
                <span className="prompt-cursor"></span>
              </div>
              <div className="prompt-response">
                <div className="response-line" style={{width: '90%'}}></div>
                <div className="response-line" style={{width: '75%'}}></div>
                <div className="response-line" style={{width: '85%'}}></div>
              </div>
            </div>
          </div>
        );
      case 'crypto':
        return (
          <div className="css-mockup mock-crypto">
            <div className="mock-card crypto-card">
              <div className="crypto-header">
                <span className="coin-dot"></span>
                <span className="coin-name">BTC</span>
              </div>
              <div className="crypto-chart">
                <svg viewBox="0 0 100 40" className="chart-svg">
                  <path d="M0,35 Q15,30 30,10 T60,25 T90,5 L100,5" fill="none" stroke="var(--primary)" strokeWidth="2" />
                </svg>
              </div>
              <div className="coin-value">+4.82%</div>
            </div>
          </div>
        );
      case 'tasks':
        return (
          <div className="css-mockup mock-tasks">
            <div className="mock-kanban">
              <div className="kanban-col">
                <div className="kanban-card"></div>
                <div className="kanban-card active-drag"></div>
              </div>
              <div className="kanban-col">
                <div className="kanban-card"></div>
              </div>
            </div>
          </div>
        );
      case 'realestate':
        return (
          <div className="css-mockup mock-realestate">
            <div className="mock-card estate-card">
              <div className="estate-img"></div>
              <div className="estate-info">
                <span className="estate-price">$450,000</span>
                <span className="estate-location"></span>
              </div>
            </div>
          </div>
        );
      default:
        return <div className="css-mockup"></div>;
    }
  };

  return (
    <section id="projects" className="projects-section section">
      <div className="section-header">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">A showcase of recent software projects and interfaces</p>
      </div>

      {/* Categories Filter Tabs */}
      <div className="filter-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`filter-tab ${filter === cat ? 'active' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project, i) => (
          <div key={i} className="project-card glass-card">
            {/* Browser Header Mockup */}
            <div className="project-window-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="window-tab">{project.title}</span>
            </div>

            {/* CSS Graphic Mockup Preview */}
            <div className="project-preview">
              {renderPreview(project.previewType)}
            </div>

            {/* Content Details */}
            <div className="project-info">
              <span className="project-category">{project.category}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              
              <div className="project-tech">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="tech-badge">{t}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.demo} className="project-link btn-secondary">
                  <ExternalLink size={16} />
                  Demo
                </a>
                <a href={project.code} className="project-link btn-secondary">
                  <Github size={16} />
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
