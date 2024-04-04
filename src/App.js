import { useState } from 'react';

// const Square = ({ value }) => {
const Square = () => {
  const [value, setValue] = useState(null);

  const handleClick = () => {
    // console.log('clicked!');
    setValue('X');
  };

  return (
    <button className='square' onClick={handleClick}>
      {value}
    </button>
  );
};

const Board = () => {
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
  );*/
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
  );
};

export default Board;
