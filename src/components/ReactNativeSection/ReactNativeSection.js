import React from 'react';
import { Button } from '../Button/Button';
import './ReactNativeSection.css';

function ReactNativeSection() {
  const onClickReact = () => {
    window.open('https://reactnative.dev/', '_blank');
  };

  const onPlay = () => {
    window.open(
      'https://www.youtube.com/watch?v=JKCgwL-IfgM&t=1s&ab_channel=LevelUpTuts',
      '_blank'
    );
  };

  return (
    <div className='developer-container'>
      <video src='../videos/video-reactNative.mp4' autoPlay loop muted />
      <h1>This is React Native</h1>
      <p>What are you waiting for?</p>
      <div className='developer-btns'>
        <Button
          onClick={onClickReact}
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

export default ReactNativeSection;
