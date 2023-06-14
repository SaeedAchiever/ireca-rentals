import './RentPageChildren.css';
import Booking from './Booking';
import "./Booking.css";
import React, { Component } from 'react';

class Lexus extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.lexus = [
      "Lexus one",
      "Lexus two",
      "Lexus three",
      "Lexus four",
      "Lexus five"
    ];
  }

  rentLexusOne = () => {
    let show = document.getElementById("booking-container");
    show.classList.toggle("display");
  }

  render() {
    return (
      <div>
        <div className='rental-body-container active-page'>
          <div className='rental-body'>
            <div className='main-car'>
              <div className='rental-img'>
                <img src='./macan-02-600x400.jpeg' />
              </div>
              <div className='rental-img-info'>
                <div className='rental-img-info-head'>
                  <button onClick={this.rentLexusOne}><a href='#booking-container'>GHC&nbsp;100 /day <span>Rent&nbsp;Me</span></a></button>
                  <h3>{this.lexus[0]}</h3>
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

          <div className='rental-body'>
            <div className='main-car'>
              <div className='rental-img'>
                <img src='./Lexus-GS-350-600x400.jpg' />
              </div>
              <div className='rental-img-info'>
                <div className='rental-img-info-head'>
                  <button onClick={this.rentLexusOne}><a href='#booking-container'>GHC&nbsp;100 /day <span>Rent&nbsp;Me</span></a></button>
                  <h3>{this.lexus[1]}</h3>
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

          <div className='rental-body'>
            <div className='main-car'>
              <div className='rental-img'>
                <img src='./2019-Lexus-ES-600x400.jpg' />
              </div>
              <div className='rental-img-info'>
                <div className='rental-img-info-head'>
                  <button onClick={this.rentLexusOne}><a href='#booking-container'>GHC&nbsp;100 /day <span>Rent&nbsp;Me</span></a></button>
                  <h3>{this.lexus[2]}</h3>
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

          <div className='rental-body'>
            <div className='main-car'>
              <div className='rental-img'>
                <img src='./2019-Lexus-Lineup-600x400.jpg' />
              </div>
              <div className='rental-img-info'>
                <div className='rental-img-info-head'>
                  <button onClick={this.rentLexusOne}><a href='#booking-container'>GHC&nbsp;100 /day <span>Rent&nbsp;Me</span></a></button>
                  <h3>{this.lexus[3]}</h3>
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

          <div className='rental-body'>
            <div className='main-car'>
              <div className='rental-img'>
                <img src='./2018_ford_mustang_ecoboost_convertible_4k_2-1280x720-1-750x420.jpg' />
              </div>
              <div className='rental-img-info'>
                <div className='rental-img-info-head'>
                  <button onClick={this.rentLexusOne}><a href='#booking-container'>GHC&nbsp;110 /day <span>Rent&nbsp;Me</span></a></button>
                  <h3>{this.lexus[4]}</h3>
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
          {/* Rest of the code */}
        </div>
      </div>
    );
  }
}

export default Lexus;
