import React, { Component } from 'react'
import './Contact.css'


export class Contact extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       firstName:"",
       lastName:"",
       email:"",
       phone:"",
       message:""
    }
  }

  handleFirstName = (event) => {
    this.setState({
      firstName: event.target.value
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

  handlePhone = (event) =>{
    this.setState({
      phone:event.target.value
    })
  }

  handleMessage = (event) =>{
    this.setState({
      message:event.target.value
    })
  }
  
  render() {
    return (
      <div>
        <div className='contact'>
            <div className='contact-container'>
                <h3>get in touch with us</h3>
                <form>
                    <input type='text' value={this.state.firstName} onChange={this.handleFirstName} placeholder='First Name' required/>
                    <input type='text' value={this.state.lastName} onChange={this.handleLastName} placeholder='Last Name' required/>
                    <input type='email' value={this.state.email} onChange={this.handleEmail} placeholder='Your Email' required/>
                    <input type='tel' value={this.state.phone} onChange={this.handlePhone} placeholder='Your Phone(Optional)'/>
                    <textarea value={this.state.message} onChange={this.handleMessage} placeholder='Your Message'></textarea> <br />
                    <span>save my email for updates</span>
                    <input type='checkbox' id='checkbox'/>
                    <button>Submit</button>
                </form>
            </div>
        </div>
      </div>
    )
  }
}

export default Contact
