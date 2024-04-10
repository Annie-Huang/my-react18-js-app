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

const PhoneBookTable = ({ users }) => {
  return (
    <table>
      <caption>Phone Book:</caption>
      <thead>
        <tr>
          <th scope='col'>First Name</th>
          <th scope='col'>Last Name</th>
          <th scope='col'>Phone</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const App = () => {
  const [users, setUsers] = useState([]);

  const handleAddUser = (user) => {
    // console.log('aaa', user);
    const newUserList = [...users, { ...user, id: users.length + 1 }];
    // newUserList.sort((a, b) =>
    //   a.firstName.toLowerCase() < b.firstName.toLowerCase() ||
    //   (a.firstName.toLowerCase() === b.firstName.toLowerCase() &&
    //     a.lastName.toLowerCase() < b.lastName.toLowerCase())
    //     ? -1
    //     : 1
    // );

    // toLowerCase() is use to compare string.
    newUserList.sort(
      (a, b) =>
        a.firstName.localeCompare(b.firstName) ||
        a.lastName.localeCompare(b.lastName)
    );
    setUsers(newUserList);
  };

  console.log('users', users);
  return (
    <div className='container'>
      <PhoneBookForm addUser={handleAddUser} />
      <PhoneBookTable users={users} />
    </div>
  );
};

export default App;
