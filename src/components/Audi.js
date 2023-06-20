import './RentPageChildren.css';
import Booking from './Booking';
import "./Booking.css";
import React, { Component } from 'react';

class Audi extends Component {
  constructor(props) {
    super(props);

    this.state = 
      [
        {
          name:"Audi One",
          imgUrl:"./audi-a3-600x400.jpg"
        },
        {
          name:"Audi Two",
          imgUrl:"./2019-lexus-lf-lc-600x400.jpg"
        },
        {
          name:"Audi Three",
          imgUrl:"./ag_mc_ford_raptor_5k-1280x720-1-750x420.jpg"
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
          this.state.map(( {name, imgUrl}) => (
            <div>
              <div className='rental-body'>
               <div className='main-car'>
                <div className='rental-img'>
                 <img src={imgUrl} />
               </div>
              <div className='rental-img-info'>
                <div className='rental-img-info-head'>
                  <button onClick={() => this.rentCar(name)}>
                    <a href='#booking-container'>GHC&nbsp;100 /day 
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

export default Audi;
