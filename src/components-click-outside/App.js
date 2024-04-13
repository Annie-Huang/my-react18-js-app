import React, { useRef, useState } from 'react';
import LoginModal from './components-click-outside/LoginModal';
import './App.css';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);

  const onModalClose = () => {
    if (buttonRef) {
      buttonRef.current.focus();
    }
    setIsOpen(false);
  };

  return (
    <div className='App-container'>
      <p>
        You are logged out.{' '}
        <button onClick={() => setIsOpen(true)} ref={buttonRef}>
          Login
        </button>
      </p>
      {isOpen && <LoginModal onClose={onModalClose} />}
    </div>
  );
}
