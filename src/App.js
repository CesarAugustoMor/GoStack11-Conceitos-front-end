import React from 'react';

import Header from './components/Header';

// import { Container } from './styles';

export default function App() {
  return (
    <>
      <Header title="HomePage">
        <ul>
          <li>HomePage</li>
          <li>Projetos</li>
        </ul>
      </Header>
      <Header title="Projects">
        <ul>
          <li>HomePage</li>
          <li>Projetos</li>
        </ul>
      </Header>
    </>
  );
}
