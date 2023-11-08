import React, { useState } from 'react';
import './Feed.css'


interface FeedProps {
  content: string;
}

const Emojis = () => {
  const [activeEmoji, setActiveEmoji] = useState<number | null>(null);
  const emojis = ['😀', '😍', '😲', '😡', '💘'];

  const handleEmojiClick = (index: number) => {
    if (activeEmoji === index) {
      setActiveEmoji(null);
    } else {
      setActiveEmoji(index);
    }
  };

  return (
    <div className="emojis">
      {emojis.map((emoji, index) => (
        <div
          key={index}
          className={`emoji ${activeEmoji === index ? 'active' : ''}`}
          onClick={() => handleEmojiClick(index)}
        >
          {emoji}
        </div>
      ))}
    </div>
  );
};

const Feed: React.FC<FeedProps> = ({ content }) => {
  return (
    <body>
    <div className="feed">
        
        <div className="post">
            <div className="user-info">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg" alt="Profile Picture"></img>
                <h3>User One</h3>
            </div>
            <p className="post-content">This is the first fake post! Hello, world!</p>
            <Emojis></Emojis>
        </div>
        
        <div className="post">
            <div className="user-info">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg" alt="Profile Picture"></img>
                <h3>User Two</h3>
            </div>
            <p className="post-content">Here's another fake post for the feed.</p>
        </div>

        <div className="post">
            <div className="user-info">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg" alt="Profile Picture"></img>
                <h3>User Two</h3>
            </div>
            <p className="post-content">Here's another fake post for the feed.</p>
        </div>

        <div className="post">
            <div className="user-info">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg" alt="Profile Picture"></img>
                <h3>User Two</h3>
            </div>
            <p className="post-content">Here's another fake post for the feed.</p>
        </div>

        <div className="post">
            <div className="user-info">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg" alt="Profile Picture"></img>
                <h3>User Two</h3>
            </div>
            <p className="post-content">Here's another fake post for the feed.</p>
        </div>

        <div className="post">
            <div className="user-info">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg" alt="Profile Picture"></img>
                <h3>User Two</h3>
            </div>
            <p className="post-content">Here's another fake post for the feed.</p>
        </div>

        <div className="post">
            <div className="user-info">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg" alt="Profile Picture"></img>
                <h3>User Two</h3>
            </div>
            <p className="post-content">Here's another fake post for the feed.</p>
        </div>

        <div className="post">
            <div className="user-info">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg" alt="Profile Picture"></img>
                <h3>User Two</h3>
            </div>
            <p className="post-content">Here's another fake post for the feed.</p>
        </div>

        <div className="post">
            <div className="user-info">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg" alt="Profile Picture"></img>
                <h3>User Two</h3>
            </div>
            <p className="post-content">Here's another fake post for the feed.</p>
        </div>

        
    </div>
</body>
  );
};

export default Feed;