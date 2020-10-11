import React, { useState } from 'react'
import './ScriptEditor.css'
import Toolbox from '../../components/Toolbox/Toolbox'
import ArrowUp from '../../assets/icons/arrow-up-solid.svg'
import ArrowDown from '../../assets/icons/arrow-down-solid.svg'
import ArrowLeft from '../../assets/icons/arrow-left-solid.svg'
import ArrowRight from '../../assets/icons/arrow-right-solid.svg'
import Loop from '../../assets/icons/redo-solid.svg'
import Braces from '../../assets/icons/curly-brackets.svg'
import Workbench from '../../components/Workbench/Workbench'
import { DragDropContext } from 'react-beautiful-dnd'
import _ from 'lodash'


const ScriptEditor = () => {
    const [state, setState] = useState({
        arrowUp: {
            icon: ArrowUp,
            id: 'arrowUp',
            function: false,
            location: ['toolbox']
        },
        arrowDown: {
            icon: ArrowDown,
            id: 'arrowDown',
            function: false,
            location: ['toolbox', 'workbench']
        },
        arrowRight: {
            icon: ArrowRight,
            id: 'arrowRight',
            function: false,
            location: ['toolbox']
        },
        arrowLeft: {
            icon: ArrowLeft,
            id: 'arrowLeft',
            function: false,
            location: ['toolbox']
        },
        braces: {
            icon: Braces,
            id: 'braces',
            function: true,
            location: ['toolbox']
        },
        loop: {
            icon: Loop,
            id: 'loop',
            function: true,
            location: ['toolbox', 'workbench']
        }
    })

    const benchControls = _.filter(state, data => {
        if (data.location.includes("workbench")) {
            return state
        }
    })


    const [benchCtrlState, setbenchCtrlState] = useState(
        { ...benchControls }
    )

    /****************************************************************************
     * create a state containing a collection of all controls that includes
        workbench in their locations array
    * render workbench controls using state
    * Get index of controls
    

    /*************************************************************************** */


    const dragEndHandler = ({ destination, source, draggableId }) => {

        console.log('from', source)
        console.log('to', destination)

        const dragKey = draggableId.split('-')[1]
        const motionCopy = { ...benchCtrlState[source.index]}

        if (!destination) {
            return
        }

        if (destination.index === source.index && destination.droppableId === source.droppableId) {
            return
        }


        setState(prev => {
            prev = { ...prev }

            if (source.droppableId === "toolbox-col" && !prev[dragKey].location.includes("workbench")) {
                prev[dragKey].location.push("workbench")
            }

            return prev
        })

        setbenchCtrlState(prev => {
            prev = { ...prev }

            if (source.droppableId === destination.droppableId && source.index !== destination.index) {
                // console.log(prev[source.index])

                console.log(motionCopy)
                // prev[source.index].splice(destination.index, 0, motionCopy)
            }
            return prev
        })
    }


    return (
        <DragDropContext onDragEnd={dragEndHandler}>
            <Toolbox controls={state} />
            <Workbench controls={benchCtrlState} />
        </DragDropContext>
    )
}


export default ScriptEditor