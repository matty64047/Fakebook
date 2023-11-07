import React from 'react';

interface HomeProps {
  handleLogout: () => void;
}

const Home: React.FC<HomeProps> = ({ handleLogout }) => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <button onClick={handleLogout}>Logout</button>
      {/* Add more content for the Home screen */}
    </div>
  );
};

export default Home;
