import React, { useState, useEffect } from 'react';

import api from './services/api';

import './App.css';

import Header from './components/Header';

// import { Container } from './styles';

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('/projects').then((response) => {
      setProjects(response.data);
    });
  }, []);

  function handleAddProject(project) {
    setProjects([...projects, `Novo projeto ${Date.now()}`]);
  }
  return (
    <>
      <Header title="Projects" />
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>
      <button type="button" onClick={handleAddProject}>
        Adicionar project
      </button>
    </>
  );
}
