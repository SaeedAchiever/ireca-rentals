import React from "react";
import './Testimonial.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Autoplay } from 'swiper';

function Testimonial(){
    return(
        <div>
            <div className="testimonial-container">

            
            <Swiper
       modules={[Navigation, Pagination, Scrollbar, A11y]}
       spaceBetween={50}
       slidesPerView={1}
       navigation
       pagination={{ clickable: true }}
       scrollbar={{ draggable: true }}
       autoplay={{ delay: 3000 }}
    >
              <SwiperSlide>
      <div className='main-testimony'>
        <div className='main-testimony-body'>
            <p>
            <span className="name">achiever Saeed</span>
                " Aute excepteur eu duis sit tempor ullamco.
                Aliquip do laboris labore commodo ex deserunt
                proident nostrud non culpa excepteur. 
                Nulla ullamco tempor quis irure. Consectetur
                duis laborum deserunt officia officia voluptate
                sint. "
                <span className="stars">....</span>
            </p>
        </div>
        <div className='main-testimony-image'>
            <img src="./Snapchat-1230045186.jpg"/>
        </div>
      </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className='main-testimony'>
        <div className='main-testimony-body'>
            <p>
            <span className="name">Saeed achiever</span>
                " Aute excepteur eu duis sit tempor ullamco.
                Aliquip do laboris labore commodo ex deserunt
                proident nostrud non culpa excepteur. 
                Nulla ullamco tempor quis irure. Consectetur
                duis laborum deserunt officia officia voluptate
                sint. "
                <span className="stars">....</span>
            </p>
        </div>
        <div className='main-testimony-image'>
            <img src="./Snapchat-1699632714.jpg"/>
        </div>
      </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className='main-testimony'>
        <div className='main-testimony-body'>
            <p>
            <span className="name">gariba saeed</span>
                " Aute excepteur eu duis sit tempor ullamco.
                Aliquip do laboris labore commodo ex deserunt
                proident nostrud non culpa excepteur. 
                Nulla ullamco tempor quis irure. Consectetur
                duis laborum deserunt officia officia voluptate
                sint. "
                <span className="stars">....</span>
            </p>
        </div>
        <div className='main-testimony-image'>
            <img src="./Snapchat-997129417.jpg"/>
        </div>
      </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className='main-testimony'>
        <div className='main-testimony-body'>
            <p>
            <span className="name">Saeed zibur</span>
                " Aute excepteur eu duis sit tempor ullamco.
                Aliquip do laboris labore commodo ex deserunt
                proident nostrud non culpa excepteur. 
                Nulla ullamco tempor quis irure. Consectetur
                duis laborum deserunt officia officia voluptate
                sint. "
                <span className="stars">....</span>
            </p>
        </div>
        <div className='main-testimony-image'>
            <img src="./zibur.jpg"/>
        </div>
      </div>
      </SwiperSlide>

            

    </Swiper>
            </div>
            </div>
    )
}

export default Testimonial;