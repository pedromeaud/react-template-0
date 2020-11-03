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
              label='React JS'
              path='/react'
            />
            <CardItem
              src='https://blog.schoolofnet.com/wp-content/uploads/2018/02/img-nodejs.jpg'
              text='Node.js® is a JavaScript runtime built on Chromes V8 JavaScript engine.'
              label='Node Js'
              path='/node'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://miro.medium.com/max/1024/1*xDi2csEAWxu95IEkaNdFUQ.png'
              text='React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.'
              label='React Native'
              path='/services'
            />
            <CardItem
              src='https://i.pinimg.com/originals/82/b2/3a/82b23a37bc438fc8808e1f707e0a0bc5.png'
              text='Python is a programming language that lets you work more quickly and integrate your systems more effectively.'
              label='Python'
              path='/services'
            />
            <CardItem
              src='https://i1.wp.com/storage.googleapis.com/blog-images-backup/1*wFL3csJ96lQpY0IVT9SE3w.jpeg?ssl=1'
              text='Vue is a progressive framework for building user interfaces. It is designed from the ground up to be incrementally adoptable, and can easily scale between a library and a framework depending on different use cases. '
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
