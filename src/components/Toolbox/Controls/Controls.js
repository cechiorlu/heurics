import React, { useState } from 'react'
import ArrowUp from '../../../assets/icons/arrow-up-solid.svg'
import ArrowDown from '../../../assets/icons/arrow-down-solid.svg'
import ArrowLeft from '../../../assets/icons/arrow-left-solid.svg'
import ArrowRight from '../../../assets/icons/arrow-right-solid.svg'
import Loop from '../../../assets/icons/redo-solid.svg'
import Braces from '../../../assets/icons/curly-brackets.svg'
import _ from 'lodash'







function Controls() {
    const [state, setState] = useState({
        arrowUp: {
            icon: ArrowUp,
            id: 'arrowUp',
            function: false
        },
        arrowDown: {
            icon: ArrowDown,
            id: 'arrowDown',
            function: false
        },
        arrowRight: {
            icon: ArrowRight,
            id: 'arrowRight',
            function: false
        },
        arrowLeft: {
            icon: ArrowLeft,
            id: 'arrowLeft',
            function: false
        },
        braces: {
            icon: Braces,
            id: 'braces',
            function: true
        },
        loop: {
            icon: Loop,
            id: 'loop',
            function: true
        }
    })
    return (
        <div className="controls">
            {_.map(state, (data, key) => {
                return (
                    <div key={key} className="arrow-box" >
                        <img alt='' src={data.icon} className="fas" />
                    </div>
                )
            })}
        </div>
    )
}

export default Controls
