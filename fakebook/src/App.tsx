import React, { useState } from 'react';
import Home from './Home';
import Login from './Login';

interface AppProps {
  // You can define any props here
}

const App: React.FC<AppProps> = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      {isLoggedIn ? (
        <Home handleLogout={handleLogout} />
      ) : (
        <Login handleLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
