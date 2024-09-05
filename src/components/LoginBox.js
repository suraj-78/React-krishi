import React from 'react';
import Card from './Card';
import './LoginBox.css';

const LoginBox = () => {
  return (
    <div className="login-box">
      <Card title="FARMER" />
      <Card title="CONTRACTOR" />
    </div>
  );
};

export default LoginBox;
