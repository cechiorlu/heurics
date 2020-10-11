import React from 'react'
import './Workbench.css'
import Controls from '../Controls/Controls';
import { Droppable } from 'react-beautiful-dnd'

const Workbench = (props) => {
    return (
        <Droppable droppableId="workbench-col">
            {provided => {
                return (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className="workbench">

                        <Controls controls={props.controls} location="workbench" />
                    </div>
                )
            }}
        </Droppable>
    )
}


export default Workbench