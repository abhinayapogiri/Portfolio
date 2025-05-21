import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, Star, Calendar, Award, Book, Briefcase } from 'lucide-react';
import './Resume.css';

const Resume: React.FC = () => {
  return (
    <div className="resume-page">
      <section className="resume-header section">
        <div className="container">
          <motion.h1 
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Resume
          </motion.h1>
          
          <motion.div 
            className="resume-actions"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
           <a
  href="/Portfolio/resume.pdf"  // important: use `/Portfolio/resume.pdf` if you're using basename="Portfolio"
  download
  className="btn btn-primary"
>
  Download Resume
</a>

          </motion.div>
        </div>
      </section>

      <section className="resume-content">
        <div className="container">
          <div className="resume-paper">
            <div className="resume-top">
              <div className="resume-name">
                <h2>POGIRI ABHINAYA</h2>
                <p>Computer Science Student</p>
              </div>
              
              <div className="resume-contact">
                <p>abhi2611004@gmail.com</p>
                <p>+91 7396284300</p>
                <p><a href="https://linkedin.com/pogiriabhinaya" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                <p><a href="https://github.com/abhinayapogiri" target="_blank" rel="noopener noreferrer">GitHub</a></p>
              </div>
            </div>
            
            <div className="resume-intro">
              <h3>Career Objective</h3>
              <p>
                I am a third-year B.Tech student in Computer Science and Engineering with a solid foundation in programming and a strong interest 
                in solving complex problems. Through academic projects and internships, I have developed hands-on experience in web development. 
                I am eager to apply my skills and contribute meaningfully to a software engineering role in a dynamic and growth-oriented environment.
              </p>
            </div>
            
            <div className="resume-section">
              <div className="section-header">
                <Book size={20} />
                <h3>Education</h3>
              </div>
              
              <div className="resume-entry">
                <div className="entry-header">
                  <h4>GMR Institute of Technology</h4>
                  <span className="entry-date">
                    <Calendar size={14} /> November 2022 - Present
                  </span>
                </div>
                <h5>Computer Science and Engineering</h5>
                <p>CGPA (Until Semester 5): 9.05</p>
                <p>Rajam, Andhra Pradesh</p>
              </div>
              
              <div className="resume-entry">
                <div className="entry-header">
                  <h4>Sri Aditya Junior College</h4>
                  <span className="entry-date">
                    <Calendar size={14} /> June 2020 - April 2022
                  </span>
                </div>
                <h5>Intermediate, MPC</h5>
                <p>CGPA: 9.14</p>
                <p>Rajam, Andhra Pradesh</p>
              </div>
              
              <div className="resume-entry">
                <div className="entry-header">
                  <h4>Sri Chaitanya School</h4>
                  <span className="entry-date">
                    <Calendar size={14} /> June 2019 - April 2020
                  </span>
                </div>
                <h5>Secondary School Certificate</h5>
                <p>CGPA: 10</p>
                <p>Rajam, Andhra Pradesh</p>
              </div>
            </div>
            
            <div className="resume-section">
              <div className="section-header">
                <Star size={20} />
                <h3>Skills</h3>
              </div>
              
              <div className="skills-row">
                <div className="skill-category">
                  <h4>Languages</h4>
                  <ul className="skill-list">
                    <li>C</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>SQL</li>
                  </ul>
                </div>
                
                <div className="skill-category">
                  <h4>Frameworks</h4>
                  <ul className="skill-list">
                    <li>React</li>
                    <li>Angular</li>
                  </ul>
                </div>
                
                <div className="skill-category">
                  <h4>Tools</h4>
                  <ul className="skill-list">
                    <li>PyCharm</li>
                    <li>Jupyter Notebook</li>
                    <li>Visual Studio Code</li>
                    <li>Git</li>
                    <li>MySQL</li>
                    <li>ServiceNow</li>
                  </ul>
                </div>
                
                <div className="skill-category">
                  <h4>Soft Skills</h4>
                  <ul className="skill-list">
                    <li>Team Collaboration</li>
                    <li>Communication</li>
                    <li>Leadership</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="resume-section">
              <div className="section-header">
                <Briefcase size={20} />
                <h3>Experience</h3>
              </div>
              
              <div className="resume-entry">
                <div className="entry-header">
                  <h4>Web Development Intern</h4>
                  <span className="entry-date">
                    <Calendar size={14} /> JUNE 2024-JULY 2024
                  </span>
                </div>
                <h5>Top Notch, Visakhapatnam</h5>
                <ul className="entry-list">
                  <li>Built a "Library Management System" using Python and Django</li>
                  <li>Created and integrated both backend and frontend modules to enable efficient data handling and user interaction</li>
                  <li>Deepened understanding of the Django framework through hands-on project execution and end-to-end development</li>
                </ul>
              </div>
              
              <div className="resume-entry">
                <div className="entry-header">
                  <h4>Artificial Intelligence Intern</h4>
                  <span className="entry-date">
                    <Calendar size={14} /> MARCH 2024 – MAY 2024
                  </span>
                </div>
                <h5>EDUSTATION</h5>
                <ul className="entry-list">
                  <li>Explored core concepts in machine learning, including data preprocessing, feature engineering, and model evaluation</li>
                  <li>Implemented classification, regression, and clustering algorithms using Python and libraries like scikit-learn and NumPy</li>
                  <li>Expanded an image classification model using supervised learning techniques</li>
                  <li>Conducted hyperparameter tuning and model validation</li>
                  <li>Gained practical insights into AI workflows, from dataset handling to model deployment</li>
                </ul>
              </div>
            </div>
            
            <div className="resume-section">
              <div className="section-header">
                <Star size={20} />
                <h3>Projects</h3>
              </div>
              
              <div className="resume-entry">
                <h4>Library Management System</h4>
                <p><strong>Tools & Tech:</strong> Django, Python, HTML, CSS, Bootstrap</p>
                <ul className="entry-list">
                  <li>Built a web-based system to streamline book circulation in an academic setting</li>
                  <li>Implemented essential modules including user registration, authentication, book search, issue/return, and history tracking</li>
                  <li>Used Django's built-in admin interface for efficient inventory and record management</li>
                  <li>Followed the Model-View-Template (MVT) architecture</li>
                  <li>Enhanced a responsive, user-friendly interface using Bootstrap</li>
                </ul>
              </div>
              
              <div className="resume-entry">
                <h4>Smart News Aggregator: Personalized and Real-Time News Curation</h4>
                <p><strong>Tech Stack:</strong> MongoDB, Express.js, React.js, Node.js, NewsAPI and GNewsAPI</p>
                <ul className="entry-list">
                  <li>Engineered a full-stack platform for personalized news delivery</li>
                  <li>Implemented user authentication, category-based filtering, and article search</li>
                  <li>Enabled country- and language-specific news feeds</li>
                  <li>Integrated web scraping techniques with external APIs</li>
                  <li>Designed dynamic dashboards for real-time topic customization</li>
                </ul>
              </div>
            </div>
            
            <div className="resume-section">
              <div className="section-header">
                <Award size={20} />
                <h3>Certifications & Achievements</h3>
              </div>
              
              <ul className="achievement-list">
                <li>Achieved global certification in ServiceNow (Certified System Administrator)</li>
                <li>Solved 200+ problems In CodeChef (Rating – 930)</li>
                <li>Full-Stack Web Development – Udemy</li>
                <li>Python Interview Questions – CodeChef</li>
                <li>Object Oriented Programming in Java – Coursera</li>
                <li>Python Programming Essentials – Coursera</li>
                <li>Coding Interview Preparation – Meta (Coursera)</li>
                <li>SQL (Basic, Intermediate) – HackerRank</li>
                <li>Flipkart GRiD E-Commerce & Tech Quiz – Unstop</li>
              </ul>
            </div>
            
            <div className="resume-section">
              <div className="section-header">
                <Star size={20} />
                <h3>Languages</h3>
              </div>
              
              <div className="skills-row">
                <div className="skill-category">
                  <ul className="skill-list">
                    <li>Telugu (Native)</li>
                    <li>English (Proficient)</li>
                    <li>Hindi (Intermediate)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;