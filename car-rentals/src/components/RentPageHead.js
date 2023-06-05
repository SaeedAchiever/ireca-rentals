import React from 'react'
import './RentPageChildren.css'


function RentPageHead() {
 /* let lexus = document.getElementById("lexus");
  let audi = document.getElementById("audi");
  let porsche = document.getElementById("porsche");
  let bmw = document.getElementById("bmw");

  // LEXUS DISPLAY

  function showLexus (){
    lexus.style.display = "block";
    audi.style.display = "none";
    porsche.style.display = "none";
    bmw.style.display = "none";
  }

  // AUDI DISPLAY

  function showAudi (){
    lexus.style.display = "none";
    audi.style.display = "block";
    porsche.style.display = "none";
    bmw.style.display = "none";
  }

  // PORSCHE DISPLAY

  function showPorsche (){
    lexus.style.display = "none";
    audi.style.display = "none";
    porsche.style.display = "block";
    bmw.style.display = "none";
  }

  // BMW DISPLAY

  function showBMW (){
    lexus.style.display = "none";
    audi.style.display = "none";
    porsche.style.display = "none";
    bmw.style.display = "block";
  }*/
  function showPage(props, event){
    let rentalBody = document.getElementsByClassName("rental-body-container");
    let rentalBtn = document.getElementsByClassName("btn");

    for(rentalBody of rentalBody) {
      rentalBody.classList.remove("active-page");
    }
    for(rentalBtn of rentalBtn) {
      rentalBtn.classList.remove("activeBtn");
    }
    let i = Array.from(rentalBtn).indexOf(event.target);

    rentalBtn[i].classList.add("activeBtn");
    rentalBody[i].classList.add("active-page");
  }
  
  return (
    <div>
         <div className='rental-head'>
            <h2>Great rental for you</h2>
            <span>What Kind Of Car Do You Want ?</span>
        </div>

        <div className='rental-btns'>
            <button onClick={showPage} id='rentalBtn' className=' btn'> Audi<sup>02</sup></button>
            <button onClick={showPage} id='rentalBtn' className=' btn activeBtn'>Lexus<sup>05</sup></button>
            <button onClick={showPage} id='rentalBtn' className=' btn'>Porsche<sup>04</sup></button>
            <button onClick={showPage} id='rentalBtn' className=' btn'>BMW<sup>02</sup></button>
        </div>
    </div>
  )
}

export default RentPageHead
