import React from 'react'
import LinkBack from './components/Linkback'
import Rightback from './components/Rightback'

class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id='cv'>
        <LinkBack />
        <Rightback />
      </div>
    )
  }
}

export default App
