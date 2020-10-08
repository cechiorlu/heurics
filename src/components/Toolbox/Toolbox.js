import React from 'react';
import Controls from './Controls/Controls'
import './Toolbox.css';

const Toolbox = () => {
    return (
        <div className="toolbox">
            <div className="toolbox_item">
                <Controls />
            </div>
        </div>
    )
}


export default Toolbox