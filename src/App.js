import './App.css';
import { useState } from 'react';

const PhoneBookForm = ({ addUser }) => {
  const initState = {
    id: null,
    firstName: 'Coder',
    lastName: 'Byte',
    phone: '000000',
  };
  const [user, setUser] = useState(initState);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user.firstName || !user.lastName || !user.phone) return;

    addUser(user);
    setUser(initState);
  };

  // console.log('user', user);

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='form-row'>
        <label htmlFor='firstName'>First name:</label>
        <input
          type='text'
          name='firstName'
          id='firstName'
          value={user.firstName}
          onChange={handleChange}
        />
      </div>
      <div className='form-row'>
        <label htmlFor='lastName'>Last name:</label>
        <input
          type='text'
          name='lastName'
          id='lastName'
          value={user.lastName}
          onChange={handleChange}
        />
      </div>
      <div className='form-row'>
        <label htmlFor='phone'>Phone:</label>
        <input
          type='text'
          name='phone'
          id='phone'
          value={user.phone}
          onChange={handleChange}
        />
      </div>
      <button type='submit'>Add User</button>
    </form>
  );
};
const App = () => {
  const handleAddUser = (user) => {
    console.log('aaa', user);
  };

  return (
    <div className='container'>
      <PhoneBookForm addUser={handleAddUser} />
    </div>
  );
};

export default App;
