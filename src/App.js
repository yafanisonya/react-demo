import React from 'react'

class App extends React.PureComponent{
  constructor(props) {
    super(props);
    this.state = {
      n : 1,
      array:[1,2,3],
      width:undefined
    };
    this.divRef = React.createRef();
  }
  onClick = () =>{
    this.setState(state => ({n: state.n +1}));
  };
  componentDidMount(): void {
    // const div = document.getElementById('xxx')
    // console.log(div)
    // const width = div.getBoundingClientRect().width
    // this.setState({width:width})

    const div2 = this.divRef.current;
    console.log(div2)
    const {width} = div2.getBoundingClientRect()
    this.setState({width:width})
  }

  render(){
    return(
      <>
      {/*<div id="xxx">GetElementById: {this.state.width}</div>*/}
      <div ref={this.divRef}>Hello,World,{this.state.width} px </div>
      </>
    )
  }
}
export default App;