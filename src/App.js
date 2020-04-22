import React, { useState } from 'react';
import './App.css';

import Header from './components/Header';
import backgroundImage from './assets/background.jpg';

// import { Container } from './styles';

export default function App() {
  const [projects, setProjects] = useState([
    'Desenvolvimento de app',
    'Front-end web',
  ]);

  function handleAddProject(project) {
    setProjects([...projects, `Novo projeto ${Date.now()}`]);
  }
  return (
    <>
      <Header title="Projects" />
      <img width={300} src={backgroundImage} alt="arvores somos nozes" />
      <ul>
        {projects.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </ul>
      <button type="button" onClick={handleAddProject}>
        Adicionar project
      </button>
    </>
  );
}
