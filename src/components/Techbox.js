import React, { Component } from 'react'

class Techbox extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)

    this.state = {
      techSkills: [],
      color: '',
    }

    this.addTech = this.addTech.bind(this)
    this.renderTech = this.renderTech.bind(this)
    this.changeColor = this.changeColor.bind(this)
  }

  changeColor() {
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
        const element = document.getElementsByTagName('h1')[0]
        element.style.color = `rgb(${this.state.color})`
      }
    )
  }

  addTech = (e) => {
    if (e.target.files[0] !== undefined) {
      this.setState((prevState) => {
        const newArray = [...prevState.techSkills]
        newArray.push(e.target.files[0])
        return { techSkills: newArray }
      })
    }
  }

  renderTech() {
    // console.log(this.state)
    return this.state.techSkills.map((eachImage, index) => (
      <img
        key={index}
        alt=''
        src={URL.createObjectURL(eachImage)}
        onClick={(e) => {
          if (e.target.tagName === 'IMG') {
            e.stopPropagation()
            console.log(e)
          }
        }}
      />
    ))
  }

  render() {
    return (
      <div id='tech-big-box'>
        <h1 onClick={this.changeColor}>Technologies</h1>
        <label htmlFor='techImageInput' id='techInput'>
          <div id='tech-box'>
            <form>
              <label htmlFor='techImageInput' id='techInput'></label>
              <input
                onChange={this.addTech}
                type='file'
                id='techImageInput'
                name='imageInput'
                accept='image/*'
              />
            </form>
            <div id='imageBox2'>{this.renderTech()}</div>
          </div>
        </label>
      </div>
    )
  }
}

export default Techbox
