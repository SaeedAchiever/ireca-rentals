import './RentPageChildren.css';
import React, { Component } from 'react';

class Lexus extends Component {
  constructor(props) {
    super(props);

    this.state = 
      [
        {
          name:"Lexus One",
          imgUrl:"./macan-02-600x400.jpeg"
        },
        {
          name:"Lexus Two",
          imgUrl:"./Lexus-GS-350-600x400.jpg"
        },
        {
          name:"Lexus Three",
          imgUrl:"./2019-Lexus-ES-600x400.jpg"
        },
        {
          name:"Lexus Four",
          imgUrl:"./2019-Lexus-Lineup-600x400.jpg"
        },
        {
          name:"Lexus Five",
          imgUrl:"./2018_ford_mustang_ecoboost_convertible_4k_2-1280x720-1-750x420.jpg"
        }
      ]
  }
 
  

  rentCar = (name) => {

    // Getting individual buttons for its own function

    if(name){
      document.getElementById("carName").value = name;
    }
    else if(name){
      document.getElementById("carName").value = name;
    }
    else if(name){
      document.getElementById("carName").value = name;
    }
    else if(name){
      document.getElementById("carName").value = name;
    }
    else if(name){
      document.getElementById("carName").value = name;
    }

    let show = document.getElementById("booking-container");
    show.classList.toggle("display");
  }

  render() {
    return (
      <div className='rental-body-container active-page'>
        {
          this.state.map(( {name, imgUrl}) => (
            <div>
              <div className='rental-body'>
               <div className='main-car'>
                <div className='rental-img'>
                 <img src={imgUrl} alt='Cars for rent'/>
               </div>
              <div className='rental-img-info'>
                <div className='rental-img-info-head'>
                  <button onClick={() => this.rentCar(name)} id='btn'>
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

export default Lexus;
