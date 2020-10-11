import React from 'react';
import './Toolbox.css';
import { Droppable } from 'react-beautiful-dnd'
import Controls from '../Controls/Controls';

const Toolbox = (props) => {
    return (
        <div className="toolbox">
            <Droppable droppableId="toolbox-col">
                {provided => {
                    return (
                        <div
                            style={{ height: "inherit" }}
                            ref={provided.innerRef}
                            {...provided.droppableProps}>
                                <Controls controls={props.controls} location="toolbox" />
                        </div>
                    )
                }}
            </Droppable>
        </div>
    )
}


export default Toolbox