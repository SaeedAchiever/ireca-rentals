import React from 'react'
import './RentPageChildren.css'


function RentPageHead() {

  function showPage(event) {
    let rentalBodies = document.getElementsByClassName("rental-body-container");
    let rentalBtns = document.getElementsByClassName("btn");

    for (let rentalBody of rentalBodies) {
      rentalBody.classList.remove("active-page");
    }
    for (let rentalBtn of rentalBtns) {
      rentalBtn.classList.remove("activeBtn");
    }

    let i = Array.from(rentalBtns).indexOf(event.target);

    rentalBtns[i].classList.add("activeBtn");
    rentalBodies[i].classList.add("active-page");
  }
  
  return (
    <div>
         <div className='rental-head'>
            <h2>Great rental for you</h2>
            <span>What Kind Of Car Do You Want ?</span>
        </div>

        <div className='rental-btns'>
            <button onClick={showPage} id='rentalBtn' className=' btn activeBtn'>Lexus<sup>05</sup></button>
            <button onClick={showPage} id='rentalBtn' className=' btn'> Audi<sup>02</sup></button>
            <button onClick={showPage} id='rentalBtn' className=' btn'>Porsche<sup>04</sup></button>
            <button onClick={showPage} id='rentalBtn' className=' btn'>BMW<sup>02</sup></button>
        </div>
    </div>
  )
}

export default RentPageHead;
