import React, { Component } from 'react'
import email from './img/email.png'
import github from './img/github.png'
import phone from './img/phone.png'
import linkedin from './img/linkedin.png'

class Contact extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id='contact-box'>
        <h2>Contact</h2>
        <form>
          <p className='first-input-box input-box'>
            <img alt='' src={phone} />
            <input type='tel' />
          </p>
          <p className='second-input-box input-box'>
            <img alt='' src={email} />
            <input type='email' />
          </p>
          <p className='third-input-box input-box'>
            <img alt='' src={linkedin} />
            <input type='text' />
          </p>
          <p className='fourth-input-box input-box'>
            <img alt='' src={github} />
            <input type='text' />
          </p>
        </form>
      </div>
    )
  }
}

export default Contact
