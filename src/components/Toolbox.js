import React from 'react'
import ArrowUp from '../icons/arrow-up-solid.svg'
import ArrowDown from '../icons/arrow-down-solid.svg'
import ArrowRight from '../icons/arrow-right-solid.svg'
import ArrowLeft from '../icons/arrow-left-solid.svg'
import Pause from '../icons/pause-solid.svg'
import Volume from '../icons/volume-up-solid.svg'
import Redo from '../icons/redo-solid.svg'
import Question from '../icons/question-solid.svg'

const Toolbox = () => {
    return (
        <div className="toolbox">
            <div className="toolbox_item">
                <img alt='' src={ArrowUp} className="fas arrow-up" />
                <img alt='' src={ArrowDown} className="fas arrow-down" />
                <img alt='' src={ArrowRight} className="fas arrow-right" />
                <img alt='' src={ArrowLeft} className="fas arrow-left" />
                <img alt='' src={Pause} className="fas pause" />
                <img alt='' src={Volume} className="fas volume" />
                <img alt='' src={Redo} className="fas redo" />
                <span className="fas" id="braces">{}</span>
                <img alt='' src={Question} className="fas question" />
            </div>
        </div>
    )
}


export default Toolbox