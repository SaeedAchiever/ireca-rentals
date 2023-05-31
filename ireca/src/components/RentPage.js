import React from 'react'
import './RentPage.css'
import Lexus from './Lexus'
import RentPageHead from './RentPageHead'
import Audi from './Audi'
import Porsche from './Porsche'
import BMW from './BMW'

function RentPage() {


  return (
    <div className='rent-page-container'>
      <RentPageHead />
       <Lexus />
       <Audi />
       <Porsche />
       <BMW />
    </div>
  )
}

export default RentPage
