import React from 'react'
import { Link } from 'react-router-dom'
import Sound from './Sound/Sound.js'
import './Header.css'
import logo from '../../assets/images/logo-negative.png'


const Header = () => {
    return (
        <div className="header-wrap">
            <div className="header">
                <Link to="/">
                    <div>
                        <img src={logo} id="logo" alt="Heurics"></img>
                    </div>
                </Link>
                <div className="navlist">
                    <Link className="nav-link" style={styles} to="/instructions">Instructions</Link>
                    <Link className="nav-link" style={styles} to="/about">About</Link>
                </div>
            </div>
            <div className="settings">
                <Sound />
            </div>
        </div>
    )
}

const styles = {
    textDecoration: "none",
    fontSize: "16px",
    padding: "0px 20px"
}

export default Header