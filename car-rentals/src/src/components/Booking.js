import React, { Component } from 'react'
import "./Booking.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'


class Booking extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
          
      }
    }

    closeBoking = () =>{
        let show = document.getElementById("booking-container");
        show.classList.remove("display")
    }
    
    render(){
  return (
    <>
        <div className='booking-container' id='booking-container'>
            <div className='booking'>

                <div className='booking-image'>
            <button id='close' onClick={this.closeBoking}><FontAwesomeIcon icon={faClose} /></button>

                    <img src='./macan-02-600x400.jpeg'/>
                </div>
                <div className='booking-note'>
                    <form>
                        <label>Salutation</label>
                        <select>
                            <option className='me'>--select--</option>
                            <option>mr</option>
                            <option>mrs</option>
                        </select>
                        <label>car name</label>
                        <input type='text' readOnly value={'Lexus One'}/>
                        <label>first name</label>
                        <input type='text'/>
                        <label>last name</label>
                        <input type='text'/>
                        <label>email</label>
                        <input type='email'/>
                        <label>city</label>
                        <input type='text'/>
                        <label>street no</label>
                        <input type='text'/>
                        <label>post code</label>
                        <input type='text'/>
                        <label>tele no</label>
                        <input type='text'/>
                        <label>pickup date</label>
                        <input type='date'/>

                        <label>pickup time</label>
                        <input type='time'/>

                        <label>return date</label>
                        <input type='date'/>

                        <label>return time</label>
                        <input type='time'/>

                        <label>pick up location</label>
                        <input type='text'/>
                        <label>return location</label>
                        <input type='text'/>
                        <label>message</label>
                        <textarea placeholder='Message (Optional)' className='message'>

                        </textarea>

                        <span>I hereby confirm that i have read and consent 
                              the terms and conditions
                         <input type='checkbox' id='checkbox'/> <br />
                         </span>

                        <button>Book now</button>
                    </form>
                </div>
                <div className='similar-rentals'>

                </div>
            </div>
        </div>
    </>
  )
    }
}

export default Booking




