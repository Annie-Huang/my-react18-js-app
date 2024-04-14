import { useEffect, useRef } from 'react';

/*
import { useState } from 'react';
import usePrevious from './usePrevious';

function App() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <div>
      <h1>Counter Application</h1>
      <h2>Current Count: {count}</h2>
      <h2>Previous Count: {prevCount}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default App;
* */

// 1st method, use 2 Ref, this is easier to understand for me.
const usePrevious = (currValue) => {
  const currRef = useRef(currValue);
  const prevRef = useRef();

  if (currValue !== currRef.current) {
    prevRef.current = currRef.current;
    currRef.current = currValue;
  }

  console.log('currValue=', currValue);
  console.log('currRef.current=', currRef.current);
  console.log('prevRef.current=', prevRef.current);
  console.log('-------------------------------------------');

  return prevRef.current;
};

export default usePrevious;
