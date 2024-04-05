import './App.css';
function ToDoList() {
  return (
    <div className='container'>
      <form>
        <input type='text' placeholder='Add a new task' />
        <button>Add Todo</button>
      </form>
    </div>
  );
}

export default ToDoList;
