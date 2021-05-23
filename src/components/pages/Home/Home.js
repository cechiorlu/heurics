import React from 'react'
import Canvas from '../../Canvas/Canvas'
import GameMenu from '../../GameMenu/GameMenu'
import ScriptEditor from '../../../containers/ScriptEditor/ScriptEditor'
import './Home.css'

const Home = ({ data, dispatch }) => {
    return (
        <div className="container">
            <div className="wrapper">
                <Canvas gameMode={data.gameMode} benchControls={data.benchControls} braceControls={data.braceControls} gameStart={data.gameStart} dispatch={dispatch} />
                <GameMenu gameMode={data.gameMode} dispatch={dispatch} />
            </div>
            <ScriptEditor data={data} dispatch={dispatch} />
        </div>
    )
}


export default Home