import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {Navigation, Pagination} from 'swiper'
import "swiper/swiper-bundle.css"
import denver from "../assets/images/denverCity.jpg"
import duskHouse from "../assets/images/houseAtDusk.jpg"
import dayHouse from "../assets/images/houseDaylight.jpg"
import Fab from './Fab'

SwiperCore.use([Navigation, Pagination])

const SwipeSlide = () => {

  return (
    <div className="swiper__page">
      <h1 className="swiper__heading">Projects</h1>
      <Swiper
        id="main"
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination
        loop={true}
      >
        <SwiperSlide>
          <img
            src={dayHouse}
            alt="neighborhood from above"
            className="swiper__images"
          />
          <p className="swiper__caption">Project One WOW just WOW</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={duskHouse}
            alt="neighborhood from above"
            className="swiper__images"
          />
          <p className="swiper__caption">Project Two is Stunning</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={denver}
            alt="neighborhood from above"
            className="swiper__images"
          />
          <p className="swiper__caption">Proudly Serving Denver for 35years</p>
        </SwiperSlide>
      </Swiper>
      <Fab/>
    </div>
  )
}

export default SwipeSlide
