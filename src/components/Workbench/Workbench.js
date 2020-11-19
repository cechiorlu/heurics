import React from 'react'
import './Workbench.css'
import Controls from '../Controls/Controls';
import BraceTool from './BraceTool/BraceTool';

const Workbench = ({ data, dispatch }) => {

    const handleDragEnter = e => {
        e.preventDefault();
        e.stopPropagation();
        dispatch({ type: 'SET_DROP_DEPTH', dropDepth: data.dropDepth + 1 })
    };

    const handleDragLeave = e => {
        e.preventDefault();
        e.stopPropagation();
        dispatch({ type: 'SET_DROP_DEPTH', dropDepth: data.dropDepth - 1 });
        if (data.dropDepth > 0) return
        dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: false })
    };

    const handleDragOver = e => {
        e.preventDefault();
        e.stopPropagation();
        e.dataTransfer.dropEffect = 'copy';
        dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: true });
    };

    const handleDrop = e => {
        e.preventDefault();
        e.stopPropagation();
        const data = e.dataTransfer.getData("application/json")
        console.log(data)
    };

    return (
        <div className="workbench"
            onDrop={e => handleDrop(e)}
            onDragOver={e => handleDragOver(e)}
            onDragEnter={e => handleDragEnter(e)}
            onDragLeave={e => handleDragLeave(e)}>

            <Controls controls={data.benchControls} location="workbench" />
            <BraceTool>
                <Controls controls={data.braceControls} location="workbench-brace" />
            </BraceTool>
        </div>
    )
}


export default Workbench