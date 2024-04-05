import './App.css';
import { useState } from 'react';

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = (e) => {
    console.log('get into submit');
    e.preventDefault();
    setTodos([...todos, inputValue]);
    setInputValue('');
  };

  console.log('inputValue', inputValue);

  return (
    <div className='container'>
      {/*<form onSubmit={handleAddTodo}>*/}
      <form>
        <input
          type='text'
          placeholder='Add a new task'
          onChange={(e) => setInputValue(e.target.value)}
        />
        {/*<button type='submit'>Add Todo</button>*/}
        <button onClick={handleAddTodo}>Add Todo</button>
      </form>
    </div>
  );
}

export default ToDoList;
