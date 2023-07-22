import React from 'react';

const OddNumbers = ({ maxLimit }) => {
  const odds = [];
  for (let i = 1; i <= maxLimit; i += 2) {
    odds.push(i);
  }

  return (
    <div>
      <h2>Odd Numbers</h2>
      <p>Numbers : [{odds.join(', ')}]</p>
    </div>
  );
};

export default OddNumbers;
