import React, { useState } from "react";
import './Header.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

export default function Header() {
  const [showModal, setShowModal] = useState(false);

  const openGitHub = () => {
    window.open("https://github.com/Moa-fernandes", "_blank");
  };

  return (
    <>
      <header className="navbar">
        <nav className="navbar-center">
          <ul>
            <li><a onClick={openGitHub}>Projetos / Projects</a></li>
          </ul>
        </nav>

        <div className="navbar-right-with-arrow">
          <div className="arrow-5d">➤</div>
          <button className="btn-4d" onClick={() => setShowModal(true)}>
            If you have any questions, just hit me up!
          </button>
        </div>
      </header>

      {showModal && (
        <div className="modal-backdrop" onClick={() => setShowModal(false)}>
          <div className="modal-3d-contact modal-centered" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>×</button>
            <div className="modal-content">
              <div className="modal-info">
                <h2>📬 Hit Me Up:</h2>
                <p><a href="mailto:moacirsistemax@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /> moacirsistemax@gmail.com</a></p>
                <p><a href="https://www.linkedin.com/in/moacir-fernandes-ba0a97a0/" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a></p>
                <p><a href="https://github.com/Moa-fernandes" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a></p>
                <p><a href="https://wa.me/5521973019585" target="_blank" rel="noopener noreferrer"><FaWhatsapp /> WhatsApp</a></p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
