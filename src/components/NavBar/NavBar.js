import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return(
        <nav className="navBar">
            <ul className="navBarList">
                <li><button className="link">Home</button></li>
                <li><button className="link">About Us</button></li>
                <li><button className="link">Blog</button></li>
                <li><button className="link">Gallery</button></li>
                <li><button className="link">Contact Us</button></li>
            </ul>
        </nav>
    )
}

export default NavBar;
