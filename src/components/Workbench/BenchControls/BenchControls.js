import React from 'react'
import _ from 'lodash'
import './BenchControls.css'
import {v4} from 'uuid'

function BenchControls({ controls, location, dispatch }) {

    // workbench drag start ------------------------------------
    const handleDragStart = (e) => {
        e.stopPropagation()
        e.dataTransfer.effectAllowed = 'move'
        let id = e.target.id.split(' ')[0]
        e.dataTransfer.setData('text', e.target.id)
        dispatch({ type: 'SET_DRAG_ID', dragId: id })
        dispatch({ type: 'SET_DRAG_SOURCE', dragSource: e.target.parentElement.className })
                     
        // Get index of drag item in controls array
        // set drag index
        // dispatch({ type: 'SET_DRAG_INDEX', dragIndex: e.target })
    }

    return (
        <div className="bench-controls">
            {_.map(controls, (data, key) => {
                return (
                    <img alt='' src={data.icon}
                        className={`${location}-item`}
                        id={`${data.id} ${v4()}`}
                        key={key} draggable={true}
                        onDragStart={e => handleDragStart(e)}/>
                )
            })}
        </div >
    )
}

export default BenchControls
