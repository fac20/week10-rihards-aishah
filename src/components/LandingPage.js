import React from "react";
import torch from './../torch.svg';

export const LandingPage = () => {
    return (
        <main>
            <img src={torch} className="App-logo" alt="logo" />
            <h1>Welcome to our FAC Bridge and Torch Problem</h1>
            <h2>How to Start: </h2>
            <ol>
            <li>Type in your GitHub username below</li>
            <li>Optional - insert usernames of 3 other people</li>
            <li>Click "Start Game"</li>
            <li>For instructions on how to play, click on the ?</li>
            </ol>
            <StartForm />
        </main>
        
    )
}

export const StartForm = () => {




    return (
        <form>
            <fieldset>
                <legend>PLAYERS</legend>
                <input type="text" id="player1" placeholder="Player 1*" required />
                <input type="text" id="player2" placeholder="Player 2" />
                <input type="text" id="player3" placeholder="Player 3" />
                <input type="text" id="player4" placeholder="Player 4" />
                <button type="Submit" onClick={avatar}>Start Game!</button>
            </fieldset>
        </form>
    )
}

