/* eslint-disable default-case */
import React, { Children } from "react";
import {HelpButton} from "./help.js";
import {getData} from "../utils/data.js";
import { render } from "react-dom";

// const players = JSON.parse(window.localStorage.getItem("player_token"));

// const countChildren = (elem) => Children.count(elem);

// try! => if (bridgeplayer < 2) 

//  bridge => birdgeplayrs === 2 





const Timer = (props) => {
    const [timeLeft, setTimeLeft] = React.useState(15);
    // but how do we change timeleft?? it changes when we press cross, get the speeds of the players on the bridge, and choose the larger value
    // max(props[0].speed, props[1].speed)
    return (
        <div className="timer">
            {timeLeft}:00
        </div>
    )
}
//need to change this
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
        //no default
    }
    return playerObj;
}

const Player = (info) => {
    return ( //add event listener to figure to move stuff
        <figure>
           <img src={info.image} alt="{info.name}" />
            <figcaption>{info.name} | {info.speed}</figcaption> 
        </figure>
    )
}

const Avatar = (props) => {
    const [userData, setUserData] = React.useState(null)

    React.useEffect( ()=> {
        getData(props.children.username).then(data => setUserData(data));
    }, [])
    if (!userData) return <p>Loading..</p>

    const { avatar_url, name } = userData;
    return ( //add event listener to figure to move stuff
        <figure>
           <img src={avatar_url} alt="{name}" />
            <figcaption>{name} | {props.children.speed}</figcaption> 
        </figure>
    )
  
}

const Game = (props) => {
    console.log(props)
        const [player1, setPlayer1] = React.useState(props.player1.playerOne)
        const [player2, setPlayer2] = React.useState(props.player2.playerTwo)
        const [player3, setPlayer3] = React.useState(props.player3.playerThree)
        const [player4, setPlayer4] = React.useState(props.player4.playerFour)

    const updateplayer1 = (player) => {
        setPlayer1(movePlayer(player));
        console.log(player.username, player.location);
    }

        React.useEffect( ()=>{

            setPlayer1(movePlayer(player1));
            
            
        }, [player1]);
    

    
    return (
        <main className="grid-container">
            <div className="sand">
                { player1.location === "sand" ?  <div className="player" onClick={()=>updateplayer1(player1)}><Avatar>{props.player1.playerOne}</Avatar></div> : null }
                { player2.location === "sand" ?  <div className="player"><Avatar onClick="">{props.player2.playerTwo}</Avatar></div> : null }
            </div>
            <HelpButton />
            <div className="panel"><Timer /></div>

            
            <div className="bridge">
                { player1.location === "bridge" ?  <div className="player" onClick={()=>updateplayer1(player1)}><Avatar>{props.player1.playerOne}</Avatar></div> : null }
                { player2.location === "bridge" ? <div className="player"><Avatar onClick="">{props.player2.playerTwo}</Avatar></div> : null }
                { player3.location === "bridge" ? <Avatar onClick="">{props.player3.playerThree}</Avatar> : null}
                { player4.location === "bridge" ? <Avatar onClick="">{props.player4.playerFour}</Avatar> : null}
            </div>

            <div className="grass">
                { player1.location === "grass" ?  <Avatar onClick="">{props.player1.playerOne}</Avatar> : null }
                { player2.location === "grass" ? <Avatar onClick="">{props.player2.playerTwo}</Avatar> : null }
                { player3.location === "grass" ? <Avatar onClick="">{props.player3.playerThree}</Avatar> : null}
                { player4.location === "grass" ? <Avatar onClick="">{props.player4.playerFour}</Avatar> : null}
            </div>
        
        </main>
        )
}          

export default Game;