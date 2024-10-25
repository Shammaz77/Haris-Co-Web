import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '.././Assets/Logo.png';
import arrow from '.././Assets/arrow.svg';
import close from '../Assets/close-large-fill.svg';
import menu from '.././Assets/menu.svg';


const Navbar = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleCart = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="container-main font-h">
      <div className='navbar-main'>
        <div className="logo-nav">
          <Link to='/'>
            <img src={logo} className='logo-main' alt="logo" />
          </Link>
        </div>
        <div className="list-nav">
          {/* Menu button to toggle sidebar */}
          <img
            src={menu}
            className='menu-icon'
            alt="menu icon"
            onClick={toggleCart}
          />
          <ul>
            <li>
              <Link
                to='/services'
                className={location.pathname === '/services' ? 'active-link' : ''}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to='/works'
                className={location.pathname === '/works' ? 'active-link' : ''}
              >
                Works
              </Link>
            </li>
            <li>
              <Link
                to='/clients'
                className={location.pathname === '/clients' ? 'active-link' : ''}
              >
                Clients
              </Link>
            </li>
            <li>
              <Link
                to='/awards'
                className={location.pathname === '/awards' ? 'active-link' : ''}
              >
                Awards
              </Link>
            </li>
            {/* <li>
              <Link
                to='/'
                className={location.pathname === '/blogs' ? 'active-link' : ''}
              >
                Blogs
              </Link>
            </li> */}
            <li>
              <Link
                to='/about'
                className={location.pathname === '/about' ? 'active-link' : ''}
              >
                About us
              </Link>
            </li>
            <li>
              <p className='hiring'>We're Hiring</p>
              <Link
                to='/career'
                className={location.pathname === '/career' ? 'active-link' : ''}
              >
                Careers
              </Link>
            </li>
            <div className="contact-btn-nav">
              <Link to='/contact' className='btn enquire-btn'>
                Contact Us <img src={arrow} className='arrow-icon' alt="arrow icon" />
              </Link>
            </div>
          </ul>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open-cart' : ''}`}>
        <div className="navbar-sidebar">
          <ul>
            <Link to='/services' onClick={toggleCart}><li> Services</li> </Link>
            <Link to='/works' onClick={toggleCart}><li>Works </li></Link>
            <Link to='/clients' onClick={toggleCart}><li>Clients</li> </Link>
            <Link to='/awards' onClick={toggleCart}><li>Awards </li></Link>
            {/* <Link to='/blog' onClick={toggleCart}><li>Blogs </li></Link> */}
            <Link to='/about' onClick={toggleCart}><li>About us </li></Link>
            <Link to='/career' onClick={toggleCart}><li>Careers</li> </Link>
          </ul>
        </div>
        {/* Close button */}
        <div className="d-inline closse" onClick={toggleCart}>
          <img src={close} className='close-icon' alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
