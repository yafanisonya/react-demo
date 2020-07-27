import React from 'react';
import ReactDOM from 'react-dom';

import "./style.css"

function App(){
  return (
    <div className="App">
      Outer
      <Son messageForSon="Middle 你好" />
    </div>
  )
}

class Son extends React.Component{
  constructor() {
    super();
    this.state = {
      n:0
    };
  }
  add(){
    this.setState({n: this.state.n + 1 });
  }
  render(){
    return (
      <div className="Son">
        Outer传递参数：{this.props.messageForSon}
        <hr/>
        Middle n: {this.state.n}
        <button onClick={()=> this.add()}> +1 </button>
        <Grandson messageForGrandson="inner 你好"/>
      </div>
    );
  }
}

const Grandson = (props)=>{
  const [n,setN] = React.useState(0);
  return(
    <div className="Grandson">
      Middle传递参数：{props.messageForGrandson}
        <hr/>
        Inner n: {n}
        <button onClick={()=>setN(n+1)}>+1</button>
    </div>
  );
};

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
