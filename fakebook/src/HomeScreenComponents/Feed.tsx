import React from 'react';

interface FeedProps {
  content: string;
}

const Feed: React.FC<FeedProps> = ({ content }) => {
  return (
    <div className="mainColumn">
      <p>{content}</p>
    </div>
  );
};

export default Feed;