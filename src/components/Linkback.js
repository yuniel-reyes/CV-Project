import React from 'react'
import Image from './Image'

class LinkBack extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)

    this.state = {
      color: '',
    }

    this.generateColor = this.generateColor.bind(this)
  }

  // change color of the left banner
  //method that generates a number between 0 and 255
  // (include)
  generateColor() {
    const finalColor = []
    for (let colorC = 0; colorC < 3; colorC++) {
      let color = Math.floor(Math.random() * 255)
      finalColor.push(color)
    }
    this.setState(
      {
        color: finalColor.join(','),
      },
      () => {
        const element = document.getElementById('linkBack')
        element.style.backgroundColor = `rgb(${this.state.color})`
      }
    )
  }

  render() {
    return (
      <div id='linkBack'>
        <span className='change-color' onClick={this.generateColor}></span>
        <Image />
        <h1>Technologies</h1>
      </div>
    )
  }
}

export default LinkBack
