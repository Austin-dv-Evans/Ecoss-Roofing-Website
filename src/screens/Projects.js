import React, { useState } from 'react'
import neighborhoodFromAbove from "../assets/images/neightborhoodFromAbove.jpg"
import duskHouse from "../assets/images/houseAtDusk.jpg"
import dayHouse from "../assets/images/houseDaylight.jpg"
import SwipeSlide from '../components/SwipeSlide'


const Projects = () => {
  const slides = [dayHouse, neighborhoodFromAbove, duskHouse]
  const captions = [
    "We pride ourselves on our work.",
    "Our neighborhood, proudly serviced by Ecoss.",
    "Our vision complete."
  ]

  const [index, setIndex] = useState(0); 

  const slideRight = () => {
    setIndex((index + 1) % slides.length)
  };

  const slideLeft = () => {
    const nextIndex = index - 1;
    (nextIndex < 0) ? setIndex(slides.length - 1) : setIndex(nextIndex)
  };

  return (
      <>
    <div className="projects__page">
      <h1 className="projects__heading">Projects</h1>
        
        <div className="imgSlide__container">
          <div className="numberText">{index + 1} / 3</div>
          <img src={slides[index]} alt="" className="projects__img" />
          <div className="caption">{captions[index]}</div>
        </div>
        <button className="prev" onClick={() => slideLeft()}>
          &#10094;
        </button>
        <button className="next" onClick={() => slideRight()}>
          &#10095;
        </button>
          {index === 0 && 
            <div className="imgSlide__dots">
              <span className="dot active" onClick={() => setIndex(0)}></span>
              <span className="dot" onClick={() => setIndex(1)}></span>
              <span className="dot" onClick={() => setIndex(2)}></span>
            </div>
          }
          {index === 1 && 
            <div className="imgSlide__dots">
              <span className="dot" onClick={() => setIndex(0)}></span>
              <span className="dot active" onClick={() => setIndex(1)}></span>
              <span className="dot" onClick={() => setIndex(2)}></span>
            </div>
          }
          {index === 2 && 
            <div className="imgSlide__dots">
              <span className="dot" onClick={() => setIndex(0)}></span>
              <span className="dot" onClick={() => setIndex(1)}></span>
              <span className="dot active" onClick={() => setIndex(2)}></span>
            </div>
          }
    </div>
    <SwipeSlide/>
    </>
  )
}

export default Projects
