import React, { Component } from 'react'

class Description extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id='description-box'>
        <form>
          <p id='name-box'>
            <input type='text' id='name' placeholder='John Doe' />
          </p>
          <p id='title-box'>
            <textarea
              id='title'
              name='title'
              cols='22'
              rows='2'
              placeholder='Rect Developer'
            ></textarea>
          </p>
          <p id='profile-box'>
            <textarea
              id='profile'
              name='profile'
              cols='40'
              rows='6'
              placeholder='Profile'
            ></textarea>
          </p>
        </form>
      </div>
    )
  }
}

export default Description
