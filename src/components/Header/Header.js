import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './Header.css'
import logo from '../../assets/images/logo-negative.png'


const Header = () => {
    return (
        <div className="header">
            <div>
                <img src={logo} id="logo" alt="Heurics"></img>
            </div>
            <div className="navlist">
                <Router>
                    <Link className="nav-link" style={styles} to="/instructions">Instructions</Link>
                    <Link className="nav-link" style={styles} to="/about">About</Link>
                </Router>
            </div>
        </div>
    )
}

const styles = {
    textDecoration: "none",
    fontSize: "18px",
    padding: "0px 20px"
}

export default Header