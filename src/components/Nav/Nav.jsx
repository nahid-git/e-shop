// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Nav.css'
import logo from '../../images/logo.png'
import {Link, Outlet} from 'react-router-dom';

const Nav = () => {

    return (
       <>
           <nav>
               <Link to="/"><img src={logo} alt=''></img></Link>
               <div className='link'>
                   <Link to="/">Shop</Link>
                   <Link to="/orders">Orders</Link>
                   <Link to="/inventory">Inventory</Link>
                   <Link to="/about">About</Link>
                   <Link to="/login">Login</Link>
               </div>
           </nav>
           <Outlet/>
       </>
    );
};

export default Nav;