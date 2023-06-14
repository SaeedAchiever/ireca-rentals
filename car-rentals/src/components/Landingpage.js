import React from 'react'
import './Landingpage.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Autoplay } from 'swiper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLink } from '@fortawesome/free-solid-svg-icons'


function Landingpage() {

    SwiperCore.use([Autoplay])

  return (
    <>

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
      <div className='Landing-page-container'>
        <hr /> <hr />

            <div className='main-landing-page-one'>

                <div className='landing-page-note'>
                 <h1>Rent a car now</h1>
                  <p>
                    <span><img src='./logo_mobile.png'/> </span>
                    Amet cupidatat tempor elit consectetur et
                   duis anim commodo excepteur. Sunt esse in 
                   aliquip id laboris deserunt aute.
                    Cupidatat elit cupidatat aute proident
                   cillum proident. Velit magna non 
                   
                <button id='home-btn'><a href='#rent-page'>rent now </a></button>

                  </p>
                  <div>
                  </div>
                </div>

            </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className='Landing-page-container'>
            <hr /> <hr />

                <div className='main-landing-page-two'>
                  <div className='page-two-main-text'>
                    <h1>iReca Rentals</h1>
                    <h3>get your dream car</h3>
                    <p>
                      Cupidatat ullamco et nulla cillum.
                      Cupidatat ullamco et nulla cillum.
                      Cupidatat ullamco et nulla cillum.
                    </p>
                    <button id='home-btn'>view all cars</button>
                  </div>
                  <div className='page-two-main-foot'>
                    <div className='social'>
                    <FontAwesomeIcon icon={faLink} />&nbsp;
                    <FontAwesomeIcon icon={faLink} />
                    <span> @ireca_rentals</span>
                    </div>

                    <div className='phone'>
                      (233) 596116171
                    </div>
                  </div>
                </div>
            </div>
      </SwiperSlide>
      
      <SwiperSlide>
      <div className='Landing-page-container'>
        <hr /> <hr />

            <div className='main-landing-page-one'>

                <div className='landing-page-note'>
                 <h1>Rent a car now</h1>
                  <p>
                    <span><img src='./logo_mobile.png'/> </span>
                    Amet cupidatat tempor elit consectetur et
                   duis anim commodo excepteur. Sunt esse in 
                   aliquip id laboris deserunt aute.
                    Cupidatat elit cupidatat aute proident
                   cillum proident. Velit magna non 
                   
                <button id='home-btn'><a href='#rent-page'>rent now </a></button>

                  </p>
                  <div>
                  </div>
                </div>

            </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className='Landing-page-container'>
            <hr /> <hr />

                <div className='main-landing-page-two'>
                  <div className='page-two-main-text'>
                    <h1>iReca Rentals</h1>
                    <h3>get your dream car</h3>
                    <p>
                      Cupidatat ullamco et nulla cillum.
                      Cupidatat ullamco et nulla cillum.
                      Cupidatat ullamco et nulla cillum.
                    </p>
                    <button id='home-btn'>view all cars</button>
                  </div>
                  <div className='page-two-main-foot'>
                    <div className='social'>
                    <FontAwesomeIcon icon={faLink} /><FontAwesomeIcon icon={faLink} /> 
                    <span>&nbsp;@ireca_rentals</span>
                    </div>

                    <div className='phone'>
                      (233)&nbsp;596116171
                    </div>
                  </div>
                </div>
            </div>
      </SwiperSlide>
     
    </Swiper>
    </>
  )
}

export default Landingpage