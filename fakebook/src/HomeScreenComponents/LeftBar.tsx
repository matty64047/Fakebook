import React from 'react';
import './LeftBar.css'


interface LeftBarProps {
  content: string;
}


const LeftBar: React.FC<LeftBarProps> = ({ content }) => {
  
  return (
    <body>
      <div className="leftSidebar">
        <ul>
          <li><a className="active" href="#home">Home</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </div>
    </body>
  );
};

export default LeftBar;