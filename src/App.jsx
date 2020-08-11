import React from 'react';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';

function App() {
  return (
    <div>
      <h1>IdCard</h1>
      <div>
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date('1992-07-14').toDateString()}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
      </div>
      <div>
        <IdCard
          lastName="Delores"
          firstName="Obrien"
          gender="female"
          height={172}
          birth={new Date('1988-05-11').toDateString()}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>
      <div>
        <h1>Greetings</h1>
        <div>
          <Greetings lang="de">Ludwig</Greetings>
          <Greetings lang="fr">François</Greetings>
        </div>
      </div>
      <div>
        <h1>Random</h1>
        <div>
          <Random min={1} max={6} />
          <Random min={1} max={100} />
        </div>
      </div>
      <div>
        <h1>Box Color</h1>
        <div>
          <BoxColor r={255} g={0} b={0} />
          <BoxColor r={128} g={255} b={0} />
        </div>
      </div>
    </div>
  );
}

export default App;