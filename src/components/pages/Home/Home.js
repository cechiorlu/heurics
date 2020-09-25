import React from 'react'
import Canvas from '../../Canvas/Canvas'
import GameMenu from '../../GameMenu/GameMenu'
import Toolbox from '../../Toolbox/Toolbox'
import ScriptEditor from '../../../containers/ScriptEditor/ScriptEditor'
import './Home.css'

const Home = () => {
    return (
        <div className="container">
            <div className="wrapper">
                <Canvas />
                <GameMenu />
            </div>
            <Toolbox />
            <ScriptEditor />
        </div>
    )
}


export default Home