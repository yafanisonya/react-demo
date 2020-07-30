import React from 'react'

export default class Parent extends React.Component{
  constructor(props){
    super(props)
    this.state = {name:'fanison',n:1}
  }
  onClick2 = ()=>{
    this.setState({n:this.state.n + 1})
    console.log(this.state.n)
    this.setState({n:this.state.n + 1})
    console.log(this.state.n)
  }


  onClick = ()=>{
    this.setState((state)=>{
      return {n:state.n + 1}
    })
    this.setState((state)=>({n:state.n + 1}))
  }
  render(){
    return <B name={this.state.name} onClick={this.onClick} n={this.state.n}> hi </B>
  }
}

class B extends React.Component{

  render(){
    return (<div>
        {this.props.children},
        {this.props.name}
        <div>
          {this.props.n}
          <button onClick={this.props.onClick}>+1</button>
        </div>
      </div>
    )
  }
  componentWillReceiveProps(nextProps: Readonly<P>, nextContext: any): void {
    console.log(this.props);
    console.log(nextProps)
  }
}