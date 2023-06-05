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

          <div className='left'>
            <ul>
              <li>2015</li>
              <li>Tiptronic</li>
              <li>2500&nbsp;cc</li>
            </ul>
          </div>
          <div className='center'>
          <span>camaro <i class="fa-solid fa-house-chimney"></i></span>
            <img src='./slide1_car.png' />
          </div>
          <div className='right'>
          <ul>
              <li>petrol</li>
              <li>5 psgs</li>
              <li>5&nbsp;doors</li>
            </ul>
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

          <div className='left'>
            <ul>
              <li>2015</li>
              <li>Tiptronic</li>
              <li>2500&nbsp;cc</li>
            </ul>
          </div>
          <div className='center'>
          <span>camaro <i class="fa-solid fa-house-chimney"></i></span>
            <img src='./slide1_car3-1.png' />
          </div>
          <div className='right'>
          <ul>
              <li>petrol</li>
              <li>5 psgs</li>
              <li>5&nbsp;doors</li>
            </ul>
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

            <div className='left'>
              <ul>
                <li>2015</li>
                <li>Tiptronic</li>
                <li>2500&nbsp;cc</li>
              </ul>
            </div>
            <div className='center'>
            <span>camaro <i class="fa-solid fa-house-chimney"></i></span>
              <img src='./Lexus-GS-fsport-600x400.jpg' />
            </div>
            <div className='right'>
            <ul>
                <li>petrol</li>
                <li>5 psgs</li>
                <li>5&nbsp;doors</li>
              </ul>
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

        <div className='left'>
          <ul>
            <li>2015</li>
            <li>Tiptronic</li>
            <li>2500&nbsp;cc</li>
          </ul>
        </div>
        <div className='center'>
        <span>camaro <i class="fa-solid fa-house-chimney"></i></span>
          <img src='./2019-Lexus-Lineup-600x400.jpg' />
        </div>
        <div className='right'>
        <ul>
            <li>petrol</li>
            <li>5 psgs</li>
            <li>5&nbsp;doors</li>
          </ul>
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
