import React, { useEffect, useState } from 'react';

const Debounce = () => {
  const [inputValue, setInputValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [inputValue]);

  console.log('inputValue ---> ', inputValue);
  console.log('debouncedValue ---> ', debouncedValue);

  return (
    <input
      type='text'
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
};

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [value, delay]);

  return debouncedValue;
};

export default Debounce;
