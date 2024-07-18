import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // inital set-up code
 /*  const [count, setCount] = useState(0)

  return (
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

    function Square({value, onSquareClick}) {

      return (
        <button className="square" onClick={onSquareClick}>
          {value}
          </button>
      );
  }

// change state, from X tp 0
const [xIsNext, setXIsNext] = useState(true);
// setState
const [squares, setSquares] = useState(Array(9).fill(null));

// function toUpdate the squares array holding your App's state:
function handleClick(i) {
  // condition to lock each cell once it's clicked
  if (squares[i] || calculateWinner(squares)) {
    return;
  }

  const nextSquares = squares.slice();

  
  if (xIsNext) {
    nextSquares[i] = 'X';
  } else {
    nextSquares[i] = "0";
  }
  
  setSquares(nextSquares);
  setXIsNext(!xIsNext);
}

const winner = calculateWinner(squares);
let status;
if (winner) {
  status = "Winner: " + winner;} else {
    status = "Next Player: " + (xIsNext ? "X" : "O");
  }

    return (
      <div>
        <h1 className="title">Tic Tac Toe by 'Jahiem Mcleod'</h1>
        <div className="boardcontainer">
          <div className="status">{status}</div>
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
        </div>
      </div>
    );

    function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

}

export default App;
