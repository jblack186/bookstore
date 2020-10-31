import React, {useState} from 'react';
import './Home.scss';
import TopBar from './TopBar';
import Hero from './img/book-hero.jpg';
import Card from './CardCarousel';
import Books from './img/bookonshelf.png';
import Footer from './Footer';

const Home = (props) => {
  const [isNavOpenClosed, setIsNavOpenClosed] = useState(false)

  const closeNav = () => {
    setIsNavOpenClosed(true);
  }

  return (
    <>
      <TopBar isNavOpenClosed={isNavOpenClosed} />
      <div className='home-container'>
        <img onClick={closeNav} className="hero" src={Hero} alt="store-hero" />
        <section className='header'>
          <img className='book-logo' src={Books} alt='book-logo' />
          <h1>The best online Selection </h1>
          <p>The bookstore app thay you've been waiting for. This online library will keep you busy.</p>
          <button>Get Started Here</button>
        </section>

      </div>
      <div className='recommendations'>
        <div className='rec-list'>
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