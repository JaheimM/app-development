import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
// inital set-up code
  /* return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  ) */
function Square() {
  return <button className="square">1</button>;
}
    return (
      <div>
        <h1 className="title">Tic Tac Toe by 'Jahiem Mcleod'</h1>

        <div className="boardcontainer">
          <div className="board-row">
              <Square />
              <Square />
              <Square />
            </div>
            <div className="board-row">   
              <Square />
              <Square />
              <Square />
            </div>
                  <div className="board-row">
                  <Square />
                  <Square />
                  <Square />
                  </div>
            </div>
      </div>
    );
}

export default App;
