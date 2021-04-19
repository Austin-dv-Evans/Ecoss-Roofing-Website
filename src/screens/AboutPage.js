import React from 'react'

import Services from '../screens/Services'
const AboutPage = () => {
  return (
    <div className="about__page">
      <Services />
      <div className="about__container">
        <h3 className="about__heading">Who We Are</h3>
        <p className="about__paragraph">
          Ecoss Construction is a family owned residential and commercial
          roofing company founded in 2010 in Thornton, CO with over 35 years of
          experience in the industry.
        </p>
      </div>
      <div className="about__container--2">
        <p className="about__paragraph">
          Our mission is to provide our clients with first class level of
          quality and service that we would expect ourselves. This means
          providing personal attention in a professional manner with a focus on
          quality workmanship.
        </p>
      </div>
      <div className="about__container--3">
        <p className="about__paragraph">
          Thorough, efficient, and timely, without compromising quality has
          always been and will always be our number one priority.
        </p>
      </div>
    </div>
  )
}

export default AboutPage
