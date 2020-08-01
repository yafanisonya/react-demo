import React from 'react'

class App extends React.PureComponent{
  constructor(props) {
    super(props);
    this.state = {
      n : 1
    };
  }
  onClick = () =>{
    this.setState(state => ({n: state.n +1}));
    this.setState(state =>({n: state.n - 1}));
  };
  render(){
    const x = (
      //<React.Fragment>
        <>
        <div>hi</div>
        <div>
          {this.state.n}
          <button onClick={this.onClick}>+1-1</button>
        </div>
        </>
      //</React.Fragment>

    )
    console.log(x); //虚拟DOM
    return x
  }
}
export default App;