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
            <h1 className='title'>Shop Name</h1>
            <ul className='navList'>
                <li><a href="">Option 1</a></li>
                <li><a href="">Option 2</a></li>
                <li><a href="">Option 3</a></li>
            </ul>
        </div>
        
        
        <CartWidget />
    </div>
  )
}

export default NavBar