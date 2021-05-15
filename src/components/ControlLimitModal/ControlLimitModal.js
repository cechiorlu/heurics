import React from 'react'
import Roach from '../../assets/images/dizzyroach.png'
import './ControlLimitModal.css'


function ControlLimitModal({ isOpen }) {

    const modalStyle = {
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
        display: isOpen ? 'block' : 'none'
        // display: 'block'
    }

    return (
        <div className="control-limit-modal" style={modalStyle}>
            <div className="modal-heading">
                <img src={Roach} alt="roach" className='modal-img' />
            </div>
            <div>
                <h5>You have reached your control limit</h5>
                <p>Consider using loops and braces</p>
            </div>
        </div>
    )
}

export default ControlLimitModal
