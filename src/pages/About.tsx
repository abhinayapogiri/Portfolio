import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <section className="about-header section">
        <div className="container">
          <motion.h1 
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h1>
          
          <div className="about-header-content">
            <motion.div 
              className="about-intro"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2>Computer Science Student</h2>
              <p>
                Hello! I'm Abhinaya, a third-year B.Tech student in Computer Science and Engineering with a passion 
                for solving complex problems through technology. My journey in tech began with a curiosity about how 
                software works, which has led me to explore various aspects of computer science.
              </p>
              <p>
                I thrive in collaborative environments where I can contribute my technical skills while continuously 
                learning from others. My approach to development focuses on creating solutions that are not only 
                technically sound but also intuitive and accessible to users.
              </p>
              <div className="personal-info">
                <div className="info-item">
                  <span className="info-label">Name:</span>
                  <span className="info-value">Pogiri Abhinaya</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Email:</span>
                  <span className="info-value">abhi2611004@gmail.com</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Education:</span>
                  <span className="info-value">B.Tech CSE</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Location:</span>
                  <span className="info-value">Rajam, Andhra Pradesh</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="experience-section section">
        <div className="container">
          <h2 className="section-title">Education & Experience</h2>
          
          <div className="timeline">
            <motion.div 
              className="timeline-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">2024</div>
                <h3>Web Development Intern</h3>
                <h4>Top Notch, Visakhapatnam</h4>
                <p>
                  Developed a Library Management System using Python and Django, implementing 
                  both frontend and backend functionalities.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="timeline-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">2024</div>
                <h3>AI Intern</h3>
                <h4>EDUSTATION</h4>
                <p>
                  Worked on machine learning projects, implementing various algorithms and 
                  gaining practical experience in AI workflows.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="timeline-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content education">
                <div className="timeline-date">2022 - Present</div>
                <h3>B.Tech in Computer Science</h3>
                <h4>GMR Institute of Technology</h4>
                <p>
                  Currently pursuing B.Tech with a CGPA of 9.05 (until 5th semester).
                  Active participation in technical events and projects.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
