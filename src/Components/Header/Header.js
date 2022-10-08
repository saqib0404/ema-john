import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav>
            <img src={logo} alt="" />
            <div className='nav-link'>
                <a href="">Shop</a>
                <a href="">Overview</a>
                <a href="">Inventory</a>
                <a href="">Login</a>
            </div>
        </nav>
    );
};

export default Header;