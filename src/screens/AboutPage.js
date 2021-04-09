import React from 'react'
import cityBlock from '../assets/images/cityBlock.jpg'
import cityBlock2 from '../assets/images/cityBlock2.jpg'
import Services from '../screens/Services'
const AboutPage = () => {
  return (
    <>
        <Services />
      <div className="about__container">
        <h3 className="about__heading">Who We Are</h3>
        <img
          src={cityBlock}
          alt="Denver Roof's from above"
          className="about__image"
        />
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
          quality workmanship
        </p>
        <img
          src={cityBlock2}
          alt="Denver Roof's from above"
          className="about__image"
        />
      </div>
    </>
  )
}

export default AboutPage
