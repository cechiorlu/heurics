import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './Header.css'


const Header = () => {
    return (
        <div className="header">
            <h1>Heurics</h1>
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