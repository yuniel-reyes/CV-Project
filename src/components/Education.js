import React, { Component } from 'react'
import uniqid from 'uniqid'

class Education extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)

    this.state = {
      education: [],
    }

    this.newEducation = this.newEducation.bind(this)
    this.removeEducation = this.removeEducation.bind(this)
  }

  removeEducation(e) {
    // Dont know why this can be passed inside the setState
    const { id } = e.target.parentNode
    this.setState((prevState) => {
      const newArray = [...prevState.education]
      for (const eachArrItem of newArray) {
        if (id === eachArrItem.props.id) {
          // find the experience
          const thisEducation = newArray.findIndex((eachItem) => {
            return eachArrItem === eachItem
          })
          newArray.splice(thisEducation, 1)
        }
      }
      return { education: newArray }
    })
  }

  newEducation() {
    this.setState((prevState) => {
      const newArray = [...prevState.education]
      const newEducation = (
        <div key={uniqid()} id={uniqid()}>
          <form>
            <p>
              <input type='text' placeholder='University' />
              <input type='text' placeholder='Degree' />
              <input type='text' placeholder='Subject' />
              <input type='text' placeholder='City' />
              <input type='text' placeholder='University' />
              <input id='date' type='date' placeholder='From' />
              <input id='date' type='date' placeholder='To' />
              <br></br>
            </p>
          </form>
          <button
            type='button'
            id='remove-experience'
            onClick={this.removeEducation.bind(this)}
          >
            Remove
          </button>
        </div>
      )
      newArray.push(newEducation)
      return { education: newArray }
    })
  }

  render() {
    return (
      <div id='education-box'>
        <h2 id='education-text'>Education</h2>
        {this.state.education}
        <button type='button' id='add-education' onClick={this.newEducation}>
          Add
        </button>
      </div>
    )
  }
}

export default Education
