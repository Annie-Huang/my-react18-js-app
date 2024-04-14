import { useEffect, useState } from 'react';

/*
import { useRef } from 'react';
import { useLocalStorage1 } from './useLocalStorage';

function App() {
  const [storedValue, setValue] = useLocalStorage1('todos', []);
  const inputRef = useRef();

  const handleAddTodo = (e) => {
    e.preventDefault();

    if (!inputRef.current.value.trim()) return;

    setValue([
      ...storedValue,
      { id: Date.now(), text: inputRef.current.value, completed: false },
    ]);
    inputRef.current.value = '';
  };

  const handleDeleteTodo = (id) => {
    setValue(storedValue.filter((todo) => todo.id !== id));
  };

  const handleCompleteToDo = (id) => {
    setValue(
      storedValue.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  console.log('storeValue', storedValue);

  return (
    <div className='container'>
      <h2>My To-Do List</h2>
      <form onSubmit={handleAddTodo}>
        <input type='text' placeholder='Add a new task' ref={inputRef} />
        <button type='submit'>Add Todo</button>
      </form>
      <ul>
        {storedValue.map((todo) => (
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

export default App;

*/

// 1st version, set method in local state is different from the set method in the return list.
// setStoredValue !== setValue
export const useLocalStorage1 = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Get Error', error.message);
      return initialValue;
    }
  });

  // [{"id":1713069649840,"text":"fewa","completed":false},{"id":1713070623471,"text":"fewafewa","completed":true}]
  const setValue = (value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      setStoredValue(value);
    } catch (error) {
      console.error('Get Error', error.message);
    }
  };

  return [storedValue, setValue];
};

/*
import { useRef } from 'react';
import { useLocalStorage2 } from './useLocalStorage';

function App() {
  const [storedValue, setStoredValue] = useLocalStorage2('todos', []);
  const inputRef = useRef();

  const handleAddTodo = (e) => {
    e.preventDefault();

    if (!inputRef.current.value.trim()) return;

    setStoredValue([
      ...storedValue,
      { id: Date.now(), text: inputRef.current.value, completed: false },
    ]);
    inputRef.current.value = '';
  };

  const handleDeleteTodo = (id) => {
    setStoredValue(storedValue.filter((todo) => todo.id !== id));
  };

  const handleCompleteToDo = (id) => {
    setStoredValue(
      storedValue.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  console.log('storeValue', storedValue);

  return (
    <div className='container'>
      <h2>My To-Do List</h2>
      <form onSubmit={handleAddTodo}>
        <input type='text' placeholder='Add a new task' ref={inputRef} />
        <button type='submit'>Add Todo</button>
      </form>
      <ul>
        {storedValue.map((todo) => (
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

export default App;

* */

// 2nd version, set method in local state is in the return list.
// Use a useEffect to monitor change on key and storedValue to update in local storage.
export const useLocalStorage2 = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Get Error', error.message);
      return initialValue;
    }
  });

  // [{"id":1713069649840,"text":"fewa","completed":false},{"id":1713070623471,"text":"fewafewa","completed":true}]
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error('Get Error', error.message);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};
