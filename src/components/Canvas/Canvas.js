import React from 'react'
import GreenFlag from '../../assets/icons/green-flag.svg'
import RedFlag from '../../assets/icons/red-flag.svg'
import './Canvas.css'

const Canvas = () => {
    function handleStart(){
        alert('Start Game')
    }

    function handleStop(){
        alert('Stop game')
    }

    return (
        <div className="canvas">
            <div className="game_flags">
                <img src={GreenFlag} alt="start" className="flag green" onClick={() => handleStart()} />
                <img src={RedFlag} alt="stop" className="flag red" onClick={() => handleStop()} />
            </div>
            <div className="canvas_grid"></div>
        </div>
    )
}


export default Canvas