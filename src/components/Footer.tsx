import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Pogiri Abhinaya</h3>
            <p>Computer Science Student</p>
          </div>
          
          {/* <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/resume">Resume</a></li>
            </ul>
          </div> */}
          
          <div className="footer-social">
            <h4>Connect</h4>
            <div className="social-icons">
              <a href="https://github.com/abhinayapogiri" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/pogiri-abhinaya-6a769a289/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
              <a href="mailto:abhi2611004@gmail.com">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Pogiri Abhinaya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;