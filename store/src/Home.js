import React, {useState} from 'react';
import './Home.scss';
import TopBar from './TopBar';
import Hero from './img/book-hero.jpg';
import Card from './CardCarousel';
import Books from './img/bookonshelf.png';
import Footer from './Footer';
import {NavLink} from 'react-router-dom';

const Home = (props) => {
  const [isNavOpenClosed, setIsNavOpenClosed] = useState(false)
  const [homepage, setHomePage] = useState(true);

  const closeNav = () => {
    setIsNavOpenClosed(true);
  }

  return (
    <>
      <TopBar homepage={homepage} isNavOpenClosed={isNavOpenClosed} />
      <div className='home-container'>
        <img onClick={closeNav} className="hero" src={Hero} alt="store-hero" />
        <section className='header'>
          <img className='book-logo' src={Books} alt='book-logo' />
          <h1>The best online Selection </h1>
          <p>The bookstore app thay you've been waiting for. This online library will keep you busy.</p>
          <NavLink to='/browse'><button>Get Started Here</button></NavLink>
        </section>

      </div>
      <div className='recommendations'>
        <div>
          <div className='card-component'>
          <Card books={props.books} />
          </div>
        </div>
      </div>
      <div className='foot' >
        <Footer />
      </div>
    </>
  )
}

export default Home;