import './RentPageChildren.css';
import "./Booking.css";
import React, { Component } from 'react';

class BMW extends Component {
  constructor(props) {
    super(props);

    this.state = 
      [
        {
          name:"BMW One",
          imgUrl:"./Lexus-RX-fsport-ultra-600x400.jpg",
          price:115
        },
        {
          name:"BMW Two",
          imgUrl:"./2019-lexus-lf-lc-600x400.jpg",
          price:140
        },
        {
          name:"BMW Three",
          imgUrl:"./ag_mc_ford_raptor_5k-1280x720-1-750x420.jpg",
          price:200
        }
      ]
  }

  rentCar = name =>{
        // Getting individual buttons for its own function

        if(name){
          document.getElementById("carName").value = name;
        }

        // Showing The Booking Form

        let show = document.getElementById("booking-container");
        show.classList.toggle("display");
  }

  render() {
    return (
      <div className='rental-body-container'>
        {
          this.state.map(( {name, imgUrl, price}) => (
            <div key={name}>
              <div className='rental-body'>
               <div className='main-car'>
                <div className='rental-img'>
                 <img src={imgUrl} alt='Car'/>
               </div>
              <div className='rental-img-info'>
                <div className='rental-img-info-head'>
                  <button onClick={() => this.rentCar(name)}>
                    <a href='#booking-container'>GHC&nbsp;{price} /day 
                     <span>Rent&nbsp;Me</span>
                    </a>
                  </button>
                  <h3>{name}</h3>
                  <p><span>0</span> reviews</p>
                 </div>
                 <div className='rental-img-info-body'>
                  <ul>
                    <li>2020</li>
                    <li>Tiptronic</li>
                    <li>2500 cc</li>
                  </ul>
                  <ul>
                    <li>Petrol</li>
                    <li>5</li>
                    <li>5 Doors</li>
                  </ul>
                 </div>
              </div>
            </div>
          </div>
        </div>
          ))}
      </div>
    );
  }
}

export default BMW;
