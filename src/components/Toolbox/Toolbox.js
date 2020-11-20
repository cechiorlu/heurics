import React from 'react';
import './Toolbox.css';
import Controls from './ToolboxControls/ToolboxControls';

const Toolbox = ({ controls, dispatch }) => {
   
    return (
        <div className="toolbox">
            <Controls controls={controls} location="toolbox" dispatch={dispatch}/>
        </div >
    )
}


export default Toolbox