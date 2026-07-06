import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import projectBanking from '../assets/project_banking.png';
import projectHotel from '../assets/project_hotel.jpg';
import projectEcomAdmin from '../assets/project_ecom_admin.png';
import projectEcomUser from '../assets/project_ecom_user.png';
import './Projects.css';

const Github = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  const categories = ['All', 'Web Dev', 'UI/UX', 'Python/AI'];

  const projectsData = [
    {
      title: 'FitFlow Fitness Dashboard',
      category: 'Web Dev',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      desc: 'Premium activity tracker panel showcasing steps metrics, sleep tracking sessions, and calorie alerts.',
      previewType: 'bank',
      demo: '#',
      code: '#'
    },
    {
      title: 'AI Chatbot - LangChain',
      category: 'Python/AI',
      tech: ['Python', 'LangChain', 'LLM', 'Embeddings'],
      desc: 'Document analysis assistant powered by LLMs with semantic search capabilities using embeddings.',
      previewType: 'hotel',
      demo: '#',
      code: '#'
    },
    {
      title: 'Ecommerce Admin Panel',
      category: 'Web Dev',
      tech: ['React', 'Tailwind CSS', 'Recharts'],
      desc: 'MarketHub admin dashboard detailing revenue, order analytics, active customers, and real-time stock alerts.',
      previewType: 'ecom-admin',
      demo: '#',
      code: '#'
    },
    {
      title: 'Ecommerce MarketHub User',
      category: 'UI/UX',
      tech: ['React', 'Vite', 'Framer Motion'],
      desc: 'Secure user portal and onboarding login screen for the MarketHub storefront.',
      previewType: 'ecom-user',
      demo: '#',
      code: '#'
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  // Render the project screenshot image based on type
  const renderPreview = (type) => {
    switch (type) {
      case 'bank':
        return <img src={projectBanking} alt="Banking Management System" className="project-preview-img" />;
      case 'hotel':
        return <img src={projectHotel} alt="Hotel Booking Cancellation Analysis" className="project-preview-img" />;
      case 'ecom-admin':
        return <img src={projectEcomAdmin} alt="Ecommerce Admin Panel" className="project-preview-img" />;
      case 'ecom-user':
        return <img src={projectEcomUser} alt="Ecommerce MarketHub User Storefront" className="project-preview-img" />;
      default:
        return null;
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
        {filteredProjects.map((project, i) => {
          const isActive = activeProject === i;
          return (
            <div 
              key={i} 
              className={`project-card glass-card ${isActive ? 'active' : ''}`}
              onClick={() => setActiveProject(isActive ? null : i)}
            >
              {/* Image Preview Container */}
              <div className="project-preview">
                {renderPreview(project.previewType)}
                
                {/* Details Frosted Glass Overlay */}
                <div className={`project-overlay ${isActive ? 'visible' : ''}`}>
                  <span className="project-overlay-category">{project.category}</span>
                  <h3 className="project-overlay-title">{project.title}</h3>
                  <p className="project-overlay-desc">{project.desc}</p>
                  
                  <div className="project-overlay-tech">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="tech-pill">{t}</span>
                    ))}
                  </div>

                  <div className="project-overlay-links" onClick={(e) => e.stopPropagation()}>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="overlay-link btn-demo">
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                    <a href={project.code} target="_blank" rel="noopener noreferrer" className="overlay-link btn-code">
                      <Github size={14} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
