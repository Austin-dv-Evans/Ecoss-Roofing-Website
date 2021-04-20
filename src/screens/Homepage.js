import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/FreeInspectionBtn'
import Integrity from '../components/Integrity'
import Fab from '../components/Fab'
const Homepage = () => {
  return (
    <>
      <div className="homepage">
        <div className="homepage__container">
          <h1 className="homepage__heading">Ecoss Roofing and Construction</h1>
          <h2 className="homepage__subheading--2">
            Thorough, efficient, and timely, without compromising quality has
            always been and will always be our number one priority.
          </h2>
          <h2 className="homepage__subheading">
            Serving the Greater Denver Metro Area for over 35 years!
          </h2>
        </div>
        <div className="homepage__button">
          <Link to="/quote">
            <Button />
          </Link>
        </div>
      </div>
      <Integrity />
      <Fab/>
    </>
  )
}

export default Homepage
