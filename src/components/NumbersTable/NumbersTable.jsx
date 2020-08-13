import React from 'react';
import './NumbersTable.css';

const NumbersTable = ({ limit }) => {
  let list = [];
  for (let i = 1; i <= limit; i++) {
    list.push(i);
  }
  return (
    <div className="NumbersTable">
      {list.map((limit) => {
        if (limit % 2 === 0) {
          return (
            <div key={limit} className="Even">
              <p>{limit}</p>
            </div>
          );
        } else {
          return (
            <div key={limit} className="Odd">
              <p>{limit}</p>
            </div>
          );
        }
      })}
    </div>
  );
};

export default NumbersTable;
