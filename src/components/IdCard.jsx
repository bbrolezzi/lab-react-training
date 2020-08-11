import React from 'react';
import './IdCard.css';

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <div className="idCard">
      <div>
        <img src={picture} alt="" />
      </div>
      <div className="info">
        <p>
          <strong>First Name: </strong>
          {firstName}
        </p>
        <p>
          <strong>Last Name: </strong>
          {lastName}
        </p>
        <p>
          <strong>Gender: </strong>
          {gender}
        </p>
        <p>
          <strong>Height: </strong>
          {height}
        </p>
        <p>
          <strong>Date of Birth: </strong>
          {birth.toString()}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
