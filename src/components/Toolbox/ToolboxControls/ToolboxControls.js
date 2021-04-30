import React from 'react'
import _ from 'lodash'
import './ToolboxControls.css'


function ToolboxControls({ controls, location, dispatch }) {

    // toolbox dragstart -------------------------------------------
    const handleDragStart = (e) => {
        e.stopPropagation()
        e.dataTransfer.effectAllowed = 'copyMove'
        e.dataTransfer.setData('text', e.target.id)
        
        dispatch({ type: 'SET_DRAG_ID', dragId: e.target.id })
        dispatch({ type: 'SET_DRAG_SOURCE', dragSource: e.target.parentElement.className })
    }

    return (
        <div className="toolbox-controls">
            {_.map(controls, (data, key) => {
                return (
                    <img alt='' src={data.icon}
                        className={`${location}-item`}
                        id={data.id}
                        key={key} draggable={true}
                        onDragStart={e => handleDragStart(e)} />
                )
            })}
        </div >
    )
}

export default ToolboxControls
