import React from 'react';
import './RightBar.css'

interface RightBarProps {
  content: string;
}

function openForm() {
  document.getElementById("myForm")!.style.display = "block";
}

function closeForm() {
  document.getElementById("myForm")!.style.display = "none";
}

const RightBar: React.FC<RightBarProps> = ({ content }) => {
  return (
    <body>
      <div className="sidebar">
        <ul>
          <li><a className="active" href="#Friends_List" onClick={openForm}>Friends List</a></li>
          <li><a href="#Mike_Tyson" onClick={openForm}>Mike Tyson</a></li>
          <li><a href="#Jesus" onClick={openForm}>Jesus</a></li>
          <li><a href="#Geralt_of_Rivia" onClick={openForm}>Geralt of Rivia</a></li>
        </ul>
      </div>
      <div className="chat-popup" id="myForm">
        <form action="/action_page.php" className="form-container">
          <h1>Chat</h1>
          <label htmlFor="msg"><b>Message</b></label>
          <textarea placeholder="Type message.." name="msg" required></textarea>
          <button type="submit" className="btn">Send</button>
          <button type="button" className="btn cancel" onClick={closeForm}>Close</button>
        </form>
      </div>
    </body>
  );
};

export default RightBar;