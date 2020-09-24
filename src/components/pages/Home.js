import React from 'react'
import Canvas from '../Canvas'
import GameMenu from '../GameMenu'
import Toolbox from '../Toolbox'
import ScriptEditor from '../ScriptEditor'

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