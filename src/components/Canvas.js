import React from 'react'
import GreenFlag from '../icons/green-flag.svg'
import RedFlag from '../icons/red-flag.svg'

const Canvas = () => {
    return (
        <div className="canvas">
            <div className="game_flags">
                <img src={GreenFlag} alt="start" className="flag green" />
                <img src={RedFlag} alt="stop" className="flag red" />
            </div>
            <div class="canvas_grid"></div>
        </div>
    )
}


export default Canvas