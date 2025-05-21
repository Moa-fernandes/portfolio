import React, { useState } from "react";
import './Header.css';
import { FaUserAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

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
      <li><a onClick={() => setShowModal(true)}>Contato / Contact</a></li>
    </ul>
  </nav>

  <div className="navbar-right-with-arrow">
    <div className="arrow-5d">➤</div>
    <button className="btn-4d" onClick={() => setShowModal(true)}>
      Talk to Me
    </button>
  </div>
</header>


      {showModal && (
        <div className="modal-backdrop" onClick={() => setShowModal(false)}>
          <div className="modal-3d-contact modal-centered" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>×</button>
            <div className="modal-content">
              <div className="modal-info">
                <h2>📬 Contact:</h2>
                <p><FaUserAlt /> Moacir Fernandes</p>
                <p><FaPhoneAlt /> 21 9 7301-9585</p>
                <p><FaEnvelope /> moacirsistemax@gmail.com</p>
              </div>
              <div className="modal-img">
                <img src="/moa3.gif" alt="Moa animado" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
