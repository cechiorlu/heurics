import React, { useState } from 'react'
import _ from 'lodash'
import { Draggable } from 'react-beautiful-dnd';
import './Controls.css'



function Controls(props) {

    let count = -1;

    return (
        <div className="controls">
            {_.map(props.controls, (data, key) => {
                ++count
                return (
                    < Draggable key={key} index={count} draggableId={`${props.location}-${data.id}`} >
                        {(provided, snapshot) => {
                            return (
                                <div
                                    className={`${props.location}-item`}
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                >
                                    <img alt='' src={data.icon} className="fas" />
                                </div>
                            )
                        }}
                    </Draggable>
                )
            })}
        </div >
    )
}

export default Controls
