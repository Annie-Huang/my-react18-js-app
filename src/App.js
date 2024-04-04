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

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick() {
    const nextSquares = squares.slice();
    nextSquares[0] = 'X';
    setSquares(nextSquares);
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
      <div className='board-row'>
        <Square value={squares[0]} onSquareClick={handleClick} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>
      <div className='board-row'>
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>
      <div className='board-row'>
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>
    </>
  );
};

export default Board;
