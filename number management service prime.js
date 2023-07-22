import React from 'react';

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const Prime = ({ maxLimit }) => {
  const primes = [];
  for (let i = 2; i <= maxLimit; i++) {
    if (isPrime(i)) primes.push(i);
  }

  return (
    <div>
      <h2>Prime Numbers</h2>
      <p>Numbers : [{primes.join(', ')}]</p>
    </div>
  );
};

export default Prime;
