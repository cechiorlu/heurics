import React from 'react'
import _ from 'lodash'
import './BenchControls.css'

function BenchControls({ controls, location }) {

    return (
        <div className="bench-controls">
            {_.map(controls, (data, key) => {
                return (
                    <img alt='' src={data.icon}
                        className={`${location}-item`}
                        id={data.id}
                        key={key} draggable={true} />
                )
            })}
        </div >
    )
}

export default BenchControls
