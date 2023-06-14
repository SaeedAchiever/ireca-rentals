import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>
        <div className='footer-container'>
            <div className='footer-note'>
                <div className='footer-logo'>
                     <img src='./logo_mobile.png'/>
                </div>
                <div className='footer-main-note'>
                    <p>
                        Consectetur magna deserunt quis
                        anim velit velit dolore. In laborum
                        non aute Lorem occaecat dolore 
                        fugiat quis enim nostrud sunt duis.
                         Culpa est ad eiusmod anim nisi
                    </p>
                </div>
            </div>
            <div className='services-and-location'>
                <div className='location'>
                    <h4>get in touch</h4>
                    <section>
                        <div className='location-image'>
                            img
                        </div>
                        <ul>
                            <li>Tema comm 3,</li>
                            <li>Greater Accra</li>
                        </ul>
                    </section>
                    <section>
                        <div className='location-image'>
                            img
                        </div>
                        <ul>
                            <li>Phone: (00233) 596116171</li>
                            <li>Email: saeedleverage101@gmail.com</li>
                        </ul>
                    </section>
                    <section>
                        <div className='location-image'>
                            img
                        </div>
                        <ul>
                            <li>Mon-Sat 09:00-23:00 AM;</li>
                            <li>Sunday is closed</li>
                        </ul>
                    </section>
                </div>
                <div className='services'>
                    <h4>Our Services</h4>
                <ul>
                    <li>Corperate Travels</li>
                    <li>Special Events</li>
                    <li>Airport Transport</li>
                    <li>Wedding Limousine</li>
                </ul>
                </div>
            </div>
            <div className='copywrite'>
        <p>copywrite @ 2023 SaeedAchiever</p>
            </div>
        </div>
    </div>
  )
}

export default Footer