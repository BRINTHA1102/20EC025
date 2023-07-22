import React from 'react';

const RandomNumbers = ({ count, min, max }) => {
  const randoms = [];
  for (let i = 0; i < count; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    randoms.push(randomNumber);
  }

  return (
    <div>
      <h2>Random Numbers</h2>
      <p>Numbers : [{randoms.join(', ')}]</p>
    </div>
  );
};

export default RandomNumbers;
