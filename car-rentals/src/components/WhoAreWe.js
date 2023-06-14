import React from "react";
import './WhoAreWe.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Autoplay } from 'swiper';


function WhoAreWe(){

    SwiperCore.use([Autoplay])


    return(
        <div> 
             <Swiper
       modules={[ Pagination, Scrollbar, A11y]}
       spaceBetween={50}
       slidesPerView={1}
       pagination={{ clickable: true }}
       scrollbar={{ draggable: true }}
       autoplay={{ delay: 3000 }}
    >

        <SwiperSlide>
        <div className="who-are-we-container">
            <div className="who-are-we-image">
                <img src="./ks-rental.jpg"/>
                <p className="hover-text">This is a small note that enlighten 
                  you on the heading you just saw 
                  above you. Have a wonderful day.
                  <button><a href="">Visit gallery</a></button>
                </p>
            </div>
                <div className="who-are-we-note">
                    <h5>what do you know about us</h5>
                    <h3>who are the <span> <a href="">iReca&apos;s ?</a> </span></h3>
                    <p>
                     This is a small note that enlighten you
                     on the heading you just saw above you. 
                     Have a wonderful day and remember this is but a demo.
                    </p>
                    <div className="who-are-we-btns">
                        <button>all vehicles</button>
                        <button>reserve now</button>
                    </div>
                </div>

            </div>
        </SwiperSlide>


        <SwiperSlide>
             <div className="call-discount">
                <div className="call-discount-call">
                    <h4>Call us today for booking <br /> your next ride</h4>
                    <h2>00233 596116171</h2>
                    <h3>operators available <br /> 24/7</h3>
                </div>

                <div className="call-discount-image">
                    <img src="./dealer.png"/>
                </div>

                <div className="call-discount-discount">
                    <h4>up to 30% discount and <br /> special offers </h4>
                    <h2>Rent a car for 7 days</h2>
                    <h5>and get 3 days <span>free</span></h5>                </div>

            </div>
        </SwiperSlide>



    </Swiper>
           

        </div>
    )

}

export default WhoAreWe;