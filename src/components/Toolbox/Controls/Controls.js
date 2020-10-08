import React, { useState } from 'react'
import ArrowUp from '../../../assets/icons/arrow-up-solid.svg'
import ArrowDown from '../../../assets/icons/arrow-down-solid.svg'
import ArrowLeft from '../../../assets/icons/arrow-left-solid.svg'
import ArrowRight from '../../../assets/icons/arrow-right-solid.svg'
import Loop from '../../../assets/icons/redo-solid.svg'
import Braces from '../../../assets/icons/curly-brackets.svg'
import _ from 'lodash'
import { Draggable } from 'react-beautiful-dnd';
import './Controls.css'



function Controls() {
    const [state, setState] = useState({
        arrowUp: {
            icon: ArrowUp,
            id: 'arrowUp',
            function: false,
            index: 0
        },
        arrowDown: {
            icon: ArrowDown,
            id: 'arrowDown',
            function: false,
            index: 1
        },
        arrowRight: {
            icon: ArrowRight,
            id: 'arrowRight',
            function: false,
            index: 2
        },
        arrowLeft: {
            icon: ArrowLeft,
            id: 'arrowLeft',
            function: false,
            index: 3
        },
        braces: {
            icon: Braces,
            id: 'braces',
            function: true,
            index: 4
        },
        loop: {
            icon: Loop,
            id: 'loop',
            function: true,
            index: 5
        }
    })


    return (
        <div className="controls">
            {_.map(state, (data, key) => {
                return (
                    <Draggable key={key} index={data.index} draggableId={data.id}>
                        {(provided, snapshot) => {
                            return (
                                <div
                                    className="toolbox-item"
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
        </div>
    )
}

export default Controls
