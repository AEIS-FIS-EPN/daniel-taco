import React from 'react';

const Service = ({ title, imageSrc, description }) => {
  return (
    <div className="service">
      <h2>{title}</h2>
      <img src={imageSrc} alt={title} />
      <p>{description}</p>
    </div>
  );
};

export default Service;
