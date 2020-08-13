import React from 'react'

// class App extends React.Component {
//   constructor (props) {
//     super(props)
//     this.state = { n: 1 }
//   }
//   onClick = () => {
//     this.setState(state => ({ n: state.n + 1 }))
//   }
//   render () {
//     return (
//       < div >
//         {this.state.n}
//         < button onClick={this.onClick} > +1 </button >
//       </div >)

//   }
// }

// const App = (props) => {
//   const [n, setN] = useState(0);
//   const onClick = () => {
//     setN(n + 1);
//   };
//   return (
//     <div>
//       {n}
//       <button onClick={onClick}>+1</button>
//     </div>
//   )
// }
// class App extends React.Component{
  // constructor(props) {
  //   super(props);
  //   this.state = {date: new Date()};
  // }
  // componentDidMount(): void {
  //   this.timerID = setInterval(
  //     ()=> this.tick(), 1000
  //   )
  // }
  // componentWillUnmount(): void {
  //   clearInterval(this.timerID)
  // }
  //
  // tick(){
  //   this.setState({
  //     date: new Date()
  //   })
  // }
  //
  // render(){
  //   return(
  //     <div>
  //       <h1>Hello,fanison</h1>
  //       <h2>It's {this.state.date.toLocaleTimeString()}</h2>
  //     </div>
  //   )
  // }
//}
function App(){
  function handleClick(e){
    e.preventDefault()
    console.log('The link was clicked')
  }
  return (
    <a href="#"></a>
  )
}
export default App;
