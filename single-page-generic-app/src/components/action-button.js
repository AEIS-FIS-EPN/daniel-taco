import '../components/components.css'
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ActionButton = ({ buttonName, redirectPath }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(redirectPath);
  };

  return (
    <button className='buttons-header' onClick={handleClick}>
      {buttonName}
    </button>
  );
};

export default ActionButton;