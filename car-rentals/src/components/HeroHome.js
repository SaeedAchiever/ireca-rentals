import React, { Component } from 'react';
import "./HeroHome.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Autoplay } from 'swiper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faEllipsis, faEnvelope, faGreaterThan, faLessThan, faEye } from '@fortawesome/free-solid-svg-icons'


function HeroHome() {

    SwiperCore.use([Autoplay])
    
    return (
      <div className='hero-container'>
         <Swiper
       modules={[Navigation, Pagination, Scrollbar, A11y]}
       spaceBetween={50}
       slidesPerView={1}
       navigation
       pagination={{ clickable: true }}
       scrollbar={{ draggable: true }}
       autoplay={{ delay: 3000 }}
    >
      <SwiperSlide className='swiper-slide'>
      <div className='text-head'>
            <h4>from <br /> only</h4>
            <h2>GHC1200</h2>
            <h3>/ day</h3>
        </div>
        
        <div className='text-image'>

         
          <div className='center'>
          <span>camaro <i class="fa-solid fa-house-chimney"></i></span>
            <img src='./slide1_car.png' />
          </div>
      

</div>

        <div className='text-foot'>
            <a href="#"><FontAwesomeIcon icon={faLessThan} /><FontAwesomeIcon icon={faEllipsis} /><FontAwesomeIcon icon={faGreaterThan} /> Learn&nbsp;More</a>
            <a href="#"><FontAwesomeIcon icon={faEye} /> View&nbsp;Price</a>
        </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className='text-head'>
            <h4>from <br /> only</h4>
            <h2>GHC1200</h2>
            <h3>/ day</h3>
        </div>
        
        <div className='text-image'>

      
          <div className='center'>
          <span>camaro <i class="fa-solid fa-house-chimney"></i></span>
            <img src='./slide1_car3-1.png' />
          </div>
         

        </div>

        <div className='text-foot'>
            <a href="#">Learn&nbsp;More</a>
            <a href="#">View&nbsp;Price</a>
        </div>
      </SwiperSlide>
      
      <SwiperSlide>
      <div className='text-head'>
            <h4>from <br /> only</h4>
            <h2>GHC1200</h2>
            <h3>/ day</h3>
        </div>
        
        <div className='text-image'>

            
            <div className='center'>
            <span>camaro <i class="fa-solid fa-house-chimney"></i></span>
              <img src='./Lexus-GS-fsport-600x400.jpg' />
            </div>
             

</div>

        <div className='text-foot'>
            <a href="#">Learn&nbsp;More</a>
            <a href="#">View&nbsp;Price</a>
        </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className='text-head'>
            <h4>from <br /> only</h4>
            <h2>GHC1200</h2>
            <h3>/ day</h3>
        </div>
        
        <div className='text-image'>


        <div className='center'>
        <span>camaro <i class="fa-solid fa-house-chimney"></i></span>
          <img src='./2019-Lexus-Lineup-600x400.jpg' />
        </div>

</div>

        <div className='text-foot'>
            <a href="#">Learn&nbsp;More</a>
            <a href="#">View&nbsp;Price</a>
        </div>
      </SwiperSlide>
     
    </Swiper>
      </div>
    )
  }

export default HeroHome
