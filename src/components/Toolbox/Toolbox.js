import React from 'react'
import ArrowUp from '../../assets/icons/arrow-up-solid.svg'
import ArrowDown from '../../assets/icons/arrow-down-solid.svg'
import ArrowRight from '../../assets/icons/arrow-right-solid.svg'
import ArrowLeft from '../../assets/icons/arrow-left-solid.svg'
import Repeat from '../../assets/icons/redo-solid.svg'
// import Braces from '../../assets/icons/curly-brackets.png'
import './Toolbox.css'

const Toolbox = () => {
    return (
        <div className="toolbox">
            <div className="toolbox_item">
                <img alt='' src={ArrowUp} className="fas arrow-up" />
                <img alt='' src={ArrowDown} className="fas arrow-down" />
                <img alt='' src={ArrowRight} className="fas arrow-right" />
                <img alt='' src={ArrowLeft} className="fas arrow-left" />
                <img alt='' src={Repeat} className="fas redo" />
                {/* <img alt='' src={Braces} className="fas braces" /> */}
                <p className="fas braces"> {`{ }`} </p>
            </div>
        </div>
    )
}


export default Toolbox