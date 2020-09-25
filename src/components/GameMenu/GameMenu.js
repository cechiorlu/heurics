import React from 'react'
import Map from '../../assets/images/treasure_map.jpg'
import Chickens from '../../assets/images/chickens.png'
import './GameMenu.css'


const GameMenu = () => {
    return (
        <div className="menu">
            <h3>Choose an adventure:</h3>
            <div className="game_options">
                <div
                    className="treasure_hunt"
                    style={{ backgroundImage: `url(${Map})` }}>
                    <div
                        className="treasure_hunt_img">
                        <h4>Treasure Hunt</h4>
                    </div>
                </div>
                <div
                    className="cross_chickens"
                    style={{ backgroundImage: `url(${Chickens})` }}>
                    <div className="cross_chickens_img">
                        <h4>Cross the Chickens</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default GameMenu