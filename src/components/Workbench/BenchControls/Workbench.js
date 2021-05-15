import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import { v4 } from 'uuid'
import './Workbench.css'
import Controls from './BenchControls/BenchControls';
import BraceTool from './BraceControls/BraceControls';
import LimitModal from '../ControlLimitModal/ControlLimitModal'

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
        // dispatch({ type: 'SET_DROP_DEPTH', dropDepth: data.toolboxControls[data.dragId].dropDepth + 1 })
    };

    // drag leave -----------------------------
    const handleDragLeave = e => {
        e.preventDefault();
        e.stopPropagation();

        // Reset style --------------------------------------------
        e.target.style['border-bottom'] = '';
        e.target.style['border-top'] = '';

        // dispatch({ type: 'SET_DROP_DEPTH', dropDepth: data.toolboxControls[data.dragId].dropDepth - 1 })
        // if (data.toolboxControls[data.dragId].dropDepth > 0) return
        // dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: false })
    };

    // drag over ----------------------------------
    const handleDragOver = e => {
        e.preventDefault();
        e.stopPropagation();

        let bounding = e.target.getBoundingClientRect()
        let offset = bounding.y + (bounding.height / 2)

        if (e.target.className !== 'bench-controls') {
            if (e.clientY - offset > 0) {
                e.target.style['border-bottom'] = 'solid 4px #5f33334d'
                e.target.style['border-top'] = ''
            } else {
                e.target.style['border-top'] = 'solid 4px #5f33334d'
                e.target.style['border-bottom'] = '';
            }
        } else {
            e.target.style['border-bottom'] = '';
            e.target.style['border-top'] = '';
        }


        if (e.target.parentElement.className === "bench-controls") {
            dispatch({ type: 'SET_DRAG_OVER', dragOver: e.target.id })
        }
    };

    // drop --------------------------------
    const handleDrop = e => {
        e.preventDefault();
        e.stopPropagation();

        const getDropText = e.dataTransfer.getData('text')
        const genericId = getDropText.split(' ')[0]
        const dropItem = data.toolboxControls[genericId]
        const updatedDropItem = { ...dropItem, id: genericId + v4() }  //updates the id for workbench controls
        let benchList = data.benchControls


        // toolbox to workbench  -------------------------------
        // This block controls the drop from toolbox to workbench
        if (data.dragSource === "toolbox-controls") {
            if (!dropItem.function) {
                if (benchList.length < 10) {
                    dispatch({ type: 'SET_BENCH_CONTROLS', benchControls: [...benchList, updatedDropItem] })
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
        if (data.dragSource === "bench-controls") {

            // Get index of dragged item
            const index1 = _.findIndex(benchList, function (o) { return o.id === data.dragId })

            // Get index(position) of dragged over item
            const index2 = _.findIndex(benchList, function (o) { return o.id === data.dragOver })

            const index3 = index2 - 1
            const wbDropItem = benchList[index1]

            if (wbDropItem) {
                let newBenchList = [...benchList]
                
                if (e.target.style['border-bottom'] !== '') {  // Insert drag element below curr hover;

                    e.target.style['border-bottom'] = ''

                    newBenchList.splice(index2, 0, wbDropItem)
                    
                    dispatch({ type: 'SET_BENCH_CONTROLS', benchControls: newBenchList })

                } else {   // Insert drag element above curr hover

                    e.target.style['border-top'] = ''

                    benchList.splice(index3, 0, wbDropItem)

                    dispatch({ type: 'SET_BENCH_CONTROLS', benchControls: newBenchList })

                }
            }
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

                <Controls controls={data.benchControls} location="workbench" dispatch={dispatch} />
                <BraceTool>
                    <Controls controls={data.braceControls} location="workbench-brace" />
                </BraceTool>
            </div>
            <LimitModal isOpen={modalOpen} />
        </>
    )
}


export default Workbench