import './App.css';
import { useState } from 'react';

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = (e) => {
    // console.log('get into submit');
    if (!inputValue.trim()) return;

    e.preventDefault();
    setTodos([
      ...todos,
      { id: Date.now(), text: inputValue, completed: false },
    ]);
    setInputValue('');
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleCompleteToDo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  console.log('inputValue', inputValue);
  console.log('todos', todos);

  return (
    <div className='container'>
      <h2>My To-Do List</h2>
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
            <span className={todo.completed ? 'completed' : null}>
              {todo.text}
            </span>
            <button onClick={() => handleCompleteToDo(todo.id)}>
              {todo.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
