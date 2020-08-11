import React from 'react';
import './Random.css';

const Random = ({ min, max }) => {
  function GetRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return (
    <div className="Random">
      <p>
        Random value between {min} and {max} => {GetRandom(min, max)}
      </p>
    </div>
  );
};

export default Random;
