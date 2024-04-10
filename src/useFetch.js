import React, { useEffect, useState } from 'react';

/*
6. Custom Hooks
Creating custom hooks for reusable logic (like fetching data, form management, or any custom functionality)
tests understanding of React Hooks, side effects, and custom logic encapsulation.

### 7. **Custom Hooks**
- **Challenge:** Create one or more custom hooks to solve a common problem, such as form handling, fetching data,
or managing local component state. This challenge tests the ability to encapsulate and reuse logic across components using hooks.
 */

/*
  Parent component will call with:
  const { data, loading, error } = useFetch('https://dummyjson.com/usersxxx');
  console.log('annie=', data, loading, error);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return <div>{data.title}</div>
*/
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setData(data);
        setError(null);
      } catch (error) {
        setData(null);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
