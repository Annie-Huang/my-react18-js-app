import './App.css';
import { useState } from 'react';

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = (e) => {
    // console.log('get into submit');
    e.preventDefault();
    setTodos([...todos, { id: Date.now(), text: inputValue }]);
    setInputValue('');
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  console.log('inputValue', inputValue);
  console.log('todos', todos);

  return (
    <div className='container'>
      {/*<form onSubmit={handleAddTodo}>*/}
      <form>
        <input
          type='text'
          value={inputValue}
          placeholder='Add a new task'
          onChange={(e) => setInputValue(e.target.value)}
        />
        {/*<button type='submit'>Add Todo</button>*/}
        <button onClick={handleAddTodo}>Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className='todoItem'>
            {todo.text}
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
