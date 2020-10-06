import React from 'react';
import DownArrow from './Controls/DownArrow';
import FunctionBraces from './Controls/FunctionBraces';
import LeftArrow from './Controls/LeftArrow';
import Loop from './Controls/Loop';
import RightArrow from './Controls/RightArrow';
import UpArrow from './Controls/UpArrow';
// import Braces from '../../assets/icons/curly-brackets.png'
import './Toolbox.css';

const Toolbox = () => {
    return (
        <div className="toolbox">
            <div className="toolbox_item">      
                <UpArrow/>
                <DownArrow/>
                <RightArrow/>
                <LeftArrow/>
                <Loop/>
                <FunctionBraces/>
                {/* <img alt='' src={Braces} className="fas braces" /> */}
            </div>
        </div>
    )
}


export default Toolbox