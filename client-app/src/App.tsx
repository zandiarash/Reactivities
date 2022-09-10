import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Duck } from './test'
import  DuckItem  from './DuckItem'

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
          {Duck.map(duck => (
            <DuckItem duck={duck} />
          ))}
        </a>
      </header>
    </div>
  );
}

export default App;
