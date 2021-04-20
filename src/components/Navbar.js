import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import Button from './FreeInspectionBtn'

import logo from '../assets/images/ECOSS_LOGO_Master.png'
import phone from '../assets/icons/iPhoneIcon.png'
import cal from '../assets/icons/calendar1.svg'

const Navbar = () => {

  const [open, setOpen] = useState(false)
  return (
    <nav className="navbar__container">
      <a href="/" className="navbar__brand--link">
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
          <Link to="/quote" className="navbar__scheduleBtn">
            <Button />
          </Link>
          <Link to="/quote" onClick={() => setOpen(false)}>
            <button className="navbar__cal">
              <img
                className="navbar__calIcon"
                src={cal}
                alt="Call Ecoss Roofing and Construction Now"
              />
            </button>
          </Link>

          <button id="menuBtn" className={open ? "navbar__hamburger--rotated": "navbar__hamburger"} onClick={() => setOpen(!open)}>
            lll
          </button>
        </div>
      </div>
      {open && (
        <div className="sideNav">
          <Link to="/" className="sideNav__link" onClick={() => setOpen(!open)}>
            Home
          </Link>
          <Link
            to="/services"
            className="sideNav__link"
            onClick={() => setOpen(!open)}
          >
            Services
          </Link>
          <Link
            to="/quote"
            className="sideNav__link"
            onClick={() => setOpen(!open)}
          >
            Contact
          </Link>
          <Link
            to="/projects"
            className="sideNav__link"
            onClick={() => setOpen(!open)}
          >
            Projects
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
