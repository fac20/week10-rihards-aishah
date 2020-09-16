import React from 'react';
import './App.css';
import { LandingPage } from './components/LandingPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <LandingPage />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// return ({submitted ? <landingpage />:<game />})

export default App;
