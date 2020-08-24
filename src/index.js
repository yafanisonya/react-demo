import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App () {
  const [user, setUser] = useState({ name: 'fanison', age: 18 })
  const onClick = () => {
    setUser({
      name: 'yafanison'
    })
  }
  return (
    <div className="App">
      <h1>{user.name}</h1>
      <h2>{user.age}</h2>
      <button onClick={onClick}></button>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
