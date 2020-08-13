import React from 'react';
import './App.css';
import IdCard from './components/IdCard/IdCard';
import Greetings from './components/Greetings/Greetings';
import Random from './components/Random/Random';
import BoxColor from './components/BoxColor/BoxColor';
import LikeButton from './components/LikeButton/LikeButton';
import ClickablePicture from './components/ClickablePicture/ClickablePicture';
import NumbersTable from './components/NumbersTable/NumbersTable';
import Facebook from './components/Facebook/Facebook';
import SignupPage from './components/SignupPage/SignupPage';

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
        <h1>BoxColor</h1>
        <div>
          <BoxColor r={255} g={0} b={0} />
          <BoxColor r={128} g={255} b={0} />
        </div>
      </div>
      <div>
        <h1>LikeButton</h1>
        <LikeButton />
        <LikeButton />
      </div>
      <div>
        <h1>ClickablePicture</h1>
        <ClickablePicture
          img="/img/persons/maxence.png"
          imgClicked="/img/persons/maxence-glasses.png"
        />
      </div>
      <div>
        <h1>NumbersTable</h1>
        <NumbersTable limit={12} />
      </div>
      <div>
        <h1>Facebook</h1>
        <Facebook />
      </div>
      <div>
        <h1>SignupPage</h1>
        <SignupPage />
      </div>
    </div>
  );
}

export default App;
