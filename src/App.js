import React from 'react';
import './App.css';
import { LandingPage } from './components/LandingPage';
import {} from './components/GameBuild';

function App() {
  const savedGame = window.localStorage.getItem("player_token");

  return (
    <div className="App">
        {!savedGame ? <LandingPage /> : null}
    </div>
  );
}

// return ({checkLocalStorage ? <landingpage />:<game />})


export default App;
