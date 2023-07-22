import React from 'react';

const TrainScheduleApp = () => {
  const trainSchedule = [
    { trainNumber: 'TR123', destination: 'City A', departureTime: '09:00' },
    { trainNumber: 'TR456', destination: 'City B', departureTime: '10:30' },
    { trainNumber: 'TR789', destination: 'City C', departureTime: '12:15' },

  ];

  return (
    <div>
      <h1>Train Schedule</h1>
      <table>
        <thead>
          <tr>
            <th>Train Number</th>
            <th>Destination</th>
            <th>Departure Time</th>
          </tr>
        </thead>
        <tbody>
          {trainSchedule.map((train, index) => (
            <tr key={index}>
              <td>{train.trainNumber}</td>
              <td>{train.destination}</td>
              <td>{train.departureTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrainScheduleApp;
