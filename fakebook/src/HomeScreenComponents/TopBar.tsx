import React from 'react';

interface TopBarProps {
  content: string;
}

const TopBar: React.FC<TopBarProps> = ({ content }) => {
  return (
    <div className="mainColumn">
      <p>{content}</p>
    </div>
  );
};

export default TopBar;