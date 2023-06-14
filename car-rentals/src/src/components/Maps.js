import React from 'react'
import './Maps.css'

function Maps(){

    return(
        <div>
            <div className='maps-container'>
                <div className='maps-head'>
                    <h2><i><a href=''>view us</a> on maps</i></h2>
                </div>

                <div className='maps-body'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4066296.0144234803!2d-2.4509291375000193!3d5.568168700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9a0c19d21599%3A0xda33c2f824da0e73!2sGhana%20Car%20Rentals!5e0!3m2!1sen!2sgh!4v1686010728379!5m2!1sen!2sgh" title='Map'>

                </iframe>
                </div>
            </div>
        </div>
    )
}

export default Maps;