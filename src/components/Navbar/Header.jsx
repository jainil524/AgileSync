import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import './css/Header.css';

function Header() {
    return (
        <div className="header">
            <div className="header__logo">
                <Link to="/">
                    <h1>Home page / Dashboard</h1>
                </Link>
            </div>
            <div className="header__nav">
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/projects">Projects</Link>
            </div>
            <div className="header__user">
                <Link to="/profile">
                    <FaUserCircle />
                </Link>
            </div>
        </div>
    );
}

export default Header;
