import logo from '../img/Group1.svg'
import { Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import './header.css'
const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <img src={logo} alt="logo" />
            </div>
            <div className='nav'>
                <a href="#">Home</a>
                <a href="#">Sessions</a>
                <a href="#">Review</a>
                <a href="#">Contact</a>
                <a href="#">New</a>
                <a href="#">About as</a>
                <a href="#">Blog</a>
            </div>
            <div className='header-button'>
                <div className='button'>
                    Sign up now
                </div>
            </div>
        </div>
    );
}

export default Header;
