import React, { Component } from 'react'

class Print extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)

    this.PrintCv = this.PrintCv.bind(this)
  }

  PrintCv() {
    window.print()
  }

  render() {
    return (
      <button type='button' id='print' onClick={this.PrintCv}>
        Generate Pdf
      </button>
    )
  }
}

export default Print
