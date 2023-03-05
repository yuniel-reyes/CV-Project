import React, { Component } from 'react'
import Description from './Description'
import Education from './Education'
import Experience from './Experience'
import Print from '../Printbutton'

class Rightback extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id='rightBack'>
        <Print />
        <Description />
        <br></br>
        <br></br>
        <hr></hr>
        <Experience />
        <br></br>
        <hr></hr>
        <Education />
      </div>
    )
  }
}

export default Rightback
