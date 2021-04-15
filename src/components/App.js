// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import IdCards from './IdCards';
import Greetings from './Greetings';
import Random from './Random';
import BoxColor from './BoxColor';
import CreditCard from './CreditCard';

function App() {
  return (
    <div className="App">
      <h1>IdCard</h1>
      <IdCards
        lastName="Doe"
        firstName="John"
        gender="male"
        heigth="1,78m"
        birth="1992-07-14"
        image="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCards
        lastName="Dolores"
        firstName="Obrian"
        gender="female"
        heigth="1,72m"
        birth="1988-01-11"
        image="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <h1>Greetings</h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <h1>Random</h1>
      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <h1>BoxColor</h1>
      <div className="BoxColor">
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>

      <h1>CreditCard</h1>
      <div>
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </div>
    </div>
  );
}

export default App;
