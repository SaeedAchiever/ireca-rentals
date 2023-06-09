import React from "react";
import './Testimonial.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.css';

function Testimonial(){
    return(
        <div>
            <div className="testimonial-container">

            
            <Swiper
       modules={[ Pagination, Scrollbar, A11y]}
       spaceBetween={50}
       slidesPerView={1}
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
                <span className="stars">
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStarHalfAlt}/>
                </span>
            </p>
        </div>
        <div className='main-testimony-image'>
            <img src="./Snapchat-1230045186.jpg" alt="Reviewer"/>
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
                <span className="stars">
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                </span>
            </p>
        </div>
        <div className='main-testimony-image'>
            <img src="./Snapchat-1699632714.jpg" alt="Reviewer"/>
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
                <span className="stars">
                <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                </span>
            </p>
        </div>
        <div className='main-testimony-image'>
            <img src="./Snapchat-997129417.jpg" alt="Reviewer"/>
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
                <span className="stars">
                <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                </span>
            </p>
        </div>
        <div className='main-testimony-image'>
            <img src="./zibur.jpg" alt="Reviewer"/>
        </div>
      </div>
      </SwiperSlide>

            

    </Swiper>
            </div>
            </div>
    )
}

export default Testimonial;