/* eslint-disable default-case */
import React, { Children } from "react";
import {HelpButton} from "./help.js";

const players = JSON.parse(window.localStorage.getItem("player_token"));

const countChildren = (elem) => Children.count(elem);

// try! => if (bridgeplayer < 2) 

//  bridge => birdgeplayrs === 2 





const Timer = () => {
    
}


//has all containers and uses map function to place avatars in right containers
const Field = () => {

}

const movePlayer = (playerObj) => {
    switch (playerObj.location) {
        case "sand":
            playerObj.location = "bridge";
            playerObj.lastlocation = "sand";
            break;
        case "grass":
            playerObj.location = "bridge";
            playerObj.lastlocation = "grass";
            break;
        case "bridge":
            if (playerObj.lastlocation === "sand") playerObj.location = "sand";
            if (playerObj.lastlocation === "grass") playerObj.location = "grass"
            break;
    }
}

const Player = (info) => {
    return ( //add event listener to figure to move stuff
        <figure>
           <img imgSrc={info.image} alt="{info.name}" />
            <figcaption>{info.name} | {info.speed}</figcaption> 
        </figure>
    )
}

const showPlayer = () => {
    players.map(player => {
        <figure>
           <img imgSrc={player.image} />
            <figcaption>{player.name} | {player.speed}</figcaption> 
        </figure>
    })
}

const Game = () => {
    return (
        <main>
            <HelpButton />
            <div className="sand">{}</div>
            <div className="panel"><Timer /></div>
            <div className="bridge"></div>
            <div className="grass"></div>
        </main>
        )
}


// <sand>{players.location === sand ? createAvatar : null}</sand> 

// bridge

// grass



// Reset and Cross buttons and show start form button
// Timer
// Errors/ feedback div - notifies user whether action is valid, activated when cross is clicked
// Torch
// Avatar - ONLY renders the image with the right class etc, given an object with the required (static) values
export default Game;