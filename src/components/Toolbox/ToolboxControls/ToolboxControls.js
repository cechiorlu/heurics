import React from 'react'
import _ from 'lodash'
import './ToolboxControls.css'


function ToolboxControls({ controls, location, dispatch }) {

    // toolbox controls dragstart event -------------------------------------------
    const handleDragStart = (e, data) => {
        e.stopPropagation()
        e.dataTransfer.effectAllowed = 'copyMove'
        e.dataTransfer.setData('text', e.target.id)

        // set drag image --------------------------------------------------
        var img = new Image();
        img.src = data.icon;
        e.dataTransfer.setDragImage(img, 50, 30)

        dispatch({ type: 'SET_DRAG_ID', dragId: e.target.id })
        dispatch({ type: 'SET_DRAG_SOURCE', dragSource: e.target.parentElement.className })
    }

    return (
        <div className="toolbox-controls">
            {_.map(controls, (data, key) => {
                return (
                    <img alt='' src={data.icon}
                        className={`${location}-item grab`}
                        id={data.id}
                        key={key} draggable={true}
                        onDragStart={e => handleDragStart(e, data)} />
                )
            })}
        </div >
    )
}

export default ToolboxControls
