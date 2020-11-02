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

        {props.homepage ? <img className='store-logo' src={Selection} alt='store-logo' /> : <p className='browse'>Browse</p>}
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
        <form className='form'>
      <input className='input' />
      <button>GO</button>
      </form>
      </div>

      </div>


    </div>
  )
}

export default TopBar;
