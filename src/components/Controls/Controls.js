import React from 'react'
import _ from 'lodash'
import './Controls.css'


function Controls(props) {
    const handleDragStart = (e, data) => {
        e.preventDefault();
        e.stopPropagation();
        console.log(e.target.parentElement.parentElement.parentElement)
    }

    return (
        <div className="controls">
            {_.map(props.controls, (data, key) => {
                return (
                    <img alt='' src={data.icon} 
                    className={`${props.location}-item`} 
                    key={key} draggable= {true} 
                    onDragStart={e => handleDragStart(e, data)} />
                )
            })}
        </div >
    )
}

export default Controls
