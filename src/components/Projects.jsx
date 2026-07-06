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

  const categories = ['All', 'Web Dev', 'UI/UX', 'Python/AI'];

  const projectsData = [
    {
      title: 'Banking System Management Admin Portal',
      category: 'Web Dev',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      desc: 'A secure and comprehensive banking administration system to manage customer accounts, transactions, and logs.',
      previewType: 'bank',
      demo: '#',
      code: '#'
    },
    {
      title: 'Hotel Management Data Analysis Project',
      category: 'Python/AI',
      tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
      desc: 'Advanced hotel booking cancellations and guest analytics dashboard designed to optimize booking rates and revenue streams.',
      previewType: 'hotel',
      demo: '#',
      code: '#'
    },
    {
      title: 'E-Commerce Admin Panel',
      category: 'Web Dev',
      tech: ['React', 'Tailwind CSS', 'Recharts'],
      desc: 'Interactive business management panel featuring real-time sales metrics, product inventory details, and client activity logs.',
      previewType: 'ecom-admin',
      demo: '#',
      code: '#'
    },
    {
      title: 'E-Commerce MarketHub',
      category: 'UI/UX',
      tech: ['React', 'Vite', 'Framer Motion'],
      desc: 'Modern customer storefront experience for MarketHub featuring curated product pages, smooth transitions, and cart functionality.',
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
          return (
            <div key={i} className="project-card">
              {/* Left Column: Project Details */}
              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                
                {/* Tech Stack List - Middle dot separated */}
                <div className="project-tech">
                  {project.tech.join(' · ')}
                </div>
                
                <p className="project-desc">{project.desc}</p>
                
                <div className="project-links">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-btn primary">
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                  <a href={project.code} target="_blank" rel="noopener noreferrer" className="project-btn secondary">
                    <Github size={14} />
                    Code
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Mockup */}
              <div className="project-preview">
                <div className="mockup-frame">
                  {renderPreview(project.previewType)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
