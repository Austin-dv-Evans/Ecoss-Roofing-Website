import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {Navigation, Pagination} from 'swiper'
import "swiper/swiper-bundle.css"
import sideHouse from "../assets/images/sideHouse.png"
import shinglesAbove from "../assets/images/shinglesAbove.png"
import grayHouse from "../assets/images/grayHouse.png"
import dirtLawn from "../assets/images/dirtLawn.png"
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
            src={grayHouse}
            alt="neighborhood from above"
            className="swiper__images"
          />
          <p className="swiper__caption">Metal</p>
        </SwiperSlide>
                <SwiperSlide>
          <img
            src={dirtLawn}
            alt="neighborhood from above"
            className="swiper__images"
          />
          <p className="swiper__caption">Metal</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={shinglesAbove}
            alt="neighborhood from above"
            className="swiper__images"
          />
          <p className="swiper__caption">Shingles</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={sideHouse}
            alt="neighborhood from above"
            className="swiper__images"
          />
          <p className="swiper__caption">Downspout</p>
        </SwiperSlide>
      </Swiper>
      <Fab/>
    </div>
  )
}

export default SwipeSlide
