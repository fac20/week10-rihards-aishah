import React from "react";
import torch from './../torch.svg';
import {playersArray, getPlayerObject} from "./Avatar.js"
import {HelpButton} from "./help.js"

export const LandingPage = () => {
    return (
        <main>
            <HelpButton />
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
    const [player1Name, setName1] = React.useState("");
    const [player2Name, setName2] = React.useState("");
    const [player3Name, setName3] = React.useState("");
    const [player4Name, setName4] = React.useState("");


    React.useEffect( ()=> {
        playersArray[0].username=player1Name;
        playersArray[1].username=player2Name || "oliverjam";
        playersArray[2].username=player3Name || "jackherizsmith";
        playersArray[3].username=player4Name || "Albadylic";
    }, [player1Name, player2Name, player3Name, player4Name])

    const createAvatars = (event) => {
        event.preventDefault();
        //note: must reset form before showing form again next time
        window.localStorage.setItem("player_token", JSON.stringify(getPlayerObject(playersArray)))
        window.location.reload();
    }


    return (
        <form>
            <fieldset>
                <legend>PLAYERS</legend>
                <input type="text" value={player1Name} onChange={(event)=> setName1(event.target.value)}  id="player1" placeholder="Player 1*" required />
                <input type="text" value={player2Name} onChange={(event)=> setName2(event.target.value)} id="player2" placeholder="Player 2" />
                <input type="text" value={player3Name} onChange={(event)=> setName3(event.target.value)} id="player3" placeholder="Player 3" />
                <input type="text" value={player4Name} onChange={(event)=> setName4(event.target.value)} id="player4" placeholder="Player 4" />
                <button type="Submit" onClick={createAvatars}>Start Game!</button>
            </fieldset>
        </form>
    )
}

