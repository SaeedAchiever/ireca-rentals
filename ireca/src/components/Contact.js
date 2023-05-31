import React, { Component } from 'react'
import './Contact.css'


export class Contact extends Component {
  render() {
    return (
      <div>
        <div className='contact'>
            <div className='contact-container'>
                <h3>get in touch with us</h3>
                <form>
                    <input type='text' placeholder='First Name' required/>
                    <input type='text' placeholder='Last Name' required/>
                    <input type='email' placeholder='Your Email' required/>
                    <input type='tel' placeholder='Your Phone(Optional)'/>
                    <textarea placeholder='Your Message'></textarea> <br />
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
