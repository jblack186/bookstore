import React, { useState, useEffect } from 'react';
import './TopBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faShoppingCart, faSearch, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import Selection from './img/Selection.png';
import axios from 'axios';
import {NavLink, useHistory} from 'react-router-dom';


const TopBar = (props) => { 
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [apiKey, setApiKey] = useState("AIzaSyCnGiOUTd7RBgYr-c-_AzYRmg3fQjaVBO8");
  const [books, setBooks] = useState([]);
  const [home, setHome] = useState();
  let history = useHistory();
  useEffect(() => {
    setHome(props.homepage)
  }, [])

  const send = (e) => {
    history.push('/filter')
  }


  const changeHandler = (e) => {
    setSearch(e.target.value)
  }
  

  const openSlideMenu = () => {
    setIsNavOpen(!isNavOpen);
  }

  const closeSlideMenu = () => {
    setIsNavOpen(false);
  }


  
  return (
    <div>
    <div className='top-bar-container'>
      <div className="nav-blur-container">
      <div className="nav-blur-flex">
      <ul className={isNavOpen === true ? "slide-nav" : "close-nav"}>
        <div className='nav-list'>
          <a href="#">Log In</a>
          <a href="#">Sign Up</a>
          <a href="#">Sign Out</a>
        </div>
      </ul>
      <div onClick={closeSlideMenu} className="blur">
      </div>
</div>

      </div>
      <div className='top-items-one'>
      <a href="#" onClick={openSlideMenu}>
            <FontAwesomeIcon className="fa fa-bars" icon={faBars} />
        </a>

        <NavLink to='/home'><img className='store-logo' src={Selection} alt='store-logo' /></NavLink>
        <div className='login'>
        <a href="#" onClick={openSlideMenu}>
            Login
        </a>
        <a href="#" onClick={openSlideMenu}>
            Signup
        </a>
        </div>
      </div>
      <div className='top-items-two'>
        <div className='cart'>
          <FontAwesomeIcon className='top-item cart' icon={faShoppingCart} />
        </div>
        <form onSubmit={send} className='form'>
      <input onChange={changeHandler} className='input' />
      <NavLink to='/filtered'><button type='submit' onClick={send}>GO</button></NavLink>
      </form>
      </div>

      </div>


    </div>
  )
}

export default TopBar;
