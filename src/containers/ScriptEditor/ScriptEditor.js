import React, { useReducer } from 'react'
import './ScriptEditor.css'
import Toolbox from '../../components/Toolbox/Toolbox'
import ArrowUp from '../../assets/icons/SVG/Up.svg'
import ArrowDown from '../../assets/icons/SVG/Down.svg'
import ArrowLeft from '../../assets/icons/SVG/Left.svg'
import ArrowRight from '../../assets/icons/SVG/Right.svg'
import Loop from '../../assets/icons/SVG/Arrow.svg'
import Braces from '../../assets/icons/SVG/Bracket.svg'
import Workbench from '../../components/Workbench/Workbench'
import _ from 'lodash'

const initialState = {
    dragId: '',

    toolboxControls: {
        arrowUp: {
            icon: ArrowUp,
            id: 'arrowUp',
            function: false,
            dropDepth: 0,
            inDropZone: false,
        },
        arrowDown: {
            icon: ArrowDown,
            id: 'arrowDown',
            function: false,
            dropDepth: 0,
            inDropZone: false
        },
        arrowRight: {
            icon: ArrowRight,
            id: 'arrowRight',
            function: false,
            dropDepth: 0,
            inDropZone: false
        },
        arrowLeft: {
            icon: ArrowLeft,
            id: 'arrowLeft',
            function: false,
            dropDepth: 0,
            inDropZone: false
        },
        loop: {
            icon: Loop,
            id: 'loop',
            function: true,
            dropDepth: 0,
            inDropZone: false
        },
        braces: {
            icon: Braces,
            id: 'braces',
            function: true,
            dropDepth: 0,
            inDropZone: false
        }
    },
    benchControls: [],
    braceControls: []
}

function reducer(state, action) {
    switch (action.type) {
        case 'SET_DRAG_ID':
            return { ...state, dragId: action.dragId }
        case 'SET_DROP_DEPTH':
            const scriptState = { ...state }
            scriptState.toolboxControls[scriptState.dragId].dropDepth = action.dropDepth
            return scriptState
        case 'SET_IN_DROP_ZONE':
            const spreadState = { ...state }
            spreadState.toolboxControls[spreadState.dragId].inDropZone = action.inDropZone
            return spreadState
        case 'SET_BENCH_CONTROLS':
            return { ...state, benchControls: action.benchControls }
        case 'SET_BRACE_CONTROLS':
            return { ...state, braceControls: action.braceControls }
        default:
            return state;
    }
}

const ScriptEditor = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // const benchControls = _.filter(state, data => {
    //     if (data.dropDepth === 1) {
    //         return state
    //     }
    // })

    const benchControls = state.benchControls
    const braceControls = state.braceControls

    const script = { benchControls, braceControls }

    /****************************************************************************
     * benchControls filters from initialState all the controls that have been
     dragged on to the workbench

     * braceControls filters from initialState all the controls that have been 
     dragged into the braces
    /*************************************************************************** */


    return (
        <>
            <Toolbox controls={initialState.toolboxControls} dispatch={dispatch} />
            <Workbench data={state} dispatch={dispatch} />
        </>
    )
}


export default ScriptEditor