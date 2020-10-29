import React, { useState } from 'react';
import './TopBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faShoppingCart, faSearch, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import Selection from './img/Selection.png';



const TopBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openSlideMenu = () => {
    setIsNavOpen(true);
  }

  const closeSlideMenu = () => {
    setIsNavOpen(false);
  }
  
  
  return (
    <div className='top-bar-container'>
        <ul className="slide-nav">
        <a href="#">Log In</a>
        <a href="#">Sign Up</a>
        <a href="#">Sign Out</a>
      </ul>

      <div className='top-items-one'>
      <a href="#" onClick={openSlideMenu}>
            <FontAwesomeIcon className="fa fa-bars" icon={faBars} style={{color: 'black', fontSize: '20px'}}/>
        </a>

          {/* <a href="#" onClick={closeSlideMenu}>
          <FontAwesomeIcon className='close-icon' icon={faWindowClose} style={{color: 'black', fontSize: '20px', }}/>
        </a> */}
        <img className='store-logo' src={Selection} alt='store-logo' />
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
