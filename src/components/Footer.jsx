import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          <div className="footer-links">
            <a href="#about" className="footer-link">About</a>
            <a href="#projects" className="footer-link">Projects</a>
            <a href="#skills" className="footer-link">Skills</a>
          </div>
          <div className="footer-social">
            <a href="https://github.com/omgaut" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} className="social-icon" />
            </a>
            <a href="https://linkedin.com/in/om-gautam" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} className="social-icon" />
            </a>
            <a href="mailto:omgaut2020@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope size={24} className="social-icon" />
            </a>
          </div>
          <p className="footer-text">© {new Date().getFullYear()} Om Gautam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
