import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import IdCards from './IdCards';
import Greetings from './Greetings';
import Random from './Random';
import BoxColor from './BoxColor';
import CreditCard from './CreditCard';
import Ratings from './Ratings';
import DriverCard from './DriveCard';
import LikeButton from './LikeButton';
import ClickablePicture from './ClickablePicture';
import Dice from './Dice';
import Carousel from './Carousel';
import NumbersTable from './NumbersTable';
import FaceBook from './FaceBook';
import SignupPage from './SignupPage';

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
      <h1>Ratings</h1>
      <Ratings>0</Ratings>
      <Ratings>1.49</Ratings>
      <Ratings>1.5</Ratings>
      <Ratings>3</Ratings>
      <Ratings>4</Ratings>
      <Ratings>5</Ratings>
      <h1>DriverCard</h1>
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: 'Toyota Corolla Altis',
          licensePlate: 'CO42DE',
        }}
      />
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: 'Audi A3',
          licensePlate: 'BE33ER',
        }}
      />
      <h1 className="title">LikeButton</h1>
      <LikeButton /> <LikeButton />
      <h1>ClickablePicture</h1>
      <ClickablePicture
        img="/src/img/persons/maxence.png"
        imgClicked="/src/img/persons/maxence-glasses.png"
      />
      <Dice />
      <h1 className="title">Carousel</h1>
      <Carousel
        imgs={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg',
        ]}
      />
      <h1 className="title">NumbersTable</h1>
      <NumbersTable limit={12} />
      <h1 className="title">FaceBook</h1>
      <FaceBook />
      <h1 className="title">SignupPage</h1>
      <SignupPage />
    </div>
  );
}

export default App;
