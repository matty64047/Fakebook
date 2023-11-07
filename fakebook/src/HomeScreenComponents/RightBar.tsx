import React from 'react';

interface RightBarProps {
  content: string;
}

const RightBar: React.FC<RightBarProps> = ({ content }) => {
  return (
    <div className="mainColumn">
      <p>{content}</p>
    </div>
  );
};

export default RightBar;