import React, { useState } from 'react'
import SoundOn from '../../../assets/icons/SVG/Volume-on.svg'
import SoundOff from '../../../assets/icons/SVG/Volume-off.svg'
// import GameMusic from '../../../assets/music/song.mp3'
import './Sound.css'

function Sound() {
    const [sound, setSound] = useState(true)
    return (
        <>
            <img
                src={sound ? SoundOn : SoundOff}
                onClick={() => setSound(!sound)}
                className="sound-icon" alt="music"
            />
            <audio loop={true} autoPlay={true} muted={sound ? false : true}>
                {/* <source src={GameMusic} type="audio/mp3" /> */}
            </audio>
        </>
    )
}

export default Sound
