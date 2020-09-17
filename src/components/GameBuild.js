/* eslint-disable default-case */
import React, { Children } from "react";
import {HelpButton} from "./help.js";
import {getData} from "../utils/data.js";

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
    return (
        <main className="grid-container">
            <HelpButton />
            <div className="panel"><Timer /></div>
            <div className="sand">
                { props.player1.playerOne.location === "sand" ?  <Avatar onClick="">{props.player1.playerOne}</Avatar> : null }
                { props.player2.playerTwo.location === "sand" ? <Avatar onClick="">{props.player2.playerTwo}</Avatar> : null }
                { props.player3.playerThree.location === "sand" ? <Avatar onClick="">{props.player3.playerThree}</Avatar> : null}
                { props.player4.playerFour.location === "sand" ? <Avatar onClick="">{props.player4.playerFour}</Avatar> : null}
            </div>
            
            <div className="bridge">
                { props.player1.playerOne.location === "bridge" ?  <Avatar onClick="">{props.player1.playerOne}</Avatar> : null }
                { props.player2.playerTwo.location === "bridge" ? <Avatar onClick="">{props.player2.playerTwo}</Avatar> : null }
                { props.player3.playerThree.location === "bridge" ? <Avatar onClick="">{props.player3.playerThree}</Avatar> : null}
                { props.player4.playerFour.location === "bridge" ? <Avatar onClick="">{props.player4.playerFour}</Avatar> : null}
            </div>

            <div className="grass">
                { props.player1.playerOne.location === "grass" ?  <Avatar onClick="">{props.player1.playerOne}</Avatar> : null }
                { props.player2.playerTwo.location === "grass" ? <Avatar onClick="">{props.player2.playerTwo}</Avatar> : null }
                { props.player3.playerThree.location === "grass" ? <Avatar onClick="">{props.player3.playerThree}</Avatar> : null}
                { props.player4.playerFour.location === "grass" ? <Avatar onClick="">{props.player4.playerFour}</Avatar> : null}
            </div>
        
        </main>
        )
}

export default Game;