import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Briefcase, User } from 'lucide-react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="container hero-container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="hero-title">
              <span className="greeting">Hi, I'm</span> 
              <span className="name">Pogiri Abhinaya</span>
            </h1>

            <p className="hero-subtitle">
              A Computer Science student passionate about web development and artificial intelligence. 
              I specialize in creating innovative solutions and learning new technologies.
            </p>

            <div className="hero-buttons">
              <Link to="/contact" className="btn">Get in Touch</Link>
              <Link to="/projects" className="btn btn-secondary">
                View Projects <ChevronRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="about-preview section">
        <div className="container">
          <h2 className="section-title">About Me</h2>

          <div className="about-preview-content">
            {/* Left Side - Text */}
            <motion.div 
              className="about-text"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3>Who I Am</h3>
              <p>
                I'm a third-year B.Tech student in Computer Science and Engineering at GMR Institute 
                of Technology. With a strong foundation in programming and problem-solving, I'm passionate 
                about creating technology solutions that make a difference.
              </p>
              <p>
                Through my academic projects and internships, I've gained hands-on experience in web 
                development and artificial intelligence. I'm always eager to learn new technologies 
                and take on challenging projects.
              </p>
              <div className="about-buttons">
                <Link to="/about" className="btn"><User size={16} /> More About Me</Link>
                <Link to="/projects" className="btn btn-outline"><Briefcase size={16} /> See My Work</Link>
              </div>
            </motion.div>

            {/* Right Side - Bitmoji Image */}
            <motion.div 
              className="about-image"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://rinka-viswathirupathi.netlify.app/assets/images/laptopWave.png" 
                alt="Bitmoji" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="skills-section section">
        <div className="container">
          <h2 className="section-title">My Skills</h2>

          <motion.div 
            className="skills-container"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="skill-category">
              <h3>Languages</h3>
              <div className="skills-list">
                <div className="skill-item">Python</div>
                <div className="skill-item">Java</div>
                <div className="skill-item">C</div>
                <div className="skill-item">SQL</div>
              </div>
            </div>

            <div className="skill-category">
              <h3>Web Development</h3>
              <div className="skills-list">
                <div className="skill-item">React</div>
                <div className="skill-item">Angular</div>
                <div className="skill-item">Django</div>
                <div className="skill-item">HTML/CSS</div>
              </div>
            </div>

            <div className="skill-category">
              <h3>Tools & Others</h3>
              <div className="skills-list">
                <div className="skill-item">Git</div>
                <div className="skill-item">VS Code</div>
                <div className="skill-item">PyCharm</div>
                <div className="skill-item">ServiceNow</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <motion.div 
            className="cta-container"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2>Let's Work Together</h2>
            <p>
              I'm always open to discussing new projects, internship opportunities, or ways to contribute to your team.
            </p>
            <Link to="/contact" className="btn">Get In Touch</Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
