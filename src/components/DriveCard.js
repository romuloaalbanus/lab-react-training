import React from 'react';
import Rating from './Ratings';

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div className="driverCard">
      {/* <img className="img-driverCard" src={img} style="width: 10px" /> */}
      <div className="info-driverCard">
        <div className="name-driverCard">
          <h2>{name}</h2>
        </div>
        <div>
          <h3 className="rating-driverCard">
            <Rating>{rating}</Rating>
          </h3>
        </div>
        <div>
          <p className="car-driverCard">
            {car.model}-{car.licensePlate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DriverCard;
