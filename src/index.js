import React from 'react'
import ReactDOM from 'react-dom'
const rootElement = document.getElementById('root');

function App () {
  const nRef = React.useRef(0);
  const log = () => setTimeout(() => console.log(`n: ${nRef.current}`), 3000)
  return (
    <div className="App">
      <p>{nRef.current}</p>
      <p>
        <button onClick={() => (nRef.current += 1)}>+1</button>
        <button onClick={log}>log</button>
      </p>
    </div>
  )
}

ReactDOM.render(<App />, rootElement)
