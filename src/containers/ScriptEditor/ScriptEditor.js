import React from 'react'
import './ScriptEditor.css'
import Toolbox from '../../components/Toolbox/Toolbox'
import Workbench from '../../components/Workbench/Workbench'

const ScriptEditor = ({data, dispatch}) => {

    return (
        <>
            <Toolbox controls={data.toolboxControls} dispatch={dispatch} />
            <Workbench data={data} dispatch={dispatch} />
        </>
    )
}


export default ScriptEditor