import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import './css/Header.css';

function Header() {
    return (
        <div className="header">
            <div className="header__logo">
                <Link to="/app/dashboard">
                    <h1>Home page</h1>
                </Link>
            </div>
            <div className="header__nav">
                <Link to="/app/dashboard">Dashboard</Link>
                <Link to="/app/projects">Projects</Link>
            </div>
            <div className="header__user">
                <Link to="/app/profile">
                    <FaUserCircle />
                </Link>
            </div>
        </div>
    );
}

export default Header;
