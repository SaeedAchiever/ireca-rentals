import React from 'react'
import './RentPage.css'
import Lexus from './Lexus'
import RentPageHead from './RentPageHead'
import Audi from './Audi'
import Porsche from './Porsche'
import BMW from './BMW'
import Booking from './Booking'

function RentPage() {


  return (
    <div className='rent-page-container' id='rent-page'>
      <RentPageHead />
      <Booking />
       <Lexus />
       <Audi />
       <Porsche />
       <BMW />
    </div>
  )
}

export default RentPage
