import React from "react";
import "./NavBar.css";
import {Link} from "react-router-dom";

const NavBar = ()=>{
    return(
        <>
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">LOGO</Link>
            </div>
        <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        </ul>
        </nav>
        </>
    )
}

export default NavBar;