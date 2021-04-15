import React from 'react';

function BoxColor(props) {
  const backGround = {
    backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
    height: 200,
  };
  return (
    <div className="d-flex justify-content-center" style={backGround}>
      rgb({props.r},{props.g},{props.b})
    </div>
  );
}

export default BoxColor;
