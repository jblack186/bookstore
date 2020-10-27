import React, {useState} from 'react';
import './Home.scss';
import TopBar from './TopBar';
import Hero from './img/book-hero.jpg';

const Home = () => {
  return (
    <>
      <TopBar />
      <div className='home-container'>
        <img className="hero" src={Hero} alt="store-hero" />
        
      </div>
      <div className='recommendations'>
        <div className='rec-list'>

        </div>
      </div>
    </>
  )
}

export default Home;