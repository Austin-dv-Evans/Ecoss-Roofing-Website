import React from 'react'
import { Link } from 'react-router-dom'

import cal from "../assets/icons/calendar1.svg"
import phone from "../assets/icons/iPhoneIcon.png"
const Fab = () => {
  return (
    <>
      <div className="fab">
        <Link to="/quote">
          <img
            className="fab__calIcon"
            src={cal}
            alt="Call Ecoss Roofing and Construction Now"
          />
        </Link>
        
      </div>
      <a href="tel:1+303-881-0288" className="fab__phoneLink">
        <div className="fab-2">
        <img
          className="fab-2__phoneIcon"
          src={phone}
          alt="Call Ecoss Roofing and Construction Now"
        />
      </div>
      </a>
      
    </>
  )
}

export default Fab
