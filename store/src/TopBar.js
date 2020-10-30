import React, { useState } from 'react';
import './TopBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faShoppingCart, faSearch, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import Selection from './img/Selection.png';



const TopBar = (props) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openSlideMenu = () => {
    setIsNavOpen(!isNavOpen);
  }

  const closeSlideMenu = () => {
    setIsNavOpen(false);
  }
  console.log(props)
  
  return (
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

          {/* <a href="#" onClick={closeSlideMenu}>
          <FontAwesomeIcon className='close-icon' icon={faWindowClose} style={{color: 'black', fontSize: '20px', }}/>
        </a> */}
        <img className='store-logo' src={Selection} alt='store-logo' />
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
          <FontAwesomeIcon className='top-item' icon={faShoppingCart} />
        </div>
        <FontAwesomeIcon className='top-item' icon={faSearch} />
      </div>


    </div>
  )
}

export default TopBar;
