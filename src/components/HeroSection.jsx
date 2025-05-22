import React from "react";
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="animated-title">
        <h1 className="hero-title">Moacir Fernandes</h1>
        <p className="hero-subtitle">
          _____________Developer FullStack_____________<br></br>*
          Back-end focused in Node.js <br></br>*
          Front-End focused in UI/UX <br></br>*
          AI & LLM Tools:<br></br>*
          Ollama: lightweight local inference runtime<br></br>*
          gemma:2b model (Google-backed LLM)
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
