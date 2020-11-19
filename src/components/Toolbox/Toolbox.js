import React from 'react';
import './Toolbox.css';
import Controls from '../Controls/Controls';

const Toolbox = (props) => {
    return (
        <div className="toolbox">
            <Controls controls={props.controls} location="toolbox" />
        </div >
    )
}


export default Toolbox