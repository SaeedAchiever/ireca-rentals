import React, { Component } from 'react';
import './RentNow.css'

class RentNow extends Component{

    constructor(props){
        super(props)
        this.state = [

            // Lexus

            {
                name:"Lexus One",
                imgUrl:"./macan-02-600x400.jpeg",
                price:100
            },
            {
                name:"Lexus Two",
                imgUrl:"./Lexus-GS-350-600x400.jpg",
                price:205
            },
            {
                name:"Lexus Three",
                imgUrl:"./2019-Lexus-ES-600x400.jpg",
                price:110
            },
            {
                name:"Lexus Four",
                imgUrl:"./2019-Lexus-Lineup-600x400.jpg",
                price:135
            },
            {
                name:"Lexus Five",
                imgUrl:"./2018_ford_mustang_ecoboost_convertible_4k_2-1280x720-1-750x420.jpg",
                price:210
            },

            // Audi

            {
                name:"Audi One",
                imgUrl:"./audi-a3-600x400.jpg",
                price:115
            },
            {
                name:"Audi Two",
                imgUrl:"./2019-lexus-lf-lc-600x400.jpg",
                price:140
            },
            {
                name:"Audi Three",
                imgUrl:"./ag_mc_ford_raptor_5k-1280x720-1-750x420.jpg",
                price:200
            },

            // Porsche

            {
                name:"Porsche One",
                imgUrl:"./ag_mc_ford_raptor_5k-1280x720-1-750x420.jpg",
                price:235
            },
            {
                name:"Porsche Two",
                imgUrl:"./audi-a3-600x400.jpg",
                price:205
            },
            {
                name:"Porsche Three",
                imgUrl:"./2018_ford_mustang_ecoboost_convertible_4k_2-1280x720-1-750x420.jpg",
                price:299
            },

            // BMW

            
            
        ]
    }

    rentCar = (name) => {

        // Getting individual buttons for its own function
    
        if(name){
          document.getElementById("carName").value = name;
        }
    
        let show = document.getElementById("booking-container");
        show.classList.toggle("display");
      }


    render(){
        return(
            <div className="rent-now-body-container">
                {
                    this.state.map(({name, imgUrl, price}) =>(
                            <div key={name}>
            <div className='rent-now-body'>
               <div className='rent-now-main-car'>
                <div className='rent-now-img'>
                 <img src={imgUrl} alt='Cars for rent'/>
               </div>
              <div className='rent-now-img-info'>
                <div className='rent-now-img-info-head'>
                  <button onClick={() => this.rentCar(name)} id='btn'>
                    <a href='#booking-container'>GHC&nbsp;{price} /day 
                     <span>Rent&nbsp;Me</span>
                    </a>
                  </button>
                  <h3>{name}</h3>
                  <p><span>0</span> reviews</p>
                 </div>
                 <div className='rent-now-img-info-body'>
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
                    ))
                }
            </div>
        )
        }
}

export default RentNow