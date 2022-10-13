import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <img src={logo} alt="" />
            <div className='nav-link'>
                <NavLink end className={({ isActive }) => isActive ? 'active-link' : undefined} to="/">Shop</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active-link' : undefined} to="/orders">Orders</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active-link' : undefined} to="/inventory">Inventory</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active-link' : undefined} to="/about">About</NavLink>
            </div>
        </nav>
    );
};

export default Header;