import React from 'react';
import './Toolbox.css';
import ToolboxControls from './ToolboxControls/ToolboxControls';

const Toolbox = ({ controls, dispatch }) => {
   
    return (
        <div className="toolbox">
            <ToolboxControls controls={controls} location="toolbox" dispatch={dispatch}/>
        </div >
    )
}


export default Toolbox