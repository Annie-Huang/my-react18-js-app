import React, { useEffect, useState } from 'react';

/*const CountDownClock = () => {
  // new Date().toLocaleString()        '4/6/2024, 4:02:19 PM'
  // new Date().toLocaleDateString()    '4/6/2024'
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div>Current Time: {currentTime}</div>;
};

export default CountDownClock;*/

const CountDownNumber = ({ initialNumber }) => {
  const [currentNumber, setCurrentNumber] = useState(initialNumber);

  useEffect(() => {
    if (currentNumber > 0) {
      const timeoutId = setTimeout(() => {
        setCurrentNumber(currentNumber - 1);
      }, 1000);

      // return () => clearTimeout(timeoutId);
    }
  }, [currentNumber]);

  return <div>Current Number: {currentNumber}</div>;
};

export default CountDownNumber;
