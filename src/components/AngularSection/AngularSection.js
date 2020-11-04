import React from 'react';
import { Button } from '../Button/Button';
import './AngularSection.css';

function AngularSection() {
  const onClickAngular = () => {
    window.open('https://angular.io/', '_blank');
  };

  const onPlay = () => {
    window.open('https://www.youtube.com/watch?v=WAZTZUgeLhQ&ab_channel=JsWiz', '_blank');
  };

  return (
    <div className='developer-container'>
      <video src='../videos/video-angular.mp4' autoPlay loop muted />
      <h1>This is Angular</h1>
      <p>What are you waiting for?</p>
      <div className='developer-btns'>
        <Button
          onClick={onClickAngular}
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          LEARN MORE
        </Button>
        <Button
          onClick={onPlay}
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          WATCH VIDEO <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default AngularSection;
