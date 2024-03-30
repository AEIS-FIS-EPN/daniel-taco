import React from 'react';
import { useNavigate } from 'react-router-dom';

const ActionButton = ({ buttonName, redirectPath }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(redirectPath);
  };

  return (
    <button onClick={handleClick}>
      {buttonName}
    </button>
  );
};

export default ActionButton;