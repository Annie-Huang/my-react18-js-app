import './App.css';
import { useState } from 'react';

/*
1. Todo List Application
A classic and versatile project, creating a Todo list can range from simple implementations focusing on
basic state management and event handling to more complex versions incorporating features like filtering,
sorting, persistence (e.g., using local storage), or even backend integration.

### 1. **Todo List Application**
- **Challenge:** Build a simple Todo List application where users can add, delete, and mark tasks as completed.
This challenge tests basic React concepts, including component structure, state management, and event handling.
*/
function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = (e) => {
    // console.log('get into submit');
    e.preventDefault();

    if (!inputValue.trim()) return;

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
