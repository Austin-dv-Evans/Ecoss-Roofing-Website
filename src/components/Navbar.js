import React from 'react'

import { Link } from 'react-router-dom'

import Button from './FreeInspectionBtn'

import logo from '../assets/images/ECOSS_LOGO_Master.png'
import phone from '../assets/icons/old-mobile.svg'


const Navbar = () => {

  return (
    <nav className="navbar__container">
      <a href="/">
        <img
          src={logo}
          alt="Ecoss Construction Roofing Logo"
          className="navbar__brand"
        />
      </a>
      <div className="navbar__navigation">
        <div className="navbar__navigation--links">
          <Link to="/" className="navbar__link">
            Home
          </Link>
          <Link to="/services" className="navbar__link">
            Services
          </Link>
          <Link to="/quote" className="navbar__link">
            Contact
          </Link>
          <Link to="/projects" className="navbar__link">
            Projects
          </Link>
        </div>
        <div className="navbar__navigation--phoneQuote">
          <a href="tel:1+303-881-0288" className="callNow__link">
            <div className="callNow">
              <img
                className="navbar__phoneIcon"
                src={phone}
                alt="Call Ecoss Roofing and Construction Now"
              />
              <h2 className="callNow__phoneNumber">303-881-0288</h2>
          </div>
          </a>
          <Link to="/quote">
            <Button />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
