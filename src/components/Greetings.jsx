import React from 'react';
import './Greetings.css';

const Greetings = ({ lang, children }) => {
  let message;
  switch (lang) {
    case 'de':
      message = 'Hallo';
      break;
    case 'fr':
      message = 'Bonjour';
      break;
    case 'es':
      message = 'Hola';
      break;
    case 'en':
      message = 'Hello';
      break;
    default:
      message = 'Olá';
  }
  return (
    <div className="Greetings">
      <p>
        {message} {children}
      </p>
    </div>
  );
};

export default Greetings;
