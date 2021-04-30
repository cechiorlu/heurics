import React, { useState, useEffect } from 'react'
import './Workbench.css'
import Controls from './BenchControls/BenchControls';
import BraceTool from './BraceTool/BraceTool';
import LimitModal from './ControlLimitModal/ControlLimitModal'

const Workbench = ({ data, dispatch }) => {

    // Control-limit modal --------------------------------
    const [modalOpen, setModalOpen] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setModalOpen(false)
        }, 2000)
        return () => clearTimeout(timer);
    }, [modalOpen]);

    // drag enter ------------------------------
    const handleDragEnter = e => {
        e.preventDefault();
        e.stopPropagation();
        dispatch({ type: 'SET_DROP_DEPTH', dropDepth: data.toolboxControls[data.dragId].dropDepth + 1 })
    };

    // drag leave -----------------------------
    const handleDragLeave = e => {
        e.preventDefault();
        e.stopPropagation();
        dispatch({ type: 'SET_DROP_DEPTH', dropDepth: data.toolboxControls[data.dragId].dropDepth - 1 })
        if (data.toolboxControls[data.dragId].dropDepth > 0) return
        dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: false })
    };

    // drag over ----------------------------------
    const handleDragOver = e => {
        e.preventDefault();
        e.stopPropagation();
        dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: true })
    };

    // drop --------------------------------
    const handleDrop = e => {
        e.preventDefault();
        e.stopPropagation();
        const getDropText = e.dataTransfer.getData('text')
        const genericId = getDropText.split(' ')[0]
        const dropItem = data.toolboxControls[genericId]
        const updatedDropItem = { ...dropItem, id:getDropText}  //updates the id for workbench controls
      
        // toolbox - workbench -------------------------------
        // This block controls the drop from toolbox to workbench
        if(data.dragSource === "toolbox-controls"){
            if (!dropItem.function) {
                if (data.benchControls.length < 10) {
                    dispatch({ type: 'SET_BENCH_CONTROLS', benchControls: [...data.benchControls, updatedDropItem] })
                } 
                else {
                    // alert('Try using loops and braces')
                    setModalOpen(true)
                }
            } 
            else {
                // render drop item as a function
                alert('this is where you draw the function wrap')
            }
        }

        // workbench sorting --------------------------------------
        //This block controls the bench editing/sorting operations
        if(data.dragSource === "bench-controls"){
            // some pseudo code
            // if not drop zone (bench controls), remove from bench controls list, else if in drop zone, order            
        }
        
        e.dataTransfer.clearData();
    };

    return (
        <>
            <div className="workbench"
                onDrop={e => handleDrop(e)}
                onDragOver={e => handleDragOver(e)}
                onDragEnter={e => handleDragEnter(e)}
                onDragLeave={e => handleDragLeave(e)}>

                <Controls controls={data.benchControls} location="workbench" dispatch={dispatch}/>
                <BraceTool>
                    <Controls controls={data.braceControls} location="workbench-brace" />
                </BraceTool>
            </div>
            <LimitModal isOpen={modalOpen} />
        </>
    )
}


export default Workbench