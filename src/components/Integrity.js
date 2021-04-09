import React from 'react'

import shield1 from '../assets/icons/shield.svg'
import trophy from '../assets/icons/trophy.svg'
import tools from '../assets/icons/tools.svg'

const Integrity = () => {
  return (
    <div className="integrity__container">
      <div className="integrity__infoBox">
        <img
          className="integrity__icon"
          src={trophy}
          alt="Roofing Company Intgrity Shield"
        />
        <h2 className="integrity__headline">Excellence</h2>
        <p className="integrity__paragraph">
          We skillfully execute our work, utilizing innovation and ingenuity, so
          that we provide a high-quality finished product and excellent customer
          service.
        </p>
      </div>
      <div className="integrity__infoBox">
        <img
          className="integrity__icon"
          src={shield1}
          alt="Roofing Company Intgrity Shield"
        />
        <h2 className="integrity__headline">Safety</h2>
        <p className="integrity__paragraph">
          We provide an environment in which our employees can do their
          extraordinary work without getting hurt.
        </p>
      </div>
      <div className="integrity__infoBox">
        <img
          className="integrity__icon"
          src={tools}
          alt="Roofing Company Intgrity Shield"
        />
        <h2 className="integrity__headline">Integrity</h2>
        <p className="integrity__paragraph">
          We conduct business in a legal and ethical manner; build lasting
          relationships through honesty, respect, and trust with our employees
          as well as our clients.
        </p>
      </div>
    </div>
  )
}

export default Integrity
