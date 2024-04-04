import "../service/service.css"
import React from 'react';

const Service = ({ title, imageSrc, description }) => {
  return (
    <div>
      <div className="container-service-title">
        <img src={imageSrc} alt={title} />
        <h2>{title}</h2>

      </div>
      <div className="container-service-description">
        <p className="text-service-description">{description}</p>

      </div>

    </div>
  );
};

export default Service;
