import React from "react";
import getData from "../utils/data.js";
import { StartForm } from "./LandingPage.js"

let playersArray = [];

for (let i=0; i<4; i++){
    const speed = {
        0: 1,
        1: 2,
        2: 5,
        3: 8
    }
    
    const object = {
        username: "",
        name: "",
        image: "",
        torch: false,
        location: "sand",
        speed: ""
    }
    
    object.speed = speed[i];
    
    playersArray.push(object)
}

console.log(playersArray);

//takes an input of an array of player objects
const getPlayerObject = (array) => {
    array.foreach(player => {
        getData(player.username).then(data => {
            player.name = data.name;
            player.image = data.avatar_url
        })
    })
}

const Avatar = (props) => {
    // const [avatar, setAvatar] = React.useState(null);
    // const [playerName, setPlayerName] = React.useState(null);
    const [userData, setUserData] = React.useState(null)

    React.useEffect( ()=> {
        getData(props.children).then(data => setUserData(data));
    }, [])
    if (!userData) return <img imgSrc="./../loading.png" />

    const { avatar_url, name } = userData;

  return (
    //   <img imgSrc={avatar_url} className="avatarimage" alt={name}/>
  )
}
//avatar returns player object? - wouldnt we want to save that?


// playerObject.map {
    
// }


// playersobject.filter(player=> if player.location = sand ).map(playr => <)

//choosing which players to move on/off the bridge
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

export {playersArray, getPlayerObject}