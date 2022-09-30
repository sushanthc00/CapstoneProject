import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Image from '../components/images/MadOverMarvel Logo.png';


function Navbar() {
  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='navbar-logo'>
                <div className='logo-mom-container'>
                <img className= 'logo-mom' src={Image}></img>
                </div>
            </Link>

            <Link to = '/' style={{textDecoration: 'none'}} className='navbar-name'>
                <div className='name-mom'>
                    <h2>MAD OVER MARVEL</h2>
                </div>
            </Link>

            <Link to = '/' style={{textDecoration: 'none'}} className='navbar-order'>
            <div className= 'order-mom'>
                <h3> My Orders</h3>
            </div>
            </Link>

            <Link to = '/' style={{textDecoration: 'none'}} className='navbar-profile'>
            <div className= 'profile-mom'>
                <h3>My Profile</h3>
            </div>
            </Link>

            <Link to = '/' style={{textDecoration: 'none'}} className='navbar-about'>
            <div className= 'about-mom'>
                <h3>About Us</h3>
            </div>
            </Link>

        </div>
        
    </nav>
    
    <nav className='navbar'>
        <div className='navbar-container-two'>
            <Link to='/' style={{textDecoration: 'none'}}  className='navbar-mugs'>
                <div className='mugs-mom'>
                <h3>Mugs</h3>
                </div>
            </Link>

            <Link to = '/' style={{textDecoration: 'none'}} className='navbar-keychains'>
                <div className='keychains-mom'>
                    <h3>Keychains</h3>
                </div>
            </Link>

            <Link to = '/' style={{textDecoration: 'none'}} className='navbar-action-figures'>
            <div className= 'action-figures-mom'>
                <h3> Action Figures</h3>
            </div>
            </Link>

            <Link to = '/' style={{textDecoration: 'none'}} className='navbar-misc'>
            <div className= 'misc-mom'>
                <h3>Miscellaneous</h3>
            </div>
            </Link>

            <Link to = '/' style={{textDecoration: 'none'}} className='navbar-search'>
            <div className= 'search-mom'>
                <h3>Search Bar Here</h3>
            </div>
            </Link>

            <Link to = '/Login' style={{textDecoration: 'none'}} className='navbar-login'>
            <div className= 'login-mom'>
                <h3>Login</h3>
            </div>
            </Link>

            <Link to = '/Register' style={{textDecoration: 'none'}} className='navbar-register'>
            <div className= 'register-mom'>
                <h3>Register</h3>
            </div>
            </Link>

            <Link to = '/' style={{textDecoration: 'none'}} className='navbar-cart'>
            <div className= 'cart-mom'>
            <h3> Cart</h3>    
            </div>
            </Link>

        </div>
        
    </nav>

    </>
    
  )
}

export default Navbar