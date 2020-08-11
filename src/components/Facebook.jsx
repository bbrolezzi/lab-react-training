import React from 'react';
import profiles from './../data/berlin.json';

const Facebook = () => {
  return (
    <div className="Facebook">
      {profiles.map((profile) => {
        return (
          <div className="Profile" key={profile.img}>
            <img src={profile.img} alt="Ironhack-staff" />
            <div className="StaffInfo">
              <p>
                <strong>First Name: </strong>
                {profile.firstName}
              </p>
              <p>
                <strong>Last Name: </strong>
                {profile.lastName}
              </p>
              <p>
                <strong>Country: </strong>
                {profile.country}
              </p>
              <p>
                <strong>Type: </strong>
                {profile.isStudent}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Facebook;
