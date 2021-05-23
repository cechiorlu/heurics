import React, { useState, useEffect } from 'react'
import LimitModal from '../../ControlLimitModal/ControlLimitModal'
import _ from 'lodash'
import { v4 } from 'uuid'
import './BraceControls.css'


function BraceControls({ data, dispatch }) {

    // Clear bench list ----------------------------------
    const clearList = e => {
        e.preventDefault()

        dispatch({ type: 'SET_BRACE_CONTROLS', braceControls: [] })
    }

    // Control-limit modal --------------------------------
    const [modalOpen, setModalOpen] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setModalOpen(false)
        }, 1800)
        return () => clearTimeout(timer);
    }, [modalOpen]);


    // brace controls drag start ------------------------------------
    const handleDragStart = (e) => {
        e.stopPropagation()
        e.dataTransfer.effectAllowed = 'copyMove'

        e.dataTransfer.setData('text', e.target.id)
        dispatch({ type: 'SET_DRAG_ID', dragId: e.target.id })
        dispatch({ type: 'SET_DRAG_SOURCE', dragSource: e.target.parentElement.className })

        // delete item on drag
        let controls = data.braceControls
        let index = _.findIndex(controls, function (o) { return o.id === e.target.id })

        const dragItem = controls[index]
        if (!dragItem.function) {
            controls.splice(index, 1)
            dispatch({ type: 'SET_BRACE_CONTROLS', braceControls: controls })
        }

        // // set drag image --------------------------------------------------
        // var img = new Image();
        // img.src = data.icon;
        // e.dataTransfer.setDragImage(img, 50, 30)

    }

    // drag over ----------------------------------
    const handleDragOver = e => {
        e.preventDefault();
        e.stopPropagation();

        let bounding = e.target.getBoundingClientRect()
        let offset = bounding.y + (bounding.height / 2)

        if (e.target.className !== 'brace-controls') {
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


        if (e.target.parentElement.className === "brace-controls") {
            dispatch({ type: 'SET_DRAG_OVER', dragOver: e.target.id })
        }
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


    // // drop --------------------------------
    const handleDrop = e => {
        e.preventDefault();
        e.stopPropagation();

        const getDropText = e.dataTransfer.getData('text')
        let genericId = getDropText.split(' ')[0]
        const dropItem = data.toolboxControls[genericId]
        const updatedDropItem = { ...dropItem, id: genericId + ' ' + v4() }  //updates the id for workbench controls
        let braceList = data.braceControls


        // toolbox to workbench  -------------------------------
        // This block controls the drop from toolbox to workbench
        if (data.dragSource === "toolbox-controls" || data.dragSource === "bench-controls") {
            if (!dropItem.function) {
                if (braceList.length < 4) {
                    dispatch({ type: 'SET_BRACE_CONTROLS', braceControls: [...braceList, updatedDropItem] })
                }
                else {
                    // alert('Try using loops and braces')
                    setModalOpen(true)
                }
            }
            else {
                // render drop item as a function
                alert('this is where you draw the repeat wrap')
            }
        }

        // workbench sorting --------------------------------------
        if (data.dragSource === "brace-controls") {

            // Get dragged item
            genericId = data.dragId.split(' ')[0]


            // Get index(position) of dragged over item
            const index2 = _.findIndex(braceList, function (o) { return o.id === data.dragOver })

            const index1 = index2 - 1

            if (updatedDropItem) {
                let newBraceList = [...braceList]

                if (e.target.style['border-bottom'] !== '') {  // Insert drag element below curr hover;

                    e.target.style['border-bottom'] = ''

                    newBraceList.splice(index2, 0, updatedDropItem)

                    dispatch({ type: 'SET_BRACE_CONTROLS', braceControls: newBraceList })

                } else {   // Insert drag element above curr hover

                    e.target.style['border-top'] = ''

                    braceList.splice(index1, 0, updatedDropItem)

                    dispatch({ type: 'SET_BRACE_CONTROLS', braceControls: newBraceList })

                }
            }
        }

        e.dataTransfer.clearData();
    };


    return (
        <>
            <div className="brace-controls"
                onDrop={e => handleDrop(e)}
                onDragOver={e => handleDragOver(e)}
                onDragLeave={e => handleDragLeave(e)}>

                {_.map(data.braceControls, (data, key) => {
                    return (
                        <img alt='' src={data.icon}
                            className={`brace-item grab`}
                            id={`${data.id}`}
                            key={key} draggable={true}
                            onDragStart={e => handleDragStart(e)} />
                    )
                })}
                {/* <img src={trash} alt="x" className="clear-list" width="22px" height="22px" onClick={e => clearList(e)} /> */}
            </div >
            <LimitModal isOpen={modalOpen} />
        </>
    )
}

export default BraceControls