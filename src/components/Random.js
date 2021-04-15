import React from 'react';

function Random(props) {
  let getRandom = Math.floor(
    Math.random() * (props.max - props.min) + props.min
  );

  return (
    <div className="Random">
      <p>
        Random value between {props.min} and {props.max} ={'>'} {getRandom}
      </p>
    </div>
  );
}

export default Random;
