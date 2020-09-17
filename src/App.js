import React from 'react';
import './App.css';
import { LandingPage, Box } from './components/LandingPage';
import  Game from './components/GameBuild';

function App() {
  const savedGame = window.localStorage.getItem("player_token");

  return (
    <div className="App">
        <Box />
    </div>
  );
}

export default App;
