import { useEffect, useRef } from 'react';

/*
import { useState } from 'react';
import { usePrevious1 } from './usePrevious';

function App() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious1(count);

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
export const usePrevious1 = (value) => {
  const currRef = useRef(value);
  const prevRef = useRef();

  if (value !== currRef.current) {
    prevRef.current = currRef.current;
    currRef.current = value;
  }

  console.log('value=', value);
  console.log('currRef.current=', currRef.current);
  console.log('prevRef.current=', prevRef.current);
  console.log('-------------------------------------------');

  return prevRef.current;
};

/*
Parent is the same as above except for
import { usePrevious1 } from './usePrevious';
  const prevCount = usePrevious2(count);
* */
// 2nd method, use 1 Ref
export const usePrevious2 = (value) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  console.log('value=', value);
  console.log('ref.current=', ref.current);
  console.log('-------------------------------------------');

  return ref.current;
};
