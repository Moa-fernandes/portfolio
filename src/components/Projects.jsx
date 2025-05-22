import React, { useEffect, useState } from 'react';
import { fetchProjects } from '../cms/sanityClient';
import './Projects.css';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects().then((data) => {
      setProjects(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="loading-bar-container">
        <div className="loading-track">
        </div>
      </div>
    );
  }

  return (
    <section className="projects">
      {projects.map((p, idx) => (
        <div key={idx} className="project-card">
          <h3>{p.title}</h3>
          <p>{p.description}</p>
          {p.link && <a href={p.link} target="_blank">Ver projeto</a>}
        </div>
      ))}
    </section>
  );
}
