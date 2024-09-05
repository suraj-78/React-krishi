import React from 'react';
import { useNavigate } from 'react-router-dom'; // Changed useHistory to useNavigate
import './Card.css';

const Card = ({ title }) => {
  const navigate = useNavigate(); // Updated to useNavigate

  const handleLogin = () => {
    if (title === 'FARMER') {
      navigate('/farmer-login'); // Updated to use navigate
    } else {
      navigate('/contractor-login');
    }
  };

  const handleSignup = () => {
    if (title === 'FARMER') {
      navigate('/farmer-signup'); // Updated to use navigate
    } else {
      navigate('/contractor-signup');
    }
  };

  return (
    <div className="box" data-aos={title === 'FARMER' ? 'fade-right' : 'fade-left'}>
      <h2>{title}</h2>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default Card;
