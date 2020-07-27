import React from 'react';
import ReactDOM from 'react-dom';

import "./style.css"

function App(){
  return (
    <div className="App">
      Outer
      <Son/>
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
        Middle n: {this.state.n}
        <button onClick={()=> this.add()}> +1 </button>
        <Grandson/>
      </div>
    );
  }
}

const Grandson = ()=>{
  const [n,setN] = React.useState(0);
  return(
    <div className="Grandson">
        Inner n: {n}
        <button onClick={()=>setN(n+1)}>+1</button>
    </div>
  );
};

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
