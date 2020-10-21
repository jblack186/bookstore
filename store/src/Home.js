import React, {useState} from 'react';
import './Home.scss';
import TopBar from './TopBar';
import Hero from './img/book-hero.jpg';

const Home = () => {
  return (
    <div>
      <TopBar />
      <img className="hero" src={Hero} alt="store-hero" />
    </div>
  )
}

export default Home;