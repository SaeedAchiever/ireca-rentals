import React, { Component } from 'react'
import "./Booking.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'


class Booking extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
        salutation:"",
        firstName:"",
        lastName:"",
        email:"",
        city:"",
        streetNo:"",
        postCode:"",
        phone:"",
        pickUpDate:"",
        returnDate:"",
        returnTime:"",
        pickUpLocation:"",
        returnLocation:"",
        message:""
      }
    }

    closeBoking = () =>{
        let show = document.getElementById("booking-container");
        show.classList.remove("display")
    }

    // Onchange Handlers

    handleSalutation = (event) => {
        this.setState({
            salutation:event.target.value
        })
    }


    handleFirstName = (event) =>{
        this.setState({
            firstName:event.target.value
        })
    }

    handleLastName = (event) =>{
        this.setState({
            lastName:event.target.value
        })
    }

    handleEmail = (event) =>{
        this.setState({
            email:event.target.value
        })
    }

    handleCity = (event) =>{
        this.setState({
            city:event.target.value
        })
    }

    handleStreetNo = (event) =>{
        this.setState({
            streetNo:event.target.value
        })
    }

    handlePostCode = (event) =>{
        this.setState({
            postCode:event.target.value
        })
    }

    handlePhone = (event) =>{
        this.setState({
            phone:event.target.value
        })
    }

    handlePickUpDate = (event) =>{
        this.setState({
            pickUpDate:event.target.value
        })
    }

    handlePickUpTime = (event) =>{
        this.setState({
            pickUpTime:event.target.value
        })
    }


    handleReturnDate = (event) =>{
        this.setState({
            returnDate:event.target.value
        })
    }

    handleReturnTime = (event) =>{
        this.setState({
            returnTime:event.target.value
        })
    }

    handlePickUpLocation = (event) =>{
        this.setState({
            pickUpLocation:event.target.value
        })
    }

    handleReturnLocation = (event) =>{
        this.setState({
            returnLocation:event.target.value
        })
    }

    handleMessage = (event) =>{
        this.setState({
            message:event.target.value
        })
    }
    
    render(){
  return (
    <React.Fragment>
        <div className='booking-container'
             id='booking-container'>
            <div className='booking'>

                <div className='booking-btn'>
                    <button id='close' onClick={this.closeBoking}>
                        <FontAwesomeIcon icon={faClose} />
                    </button>
                </div>

                <div className='booking-note'>
                    <form>
                        <label>Salutation</label>
                        <select onChange={this.handleSalutation} value={this.state.salutation}>
                            <option>mr</option>
                            <option>mrs</option>
                            <option>master</option>
                            <option>miss</option>
                        </select>

                        <label>car name</label>
                        <input id='carName' readOnly />

                        <label>first name</label>
                        <input type='text' value={this.state.firstName} onChange={this.handleFirstName} required />

                        <label>last name</label>
                        <input type='text' value={this.state.lastName} onChange={this.handleLastName} required/>

                        <label>email</label>
                        <input type='email' value={this.state.email} onChange={this.handleEmail} required/>

                        <label>city</label>
                        <input type='text' value={this.state.city} onChange={this.handleCity} required/>

                        <label>street no</label>
                        <input type='text' value={this.state.streetNo} onChange={this.handleStreetNo} required/>

                        <label>post code</label>
                        <input type='text' value={this.state.postCode} onChange={this.handlePostCode} placeholder='Optional'/>

                        <label>phone no</label>
                        <input type='number' value={this.state.phone} onChange={this.handlePhone} required/>

                        <label>pickup date</label>
                        <input type='date' value={this.state.pickUpDate} onChange={this.handlePickUpDate} required/>

                        <label>pickup time</label>
                        <select onChange={this.handlePickUpTime} value={this.state.pickUpTime}>
                            <option>8 : 00 am</option>
                            <option>8 : 30 am</option>
                            <option>9 : 00 am</option>
                            <option>9 : 30 am</option>
                            <option>10 : 00 am</option>
                            <option>10 : 30 am</option>
                            <option>11 : 00 am</option>
                            <option>11 : 30 am</option>
                            <option>12 : 00 am</option>
                            <option>12 : 30 am</option>
                            <option>1 : 00 pm</option>
                            <option>1 : 30 pm</option>
                            <option>2 : 00 pm</option>
                            <option>2 : 30 pm</option>
                            <option>3 : 00 pm</option>
                            <option>3 : 30 pm</option>
                            <option>4 : 00 pm</option>
                        </select>

                        <label>return date</label>
                        <input type='date' value={this.state.returnDate} onChange={this.handleReturnDate}/>

                        <label>return time</label>
                        <select onChange={this.handleReturnTime} value={this.state.returnTime}>
                            <option>8 : 00 am</option>
                            <option>8 : 30 am</option>
                            <option>9 : 00 am</option>
                            <option>9 : 30 am</option>
                            <option>10 : 00 am</option>
                            <option>10 : 30 am</option>
                            <option>11 : 00 am</option>
                            <option>11 : 30 am</option>
                            <option>12 : 00 am</option>
                            <option>12 : 30 am</option>
                            <option>1 : 00 pm</option>
                            <option>1 : 30 pm</option>
                            <option>2 : 00 pm</option>
                            <option>2 : 30 pm</option>
                            <option>3 : 00 pm</option>
                            <option>3 : 30 pm</option>
                            <option>4 : 00 pm</option>
                        </select>

                        <label>pick up location</label>
                        <input type='text' value={this.state.pickUpLocation} onChange={this.handlePickUpLocation} required/>

                        <label>return location</label>
                        <input type='text' value={this.state.returnLocation} required onChange={this.handleReturnLocation}/>

                        <label>message</label>
                        <textarea placeholder='Message (Optional)...'
                                  className='message'
                                  value={this.state.message}
                                  onChange={this.handleMessage}>

                        </textarea>

                        <span>I hereby confirm that i have read and consent 
                              the <a href='#'>terms and conditions</a>
                         <input type='checkbox' id='checkbox'/> <br />
                         </span>

                        <button>Book now</button>
                    </form>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
    }
}

export default Booking




