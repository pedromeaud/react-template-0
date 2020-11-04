import React from 'react';
import { Button } from '../Button/Button';
import './VueSection.css';

function VueSection() {
  const onClickVue = () => {
    window.open('https://vuejs.org/', '_blank');
  };

  const onPlay = () => {
    window.open('https://www.youtube.com/watch?v=nhBVL41-_Cw&ab_channel=Fireship', '_blank');
  };

  return (
    <div className='developer-container'>
      <video src='../videos/video-vue.mp4' autoPlay loop muted />
      <h1>This is Vue</h1>
      <p>What are you waiting for?</p>
      <div className='developer-btns'>
        <Button
          onClick={onClickVue}
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

export default VueSection;
