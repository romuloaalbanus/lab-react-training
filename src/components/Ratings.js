import React from 'react';

const Ratings = ({ children }) => {
  const getStars = () => {
    const rate = Math.round(Number(children));
    switch (rate) {
      case 1:
        return '★☆☆☆☆';
      case 2:
        return '★★☆☆☆';
      case 3:
        return '★★★☆☆';
      case 4:
        return '★★★★☆';
      case 5:
        return '★★★★★';
      default:
        return '☆☆☆☆☆';
    }
  };

  return <div className="Ratings__style">{getStars()}</div>;
};

export default Ratings;
