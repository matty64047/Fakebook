import React, { useState } from 'react';
import './Login.css';

interface HomeProps {
  handleLogin: () => void;
}


export const Login: React.FC<HomeProps> = ({ handleLogin }) => {
  const [username, setUsername] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  return(
    <div className="content">
      <div className="flex-div">
        <div className="name-content">
          <h1 className="logo">Facebook</h1>
          <p>Connect with friends and the world around you on Facebook.</p>
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
          <button className="login">Log In</button>
          <a href="#">Forgot Password ?</a>
          <button onClick={handleLogin} className="create-account">Create New Account</button>
        </form>
      </div>
    </div>
  )
}
export default Login;
