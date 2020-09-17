import React from "react";
import torch from './../torch.svg';
import {playersArray} from "./Avatar.js"
import {HelpButton} from "./help.js"
import Game from "./GameBuild";

export const Box = (props) => {
    const [page, setPage] = React.useState("home")

    const createAvatars = (event) => {
        event.preventDefault();
        // return gameCreated = true; 
        setPage("game");
    }

    return (
        <main>
         {page !== "game" ? <LandingPage>{createAvatars}</LandingPage> : <Game />}
        </main>
    )
}

// setPlayerTwo(playerTwo => updateObject(playerTwo, event)) 
// onChange={({ target }) => 

export const LandingPage = (props) => {
    return (
        <div>
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
            <StartForm>{props.children}</StartForm>
        </div>
        
    )
}

export const StartForm = (props) => {
    const [player1Name, setName1] = React.useState("");
    const [player2Name, setName2] = React.useState("");
    const [player3Name, setName3] = React.useState("");
    const [player4Name, setName4] = React.useState("");

const [playerOne, setPlayerOne] = React.useState({username: "",
name: "",
image: "",
torch: false,
location: "sand",
speed: 1})

const [playerTwo, setPlayerTwo] = React.useState({username: "",
name: "",
image: "",
torch: false,
location: "sand",
speed: 2})

    React.useEffect( ()=> {
        console.log(playerOne)
        console.log(playerTwo)
        playersArray[1].username=player2Name || "oliverjam";
        playersArray[2].username=player3Name || "jackherizsmith";
        playersArray[3].username=player4Name || "Albadylic";
    }, [playerOne, playerTwo, player3Name, player4Name])

    
    // const {}

    return (
        <form>
            <fieldset>
                <legend>PLAYERS</legend>
                <input type="text" onChange={(event)=> setPlayerOne(updatePlayerObject(playerOne,event))}  id="player1" placeholder="Player 1*" required />
                <input type="text" onChange={(event)=> setPlayerTwo(updatePlayerObject(playerTwo, event))} id="player2" placeholder="Player 2" />
                <input type="text" onChange={(event)=> setName3(event.target.value)} id="player3" placeholder="Player 3" />
                <input type="text" onChange={(event)=> setName4(event.target.value)} id="player4" placeholder="Player 4" />
                <button type="Submit" onClick={props.children}>Start Game!</button>
            </fieldset>
        </form>
    )
}

const updatePlayerObject = (playerObj, event)=> {
        let update = Object.assign({}, playerObj)
        update.username = event.target.value;
        return update;
}

// onChange={(event)=> setPlayerOne(playerOne => {
//     let update = Object.assign({}, playerOne)
//     update.username = event.target.value;
//     return update;})}
