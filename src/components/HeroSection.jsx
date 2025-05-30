import React from "react";
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="animated-title">
        <h1 className="hero-title">Moacir Fernandes</h1>
       <p className="hero-subtitle">
  <span className="underline-wave">
    {"_____________".split("").map((char, idx) => (
      <span key={idx} className="wave-char" style={{ animationDelay: `${idx * 0.1}s` }}>
        {char}
      </span>
    ))}
    Developer FullStack
    {"_____________".split("").map((char, idx) => (
      <span key={`r-${idx}`} className="wave-char" style={{ animationDelay: `${idx * 0.1}s` }}>
        {char}
      </span>
    ))}
  </span><br />
Back-End: Node.js, Python, TypeScript, PHP, JavaScript. <br></br>
Front-End: UI/UX-oriented, crafting responsive and user-centered interfaces. <br></br>
Frameworks & Libs: React.js, Vue.js, Django, Laravel. <br></br>
AI & LLM: Skilled in integrating AI solutions, including LLMs, into real-world applications. <br></br>
DevOps: Confident with Docker workflows, Sanity CMS, and platforms like Vercel/Render/Railway/Postman.
</p>


          <a href="/Moacir-Fernandes-CV.pdf" download className="btn-cv-glass">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
              strokeWidth="1.5" stroke="currentColor" className="cv-icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Download CV
          </a>
        </div>
        <img src="/Moacir.png" alt="Moacir Fernandes" className="hero-img" />
      </div>
    </section>
  );
}
