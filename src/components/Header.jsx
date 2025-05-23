import React, { useState } from "react";
import './Header.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import AgentModal from '../components/AgentModal';
import ContactForm from "../components/ContactForm"; // ajuste caminho se necessário


export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const [showAgent, setShowAgent] = useState(false);

  const openGitHub = () => {
    window.open("https://github.com/Moa-fernandes", "_blank");
  };

  return (
    <>
      <header className="navbar">
        <div className="navbar-left">
          <button className="btn-4d btn-agent" onClick={() => setShowAgent(true)}>
  Talk to Agent / Falar com Agente
</button>

        </div>

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
        <div className="modal-form">
          <h2>📬 Get In Touch</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  </div>
)}


      {showAgent && <AgentModal onClose={() => setShowAgent(false)} />}
    </>
  );
}
