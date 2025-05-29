import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
    <div className="footer-container">
      <div className="footer-icons">
        <a href="mailto:moacirsistemax@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
        </a>
        <a href="https://www.linkedin.com/in/moacir-fernandes-ba0a97a0/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Moa-fernandes" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://wa.me/5521973019585" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
      </div>
      </div>
    
      <p>&copy; 2025 Moacir Fernandes. All Rights Reserved.</p>
    </footer>
  );
}
