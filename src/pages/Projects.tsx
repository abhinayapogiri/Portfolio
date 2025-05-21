import React from 'react';
import { motion } from 'framer-motion';
import { Github, Tag } from 'lucide-react';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  github: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const projectsData: Project[] = [
    {
      id: 1,
      title: "Library Management System",
      description: "A web-based system built with Django to streamline book circulation in academic settings. Features include user registration, authentication, book search, issue/return tracking, and admin interface for inventory management.",
      tags: ["Django", "Python", "HTML", "CSS", "Bootstrap"],
      github: "https://github.com/abhinayapogiri/Library-Management-System.git",
      featured: true
    },
    {
      id: 2,
      title: "Smart News Aggregator",
      description: "A full-stack platform delivering personalized news using MERN stack. Features include user authentication, category-based filtering, article search, country-specific feeds, and dynamic topic customization.",
      tags: ["MongoDB", "Express.js", "React", "Node.js", "NewsAPI"],
      github: "https://github.com/abhinayapogiri",
      featured: true
    }
  ];

  return (
    <div className="projects-page">
      <section className="projects-header section">
        <div className="container">
          <motion.h1 
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Projects
          </motion.h1>
          
          <motion.p 
            className="projects-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Here are some of the key projects I've worked on during my academic journey.
          </motion.p>
        </div>
      </section>

      <section className="projects-grid-section">
        <div className="container">
          <div className="projects-grid">
            {projectsData.map((project, index) => (
              <motion.div 
                className={`project-card ${project.featured ? 'featured' : ''}`}
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="project-content">
                  {project.featured && (
                    <span className="featured-badge">Featured Project</span>
                  )}
                  
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tags">
                    <Tag size={16} />
                    <div className="tags-list">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="project-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div style={{ marginTop: '20px' }}>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn">
                      <Github size={16} /> View on GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="other-projects section">
        <div className="container">
          <h2 className="section-title">More Projects</h2>
          
          <p className="other-projects-text">
            Check out my GitHub profile for more projects and contributions.
          </p>
          
          <a href="https://github.com/abhinayapogiri" target="_blank" rel="noopener noreferrer" className="btn">
            <Github size={16} /> View GitHub Profile
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
