import React from "react";
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="animated-title">
        <h1 className="hero-title">Moacir Fernandes</h1>
        <p className="hero-subtitle">
          Developer FullStack <br />
          Front-End focused in UI/UX
        </p>

          <a href="/Moacir-Fernandes-CV.pdf" download className="btn-cv">
            📄 Download CV
          </a>

        </div>
        <img src="/Moacir.png" alt="Moacir Fernandes" className="hero-img" />
      </div>
    </section>
  );
}
