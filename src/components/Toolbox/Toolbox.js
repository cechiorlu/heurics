import React from 'react';
import Controls from './Controls/Controls'
import './Toolbox.css';
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

const Toolbox = () => {
    return (
        <DragDropContext onDragEnd={e => console.log(e)}>
            <div className="toolbox">
                <Droppable droppableId="toolbox-col">
                    {provided => {
                        return (
                            <div
                                style={{ height:"inherit" }}
                                ref={provided.innerRef}
                                {...provided.droppableProps}>
                                <Controls />
                            </div>
                        )
                    }}
                </Droppable>
            </div>
        </DragDropContext>
    )
}


export default Toolbox