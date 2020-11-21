import React, { useState, useEffect } from 'react'
import './Workbench.css'
import Controls from './BenchControls/BenchControls';
import BraceTool from './BraceTool/BraceTool';
import LimitModal from './ControlLimitModal/ControlLimitModal'

const Workbench = ({ data, dispatch }) => {

    //Control-limit modal
    const [modalOpen, setModalOpen] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setModalOpen(false)
        }, 2000)
        return () => clearTimeout(timer);
    }, [modalOpen]);

    const handleDragEnter = e => {
        e.preventDefault();
        e.stopPropagation();
        dispatch({ type: 'SET_DROP_DEPTH', dropDepth: data.toolboxControls[data.dragId].dropDepth + 1 })
    };

    const handleDragLeave = e => {
        e.preventDefault();
        e.stopPropagation();
        dispatch({ type: 'SET_DROP_DEPTH', dropDepth: data.toolboxControls[data.dragId].dropDepth - 1 })
        if (data.toolboxControls[data.dragId].dropDepth > 0) return
        dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: false })
    };

    const handleDragOver = e => {
        e.preventDefault();
        e.stopPropagation();
        dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: true })
    };


    const handleDrop = e => {
        e.preventDefault();
        e.stopPropagation();
        const dropItem = e.dataTransfer.getData('text')
        const ctrlItem = data.toolboxControls[dropItem]
        if (!ctrlItem.function) {
            if (data.benchControls.length < 10) {
                dispatch({ type: 'SET_BENCH_CONTROLS', benchControls: [...data.benchControls, ctrlItem] })
            } 
            else {
                // alert('Try using loops and braces')
                setModalOpen(true)
            }
        } 
        else {
            alert('this is where you draw the function wrap')
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

                <Controls controls={data.benchControls} location="workbench" />
                <BraceTool>
                    <Controls controls={data.braceControls} location="workbench-brace" />
                </BraceTool>
            </div>
            <LimitModal isOpen={modalOpen} />
        </>
    )
}


export default Workbench