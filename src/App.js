import React from 'react'
const App = ()=>{
  return (
    <div>
      App
      <Component numbers={['a','b','c']}/>
    </div>

  )
}
const Component = (props) => {
  const array = []
  for(let i=0;i<props.numbers.length;i++){
    array.push(<div>下标{i}值为{props.numbers[i]}</div>)
  }
  return <div>{ array }</div>
}
export default App