import React from 'react';

interface LeftBarProps {
  content: string;
}

const LeftBar: React.FC<LeftBarProps> = ({ content }) => {
  return (
    <div className="mainColumn">
      <p>{content}</p>
    </div>
  );
};

export default LeftBar;