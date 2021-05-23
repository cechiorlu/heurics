import React from 'react'
import GreenFlag from '../../assets/icons/green-flag.svg'
import RedFlag from '../../assets/icons/red-flag.svg'
import thbg from '../../assets/images/treasure_bg.png'
import Grid from './Grid/Grid'
import './Canvas.css'

const Canvas = ({ gameMode, benchControls, braceControls, gameStart, dispatch }) => {

    function handleStart() {
        dispatch({ type: 'SET_GAME_START', gameStart: true })
    }

    function handleStop() {
        dispatch({ type: 'SET_GAME_START', gameStart: false })
    }

    const bgStyle = {
        backgroundImage: `url(${gameMode === 'treasure-hunt' ? thbg : 'ccbg'})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }

    return (
        <div className="canvas" style={bgStyle} >
            <div className="game_flags">
                <img src={GreenFlag} alt="start" className="flag green" onClick={() => handleStart()} />
                <img src={RedFlag} alt="stop" className="flag red" onClick={() => handleStop()} />
            </div>
            <Grid benchControls={benchControls} braceControls={braceControls} gameStart={gameStart} dispatch={dispatch} />
        </div>
    )
}


export default Canvas