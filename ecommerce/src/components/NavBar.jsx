import React from 'react'
import { Link, Outlet } from "react-router-dom"
import CartWidget from './CartWidget'
import logo from '../assets/books-logo.png';

function NavBar() {
  return (
    <>
      <div className='navbar-section'>
        <div className='title-section'>
            <div>
                <img src={logo} alt="Logo" width="128px" />
            </div>
            <h1 className='title'>Book Shop</h1>

            <CartWidget />
            
        </div>

        <nav className='navList'>
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            {/* Seleccionar desde el menú las distintas categorías disponibles. */}
            <li><Link to={"/category/romance"}>Romance</Link></li>
            <li><Link to={"/category/horror"}>Horror</Link></li>
            <li><Link to={"/category/science-fiction"}>Science Fiction</Link></li>
            <li><Link to={"/category/fantasy"}>Fantasy</Link></li>
          </ul> 
        </nav>
        
      </div>
      
      <Outlet/>
    </>
  )
}

export default NavBar