import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/ECOSS_LOGO_Master.png'
import phone from "../assets/icons/old-mobile.svg"
import Button from './FreeInspectionBtn'
const Footer = () => {
  return (
    <footer className="footer">
      <img
        src={logo}
        alt="Ecoss Roofing and Construction Logo"
        className="footer__logo"
      />
      <div className="footer__links">
        <Link to="/" className="footer__link">
          Home
        </Link>
        <Link to="/services" className="footer__link">
          Services
        </Link>
        <Link to="/contact" className="footer__link">
          Contact
        </Link>
        <Link to="/projects" className="footer__link">
          Projects
        </Link>
      </div>
      <div className="footer__location">
        <Button />
        <div className="footer__callNow">
          <img
          className="footer__phoneIcon"
          src={phone}
          alt="Call Ecoss Roofing and Construction Now"
          />
          <h1 className="footer__callToday">Call Us Today</h1>
          <h2 className="footer__phoneNumber">303-881-0288</h2>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer
