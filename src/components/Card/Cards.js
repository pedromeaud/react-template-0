import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC technologies!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/reactjs.png'
              text='React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.'
              label='Technology'
              path='/services'
            />
            <CardItem
              src='https://blog.schoolofnet.com/wp-content/uploads/2018/02/img-nodejs.jpg'
              text='Node.js® is a JavaScript runtime built on Chromes V8 JavaScript engine.'
              label='Technology'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/reactjs.png'
              text='React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.'
              label='Technology'
              path='/services'
            />
            <CardItem
              src='https://blog.schoolofnet.com/wp-content/uploads/2018/02/img-nodejs.jpg'
              text='Node.js® is a JavaScript runtime built on Chromes V8 JavaScript engine.'
              label='Technology'
              path='/services'
            />
            <CardItem
              src='https://blog.schoolofnet.com/wp-content/uploads/2018/02/img-nodejs.jpg'
              text='Node.js® is a JavaScript runtime built on Chromes V8 JavaScript engine.'
              label='Technology'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
