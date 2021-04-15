import React from 'react'

import { Link } from 'react-router-dom'
import logo from '../assets/images/ECOSS_LOGO_Master.png'
import phone from "../assets/icons/old-mobile.svg"
import Button from './FreeInspectionBtn'

const Footer2 = () => {
  return (
    <>
      <footer className="footer2">
        <div className="footer2__container">
          <img
            src={logo}
            alt="Ecoss Roofing and Construction Logo"
            className="footer__logo"
          />
          <div className="footer__location">
            <div className="footer__callNow">
              <a href="tel:1+303-881-0288" className="footer__callNow--link">
                <h1 className="footer__callToday">Call Us Today</h1>
                <h2 className="footer__phoneNumber">303-881-0288</h2>
                <img
                  className="footer__phoneIcon"
                  src={phone}
                  alt="Call Ecoss Roofing and Construction Now"
                />
              </a>
            </div>
            <Link to="/quote">
              <Button />
            </Link>
          </div>
        </div>
        <div className="footer2__links">
          <Link to="/" className="footer__link">
            Home
          </Link>
          <Link to="/services" className="footer__link">
            Services
          </Link>
          <Link to="/quote" className="footer__link">
            Contact
          </Link>
          <Link to="/projects" className="footer__link">
            Projects
          </Link>
        </div>
      </footer>
    </>
  )
}


export default Footer2
