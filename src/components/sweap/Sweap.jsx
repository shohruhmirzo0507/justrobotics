import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import "./Sweap.css"
import iconBtn from "../../assets/iconbtn.png"

function Sweap() {
  return (
    <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='speap__card'>
            <img src={iconBtn} alt="" />
        </SwiperSlide>
        <SwiperSlide className='speap__card'>
            <img src={iconBtn} alt="" />
        </SwiperSlide>
        <SwiperSlide className='speap__card'>
            <img src={iconBtn} alt="" />
        </SwiperSlide>
        <SwiperSlide className='speap__card'>
            <img src={iconBtn} alt="" />
        </SwiperSlide>
        <SwiperSlide className='speap__card'>
            <img src={iconBtn} alt="" />
        </SwiperSlide>
        <SwiperSlide className='speap__card'>
            <img src={iconBtn} alt="" />
        </SwiperSlide>
        <SwiperSlide className='speap__card'>
            <img src={iconBtn} alt="" />
        </SwiperSlide>
        <SwiperSlide className='speap__card'>
            <img src={iconBtn} alt="" />
        </SwiperSlide>
        <SwiperSlide className='speap__card'>
            <img src={iconBtn} alt="" />
        </SwiperSlide>
      </Swiper>
      
    </div>
  )
}

export default Sweap


