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
// const getPlayerObject = () => {
//         getData(player.username).then(data => {
//             player.name = data.name;
//             player.image = data.avatar_url
//             console.log(player)
//         })
//     })
//     console.log(array);
//     return array;
// }


const Avatar = (props) => {
    // const [avatar, setAvatar] = React.useState(null);
    // const [playerName, setPlayerName] = React.useState(null);
    const [userData, setUserData] = React.useState(null)

    React.useEffect( ()=> {
        getData(props.children.username).then(data => setUserData(data));
    }, [])
    if (!userData) return <img src="./../loading.png" />

    const { avatar_url, name } = userData;
    return ( //add event listener to figure to move stuff
        <figure>
           <img src={avatar_url} alt="{name}" />
            <figcaption>{name} | {props.children.speed}</figcaption> 
        </figure>
    )
  
}



const Player = (info) => {
    return ( //add event listener to figure to move stuff
        <figure>
           <img src={info.image} alt="{info.name}" />
            <figcaption>{info.name} | {info.speed}</figcaption> 
        </figure>
    )
    }
//avatar returns player object? - wouldnt we want to save that?


// playerObject.map {
    
// }


// playersobject.filter(player=> if player.location = sand ).map(playr => <)

//choosing which players to move on/off the bridge


export {playersArray}