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
      n:0,
      m:0,
      user: {
        name: "fanison",
        age: 18
      }
    };
  }
  addN(){
    // this.setState({n: this.state.n + 1 });
    // console.log(this.state.n)

    this.setState((state)=>{
      const n = this.state.n + 1
      console.log(n)
      return {n}
    });
  }
  addM(){
    this.setState({m: this.state.m + 1});
  }
  changeUser(){
      this.setState({
        user:{
          ...this.state.user,
          name: "Tom"
        }
      })
      // const user = Object.assign({},this.state.user);
      // user.name = "Tom";
      // this.setState({
      //   user:user
      // });
  }
  render(){
    return (
      <div className="Son">
        Outer传递参数：{this.props.messageForSon}
        <hr/>
        Middle n: {this.state.n}
        <button onClick={()=> this.addN()}> n + 1 </button>
        Middle m: {this.state.m}
        <button onClick={()=> this.addM()}> m + 1</button>
        <div>user.name:{this.state.user.name}</div>
        <div>user.age:{this.state.user.age}</div>
        <button onClick={()=>this.changeUser()}>changeUser</button>
        <Grandson messageForGrandson="inner 你好"/>
      </div>
    );
  }
}

const Grandson = (props)=>{
  // const [n,setN] = React.useState(0);
  // const [m,setM] = React.useState(0);
  const [state,setState] = React.useState({
    n:0,
    m:0
  })

  return(
    <div className="Grandson">
      Middle传递参数：{props.messageForGrandson}
      <hr/>
      {/*Inner n: {n}*/}
      {/*<button onClick={()=> setN(n+1)}>n+1</button>*/}
      {/*Inner m: {m}*/}
      {/*<button onClick={()=> setM(m+1)}>m+1</button>*/}
      Inner n: {state.n}
      <button onClick={()=> setState({...state,n :  state.n + 1})}> n + 1 </button>
      Inner m: {state.m}
      <button onClick={()=>setState({...state, m :  state.m + 1})}> m + 1 </button>
    </div>
  );
};

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
