import './App.css';

const PhoneBookForm = () => {
  return (
    <form className='form'>
      <div className='form-row'>
        <label htmlFor='firstName'>First name:</label>
        <input type='text' name='firstName' id='firstName' />
      </div>
      <div className='form-row'>
        <label htmlFor='lastName'>Last name:</label>
        <input type='text' name='lastName' id='lastName' />
      </div>
      <div className='form-row'>
        <label htmlFor='phone'>Phone:</label>
        <input type='text' name='phone' id='phone' />
      </div>
    </form>
  );
};
const App = () => {
  return (
    <div className='container'>
      <PhoneBookForm />
    </div>
  );
};

export default App;
