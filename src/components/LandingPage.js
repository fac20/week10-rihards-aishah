import React from "react";
import torch from './../torch.svg';
import {HelpButton} from "./help.js"
import Game from "./GameBuild";

export const Box = (props) => {
    const [page, setPage] = React.useState("home")

    const createAvatars = (event) => {
        event.preventDefault();
        setPage("game");
        //if not given value for 2/3/4, set username to default values
        if (!playerTwo.username) setPlayerTwo(updatePlayerObject(playerTwo, "oliverjam", "username"))
        if (!playerThree.username) setPlayerThree(updatePlayerObject(playerThree, "jackherizsmith", "username"))
        if (!playerFour.username) setPlayerFour(updatePlayerObject(playerFour, "Albadylic", "username"))
    }

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

const [playerThree, setPlayerThree] = React.useState({username: "",
    name: "",
    image: "",
    torch: false,
    location: "sand",
    speed: 5})

    const [playerFour, setPlayerFour] = React.useState({username: "",
    name: "",
    image: "",
    torch: false,
    location: "sand",
    speed: 8})

    const updatePlayerObject = (playerObj, newValue, keyThing)=> {
        let update = Object.assign({}, playerObj)
        update[keyThing] = newValue;
        return update;
}

    return (
        <main>
         {page !== "game" ? <LandingPage player1={{playerOne, setPlayerOne}} player2={{playerTwo, setPlayerTwo}} player3={{playerThree, setPlayerThree}} player4={{playerFour, setPlayerFour}} updatePlayerObject={updatePlayerObject}>{createAvatars}</LandingPage> : <Game player1={{playerOne, setPlayerOne}} player2={{playerTwo, setPlayerTwo}} player3={{playerThree, setPlayerThree}} player4={{playerFour, setPlayerFour}} updatePlayerObject={updatePlayerObject}  />}
        </main>
    )
}

export const LandingPage = (props) => {
    // console.log(props)
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
            <StartForm player1={props.player1} player2={props.player2} player3={props.player3} player4={props.player4} updatePlayerObject={props.updatePlayerObject}>{props.children}</StartForm>
        </div>
        
    )
}

export const StartForm = (props) => {

    // console.log(props)
    return (
        <form>
            <fieldset>
                <legend>PLAYERS</legend>
                <input type="text" onChange={(event)=> props.player1.setPlayerOne(props.updatePlayerObject(props.player1.playerOne, event.target.value, "username"))}  id="player1" placeholder="Player 1*" required />
                <input type="text" value={props.player2.playerTwo.username} onChange={(event)=> props.player2.setPlayerTwo(props.updatePlayerObject(props.player2.playerTwo, event.target.value, "username"))} id="player2" placeholder="Player 2" />
                <input type="text" value={props.player3.playerThree.username} onChange={(event)=> props.player3.setPlayerThree(props.updatePlayerObject(props.player3.playerThree, event.target.value, "username"))} id="player3" placeholder="Player 3" />
                <input type="text" value={props.player4.playerFour.username} onChange={(event)=> props.player4.setPlayerFour(props.updatePlayerObject(props.player4.playerFour, event.target.value, "username"))} id="player4" placeholder="Player 4" />
                <button type="Submit" onClick={props.children}>Start Game!</button>
            </fieldset>
        </form>
    )
}

