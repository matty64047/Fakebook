import React, { useState } from 'react';
import './Login.css';

interface LoginProps {
  handleLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ handleLogin }) => {
  const [username, setUsername] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const handleLoginClick = () => {
    handleLogin();
  };

  return(
    <div className="content">
      <div className="flex-div">
        <div className="name-content">
          <h1 className="logo">Fakebook</h1>
          <p>Connect with friends and the world around you on Fakebook.</p>
        </div>
        <form>
          <input type="text" placeholder="Email or Phone Number" required onChange={e =>{
            setUsername(e.target.value);
            e.preventDefault();
          }} />
          <input type="password" placeholder="Password" required onChange={e => {
            setPassword(e.target.value);
            e.preventDefault();
          }}/>
          <button onClick={handleLoginClick} className="login">Log In</button>
          <a href="#">Forgot Password ?</a>
          <button className="create-account">Create New Account</button>
        </form>
      </div>
    </div>
  )
};

export default Login;
