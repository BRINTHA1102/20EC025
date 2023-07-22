import React from 'react';

const FibonacciNumbers = ({ count }) => {
  const fibonacci = [0, 1];
  for (let i = 2; i < count; i++) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
  }

  return (
    <div>
      <h2>Fibonacci Numbers</h2>
      <p>Numbers : [{fibonacci.join(', ')}]</p>
    </div>
  );
};

export default FibonacciNumbers;
