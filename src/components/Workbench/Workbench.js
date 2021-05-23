import React from 'react'
import _ from 'lodash'
import './Workbench.css'
import BenchControls from './BenchControls/BenchControls'
import BraceControls from './BraceControls/BraceControls'
import trash from '../../assets/icons/trash-solid.svg'

const Workbench = ({ data, dispatch }) => {

    const clearList = e => {
        e.preventDefault()

        dispatch({ type: 'SET_BENCH_CONTROLS', benchControls: [] })
        dispatch({ type: 'SET_BRACE_CONTROLS', braceControls: [] })
    }

    return (
        <div className="workbench">
            <BenchControls data={data} dispatch={dispatch} />
            <BraceControls data={data} dispatch={dispatch} />
            <img src={trash} alt="x" className="clear-list" width="22px" height="22px" onClick={e => clearList(e)} />
        </div>
    )
}


export default Workbench