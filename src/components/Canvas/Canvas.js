import React from 'react'
import GreenFlag from '../../assets/icons/green-flag.svg'
import RedFlag from '../../assets/icons/red-flag.svg'
import './Canvas.css'

const Canvas = () => {
    return (
        <div className="canvas">
            <div className="game_flags">
                <img src={GreenFlag} alt="start" className="flag green" />
                <img src={RedFlag} alt="stop" className="flag red" />
            </div>
            <div className="canvas_grid"></div>
        </div>
    )
}


export default Canvas