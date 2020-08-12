import React from 'react'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { n: 1 }
  }
  onClick = () => {
    this.setState(state => ({ n: state.n + 1 }))
  }
  render () {
    return {
      < div >
      { this.state.n }
      < button onClick = { this.onClick } > +1 </button >
      </div >
    }
}
}

export default App;