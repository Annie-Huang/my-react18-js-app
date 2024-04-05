import './App.css';
import { useState } from 'react';

const PhoneBookForm = () => {
  const initState = {
    id: null,
    firstname: 'Coder',
    lastname: 'Byte',
    phone: '000000',
  };
  const [user, setUser] = useState(initState);

  return (
    <form className='form'>
      <div className='form-row'>
        <label htmlFor='firstName'>First name:</label>
        <input
          type='text'
          name='firstName'
          id='firstName'
          value={user.firstname}
        />
      </div>
      <div className='form-row'>
        <label htmlFor='lastName'>Last name:</label>
        <input
          type='text'
          name='lastName'
          id='lastName'
          value={user.lastname}
        />
      </div>
      <div className='form-row'>
        <label htmlFor='phone'>Phone:</label>
        <input type='text' name='phone' id='phone' value={user.phone} />
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
