import React from 'react';
import '../../App.css';
import { Button } from '../Button/Button';
import './DeveloperSection.css';

function DeveloperSection() {
  return (
    <div className='developer-container'>
      <video src='../videos/video.mp4' autoPlay loop muted />
      <h1>Programming Awaits</h1>
      <p>What are you waiting for?</p>
      <div className='developer-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
          GET STARTED
        </Button>
        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default DeveloperSection;
