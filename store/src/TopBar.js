import React from 'react';
import './TopBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import Selection from './img/Selection.png';

function TopBar() {
  return (
    <div className='top-bar-container'>
      <div className='top-items-one'>
        <FontAwesomeIcon className='bars' icon={faBars} />
        <img className='store-logo' src={Selection} alt='store-logo' />
      </div>
      <div className='top-items-two'>
        <FontAwesomeIcon className='bars' icon={faShoppingCart} />
        <FontAwesomeIcon className='bars' icon={faSearch} />
      </div>


    </div>
  )
}

export default TopBar;
