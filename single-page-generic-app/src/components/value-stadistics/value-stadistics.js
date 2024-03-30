import React from 'react';
import Stadistic from './stadistic/stadistic';

const ValueStadistics = ({ statistics }) => {
  return (
    <div>
      <h1>Value Statistics</h1>
      {statistics.map((item, index) => (
        <Stadistic key={index} number={item.number} text={item.text} />
      ))}
    </div>
  );
};

export default ValueStadistics;
