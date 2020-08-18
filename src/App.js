import React from 'react'
import { render } from '@testing-library/react';
const rootElement = document.getElementById('root');

function myUseState (initialValue) {
  var state = initialValue;
  function setState (newState) {
    state = newState;
    render();
  }
  return [state, setState]
}
const render = () => ReactDOM.render(<App />, rootElement)

function App () {
  const [n, setN] = React.useState(0);
  return (
    <div className="App">
      <p>{n}</p>
      <p><button onClick={() => setN(n + 1)}>+1</button></p>
    </div>
  )
}
export default App;
