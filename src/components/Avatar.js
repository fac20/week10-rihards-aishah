import React from "react";
import getData from "../utils/data.js";
import { StartForm } from "./LandingPage.js"

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


playerObject.map {
    
}

location.sand
location.bridge

try
location.


sand div
playersobject.filter(player=> if player.location = sand ).map(playr => <)



bridge
playersobject.map(playr => <)


grass
playersobject.map(playr => <)

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



const playerone = getPlayerObject("aissshah", 1)
<div onClick=()=>{if (player?.location === sand) player?.location = bridge}><img></img></div>

const getPlayerObject = (username, userspeed) => {
    return getData(username).then(data => {
        return {
            avatar: data.avatar_url,
            name: data.name,
            location: "sand",
            lastlocation: "sand",
            speed: userspeed,
        }
    });

}
