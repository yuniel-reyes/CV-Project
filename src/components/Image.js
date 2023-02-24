import React, { Component } from 'react'

class Image extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)

    this.showImage = this.showImage.bind(this)
    this.removeLines = this.removeLines.bind(this)
  }

  showImage = (e) => {
    const imgElement = document.getElementById('output')
    imgElement.src = URL.createObjectURL(e.target.files[0])
    this.removeLines()
  }

  removeLines() {
    const spanOne = document.getElementById('spanOne')
    const spanTwo = document.getElementById('spanTwo')
    spanOne.style.display = 'none'
    spanTwo.style.display = 'none'
  }

  render() {
    return (
      <div id='imageBox'>
        <label htmlFor='imageInput' id='spanOne'>
          <span id='imageSquare-one'></span>
        </label>
        <form>
          <label htmlFor='imageInput'></label>
          <input
            onChange={this.showImage}
            type='file'
            id='imageInput'
            name='imageInput'
            accept='image/*'
          />
        </form>
        <label htmlFor='imageInput' id='spanTwo'>
          <span id='imageSquare-two'></span>
        </label>
        <label htmlFor='imageInput'>
          <img id='output' alt='' width='200' />
        </label>
      </div>
    )
  }
}

export default Image
