import React, { Component } from 'react'
import uniqid from 'uniqid'

class Experience extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)

    this.state = {
      experiences: [],
    }

    this.newExperience = this.newExperience.bind(this)
    this.removeExperience = this.removeExperience.bind(this)
  }

  removeExperience(e) {
    // Dont know why this can be passed inside the setState
    const { id } = e.target.parentNode
    this.setState((prevState) => {
      const newArray = [...prevState.experiences]
      for (const eachArrItem of newArray) {
        if (id === eachArrItem.props.id) {
          // find the experience
          const thisExperience = newArray.findIndex((eachItem) => {
            return eachArrItem === eachItem
          })
          newArray.splice(thisExperience, 1)
        }
      }
      return { experiences: newArray }
    })
  }

  newExperience() {
    this.setState((prevState) => {
      const newArray = [...prevState.experiences]
      const newExperience = (
        <div key={uniqid()} id={uniqid()}>
          <form>
            <p>
              <input type='text' placeholder='Position' />
            </p>
            <p>
              <input type='text' placeholder='Company' />
              <input id='date' type='date' placeholder='From' />
              <input id='date' type='date' placeholder='To' />
              <br></br>
            </p>
          </form>
          <button
            type='button'
            id='remove-experience'
            onClick={this.removeExperience.bind(this)}
          >
            Remove
          </button>
        </div>
      )
      newArray.push(newExperience)
      return { experiences: newArray }
    })
  }

  render() {
    return (
      <div id='experience-box'>
        <h2 id='experience-text'>Experience</h2>
        {this.state.experiences}
        <button type='button' id='add-experience' onClick={this.newExperience}>
          Add
        </button>
      </div>
    )
  }
}

export default Experience
