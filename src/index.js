import React, { createContext, useState, useContext } from 'react'
import ReactDOM from 'react-dom'

import "./style.css"

const C = createContext(null);

function App () {
  console.log("App执行了");
  const [n, setN] = useState(0);
  return (
    <C.Provider value={{ n, setN }}>
      <div className="App">
        <Baba />
      </div>
    </C.Provider>
  )
}

function Baba () {
  const { n, setN } = useContext(C);
  return (
    <div>
      我是outer n:{n} <Child />
    </div>
  )
}

function Child () {
  const { n, setN } = useContext(C);
  const onClick = () => {
    setN(i => i + 1)
  };
  return (
    <div>
      我是inner 我得到的 n: {n}
      <button onClick={onClick}>+1</button>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)