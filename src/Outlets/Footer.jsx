import React from 'react'
import logo from '../Assets/LogoWhite.png'
import { Link } from 'react-router-dom'
import facebook from '../Assets/facebook.png'
import instagram from '../Assets/instagram.png'
import x from '../Assets/x.png'
import linkedin from '../Assets/linkedin.png'
import arrow from '.././Assets/arrow-white.png'
const Footer = () => {
  return (
    <div className='footer-main-bg'>
      <div className="container-main">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-logo-div">
              <img src={logo} className='footer-logo' alt="logo footer" />
              <h3 className='footer-text'>If you didn’t find the products <br />   you are interested in or have questions?</h3>
              <div className="form-footer">
              <form>
                <div class="form-group">
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
                </div>
                <div className="contact-btn-nav">
                  <Link to='/' className='btn enquire-btn'>Contact Us <img src={arrow} className='arrow-icons' alt="arrow icon" /></Link>
                </div>
              </form>
              </div>
              <div className="social-media-icons">
                <img src={facebook} className='icon-logo-social-media' alt="social media icon" />
                <img src={instagram} className='icon-logo-social-media' alt="social media icon" />
                <img src={x} className='icon-logo-social-media' alt="social media icon" />
                <img src={linkedin} className='icon-logo-social-media' alt="social media icon" />
              </div>
              <div className="footer-lists">
                <ul>
                  <li><Link to='/'>Services</Link></li>
                  <li><Link to='/'>Works</Link></li>
                  <li><Link to='/'>Clients</Link></li>
                  <li><Link to='/'>Awards</Link></li>
                  <li><Link to='/'>About us</Link></li>
                  <li><Link to='/'>Blogs</Link></li>
                  <li><Link to='/'>Careers</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;