// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Nav.css'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';

const Nav = () => {

    return (
        <nav>
            <a href="/"><img src={logo} alt=''></img></a>

            <div className='link'>
                <a href="/">Shop</a>
                <a href="/orders">Orders</a>
                <a href="/inventory">Inventory</a>
                <a href="/about">About</a>
                <a href="/login">Login</a>
            </div>

        </nav>
    );
};

export default Nav;