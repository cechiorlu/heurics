import React from 'react'
import Canvas from '../../Canvas/Canvas'
import GameMenu from '../../GameMenu/GameMenu'
import ScriptEditor from '../../../containers/ScriptEditor/ScriptEditor'
import './Home.css'

const Home = () => {
    return (
        <div className="container">
            <div className="wrapper">
                <Canvas />
                <GameMenu />
            </div>
            <ScriptEditor />
        </div>
    )
}


export default Home