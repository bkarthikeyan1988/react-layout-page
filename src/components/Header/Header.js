import React from 'react';
import NavBar from '../NavBar/NavBar';

import './Header.css';

const Header = () => {
    return(
        <header>
            <div className="logoBlock">
                <h1 className="logoText">Logo</h1>
            </div>
            <NavBar />
        </header>
    )
};

export default Header;
