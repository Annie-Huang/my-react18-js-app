import React, { useState } from 'react';

/*
2. Counter App
Though it sounds simple, a counter app can be extended in numerous ways to test understanding of state, props,
and event handling. Challenges might include implementing increment, decrement, reset functionality,
or making the counter persist its state between page reloads.
*
*/
const Counter = () => {
  const initialValue = 0;
  const [count, setCount] = useState(initialValue);

  return (
    <div style={{ display: 'grid', gap: '1em', marginTop: '1em' }}>
      <div>Current count: {count}</div>
      <div style={{ display: 'flex', gap: '1em' }}>
        <button type='button' onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button type='button' onClick={() => setCount(count - 1)}>
          Decrement
        </button>
        <button type='button' onClick={() => setCount(initialValue)}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
