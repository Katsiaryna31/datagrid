import React from 'react';
import './Header.css';
import logo from '../../Assets/Coronavirus.svg';

const Header = () => {
    return <header className="header">
        <div className="logo">
            <img src={logo} alt="Coronavirus" width='70' height='70'></img>
            <h1 className="header-name">Coronavirus data</h1>
        </div>

    </header>
}

export default Header;