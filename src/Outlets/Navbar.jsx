import React from 'react'
import { Link } from 'react-router-dom'
import logo from '.././Assets/Logo.png'
import arrow from '.././Assets/arrow.svg'
const Navbar = () => {
  return (
    <div className="container-main">
      <div className='navbar-main'>
        <div className="logo-nav">
          <Link to='/'>
            <img src={logo} className='logo-main' alt="logo" />
          </Link>
        </div>
        <div className="list-nav">
          <ul>
            <li><Link to='/services'>Services</Link></li>
            <li><Link to='/services'>Works</Link></li>
            <li><Link to='/services'>Clients</Link></li>
            <li><Link to='/services'>Awards</Link></li>
            <li><Link to='/services'>Blogs</Link></li>
            <li><Link to='/services'>About us</Link></li>
            <li><Link to='/services'>Careers</Link></li>
            <div className="contact-btn-nav">
              <Link to='/' className='btn enquire-btn'>Contact Us <img src={arrow} className='arrow-icon' alt="arrow icon" /></Link>
            </div>
          </ul>
        </div>
      </div>
    </div>

  )
}

export default Navbar