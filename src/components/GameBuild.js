/* eslint-disable default-case */
import React, { Children } from "react";
import { HelpButton } from "./help.js";
import { getData } from "../utils/data.js";
import { render } from "react-dom";

// const players = JSON.parse(window.localStorage.getItem("player_token"));

// const countChildren = (elem) => Children.count(elem);

// try! => if (bridgeplayer < 2)

//  bridge => birdgeplayrs === 2

const Timer = (props) => {
  const [timeLeft, setTimeLeft] = React.useState(15);
  // but how do we change timeleft?? it changes when we press cross, get the speeds of the players on the bridge, and choose the larger value
  // max(props[0].speed, props[1].speed)
  return <div className="timer">{timeLeft}:00</div>;
};

const movePlayer = (playerObj, playerSet, updatePlayerObject) => {
  switch (playerObj.location) {
    case "sand":
      let newObj = updatePlayerObject(playerObj, "bridge", "location");
      playerSet(newObj);
      playerSet(updatePlayerObject(newObj, "sand", "lastlocation"));
      break;
    case "grass":
      let newObj2 = updatePlayerObject(playerObj, "bridge", "location");
      playerSet(newObj2);
      playerSet(updatePlayerObject(newObj2, "grass", "lastlocation"));
      break;
    case "bridge":
      if (playerObj.lastlocation === "sand")
        playerSet(updatePlayerObject(playerObj, "sand", "location"));
      if (playerObj.lastlocation === "grass")
        playerSet(updatePlayerObject(playerObj, "grass", "location"));
      break;
    //no default
  }
  //   return playerObj; do we need this?
};

const Player = (info) => {
  return (
    //add event listener to figure to move stuff
    <figure>
      <img src={info.image} alt="{info.name}" />
      <figcaption>
        {info.name} | {info.speed}
      </figcaption>
    </figure>
  );
};
//change function to add
const Avatar = (props) => {
  const [userData, setUserData] = React.useState(null);

  React.useEffect(() => {
    getData(props.children.username).then((data) => setUserData(data));
  }, []);
  if (!userData) return <p>Loading..</p>;

  const { avatar_url, name } = userData;
  return (
    //add event listener to figure to move stuff
    <figure>
      <img src={avatar_url} alt="{name}" />
      <figcaption>
        {name} | {props.children.speed}
      </figcaption>
    </figure>
  );
};

const Game = ({ player1, player2, player3, player4, updatePlayerObject }) => {
  console.log(
    "Props: ",
    player1,
    player2,
    player3,
    player4,
    updatePlayerObject
  );

  React.useEffect(() => {}, []);

  //might be another more efficient way to do this when more time available - use map
  return (
    <main className="grid-container">
      <div className="sand">
        {player1.playerOne.location === "sand" ? (
          <div
            className="player"
            onClick={() =>
              movePlayer(
                player1.playerOne,
                player1.setPlayerOne,
                updatePlayerObject
              )
            }
          >
            <Avatar>{player1.playerOne}</Avatar>
          </div>
        ) : null}
        {player2.playerTwo.location === "sand" ? (
          <div
            className="player"
            onClick={() => {
              movePlayer(
                player2.playerTwo,
                player2.setPlayerTwo,
                updatePlayerObject
              );
            }}
          >
            <Avatar>{player2.playerTwo}</Avatar>
          </div>
        ) : null}
        {player3.playerThree.location === "sand" ? (
          <div
            className="player"
            onClick={() => {
              movePlayer(
                player3.playerThree,
                player3.setPlayerThree,
                updatePlayerObject
              );
            }}
          >
            <Avatar onClick="">{player3.playerThree}</Avatar>
          </div>
        ) : null}
        {player4.playerFour.location === "sand" ? (
          <div
            className="player"
            onClick={() => {
              movePlayer(
                player4.playerFour,
                player4.setPlayerFour,
                updatePlayerObject
              );
            }}
          >
            <Avatar onClick="">{player4.playerFour}</Avatar>
          </div>
        ) : null}
      </div>
      <HelpButton />
      <div className="panel">
        <Timer />
      </div>

      <div className="bridge">
        {player1.playerOne.location === "bridge" ? (
          <div
            className="player"
            onClick={() =>
              movePlayer(
                player1.playerOne,
                player1.setPlayerOne,
                updatePlayerObject
              )
            }
          >
            <Avatar>{player1.playerOne}</Avatar>
          </div>
        ) : null}
        {player2.playerTwo.location === "bridge" ? (
          <div
            className="player"
            onClick={() =>
              movePlayer(
                player2.playerTwo,
                player2.setPlayerTwo,
                updatePlayerObject
              )
            }
          >
            <Avatar onClick="">{player2.playerTwo}</Avatar>
          </div>
        ) : null}
        {player3.playerThree.location === "bridge" ? (
          <div
            className="player"
            onClick={() =>
              movePlayer(
                player3.playerThree,
                player3.setPlayerThree,
                updatePlayerObject
              )
            }
          >
            <Avatar onClick="">{player3.playerThree}</Avatar>
          </div>
        ) : null}
        {player4.playerFour.location === "bridge" ? (
          <div
            className="player"
            onClick={() =>
              movePlayer(
                player4.playerFour,
                player4.setPlayerFour,
                updatePlayerObject
              )
            }
          >
            <Avatar onClick="">{player4.playerFour}</Avatar>
          </div>
        ) : null}
      </div>

      <div className="grass">
        {player1.location === "grass" ? (
          <Avatar onClick="">{player1.playerOne}</Avatar>
        ) : null}
        {player2.location === "grass" ? (
          <Avatar onClick="">{player2.playerTwo}</Avatar>
        ) : null}
        {player3.location === "grass" ? (
          <Avatar onClick="">{player3.playerThree}</Avatar>
        ) : null}
        {player4.location === "grass" ? (
          <Avatar onClick="">{player4.playerFour}</Avatar>
        ) : null}
      </div>
    </main>
  );
};

export default Game;
