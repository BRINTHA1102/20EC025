import React from 'react';

const TrainList = ({ trains }) => {
  return (
    <div>
      <h2>Train List</h2>
      <ul>
        {trains.map((train) => (
          <li key={train.id}>
            <strong>Train Number:</strong> {train.trainNumber},{' '}
            <strong>Destination:</strong> {train.destination},{' '}
            <strong>Departure Time:</strong> {train.departureTime}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainList;
