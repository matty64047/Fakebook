import React from 'react';
import './Home.css';
import Feed from './HomeScreenComponents/Feed';
import LeftBar from './HomeScreenComponents/LeftBar';
import RightBar from './HomeScreenComponents/RightBar';
import TopBar from './HomeScreenComponents/TopBar';

interface HomeProps {
  handleLogout: () => void;
}

const Home: React.FC<HomeProps> = ({ handleLogout }) => {
  return (
    <div id="box">
      <div id="fixed">
        <TopBar content=''></TopBar>
        <div className="horizontal-line"></div>
      </div>
      <div className="container" id="remaining">
        <div className="leftColumn"><LeftBar content=''></LeftBar></div>
        <div className="mainColumn"><Feed content=''></Feed></div>
        <div className="rightColumn"><RightBar content=''></RightBar></div>
      </div>
    </div>
  );
};

export default Home;
