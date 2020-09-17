import React from "react";

const Instructions = () => {
    return (
        <div id="instructions">
        <h1>Instructions:</h1>
        <p>The aim of the game - to get everyone across the river
           while the torch is alight.</p>

        <p>Four people come to a river in the night. 
           There is a narrow bridge, that can only hold two people at a time. 
           They have one torch and, because it's night, 
           the torch has to be used when crossing the bridge. 
           Person A can cross the bridge in 1 minute, B in 2 minutes, C in 5 minutes, and D in 8 minutes. 
           When two people cross the bridge together, they must move at the slower person's pace. 
           The question is, can they all get across the bridge if the torch lasts only 15 minutes?</p>
        
        <p>Click on the avatar of the person to move them on/off the bridge. 
            The torch will automatically move to the correct side.
            When you have decided on who will cross on that time, click on the button "Cross". 
            The timer will update to reflect how much time you have left.
            To start again, press <strong>"Reset"</strong></p>

        </div>
    );
}

export const HelpButton = (props) => {
    const [state, setState] = React.useState(false);
    const toggleFunction = () => setState(!state);

    return (
        <div>
            <button id="helpButton" onClick={toggleFunction}>?</button>
            {state ? <Instructions /> : null}
        </div>
    )
}