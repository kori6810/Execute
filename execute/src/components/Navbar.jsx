import React from 'react'
import logo from '../assets/logo.png'
import {FaBars, Fatimes} from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='header'>
      <nav className="navbar">
        <a href="/" className="logo">
          <img src={logo} alt="logo" />
        </a>
        <div className="hamburger">
          <FaBars/>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="/">About</a>
          </li>
          <li className="nav-item">
            <a href="/">Testimonials</a>
          </li>
          <li className="nav-item">
            <a href="/">Demo</a>
          </li>
        </ul>
      </nav>


    </div>
  )
}

export default Navbar