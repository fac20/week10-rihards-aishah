import React from "react";
import {getData} from "../utils/data.js";
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

//takes an input of an array of player objects
const getPlayerObject = (array) => {
    array.forEach(player => {
        getData(player.username).then(data => {
            player.name = data.name;
            player.image = data.avatar_url
        })
    })
    
    return array;
}

// const Avatar = (props) => {
//     // const [avatar, setAvatar] = React.useState(null);
//     // const [playerName, setPlayerName] = React.useState(null);
//     const [userData, setUserData] = React.useState(null)

//     React.useEffect( ()=> {
//         getData(props.children).then(data => setUserData(data));
//     }, [])
//     if (!userData) return <img imgSrc="./../loading.png" />

//     const { avatar_url, name } = userData;
//     //   <img imgSrc={avatar_url} className="avatarimage" alt={name}/>
  
// }
// //avatar returns player object? - wouldnt we want to save that?


// playerObject.map {
    
// }


// playersobject.filter(player=> if player.location = sand ).map(playr => <)

//choosing which players to move on/off the bridge


export {playersArray, getPlayerObject}