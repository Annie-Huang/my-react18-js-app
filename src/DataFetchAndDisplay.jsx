import React, { useEffect, useState } from 'react';

/*
3. Data Fetching and Display
Candidates might be asked to fetch data from a given API and display it in a user-friendly format.
This tests knowledge of side effects in React, working with async/await or Promises, and managing loading/error states.

### 2. **Fetching and Displaying Data**
- **Challenge:** Create a component that fetches data from an API and displays it in a list or table.
This challenge assesses knowledge of lifecycle methods or hooks (`useEffect` for fetching data), asynchronous JavaScript, and state management.
*/
const DataFetchAndDisplay = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        // Error one:
        // const response = await fetch('https://dummyjson.com/usersxxx');

        const response = await fetch('https://dummyjson.com/users');
        // console.log(response);
        const result = await response.json();
        console.log(result);
        setUsers(result.users);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading....</div>;
  if (error)
    return (
      <div>
        Error.... <br />
        {error}
      </div>
    );
  return (
    <section>
      <h2>List of Users</h2>
      {users.length > 0 &&
        users.map((user) => (
          <div key={user.id}>
            {`${user.firstName} ${user.lastName} ${user.email}`}
          </div>
        ))}
    </section>
  );
};

export default DataFetchAndDisplay;
