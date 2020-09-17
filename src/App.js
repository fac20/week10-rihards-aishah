import React from 'react';
import './App.css';
import { LandingPage } from './components/LandingPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <LandingPage />
        
      </header>
    </div>
  );
}

// return ({submitted ? <landingpage />:<game />})

export default App;
