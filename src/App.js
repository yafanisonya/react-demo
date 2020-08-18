import React from 'react'
const rootElement = document.getElementById('root');

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
