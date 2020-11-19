import React from 'react'
import './Instructions.css'

const Instructions = () => {
    return (
        <div className="instructions">
            <h2>Instructions</h2>
            <p>
                adventure time!
                To start a game, you need to choose an adventure; cross chickens or hunt treasure.
            </p>
            <p>
                The game is played by dragging and dropping controls from the "toolbox" to the "workspace"
            </p>
            {/* short clip goes here */}
            <p>
                Moove
            </p>
            <p>
                Over and over
            </p>
            <p>
                Do that again
                Do not put a function in a function
            </p>
            <p>
                Green means go!
            </p>
            <p>
                Red means stop
            </p>
            <p>
                Remember there is a whole lot more to playing than just winning
                Whatever you do, whether you choose to cross chickens or hunt treasure out in the open seas, be sure to Have fun!
            </p>
        </div>
    )
}


export default Instructions