import React from 'react'
import CartWidget from './CartWidget'
import logo from '../assets/books-logo.png';

function NavBar() {
  return (
    <div className='navbar-section'>
        <div className='title-section'>
            <div>
                <img src={logo} alt="Logo" width="128px" />
            </div>
            <h1 className='title'>Book Shop</h1>
            <ul className='navList'>
                <li><a href="">Romance</a></li>
                <li><a href="">Horror</a></li>
                <li><a href="">Science Fiction</a></li>
                <li><a href="">Fantasy</a></li>
            </ul>
        </div>
        
        
        <CartWidget />
    </div>
  )
}

export default NavBar