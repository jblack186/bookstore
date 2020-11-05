import React, {useState, useEffect} from 'react';
import './Homes.css';
import TopBar from './TopBar';
import Hero from './img/jeremy-bishop-G9i_plbfDgk-unsplash.jpg';
import Card from './CardCarousel';
import Books from './img/bookonshelf .png';
import Footer from './Footer';
import {NavLink} from 'react-router-dom';

const Home = (props) => {
  const [isNavOpenClosed, setIsNavOpenClosed] = useState(false)
  const [homepage, setHomePage] = useState(true);

  const [name, setName] = useState("");

  const getProfile = async () => {
    try {
      const res = await fetch("http://localhost:5000/dashboard/", {
        method: "POST",
        headers: { jwt_token: localStorage.token }
      });

      const parseData = await res.json();
      setName(parseData.user_name);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProfile()
  }, [])

  const closeNav = () => {
    setIsNavOpenClosed(true);
  }

  console.log(name)
  console.log('name')


  return (
    <>
      <TopBar homepage={homepage} isNavOpenClosed={isNavOpenClosed} />
      <div className='home-container'>
        <img onClick={closeNav} className="hero" src={Hero} alt="store-hero" />
        <section className='header'>
          {/* <img className='book-logo' src={Books} alt='book-logo' /> */}
          <h1>The Online Library</h1>
          <p>The bookstore app you've been waiting for. Get lost in a book.</p>
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