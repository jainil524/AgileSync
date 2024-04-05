import React from 'react';
import {  NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import './css/Header.css';

function Header() {
    return (
        <div className="header">
            <div className="header__logo">
                <NavLink to="/app/dashboard">
                    <div><img className='Logo-img' src="../../../src/assets/img/AGILE-SYNC-TEXT-LOGO.svg" alt=''/></div>    
                </NavLink>
            </div>
            <div className="header__nav">
                <NavLink to="/app/dashboard">Dashboard</NavLink>
                <NavLink to="/app/projectlist">Projects</NavLink>
            </div>
            <div className="header__user">
                <NavLink to="/app/profile">
                    <FaUserCircle />
                </NavLink>
            </div>
        </div>
    );
}

export default Header;
