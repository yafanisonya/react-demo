import React from 'react'

class App extends React.PureComponent{
  constructor(props) {
    super(props);
    this.state = {
      n : 1,
      array:[1,2,3]
    };
  }
  onClick = () =>{
    this.setState(state => ({n: state.n +1}));
  };
  render(){
    let message
    if(this.state.n % 2 ===0 ){
      message = <div>偶数</div>
    }else{
      message = <div>奇数</div>
    }
    let result = []
    for(let i=0;i<this.state.array.length;i++){
      result.push(this.state.array[i])
    }
    return(
      <div>
        {message}
        {this.state.n % 2 === 0 ? <div>偶数</div>:<span>奇数</span>}
        {this.state.n % 2 === 0 ? <div>偶数</div>:null}
        {this.state.n % 2 === 0 && <div>偶数</div>}
        <button onClick={this.onClick}>+1</button>
        <hr/>
        {this.state.array.map(n=><span key={n}>{n}</span>)}
        <hr/>
        {result}
      </div>
    )
  }
}
export default App;