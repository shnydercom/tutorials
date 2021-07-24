import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AgileManifestoDisplay } from './components/agile-manifesto/Display';
import { AGILE_MANIFESTO_EN } from './data/agileManifestoEN';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <AgileManifestoDisplay content={AGILE_MANIFESTO_EN} />
    </div>
  );
}

export default App;
