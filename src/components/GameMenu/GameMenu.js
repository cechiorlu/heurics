import React from 'react'
import Map from '../../assets/images/treasure_map.jpg'
import Chickens from '../../assets/images/chickens.png'
import './GameMenu.css'


const GameMenu = ({ dispatch }) => {

    function handleGameOption(e) {
        if (e.target.classList.contains('option_1')) {
            dispatch({ type: 'SET_GAME_MODE', gameMode: 'treasure-hunt' })
        }
        if (e.target.classList.contains('option_2')) {
            dispatch({ type: 'SET_GAME_MODE', gameMode: 'cross-chickens' })
        }
    }

    return (
        <div className="menu">
            <h3>Choose an adventure:</h3>
            <div className="game_options">
                <div
                    className="treasure_hunt"
                    onClick={(e) => handleGameOption(e)}
                    style={{ backgroundImage: `url(${Map})`, height: 'auto' }}>
                    <div
                        className="treasure_hunt_img option_1">
                        <h4 className="option_1">Treasure Hunt</h4>
                    </div>
                </div>
                <div
                    className="cross_chickens"
                    onClick={(e) => handleGameOption(e)}
                    style={{ backgroundImage: `url(${Chickens})`, height: 'auto' }}>
                    <div className="cross_chickens_img option_2">
                        <h4 className="option_2">Cross the Chickens</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default GameMenu