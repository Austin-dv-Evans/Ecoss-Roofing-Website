import React from 'react'

import { Link } from 'react-router-dom'
import logo from '../assets/images/ECOSS_LOGO_Master.png'
import phone from "../assets/icons/iPhoneIcon.png"
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
            <a href="tel:1+7204486604" className="footer__callNow--link">
              <div className="footer__callNow">
                <h1 className="footer__callToday">Call Us Today</h1>
                <h2 className="footer__phoneNumber">720-448-6604</h2>
                <img
                  className="footer__phoneIcon"
                  src={phone}
                  alt="Call Ecoss Roofing and Construction Now"
                />
              </div>
            </a>
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
