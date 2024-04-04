import { useState } from 'react';

const Square = ({ value, onSquareClick }) => {
  // const Square = () => {
  //   const [value, setValue] = useState(null);

  const handleClick = () => {
    // console.log('clicked!');
    // setValue('X');
  };

  return (
    <button className='square' onClick={onSquareClick}>
      {value}
    </button>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

// const Board = () => {
const Board = ({ xIsNext, squares, onPlay }) => {
  /*  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));*/

  const handleClick = (i) => {
    // If it's already been set it cannot reset again. Or already got a winner, we do nothing
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();

    // nextSquares[i] = 'X';
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }

    // setSquares(nextSquares);
    // setXIsNext(!xIsNext);
    onPlay(nextSquares);
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  /*  return (
    <>
      <div className='board-row'>
        <Square value='1' />
        <Square value='2' />
        <Square value='3' />
      </div>
      <div className='board-row'>
        <Square value='4' />
        <Square value='5' />
        <Square value='6' />
      </div>
      <div className='board-row'>
        <Square value='7' />
        <Square value='8' />
        <Square value='9' />
      </div>
    </>
  );
  return (
    <>
      <div className='board-row'>
        <Square />
        <Square />
        <Square />
      </div>
      <div className='board-row'>
        <Square />
        <Square />
        <Square />
      </div>
      <div className='board-row'>
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );*/
  return (
    <>
      <div className='status'>{status}</div>
      <div className='board-row'>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className='board-row'>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className='board-row'>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
};

const Game = () => {
  // const [xIsNext, setXIsNext] = useState(true);
  // const [squares, setSquares] = useState(Array(9).fill(null));
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;

  // const currentSquares = history[history.length - 1];
  const currentSquares = history[currentMove]; // You can actually jump forward and backwards.

  const handlePlay = (nextSquares) => {
    // TODO
    // setSquares(nextSquares);
    // setHistory([...history, nextSquares]);

    console.log(currentMove);
    // This will override any steps from the currentMove+1, in case user jumpTo a few steps previously.
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);

    // setXIsNext(!xIsNext);
  };

  const jumpTo = (nextMove) => {
    // TODO
    setCurrentMove(nextMove);
    // setXIsNext(nextMove % 2 === 0);
  };

  // You can jump forwards and backwards to different step. And when you are in a before step, you can click on board to override any step from then on too.
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }

    // key is a special and reserved property in React. Keys help React identify which items have changed, are added, or are removed.
    // Keys do not need to be globally unique; they only need to be unique between components and their siblings.
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className='game'>
      <div className='game-board'>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className='game-info'>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

export default Game;
