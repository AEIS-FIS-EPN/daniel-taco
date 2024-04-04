import "../value-stadistics/value-stadistics.css"
import React from 'react';
import Stadistic from './stadistic/stadistic';

const ValueStadistics = ({ statistics }) => {
  return (
    <div className="container-principal-stadistic"> 
      <h1 className="title-stadistic">Value Statistics</h1>
      <div className='container-description-stadistic'>
        {statistics.map((item, index) => (
          <Stadistic key={index} number={item.number} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default ValueStadistics;
