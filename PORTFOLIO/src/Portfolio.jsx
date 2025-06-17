import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';
import './styles.css';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'about', title: 'About' },
    { id: 'education', title: 'Education' },
    { id: 'skills', title: 'Skills' },
    { id: 'projects', title: 'Projects' },
    { id: 'certifications', title: 'Certifications' },
    { id: 'contact', title: 'Contact' }
  ];

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={styles.app}>
      {/* Blur overlay when mobile menu is open */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={styles.overlay}
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Fixed Header */}
      <header style={{
        ...styles.header,
        ...(scrollY > 10 ? styles.scrolledHeader : {})
      }}>
        <div style={styles.headerContainer}>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={styles.logo}
          >
            ANTRONIC A
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" style={styles.desktopNav}>
            {sections.map((section) => (
              <motion.button
                key={section.id}
                whileHover={{ y: -2 }}
                onClick={() => handleNavClick(section.id)}
                style={{
                  ...styles.navButton,
                  color: activeSection === section.id ? '#60a5fa' : '#e5e7eb',
                }}
              >
                {section.title}
                {activeSection === section.id && (
                  <motion.span 
                    layoutId="nav-underline"
                    style={styles.activeIndicator}
                  />
                )}
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            style={styles.menuButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div style={{
              ...styles.menuLine,
              transform: isMenuOpen ? 'rotate(45deg) translateY(8px)' : 'none'
            }} />
            <div style={{
              ...styles.menuLine,
              opacity: isMenuOpen ? 0 : 1,
              margin: '6px 0'
            }} />
            <div style={{
              ...styles.menuLine,
              transform: isMenuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none'
            }} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={styles.mobileMenu}
          >
            <div style={styles.mobileMenuContent}>
              {sections.map((section) => (
                <motion.button
                  key={section.id}
                  whileHover={{ x: 5 }}
                  onClick={() => handleNavClick(section.id)}
                  style={{
                    ...styles.mobileMenuItem,
                    backgroundColor: activeSection === section.id ? 'rgba(31, 41, 55, 1)' : 'transparent',
                    color: activeSection === section.id ? '#60a5fa' : '#e5e7eb'
                  }}
                >
                  {section.title}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main style={styles.main}>
        {/* Hero Section */}
        <section id="hero" style={styles.heroSection}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={styles.heroContent}
          >
            <h1 className="hero-title" style={styles.heroTitle}>
              MERN Stack Developer <span style={styles.heroHighlight}>Building Digital Experiences</span>
            </h1>
            <p style={styles.heroSubtitle}>
              Passionate about creating efficient, user-friendly web applications with modern technologies.
            </p>
            <div style={styles.heroButtons}>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                style={styles.primaryButton}
              >
                View Projects <ArrowRight style={styles.buttonIcon} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                style={styles.secondaryButton}
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" style={styles.section}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            style={styles.contentCard}
          >
            <h2 style={styles.sectionTitle}>
              <span style={styles.sectionNumber}>•</span>
              About Me
            </h2>
            <div style={styles.aboutContent}>
              <p style={styles.paragraph}>
                A passionate and self-driven B.Tech student in Artificial Intelligence and Data Science at Rajalakshmi Institute of Technology, Chennai, with a strong focus on full-stack web development.
              </p>
              <p style={styles.paragraph}>
                Proficient in HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB, with hands-on experience building dynamic and responsive web applications.
              </p>
              <p style={styles.paragraph}>
                Skilled in creating efficient backend services and user-friendly frontends. Eager to contribute to real-world projects, solve technical challenges, and grow as a MERN stack developer through internship opportunities.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Education Section */}
        <section id="education" style={styles.section}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            style={styles.contentCard}
          >
            <h2 style={styles.sectionTitle}>
              <span style={styles.sectionNumber}>•</span>
              Education
            </h2>
            <div style={styles.educationContent}>
              <div style={styles.educationCard}>
                <h3 style={styles.educationTitle}>Rajalakshmi Institute of Technology</h3>
                <p style={styles.educationSubtitle}>B.Tech in Artificial Intelligence and Data Science</p>
                <div style={styles.educationTags}>
                  <span style={styles.tag}>GPA: 8.21/10</span>
                  <span style={styles.tag}>2023-2027</span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" style={styles.section}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            style={styles.contentCard}
          >
            <h2 style={styles.sectionTitle}>
              <span style={styles.sectionNumber}>•</span>
              Skills
            </h2>
            <div className="skills-grid" style={styles.skillsGrid}>
              {/* Technical Skills */}
              <div style={styles.skillCard}>
                <h3 style={styles.skillTitle}>Technical Skills</h3>
                <ul style={styles.skillList}>
                  {[
                    "HTML5, CSS3, JavaScript (ES6+)",
                    "React.js & Next.js",
                    "Node.js & Express.js",
                    "MongoDB & Database Design",
                    "Git & GitHub",
                    "Responsive Web Design",
                    "RESTful API Development"
                  ].map((skill, index) => (
                    <motion.li 
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      style={styles.skillItem}
                    >
                      <span style={styles.bullet}>▹</span>
                      <span>{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Soft Skills */}
              <div style={styles.skillCard}>
                <h3 style={styles.skillTitle}>Soft Skills</h3>
                <div style={styles.softSkills}>
                  {["Problem Solving", "Time Management", "Team Collaboration", "Adaptability", "Fast Learner", "Communication"].map((skill, index) => (
                    <motion.span
                      key={index}
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      style={styles.softSkillItem}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" style={styles.section}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            style={styles.contentCard}
          >
            <h2 style={styles.sectionTitle}>
              <span style={styles.sectionNumber}>•</span>
              Projects
            </h2>
            <div style={styles.projectsContainer}>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                style={styles.projectCard}
              >
                <div className="project-header" style={styles.projectHeader}>
                  <div>
                    <h3 style={styles.projectTitle}>Exam Seating Arrangement Web Application</h3>
                    <p style={styles.projectSubtitle}>Full-stack Web Application</p>
                  </div>
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://github.com/Antronic14/Exam-seating-Arrangement" 
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.githubButton}
                  >
                    <Github style={styles.buttonIcon} />
                    View on GitHub
                  </motion.a>
                </div>
                <div style={styles.techStack}>
                  <span style={styles.techItem}>Python</span>
                  <span style={styles.techItem}>Flask</span>
                  <span style={styles.techItem}>JavaScript</span>
                  <span style={styles.techItem}>HTML/CSS</span>
                </div>
                <ul style={styles.projectPoints}>
                  {[
                    "Developed a full-stack web application that dynamically assigns seats based on department, subject, and classroom capacity",
                    "Implemented intelligent seat allocation with round-robin distribution and subject-based grouping",
                    "Integrated admin and student portals with secure login, animated UI, CSV uploads/downloads, and real-time seat search using roll numbers"
                  ].map((point, index) => (
                    <li key={index} style={styles.projectPoint}>
                      <span style={styles.bullet}>▹</span>
                      <span style={styles.pointText}>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" style={styles.section}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            style={styles.contentCard}
          >
            <h2 style={styles.sectionTitle}>
              <span style={styles.sectionNumber}>•</span>
              Certifications
            </h2>
            <div className="certifications-grid" style={styles.certificationsGrid}>
              {[
                { 
                  title: "Creating Websites Using HTML", 
                  issuer: "MindLuster", 
                  year: "2023",
                  /* link: "https://www.mindluster.com/student/certificate/9f1f6ee6"  */
                },
                { 
                  title: "CSS Full Course", 
                  issuer: "MindLuster", 
                  year: "2023",
                  /* link: "https://www.mindluster.com/student/certificate/1a556ca6"  */
                }
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  style={styles.certificationCard}
                >
                  <h3 style={styles.certificationTitle}>{cert.title}</h3>
                  <div style={styles.certificationFooter}>
                    <div style={styles.certificationInfo}>
                      <span>{cert.issuer}</span>
                      <span style={styles.certificationYear}>{cert.year}</span>
                    </div>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.viewButton}
                    >
                      View
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" style={styles.section}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            style={styles.contentCard}
          >
            <h2 style={styles.sectionTitle}>
              <span style={styles.sectionNumber}>•</span>
              Get In Touch
            </h2>
            <div style={styles.contactCard}>
              <p style={styles.contactText}>
                I'm currently looking for internship opportunities as a MERN stack developer. If you have any questions or would like to discuss potential collaborations, feel free to reach out!
              </p>
              <div style={styles.contactButtons}>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:antronic.a.2023.aids@ritchennai.edu.in"
                  style={styles.primaryButton}
                >
                  <Mail style={styles.buttonIcon} /> Email Me
                </motion.a>
                <div style={styles.socialButtons}>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://github.com/Antronic14"
                   /*  target="_blank" */
                    rel="noopener noreferrer"
                    style={styles.socialButton}
                  >
                    <Github style={styles.socialIcon} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://www.linkedin.com/in/antronic-a-2bb74b28b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    /* target="_blank" */
                    rel="noopener noreferrer"
                    style={styles.socialButton}
                  >
                    <Linkedin style={styles.socialIcon} />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <p>Designed & Built by Antronic A</p>
          <p style={styles.copyright}>© {new Date().getFullYear()} All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

// CSS Styles
const styles = {
  app: {
    minHeight: '100vh',
    backgroundColor: '#000000',
    color: '#f3f4f6',
    fontFamily: 'sans-serif',
    position: 'relative'
  },
  overlay: {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    backdropFilter: 'blur(4px)',
    zIndex: 30
  },
  header: {
    position: 'fixed',
    width: '100%',
    zIndex: 50,
    transition: 'all 0.3s ease',
    padding: '1rem 0',
    backgroundColor: 'rgba(0, 0, 0, 0.9)'
  },
  scrolledHeader: {
    padding: '0.5rem 0',
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid rgba(31, 41, 55, 1)'
  },
  headerContainer: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#ffffff'
  },
  desktopNav: {
    display: 'none',
    gap: '2rem'
  },
  navButton: {
    background: 'none',
    border: 'none',
    color: '#e5e7eb',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer',
    position: 'relative',
    padding: '0.5rem 0',
    ':hover': {
      color: '#ffffff'
    }
  },
  activeIndicator: {
    position: 'absolute',
    left: 0,
    bottom: '-2px',
    width: '100%',
    height: '2px',
    backgroundColor: '#60a5fa'
  },
  menuButton: {
    background: 'none',
    border: 'none',
    padding: '0.5rem',
    zIndex: 50,
    display: 'block',
    cursor: 'pointer'
  },
  menuLine: {
    width: '24px',
    height: '2px',
    backgroundColor: '#ffffff',
    transition: 'all 0.3s ease'
  },
  mobileMenu: {
    position: 'fixed',
    top: '80px',
    right: '1.5rem',
    backgroundColor: 'rgba(17, 24, 39, 1)',
    borderRadius: '0.5rem',
    border: '1px solid rgba(55, 65, 81, 1)',
    zIndex: 40,
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
  },
  mobileMenuContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    padding: '1rem'
  },
  mobileMenuItem: {
    textAlign: 'left',
    padding: '0.75rem 1rem',
    borderRadius: '0.375rem',
    fontSize: '1.125rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  },
  main: {
    paddingTop: '96px',
    paddingBottom: '64px',
    backgroundColor: '#000000'
  },
  heroSection: {
    padding: '3rem 1.5rem',
    maxWidth: '1280px',
    margin: '0 auto'
  },
  heroContent: {
    maxWidth: '56rem'
  },
  heroTitle: {
    fontSize: '2.25rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    color: '#ffffff'
  },
  heroHighlight: {
    color: '#60a5fa'
  },
  heroSubtitle: {
    fontSize: '1.25rem',
    color: '#d1d5db',
    marginBottom: '2rem'
  },
  heroButtons: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem'
  },
  primaryButton: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#2563eb',
    color: '#ffffff',
    borderRadius: '9999px',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    textDecoration: 'none',
    transition: 'background-color 0.2s ease',
    ':hover': {
      backgroundColor: '#1d4ed8'
    }
  },
  secondaryButton: {
    padding: '0.75rem 1.5rem',
    border: '1px solid rgba(75, 85, 99, 1)',
    color: '#ffffff',
    borderRadius: '9999px',
    fontWeight: '500',
    textDecoration: 'none',
    transition: 'border-color 0.2s ease',
    ':hover': {
      borderColor: 'rgba(156, 163, 175, 1)'
    }
  },
  buttonIcon: {
    width: '16px',
    height: '16px'
  },
  section: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '3rem 1.5rem'
  },
  contentCard: {
    maxWidth: '56rem',
    backgroundColor: 'rgba(17, 24, 39, 1)',
    padding: '2rem',
    borderRadius: '0.5rem',
    border: '1px solid rgba(31, 41, 55, 1)'
  },
  sectionTitle: {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
    display: 'flex',
    alignItems: 'center',
    color: '#ffffff'
  },
  sectionNumber: {
    color: '#60a5fa',
    marginRight: '1rem'
  },
  aboutContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  },
  paragraph: {
    color: '#e5e7eb',
    lineHeight: '1.6',
    margin: 0
  },
  educationContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  },
  educationCard: {
    padding: '1.5rem',
    backgroundColor: 'rgba(31, 41, 55, 1)',
    borderRadius: '0.75rem',
    border: '1px solid rgba(55, 65, 81, 1)'
  },
  educationTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    color: '#ffffff'
  },
  educationSubtitle: {
    color: '#e5e7eb',
    marginBottom: '1rem'
  },
  educationTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem'
  },
  tag: {
    fontSize: '0.875rem',
    backgroundColor: 'rgba(55, 65, 81, 1)',
    color: '#60a5fa',
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px'
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '1.5rem'
  },
  skillCard: {
    padding: '1.5rem',
    backgroundColor: 'rgba(31, 41, 55, 1)',
    borderRadius: '0.75rem',
    border: '1px solid rgba(55, 65, 81, 1)'
  },
  skillTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#ffffff'
  },
  skillList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    padding: 0,
    margin: 0,
    listStyle: 'none'
  },
  skillItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem',
    color: '#e5e7eb'
  },
  softSkills: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.75rem'
  },
  softSkillItem: {
    display: 'inline-block',
    backgroundColor: 'rgba(55, 65, 81, 1)',
    color: '#ffffff',
    padding: '0.5rem 1rem',
    borderRadius: '9999px',
    fontSize: '0.875rem'
  },
  bullet: {
    color: '#60a5fa'
  },
  projectsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  },
  projectCard: {
    padding: '1.5rem',
    backgroundColor: 'rgba(31, 41, 55, 1)',
    borderRadius: '0.75rem',
    border: '1px solid rgba(55, 65, 81, 1)',
    transition: 'border-color 0.3s ease',
    ':hover': {
      borderColor: 'rgba(75, 85, 99, 1)'
    }
  },
  projectHeader: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginBottom: '1rem'
  },
  projectTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#ffffff'
  },
  projectSubtitle: {
    color: '#60a5fa',
    fontSize: '0.875rem',
    marginTop: '0.25rem'
  },
  techStack: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '1rem'
  },
  techItem: {
    fontSize: '0.75rem',
    backgroundColor: 'rgba(55, 65, 81, 0.7)',
    color: '#60a5fa',
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px'
  },
  githubButton: {
    fontSize: '0.875rem',
    backgroundColor: '#2563eb',
    color: '#ffffff',
    padding: '0.5rem 1rem',
    borderRadius: '9999px',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    textDecoration: 'none',
    transition: 'background-color 0.2s ease',
    ':hover': {
      backgroundColor: '#1d4ed8'
    }
  },
  projectPoints: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    color: '#e5e7eb'
  },
  projectPoint: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.5rem'
  },
  pointText: {
    flex: 1
  },
  certificationsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '1.5rem'
  },
  certificationCard: {
    padding: '1.5rem',
    backgroundColor: 'rgba(31, 41, 55, 1)',
    borderRadius: '0.75rem',
    border: '1px solid rgba(55, 65, 81, 1)',
    transition: 'border-color 0.3s ease',
    ':hover': {
      borderColor: 'rgba(75, 85, 99, 1)'
    }
  },
  certificationTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    color: '#ffffff'
  },
  certificationFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  certificationInfo: {
    color: '#e5e7eb',
    display: 'flex',
    flexDirection: 'column'
  },
  certificationYear: {
    fontSize: '0.875rem'
  },
  viewButton: {
    fontSize: '0.875rem',
    backgroundColor: 'rgba(55, 65, 81, 1)',
    color: '#ffffff',
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px',
    textDecoration: 'none',
    transition: 'background-color 0.2s ease',
    ':hover': {
      backgroundColor: 'rgba(75, 85, 99, 1)'
    }
  },
  contactCard: {
    padding: '1.5rem',
    backgroundColor: 'rgba(31, 41, 55, 1)',
    borderRadius: '0.75rem',
    border: '1px solid rgba(55, 65, 81, 1)'
  },
  contactText: {
    color: '#e5e7eb',
    marginBottom: '1.5rem',
    lineHeight: '1.6'
  },
  contactButtons: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem'
  },
  socialButtons: {
    display: 'flex',
    gap: '1rem'
  },
  socialButton: {
    padding: '0.75rem',
    backgroundColor: 'rgba(55, 65, 81, 1)',
    borderRadius: '9999px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.2s ease',
    ':hover': {
      backgroundColor: 'rgba(75, 85, 99, 1)'
    }
  },
  socialIcon: {
    width: '20px',
    height: '20px',
    color: '#ffffff'
  },
  footer: {
    backgroundColor: '#000000',
    padding: '2rem 0',
    borderTop: '1px solid rgba(31, 41, 55, 1)'
  },
  footerContent: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 1.5rem',
    textAlign: 'center',
    color: '#9ca3af'
  },
  copyright: {
    marginTop: '0.5rem',
    fontSize: '0.875rem'
  }
};
