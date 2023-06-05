import React from 'react';
import './FirstClassRental.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Autoplay } from 'swiper';

function FirstClassRental() {
    SwiperCore.use([Autoplay])

  return (
    <div className='first-class-rental-container'>
        <h2>Upper Class Rentals</h2>
        <p>We do offer professional car rental and limousine 
          services in our range of high-end vehicles
        </p>
               <Swiper
       modules={[Navigation, Pagination, Scrollbar, A11y]}
       spaceBetween={50}
       slidesPerView={1}
       navigation
       pagination={{ clickable: true }}
       scrollbar={{ draggable: true }}
       autoplay={{ delay: 2700 }}
    >
      <SwiperSlide className='swiper-slide'>
      
        
      <div className='class-main-div'>

        <div className='class-name'>
        <span>Toyota</span>
        </div>
        <div className='center'>
          <img src='./Lexus-RX-fsport-ultra-600x400.jpg' alt=''/>
        </div>
        <div className='class-btn'>
          <button>rent&nbsp;now&nbsp;=&gt;</button>
        </div>

</div>
    </SwiperSlide>


    <SwiperSlide className='swiper-slide'>
      
        
      <div className='class-main-div'>

        <div className='class-name'>
        <span>Camry</span>
        </div>
        <div className='center'>
          <img src='./2019-Lexus-Lineup-600x400.jpg' alt=''/>
        </div>
        <div className='class-btn'>
          <button>rent&nbsp;now&nbsp;=&gt;</button>
        </div>

</div>
    </SwiperSlide>


      <SwiperSlide className='swiper-slide'>
      
        
        <div className='class-main-div'>

          <div className='class-name'>
          <span>camaro</span>
          </div>
          <div className='center'>
            <img src='./audi-a3-600x400.jpg' alt=''/>
          </div>
          <div className='class-btn'>
            <button>rent&nbsp;now&nbsp;=&gt;</button>
          </div>

</div>
      </SwiperSlide>


    </Swiper>
    </div>
  )
}

export default FirstClassRental
