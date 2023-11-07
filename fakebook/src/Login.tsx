import React from 'react';

interface LoginProps {
  handleLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ handleLogin }) => {
  const handleLoginClick = () => {
    // Simulating login, this could be replaced with actual login logic
    handleLogin();
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLoginClick}>Login</button>
      {/* Add login form or other components for the Login screen */}
    </div>
  );
};

export default Login;
