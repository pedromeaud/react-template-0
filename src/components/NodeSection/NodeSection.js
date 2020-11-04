import React from 'react';
import { Button } from '../Button/Button';
import './NodeSection.css';

function NodeSection() {
  let onClickNode = () => {
    window.open('https://nodejs.org/en/about/', '_blank');
  };

  let onPlay = () => {
    window.open(
      'https://www.youtube.com/watch?v=uVwtVBpw7RQ&ab_channel=ProgrammingwithMosh',
      '_blank'
    );
  };

  return (
    <div className='developer-container'>
      <video src='../videos/video-node.mp4' autoPlay loop muted />
      <h1>This is Node</h1>
      <p>What are you waiting for?</p>
      <div className='developer-btns'>
        <Button
          onClick={onClickNode}
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

export default NodeSection;
