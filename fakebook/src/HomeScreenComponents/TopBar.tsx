import React from 'react';
import './TopBar.css'

interface TopBarProps {
  content: string;
  handleLogout: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ content, handleLogout }) => {
  var well={
    boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
  }
  return (
    <nav style={well}>
        
        <div className='nav__left'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/100px-Facebook_f_logo_%282019%29.svg.png' />
          <div className='nav__search'>
            <i className="material-icons">search</i>
            <input type='text' placeholder="Search Facebook"/>
          </div>
        </div>

        <div className='nav__mid'>
            <a href='#' className='icon'>
              <i className='material-icons'>home</i>
            </a>
            <a href='#' className='icon'>
              <i className='material-icons'>slideshow</i>
            </a>
            <a href='#' className='icon'>
              <i className='material-icons'>groups</i>
            </a>
            <a href='#' className='icon'>
              <i className='material-icons'>gamepad</i>
            </a>
        </div>

        <div className="nav__right">
            <a href='#' className="avatar">
                <img className='avatar__img' src='https://image.cnbcfm.com/api/v1/image/106330923-1578676182018gettyimages-1178141599.jpeg?v=1584633147&w=1400&h=950' />
                <span id="name-label"><strong>Mark</strong></span>
            </a>
            <div className="buttons">
                <a href="#"><i className='material-icons'>add</i></a>
                <a href="#"><i className='material-icons'>messenger</i></a>
                <a href="#"><i className='material-icons'>notifications</i></a>
                <a href="#" className='dropdown'><i className='material-icons'>arrow_drop_down</i>
                <div className="dropdown-content">
                  <a onClick={handleLogout}>Logout</a>
                </div>
                </a>
            </div>
        </div>
    </nav>
  );
};

export default TopBar;